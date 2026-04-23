"""
NexTrade Backend — FastAPI Application Entry Point
Restructured for flat deployment (all files at repo root).
"""

import logging
import time
from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse
from starlette.middleware.base import BaseHTTPMiddleware
from starlette.responses import Response as StarletteResponse

from config import settings
from rate_limiter import RateLimitMiddleware
import proxy_router
from market_data import crumb_manager

# ── Logging ─────────────────────────────────────────────────
logging.basicConfig(
    level=logging.DEBUG if settings.debug else logging.INFO,
    format="%(asctime)s │ %(name)-24s │ %(levelname)-7s │ %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("nextrade")

# Frontend files are in the same directory
BASE_DIR = Path(__file__).resolve().parent


class SecurityHeadersMiddleware(BaseHTTPMiddleware):
    """Add hardening headers to every response."""
    async def dispatch(self, request: Request, call_next) -> StarletteResponse:
        response = await call_next(request)
        response.headers["X-Content-Type-Options"] = "nosniff"
        response.headers["X-Frame-Options"] = "DENY"
        response.headers["X-XSS-Protection"] = "1; mode=block"
        response.headers["Referrer-Policy"] = "strict-origin-when-cross-origin"
        response.headers["Permissions-Policy"] = "camera=(), microphone=(), geolocation=()"
        if request.url.scheme == "https":
            response.headers["Strict-Transport-Security"] = "max-age=31536000; includeSubDomains; preload"
        response.headers["Content-Security-Policy"] = (
            "default-src 'self'; "
            "script-src 'self' 'unsafe-inline' https://unpkg.com; "
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; "
            "font-src 'self' https://fonts.gstatic.com; "
            "img-src 'self' data: https:; "
            "connect-src 'self' "
            "https://query1.finance.yahoo.com https://query2.finance.yahoo.com "
            "https://stooq.com https://www.stooq.com "
            "https://news.google.com "
            "https://corsproxy.io https://api.allorigins.win https://api.codetabs.com; "
            "frame-ancestors 'none';"
        )
        return response


@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("=" * 60)
    logger.info(f"  {settings.app_name} starting")
    logger.info(f"  CORS origins: {settings.cors_origins}")
    logger.info(f"  Rate limit: {settings.rate_limit_rpm} req/min, {settings.rate_limit_rps} req/sec burst")
    logger.info(f"  Proxy whitelist: {settings.proxy_allowed_domains}")
    logger.info("=" * 60)

    logger.info("Pre-warming Yahoo Finance crumb...")
    try:
        crumb = await crumb_manager.get_crumb()
        if crumb:
            logger.info(f"Yahoo crumb ready: {crumb[:8]}...")
        else:
            logger.warning("Could not fetch Yahoo crumb on startup")
    except Exception as e:
        logger.warning(f"Crumb pre-warm failed: {e}")

    yield
    logger.info("NexTrade API shutting down...")


app = FastAPI(
    title=settings.app_name,
    description="Production-grade backend for NexTrade trading platform.",
    version="1.0.0",
    lifespan=lifespan,
    # Expose interactive docs only in local debug mode — never in production
    docs_url="/api/docs" if settings.debug else None,
    redoc_url="/api/redoc" if settings.debug else None,
    openapi_url="/api/openapi.json" if settings.debug else None,
)

# ── Middleware ──────────────────────────────────────────────
app.add_middleware(SecurityHeadersMiddleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "OPTIONS"],
    allow_headers=["Accept", "Accept-Language", "Content-Language", "Content-Type"],
)
app.add_middleware(RateLimitMiddleware)

# ── API Router ─────────────────────────────────────────────
app.include_router(proxy_router.router)


# ── Health Check ───────────────────────────────────────────
@app.get("/api/health", tags=["system"])
async def health_check():
    return {
        "status": "healthy",
        "service": settings.app_name,
        "version": "1.0.0",
        "timestamp": time.time(),
    }


# ── Frontend Static Files ─────────────────────────────────
@app.get("/index.html", include_in_schema=False)
async def serve_index_html():
    p = BASE_DIR / "index.html"
    if p.exists():
        return FileResponse(str(p), media_type="text/html")
    return HTMLResponse("<h1>Not found</h1>", status_code=404)


@app.get("/style.css", include_in_schema=False)
async def serve_css():
    p = BASE_DIR / "style.css"
    if p.exists():
        return FileResponse(str(p), media_type="text/css")
    return HTMLResponse("", status_code=404)


@app.get("/script.js", include_in_schema=False)
async def serve_js():
    p = BASE_DIR / "script.js"
    if p.exists():
        return FileResponse(str(p), media_type="application/javascript")
    return HTMLResponse("", status_code=404)


@app.get("/bandariya_didi.png", include_in_schema=False)
async def serve_logo():
    p = BASE_DIR / "bandariya_didi.png"
    if p.exists():
        return FileResponse(str(p), media_type="image/png")
    return HTMLResponse("", status_code=404)


# ── Root Handler ───────────────────────────────────────────
@app.get("/", include_in_schema=False)
async def root_handler():
    p = BASE_DIR / "index.html"
    if p.exists():
        return FileResponse(str(p), media_type="text/html")
    return HTMLResponse("<h1>Not found</h1>", status_code=404)
