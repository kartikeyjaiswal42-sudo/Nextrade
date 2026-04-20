# NexTrade — Complete Design & Codebase Brief for Prototype Generation

## PROJECT OVERVIEW
**NexTrade** is a virtual Indian stock market trading simulator — a single-page web app (pure HTML + CSS + JS, no frameworks) with a FastAPI backend proxy for live market data.

**Live URL:** https://nextrade-3bqk.onrender.com  
**Stack:** Vanilla HTML5 / CSS3 / JavaScript ES5 + Lucide icons + Google Fonts  
**Backend:** FastAPI (Python) proxy on port 5005, proxies Yahoo Finance / Google News RSS  

---

## YOUR TASK
Redesign and generate a **complete working prototype** of NexTrade with:
- A stunning, world-class dark UI (think Bloomberg Terminal meets Robinhood meets Linear)
- ALL features listed below must be preserved and functional
- Keep the same vanilla JS architecture (no React/Vue/Angular)
- Keep all data arrays (stocks, funds, IPOs, etc.) intact
- Improve visual polish, animations, typography, spacing, layout
- Deliver: `index.html`, `style.css`, `script.js` as complete files

---

## CURRENT DESIGN SYSTEM (to replace with something better)

### Fonts
```css
font-family: 'Inter', sans-serif;       /* body */
font-family: 'Plus Jakarta Sans', sans-serif; /* headings */
```

### Current Colour Palette ("Warm Ember" — replace with something more premium)
```css
--bg-dark:          #1C1917;   /* main background */
--bg-card:          #262220;   /* cards */
--bg-panel:         #1E1B19;   /* panels */
--glass-border:     rgba(255,255,255,0.06);
--accent-primary:   #D97757;   /* orange-ember accent */
--accent-secondary: #C26640;
--text-primary:     #F5F0EB;
--text-secondary:   #A89F95;
--text-muted:       #6B6460;
--positive:         #34D399;   /* green for gains */
--negative:         #F87171;   /* red for losses */
```

### Libraries Used
- Lucide Icons: `<script src="https://unpkg.com/lucide@latest"></script>`
- Google Fonts: Inter + Plus Jakarta Sans
- NO charting library — custom SVG/canvas charts only

---

## COMPLETE FEATURE LIST (all must work in prototype)

### 1. SIDEBAR NAVIGATION
Nav items with Lucide icons:
- Dashboard (layout-dashboard)
- Stocks / Screener (bar-chart-2)
- All Stocks — 5000+ badge (list)
- Gainers / Losers (activity)
- Mutual Funds (briefcase)
- IPO Centre (rocket)
- Portfolio (pie-chart)
- Watchlist — badge showing count (star)
- Orders (clipboard-list)
- News (newspaper)
- Calculator (calculator)
- Compare Stocks (git-compare)
- Market Heatmap (grid-3x3)
- Trade Journal (book-open)
- Economic Calendar (calendar)
- Stock Screener Pro (sliders-horizontal)
- Settings (settings)

Bottom of sidebar: Market Status dot (green = open, red = closed) + Settings link

### 2. TOP HEADER
- Search bar with autocomplete dropdown (searches stock symbols, names, keywords)
- Data source badge (⚡ Live Dashboard)
- Balance pill (₹10,00,000.00)
- NSE + BSE exchange badges
- Notification bell button
- User avatar (bandariya_didi.png) → opens Settings

### 3. LIVE TICKER BAR
- Horizontal auto-scrolling ticker
- Shows: indices (NIFTY 50, SENSEX, BANK NIFTY, NIFTY IT) + crypto (BTC, ETH, SOL, BNB)
- Color coded: green for positive, red for negative
- Updates every 10s with simulated price drift

### 4. DASHBOARD (main view)
- Market Overview cards: 4 index cards (NIFTY 50, SENSEX, BANK NIFTY, NIFTY IT)
  Each card: name, value, change%, sparkline chart
- Fear & Greed Index widget (fetched from Yahoo Finance via proxy, fallback to simulated)
- Below dashboard: Gainers section + Screener section visible simultaneously

