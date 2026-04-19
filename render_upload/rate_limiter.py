"""NexTrade — Rate Limiter Middleware"""
import time
from collections import defaultdict
from dataclasses import dataclass, field
from typing import Dict
from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse
from app_config import settings

@dataclass
class TokenBucket:
    capacity: float
    refill_rate: float
    tokens: float = field(init=False)
    last_refill: float = field(init=False)
    def __post_init__(self):
        self.tokens = self.capacity
        self.last_refill = time.monotonic()
    def consume(self, count=1):
        now = time.monotonic()
        self.tokens = min(self.capacity, self.tokens + (now - self.last_refill) * self.refill_rate)
        self.last_refill = now
        if self.tokens >= count:
            self.tokens -= count
            return True
        return False

class RateLimitMiddleware(BaseHTTPMiddleware):
    def __init__(self, app):
        super().__init__(app)
        self._buckets: Dict[str, Dict[str, TokenBucket]] = defaultdict(lambda: {
            "burst": TokenBucket(capacity=settings.rate_limit_rps, refill_rate=settings.rate_limit_rps),
            "sustained": TokenBucket(capacity=settings.rate_limit_rpm, refill_rate=settings.rate_limit_rpm / 60.0),
        })
        self._cleanup_counter = 0

    async def dispatch(self, request: Request, call_next) -> Response:
        path = request.url.path
        if not (path.startswith("/api/proxy") or (path == "/" and request.query_params.get("url"))):
            return await call_next(request)
        client_ip = request.headers.get("x-forwarded-for", "").split(",")[0].strip() or (request.client.host if request.client else "unknown")
        buckets = self._buckets[client_ip]
        if not buckets["burst"].consume():
            return JSONResponse(status_code=429, content={"error": "Rate limit exceeded (burst)"}, headers={"Retry-After": "1"})
        if not buckets["sustained"].consume():
            return JSONResponse(status_code=429, content={"error": "Rate limit exceeded (sustained)"}, headers={"Retry-After": "30"})
        self._cleanup_counter += 1
        if self._cleanup_counter >= 500:
            now = time.monotonic()
            stale = [ip for ip, b in self._buckets.items() if now - b["sustained"].last_refill > 300]
            for ip in stale: del self._buckets[ip]
            self._cleanup_counter = 0
        response = await call_next(request)
        response.headers["X-RateLimit-Remaining"] = str(int(buckets["sustained"].tokens))
        return response
