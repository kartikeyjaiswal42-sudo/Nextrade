"""NexTrade — Secure Proxy Router"""
import logging
from urllib.parse import urlparse, unquote
import httpx
from fastapi import APIRouter, Query, HTTPException, Request
from fastapi.responses import Response
from app_config import settings
from market_data import crumb_manager

logger = logging.getLogger("nextrade.proxy")
router = APIRouter(prefix="/api", tags=["proxy"])

def _is_domain_allowed(url):
    try:
        hostname = urlparse(url).hostname
        if not hostname: return False
        return any(hostname == a or hostname.endswith("." + a) for a in settings.proxy_allowed_domains)
    except: return False

@router.get("/proxy")
async def proxy_request(request: Request, url: str = Query(...)):
    decoded_url = unquote(url)
    if not _is_domain_allowed(decoded_url):
        raise HTTPException(status_code=403, detail=f"Domain not allowed: {urlparse(decoded_url).hostname}")
    if "yahoo.com" in decoded_url:
        crumb = await crumb_manager.get_crumb()
        if crumb:
            sep = "&" if "?" in decoded_url else "?"
            decoded_url += f"{sep}crumb={crumb}"
    try:
        cookies = await crumb_manager.get_cookies()
        async with httpx.AsyncClient(timeout=settings.proxy_timeout, follow_redirects=True) as client:
            resp = await client.get(decoded_url, headers={"User-Agent": settings.user_agent, "Accept": "application/json,text/csv,text/plain,*/*"}, cookies=cookies)
        body = resp.content
        if b"<!DOCTYPE" in body[:100] or b"<html" in body[:100]:
            raise HTTPException(status_code=502, detail="Upstream returned HTML instead of data")
        return Response(content=body, status_code=resp.status_code, media_type=resp.headers.get("content-type", "application/json"))
    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="Upstream request timed out")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Proxy error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail=str(e))