### 5. GAINERS / LOSERS VIEW
Three columns:
- Top Gainers table (symbol, LTP, change%)
- Top Losers table (symbol, LTP, change%)
- Sector Performance list (9 sectors with colored bars)

### 6. STOCKS SCREENER (section-screener)
- Sector dropdown filter
- Table: Symbol, LTP (₹), Day Change, Market Cap, P/E Ratio, Sector, Buy/Sell buttons
- Buy/Sell opens Order Modal

### 7. ALL STOCKS BROWSER (section-allstocks)
- 90+ stocks paginated (15 per page)
- Sort by: Market Cap, Price, % Change, Name A-Z
- Sector filter dropdown
- Columns: #, Company (logo+name), LTP, Day Change, Market Cap, 52W High/Low, Sector, Action
- Prev/Next pagination

### 8. MUTUAL FUNDS (section-mutualfunds)
- Category filter (Large Cap, Mid Cap, Small Cap, Flexi Cap, ELSS, Hybrid, Debt, Index, Sectoral)
- Table: Fund Name, NAV (₹), 1Y Returns, 3Y Returns, AUM (₹ Cr), Risk level badge, Star Rating, Invest button

### 9. IPO CENTRE (section-ipo)
- Filter: All / Open Now / Upcoming / Recently Listed
- Card grid layout per IPO:
  - Company name + sector badge
  - Price band, lot size, min investment
  - GMP (Grey Market Premium)
  - Subscription status bar (% subscribed)
  - Open/Close dates
  - Apply button (simulated)

### 10. PORTFOLIO (section-portfolio)
- Summary cards: Total Invested, Current Value, Total P&L, Today's P&L
- Holdings donut chart (SVG, sector allocation)
- Holdings table: Stock, Qty, Avg Cost, LTP, Invested, Current Value, P&L, Returns%

### 11. WATCHLIST
- Renders inside screener section (scrolls to it)
- Add/Remove from watchlist via star icon on any stock
- Shows watchlisted stocks in a table

### 12. ORDERS (section-orders, fullPage)
- Table: Date/Time, Symbol, Side (BUY/SELL), Qty, Price, Total, Type (MARKET/LIMIT), Product (MIS/CNC), Status (EXECUTED)

### 13. NEWS (section-news, fullPage)
- Fetches Google News RSS via proxy
- Fallback: static Indian market news articles
- Filter by sector
- Card grid: thumbnail (placeholder), source, time ago, headline, summary, link

### 14. INVESTMENT CALCULATOR (section-calculator, fullPage)
Three tabs:
- **SIP Calculator**: Monthly amount, Duration (slider 1-30yr), Expected return (slider 1-30%), Capital Gains Tax slider (default 12.5% LTCG), Inflation Rate slider (default 5.09% CPI)
  Results: Total Invested, Gross Returns, Gross Value, Real Net Gain, After Tax Value, Real Value (inflation-adj.)
  Visual bar chart showing proportions
- **Lumpsum Calculator**: Same sliders but for one-time investment
- **What-If Machine**: Pick a stock, amount, years ago → shows what it would be worth now

### 15. STOCK COMPARATOR (section-compare, fullPage)
- Sector dropdown → compare all stocks in sector
- Table with Rank, Company, LTP, Day Change, 52W Range progress bar, Market Cap, P/E, Buy button

### 16. MARKET HEATMAP (section-heatmap, fullPage)
- Sector tabs: All / Technology / Finance / Energy / Consumer / Healthcare / Auto / Infrastructure / Metals / Telecom
- Treemap-style grid: cells sized by market cap, colored by day change
  - Dark red > 3% loss | Red 2% | Light red 1% | Gray 0% | Light green 1% | Green 2% | Bright green 3%+ gain
- Legend bar

### 17. TRADE JOURNAL (section-journal, fullPage)
- Stats grid: Total Trades, Win Rate, Best Trade, Worst Trade, Total P&L, Avg Hold Time
- Equity curve (SVG line chart showing running P&L)
- Trade history table

