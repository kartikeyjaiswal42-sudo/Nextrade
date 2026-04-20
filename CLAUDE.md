# NexTrade — AI Project Context
<!-- This file is read automatically by Claude Code and referenced by Antigravity sessions.
     DO NOT edit manually. Update it whenever significant changes are made. -->

## Project Identity
- **Name**: NexTrade — Indian Stock Market Simulator (brokerage-grade)
- **Purpose**: Live-data NSE/BSE dashboard with virtual trading, portfolio management, and investment calculators.
- **Stack**: Vanilla HTML + JS + CSS frontend · FastAPI Python backend · No frameworks (no React, no Tailwind)
- **Runtime**: Python 3.11+, Node not required

---

## Repository Layout
```
New project/
├── CLAUDE.md                ← YOU ARE HERE (AI context file)
├── index.html               ← Entire frontend UI (1033 lines, single-page app)
├── script.js                ← All JS logic (3218 lines)
├── style.css                ← All CSS (2246 lines, CSS custom properties design system)
│
├── main.py                  ← FastAPI app entry point (serves static files + API)
├── config.py                ← Pydantic Settings (port, CORS, rate limits, proxy whitelist)
├── proxy_router.py          ← /api/proxy endpoint (Yahoo Finance + Stooq CORS proxy)
├── market_data.py           ← Yahoo Finance crumb/cookie manager (async, TTL 3600s)
├── rate_limiter.py          ← Middleware: 120 req/min, 10 req/sec burst
├── proxy.py                 ← LOCAL-ONLY simple HTTP proxy on port 5005 (not used on Render)
├── requirements.txt         ← fastapi, uvicorn, httpx, pydantic, pydantic-settings, python-dotenv
│
├── render_upload/           ← Mirror of root files (index.html, script.js, style.css, main.py etc.)
│                               Only purpose: keeps render_upload/ in sync with root for Render deploys
├── replit_sync/             ← Downloaded Replit site snapshot (source of truth for UI design)
├── .github/workflows/       ← keep_alive.yml: pings Render /api/health every 14 min via cron
└── bandariya_didi.png       ← User avatar shown in header + settings page
```

---

## How the App Runs

### Local Development
```bash
# Terminal 1 — Start FastAPI backend (serves frontend + proxies data)
uvicorn main:app --host 0.0.0.0 --port 5005 --reload

# OR — Start the simple proxy only (legacy local mode)
python3 proxy.py

# Then open in browser
open http://localhost:5005
# OR open index.html directly in browser (uses public fallback proxies if no local server)
```

### Production (Render)
- **Build command**: `pip install -r requirements.txt`
- **Start command**: `uvicorn main:app --host 0.0.0.0 --port $PORT`
- `main.py` serves `index.html`, `script.js`, `style.css`, `bandariya_didi.png` as static routes
- FastAPI proxy at `/api/proxy?url=<encoded-url>` handles Yahoo Finance CORS

### Deployment Flow
```
Local edits → git add . && git commit → git push origin main → Render auto-deploys
```
- GitHub repo: `kartikeyjaiswal42-sudo/Nextrade` (branch: `main`)
- Render URL: `https://nextrade-3bqk.onrender.com`
- Replit URL: `https://website-host--kartikeyjaiswa3.replit.app`

---

## Backend API Endpoints
| Method | Path | What it does |
|--------|------|-------------|
| GET | `/` | Serves `index.html` |
| GET | `/style.css` | Serves CSS |
| GET | `/script.js` | Serves JS |
| GET | `/bandariya_didi.png` | Serves avatar image |
| GET | `/api/proxy?url=<url>` | Secure CORS proxy; whitelist in `config.py` |
| GET | `/api/health` | Health check (pinged by GitHub Actions keep-alive) |
| GET | `/api/docs` | FastAPI Swagger UI |

### Proxy Whitelist (config.py)
```
query1.finance.yahoo.com
query2.finance.yahoo.com
fc.yahoo.com
stooq.com / www.stooq.com
news.google.com
```
To add a new data source, add its domain to `proxy_allowed_domains` in `config.py`.

---

## Frontend Architecture (script.js)

### Data Sources & Fallback Chain
```js
var PROXIES = [
    window.location.origin + '/api/proxy?url=',  // Primary: Render/local FastAPI
    'https://corsproxy.io/?',                     // Fallback 1
    'https://api.allorigins.win/raw?url=',        // Fallback 2
    'https://api.codetabs.com/v1/proxy?quest=',  // Fallback 3
];
```
Function `fetchWithFallback(url, timeoutMs)` tries each proxy in sequence.

