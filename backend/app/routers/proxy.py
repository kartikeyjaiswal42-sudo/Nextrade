"""
NexTrade Backend — Secure Proxy Router

Replaces the old proxy.py open relay with a whitelisted, rate-limited
proxy endpoint. Only allows requests to Yahoo Finance and Stooq domains.

Security improvements over proxy.py:
1. Domain whitelist — no more open relay
2. SSL verification enabled — no more CERT_NONE
3. CORS restricted to known frontend origins
4. Rate limited via middleware
5. Request timeout enforced
6. Proper error responses with structured JSON
"""

import logging
from urllib.parse import urlparse, unquote

import httpx
from fastapi import APIRouter, Query, HTTPException, Request
from fastapi.responses import Response

from app.config import settings
from app.services.market_data import crumb_manager

logger = logging.getLogger("nextrade.proxy")

router = APIRouter(prefix="/api", tags=["proxy"])


def _is_domain_allowed(url: str) -> bool:
    """Check if the URL's domain is in our whitelist."""
    try:
        parsed = urlparse(url)
        hostname = parsed.hostname
        if not hostname:
            return False
        return any(
            hostname == allowed or hostname.endswith("." + allowed)
            for allowed in settings.proxy_allowed_domains
        )
    except Exception:
        return False


@router.get("/proxy")
async def proxy_request(
    request: Request,
    url: str = Query(..., description="URL to proxy (must be whitelisted domain)"),
):
    """
    Secure proxy endpoint.

    Proxies a GET request to the given URL, but ONLY if the domain
    is in the whitelist (Yahoo Finance, Stooq). Automatically injects
    Yahoo Finance crumb when targeting Yahoo endpoints.

    This replaces the old `/?url=` endpoint from proxy.py.
    """
    # Decode the URL (frontend may double-encode)
    decoded_url = unquote(url)

    # ── Security: Domain whitelist check ────────────────────
    if not _is_domain_allowed(decoded_url):
        raise HTTPException(
            status_code=403,
            detail={
                "error": "Domain not allowed",
                "url": decoded_url,
                "allowed_domains": settings.proxy_allowed_domains,
            },
        )

    # ── Inject Yahoo crumb if targeting Yahoo endpoints ─────
    if "yahoo.com" in decoded_url:
        crumb = await crumb_manager.get_crumb()
        if crumb:
            separator = "&" if "?" in decoded_url else "?"
            decoded_url += f"{separator}crumb={crumb}"

    # ── Fetch upstream ──────────────────────────────────────
    try:
        cookies = await crumb_manager.get_cookies()

        async with httpx.AsyncClient(
            timeout=settings.proxy_timeout,
            follow_redirects=True,
        ) as client:
            upstream_resp = await client.get(
                decoded_url,
                headers={
                    "User-Agent": settings.user_agent,
                    "Accept": "application/json,text/csv,text/plain,*/*",
                    "Accept-Language": "en-US,en;q=0.9",
                },
                cookies=cookies,
            )

        # Check for HTML consent pages (Yahoo sometimes returns these)
        content_type = upstream_resp.headers.get("content-type", "")
        body = upstream_resp.content

        if b"<!DOCTYPE" in body[:100] or b"<html" in body[:100]:
            logger.warning(f"Upstream returned HTML (consent page?) for {decoded_url[:80]}")
            raise HTTPException(
                status_code=502,
                detail="Upstream returned HTML instead of data. Crumb may be expired.",
            )

        # Return the upstream response with proper content type
        return Response(
            content=body,
            status_code=upstream_resp.status_code,
            media_type=content_type or "application/json",
        )

    except httpx.TimeoutException:
        logger.warning(f"Timeout fetching {decoded_url[:80]}")
        raise HTTPException(
            status_code=504,
            detail=f"Upstream request timed out after {settings.proxy_timeout}s",
        )
    except httpx.HTTPError as e:
        logger.error(f"HTTP error proxying {decoded_url[:80]}: {e}")
        raise HTTPException(
            status_code=502,
            detail=f"Upstream error: {str(e)}",
        )
    except HTTPException:
        raise  # Re-raise our own exceptions
    except Exception as e:
        logger.error(f"Unexpected proxy error: {e}", exc_info=True)
        raise HTTPException(
            status_code=500,
            detail=f"Internal proxy error: {str(e)}",
        )


# ── Legacy compatibility endpoint ──────────────────────────
# The old proxy.py used `/?url=` format. This handles that too
# so the frontend transition is seamless.
@router.get("/")
async def legacy_proxy_redirect(
    request: Request,
    url: str = Query(None, description="Legacy proxy URL parameter"),
):
    """
    Legacy compatibility: handles the old `/?url=` format from proxy.py.
    Redirects to the new /api/proxy endpoint internally.
    """
    if not url:
        return {"status": "ok", "message": "NexTrade API is running. Use /api/proxy?url=... for proxy requests."}

    return await proxy_request(request=request, url=url)