### 18. ECONOMIC CALENDAR (section-calendar, fullPage)
- Filter dropdown: All / RBI / Earnings / IPO / Index / Global
- Event cards sorted by date (upcoming first, past dimmed)
- Each card: date column (day, month/year, days-until pill), event body (category icon, title, impact badge HIGH/MED/LOW, description)
- 24 events including: RBI MPC meetings, Union Budget, TCS/Infosys/HDFC/Reliance/ICICI earnings, IPO seasons, Nifty rebalancing, NSE F&O expiry, US FOMC meetings

### 19. STOCK SCREENER PRO (section-screener-pro, fullPage)
- Advanced filters: Sector, Min/Max Price, Min/Max P/E, Min Change%, Sort by
- Results table with Buy button

### 20. SETTINGS (section-settings, fullPage)
- Profile card with avatar, name, balance, order count, watchlist count
- Account: Display Name input, Virtual Balance, Reset to ₹10L button
- Appearance: Dark/Light theme toggle, Accent color picker (6 colors: Emerald, Indigo, Amber, Pink, Cyan, Red)
- Data & Prices: Live update interval selector (10s/20s/30s/60s), Price simulation toggle
- Notifications: Market open/close, Price alerts, News alerts toggles
- Keyboard Shortcuts list

### 21. ORDER MODAL (global overlay)
Triggered by Buy/Sell buttons:
- Stock name + current price
- Buy / Sell tab toggle
- Quantity input + lot size helper
- Order type: MARKET / LIMIT (limit shows price input)
- Product: MIS (Intraday) / CNC (Delivery)
- Order summary: Qty × Price = Total, Balance after
- Place Order button → deducts balance, adds to orders array, shows toast

### 22. STOCK DETAIL MODAL (global overlay)
Triggered by clicking stock row:
- Company name, symbol, sector
- Current price + day change
- Market cap, P/E ratio
- 52-week high/low with range bar
- Simulated price history chart (SVG line)
- Volume chart
- About company section (1-2 lines)
- Watchlist toggle button
- Buy/Sell buttons

### 23. TOAST NOTIFICATIONS
- Top-right slide-in notifications
- Types: success (green), error (red), info (blue), warning (amber)
- Auto-dismiss after 3s

### 24. CRYPTO MINI TRACKER (on dashboard)
- BTC, ETH, SOL, BNB with live simulated prices

---

## DATA STRUCTURES

### Stocks Array (90+ stocks)
```javascript
var stocks = [
  { 
    symbol: 'RELIANCE', 
    name: 'Reliance Industries Ltd', 
    price: 2912.50, 
    change: 1.45,          // day change %
    marketCap: '19.7L Cr', 
    pe: 29.3, 
    sector: 'Energy', 
    color: '#0057a8',      // brand color for logo
    logoText: 'R',         // initials for avatar
    k: 'ril mukesh ambani jio petro refinery'  // search keywords
  },
  // ... 90+ more
];
```

### Sectors: Energy, Technology, Finance, Infrastructure, Healthcare, Auto, Metals, Consumer, Telecom, Chemicals, Defense, Airlines, Realty

### Mutual Funds Array (~30 funds)
```javascript
var mutualFunds = [
  { name: 'Mirae Asset Large Cap Fund Direct', nav: 98.45, ret1y: 18.2, ret3y: 14.5, aum: 35420, risk: 'High', rating: 5, category: 'Large Cap' },
  // ...
];
```

### IPO Array (~10 IPOs)
```javascript
var ipoData = [
  { name: 'Ola Electric Mobility', sector: 'Auto', priceHigh: 76, priceLow: 72, lotSize: 195, minInvest: 14820, gmp: 8, subscribed: 4.27, status: 'listed', openDate: '2024-08-02', closeDate: '2024-08-06', listPrice: 76, currentPrice: 68.5 },
  // ...
];
```

### Portfolio Holdings
```javascript
var portfolioHoldings = [
  { symbol: 'TCS', qty: 10, avgCost: 3650 },
  { symbol: 'INFY', qty: 25, avgCost: 1480 },
  // ...
];
```

