"""NexTrade Backend — FastAPI Entry Point"""
import logging, time
from contextlib import asynccontextmanager
from pathlib import Path
from fastapi import FastAPI, Query, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import FileResponse, HTMLResponse
from app_config import settings
from rate_limiter import RateLimitMiddleware
import proxy_router
from market_data import crumb_manager

logging.basicConfig(
    level=logging.DEBUG if settings.debug else logging.INFO,
    format="%(asctime)s | %(name)-24s | %(levelname)-7s | %(message)s",
    datefmt="%H:%M:%S",
)
logger = logging.getLogger("nextrade")
BASE_DIR = Path(__file__).resolve().parent

@asynccontextmanager
async def lifespan(app: FastAPI):
    logger.info("=" * 60)
    logger.info(f"  {settings.app_name} starting")
    logger.info(f"  Proxy whitelist: {settings.proxy_allowed_domains}")
    logger.info("=" * 60)
    logger.info("Pre-warming Yahoo Finance crumb...")
    try:
        crumb = await crumb_manager.get_crumb()
        if crumb:
            logger.info(f"Yahoo crumb ready: {crumb[:8]}...")
        else:
            logger.warning("Could not fetch Yahoo crumb")
    except Exception as e:
        logger.warning(f"Crumb pre-warm failed: {e}")
    yield
    logger.info("NexTrade API shutting down...")

app = FastAPI(
    title=settings.app_name,
    description="Production-grade backend for NexTrade trading platform.",
    version="1.0.0",
    lifespan=lifespan,
    docs_url="/api/docs",
    redoc_url="/api/redoc",
)

app.add_middleware(CORSMiddleware, allow_origins=settings.cors_origins, allow_credentials=True, allow_methods=["GET","POST","OPTIONS"], allow_headers=["*"])
app.add_middleware(RateLimitMiddleware)
app.include_router(proxy_router.router)

@app.get("/api/health", tags=["system"])
async def health_check():
    return {"status": "healthy", "service": settings.app_name, "version": "1.0.0", "timestamp": time.time()}

@app.get("/index.html", include_in_schema=False)
async def serve_index():
    p = BASE_DIR / "index.html"
    return FileResponse(str(p), media_type="text/html") if p.exists() else HTMLResponse("<h1>Not found</h1>", 404)

@app.get("/style.css", include_in_schema=False)
async def serve_css():
    p = BASE_DIR / "style.css"
    return FileResponse(str(p), media_type="text/css") if p.exists() else HTMLResponse("", 404)

@app.get("/script.js", include_in_schema=False)
async def serve_js():
    p = BASE_DIR / "script.js"
    return FileResponse(str(p), media_type="application/javascript") if p.exists() else HTMLResponse("", 404)

@app.get("/bandariya_didi.png", include_in_schema=False)
async def serve_logo():
    p = BASE_DIR / "bandariya_didi.png"
    return FileResponse(str(p), media_type="image/png") if p.exists() else HTMLResponse("", 404)

@app.get("/", include_in_schema=False)
async def root_handler(request: Request, url: str = Query(None)):
    if url:
        return await proxy_router.proxy_request(request=request, url=url)
    p = BASE_DIR / "index.html"
    return FileResponse(str(p), media_type="text/html") if p.exists() else {"service": settings.app_name, "status": "running"}
