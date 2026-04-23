"""
NexTrade — Async Yahoo Finance Crumb Manager (flat structure)
"""

import time
import logging
from typing import Optional
import httpx
from config import settings

logger = logging.getLogger("nextrade.market_data")


class YahooCrumbManager:
    def __init__(self):
        self._crumb: Optional[str] = None
        self._crumb_fetched_at: float = 0.0
        self._cookies: httpx.Cookies = httpx.Cookies()
        self._lock = None

    async def _ensure_lock(self):
        if self._lock is None:
            import asyncio
            self._lock = asyncio.Lock()

    @property
    def _is_expired(self) -> bool:
        return (time.time() - self._crumb_fetched_at) > settings.yahoo_crumb_ttl

    async def get_crumb(self) -> str:
        await self._ensure_lock()
        if self._crumb and not self._is_expired:
            return self._crumb
        async with self._lock:
            if self._crumb and not self._is_expired:
                return self._crumb
            return await self._fetch_crumb()

    async def _fetch_crumb(self) -> str:
        try:
            async with httpx.AsyncClient(
                headers={"User-Agent": settings.user_agent},
                follow_redirects=True,
                timeout=5.0,
            ) as client:
                try:
                    await client.get("https://fc.yahoo.com")
                except httpx.HTTPError:
                    pass
                resp = await client.get(
                    "https://query1.finance.yahoo.com/v1/test/getcrumb"
                )
                resp.raise_for_status()
                crumb = resp.text.strip()
                if crumb:
                    self._crumb = crumb
                    self._crumb_fetched_at = time.time()
                    self._cookies = client.cookies
                    logger.info(f"Yahoo crumb refreshed: {crumb[:8]}...")
                    return crumb
        except Exception as e:
            logger.warning(f"Failed to fetch Yahoo crumb: {e}")
        return self._crumb or ""

    async def get_cookies(self) -> httpx.Cookies:
        if self._is_expired:
            await self.get_crumb()
        return self._cookies


crumb_manager = YahooCrumbManager()
