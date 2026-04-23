"""
NexTrade — Secure Proxy Router (flat structure)
"""

import ipaddress
import logging
from urllib.parse import urlparse, unquote

import httpx
from fastapi import APIRouter, Query, HTTPException, Request
from fastapi.responses import Response

from config import settings
from market_data import crumb_manager

logger = logging.getLogger("nextrade.proxy")

router = APIRouter(prefix="/api", tags=["proxy"])

# Private/reserved IP ranges that must never be reachable via the proxy
_PRIVATE_NETWORKS = [
    ipaddress.ip_network("127.0.0.0/8"),
    ipaddress.ip_network("10.0.0.0/8"),
    ipaddress.ip_network("172.16.0.0/12"),
    ipaddress.ip_network("192.168.0.0/16"),
    ipaddress.ip_network("169.254.0.0/16"),   # link-local
    ipaddress.ip_network("0.0.0.0/8"),
    ipaddress.ip_network("100.64.0.0/10"),    # shared address space
    ipaddress.ip_network("::1/128"),
    ipaddress.ip_network("fc00::/7"),
]


def _is_private_host(hostname: str) -> bool:
    """Return True if hostname is a literal private/loopback IP address."""
    try:
        addr = ipaddress.ip_address(hostname)
        return any(addr in net for net in _PRIVATE_NETWORKS)
    except ValueError:
        return False  # not a literal IP — domain name, checked elsewhere


def _is_domain_allowed(url: str) -> bool:
    try:
        parsed = urlparse(url)
        hostname = parsed.hostname
        if not hostname:
            return False
        # Block literal private IPs even if someone bypasses the domain list
        if _is_private_host(hostname):
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
    decoded_url = unquote(url)

    if not _is_domain_allowed(decoded_url):
        raise HTTPException(status_code=403, detail=f"Domain not allowed: {urlparse(decoded_url).hostname}")

    # Inject Yahoo crumb
    if "yahoo.com" in decoded_url:
        crumb = await crumb_manager.get_crumb()
        if crumb:
            separator = "&" if "?" in decoded_url else "?"
            decoded_url += f"{separator}crumb={crumb}"

    try:
        cookies = await crumb_manager.get_cookies()
        async with httpx.AsyncClient(timeout=settings.proxy_timeout, follow_redirects=True) as client:
            upstream_resp = await client.get(
                decoded_url,
                headers={
                    "User-Agent": settings.user_agent,
                    "Accept": "application/json,text/csv,text/plain,*/*",
                },
                cookies=cookies,
            )

        body = upstream_resp.content
        if b"<!DOCTYPE" in body[:100] or b"<html" in body[:100]:
            logger.warning(f"Upstream returned HTML for {decoded_url[:80]}")
            raise HTTPException(status_code=502, detail="Upstream returned HTML instead of data")

        content_type = upstream_resp.headers.get("content-type", "application/json")
        return Response(content=body, status_code=upstream_resp.status_code, media_type=content_type)

    except httpx.TimeoutException:
        raise HTTPException(status_code=504, detail="Upstream request timed out")
    except HTTPException:
        raise
    except Exception as e:
        logger.error(f"Proxy error: {e}", exc_info=True)
        raise HTTPException(status_code=500, detail="Upstream fetch failed")
