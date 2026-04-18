"""
NexTrade Backend — Yahoo Finance Crumb Manager

Handles the Yahoo Finance authentication dance:
1. Hit fc.yahoo.com to set cookies
2. Fetch crumb from /v1/test/getcrumb
3. Cache crumb with configurable TTL
4. Auto-refresh when expired

This replaces the blocking `urllib` approach in the old proxy.py
with fully async httpx calls.
"""

import time
import logging
from typing import Optional

import httpx

from app.config import settings

logger = logging.getLogger("nextrade.market_data")


class YahooCrumbManager:
    """Async Yahoo Finance crumb manager with TTL-based caching."""

    def __init__(self):
        self._crumb: Optional[str] = None
        self._crumb_fetched_at: float = 0.0
        self._cookies: httpx.Cookies = httpx.Cookies()
        self._lock = None  # Will be set on first use (asyncio.Lock)

    async def _ensure_lock(self):
        """Lazy-init asyncio.Lock (can't create in __init__ outside event loop)."""
        if self._lock is None:
            import asyncio
            self._lock = asyncio.Lock()

    @property
    def _is_expired(self) -> bool:
        return (time.time() - self._crumb_fetched_at) > settings.yahoo_crumb_ttl

    async def get_crumb(self) -> str:
        """
        Get a valid Yahoo Finance crumb, refreshing if expired.
        Thread-safe via asyncio.Lock.
        """
        await self._ensure_lock()

        if self._crumb and not self._is_expired:
            return self._crumb

        async with self._lock:
            # Double-check after acquiring lock
            if self._crumb and not self._is_expired:
                return self._crumb

            return await self._fetch_crumb()

    async def _fetch_crumb(self) -> str:
        """Fetch a fresh crumb from Yahoo Finance."""
        try:
            async with httpx.AsyncClient(
                headers={"User-Agent": settings.user_agent},
                follow_redirects=True,
                timeout=5.0,
            ) as client:
                # Step 1: Hit fc.yahoo.com to get cookies set
                try:
                    await client.get("https://fc.yahoo.com")
                except httpx.HTTPError:
                    pass  # Expected — this endpoint often errors but sets cookies

                # Step 2: Fetch the crumb using the cookies
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
        """Get the cookies associated with the current crumb."""
        if self._is_expired:
            await self.get_crumb()
        return self._cookies


# Singleton instance
crumb_manager = YahooCrumbManager()
