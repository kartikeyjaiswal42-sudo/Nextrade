"""
NexTrade Backend — Rate Limiter Middleware
In-memory token-bucket rate limiter keyed by client IP.

This replaces the zero-throttling approach in the old proxy.py.
Prevents external API bans (Yahoo/Stooq) and protects server resources.
"""

import time
from collections import defaultdict
from dataclasses import dataclass, field
from typing import Dict

from fastapi import Request, Response
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import JSONResponse

from app.config import settings


@dataclass
class TokenBucket:
    """Simple token bucket for rate limiting."""
    capacity: float          # Max tokens (burst size)
    refill_rate: float       # Tokens added per second
    tokens: float = field(init=False)
    last_refill: float = field(init=False)

    def __post_init__(self):
        self.tokens = self.capacity
        self.last_refill = time.monotonic()

    def consume(self, count: int = 1) -> bool:
        """Try to consume `count` tokens. Returns True if allowed."""
        now = time.monotonic()
        elapsed = now - self.last_refill
        self.tokens = min(self.capacity, self.tokens + elapsed * self.refill_rate)
        self.last_refill = now

        if self.tokens >= count:
            self.tokens -= count
            return True
        return False


class RateLimitMiddleware(BaseHTTPMiddleware):
    """
    Per-IP rate limiter using token bucket algorithm.

    - Burst bucket: allows `rate_limit_rps` requests/second
    - Sustained bucket: allows `rate_limit_rpm` requests/minute

    Only applies to /api/proxy routes (the heavy external-fetching path).
    Health checks and other lightweight endpoints are exempt.
    """

    def __init__(self, app):
        super().__init__(app)
        # Per-IP buckets: ip -> {"burst": TokenBucket, "sustained": TokenBucket}
        self._buckets: Dict[str, Dict[str, TokenBucket]] = defaultdict(
            lambda: {
                "burst": TokenBucket(
                    capacity=settings.rate_limit_rps,
                    refill_rate=settings.rate_limit_rps,  # Refills fully every second
                ),
                "sustained": TokenBucket(
                    capacity=settings.rate_limit_rpm,
                    refill_rate=settings.rate_limit_rpm / 60.0,  # Refills fully every minute
                ),
            }
        )
        self._cleanup_counter = 0

    async def dispatch(self, request: Request, call_next) -> Response:
        # Only rate-limit the proxy endpoint (the expensive path)
        if not request.url.path.startswith("/api/proxy"):
            return await call_next(request)

        client_ip = self._get_client_ip(request)
        buckets = self._buckets[client_ip]

        # Check both burst and sustained limits
        if not buckets["burst"].consume():
            return JSONResponse(
                status_code=429,
                content={
                    "error": "Rate limit exceeded",
                    "detail": f"Max {settings.rate_limit_rps} requests/second. Please slow down.",
                    "retry_after": 1,
                },
                headers={"Retry-After": "1"},
            )

        if not buckets["sustained"].consume():
            return JSONResponse(
                status_code=429,
                content={
                    "error": "Rate limit exceeded",
                    "detail": f"Max {settings.rate_limit_rpm} requests/minute. Please wait.",
                    "retry_after": 30,
                },
                headers={"Retry-After": "30"},
            )

        # Periodically clean up stale buckets (every 500 requests)
        self._cleanup_counter += 1
        if self._cleanup_counter >= 500:
            self._cleanup_stale_buckets()
            self._cleanup_counter = 0

        response = await call_next(request)

        # Add rate-limit headers for transparency
        response.headers["X-RateLimit-Limit"] = str(settings.rate_limit_rpm)
        response.headers["X-RateLimit-Remaining"] = str(
            int(buckets["sustained"].tokens)
        )

        return response

    @staticmethod
    def _get_client_ip(request: Request) -> str:
        """Extract client IP, respecting X-Forwarded-For for reverse proxies."""
        forwarded = request.headers.get("x-forwarded-for")
        if forwarded:
            return forwarded.split(",")[0].strip()
        return request.client.host if request.client else "unknown"

    def _cleanup_stale_buckets(self):
        """Remove buckets that haven't been used in 5+ minutes."""
        now = time.monotonic()
        stale_ips = [
            ip
            for ip, b in self._buckets.items()
            if now - b["sustained"].last_refill > 300
        ]
        for ip in stale_ips:
            del self._buckets[ip]
