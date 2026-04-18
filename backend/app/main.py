"""
NexTrade Backend — FastAPI Application Entry Point

This is the main application file that:
1. Creates the FastAPI app with metadata
2. Configures CORS (restricted to known frontend origins)
3. Mounts the rate limiter middleware
4. Registers all routers
5. Provides a /api/health endpoint for monitoring
6. Serves the frontend (index.html, style.css, script.js) for full-stack deployment
7. Handles legacy `/?url=` proxy format for seamless frontend migration

Single-process deployment: API + Frontend on one port.
"""

import logging
import time
from contextlib import asynccontextmanager
from pathlib import Path

from fastapi import FastAPI, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse, HTMLResponse

from app.config import settings
from app.middleware.rate_limiter import RateLimitMiddleware
from app.routers import proxy as proxy_router
from app.services.market_data import crumb_manager

# ── Logging ─────────────────────────────────────────────────
logging.basicConfig(
    level=logging.DEBUG if settings.debug else logging.INFO,
    format="%(asctime)s │ %(name)-24s │ %(levelname)-7s │ %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("nextrade")

# ── Resolve frontend directory ──────────────────────────────
# backend/app/main.py → backend/app → backend → project root
FRONTEND_DIR = Path(__file__).resolve().parent.parent.parent
logger.info(f"Frontend directory: {FRONTEND_DIR}")


# ── Lifespan: startup/shutdown logic ───────────────────────
@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("=" * 60)
    logger.info(f"  {settings.app_name} starting on port {settings.port}")
    logger.info(f"  CORS origins: {settings.cors_origins}")
    logger.info(f"  Rate limit: {settings.rate_limit_rpm} req/min, {settings.rate_limit_rps} req/sec burst")
    logger.info(f"  Proxy whitelist: {settings.proxy_allowed_domains}")
    logger.info(f"  Frontend dir: {FRONTEND_DIR}")
    logger.info("=" * 60)

    # Pre-warm Yahoo crumb
    logger.info("Pre-warming Yahoo Finance crumb...")
    try:
        crumb = await crumb_manager.get_crumb()
        if crumb:
            logger.info(f"Yahoo crumb ready: {crumb[:8]}...")
        else:
            logger.warning("Could not fetch Yahoo crumb on startup (will retry on first request)")
    except Exception as e:
        logger.warning(f"Crumb pre-warm failed: {e}")

    yield
    logger.info("NexTrade API shutting down...")


# ── Create FastAPI app ──────────────────────────────────────
app = FastAPI(
    title=settings.app_name,
    description=(
        "Production-grade backend for NexTrade trading platform. "
        "Provides secure market data proxying, rate limiting, and API endpoints."
    ),
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

# ── Middleware: CORS ────────────────────────────────────────
app.add_middleware(
    CORSMiddleware,
    allow_origins=settings.cors_origins,
    allow_credentials=True,
    allow_methods=["GET", "POST", "OPTIONS"],
    allow_headers=["*"],
)

# ── Middleware: Rate Limiting ───────────────────────────────
app.add_middleware(RateLimitMiddleware)

# ── API Routers ─────────────────────────────────────────────
app.include_router(proxy_router.router)


# ── Health Check ────────────────────────────────────────────
@app.get("/api/health", tags=["system"])
async def health_check():
    """Health check endpoint for monitoring."""
    return {
        "status": "healthy",
        "service": settings.app_name,
        "version": "1.0.0",
        "timestamp": time.time(),
        "config": {
            "rate_limit_rpm": settings.rate_limit_rpm,
            "proxy_whitelist": settings.proxy_allowed_domains,
            "cors_origins": settings.cors_origins,
        },
    }


# ── Frontend Static Files ──────────────────────────────────
# Serve the frontend assets (CSS, JS, images) from the project root.
# This enables full-stack deployment on a single Render Web Service.

# Direct routes for top-level frontend files
@app.get("/index.html", include_in_schema=False)
async def serve_index_html():
    """Serve the main HTML page."""
    index_path = FRONTEND_DIR / "index.html"
    if index_path.exists():
        return FileResponse(str(index_path), media_type="text/html")
    return HTMLResponse("<h1>Frontend not found</h1>", status_code=404)


@app.get("/style.css", include_in_schema=False)
async def serve_css():
    """Serve the stylesheet."""
    css_path = FRONTEND_DIR / "style.css"
    if css_path.exists():
        return FileResponse(str(css_path), media_type="text/css")
    return HTMLResponse("/* not found */", status_code=404)


@app.get("/script.js", include_in_schema=False)
async def serve_js():
    """Serve the main JavaScript file."""
    js_path = FRONTEND_DIR / "script.js"
    if js_path.exists():
        return FileResponse(str(js_path), media_type="application/javascript")
    return HTMLResponse("// not found", status_code=404)


@app.get("/bandariya_didi.png", include_in_schema=False)
async def serve_logo():
    """Serve the logo image."""
    img_path = FRONTEND_DIR / "bandariya_didi.png"
    if img_path.exists():
        return FileResponse(str(img_path), media_type="image/png")
    return HTMLResponse("", status_code=404)


# ── Root Handler ────────────────────────────────────────────
# Handles both:
# 1. `/?url=...` → legacy proxy requests from the frontend
# 2. `/` (no params) → serve index.html (full-stack mode)
@app.get("/", include_in_schema=False)
async def root_handler(
    request: Request,
    url: str = Query(None, description="Legacy proxy URL parameter"),
):
    """
    Root handler:
    - If `?url=` param present → proxy the request (legacy compatibility)
    - Otherwise → serve the frontend index.html
    """
    if url:
        # Delegate to the secure proxy router
        return await proxy_router.proxy_request(request=request, url=url)

    # Serve frontend
    index_path = FRONTEND_DIR / "index.html"
    if index_path.exists():
        return FileResponse(str(index_path), media_type="text/html")

    return {
        "service": settings.app_name,
        "status": "running",
        "version": "1.0.0",
        "docs": "/api/docs",
        "health": "/api/health",
    }
