"""NexTrade — Configuration"""
from pydantic_settings import BaseSettings
from pydantic import Field
from typing import List

class Settings(BaseSettings):
    app_name: str = "NexTrade API"
    debug: bool = False
    host: str = "0.0.0.0"
    port: int = 5005
    cors_origins: List[str] = Field(default=["http://127.0.0.1:8080","http://localhost:8080","http://127.0.0.1:5500","http://localhost:5500","http://127.0.0.1:5005","http://localhost:5005"])
    proxy_allowed_domains: List[str] = Field(default=["query1.finance.yahoo.com","query2.finance.yahoo.com","fc.yahoo.com","stooq.com","www.stooq.com","news.google.com"])
    rate_limit_rpm: int = 120
    rate_limit_rps: int = 10
    yahoo_crumb_ttl: int = 3600
    proxy_timeout: float = 10.0
    user_agent: str = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36"
    model_config = {"env_file": ".env", "env_file_encoding": "utf-8", "case_sensitive": False}

settings = Settings()