### Key Data Structures
```js
// Live Index data (4 items: NIFTY50, SENSEX, BANKNIFTY, NIFTYIT)
var indices = [{ name, symbol, price, change, changePct, prevClose, open, high, low, sparkline[] }]

// NSE/BSE Stocks (~250 stocks hardcoded with metadata)
var stocks = [{ name, symbol, yfSymbol, price, change, changePct, marketCap, pe, sector, high52, low52 }]

// Mutual Funds (static data, ~50 funds)
var mutualFunds = [{ name, nav, return1y, return3y, aum, risk, rating, category, amc }]

// IPO Data (static, hardcoded)
var ipoData = [{ name, symbol, priceRange, lotSize, openDate, closeDate, listDate, status, gmp, issue }]
```

### Global Runtime State
```js
var portfolioHoldings = [];   // [{ symbol, qty, avgCost, name }]
var watchlist = new Set();    // Set of stock symbols
var orderHistory = [];        // [{ date, symbol, side, qty, price, total, type, product, status }]
var priceAlerts = [];         // [{ symbol, target, condition }]
var virtualBalance = 1000000; // ₹10 lakh default
var currentView = 'dashboard';
var isLiveData = false;       // true when live prices loaded successfully
```

### localStorage Keys
| Key | Content |
|-----|---------|
| `virtualBalance` | Number (cash balance) |
| `portfolioHoldings` | JSON array of holdings |
| `orderHistory` | JSON array of orders |
| `watchlist` | JSON array of symbols |
| `nt_theme` | `'dark'` or `'light'` |
| `nt_alerts` | JSON array of price alerts |

### Navigation / Views
Single-page app. Views toggled by `setView(viewName)`.

Active sections (sidebar nav-items):
`dashboard` | `screener` | `allstocks` | `gainers` | `mutualfunds` | `ipo` | `portfolio` | `watchlist` | `orders` | `news` | `calculator` | `compare` | `heatmap` | `journal` | `settings`

### Key Functions Reference
| Function | Lines | Purpose |
|----------|-------|---------|
| `fetchRealTimeData()` | 839 | Main orchestrator: calls Stooq then Yahoo |
| `fetchFromStooq()` | 625 | Primary data source (NSE stocks via CSV) |
| `fetchFromYahoo()` | 744 | Secondary data source (batch YF quote API) |
| `fetchIndicesFromYahoo()` | 715 | NIFTY/SENSEX/BANKNIFTY/NIFTYIT index values |
| `fetchWithFallback(url, ms)` | 371 | CORS proxy fallback chain |
| `renderDashboardCards()` | 1074 | Market overview cards with SVG sparklines |
| `renderGainersLosers()` | 1099 | Top gainers/losers tables |
| `renderScreener()` | 1145 | NSE Top Picks table with sector filter |
| `renderAllStocks()` | 1382 | Paginated all-stocks browser (30/page) |
| `renderMutualFunds()` | 1209 | Mutual fund table with category filter |
| `renderPortfolio()` | ~1300 | Holdings table + P&L + donut chart |
| `renderHeatmap()` | 2907 | Market heatmap (treemap by market cap) |
| `renderJournal()` | 2948 | Trade journal with P&L analytics |
| `openStockModal(symbol)` | 1770 | Stock detail modal (price, chart, stats, buy/sell) |
| `executeOrder()` | 2055 | Buy/sell order execution (updates balance + holdings) |
| `calcSIP()` | 2253 | SIP calculator (with tax + inflation sliders) |
| `calcLumpsum()` | 2282 | Lumpsum calculator (with tax + inflation sliders) |
| `calcWhatIf()` | 3063 | What-If: "what if I invested X years ago in Y stock" |
| `computeFearGreed()` | 2729 | Fear & Greed index from NIFTY momentum + VIX |
| `generateMiniChart()` | 971 | Returns SVG sparkline for dashboard cards |
| `fetchLiveNews()` | 2170 | Google News RSS → rendered as news cards |
| `loadState()` | 891 | Restore portfolio/watchlist from localStorage |
| `saveState()` | 916 | Persist portfolio/watchlist to localStorage |
| `setView(view)` | 1462 | Navigate between sections |
| `showToast(msg, type)` | 1014 | Toast notification system |

---

## CSS Design System (style.css)

### Design Theme
- Replit-inspired dark theme (synced from `replit_sync/style.css`)
- Glassmorphism cards (`backdrop-filter: blur`)
- Typography: **Inter** (body) + **Plus Jakarta Sans** (headings)
- Google Fonts loaded in `index.html`