### Indices
```javascript
var indices = [
  { name: 'NIFTY 50',   label: 'NSE Benchmark', value: 22456.80, change: 0.42  },
  { name: 'SENSEX',     label: 'BSE Benchmark', value: 73982.65, change: 0.38  },
  { name: 'BANK NIFTY', label: 'NSE Banking',   value: 48235.40, change: -0.25 },
  { name: 'NIFTY IT',   label: 'NSE IT Sector', value: 34156.20, change: 1.85  },
];
```

---

## KEY JAVASCRIPT FUNCTIONS

```javascript
// Navigation
function setView(view) { /* shows/hides sections */ }

// Data
function filterAndRenderStocks() { /* sector filter on main screener */ }
function renderAllStocks() { /* paginated all stocks table */ }
function renderGainers() { /* top 10 gainers + losers + sector perf */ }
function renderMutualFunds() { /* fund table with category filter */ }
function renderIPO() { /* IPO card grid */ }
function renderPortfolio() { /* portfolio table + donut */ }
function renderOrderHistory() { /* orders table */ }
function renderHeatmap() { /* treemap grid */ }
function renderJournal() { /* equity curve + trade history */ }
function renderCalendar() { /* economic calendar events */ }
function applyScreenerPro() { /* advanced screener */ }

// Trading
function openOrderModal(stock, side) { /* BUY/SELL modal */ }
function placeOrder() { /* executes trade, updates balance */ }
function openStockDetail(stock) { /* stock detail modal */ }
function toggleWatchlist(symbol) { /* add/remove watchlist */ }

// Calculators
function calcSIP() { /* SIP calculator */ }
function calcLumpsum() { /* lumpsum calculator */ }
function calcWhatIf() { /* what-if calculator */ }

// Market
function updateMarketStatus() { /* NSE open/closed check */ }
function startPriceSimulation() { /* ±0.5% random drift every 10s */ }
function fetchFearGreedData() { /* Yahoo Finance via proxy */ }
function fetchLiveNews() { /* Google News RSS via proxy */ }

// UI
function showToast(msg, type) { /* toast notification */ }
function setTheme(theme) { /* dark/light */ }
function setAccent(color, colorDark) { /* CSS variable accent */ }
function renderCompare() { /* sector comparison table */ }

// Proxy pattern
var PROXIES = [
  window.location.origin + '/?url=',   // Render deployment
  'http://127.0.0.1:5005/?url=',        // local dev
];
async function fetchWithFallback(url) { /* tries each proxy in order */ }
```

---

## BACKEND PROXY (FastAPI)

File: `main.py` — serves frontend files + proxy endpoint  
File: `app_config.py` — pydantic settings  
File: `proxy_router.py` — `GET /api/proxy?url=<encoded_url>` (whitelisted domains only)  
File: `market_data.py` — Yahoo Finance crumb manager  
File: `rate_limiter.py` — 120 req/min rate limiter  

**Whitelisted domains:** query1.finance.yahoo.com, query2.finance.yahoo.com, fc.yahoo.com, stooq.com, www.stooq.com, news.google.com

The frontend calls: `window.location.origin + '/?url=' + encodeURIComponent(targetUrl)` on Render  
The root route `/?url=` in main.py proxies the request transparently.

---

## VIRTUAL TRADING MECHANICS
- Starting balance: ₹10,00,000 (stored in localStorage)
- BUY: deducts `qty × price` from balance, adds to orders + portfolio
- SELL: adds `qty × price` to balance
- Orders stored in localStorage as JSON array
- Portfolio = current holdings based on net BUY-SELL for each symbol
- P&L = (LTP - avgCost) × qty

---

## MARKET STATUS LOGIC
```javascript
// NSE trading hours: 9:15 AM – 3:30 PM IST, Monday–Friday
function updateMarketStatus() {
  var now = new Date();
  var ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
  var day = ist.getDay(); // 0=Sun, 6=Sat
  var h = ist.getHours(), m = ist.getMinutes();
  var mins = h * 60 + m;
  var isOpen = day >= 1 && day <= 5 && mins >= 555 && mins < 930; // 9:15–15:30
  // update status dot and text
}
```

---

## PRICE SIMULATION
```javascript
// Every 10 seconds, all stock prices drift ±0.5% randomly
// Indices drift ±0.3% 
// Crypto drifts ±1.5%
// This creates a live-feeling market
```

