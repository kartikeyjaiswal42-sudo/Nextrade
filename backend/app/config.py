"""
NexTrade Backend — Configuration
Typed settings loaded from environment variables / .env file.
"""

from pydantic_settings import BaseSettings
from pydantic import Field
from typing import List


class Settings(BaseSettings):
    """Application settings. Override via environment variables or .env file."""

    # ── Server ──────────────────────────────────────────────
    app_name: str = "NexTrade API"
    debug: bool = False
    host: str = "0.0.0.0"
    port: int = 5005

    # ── CORS ────────────────────────────────────────────────
    # Only allow your own frontend origins (no more Access-Control-Allow-Origin: *)
    cors_origins: List[str] = Field(
        default=[
            "http://127.0.0.1:8080",
            "http://localhost:8080",
            "http://127.0.0.1:5500",   # VS Code Live Server
            "http://localhost:5500",
            "http://127.0.0.1:5005",   # Same-origin dev
            "http://localhost:5005",
        ]
    )

    # ── Proxy Whitelist ─────────────────────────────────────
    # Only these domains can be fetched through the proxy endpoint.
    # This closes the open-relay vulnerability in the old proxy.py.
    proxy_allowed_domains: List[str] = Field(
        default=[
            "query1.finance.yahoo.com",
            "query2.finance.yahoo.com",
            "fc.yahoo.com",
            "stooq.com",
            "www.stooq.com",
            "news.google.com",
        ]
    )

    # ── Rate Limiting ───────────────────────────────────────
    # Max proxy requests per IP per minute
    rate_limit_rpm: int = 120
    # Max proxy requests per IP per second (burst)
    rate_limit_rps: int = 10

    # ── External API ────────────────────────────────────────
    yahoo_crumb_ttl: int = 3600  # seconds before refreshing Yahoo crumb
    proxy_timeout: float = 10.0  # seconds for upstream requests
    user_agent: str = (
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
        "AppleWebKit/537.36 (KHTML, like Gecko) "
        "Chrome/125.0.0.0 Safari/537.36"
    )

    model_config = {
        "env_file": ".env",
        "env_file_encoding": "utf-8",
        "case_sensitive": False,
    }


# Singleton instance
settings = Settings()