### Key CSS Custom Properties
```css
--bg-dark              /* Page background: #0f131c */
--bg-panel             /* Card/panel bg: glassmorphism rgba */
--border-color         /* Subtle border */
--text-main            /* Primary text */
--text-muted           /* Secondary/dim text */
--accent-primary       /* Brand color: #10b981 (emerald) */
--positive             /* Green for gains */
--negative             /* Red for losses */
--gold                 /* Gold for tax highlights */
--font-family          /* Inter */
--font-heading         /* Plus Jakarta Sans */
--radius-lg / --radius-md / --radius-sm
--transition           /* Smooth: all 0.3s cubic-bezier */
```

### Special Calculator Slider Classes
```css
.calc-slider           /* Base range input */
.tax-slider            /* Capital gains tax → gold thumb */
.inf-slider            /* Inflation rate → pink thumb */
.calc-tax-badge        /* "LTCG" gold badge */
.calc-inf-badge        /* "CPI" pink badge */
```

---

## Current Features Status
| Feature | Status |
|---------|--------|
| Live NIFTY/SENSEX/BANKNIFTY/NIFTYIT | ✅ Live |
| Top Gainers / Losers | ✅ Live |
| Sector Performance | ✅ Live |
| NSE Stock Screener (~250 stocks) | ✅ Live |
| All Stocks Browser (~250 stocks paginated) | ✅ Live |
| Mutual Funds (~50 funds) | ✅ Static data |
| IPO Centre | ✅ Static data |
| Virtual Portfolio + P&L | ✅ localStorage |
| Order History | ✅ localStorage |
| Watchlist | ✅ localStorage |
| Price Alerts | ✅ localStorage |
| Market Heatmap | ✅ Live |
| Trade Journal + Equity Curve | ✅ localStorage |
| SIP / Lumpsum / What-If Calculator | ✅ With sliders |
| Fear & Greed Index Gauge | ✅ Computed |
| Market News | ✅ Live (Google RSS) |
| Stock Comparator | ✅ Live |
| Stock Detail Modal (chart, 52W, stats) | ✅ Live |
| Price Chart (historical) | ✅ Live (YF chart API) |
| Dark/Light theme toggle | ✅ |
| Accent colour picker | ✅ |
| **User Login / Auth System** | ❌ Not built yet |
| **Real Demat account (broker API)** | ❌ Not built yet |
| **Database persistence** | ❌ Not built yet (all localStorage) |

---

## Next Planned Features
1. **Auth System** — bcrypt + JWT + PostgreSQL (Supabase free tier)
2. **Broker API** — Zerodha Kite Connect / Upstox OAuth for real holdings
3. **DB Persistence** — Move portfolio/orders from localStorage → PostgreSQL

---

## Common Tasks Cheatsheet

### Add a new stock to the screener
Edit `var stocks = [...]` in `script.js` (starts line 15). Each entry:
```js
{ name:'Company Name', symbol:'NSE_SYMBOL', yfSymbol:'NSE_SYMBOL.NS',
  price:0, change:0, changePct:0, marketCap:'XXX Cr', pe:0,
  sector:'Technology', high52:0, low52:0 }
```

### Add a new API endpoint (backend)
Edit `proxy_router.py`, add the domain to `proxy_allowed_domains` in `config.py`.

### Add a new sidebar section
1. Add `<a class="nav-item" data-view="mysection">` in `index.html` sidebar
2. Add `<div id="section-mysection" ...>` in `index.html` main content
3. Handle the section in `setView()` in `script.js` (line 1462)

### Push to Render
```bash
git add .
git commit -m "describe change"
git push origin main
# Render auto-deploys in ~60-90s
```

### Sync render_upload/ with root (keep them identical)
```bash
cp index.html style.css script.js main.py config.py proxy_router.py market_data.py rate_limiter.py requirements.txt render_upload/
```

---

## Known Gotchas
- `proxy.py` is the **old local-only** simple proxy (port 5005). On Render, `proxy_router.py` inside FastAPI handles proxying. Do NOT confuse them.
- `render_upload/` must be kept in sync with root files manually (or via the cp command above).
- The Replit version has NO Crypto section and NO Calendar/Stock Screener Pro sections. These were removed intentionally to match the Replit design baseline.
- Yahoo Finance crumb expires; `market_data.py` auto-refreshes it with TTL 3600s.
- Default virtual balance is ₹10,00,000 (10 lakh), stored in `localStorage['virtualBalance']`.
- `replit_sync/` folder is NOT deployed — it's just a local snapshot reference.