---

## SEARCH AUTOCOMPLETE
- Searches: symbol exact match, name contains, keyword (k field) contains
- Shows up to 8 results in dropdown
- Click result → opens stock detail modal

---

## DESIGN REQUIREMENTS FOR PROTOTYPE

### Must have:
1. **Premium dark theme** — deep navy/charcoal, NOT warm brown/ember. Think #0A0E1A or #0D1117
2. **Accent color** — electric blue (#2563EB) or neon green (#00D4AA) or gold (#F59E0B)
3. **Glassmorphism cards** — backdrop-filter: blur(20px), subtle borders
4. **Micro-animations** — hover lifts, number counting up, smooth transitions
5. **Data density** — trading platforms show lots of info compactly, not airy SaaS
6. **Color-coded everything** — green gains, red losses, consistent throughout
7. **Monospace numbers** — use font-variant-numeric: tabular-nums for price columns
8. **Responsive layout** — sidebar collapses on mobile

### Typography suggestion:
```css
font-family: 'JetBrains Mono', 'Fira Code', monospace; /* for prices */
font-family: 'Inter', 'DM Sans', sans-serif;            /* for UI */
font-family: 'Syne', 'Space Grotesk', sans-serif;       /* for headings */
```

### Layout:
- Fixed sidebar (240px wide) | Scrollable main content
- Sticky top header with glassmorphism
- Ticker bar between header and content
- Content padding: 24px

### Component patterns:
- Cards: rounded-2xl, glass bg, subtle gradient top border in accent color
- Tables: alternating rows, hover highlight, sticky header
- Buttons: primary (accent solid), secondary (glass), icon-only (ghost)
- Badges: pill-shaped, sector colors
- Modals: centered overlay with blur backdrop, slide-up animation

---

## FILE SIZE REFERENCE
- index.html: ~1033 lines
- style.css: ~2246 lines  
- script.js: ~3218 lines

The new prototype can be larger if needed for quality. Prioritize correctness and visual excellence.

---

## SAMPLE STOCKS DATA (first 20, use all 90+ in actual file)

```javascript
var stocks = [
  { symbol:'RELIANCE',   name:'Reliance Industries Ltd',   price:2912.50,  change:1.45,  marketCap:'19.7L Cr', pe:29.3, sector:'Energy',         color:'#0057a8', logoText:'R', k:'ril mukesh ambani jio petro refinery' },
  { symbol:'TCS',        name:'Tata Consultancy Services', price:3812.00,  change:0.82,  marketCap:'13.9L Cr', pe:32.1, sector:'Technology',      color:'#1a1a5e', logoText:'T', k:'tata consultancy it software services' },
  { symbol:'HDFCBANK',   name:'HDFC Bank Ltd',             price:1645.30,  change:-0.35, marketCap:'12.5L Cr', pe:20.4, sector:'Finance',         color:'#004c8f', logoText:'H', k:'hdfc bank housing development finance' },
  { symbol:'INFY',       name:'Infosys Ltd',               price:1512.80,  change:1.20,  marketCap:'6.3L Cr',  pe:27.8, sector:'Technology',      color:'#007cc3', logoText:'I', k:'infosys it software narayana murthy' },
  { symbol:'ICICIBANK',  name:'ICICI Bank Ltd',            price:1098.50,  change:0.65,  marketCap:'7.7L Cr',  pe:18.9, sector:'Finance',         color:'#f9a01b', logoText:'I', k:'icici bank private' },
  { symbol:'LT',         name:'Larsen & Toubro Ltd',       price:3456.70,  change:2.10,  marketCap:'4.7L Cr',  pe:35.2, sector:'Infrastructure',  color:'#00a651', logoText:'L', k:'larsen toubro l&t engineering construction' },
  { symbol:'BAJFINANCE', name:'Bajaj Finance Ltd',         price:6892.40,  change:-1.20, marketCap:'4.2L Cr',  pe:33.7, sector:'Finance',         color:'#003087', logoText:'B', k:'bajaj finance nbfc lending emi' },
  { symbol:'HINDUNILVR', name:'Hindustan Unilever Ltd',    price:2234.60,  change:0.55,  marketCap:'5.2L Cr',  pe:58.4, sector:'Consumer',        color:'#1a3068', logoText:'H', k:'hul hindustan unilever fmcg surf dove lux' },
  { symbol:'WIPRO',      name:'Wipro Ltd',                 price:448.90,   change:0.92,  marketCap:'2.3L Cr',  pe:22.6, sector:'Technology',      color:'#341b5e', logoText:'W', k:'wipro it software services' },
  { symbol:'SBIN',       name:'State Bank of India',       price:812.40,   change:-0.18, marketCap:'7.2L Cr',  pe:12.3, sector:'Finance',         color:'#2980b9', logoText:'S', k:'sbi state bank india psu' },
  { symbol:'SUNPHARMA',  name:'Sun Pharmaceutical Ind',    price:1389.25,  change:0.75,  marketCap:'3.3L Cr',  pe:38.6, sector:'Healthcare',      color:'#e84393', logoText:'S', k:'sun pharma pharmaceutical dilip shanghvi' },
  { symbol:'MARUTI',     name:'Maruti Suzuki India Ltd',   price:11245.80, change:-0.65, marketCap:'3.4L Cr',  pe:26.8, sector:'Auto',            color:'#0059a3', logoText:'M', k:'maruti suzuki car automobile swift dzire' },
  { symbol:'HCLTECH',    name:'HCL Technologies Ltd',      price:1342.60,  change:0.95,  marketCap:'3.6L Cr',  pe:24.3, sector:'Technology',      color:'#0074D3', logoText:'H', k:'hcl tech technologies it software shiv nadar' },
  { symbol:'AXISBANK',   name:'Axis Bank Ltd',             price:1068.20,  change:0.88,  marketCap:'3.3L Cr',  pe:16.2, sector:'Finance',         color:'#97144d', logoText:'A', k:'axis bank private' },
  { symbol:'TATAMOTORS', name:'Tata Motors Ltd',           price:892.30,   change:1.85,  marketCap:'3.3L Cr',  pe:9.8,  sector:'Auto',            color:'#2c3e7e', logoText:'T', k:'tata motors jaguar land rover jlr ev nexon harrier' },
  { symbol:'BHARTIARTL', name:'Bharti Airtel Ltd',         price:1398.60,  change:1.42,  marketCap:'8.3L Cr',  pe:78.2, sector:'Telecom',         color:'#e40000', logoText:'A', k:'airtel bharti telecom mobile sunil mittal' },
  { symbol:'ITC',        name:'ITC Ltd',                   price:456.80,   change:0.32,  marketCap:'5.7L Cr',  pe:26.8, sector:'Consumer',        color:'#006b3c', logoText:'I', k:'itc cigarette fmcg hotels tobacco' },
  { symbol:'ZOMATO',     name:'Zomato Ltd',                price:234.50,   change:2.45,  marketCap:'2.1L Cr',  pe:null, sector:'Technology',      color:'#e23744', logoText:'Z', k:'zomato food delivery restaurant tech' },
  { symbol:'ADANIENT',   name:'Adani Enterprises Ltd',     price:2456.30,  change:1.82,  marketCap:'2.8L Cr',  pe:68.2, sector:'Infrastructure',  color:'#0061ab', logoText:'A', k:'adani enterprises gautam green energy' },
  { symbol:'DMART',      name:'Avenue Supermarts (DMart)', price:4234.60,  change:-0.22, marketCap:'2.7L Cr',  pe:82.4, sector:'Consumer',        color:'#e41e26', logoText:'D', k:'dmart avenue supermarts supermarket retail' },
];
```

---

## WHAT TO GENERATE
Please generate all three files as complete, working code:
1. `index.html` — complete HTML with all sections
2. `style.css` — complete CSS with the new premium design
3. `script.js` — complete JS with all features functional

The prototype should be openable directly in a browser (file://) without any build step.
Use CDN for fonts and Lucide icons. Keep the FastAPI proxy pattern in fetchWithFallback() but the UI should work standalone with simulated data as fallback.
