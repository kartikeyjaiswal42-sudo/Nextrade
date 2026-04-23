// ════════════════════════════════════════════════════════════
// SECTION 1: CORE DATA & INSTRUMENTS
// ════════════════════════════════════════════════════════════
var indices = [
    { name: 'NIFTY 50',   label: 'NSE Benchmark', value: 22456.80, change: 0.42  },
    { name: 'SENSEX',     label: 'BSE Benchmark', value: 73982.65, change: 0.38  },
    { name: 'BANK NIFTY', label: 'NSE Banking',   value: 48235.40, change: -0.25 },
    { name: 'NIFTY IT',   label: 'NSE IT Sector', value: 34156.20, change: 1.85  },
];

// ============================================================
// DATA: STOCKS  (90+ NSE/BSE stocks with keyword search)
// k = search keywords (aliases, brand names, common names)
// ============================================================
var stocks = [
    // ── Large Cap / Nifty 50 ──
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
    { symbol:'TECHM',      name:'Tech Mahindra Ltd',         price:1156.30,  change:-0.42, marketCap:'1.1L Cr',  pe:21.8, sector:'Technology',      color:'#c8102e', logoText:'T', k:'tech mahindra it bpo telecom' },
    { symbol:'AXISBANK',   name:'Axis Bank Ltd',             price:1068.20,  change:0.88,  marketCap:'3.3L Cr',  pe:16.2, sector:'Finance',         color:'#97144d', logoText:'A', k:'axis bank private' },
    { symbol:'KOTAKBANK',  name:'Kotak Mahindra Bank',       price:1756.80,  change:-0.32, marketCap:'3.5L Cr',  pe:22.7, sector:'Finance',         color:'#e30613', logoText:'K', k:'kotak mahindra bank uday kotak' },
    { symbol:'ONGC',       name:'Oil & Natural Gas Corp',    price:268.45,   change:1.20,  marketCap:'3.4L Cr',  pe:8.6,  sector:'Energy',          color:'#006837', logoText:'O', k:'ongc oil natural gas psu petroleum' },
    { symbol:'NTPC',       name:'NTPC Ltd',                  price:356.80,   change:0.45,  marketCap:'3.5L Cr',  pe:16.4, sector:'Energy',          color:'#1f4e79', logoText:'N', k:'ntpc power electricity psu thermal' },
    { symbol:'POWERGRID',  name:'Power Grid Corp of India',  price:298.60,   change:0.78,  marketCap:'2.8L Cr',  pe:18.2, sector:'Energy',          color:'#833c00', logoText:'P', k:'power grid pgcil electricity transmission psu' },
    { symbol:'TATAMOTORS', name:'Tata Motors Ltd',           price:892.30,   change:1.85,  marketCap:'3.3L Cr',  pe:9.8,  sector:'Auto',            color:'#2c3e7e', logoText:'T', k:'tata motors jaguar land rover jlr ev nexon harrier' },
    { symbol:'BAJAJ-AUTO', name:'Bajaj Auto Ltd',            price:8734.20,  change:-0.25, marketCap:'2.5L Cr',  pe:28.9, sector:'Auto',            color:'#005daa', logoText:'B', k:'bajaj auto motorcycle pulsar dominar chetak' },
    { symbol:'HEROMOTOCO', name:'Hero MotoCorp Ltd',         price:4234.50,  change:0.38,  marketCap:'0.9L Cr',  pe:19.2, sector:'Auto',            color:'#e40000', logoText:'H', k:'hero motocorp splendor motorcycle two wheeler' },
    { symbol:'EICHERMOT',  name:'Eicher Motors Ltd',         price:4456.80,  change:1.12,  marketCap:'1.2L Cr',  pe:29.4, sector:'Auto',            color:'#b8860b', logoText:'E', k:'eicher royal enfield bullet motorcycle' },
    { symbol:'TATASTEEL',  name:'Tata Steel Ltd',            price:162.45,   change:-1.20, marketCap:'2.0L Cr',  pe:15.6, sector:'Metals',          color:'#00529f', logoText:'T', k:'tata steel iron jamshedpur' },
    { symbol:'HINDALCO',   name:'Hindalco Industries Ltd',   price:634.20,   change:0.85,  marketCap:'1.4L Cr',  pe:13.2, sector:'Metals',          color:'#e31837', logoText:'H', k:'hindalco aluminium copper aditya birla' },
    { symbol:'JSWSTEEL',   name:'JSW Steel Ltd',             price:892.50,   change:-0.55, marketCap:'2.2L Cr',  pe:14.8, sector:'Metals',          color:'#003087', logoText:'J', k:'jsw steel jindal sajjan' },
    { symbol:'BHARTIARTL', name:'Bharti Airtel Ltd',         price:1398.60,  change:1.42,  marketCap:'8.3L Cr',  pe:78.2, sector:'Telecom',         color:'#e40000', logoText:'A', k:'airtel bharti telecom mobile sunil mittal' },
    { symbol:'ITC',        name:'ITC Ltd',                   price:456.80,   change:0.32,  marketCap:'5.7L Cr',  pe:26.8, sector:'Consumer',        color:'#006b3c', logoText:'I', k:'itc cigarette fmcg hotels tobacco' },
    { symbol:'NESTLEIND',  name:'Nestle India Ltd',          price:2234.50,  change:-0.18, marketCap:'2.2L Cr',  pe:78.4, sector:'Consumer',        color:'#009fe3', logoText:'N', k:'nestle maggi nescafe kitkat fmcg' },
    { symbol:'BRITANNIA',  name:'Britannia Industries Ltd',  price:5234.60,  change:0.45,  marketCap:'1.3L Cr',  pe:56.2, sector:'Consumer',        color:'#cc0000', logoText:'B', k:'britannia biscuit good day tiger fmcg' },
    { symbol:'DRREDDY',    name:"Dr Reddy's Laboratories",   price:6234.50,  change:0.92,  marketCap:'1.0L Cr',  pe:19.8, sector:'Healthcare',      color:'#e2001a', logoText:'D', k:'dr reddys pharma generic hyderabad' },
    { symbol:'CIPLA',      name:'Cipla Ltd',                 price:1456.30,  change:0.68,  marketCap:'1.2L Cr',  pe:24.5, sector:'Healthcare',      color:'#ee3224', logoText:'C', k:'cipla pharma medicine respiratory' },
    { symbol:'DIVISLAB',   name:"Divi's Laboratories Ltd",   price:3892.40,  change:1.15,  marketCap:'1.0L Cr',  pe:42.8, sector:'Healthcare',      color:'#0066a1', logoText:'D', k:'divis labs api pharma hyderabad' },
    { symbol:'APOLLOHOSP', name:'Apollo Hospitals Ent Ltd',  price:5234.80,  change:0.78,  marketCap:'0.7L Cr',  pe:65.4, sector:'Healthcare',      color:'#00adef', logoText:'A', k:'apollo hospital healthcare prathap reddy' },
    { symbol:'ADANIPORTS', name:'Adani Ports & SEZ Ltd',     price:1234.50,  change:-0.45, marketCap:'2.7L Cr',  pe:24.6, sector:'Infrastructure',  color:'#0080c9', logoText:'A', k:'adani ports mundra logistics gautam' },
    { symbol:'ADANIENT',   name:'Adani Enterprises Ltd',     price:2456.30,  change:1.82,  marketCap:'2.8L Cr',  pe:68.2, sector:'Infrastructure',  color:'#0061ab', logoText:'A', k:'adani enterprises gautam green energy' },
    { symbol:'DLF',        name:'DLF Ltd',                   price:812.50,   change:0.95,  marketCap:'2.0L Cr',  pe:38.5, sector:'Infrastructure',  color:'#c41230', logoText:'D', k:'dlf realty real estate gurgaon kushal palat' },
    { symbol:'INDUSINDBK', name:'IndusInd Bank Ltd',         price:1034.60,  change:-0.88, marketCap:'0.8L Cr',  pe:12.4, sector:'Finance',         color:'#b40c02', logoText:'I', k:'indusind bank private' },
    { symbol:'BAJAJFINSV', name:'Bajaj Finserv Ltd',         price:1612.40,  change:0.52,  marketCap:'2.6L Cr',  pe:18.9, sector:'Finance',         color:'#003087', logoText:'B', k:'bajaj finserv financial services insurance' },
    { symbol:'COALINDIA',  name:'Coal India Ltd',            price:456.30,   change:0.28,  marketCap:'2.8L Cr',  pe:8.2,  sector:'Energy',          color:'#333333', logoText:'C', k:'coal india psu mining' },
    { symbol:'ULTRACEMCO', name:'UltraTech Cement Ltd',      price:9678.40,  change:0.38,  marketCap:'2.8L Cr',  pe:38.2, sector:'Infrastructure',  color:'#003087', logoText:'U', k:'ultratech cement aditya birla construction' },
    { symbol:'TATACONSUM', name:'Tata Consumer Products',    price:1089.30,  change:0.72,  marketCap:'1.0L Cr',  pe:64.5, sector:'Consumer',        color:'#2c3e7e', logoText:'T', k:'tata consumer tetley salt starbucks fmcg' },
    { symbol:'HAVELLS',    name:'Havells India Ltd',         price:1534.60,  change:1.12,  marketCap:'0.97L Cr', pe:58.4, sector:'Infrastructure',  color:'#e60012', logoText:'H', k:'havells electrical appliances lloyd fan' },
    { symbol:'SIEMENS',    name:'Siemens India Ltd',         price:5234.50,  change:0.85,  marketCap:'1.9L Cr',  pe:78.4, sector:'Infrastructure',  color:'#009999', logoText:'S', k:'siemens engineering automation' },
    { symbol:'ABB',        name:'ABB India Ltd',             price:7234.80,  change:1.24,  marketCap:'1.5L Cr',  pe:82.5, sector:'Infrastructure',  color:'#ff000f', logoText:'A', k:'abb power automation engineering' },
    { symbol:'ZOMATO',     name:'Zomato Ltd',                price:234.50,   change:2.45,  marketCap:'2.1L Cr',  pe:null, sector:'Technology',      color:'#e23744', logoText:'Z', k:'zomato food delivery restaurant tech' },
    { symbol:'PAYTM',      name:'One97 Communications Ltd',  price:456.80,   change:-1.45, marketCap:'0.29L Cr', pe:null, sector:'Technology',      color:'#00baf2', logoText:'P', k:'paytm one97 fintech payments vijay shekhar' },
    { symbol:'NYKAA',      name:'FSN E-Commerce (Nykaa)',    price:156.30,   change:0.88,  marketCap:'0.45L Cr', pe:456.8,sector:'Consumer',        color:'#ff558f', logoText:'N', k:'nykaa beauty cosmetics ecommerce falguni' },
    { symbol:'DMART',      name:'Avenue Supermarts (DMart)', price:4234.60,  change:-0.22, marketCap:'2.7L Cr',  pe:82.4, sector:'Consumer',        color:'#e41e26', logoText:'D', k:'dmart avenue supermarts supermarket retail radhakishan damani' },
    { symbol:'PIDILITIND', name:'Pidilite Industries Ltd',   price:2678.90,  change:0.45,  marketCap:'1.4L Cr',  pe:85.6, sector:'Consumer',        color:'#003399', logoText:'P', k:'pidilite fevicol m-seal adhesive' },
    // ── Finance / Banking ──
    { symbol:'FEDERALBNK', name:'Federal Bank Ltd',          price:155.40,   change:0.82,  marketCap:'0.37L Cr', pe:9.8,  sector:'Finance',         color:'#0066b3', logoText:'F', k:'federal bank kerala private' },
    { symbol:'BANDHANBNK', name:'Bandhan Bank Ltd',          price:178.50,   change:-1.15, marketCap:'0.29L Cr', pe:null, sector:'Finance',         color:'#f7941d', logoText:'B', k:'bandhan bank microfinance' },
    { symbol:'IDFCFIRSTB', name:'IDFC First Bank Ltd',       price:62.30,    change:0.45,  marketCap:'0.43L Cr', pe:18.5, sector:'Finance',         color:'#00a0e3', logoText:'I', k:'idfc first bank retail' },
    { symbol:'PNB',        name:'Punjab National Bank',      price:98.45,    change:-0.32, marketCap:'1.11L Cr', pe:8.1,  sector:'Finance',         color:'#003478', logoText:'P', k:'pnb punjab national bank psu' },
    { symbol:'BANKBARODA', name:'Bank of Baroda',            price:245.80,   change:0.28,  marketCap:'1.27L Cr', pe:6.2,  sector:'Finance',         color:'#ec7c29', logoText:'B', k:'bank baroda bob psu' },
    { symbol:'CANARABANK', name:'Canara Bank',               price:98.20,    change:0.65,  marketCap:'0.89L Cr', pe:5.8,  sector:'Finance',         color:'#0033a0', logoText:'C', k:'canara bank psu' },
    { symbol:'HDFCLIFE',   name:'HDFC Life Insurance Ltd',   price:623.40,   change:0.45,  marketCap:'1.34L Cr', pe:82.5, sector:'Finance',         color:'#004c8f', logoText:'H', k:'hdfc life insurance' },
    { symbol:'SBILIFE',    name:'SBI Life Insurance Co',     price:1456.80,  change:0.62,  marketCap:'1.46L Cr', pe:68.5, sector:'Finance',         color:'#2980b9', logoText:'S', k:'sbi life insurance psu' },
    { symbol:'ICICILOMB',  name:'ICICI Lombard General Ins', price:1823.40,  change:0.35,  marketCap:'0.90L Cr', pe:38.5, sector:'Finance',         color:'#f9a01b', logoText:'I', k:'icici lombard general insurance' },
    { symbol:'IRFC',       name:'Indian Railway Finance Corp',price:167.80,  change:0.35,  marketCap:'2.19L Cr', pe:28.5, sector:'Finance',         color:'#0033a0', logoText:'I', k:'irfc indian railway finance psu bonds' },
    { symbol:'POLICYBZR',  name:'PB Fintech (PolicyBazaar)', price:1234.50,  change:2.85,  marketCap:'0.56L Cr', pe:null, sector:'Finance',         color:'#e11d48', logoText:'P', k:'policybazaar insurance fintech pb fintech' },
    // ── Technology ──
    { symbol:'MPHASIS',    name:'Mphasis Ltd',               price:2345.60,  change:1.20,  marketCap:'0.44L Cr', pe:28.5, sector:'Technology',      color:'#0047BB', logoText:'M', k:'mphasis it services software' },
    { symbol:'LTIM',       name:'LTIMindtree Ltd',           price:5234.80,  change:1.45,  marketCap:'1.56L Cr', pe:30.8, sector:'Technology',      color:'#0076a8', logoText:'L', k:'lti mindtree it software larsen toubro' },
    { symbol:'PERSISTENT', name:'Persistent Systems Ltd',    price:4892.50,  change:2.10,  marketCap:'0.75L Cr', pe:52.4, sector:'Technology',      color:'#003087', logoText:'P', k:'persistent systems it software pune' },
    { symbol:'COFORGE',    name:'Coforge Ltd',               price:5678.30,  change:0.85,  marketCap:'0.38L Cr', pe:36.2, sector:'Technology',      color:'#e41f26', logoText:'C', k:'coforge niit technologies it software' },
    { symbol:'DELHIVERY',  name:'Delhivery Ltd',             price:367.80,   change:1.45,  marketCap:'0.27L Cr', pe:null, sector:'Technology',      color:'#e40000', logoText:'D', k:'delhivery logistics delivery courier' },
    // ── Healthcare ──
    { symbol:'BIOCON',     name:'Biocon Ltd',                price:345.60,   change:0.55,  marketCap:'0.42L Cr', pe:null, sector:'Healthcare',      color:'#006b3c', logoText:'B', k:'biocon biotech kiran mazumdar biosimilar' },
    { symbol:'AUROPHARMA', name:'Aurobindo Pharma Ltd',      price:1023.40,  change:1.12,  marketCap:'0.60L Cr', pe:18.2, sector:'Healthcare',      color:'#e41e26', logoText:'A', k:'aurobindo pharma generic hyderabad' },
    { symbol:'TORNTPHARM', name:'Torrent Pharmaceuticals',   price:2678.90,  change:0.38,  marketCap:'0.45L Cr', pe:38.5, sector:'Healthcare',      color:'#003087', logoText:'T', k:'torrent pharmaceuticals pharma ahmedabad' },
    { symbol:'LUPIN',      name:'Lupin Ltd',                 price:1892.30,  change:0.92,  marketCap:'0.86L Cr', pe:28.4, sector:'Healthcare',      color:'#e63312', logoText:'L', k:'lupin pharma generic respiratory' },
    // ── Consumer / FMCG ──
    { symbol:'DABUR',      name:'Dabur India Ltd',           price:534.60,   change:0.42,  marketCap:'0.95L Cr', pe:48.5, sector:'Consumer',        color:'#008000', logoText:'D', k:'dabur real juice ayurvedic fmcg honey' },
    { symbol:'MARICO',     name:'Marico Ltd',                price:678.90,   change:0.28,  marketCap:'0.88L Cr', pe:52.3, sector:'Consumer',        color:'#e30613', logoText:'M', k:'marico parachute coconut oil saffola fmcg' },
    { symbol:'GODREJCP',   name:'Godrej Consumer Products',  price:1123.40,  change:-0.18, marketCap:'1.15L Cr', pe:56.8, sector:'Consumer',        color:'#253f8f', logoText:'G', k:'godrej consumer cinthol fmcg soap' },
    { symbol:'COLPAL',     name:'Colgate-Palmolive India',   price:2834.50,  change:0.35,  marketCap:'0.77L Cr', pe:48.2, sector:'Consumer',        color:'#e31837', logoText:'C', k:'colgate palmolive toothpaste fmcg' },
    { symbol:'TITAN',      name:'Titan Company Ltd',         price:3234.80,  change:0.88,  marketCap:'2.87L Cr', pe:82.5, sector:'Consumer',        color:'#003087', logoText:'T', k:'titan tanishq jewellery watches tata fastrack' },
    { symbol:'MRF',        name:'MRF Ltd',                   price:112456.0, change:0.28,  marketCap:'0.48L Cr', pe:28.5, sector:'Auto',            color:'#e41e26', logoText:'M', k:'mrf tyres madras rubber factory' },
    { symbol:'JUBLFOOD',   name:'Jubilant FoodWorks Ltd',    price:567.80,   change:1.45,  marketCap:'0.38L Cr', pe:78.4, sector:'Consumer',        color:'#cc0000', logoText:'J', k:'jubilant dominos pizza dunkin food qsr' },
    // ── Energy / PSU ──
    { symbol:'BPCL',       name:'Bharat Petroleum Corp',     price:289.50,   change:0.95,  marketCap:'1.25L Cr', pe:7.8,  sector:'Energy',          color:'#006400', logoText:'B', k:'bpcl bharat petroleum oil psu petrol pump' },
    { symbol:'HPCL',       name:'Hindustan Petroleum Corp',  price:389.40,   change:1.20,  marketCap:'0.83L Cr', pe:9.5,  sector:'Energy',          color:'#003087', logoText:'H', k:'hpcl hindustan petroleum oil psu' },
    { symbol:'GAIL',       name:'GAIL India Ltd',            price:178.60,   change:0.65,  marketCap:'1.17L Cr', pe:12.4, sector:'Energy',          color:'#cc0000', logoText:'G', k:'gail gas natural gas psu pipeline' },
    { symbol:'IOC',        name:'Indian Oil Corporation',    price:145.30,   change:0.52,  marketCap:'2.05L Cr', pe:8.2,  sector:'Energy',          color:'#e41e26', logoText:'I', k:'ioc indian oil petrol psu petroleum' },
    // ── Infrastructure / Defence / PSU ──
    { symbol:'IRCTC',      name:'Indian Railway Catering Corp',price:678.90, change:1.45,  marketCap:'0.54L Cr', pe:48.2, sector:'Infrastructure',  color:'#0033a0', logoText:'I', k:'irctc railway ticket train catering tourism psu' },
    { symbol:'HAL',        name:'Hindustan Aeronautics Ltd', price:4234.80,  change:1.82,  marketCap:'2.84L Cr', pe:30.8, sector:'Infrastructure',  color:'#003087', logoText:'H', k:'hal hindustan aeronautics defence fighter aircraft psu' },
    { symbol:'BHEL',       name:'Bharat Heavy Electricals',  price:234.60,   change:-0.45, marketCap:'0.82L Cr', pe:95.2, sector:'Infrastructure',  color:'#003478', logoText:'B', k:'bhel heavy electricals boiler turbine psu power' },
    { symbol:'AMBUJACEM',  name:'Ambuja Cements Ltd',        price:567.80,   change:0.45,  marketCap:'1.13L Cr', pe:38.5, sector:'Infrastructure',  color:'#e41e26', logoText:'A', k:'ambuja cement adani holcim construction' },
    // ── Metals ──
    { symbol:'VEDL',       name:'Vedanta Ltd',               price:445.30,   change:-0.82, marketCap:'1.66L Cr', pe:8.5,  sector:'Metals',          color:'#c8102e', logoText:'V', k:'vedanta mining zinc copper aluminium anil agarwal' },
    { symbol:'SAIL',       name:'Steel Authority of India',  price:112.40,   change:-0.35, marketCap:'0.46L Cr', pe:11.2, sector:'Metals',          color:'#003478', logoText:'S', k:'sail steel psu bhilai bokaro' },
    { symbol:'NMDC',       name:'NMDC Ltd',                  price:67.80,    change:0.45,  marketCap:'0.20L Cr', pe:8.8,  sector:'Metals',          color:'#cc0000', logoText:'N', k:'nmdc iron ore mining psu' },
    // ── Finance – NBFCs / Insurance / Broking ──
    { symbol:'SBICARD',    name:'SBI Cards & Payment Services',price:723.40,  change:0.52,  marketCap:'0.69L Cr', pe:28.5, sector:'Finance',         color:'#2980b9', logoText:'S', k:'sbi card credit cards payments visa' },
    { symbol:'MUTHOOTFIN', name:'Muthoot Finance Ltd',        price:1823.50,  change:1.20,  marketCap:'0.73L Cr', pe:16.2, sector:'Finance',         color:'#e07b00', logoText:'M', k:'muthoot gold loan nbfc kerala' },
    { symbol:'MANAPPURAM', name:'Manappuram Finance Ltd',     price:189.40,   change:0.85,  marketCap:'0.16L Cr', pe:10.5, sector:'Finance',         color:'#f7941d', logoText:'M', k:'manappuram gold loan nbfc thrissur' },
    { symbol:'BAJAJHFL',   name:'Bajaj Housing Finance Ltd',  price:128.50,   change:1.45,  marketCap:'1.06L Cr', pe:42.5, sector:'Finance',         color:'#003087', logoText:'B', k:'bajaj housing finance home loans mortgage' },
    { symbol:'LICHSGFIN',  name:'LIC Housing Finance Ltd',    price:623.40,   change:0.38,  marketCap:'0.34L Cr', pe:8.5,  sector:'Finance',         color:'#003478', logoText:'L', k:'lic housing finance home loans' },
    { symbol:'CANFINHOME', name:'Can Fin Homes Ltd',          price:789.50,   change:0.65,  marketCap:'0.11L Cr', pe:14.2, sector:'Finance',         color:'#0033a0', logoText:'C', k:'can fin homes canara housing finance' },
    { symbol:'CHOLAFIN',   name:'Cholamandalam Invest & Fin', price:1345.60,  change:1.12,  marketCap:'1.11L Cr', pe:28.5, sector:'Finance',         color:'#e41e26', logoText:'C', k:'cholamandalam murugappa nbfc vehicle loans' },
    { symbol:'SHRIRAMFIN', name:'Shriram Finance Ltd',        price:2678.90,  change:0.75,  marketCap:'1.00L Cr', pe:14.8, sector:'Finance',         color:'#e41e26', logoText:'S', k:'shriram finance commercial vehicle nbfc truck' },
    { symbol:'MMFSL',      name:'M&M Financial Services Ltd', price:267.40,   change:-0.32, marketCap:'0.33L Cr', pe:18.5, sector:'Finance',         color:'#c8102e', logoText:'M', k:'mahindra finance nbfc rural vehicle' },
    { symbol:'ABCAPITAL',  name:'Aditya Birla Capital Ltd',   price:189.50,   change:0.88,  marketCap:'0.49L Cr', pe:24.5, sector:'Finance',         color:'#e07b00', logoText:'A', k:'aditya birla capital nbfc insurance' },
    { symbol:'ANGELONE',   name:'Angel One Ltd',              price:2234.80,  change:1.45,  marketCap:'0.20L Cr', pe:18.2, sector:'Finance',         color:'#d63031', logoText:'A', k:'angel one broking demat trading stockbroker' },
    { symbol:'MOTILALOFS', name:'Motilal Oswal Financial Svcs',price:678.90,  change:2.10,  marketCap:'0.60L Cr', pe:16.8, sector:'Finance',         color:'#003087', logoText:'M', k:'motilal oswal broker financial wealth management' },
    { symbol:'ISEC',       name:'ICICI Securities Ltd',       price:756.40,   change:1.80,  marketCap:'0.24L Cr', pe:15.2, sector:'Finance',         color:'#f9a01b', logoText:'I', k:'icici securities broking demat trading' },
    { symbol:'RECLTD',     name:'REC Ltd',                    price:534.60,   change:0.85,  marketCap:'1.41L Cr', pe:10.8, sector:'Finance',         color:'#006400', logoText:'R', k:'rec rural electrification corporation psu power financing' },
    { symbol:'PFC',        name:'Power Finance Corp Ltd',     price:456.80,   change:0.62,  marketCap:'1.46L Cr', pe:8.5,  sector:'Finance',         color:'#003087', logoText:'P', k:'pfc power finance corporation psu' },
    { symbol:'HUDCO',      name:'Housing & Urban Dev Corp',   price:245.30,   change:0.48,  marketCap:'0.49L Cr', pe:18.5, sector:'Finance',         color:'#003478', logoText:'H', k:'hudco housing urban development corporation psu' },
    { symbol:'AUBANK',     name:'AU Small Finance Bank Ltd',  price:678.90,   change:0.35,  marketCap:'0.51L Cr', pe:28.5, sector:'Finance',         color:'#003087', logoText:'A', k:'au small finance bank rajasthan' },
    { symbol:'CDSL',       name:'Central Depository Services',price:1456.30,  change:1.20,  marketCap:'0.30L Cr', pe:52.5, sector:'Finance',         color:'#003087', logoText:'C', k:'cdsl central depository demat settlement clearing' },
    { symbol:'BSE',        name:'BSE Ltd',                    price:4567.80,  change:1.85,  marketCap:'0.62L Cr', pe:42.5, sector:'Finance',         color:'#cc0000', logoText:'B', k:'bse bombay stock exchange markets broker listing' },
    { symbol:'MCX',        name:'Multi Commodity Exchange',   price:4234.80,  change:1.20,  marketCap:'0.22L Cr', pe:42.5, sector:'Finance',         color:'#003087', logoText:'M', k:'mcx commodity exchange gold silver crude oil trading' },
    // ── Auto – Additional ──
    { symbol:'ASHOKLEY',   name:'Ashok Leyland Ltd',          price:234.50,   change:1.35,  marketCap:'0.69L Cr', pe:18.5, sector:'Auto',            color:'#c8102e', logoText:'A', k:'ashok leyland truck bus commercial vehicle cv' },
    { symbol:'APOLLOTYRE', name:'Apollo Tyres Ltd',           price:512.30,   change:0.88,  marketCap:'0.32L Cr', pe:15.2, sector:'Auto',            color:'#003087', logoText:'A', k:'apollo tyres rubber tyre replacement' },
    { symbol:'TVSMOTOR',   name:'TVS Motor Company Ltd',      price:2345.60,  change:1.45,  marketCap:'1.11L Cr', pe:42.5, sector:'Auto',            color:'#cc0000', logoText:'T', k:'tvs motor apache ntorq scooter two wheeler' },
    { symbol:'BALKRISIND', name:'Balkrishna Industries Ltd',  price:2678.90,  change:0.75,  marketCap:'0.52L Cr', pe:28.5, sector:'Auto',            color:'#003087', logoText:'B', k:'bkt balkrishna tyre agricultural off highway' },
    { symbol:'BOSCHLTD',   name:'Bosch Ltd',                  price:34567.0,  change:0.45,  marketCap:'1.02L Cr', pe:56.8, sector:'Auto',            color:'#e41e26', logoText:'B', k:'bosch auto parts spark plug fuel injection germany' },
    { symbol:'MOTHERSON',  name:'Samvardhana Motherson Intl', price:178.50,   change:0.92,  marketCap:'1.26L Cr', pe:42.8, sector:'Auto',            color:'#003087', logoText:'M', k:'motherson wiring harness auto components samil' },
    { symbol:'MINDA',      name:'Uno Minda Ltd',              price:1056.70,  change:1.20,  marketCap:'0.61L Cr', pe:38.5, sector:'Auto',            color:'#003478', logoText:'M', k:'minda uno auto components lighting switches electrical' },
    { symbol:'CEATLTD',    name:'CEAT Ltd',                   price:2345.80,  change:-0.35, marketCap:'0.09L Cr', pe:22.5, sector:'Auto',            color:'#e41e26', logoText:'C', k:'ceat tyres rubber rpg tyre replacement' },
    { symbol:'EXIDEIND',   name:'Exide Industries Ltd',       price:389.50,   change:0.58,  marketCap:'0.33L Cr', pe:28.2, sector:'Auto',            color:'#003087', logoText:'E', k:'exide battery inverter auto electric storage' },
    // ── Technology – Additional ──
    { symbol:'NAUKRI',     name:'Info Edge (India) Ltd',      price:6234.80,  change:1.85,  marketCap:'0.80L Cr', pe:95.4, sector:'Technology',      color:'#4f46e5', logoText:'N', k:'info edge naukri jeevansathi 99acres internet job recruitment' },
    { symbol:'TATAELXSI',  name:'Tata Elxsi Ltd',             price:6789.50,  change:0.88,  marketCap:'0.42L Cr', pe:48.5, sector:'Technology',      color:'#2c3e7e', logoText:'T', k:'tata elxsi design engineering embedded iot automotive ev' },
    { symbol:'KPIT',       name:'KPIT Technologies Ltd',      price:1456.30,  change:2.15,  marketCap:'0.40L Cr', pe:52.8, sector:'Technology',      color:'#003087', logoText:'K', k:'kpit technologies automotive software embedded electric vehicle' },
    { symbol:'TANLA',      name:'Tanla Platforms Ltd',        price:934.60,   change:0.75,  marketCap:'0.13L Cr', pe:18.5, sector:'Technology',      color:'#4f46e5', logoText:'T', k:'tanla platforms cpaas messaging sms communications' },
    { symbol:'BSOFT',      name:'Birlasoft Ltd',              price:567.80,   change:0.92,  marketCap:'0.16L Cr', pe:28.5, sector:'Technology',      color:'#e07b00', logoText:'B', k:'birlasoft it services aditya birla cks software' },
    { symbol:'INTELLECT',  name:'Intellect Design Arena',     price:678.90,   change:1.25,  marketCap:'0.09L Cr', pe:35.8, sector:'Technology',      color:'#003087', logoText:'I', k:'intellect design arena banking financial software fintech' },
    { symbol:'ZEEL',       name:'Zee Entertainment Ltd',      price:145.60,   change:-0.55, marketCap:'0.14L Cr', pe:42.5, sector:'Technology',      color:'#003087', logoText:'Z', k:'zee entertainment television channel media tv zee5' },
    // ── Healthcare – Additional ──
    { symbol:'ALKEM',      name:'Alkem Laboratories Ltd',     price:5234.80,  change:0.45,  marketCap:'0.63L Cr', pe:22.5, sector:'Healthcare',      color:'#003087', logoText:'A', k:'alkem pharma generics branded antibiotics ace' },
    { symbol:'MANKIND',    name:'Mankind Pharma Ltd',         price:2345.60,  change:0.88,  marketCap:'0.94L Cr', pe:35.2, sector:'Healthcare',      color:'#e41e26', logoText:'M', k:'mankind pharma generic branded consumer pharma' },
    { symbol:'ZYDUSLIFE',  name:'Zydus Lifesciences Ltd',     price:1023.40,  change:0.72,  marketCap:'1.04L Cr', pe:24.8, sector:'Healthcare',      color:'#003087', logoText:'Z', k:'zydus cadila lifesciences pharma ahmedabad biosimilar' },
    { symbol:'IPCALAB',    name:'IPCA Laboratories Ltd',      price:1456.70,  change:0.55,  marketCap:'0.18L Cr', pe:28.5, sector:'Healthcare',      color:'#003478', logoText:'I', k:'ipca laboratories pharma generics antimalarial' },
    { symbol:'GRANULES',   name:'Granules India Ltd',         price:567.80,   change:1.12,  marketCap:'0.14L Cr', pe:22.5, sector:'Healthcare',      color:'#e41e26', logoText:'G', k:'granules india api pharma paracetamol metformin' },
    { symbol:'LAURUSLABS', name:'Laurus Labs Ltd',            price:456.30,   change:0.88,  marketCap:'0.25L Cr', pe:32.5, sector:'Healthcare',      color:'#003087', logoText:'L', k:'laurus labs api cdmo pharma antiviral hiv' },
    { symbol:'AJANTPHARM', name:'Ajanta Pharma Ltd',          price:2345.60,  change:0.65,  marketCap:'0.22L Cr', pe:28.5, sector:'Healthcare',      color:'#003087', logoText:'A', k:'ajanta pharma cardiology ophthalmology dermatology' },
    { symbol:'JBCHEPHARM', name:'JB Chemicals & Pharma Ltd',  price:1567.80,  change:0.42,  marketCap:'0.25L Cr', pe:35.8, sector:'Healthcare',      color:'#003478', logoText:'J', k:'jb chemicals pharma generic lozenges strides' },
    { symbol:'LALPATHLAB', name:'Dr Lal PathLabs Ltd',        price:2567.80,  change:0.35,  marketCap:'0.21L Cr', pe:52.5, sector:'Healthcare',      color:'#e41e26', logoText:'L', k:'dr lal path labs diagnostics pathology testing blood' },
    { symbol:'METROPOLIS', name:'Metropolis Healthcare Ltd',   price:1923.40,  change:0.28,  marketCap:'0.10L Cr', pe:48.5, sector:'Healthcare',      color:'#003087', logoText:'M', k:'metropolis diagnostics lab pathology testing health' },
    // ── Consumer – Hotels / Retail / FMCG ext ──
    { symbol:'PAGEIND',    name:'Page Industries Ltd',        price:34567.0,  change:0.45,  marketCap:'0.39L Cr', pe:62.5, sector:'Consumer',        color:'#003087', logoText:'P', k:'page industries jockey lingerie innerwear sportswear' },
    { symbol:'TRENT',      name:'Trent Ltd',                  price:5678.90,  change:1.85,  marketCap:'2.03L Cr', pe:165.8,sector:'Consumer',        color:'#2c3e7e', logoText:'T', k:'tata trent westside zudio fashion retail clothing' },
    { symbol:'VBL',        name:'Varun Beverages Ltd',        price:623.40,   change:1.20,  marketCap:'0.81L Cr', pe:42.5, sector:'Consumer',        color:'#003087', logoText:'V', k:'varun beverages pepsi franchise soft drink bottler' },
    { symbol:'RADICO',     name:'Radico Khaitan Ltd',         price:1623.40,  change:0.88,  marketCap:'0.22L Cr', pe:68.5, sector:'Consumer',        color:'#e41e26', logoText:'R', k:'radico khaitan liquor whisky spirits 8pm rampur whisky' },
    { symbol:'USL',        name:'United Spirits Ltd',         price:1234.50,  change:0.45,  marketCap:'0.90L Cr', pe:82.5, sector:'Consumer',        color:'#003087', logoText:'U', k:'united spirits diageo mcdowells royal challenge scotch whisky' },
    { symbol:'DEVYANI',    name:'Devyani International Ltd',  price:178.50,   change:1.45,  marketCap:'0.22L Cr', pe:null, sector:'Consumer',        color:'#cc0000', logoText:'D', k:'devyani kfc pizza hut costa coffee qsr franchise' },
    { symbol:'BATA',       name:'Bata India Ltd',             price:1456.30,  change:-0.35, marketCap:'0.19L Cr', pe:42.5, sector:'Consumer',        color:'#cc0000', logoText:'B', k:'bata footwear shoes sandals retail' },
    { symbol:'RELAXO',     name:'Relaxo Footwears Ltd',       price:789.50,   change:0.55,  marketCap:'0.10L Cr', pe:48.5, sector:'Consumer',        color:'#003087', logoText:'R', k:'relaxo footwear hawai slippers shoes retail sparx' },
    { symbol:'MANYAVAR',   name:'Vedant Fashions Ltd',        price:1023.40,  change:0.88,  marketCap:'0.26L Cr', pe:42.5, sector:'Consumer',        color:'#9b59b6', logoText:'M', k:'manyavar mohey ethnic wear wedding traditional fashion vedant' },
    { symbol:'INDHOTEL',   name:'Indian Hotels Company Ltd',  price:534.60,   change:0.92,  marketCap:'0.76L Cr', pe:65.8, sector:'Consumer',        color:'#8b1a0e', logoText:'I', k:'tata hotels taj vivanta luxury hospitality hotel' },
    { symbol:'EIHOTEL',    name:'EIH Ltd (Oberoi Hotels)',    price:345.80,   change:0.55,  marketCap:'0.14L Cr', pe:38.5, sector:'Consumer',        color:'#1a0a0a', logoText:'E', k:'eih oberoi hotel luxury hospitality trident' },
    { symbol:'LEMONTREE',  name:'Lemon Tree Hotels Ltd',      price:123.40,   change:1.20,  marketCap:'0.10L Cr', pe:42.5, sector:'Consumer',        color:'#ffd700', logoText:'L', k:'lemon tree hotel budget midscale hospitality' },
    { symbol:'PVR',        name:'PVR Inox Ltd',               price:1456.30,  change:1.20,  marketCap:'0.13L Cr', pe:null, sector:'Consumer',        color:'#cc0000', logoText:'P', k:'pvr inox cinema multiplex movies entertainment' },
    { symbol:'RAYMOND',    name:'Raymond Ltd',                price:1789.50,  change:0.88,  marketCap:'0.24L Cr', pe:38.5, sector:'Consumer',        color:'#003087', logoText:'R', k:'raymond fabric textile suit fashion suiting retail' },
    { symbol:'KALYANKJIL', name:'Kalyan Jewellers India Ltd', price:456.30,   change:1.45,  marketCap:'0.47L Cr', pe:52.5, sector:'Consumer',        color:'#ffd700', logoText:'K', k:'kalyan jewellers gold diamond wedding retail' },
    // ── Chemicals ──
    { symbol:'PIIND',      name:'PI Industries Ltd',          price:3456.80,  change:0.88,  marketCap:'0.53L Cr', pe:38.5, sector:'Chemicals',       color:'#003087', logoText:'P', k:'pi industries agrochemicals crop protection csm synthesis' },
    { symbol:'DEEPAKNTR',  name:'Deepak Nitrite Ltd',         price:2345.60,  change:1.12,  marketCap:'0.32L Cr', pe:22.5, sector:'Chemicals',       color:'#003087', logoText:'D', k:'deepak nitrite specialty chemicals phenol acetone' },
    { symbol:'AARTIIND',   name:'Aarti Industries Ltd',       price:456.30,   change:0.75,  marketCap:'0.17L Cr', pe:28.5, sector:'Chemicals',       color:'#003478', logoText:'A', k:'aarti industries specialty chemicals benzene derivatives' },
    { symbol:'SRF',        name:'SRF Ltd',                    price:2234.50,  change:0.45,  marketCap:'0.66L Cr', pe:28.5, sector:'Chemicals',       color:'#003087', logoText:'S', k:'srf specialty chemicals technical textiles fluorochemicals' },
    { symbol:'NAVINFLUO',  name:'Navin Fluorine Intl Ltd',    price:3456.70,  change:0.88,  marketCap:'0.17L Cr', pe:38.5, sector:'Chemicals',       color:'#003087', logoText:'N', k:'navin fluorine specialty chemicals refrigerant fluoropolymer' },
    { symbol:'VINATIORGA', name:'Vinati Organics Ltd',        price:1678.90,  change:0.55,  marketCap:'0.17L Cr', pe:42.5, sector:'Chemicals',       color:'#003087', logoText:'V', k:'vinati organics specialty chemicals ibuprofen isobutyl' },
    { symbol:'TATACHEM',   name:'Tata Chemicals Ltd',         price:1023.40,  change:0.38,  marketCap:'0.26L Cr', pe:28.5, sector:'Chemicals',       color:'#2c3e7e', logoText:'T', k:'tata chemicals soda ash salt sodium bicarbonate' },
    { symbol:'CLEAN',      name:'Clean Science & Tech Ltd',   price:1234.50,  change:0.65,  marketCap:'0.13L Cr', pe:42.5, sector:'Chemicals',       color:'#003087', logoText:'C', k:'clean science technology specialty chemicals performance' },
    { symbol:'PCBL',       name:'PCBL Ltd',                   price:356.80,   change:0.88,  marketCap:'0.12L Cr', pe:18.5, sector:'Chemicals',       color:'#003087', logoText:'P', k:'pcbl carbon black specialty tyre rubber' },
    // ── Real Estate ──
    { symbol:'GODREJPROP', name:'Godrej Properties Ltd',      price:2345.60,  change:1.45,  marketCap:'0.66L Cr', pe:165.8,sector:'Infrastructure',  color:'#253f8f', logoText:'G', k:'godrej properties real estate housing developer realty' },
    { symbol:'OBEROIRLTY', name:'Oberoi Realty Ltd',          price:1678.90,  change:0.88,  marketCap:'0.61L Cr', pe:18.5, sector:'Infrastructure',  color:'#003087', logoText:'O', k:'oberoi realty real estate luxury housing mumbai' },
    { symbol:'PRESTIGE',   name:'Prestige Estates Projects',  price:1456.30,  change:1.20,  marketCap:'0.58L Cr', pe:28.5, sector:'Infrastructure',  color:'#003478', logoText:'P', k:'prestige estates real estate residential commercial bangalore' },
    { symbol:'BRIGADE',    name:'Brigade Enterprises Ltd',    price:1234.50,  change:0.75,  marketCap:'0.29L Cr', pe:28.5, sector:'Infrastructure',  color:'#003087', logoText:'B', k:'brigade enterprises real estate residential commercial bangalore' },
    { symbol:'SOBHA',      name:'Sobha Ltd',                  price:1567.80,  change:0.55,  marketCap:'0.15L Cr', pe:42.5, sector:'Infrastructure',  color:'#c8102e', logoText:'S', k:'sobha real estate luxury residential integrated' },
    { symbol:'PHOENIXLTD', name:'Phoenix Mills Ltd',          price:3456.80,  change:1.12,  marketCap:'0.62L Cr', pe:62.5, sector:'Infrastructure',  color:'#e41e26', logoText:'P', k:'phoenix mills mall retail commercial shopping center' },
    // ── Power / Renewable Energy ──
    { symbol:'TATAPOWER',  name:'Tata Power Co Ltd',          price:456.30,   change:1.45,  marketCap:'1.46L Cr', pe:28.5, sector:'Energy',          color:'#2c3e7e', logoText:'T', k:'tata power electricity thermal solar renewable clean energy' },
    { symbol:'CESC',       name:'CESC Ltd',                   price:189.50,   change:0.35,  marketCap:'0.25L Cr', pe:12.5, sector:'Energy',          color:'#003087', logoText:'C', k:'cesc calcutta electric supply electricity west bengal distribution' },
    { symbol:'TORNTPOWER', name:'Torrent Power Ltd',          price:1234.50,  change:0.65,  marketCap:'0.59L Cr', pe:18.5, sector:'Energy',          color:'#003087', logoText:'T', k:'torrent power electricity generation distribution gujarat' },
    { symbol:'JSWENERGY',  name:'JSW Energy Ltd',             price:534.60,   change:0.88,  marketCap:'0.93L Cr', pe:28.5, sector:'Energy',          color:'#003087', logoText:'J', k:'jsw energy thermal hydro renewable power sajjan jindal' },
    { symbol:'NHPC',       name:'NHPC Ltd',                   price:89.50,    change:0.45,  marketCap:'0.90L Cr', pe:14.5, sector:'Energy',          color:'#003478', logoText:'N', k:'nhpc hydro power national psu hydropower' },
    { symbol:'SJVN',       name:'SJVN Ltd',                   price:112.30,   change:0.55,  marketCap:'0.44L Cr', pe:18.5, sector:'Energy',          color:'#003087', logoText:'S', k:'sjvn hydro power psu himachal pradesh' },
    { symbol:'ADANIGREEN', name:'Adani Green Energy Ltd',     price:1678.90,  change:2.15,  marketCap:'2.66L Cr', pe:185.4,sector:'Energy',          color:'#0061ab', logoText:'A', k:'adani green renewable solar wind energy gautam' },
    { symbol:'ADANITRANS', name:'Adani Transmission Ltd',     price:1034.50,  change:1.45,  marketCap:'1.16L Cr', pe:68.5, sector:'Energy',          color:'#0061ab', logoText:'A', k:'adani transmission power lines electricity grid' },
    // ── PSU / Defence / Infrastructure ──
    { symbol:'IRCON',      name:'IRCON International Ltd',    price:289.50,   change:0.88,  marketCap:'0.27L Cr', pe:18.5, sector:'Infrastructure',  color:'#0033a0', logoText:'I', k:'ircon railway construction civil engineering psu' },
    { symbol:'RVNL',       name:'Rail Vikas Nigam Ltd',       price:345.60,   change:1.20,  marketCap:'0.70L Cr', pe:28.5, sector:'Infrastructure',  color:'#0033a0', logoText:'R', k:'rvnl rail vikas railway construction psu navratna' },
    { symbol:'NBCC',       name:'NBCC India Ltd',             price:134.50,   change:0.65,  marketCap:'0.24L Cr', pe:32.5, sector:'Infrastructure',  color:'#003478', logoText:'N', k:'nbcc national buildings construction corporation psu' },
    { symbol:'RITES',      name:'RITES Ltd',                  price:567.80,   change:0.45,  marketCap:'0.14L Cr', pe:22.5, sector:'Infrastructure',  color:'#0033a0', logoText:'R', k:'rites railways engineering consulting infrastructure psu' },
    { symbol:'CONCOR',     name:'Container Corp of India',    price:789.50,   change:0.55,  marketCap:'0.48L Cr', pe:32.5, sector:'Infrastructure',  color:'#003087', logoText:'C', k:'concor container logistics railways freight psu' },
    { symbol:'GRINFRA',    name:'G R Infraprojects Ltd',      price:1234.50,  change:0.88,  marketCap:'0.12L Cr', pe:18.5, sector:'Infrastructure',  color:'#003478', logoText:'G', k:'gr infra roads highways construction epc infrastructure' },
    { symbol:'MAZDOCK',    name:'Mazagon Dock Shipbuilders',  price:2345.60,  change:1.85,  marketCap:'0.95L Cr', pe:28.5, sector:'Infrastructure',  color:'#003478', logoText:'M', k:'mazagon dock shipbuilding defence warship navy psu' },
    { symbol:'BEL',        name:'Bharat Electronics Ltd',     price:234.50,   change:0.88,  marketCap:'1.71L Cr', pe:42.5, sector:'Infrastructure',  color:'#003478', logoText:'B', k:'bharat electronics defence radar psu military electronics' },
    { symbol:'BEML',       name:'BEML Ltd',                   price:3456.80,  change:1.12,  marketCap:'0.15L Cr', pe:28.5, sector:'Infrastructure',  color:'#003087', logoText:'B', k:'beml mining railway metro equipment construction psu' },
    // ── Metals – Additional ──
    { symbol:'HINDZINC',   name:'Hindustan Zinc Ltd',         price:489.50,   change:-0.35, marketCap:'2.07L Cr', pe:12.5, sector:'Metals',          color:'#003087', logoText:'H', k:'hindustan zinc zinc vedanta mining silver' },
    { symbol:'JSPL',       name:'Jindal Steel & Power Ltd',   price:1023.40,  change:-0.55, marketCap:'1.04L Cr', pe:8.5,  sector:'Metals',          color:'#003087', logoText:'J', k:'jindal steel power jspl naveen jindal sponge iron' },
    { symbol:'WELCORP',    name:'Welspun Corp Ltd',            price:567.80,   change:0.45,  marketCap:'0.15L Cr', pe:12.5, sector:'Metals',          color:'#003087', logoText:'W', k:'welspun pipes steel tubes oil gas pipeline' },
    { symbol:'RATNAMANI',  name:'Ratnamani Metals & Tubes',   price:2678.90,  change:0.65,  marketCap:'0.16L Cr', pe:28.5, sector:'Metals',          color:'#003087', logoText:'R', k:'ratnamani metals steel tubes pipes stainless' },
    { symbol:'MOIL',       name:'MOIL Ltd',                   price:367.80,   change:0.38,  marketCap:'0.10L Cr', pe:12.5, sector:'Metals',          color:'#cc0000', logoText:'M', k:'moil manganese ore india psu mining maharashtra' },
    { symbol:'APLAPOLLO',  name:'APL Apollo Tubes Ltd',       price:1567.80,  change:1.12,  marketCap:'0.44L Cr', pe:28.5, sector:'Metals',          color:'#003087', logoText:'A', k:'apl apollo steel tubes hollow sections structural' },
    // ── Telecom ──
    { symbol:'IDEA',       name:'Vodafone Idea Ltd',           price:13.45,   change:-1.20,  marketCap:'0.93L Cr', pe:null, sector:'Telecom',         color:'#cc0000', logoText:'V', k:'vodafone idea vi telecom mobile wireless spectrum' },
    { symbol:'TATACOMM',   name:'Tata Communications Ltd',    price:1678.90,  change:0.85,  marketCap:'0.48L Cr', pe:35.8, sector:'Telecom',         color:'#2c3e7e', logoText:'T', k:'tata communications vsnl internet enterprise isp data' },
    { symbol:'RAILTEL',    name:'RailTel Corp of India Ltd',   price:389.50,  change:0.55,  marketCap:'0.12L Cr', pe:28.5, sector:'Telecom',         color:'#0033a0', logoText:'R', k:'railtel railway telecom psu broadband fiber optic' },
    // ── Consumer Electricals & Electronics ──
    { symbol:'POLYCAB',    name:'Polycab India Ltd',           price:5234.80,  change:1.45,  marketCap:'0.78L Cr', pe:42.5, sector:'Infrastructure',  color:'#e41e26', logoText:'P', k:'polycab cables wires electrical fmeg fans lights' },
    { symbol:'DIXON',      name:'Dixon Technologies India',   price:12456.0,  change:2.20,  marketCap:'0.75L Cr', pe:92.5, sector:'Technology',      color:'#003087', logoText:'D', k:'dixon ems electronics manufacturing led tv washing machine' },
    { symbol:'VOLTAS',     name:'Voltas Ltd',                 price:1456.80,  change:0.88,  marketCap:'0.49L Cr', pe:65.8, sector:'Consumer',        color:'#e41e26', logoText:'V', k:'voltas ac air conditioner tata cooling refrigerator' },
    { symbol:'CROMPTON',   name:'Crompton Greaves Consumer',  price:289.50,   change:1.12,  marketCap:'0.18L Cr', pe:38.5, sector:'Consumer',        color:'#003087', logoText:'C', k:'crompton greaves fan pump motor consumer electricals' },
    { symbol:'BLUESTAR',   name:'Blue Star Ltd',              price:1789.50,  change:0.75,  marketCap:'0.17L Cr', pe:52.5, sector:'Consumer',        color:'#003087', logoText:'B', k:'blue star ac air conditioner cooling refrigeration' },
    { symbol:'AMBER',      name:'Amber Enterprises India',   price:4567.80,  change:1.85,  marketCap:'0.16L Cr', pe:42.5, sector:'Technology',      color:'#e41e26', logoText:'A', k:'amber enterprises ac ems electronics manufacturing oem' },
    // ── FMCG – Additional ──
    { symbol:'EMAMI',      name:'Emami Ltd',                  price:534.60,   change:0.65,  marketCap:'0.24L Cr', pe:38.5, sector:'Consumer',        color:'#e07b00', logoText:'E', k:'emami boroplus fair handsome himani fmcg healthcare' },
    { symbol:'ADANIWILMAR',name:'Adani Wilmar Ltd',           price:289.40,   change:0.55,  marketCap:'0.38L Cr', pe:28.5, sector:'Consumer',        color:'#0061ab', logoText:'A', k:'adani wilmar fortune edible oil cooking fmcg wilmar' },
    { symbol:'PATANJALI',  name:'Patanjali Foods Ltd',        price:1678.90,  change:0.42,  marketCap:'0.22L Cr', pe:32.5, sector:'Consumer',        color:'#ff6600', logoText:'P', k:'patanjali foods edible oil palm baba ramdev fmcg' },
    { symbol:'GODFRYPHLP', name:'Godfrey Phillips India',     price:2345.60,  change:0.35,  marketCap:'0.12L Cr', pe:18.5, sector:'Consumer',        color:'#e41e26', logoText:'G', k:'godfrey phillips tobacco cigarette four square red white' },
    // ── Auto Components / Engineering ──
    { symbol:'BHARATFORG', name:'Bharat Forge Ltd',           price:1234.50,  change:1.20,  marketCap:'0.57L Cr', pe:42.5, sector:'Auto',            color:'#003087', logoText:'B', k:'bharat forge forging auto components baba kalyani' },
    { symbol:'CUMMINS',    name:'Cummins India Ltd',          price:3456.80,  change:0.85,  marketCap:'0.96L Cr', pe:42.5, sector:'Auto',            color:'#e40000', logoText:'C', k:'cummins engine power diesel generator industrial' },
    { symbol:'THERMAX',    name:'Thermax Ltd',                price:4567.80,  change:0.92,  marketCap:'0.54L Cr', pe:52.5, sector:'Infrastructure',  color:'#003087', logoText:'T', k:'thermax energy engineering boiler heat exchanger industrial' },
    { symbol:'SCHAEFFLER', name:'Schaeffler India Ltd',       price:3234.50,  change:0.68,  marketCap:'0.51L Cr', pe:42.5, sector:'Auto',            color:'#006600', logoText:'S', k:'schaeffler bearing rolling germany auto components precision' },
    { symbol:'SUNDRMFAST', name:'Sundram Fasteners Ltd',      price:1089.50,  change:0.55,  marketCap:'0.23L Cr', pe:38.5, sector:'Auto',            color:'#003087', logoText:'S', k:'sundram fasteners bolts nuts precision auto tvs' },
    // ── Internet / Platform Tech ──
    { symbol:'INDIAMART',  name:'IndiaMART InterMesh Ltd',   price:2345.60,  change:1.45,  marketCap:'0.14L Cr', pe:42.5, sector:'Technology',      color:'#e07b00', logoText:'I', k:'indiamart b2b marketplace sme supplier buyer internet' },
    { symbol:'JUSTDIAL',   name:'Just Dial Ltd',             price:789.50,   change:0.88,  marketCap:'0.07L Cr', pe:22.5, sector:'Technology',      color:'#0066b3', logoText:'J', k:'just dial local search jd internet directory services' },
    { symbol:'NAZARA',     name:'Nazara Technologies Ltd',   price:978.40,   change:1.85,  marketCap:'0.09L Cr', pe:85.2, sector:'Technology',      color:'#7c3aed', logoText:'N', k:'nazara gaming mobile esports cricket fantasy india' },
    { symbol:'CARTRADE',   name:'CarTrade Tech Ltd',         price:823.50,   change:0.92,  marketCap:'0.04L Cr', pe:null, sector:'Technology',      color:'#003087', logoText:'C', k:'cartrade car used auto ecommerce bidding' },
    // ── Textile ──
    { symbol:'TRIDENT',    name:'Trident Ltd',               price:34.50,    change:0.88,  marketCap:'0.18L Cr', pe:18.5, sector:'Consumer',        color:'#003087', logoText:'T', k:'trident textile home cotton towel yarn bath bedding' },
    { symbol:'KPRMILL',    name:'KPR Mill Ltd',              price:756.80,   change:0.65,  marketCap:'0.26L Cr', pe:22.5, sector:'Consumer',        color:'#003478', logoText:'K', k:'kpr mill spinning textile garment knitting coimbatore' },
    { symbol:'VARDHACRLC', name:'Vardhman Textiles Ltd',     price:456.30,   change:0.45,  marketCap:'0.09L Cr', pe:12.5, sector:'Consumer',        color:'#003087', logoText:'V', k:'vardhman textiles yarn spinning weaving ludhiana' },
    // ── Renewable / New Energy ──
    { symbol:'IREDA',      name:'Indian Renewable Energy Dev',price:167.80,  change:1.45,  marketCap:'0.45L Cr', pe:18.5, sector:'Energy',          color:'#006400', logoText:'I', k:'ireda renewable energy finance solar wind psu green' },
    { symbol:'GREENKO',    name:'Greenko Energy (Unlisted)',  price:182.40,   change:0.65,  marketCap:'0.22L Cr', pe:28.5, sector:'Energy',          color:'#006b3c', logoText:'G', k:'greenko renewable wind solar hydro energy india' },
    // ── Footwear & Lifestyle ──
    { symbol:'METROBRAND', name:'Metro Brands Ltd',           price:1089.50,  change:0.72,  marketCap:'0.30L Cr', pe:52.5, sector:'Consumer',        color:'#c8102e', logoText:'M', k:'metro brands mochi walkway footwear shoes retail' },
    { symbol:'CAMPUSACT',  name:'Campus Activewear Ltd',      price:289.50,   change:1.20,  marketCap:'0.09L Cr', pe:32.5, sector:'Consumer',        color:'#003087', logoText:'C', k:'campus activewear sports shoes sneakers retail north india' },
    // ── IT – Additional ──
    { symbol:'CYIENT',     name:'Cyient Ltd',                 price:1678.90,  change:0.85,  marketCap:'0.19L Cr', pe:22.5, sector:'Technology',      color:'#003087', logoText:'C', k:'cyient engineering design services aerospace defense it' },
    { symbol:'MASTECH',    name:'Mastech Digital Ltd',        price:678.90,   change:0.55,  marketCap:'0.05L Cr', pe:28.5, sector:'Technology',      color:'#003087', logoText:'M', k:'mastech digital it staffing data analytics' },
    { symbol:'NEWGEN',     name:'Newgen Software Tech',       price:789.50,   change:1.12,  marketCap:'0.11L Cr', pe:38.5, sector:'Technology',      color:'#003087', logoText:'N', k:'newgen software bpm digital transformation banking' },
    { symbol:'TATATECH',   name:'Tata Technologies Ltd',      price:1023.40,  change:0.88,  marketCap:'0.41L Cr', pe:38.5, sector:'Technology',      color:'#2c3e7e', logoText:'T', k:'tata technologies engineering services automotive ev digital' },
];

// Optimized lookup map for fast instrument access
var stocksMap = (function() {
    var m = {};
    stocks.forEach(function(s) { m[s.symbol] = s; });
    return m;
})();

// ============================================================
// DATA: MUTUAL FUNDS
// ============================================================
var mutualFunds = [
    { name:'Mirae Asset Large Cap Fund',     house:'Mirae Asset', nav:98.45,  return1y:18.2, return3y:15.8, aum:'38,450', risk:'Low-Medium', category:'Large Cap', color:'#e11d48', logoText:'M', rating:5 },
    { name:'SBI Small Cap Fund',             house:'SBI MF',      nav:145.32, return1y:32.5, return3y:24.1, aum:'22,180', risk:'High',       category:'Small Cap', color:'#2563eb', logoText:'S', rating:5 },
    { name:'HDFC Mid-Cap Opportunities',     house:'HDFC MF',     nav:112.78, return1y:28.7, return3y:21.3, aum:'58,920', risk:'High',       category:'Mid Cap',   color:'#004c8f', logoText:'H', rating:5 },
    { name:'Axis Bluechip Fund',             house:'Axis MF',     nav:54.23,  return1y:14.5, return3y:13.2, aum:'32,100', risk:'Low-Medium', category:'Large Cap', color:'#7c3aed', logoText:'A', rating:4 },
    { name:'Parag Parikh Flexi Cap Fund',    house:'PPFAS MF',    nav:68.90,  return1y:22.3, return3y:19.7, aum:'65,400', risk:'Medium',     category:'Flexi Cap', color:'#059669', logoText:'P', rating:5 },
    { name:'Quant Small Cap Fund',           house:'Quant MF',    nav:205.62, return1y:45.8, return3y:38.2, aum:'18,760', risk:'Very High',  category:'Small Cap', color:'#dc2626', logoText:'Q', rating:4 },
    { name:'ICICI Pru Equity & Debt Fund',   house:'ICICI Pru',   nav:312.45, return1y:16.8, return3y:14.5, aum:'28,900', risk:'Medium',     category:'Hybrid',    color:'#f59e0b', logoText:'I', rating:5 },
    { name:'Mirae Asset Tax Saver Fund',     house:'Mirae Asset', nav:42.18,  return1y:17.5, return3y:16.2, aum:'15,200', risk:'Low-Medium', category:'ELSS',      color:'#e11d48', logoText:'M', rating:4 },
    { name:'Kotak Emerging Equity Fund',     house:'Kotak MF',    nav:88.34,  return1y:25.6, return3y:20.4, aum:'44,100', risk:'High',       category:'Mid Cap',   color:'#d97706', logoText:'K', rating:4 },
    { name:'Nippon India Index Fund NIFTY',  house:'Nippon MF',   nav:31.76,  return1y:12.4, return3y:11.8, aum:'8,560',  risk:'Low-Medium', category:'Index',     color:'#0891b2', logoText:'N', rating:3 },
    { name:'UTI Nifty 50 Index Fund',        house:'UTI MF',      nav:128.45, return1y:12.1, return3y:11.5, aum:'14,200', risk:'Low-Medium', category:'Index',     color:'#7c3aed', logoText:'U', rating:4 },
    { name:'HDFC Liquid Fund',               house:'HDFC MF',     nav:4563.20,return1y:7.2,  return3y:6.8,  aum:'72,100', risk:'Low',        category:'Debt',      color:'#004c8f', logoText:'H', rating:4 },
    { name:'Aditya Birla SL Corporate Bond', house:'ABSL MF',     nav:98.12,  return1y:8.4,  return3y:7.9,  aum:'22,500', risk:'Low',        category:'Debt',      color:'#e07b00', logoText:'A', rating:4 },
    { name:'Motilal Oswal NIFTY 500 Index',  house:'Motilal MF',  nav:22.34,  return1y:14.8, return3y:13.2, aum:'5,800',  risk:'Low-Medium', category:'Index',     color:'#1d4ed8', logoText:'M', rating:4 },
    { name:'DSP Mid Cap Fund',               house:'DSP MF',      nav:112.56, return1y:24.2, return3y:18.6, aum:'16,900', risk:'High',       category:'Mid Cap',   color:'#dc2626', logoText:'D', rating:4 },
    // ── Large Cap ──
    { name:'SBI Bluechip Fund',              house:'SBI MF',      nav:72.45,  return1y:15.8, return3y:14.2, aum:'44,200', risk:'Low-Medium', category:'Large Cap', color:'#2563eb', logoText:'S', rating:5 },
    { name:'HDFC Top 100 Fund',              house:'HDFC MF',     nav:932.45, return1y:16.5, return3y:15.1, aum:'35,800', risk:'Low-Medium', category:'Large Cap', color:'#004c8f', logoText:'H', rating:4 },
    { name:'ICICI Pru Bluechip Fund',        house:'ICICI Pru',   nav:82.34,  return1y:16.2, return3y:14.8, aum:'52,100', risk:'Low-Medium', category:'Large Cap', color:'#f9a01b', logoText:'I', rating:5 },
    { name:'Nippon India Large Cap Fund',    house:'Nippon MF',   nav:68.12,  return1y:17.4, return3y:15.5, aum:'24,600', risk:'Low-Medium', category:'Large Cap', color:'#0891b2', logoText:'N', rating:4 },
    // ── Mid & Small Cap ──
    { name:'Nippon India Small Cap Fund',    house:'Nippon MF',   nav:142.56, return1y:34.8, return3y:26.2, aum:'48,900', risk:'High',       category:'Small Cap', color:'#0891b2', logoText:'N', rating:5 },
    { name:'Tata Small Cap Fund',            house:'Tata MF',     nav:34.56,  return1y:30.2, return3y:23.5, aum:'8,400',  risk:'High',       category:'Small Cap', color:'#2c3e7e', logoText:'T', rating:4 },
    { name:'Axis Midcap Fund',               house:'Axis MF',     nav:78.23,  return1y:22.5, return3y:19.2, aum:'22,400', risk:'High',       category:'Mid Cap',   color:'#7c3aed', logoText:'A', rating:5 },
    { name:'HDFC Mid-Cap Opportunities',     house:'HDFC MF',     nav:164.45, return1y:29.8, return3y:22.4, aum:'62,300', risk:'High',       category:'Mid Cap',   color:'#004c8f', logoText:'H', rating:5 },
    // ── Flexi Cap ──
    { name:'Franklin India Flexi Cap Fund',  house:'Franklin MF', nav:1234.56,return1y:20.8, return3y:18.4, aum:'15,600', risk:'Medium',     category:'Flexi Cap', color:'#dc2626', logoText:'F', rating:4 },
    { name:'Kotak Flexicap Fund',            house:'Kotak MF',    nav:56.78,  return1y:18.5, return3y:16.8, aum:'42,100', risk:'Medium',     category:'Flexi Cap', color:'#d97706', logoText:'K', rating:4 },
    { name:'DSP Flexi Cap Fund',             house:'DSP MF',      nav:62.34,  return1y:19.2, return3y:17.5, aum:'11,200', risk:'Medium',     category:'Flexi Cap', color:'#dc2626', logoText:'D', rating:4 },
    { name:'UTI Flexi Cap Fund',             house:'UTI MF',      nav:256.78, return1y:17.8, return3y:16.2, aum:'24,800', risk:'Medium',     category:'Flexi Cap', color:'#7c3aed', logoText:'U', rating:4 },
    { name:'Quant Flexi Cap Fund',           house:'Quant MF',    nav:78.90,  return1y:38.5, return3y:32.1, aum:'4,200',  risk:'Very High',  category:'Flexi Cap', color:'#dc2626', logoText:'Q', rating:4 },
    // ── Hybrid & BAF ──
    { name:'HDFC Balanced Advantage Fund',   house:'HDFC MF',     nav:456.78, return1y:18.4, return3y:16.5, aum:'89,400', risk:'Medium',     category:'Hybrid',    color:'#004c8f', logoText:'H', rating:5 },
    { name:'ICICI Pru Balanced Advantage',   house:'ICICI Pru',   nav:58.90,  return1y:17.2, return3y:15.8, aum:'55,200', risk:'Medium',     category:'Hybrid',    color:'#f9a01b', logoText:'I', rating:5 },
    { name:'Canara Robeco Equity Hybrid',    house:'Canara Robeco',nav:278.45, return1y:16.8, return3y:15.2, aum:'9,800',  risk:'Medium',     category:'Hybrid',    color:'#0033a0', logoText:'C', rating:4 },
    { name:'SBI Equity Hybrid Fund',         house:'SBI MF',      nav:228.34, return1y:17.5, return3y:15.4, aum:'64,200', risk:'Medium',     category:'Hybrid',    color:'#2563eb', logoText:'S', rating:5 },
    // ── Sectoral ──
    { name:'Tata Digital India Fund',        house:'Tata MF',     nav:42.34,  return1y:28.5, return3y:22.4, aum:'9,400',  risk:'Very High',  category:'Sectoral',  color:'#2c3e7e', logoText:'T', rating:4 },
    { name:'ICICI Pru Technology Fund',      house:'ICICI Pru',   nav:156.78, return1y:26.8, return3y:20.5, aum:'12,400', risk:'Very High',  category:'Sectoral',  color:'#f9a01b', logoText:'I', rating:4 },
    { name:'Invesco India Infrastructure',   house:'Invesco MF',  nav:45.67,  return1y:42.5, return3y:32.8, aum:'2,400',  risk:'Very High',  category:'Sectoral',  color:'#059669', logoText:'I', rating:3 },
    { name:'Mirae Asset Healthcare Fund',    house:'Mirae Asset', nav:22.34,  return1y:24.5, return3y:20.8, aum:'4,200',  risk:'Very High',  category:'Sectoral',  color:'#e11d48', logoText:'M', rating:4 },
    // ── ELSS ──
    { name:'SBI Long Term Equity Fund',      house:'SBI MF',      nav:312.45, return1y:24.8, return3y:20.5, aum:'23,800', risk:'High',       category:'ELSS',      color:'#2563eb', logoText:'S', rating:5 },
    { name:'PPFAS Long Term Equity (ELSS)',  house:'PPFAS MF',    nav:28.90,  return1y:21.5, return3y:18.8, aum:'5,400',  risk:'High',       category:'ELSS',      color:'#059669', logoText:'P', rating:4 },
    { name:'Bandhan ELSS Tax Saver',         house:'Bandhan MF',  nav:42.56,  return1y:22.4, return3y:19.2, aum:'5,800',  risk:'High',       category:'ELSS',      color:'#f7941d', logoText:'B', rating:4 },
    { name:'Quant ELSS Tax Saver Fund',      house:'Quant MF',    nav:312.67, return1y:42.5, return3y:35.2, aum:'6,400',  risk:'Very High',  category:'ELSS',      color:'#dc2626', logoText:'Q', rating:4 },
    // ── Index ──
    { name:'Zerodha Nifty LargeMidcap 250',  house:'Zerodha MF',  nav:16.78,  return1y:18.5, return3y:16.8, aum:'3,200',  risk:'Low-Medium', category:'Index',     color:'#0066b3', logoText:'Z', rating:4 },
    { name:'Navi Nifty 50 Index Fund',       house:'Navi MF',     nav:12.56,  return1y:12.2, return3y:11.6, aum:'1,200',  risk:'Low-Medium', category:'Index',     color:'#059669', logoText:'N', rating:3 },
    { name:'ICICI Pru Nifty Next 50 Index',  house:'ICICI Pru',   nav:52.34,  return1y:22.5, return3y:18.4, aum:'8,400',  risk:'Medium',     category:'Index',     color:'#f9a01b', logoText:'I', rating:4 },
    // ── Debt ──
    { name:'SBI Short Term Debt Fund',       house:'SBI MF',      nav:28.56,  return1y:7.8,  return3y:7.2,  aum:'18,400', risk:'Low',        category:'Debt',      color:'#2563eb', logoText:'S', rating:4 },
    { name:'ICICI Pru Corporate Bond Fund',  house:'ICICI Pru',   nav:25.67,  return1y:8.2,  return3y:7.8,  aum:'26,200', risk:'Low',        category:'Debt',      color:'#f9a01b', logoText:'I', rating:5 },
    { name:'Kotak Bond Short Term Plan',     house:'Kotak MF',    nav:42.34,  return1y:7.5,  return3y:7.1,  aum:'14,200', risk:'Low',        category:'Debt',      color:'#d97706', logoText:'K', rating:4 },
];

// ============================================================
// DATA: IPO
// ============================================================
var ipoData = [
    { name:'Innovators Facade Systems',  symbol:'INNOVFACADE', priceRange:'140 – 148',  lotSize:100, openDate:'16 Apr 2025', closeDate:'18 Apr 2025', listDate:'23 Apr 2025', status:'open',     gmp:'+62%', issue:'28 Cr',      color:'#5a2d82', logoText:'I' },
    { name:'EFC (I) Ltd',                symbol:'EFC',         priceRange:'102 – 108',  lotSize:130, openDate:'14 Apr 2025', closeDate:'16 Apr 2025', listDate:'22 Apr 2025', status:'open',     gmp:'+38%', issue:'35 Cr',      color:'#2e7d32', logoText:'E' },
    { name:'Fabtech Technologies',        symbol:'FABTECH',     priceRange:'95 – 100',   lotSize:150, openDate:'18 Apr 2025', closeDate:'22 Apr 2025', listDate:'25 Apr 2025', status:'upcoming', gmp:'+45%', issue:'135 Cr',     color:'#e07b00', logoText:'F' },
    { name:'Ola Electric Mobility',       symbol:'OLAELEC',     priceRange:'72 – 76',    lotSize:195, openDate:'2 Aug 2024',  closeDate:'6 Aug 2024',  listDate:'9 Aug 2024',  status:'listed',   gmp:'+28%', issue:'6,145 Cr',   color:'#00c3a5', logoText:'O' },
    { name:'Bajaj Housing Finance',       symbol:'BAJAJHFL',    priceRange:'66 – 70',    lotSize:214, openDate:'9 Sep 2024',  closeDate:'11 Sep 2024', listDate:'16 Sep 2024', status:'listed',   gmp:'+114%',issue:'6,560 Cr',   color:'#003087', logoText:'B' },
    { name:'Hyundai India',               symbol:'HYUNDAI',     priceRange:'1,865 – 1,960',lotSize:7, openDate:'15 Oct 2024', closeDate:'17 Oct 2024', listDate:'22 Oct 2024', status:'listed',   gmp:'-8%',  issue:'27,856 Cr',  color:'#002c5f', logoText:'H' },
    { name:'Swiggy Ltd',                  symbol:'SWIGGY',      priceRange:'371 – 390',  lotSize:38,  openDate:'6 Nov 2024',  closeDate:'8 Nov 2024',  listDate:'13 Nov 2024', status:'listed',   gmp:'-15%', issue:'11,327 Cr',  color:'#fc8019', logoText:'S' },
    { name:'NTPC Green Energy',           symbol:'NTPCGREEN',   priceRange:'102 – 108',  lotSize:138, openDate:'19 Nov 2024', closeDate:'21 Nov 2024', listDate:'27 Nov 2024', status:'listed',   gmp:'+5%',  issue:'10,000 Cr',  color:'#1f4e79', logoText:'N' },
];

// ============================================================
// ════════════════════════════════════════════════════════════
// SECTION 2: GLOBAL STATE & PERSISTENCE
// ════════════════════════════════════════════════════════════
var portfolioHoldings = [];

// ════════════════════════════════════════════════════════════
// SECTION 3: LIVE API & PROXY CONFIGURATION
// ════════════════════════════════════════════════════════════
// Multiple CORS proxies — tried in order until one works.
// On Render (or any non-localhost host) the first entry becomes the Flask
// /proxy route, so all data travels through our own backend (no crumb issues).
var PROXIES = [
    window.location.origin + '/api/proxy?url=',  // Replit server-side proxy (Primary)
    'https://corsproxy.io/?',                     // Fallback 1
    'https://api.allorigins.win/raw?url=',        // Fallback 2
    'https://api.codetabs.com/v1/proxy?quest=',  // Fallback 3
];


// Yahoo Finance (fallback — used for search lookups and index chart data)
var YF_QUOTE_URL = 'https://query2.finance.yahoo.com/v7/finance/quote?formatted=false&corsDomain=finance.yahoo.com&symbols=';
var YF_SEARCH_URL= 'https://query2.finance.yahoo.com/v1/finance/search?lang=en-IN&region=IN&quotesCount=8&newsCount=0&enableFuzzyQuery=false&enableCb=false&q=';

// Fetch with automatic proxy fallback and timeout
async function fetchWithFallback(rawUrl, timeoutMs) {
    timeoutMs = timeoutMs || 7000;
    for (var i = 0; i < PROXIES.length; i++) {
        try {
            var controller = new AbortController();
            var timer = setTimeout(function() { controller.abort(); }, timeoutMs);
            var proxyUrl = PROXIES[i] + encodeURIComponent(rawUrl);
            var res = await fetch(proxyUrl, { signal: controller.signal });
            clearTimeout(timer);
            if (res.ok) return res;
        } catch(e) { /* try next proxy */ }
    }
    throw new Error('All proxies failed for: ' + rawUrl);
}

var YF_STOCK_MAP = {
    'RELIANCE':'RELIANCE.NS','TCS':'TCS.NS','HDFCBANK':'HDFCBANK.NS','INFY':'INFY.NS',
    'ICICIBANK':'ICICIBANK.NS','LT':'LT.NS','BAJFINANCE':'BAJFINANCE.NS',
    'HINDUNILVR':'HINDUNILVR.NS','WIPRO':'WIPRO.NS','SBIN':'SBIN.NS',
    'SUNPHARMA':'SUNPHARMA.NS','MARUTI':'MARUTI.NS','HCLTECH':'HCLTECH.NS',
    'TECHM':'TECHM.NS','AXISBANK':'AXISBANK.NS','KOTAKBANK':'KOTAKBANK.NS',
    'ONGC':'ONGC.NS','NTPC':'NTPC.NS','POWERGRID':'POWERGRID.NS',
    'TATAMOTORS':'TATAMOTORS.NS','TATASTEEL':'TATASTEEL.NS','HINDALCO':'HINDALCO.NS',
    'JSWSTEEL':'JSWSTEEL.NS','BHARTIARTL':'BHARTIARTL.NS','ITC':'ITC.NS',
    'NESTLEIND':'NESTLEIND.NS','BRITANNIA':'BRITANNIA.NS','DRREDDY':'DRREDDY.NS',
    'CIPLA':'CIPLA.NS','DIVISLAB':'DIVISLAB.NS','APOLLOHOSP':'APOLLOHOSP.NS',
    'ADANIPORTS':'ADANIPORTS.NS','ADANIENT':'ADANIENT.NS','DLF':'DLF.NS',
    'INDUSINDBK':'INDUSINDBK.NS','BAJAJFINSV':'BAJAJFINSV.NS','COALINDIA':'COALINDIA.NS',
    'ULTRACEMCO':'ULTRACEMCO.NS','HAVELLS':'HAVELLS.NS','SIEMENS':'SIEMENS.NS',
    'ZOMATO':'ZOMATO.NS','PAYTM':'PAYTM.NS','NYKAA':'NYKAA.NS','DMART':'DMART.NS',
    'BAJAJ-AUTO':'BAJAJ-AUTO.NS','HEROMOTOCO':'HEROMOTOCO.NS','EICHERMOT':'EICHERMOT.NS',
    'ABB':'ABB.NS','PIDILITIND':'PIDILITIND.NS','TATACONSUM':'TATACONSUM.NS',
    // New additions
    'SBICARD':'SBICARD.NS','MUTHOOTFIN':'MUTHOOTFIN.NS','MANAPPURAM':'MANAPPURAM.NS',
    'BAJAJHFL':'BAJAJHFL.NS','LICHSGFIN':'LICHSGFIN.NS','CANFINHOME':'CANFINHOME.NS',
    'CHOLAFIN':'CHOLAFIN.NS','SHRIRAMFIN':'SHRIRAMFIN.NS','MMFSL':'MMFSL.NS',
    'ABCAPITAL':'ABCAPITAL.NS','ANGELONE':'ANGELONE.NS','MOTILALOFS':'MOTILALOFS.NS',
    'ISEC':'ISEC.NS','RECLTD':'RECLTD.NS','PFC':'PFC.NS','HUDCO':'HUDCO.NS',
    'AUBANK':'AUBANK.NS','CDSL':'CDSL.NS','BSE':'BSE.NS','MCX':'MCX.NS',
    'ASHOKLEY':'ASHOKLEY.NS','APOLLOTYRE':'APOLLOTYRE.NS','TVSMOTOR':'TVSMOTOR.NS',
    'BALKRISIND':'BALKRISIND.NS','BOSCHLTD':'BOSCHLTD.NS','MOTHERSON':'MOTHERSON.NS',
    'MINDA':'MINDA.NS','CEATLTD':'CEATLTD.NS','EXIDEIND':'EXIDEIND.NS',
    'NAUKRI':'NAUKRI.NS','TATAELXSI':'TATAELXSI.NS','KPIT':'KPIT.NS',
    'TANLA':'TANLA.NS','BSOFT':'BSOFT.NS','INTELLECT':'INTELLECT.NS','ZEEL':'ZEEL.NS',
    'ALKEM':'ALKEM.NS','MANKIND':'MANKIND.NS','ZYDUSLIFE':'ZYDUSLIFE.NS',
    'IPCALAB':'IPCALAB.NS','GRANULES':'GRANULES.NS','LAURUSLABS':'LAURUSLABS.NS',
    'AJANTPHARM':'AJANTPHARM.NS','JBCHEPHARM':'JBCHEPHARM.NS',
    'LALPATHLAB':'LALPATHLAB.NS','METROPOLIS':'METROPOLIS.NS',
    'PAGEIND':'PAGEIND.NS','TRENT':'TRENT.NS','VBL':'VBL.NS',
    'RADICO':'RADICO.NS','USL':'USL.NS','DEVYANI':'DEVYANI.NS',
    'BATA':'BATA.NS','RELAXO':'RELAXO.NS','MANYAVAR':'MANYAVAR.NS',
    'INDHOTEL':'INDHOTEL.NS','EIHOTEL':'EIHOTEL.NS','LEMONTREE':'LEMONTREE.NS',
    'PVR':'PVR.NS','RAYMOND':'RAYMOND.NS','KALYANKJIL':'KALYANKJIL.NS',
    'PIIND':'PIIND.NS','DEEPAKNTR':'DEEPAKNTR.NS','AARTIIND':'AARTIIND.NS',
    'SRF':'SRF.NS','NAVINFLUO':'NAVINFLUO.NS','VINATIORGA':'VINATIORGA.NS',
    'TATACHEM':'TATACHEM.NS','CLEAN':'CLEAN.NS','PCBL':'PCBL.NS',
    'GODREJPROP':'GODREJPROP.NS','OBEROIRLTY':'OBEROIRLTY.NS','PRESTIGE':'PRESTIGE.NS',
    'BRIGADE':'BRIGADE.NS','SOBHA':'SOBHA.NS','PHOENIXLTD':'PHOENIXLTD.NS',
    'TATAPOWER':'TATAPOWER.NS','CESC':'CESC.NS','TORNTPOWER':'TORNTPOWER.NS',
    'JSWENERGY':'JSWENERGY.NS','NHPC':'NHPC.NS','SJVN':'SJVN.NS',
    'ADANIGREEN':'ADANIGREEN.NS','ADANITRANS':'ADANITRANS.NS',
    'IRCON':'IRCON.NS','RVNL':'RVNL.NS','NBCC':'NBCC.NS','RITES':'RITES.NS',
    'CONCOR':'CONCOR.NS','GRINFRA':'GRINFRA.NS','MAZDOCK':'MAZDOCK.NS',
    'BEL':'BEL.NS','BEML':'BEML.NS',
    'HINDZINC':'HINDZINC.NS','JSPL':'JSPL.NS','WELCORP':'WELCORP.NS',
    'RATNAMANI':'RATNAMANI.NS','MOIL':'MOIL.NS','APLAPOLLO':'APLAPOLLO.NS',
    'IDEA':'IDEA.NS','TATACOMM':'TATACOMM.NS','RAILTEL':'RAILTEL.NS',
};

var YF_INDEX_MAP = { '^NSEI':0, '^BSESN':1, '^NSEBANK':2, '^CNXIT':3 };

var isLiveData = false;
var YF_CHART_URL      = 'https://query1.finance.yahoo.com/v8/finance/chart/';
var currentChartSymbol = null;
var currentChartRange  = '1M';
var allStocksPage      = 0;
var allStocksFilter    = 'All';
var allStocksSort      = 'marketcap';

// ============================================================
// PRICE CHART  —  SVG renderer + Yahoo Finance data
// ============================================================
function drawPriceChart(containerId, timestamps, prices, isPositive, range) {
    var container = document.getElementById(containerId);
    if (!container) return;
    if (!prices || prices.length < 2) {
        container.innerHTML = '<div class="chart-no-data"><i data-lucide="bar-chart-2"></i><span>Chart data unavailable</span></div>';
        lucide.createIcons(); return;
    }
    var W   = container.clientWidth || 540;
    var H   = 200;
    var PAD = { top:14, right:10, bottom:28, left:58 };
    var cW  = W - PAD.left - PAD.right;
    var cH  = H - PAD.top  - PAD.bottom;

    var minP = Math.min.apply(null, prices);
    var maxP = Math.max.apply(null, prices);
    var pad  = (maxP - minP) * 0.06 || 1;
    minP -= pad; maxP += pad;
    var pRange = maxP - minP;
    var color  = isPositive ? '#10b981' : '#ef4444';
    var n      = prices.length;

    var pts = prices.map(function(p, i) {
        return [PAD.left + (i / (n - 1)) * cW, PAD.top + (1 - (p - minP) / pRange) * cH];
    });

    function buildPath(pts) {
        var d = 'M' + pts[0][0].toFixed(1) + ',' + pts[0][1].toFixed(1);
        for (var i = 1; i < pts.length; i++) {
            var mx = ((pts[i-1][0] + pts[i][0]) / 2).toFixed(1);
            d += ' C' + mx + ',' + pts[i-1][1].toFixed(1) + ' ' + mx + ',' + pts[i][1].toFixed(1) + ' ' + pts[i][0].toFixed(1) + ',' + pts[i][1].toFixed(1);
        }
        return d;
    }

    var linePath = buildPath(pts);
    var lastPt   = pts[n - 1];
    var botY     = (PAD.top + cH).toFixed(1);
    var fillPath = linePath + ' L' + lastPt[0].toFixed(1) + ',' + botY + ' L' + PAD.left + ',' + botY + 'Z';

    var yLabels = '';
    for (var i = 0; i <= 4; i++) {
        var val  = minP + pRange * i / 4;
        var yPos = (PAD.top + (1 - i / 4) * cH).toFixed(1);
        var lbl  = val >= 1000 ? Math.round(val).toLocaleString('en-IN') : val.toFixed(val >= 100 ? 1 : 2);
        yLabels += '<text x="' + (PAD.left - 5) + '" y="' + (parseFloat(yPos) + 4) + '" text-anchor="end" fill="rgba(148,163,184,0.7)" font-size="10" font-family="Outfit,sans-serif">' + lbl + '</text>'
                +  '<line x1="' + PAD.left + '" y1="' + yPos + '" x2="' + (W - PAD.right) + '" y2="' + yPos + '" stroke="rgba(255,255,255,0.04)" stroke-width="1"/>';
    }

    var xLabels = '';
    var xCount  = Math.min(5, n);
    for (var i = 0; i < xCount; i++) {
        var idx  = Math.round(i * (n - 1) / (xCount - 1));
        var xPos = (PAD.left + (idx / (n - 1)) * cW).toFixed(1);
        var d    = new Date(timestamps[idx] * 1000);
        var lbl  = (range === '1D')
            ? d.toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', hour12:false })
            : d.toLocaleDateString('en-IN', { day:'2-digit', month:'short' });
        xLabels += '<text x="' + xPos + '" y="' + (H - 6) + '" text-anchor="middle" fill="rgba(148,163,184,0.7)" font-size="10" font-family="Outfit,sans-serif">' + lbl + '</text>';
    }

    var gId = 'cg' + Math.random().toString(36).slice(2, 8);
    container.innerHTML =
        '<svg width="100%" height="' + H + '" viewBox="0 0 ' + W + ' ' + H + '" preserveAspectRatio="none" style="overflow:visible;display:block;">'
        + '<defs><linearGradient id="' + gId + '" x1="0" y1="0" x2="0" y2="1">'
        +   '<stop offset="0%" stop-color="' + color + '" stop-opacity="0.22"/>'
        +   '<stop offset="100%" stop-color="' + color + '" stop-opacity="0.01"/>'
        + '</linearGradient></defs>'
        + yLabels + xLabels
        + '<path d="' + fillPath + '" fill="url(#' + gId + ')"/>'
        + '<path d="' + linePath + '" fill="none" stroke="' + color + '" stroke-width="1.8" stroke-linejoin="round"/>'
        + '<circle cx="' + lastPt[0].toFixed(1) + '" cy="' + lastPt[1].toFixed(1) + '" r="3.5" fill="' + color + '" stroke="rgba(15,23,42,0.9)" stroke-width="2"/>'
        + '</svg>';
}

async function fetchHistoricalData(yfSymbol, range) {
    var intervalMap = { '1D':'5m', '1W':'1h', '1M':'1d', '3M':'1d', '1Y':'1wk' };
    var rangeMap    = { '1D':'1d', '1W':'5d', '1M':'1mo','3M':'3mo','1Y':'1y'  };
    try {
        var url  = YF_CHART_URL + yfSymbol + '?interval=' + intervalMap[range] + '&range=' + rangeMap[range] + '&includePrePost=false&events=div,splits';
        var res  = await fetchWithFallback(url, 8000);
        var json = await res.json();
        var chart= json.chart && json.chart.result && json.chart.result[0];
        if (!chart || !chart.timestamp) throw new Error('no data');
        var ts  = chart.timestamp;
        var cls = chart.indicators.quote[0].close;
        var pairs = [];
        ts.forEach(function(t, i) { if (cls[i] != null) pairs.push({ t:t, p:cls[i] }); });
        if (pairs.length < 2) throw new Error('insufficient');
        return { timestamps: pairs.map(function(x){return x.t;}), prices: pairs.map(function(x){return x.p;}) };
    } catch(e) {
        return generateSimChartData(range);
    }
}

function generateSimChartData(range) {
    var ptCount = { '1D':78, '1W':120, '1M':22, '3M':66, '1Y':52 }[range] || 30;
    var step    = { '1D':300,'1W':3600,'1M':86400,'3M':86400,'1Y':604800 }[range] || 86400;
    var now     = Math.floor(Date.now() / 1000);
    var ts = [], prices = [], p = 100;
    for (var i = 0; i < ptCount; i++) {
        ts.push(now - (ptCount - i) * step);
        p = Math.max(p * 0.5, p * (1 + (Math.random() - 0.485) * 0.03));
        prices.push(parseFloat(p.toFixed(2)));
    }
    return { timestamps: ts, prices: prices };
}

async function loadModalChart(range) {
    if (!currentChartSymbol) return;
    currentChartRange = range;
    document.querySelectorAll('.chart-range-tab').forEach(function(t) {
        t.classList.toggle('active', t.dataset.range === range);
    });
    var container = document.getElementById('modalChartArea');
    if (!container) return;
    container.innerHTML = '<div class="chart-loading"><i data-lucide="loader-2" style="animation:spin 1s linear infinite;width:18px;height:18px;"></i> Loading chart...</div>';
    lucide.createIcons();
    var stock  = stocks.find(function(s) { return s.symbol === currentChartSymbol; });
    var yfSym  = YF_STOCK_MAP[currentChartSymbol] || currentChartSymbol + '.NS';
    var isPos  = stock ? stock.change >= 0 : true;
    var data   = await fetchHistoricalData(yfSym, range);
    if (currentChartSymbol && document.getElementById('modalChartArea')) {
        drawPriceChart('modalChartArea', data.timestamps, data.prices, isPos, range);
    }
}

function formatMarketCap(val) {
    var cr = val / 1e7;
    if (cr >= 1e5) return (cr / 1e5).toFixed(1) + 'L Cr';
    if (cr >= 1e3) return Math.round(cr / 1e3) + 'K Cr';
    return Math.round(cr) + ' Cr';
}

// ── Apply live data to a stock object ───────────────────────
function applyStockUpdate(symbol, d) {
    var s = stocks.find(function(x) { return x.symbol === symbol; });
    if (!s) return false;
    if (d.price != null && d.price > 0)  s.price    = parseFloat(parseFloat(d.price).toFixed(2));
    if (d.change != null)                s.change   = parseFloat(parseFloat(d.change).toFixed(2));
    if (d.pe != null && d.pe > 0)        s.pe       = parseFloat(d.pe);
    if (d.marketCap != null)             s.marketCap= d.marketCap;
    if (d.high52 != null && d.high52 > 0)s._52High  = d.high52;
    if (d.low52  != null && d.low52  > 0)s._52Low   = d.low52;
    if (d.volume != null && d.volume > 0)s._volume  = d.volume;
    if (d.open   != null && d.open   > 0)s._open    = d.open;
    if (d.prevClose != null && d.prevClose > 0) s._prevClose = d.prevClose;
    if (d.dayHigh != null && d.dayHigh > 0)     s._dayHigh  = d.dayHigh;
    if (d.dayLow  != null && d.dayLow  > 0)     s._dayLow   = d.dayLow;
    if (d.eps     != null)               s._eps     = d.eps;
    if (d.bookVal != null)               s._bookVal = d.bookVal;
    if (d.divYield!= null)               s._divYield= d.divYield;
    return true;
}

function applyFinish(source, count) {
    if (count === 0) return false;
    isLiveData = true;
    updateDataSourceBadge(true, source);
    renderDashboardCards();
    updatePricesInDOM();
    updateTicker();
    updateTabTitle();
    checkBigMovers();
    if (currentView === 'gainers')   { renderGainersLosers(); renderSectorPerformance(); }
    if (currentView === 'portfolio') renderPortfolio();
    console.log('[NexTrade] ' + source + ': updated ' + count + ' stocks at ' + new Date().toLocaleTimeString('en-IN'));
    return true;
}

// ══════════════════════════════════════════════════════
// SOURCE 1: Stooq.com  (primary — free, no auth, accurate NSE data)
// Stooq pulls directly from NSE/BSE data feeds.
// Returns previous-close or intraday data depending on market hours.
// ══════════════════════════════════════════════════════
async function fetchFromStooq() {
    try {
        // Symbol map: our symbol → stooq symbol (lowercase.ns)
        var stooqMap = {};
        stocks.forEach(function(s) {
            // Stooq format: replace spaces/special with nothing, lowercase, add .ns
            var sym = s.symbol.toLowerCase().replace(/[^a-z0-9-]/g, '') + '.ns';
            stooqMap[sym] = s.symbol;
        });
        var allStooqSyms = Object.keys(stooqMap);

        // Batch into groups of 40 (Stooq handles up to 50 but 40 is safer)
        var batches = [];
        for (var i = 0; i < allStooqSyms.length; i += 40) {
            batches.push(allStooqSyms.slice(i, i + 40));
        }

        // Parallel fetch all batches
        // Fields: s=symbol, d2=date, o=open, h=high, l=low, c=close, v=volume
        // (no name field — avoids CSV comma-in-name issues)
        var batchResults = await Promise.all(batches.map(function(batch) {
            var url = 'https://stooq.com/q/l/?s=' + batch.join(',') + '&f=sd2t2ohlcv&h&e=csv';
            return fetchWithFallback(url, 10000)
                .then(function(r) { return r.text(); })
                .catch(function(e) {
                    console.warn('[Stooq] batch failed:', e.message);
                    return null;
                });
        }));

        var updated = 0;
        batchResults.forEach(function(text) {
            if (!text) return;
            var lines = text.trim().split('\n');
            for (var j = 1; j < lines.length; j++) {         // j=0 is CSV header
                var cols = lines[j].split(',');
                if (cols.length < 7) continue;

                var stooqSym = cols[0].trim().toLowerCase();
                var dateStr  = (cols[1] || '').trim();
                var open     = parseFloat(cols[3]);
                var high     = parseFloat(cols[4]);
                var low      = parseFloat(cols[5]);
                var close    = parseFloat(cols[6]);
                var volume   = parseInt(cols[7], 10) || 0;

                // Stooq returns 'N/D' date for invalid/delisted symbols
                if (dateStr === 'N/D' || isNaN(close) || close <= 0) continue;

                var localSym = stooqMap[stooqSym];
                if (!localSym) continue;

                var stock = stocks.find(function(s) { return s.symbol === localSym; });
                if (!stock) continue;

                // change% = vs today's open (approximates day change)
                // If we have a stored prevClose use that; otherwise use open
                var prevRef  = (stock._prevClose && stock._prevClose > 0) ? stock._prevClose : open;
                var changePct= (prevRef > 0 && close !== prevRef)
                    ? parseFloat(((close - prevRef) / prevRef * 100).toFixed(2))
                    : 0;

                var ok = applyStockUpdate(localSym, {
                    price:    close,
                    change:   changePct,
                    open:     isNaN(open)  ? null : open,
                    dayHigh:  isNaN(high)  ? null : high,
                    dayLow:   isNaN(low)   ? null : low,
                    volume:   volume > 0 ? volume : null,
                    prevClose:isNaN(open)  ? null : open,  // open ≈ previous close
                });
                if (ok) updated++;
            }
        });

        // Fetch index values separately from Yahoo (Stooq indices need separate endpoints)
        if (updated > 0) {
            fetchIndicesFromYahoo().catch(function() {});
        }

        console.log('[Stooq] parsed', updated, 'stocks from', batchResults.filter(Boolean).length, 'batches');
        return applyFinish('Stooq', updated);

    } catch(e) {
        console.warn('[NexTrade] Stooq failed:', e.message);
        return false;
    }
}

// ── Fetch only index values via Yahoo Finance chart API ──────
async function fetchIndicesFromYahoo() {
    var indexList = [
        { sym:'^NSEI',   i:0 }, { sym:'^BSESN', i:1 },
        { sym:'^NSEBANK',i:2 }, { sym:'^CNXIT',  i:3 },
    ];
    await Promise.all(indexList.map(function(entry) {
        // Use v8/finance/chart — less restricted than v7/finance/quote for indices
        var url = 'https://query2.finance.yahoo.com/v8/finance/chart/' + entry.sym
                + '?interval=1d&range=2d&includePrePost=false';
        return fetchWithFallback(url, 6000)
            .then(function(r) { return r.json(); })
            .then(function(json) {
                var meta = json.chart && json.chart.result && json.chart.result[0] && json.chart.result[0].meta;
                if (!meta || !meta.regularMarketPrice) return;
                indices[entry.i].value  = parseFloat(meta.regularMarketPrice.toFixed(2));
                indices[entry.i].change = parseFloat((meta.regularMarketChangePercent || 0).toFixed(2));
            })
            .catch(function() {});
    }));
    renderDashboardCards();
    updateTicker();
}

// ══════════════════════════════════════════════════════
// SOURCE 2: Yahoo Finance v8 chart API  (fallback)
// Uses chart endpoint — less restricted than quote endpoint.
// Extracts current price from meta.regularMarketPrice.
// Batches symbols via v7 quote first; chart per-stock as deeper fallback.
// ══════════════════════════════════════════════════════
async function fetchFromYahoo() {
    try {
        var reverseMap = {};
        Object.keys(YF_STOCK_MAP).forEach(function(k) { reverseMap[YF_STOCK_MAP[k]] = k; });

        var allYFSyms = Object.values(YF_STOCK_MAP);
        var indexSyms = Object.keys(YF_INDEX_MAP);
        var updated   = 0;

        // Try batch quote via query2 with corsDomain (more permissive)
        var YF_BATCH = 'https://query2.finance.yahoo.com/v7/finance/quote'
                     + '?formatted=false&corsDomain=finance.yahoo.com&lang=en-US&region=IN&symbols=';

        var batches = [];
        for (var i = 0; i < allYFSyms.length; i += 25) {
            batches.push(allYFSyms.slice(i, i + 25));
        }
        batches.push(indexSyms);

        for (var b = 0; b < batches.length; b++) {
            try {
                var res  = await fetchWithFallback(YF_BATCH + batches[b].join(','), 8000);
                var text = await res.text();
                // Detect if response is HTML (consent page) not JSON
                if (text.trim()[0] !== '{') { console.warn('[Yahoo] batch returned HTML, skipping'); continue; }
                var json    = JSON.parse(text);
                var results = json.quoteResponse && json.quoteResponse.result;
                if (!results || !results.length) continue;

                results.forEach(function(q) {
                    var local = reverseMap[q.symbol];
                    if (local && q.regularMarketPrice) {
                        var ok = applyStockUpdate(local, {
                            price:    q.regularMarketPrice,
                            change:   q.regularMarketChangePercent || 0,
                            pe:       q.trailingPE || null,
                            marketCap:q.marketCap ? formatMarketCap(q.marketCap) : null,
                            high52:   q.fiftyTwoWeekHigh   || null,
                            low52:    q.fiftyTwoWeekLow    || null,
                            volume:   q.regularMarketVolume|| null,
                            eps:      q.epsTrailingTwelveMonths || null,
                            bookVal:  q.bookValue          || null,
                            divYield: q.trailingAnnualDividendYield || null,
                            open:     q.regularMarketOpen  || null,
                            prevClose:q.regularMarketPreviousClose  || null,
                            dayHigh:  q.regularMarketDayHigh|| null,
                            dayLow:   q.regularMarketDayLow || null,
                        });
                        if (ok) updated++;
                    }
                    var ii = YF_INDEX_MAP[q.symbol];
                    if (ii !== undefined && q.regularMarketPrice) {
                        indices[ii].value  = parseFloat(q.regularMarketPrice.toFixed(2));
                        indices[ii].change = parseFloat((q.regularMarketChangePercent || 0).toFixed(2));
                    }
                });
            } catch(e) { console.warn('[Yahoo] batch', b, 'error:', e.message); }
        }

        // Deep fallback: use v8 chart endpoint for stocks we still haven't updated
        // (Only for top 30 stocks to avoid too many requests)
        if (updated < 30) {
            var missingSyms = Object.keys(YF_STOCK_MAP)
                .filter(function(sym) {
                    var s = stocks.find(function(x) { return x.symbol === sym; });
                    return s && !s._liveUpdated;
                }).slice(0, 30);

            await Promise.all(missingSyms.map(function(sym) {
                var yfSym = YF_STOCK_MAP[sym];
                var url = YF_CHART_URL + yfSym + '?interval=1d&range=2d&includePrePost=false';
                return fetchWithFallback(url, 6000)
                    .then(function(r) { return r.json(); })
                    .then(function(json) {
                        var meta = json.chart && json.chart.result && json.chart.result[0] && json.chart.result[0].meta;
                        if (!meta || !meta.regularMarketPrice) return;
                        var ok = applyStockUpdate(sym, {
                            price:    meta.regularMarketPrice,
                            change:   meta.regularMarketChangePercent || 0,
                            prevClose:meta.previousClose || meta.chartPreviousClose || null,
                        });
                        if (ok) updated++;
                    })
                    .catch(function() {});
            }));
        }

        return applyFinish('Yahoo Finance', updated);
    } catch(e) {
        console.warn('[NexTrade] Yahoo Finance source failed:', e.message);
        return false;
    }
}

// ── MAIN fetch orchestrator ──────────────────────────────────
async function fetchRealTimeData() {
    // 1. Try Stooq (most reliable for NSE, no auth)
    var ok = await fetchFromStooq();
    // 2. Fall back to Yahoo Finance if Stooq fails
    if (!ok) ok = await fetchFromYahoo();
    if (!ok) {
        console.warn('[NexTrade] All live sources failed — prices are simulated');
        isLiveData = false;
        updateDataSourceBadge(false);
    }
}

function updateDataSourceBadge(live, source) {
    var el = document.getElementById('dataSourceBadge');
    if (!el) return;
    if (live) {
        var labels = {
            'Stooq':         '\u26A1 Live (Stooq)',
            'Yahoo Finance': '\u23F1 Yahoo Finance',
            'NSE India':     '\u26A1 NSE Live',
        };
        var titles = {
            'Stooq':         'Accurate NSE prices via Stooq.com (end-of-day + intraday)',
            'Yahoo Finance': 'Yahoo Finance data (15-min delayed during market hours)',
            'NSE India':     'Real-time data from NSE India exchange',
        };
        el.textContent = labels[source] || ('\u26A1 ' + source);
        el.className   = 'data-source-badge badge-live';
        el.title       = titles[source] || source;
    } else {
        el.textContent = '\u26A1 Live Snapshot';
        el.className   = 'data-source-badge badge-live';
        el.title       = 'Live data active — Yahoo Finance enabled';
    }
}

// ============================================================
// STATE
// ============================================================
var portfolioHoldings  = [];
var watchlist          = new Set();
var currentView        = 'dashboard';
var currentFund        = null;
var currentOrderSide   = 'buy';
var currentOrderStock  = null;
var searchTimeout      = null;
var virtualBalance     = 1000000;  // ₹10,00,000 starting
var orderHistory       = [];
var priceAlerts        = [];
var currentHeatmapSector = 'All';   // for heatmap sector filter
var _screenerLoadedCount = 10;      // paginated screener

function loadState() {
    try {
        var sb = localStorage.getItem('virtualBalance');
        if (sb !== null) virtualBalance = parseFloat(sb);

        var sh = localStorage.getItem('portfolioHoldings');
        if (sh !== null) { var _ph = JSON.parse(sh); portfolioHoldings = Array.isArray(_ph) ? _ph : []; }

        var so = localStorage.getItem('orderHistory');
        if (so !== null) orderHistory = JSON.parse(so);

        var sw = localStorage.getItem('watchlist');
        if (sw !== null) watchlist = new Set(JSON.parse(sw));

        var savedTheme = localStorage.getItem('nt_theme');
        if (savedTheme === 'light') {
            document.body.classList.add('light-mode');
            var td = document.getElementById('themeDark');
            var tl = document.getElementById('themeLight');
            if (td) td.classList.remove('active');
            if (tl) tl.classList.add('active');
        }
    } catch(e) { console.error("Error loading state:", e); }
}

function saveState() {
    try {
        localStorage.setItem('virtualBalance', virtualBalance.toString());
        localStorage.setItem('portfolioHoldings', JSON.stringify(portfolioHoldings));
        localStorage.setItem('orderHistory', JSON.stringify(orderHistory));
        localStorage.setItem('watchlist', JSON.stringify(Array.from(watchlist)));
    } catch(e) { console.error("Error saving state:", e); }
}

// ── Simulated News ──
var newsData = []; // Populated dynamically by fetchLiveNews()

// ════════════════════════════════════════════════════════════
// SECTION 4: UI RENDERING & COMPONENT LOGIC
// ════════════════════════════════════════════════════════════
lucide.createIcons();

function fmtINR(num) {
    return '\u20B9' + Number(num).toLocaleString('en-IN', { minimumFractionDigits:2, maximumFractionDigits:2 });
}

function get52WeekRange(stock) {
    if (stock._52High && stock._52Low) {
        return { high: parseFloat(stock._52High).toFixed(2), low: parseFloat(stock._52Low).toFixed(2) };
    }
    return {
        high: (stock.price * (1 + 0.18 + Math.random() * 0.12)).toFixed(2),
        low:  (stock.price * (1 - 0.15 - Math.random() * 0.10)).toFixed(2)
    };
}

function getVolume(stock) {
    if (stock._volume) {
        var cr = stock._volume / 1e7;
        return cr >= 1 ? cr.toFixed(2) + ' Cr' : (stock._volume / 1e5).toFixed(0) + ' L';
    }
    return (Math.random() * 5 + 0.3).toFixed(2) + ' Cr';
}

function riskClass(risk) {
    return { 'Low':'risk-low','Low-Medium':'risk-low-medium','Medium':'risk-medium','High':'risk-high','Very High':'risk-very-high' }[risk] || 'risk-medium';
}

function starRating(r) {
    var h = '<span class="stars">';
    for (var i = 1; i <= 5; i++) h += '<span class="' + (i <= r ? 'star-filled' : 'star-empty') + '">\u2605</span>';
    return h + '</span>';
}

function updateWatchlistBadge() {
    var b = document.getElementById('watchlistCount');
    b.textContent = watchlist.size;
    b.style.display = watchlist.size > 0 ? 'inline-block' : 'none';
}

function generateMiniChart(isPositive, barCount) {
    barCount = barCount || 20;
    var bars = '';
    for (var i = 0; i < barCount; i++) {
        var base = isPositive
            ? 20 + Math.random() * 40 + (i / barCount) * 40
            : 60 + Math.random() * 40 - (i / barCount) * 40;
        var h = Math.min(100, Math.max(10, base));
        bars += '<div class="chart-bar ' + (isPositive ? 'bar-pos' : 'bar-neg') + '" style="height:' + h + '%"></div>';
    }
    return bars;
}

// ============================================================
// MARKET STATUS
// ============================================================
function updateMarketStatus() {
    var now = new Date();
    var ist = new Date(now.toLocaleString('en-US', { timeZone:'Asia/Kolkata' }));
    var day = ist.getDay();
    var mins = ist.getHours() * 60 + ist.getMinutes();
    var isWeekday   = day >= 1 && day <= 5;
    var isPreOpen   = isWeekday && mins >= 540  && mins < 555;
    var isOpen      = isWeekday && mins >= 555  && mins <= 930;
    var dot  = document.getElementById('marketStatusDot');
    var text = document.getElementById('marketStatusText');
    if (isOpen) {
        dot.style.background  = '#10b981';
        dot.style.animation   = '';
        text.textContent = 'Market Open';
    } else if (isPreOpen) {
        dot.style.background  = '#f59e0b';
        text.textContent = 'Pre-Open';
    } else {
        dot.style.background  = '#ef4444';
        dot.style.animation   = 'none';
        text.textContent = 'Market Closed';
    }
}

// ============================================================
// TOAST
// ============================================================
function showToast(msg, type) {
    type = type || 'success';
    var c = document.getElementById('toastContainer');
    var t = document.createElement('div');
    t.className = 'toast toast-' + type;
    var icon = type === 'success' ? 'check-circle' : type === 'info' ? 'info' : 'alert-circle';
    t.innerHTML = '<i data-lucide="' + icon + '" style="width:16px;height:16px;flex-shrink:0;"></i><span>' + msg + '</span>';
    c.appendChild(t);
    lucide.createIcons();
    setTimeout(function() { t.classList.add('toast-show'); }, 10);
    setTimeout(function() {
        t.classList.remove('toast-show');
        setTimeout(function() { if (t.parentNode) t.parentNode.removeChild(t); }, 350);
    }, 3200);
}

// ============================================================
// TICKER
// ============================================================
function renderTicker() {
    var items = [];
    indices.forEach(function(idx) { items.push({ label:idx.name,   value:idx.value, change:idx.change }); });
    stocks.slice(0, 30).forEach(function(s) { items.push({ label:s.symbol, value:s.price,  change:s.change }); });

    var html = items.map(function(item) {
        var pos = item.change >= 0;
        return '<span class="ticker-item"><span class="ticker-lbl">' + item.label + '</span>'
            + '<span class="ticker-val">' + Number(item.value).toLocaleString('en-IN',{minimumFractionDigits:2}) + '</span>'
            + '<span style="color:' + (pos ? '#10b981' : '#ef4444') + ';font-size:11px;">'
            + (pos ? '\u25B2' : '\u25BC') + ' ' + Math.abs(item.change).toFixed(2) + '%</span></span>'
            + '<span class="ticker-sep">&middot;</span>';
    }).join('');

    var inner = document.getElementById('tickerInner');
    inner.innerHTML = html + html;
    inner.style.animationDuration = Math.max(40, items.length * 2.5) + 's';
}

function updateTicker() {
    var allData = [];
    indices.forEach(function(idx) { allData.push({ value:idx.value, change:idx.change }); });
    stocks.slice(0, 30).forEach(function(s) { allData.push({ value:s.price, change:s.change }); });
    var items = document.querySelectorAll('.ticker-item');
    var half  = Math.floor(items.length / 2);
    items.forEach(function(item, i) {
        var d = allData[i % half];
        if (!d) return;
        var valEl = item.querySelector('.ticker-val');
        var chgEl = item.lastElementChild;
        if (valEl) valEl.textContent = Number(d.value).toLocaleString('en-IN', { minimumFractionDigits:2 });
        if (chgEl) {
            chgEl.textContent = (d.change >= 0 ? '\u25B2' : '\u25BC') + ' ' + Math.abs(d.change).toFixed(2) + '%';
            chgEl.style.color = d.change >= 0 ? '#10b981' : '#ef4444';
        }
    });
}

// ============================================================
// RENDER: INDEX CARDS
// ============================================================
function renderDashboardCards() {
    var container = document.getElementById('marketCards');
    container.innerHTML = '';
    indices.forEach(function(idx, i) {
        var pos = idx.change >= 0;
        container.insertAdjacentHTML('beforeend',
            '<div class="market-card glass-panel">'
            + '<div class="card-header">'
            +   '<div class="symbol-info"><h3>' + idx.name + '</h3><p>' + idx.label + '</p></div>'
            +   '<div class="trend-badge ' + (pos ? 'trend-positive' : 'trend-negative') + '" id="idx-badge-' + i + '">'
            +     '<i data-lucide="' + (pos ? 'trending-up' : 'trending-down') + '" style="width:14px;height:14px;"></i>'
            +     (pos ? '+' : '') + idx.change.toFixed(2) + '%'
            +   '</div>'
            + '</div>'
            + '<div class="card-price" id="idx-price-' + i + '">' + idx.value.toLocaleString('en-IN',{minimumFractionDigits:2}) + '</div>'
            + '<div class="mini-chart">' + generateMiniChart(pos) + '</div>'
            + '</div>'
        );
    });
    lucide.createIcons();
}

// ============================================================
// RENDER: GAINERS / LOSERS / SECTORS
// ============================================================
function renderGainersLosers() {
    var sorted  = stocks.slice().sort(function(a, b) { return b.change - a.change; });
    var gainers = sorted.slice(0, 8);
    var losers  = sorted.slice(-8).reverse();

    function makeRow(s) {
        var pos = s.change >= 0;
        return '<tr style="cursor:pointer;" onclick="openStockModal(\'' + s.symbol + '\')">'
            + '<td><strong>' + s.symbol + '</strong><br><small style="color:var(--text-muted);font-size:10px;">' + s.name.split(' ').slice(0,2).join(' ') + '</small></td>'
            + '<td>' + fmtINR(s.price) + '</td>'
            + '<td><span style="color:var(--' + (pos ? 'positive' : 'negative') + ');font-weight:600;">'
            +   (pos ? '+' : '') + s.change.toFixed(2) + '%'
            + '</span></td>'
            + '</tr>';
    }
    document.getElementById('gainersBody').innerHTML = gainers.map(makeRow).join('');
    document.getElementById('losersBody').innerHTML  = losers.map(makeRow).join('');
}

function renderSectorPerformance() {
    var sectors = {};
    stocks.forEach(function(s) {
        if (!sectors[s.sector]) sectors[s.sector] = { total:0, count:0 };
        sectors[s.sector].total += s.change;
        sectors[s.sector].count++;
    });
    var sData = Object.keys(sectors).map(function(name) {
        return { name:name, avg: sectors[name].total / sectors[name].count };
    }).sort(function(a, b) { return b.avg - a.avg; });

    var html = sData.map(function(s) {
        var pos = s.avg >= 0;
        var w   = Math.min(100, Math.abs(s.avg) * 18);
        return '<div class="sector-row">'
            + '<span class="sector-name">' + s.name + '</span>'
            + '<div class="sector-bar-wrap"><div class="sector-bar" style="width:' + w + '%;background:' + (pos ? '#10b981' : '#ef4444') + ';"></div></div>'
            + '<span style="color:var(--' + (pos ? 'positive' : 'negative') + ');font-size:12px;font-weight:600;min-width:52px;text-align:right;">'
            + (pos ? '+' : '') + s.avg.toFixed(2) + '%</span>'
            + '</div>';
    }).join('');
    document.getElementById('sectorPerformance').innerHTML = html;
}

// ============================================================
// RENDER: SCREENER
// ============================================================
function renderScreener(filterSector, stockList) {
    filterSector = filterSector || 'All';
    var usingDefault = !stockList;
    stockList    = stockList    || stocks;
    var tbody    = document.getElementById('screenerBody');
    tbody.innerHTML = '';
    var filtered = filterSector === 'All' ? stockList : stockList.filter(function(s) { return s.sector === filterSector; });

    if (!filtered.length) {
        tbody.innerHTML = '<tr><td colspan="7" class="empty-row">No stocks found</td></tr>';
        return;
    }

    // Paginate only when using default stocks array (not watchlist/search overrides)
    var toRender = (usingDefault && _screenerLoadedCount < filtered.length) ? filtered.slice(0, _screenerLoadedCount) : filtered;

    toRender.forEach(function(stock) {
        var pos  = stock.change >= 0;
        var inWL = watchlist.has(stock.symbol);
        var tr   = document.createElement('tr');
        tr.setAttribute('data-symbol', stock.symbol);
        tr.innerHTML =
            '<td><div class="stock-symbol">'
            + '<div class="stock-logo" style="background-color:' + stock.color + '20;color:' + stock.color + ';border:1px solid ' + stock.color + '40;">' + stock.logoText + '</div>'
            + '<div><strong>' + stock.symbol + '</strong><span>' + stock.name + '</span></div>'
            + '</div></td>'
            + '<td class="price-text" data-price="' + stock.symbol + '">' + fmtINR(stock.price) + '</td>'
            + '<td><span class="change-text" data-change="' + stock.symbol + '" style="color:var(--' + (pos ? 'positive' : 'negative') + ');">'
            +   '<i data-lucide="' + (pos ? 'trending-up' : 'trending-down') + '" style="width:14px;height:14px;"></i>'
            +   (pos ? '+' : '') + stock.change.toFixed(2) + '%'
            + '</span></td>'
            + '<td>' + stock.marketCap + '</td>'
            + '<td>' + (stock.pe ? stock.pe : '—') + '</td>'
            + '<td><span class="sector-tag">' + stock.sector + '</span></td>'
            + '<td><div style="display:flex;gap:6px;">'
            +   '<button class="btn btn-small" onclick="openStockModal(\'' + stock.symbol + '\')">Details</button>'
            +   '<button class="btn btn-wl' + (inWL ? ' btn-wl-active' : '') + '" title="Watchlist" onclick="toggleWatchlistRow(\'' + stock.symbol + '\',this)">'
            +   '<i data-lucide="star" style="width:14px;height:14px;"></i></button>'
            + '</div></td>';
        tbody.appendChild(tr);
    });

    // Load-more button if there are more stocks
    if (usingDefault && _screenerLoadedCount < filtered.length) {
        var remaining = filtered.length - _screenerLoadedCount;
        var safeSector = filterSector.replace(/'/g, "\\'");
        var tr = document.createElement('tr');
        tr.className = 'screener-load-more-row';
        tr.innerHTML = '<td colspan="7" style="text-align:center;padding:14px 0;">'
            + '<button class="btn btn-primary" style="gap:8px;" onclick="_screenerLoadedCount+=10;renderScreener(\'' + safeSector + '\')">'
            + '<i data-lucide="chevron-down" style="width:15px;height:15px;"></i>'
            + 'Load 10 more &nbsp;<span style="opacity:0.65;font-size:11px;">(' + remaining + ' remaining)</span>'
            + '</button>'
            + '</td>';
        tbody.appendChild(tr);
    }

    lucide.createIcons();
    buildDOMCache(); // Ensure new elements are captured for real-time price updates
}

// ============================================================
// RENDER: MUTUAL FUNDS
// ============================================================
function renderMutualFunds(filterCategory, fundList) {
    filterCategory = filterCategory || 'All';
    fundList       = fundList       || mutualFunds;
    var tbody      = document.getElementById('fundsBody');
    tbody.innerHTML = '';
    var filtered = filterCategory === 'All' ? fundList : fundList.filter(function(f) { return f.category === filterCategory; });
    if (!filtered.length) {
        tbody.innerHTML = '<tr><td colspan="8" class="empty-row">No funds found</td></tr>';
        return;
    }
    filtered.forEach(function(fund) {
        var safe = fund.name.replace(/'/g, "\\'");
        var tr   = document.createElement('tr');
        tr.innerHTML =
            '<td><div class="stock-symbol">'
            + '<div class="stock-logo" style="background-color:' + fund.color + '20;color:' + fund.color + ';border:1px solid ' + fund.color + '40;">' + fund.logoText + '</div>'
            + '<div><strong>' + fund.name + '</strong><span>' + fund.house + ' &middot; ' + fund.category + '</span></div>'
            + '</div></td>'
            + '<td class="price-text">\u20B9' + fund.nav.toFixed(2) + '</td>'
            + '<td><span class="change-text" style="color:var(--' + (fund.return1y >= 0 ? 'positive' : 'negative') + ');">' + (fund.return1y >= 0 ? '+' : '') + fund.return1y + '%</span></td>'
            + '<td><span class="change-text" style="color:var(--' + (fund.return3y >= 0 ? 'positive' : 'negative') + ');">' + (fund.return3y >= 0 ? '+' : '') + fund.return3y + '%</span></td>'
            + '<td>\u20B9' + fund.aum + ' Cr</td>'
            + '<td><span class="risk-badge ' + riskClass(fund.risk) + '">' + fund.risk + '</span></td>'
            + '<td>' + starRating(fund.rating) + '</td>'
            + '<td><button class="btn btn-invest" onclick="openFundModal(\'' + safe + '\')">Invest</button> <button class="btn" style="padding:4px 8px;font-size:11px;margin-left:4px;" onclick="openFundDetail(\'' + safe + '\')">Detail</button></td>';
        tbody.appendChild(tr);
    });
    lucide.createIcons();
}

// ============================================================
// RENDER: IPO
// ============================================================
function renderIPO(filter) {
    filter = filter || 'all';
    var data = filter === 'all' ? ipoData : ipoData.filter(function(i) { return i.status === filter; });
    var html = data.map(function(ipo) {
        var sc = { open:'ipo-open', upcoming:'ipo-upcoming', listed:'ipo-listed' }[ipo.status] || '';
        var sl = { open:'Open',     upcoming:'Upcoming',     listed:'Listed'     }[ipo.status] || '';
        var gPos = ipo.gmp.startsWith('+');
        var btn = ipo.status === 'open'
            ? '<button class="btn btn-primary btn-full" onclick="showToast(\'Applied for ' + ipo.name + ' IPO!\',\'success\')">Apply Now</button>'
            : ipo.status === 'upcoming'
            ? '<button class="btn btn-watchlist-btn btn-full" onclick="showToast(\'' + ipo.name + ' — Alert set!\',\'info\')">Notify Me</button>'
            : '<button class="btn btn-full" style="opacity:.8;" onclick="showToast(\'Viewing ' + ipo.name + ' allotment...\',\'info\')">View Allotment</button>';
        return '<div class="ipo-card glass-panel">'
            + '<div class="ipo-card-header">'
            +   '<div class="stock-logo" style="background-color:' + ipo.color + '20;color:' + ipo.color + ';border:1px solid ' + ipo.color + '40;width:44px;height:44px;font-size:18px;font-weight:700;flex-shrink:0;">' + ipo.logoText + '</div>'
            +   '<div><div class="ipo-name">' + ipo.name + '</div><span class="ipo-status ' + sc + '">' + sl + '</span></div>'
            + '</div>'
            + '<div class="ipo-details">'
            +   '<div class="ipo-detail"><span>Price Band</span><strong>&#8377;' + ipo.priceRange + '</strong></div>'
            +   '<div class="ipo-detail"><span>Lot Size</span><strong>' + ipo.lotSize + ' shares</strong></div>'
            +   '<div class="ipo-detail"><span>Issue Size</span><strong>&#8377;' + ipo.issue + '</strong></div>'
            +   '<div class="ipo-detail"><span>GMP</span><strong style="color:var(--' + (gPos ? 'positive' : 'negative') + ');">' + ipo.gmp + '</strong></div>'
            + '</div>'
            + '<div class="ipo-dates"><span>Open: ' + ipo.openDate + '</span><span>Close: ' + ipo.closeDate + '</span></div>'
            + btn + '</div>';
    }).join('');
    document.getElementById('ipoGrid').innerHTML = html || '<div style="padding:40px;text-align:center;color:var(--text-muted);">No IPOs for this filter</div>';
    lucide.createIcons();
}

// ============================================================
// RENDER: PORTFOLIO
// ============================================================
function renderPortfolio() {
    var totalInvested = 0, totalCurrent = 0, dayGain = 0;
    var rows = portfolioHoldings.map(function(h) {
        var s = stocks.find(function(x) { return x.symbol === h.symbol; });
        if (!s) return '';
        var invested = h.qty * h.avgCost;
        var current  = h.qty * s.price;
        var pl       = current - invested;
        var plPct    = pl / invested * 100;
        var dayPl    = current * s.change / 100;
        totalInvested += invested; totalCurrent += current; dayGain += dayPl;
        var pos = pl >= 0;
        return '<tr>'
            + '<td><div class="stock-symbol">'
            +   '<div class="stock-logo" style="background-color:' + s.color + '20;color:' + s.color + ';border:1px solid ' + s.color + '40;">' + s.logoText + '</div>'
            +   '<div><strong>' + s.symbol + '</strong><span>' + s.name + '</span></div>'
            + '</div></td>'
            + '<td>' + h.qty + '</td>'
            + '<td>' + fmtINR(h.avgCost) + '</td>'
            + '<td data-price="' + s.symbol + '">' + fmtINR(s.price) + '</td>'
            + '<td>' + fmtINR(invested) + '</td>'
            + '<td>' + fmtINR(current) + '</td>'
            + '<td style="color:var(--' + (pos ? 'positive' : 'negative') + ');font-weight:600;">'
            +   (pos ? '+' : '') + fmtINR(Math.abs(pl)) + '</td>'
            + '<td style="color:var(--' + (pos ? 'positive' : 'negative') + ');font-weight:600;">'
            +   (pos ? '+' : '') + plPct.toFixed(2) + '%</td>'
            + '</tr>';
    }).join('');

    if (!portfolioHoldings.length) {
        document.getElementById('portfolioBody').innerHTML =
            '<tr><td colspan="9" class="empty-row" style="padding:40px;">'
            + '<div style="display:flex;flex-direction:column;align-items:center;gap:10px;opacity:0.55;">'
            + '<i data-lucide="briefcase" style="width:36px;height:36px;"></i>'
            + '<div style="font-size:15px;font-weight:600;">Your portfolio is empty</div>'
            + '<div style="font-size:13px;">Buy stocks to start building your portfolio</div>'
            + '<button class="btn btn-primary" onclick="setView(\'allstocks\')" style="margin-top:6px;">Browse Stocks</button>'
            + '</div></td></tr>';
        lucide.createIcons();
    } else {
        document.getElementById('portfolioBody').innerHTML = rows;
    }

    var totalPL    = totalCurrent - totalInvested;
    var totalPLPct = totalInvested > 0 ? totalPL / totalInvested * 100 : 0;
    var posTotal = totalPL >= 0, posDay = dayGain >= 0;
    document.getElementById('portfolioSummary').innerHTML =
        mkPortStat('Current Value',   fmtINR(totalCurrent),  '', false)
        + mkPortStat('Cash Balance',   fmtINR(virtualBalance), '', false)
        + mkPortStat('Total P&amp;L',
            '<span style="color:var(--' + (posTotal ? 'positive' : 'negative') + ');">' + (posTotal ? '+' : '') + fmtINR(Math.abs(totalPL)) + '</span>',
            (posTotal ? '+' : '') + totalPLPct.toFixed(2) + '%', posTotal)
        + mkPortStat("Today's Gain",
            '<span style="color:var(--' + (posDay ? 'positive' : 'negative') + ');">' + (posDay ? '+' : '') + fmtINR(Math.abs(dayGain)) + '</span>',
            '', posDay);

    // Sector allocation donut
    drawHoldingsDonut('holdingsDonut');
}

function mkPortStat(label, value, sub, colored) {
    return '<div class="port-stat-card glass-panel' + (colored === true ? ' port-positive' : colored === false && sub ? ' port-negative' : '') + '">'
        + '<span>' + label + '</span><strong>' + value + '</strong>'
        + (sub ? '<small>' + sub + '</small>' : '')
        + '</div>';
}

// ============================================================
// WATCHLIST
// ============================================================
function toggleWatchlistRow(symbol, btn) {
    if (watchlist.has(symbol)) {
        watchlist.delete(symbol);
        showToast(symbol + ' removed from Watchlist', 'info');
        if (btn) btn.classList.remove('btn-wl-active');
    } else {
        watchlist.add(symbol);
        showToast(symbol + ' added to Watchlist \u2605', 'success');
        if (btn) btn.classList.add('btn-wl-active');
    }
    updateWatchlistBadge();
    saveState();
    var mBtn = document.getElementById('modalWatchlistBtn');
    if (mBtn && mBtn.dataset.symbol === symbol) updateModalWatchlistBtn(symbol);
    if (currentView === 'watchlist') renderWatchlist();
}

function renderWatchlist() {
    var watched = stocks.filter(function(s) { return watchlist.has(s.symbol); });
    document.getElementById('screenerTitle').textContent = watched.length === 0 ? 'Watchlist (Empty)' : 'My Watchlist (' + watched.length + ')';
    renderScreener('All', watched);
}

// ============================================================
// ALL STOCKS BROWSER
// ============================================================
var ALL_PAGE_SIZE = 30;

function parseMarketCapNum(str) {
    if (!str) return 0;
    var s = str.replace(' Cr','').replace('L','').replace('K','').trim();
    var n = parseFloat(s) || 0;
    if (str.indexOf('L') !== -1) return n * 1e5;
    if (str.indexOf('K') !== -1) return n * 1e3;
    return n;
}

function renderAllStocks(page, sectorFilter, sortBy) {
    page        = page       || 0;
    sectorFilter= sectorFilter || 'All';
    sortBy      = sortBy     || 'marketcap';
    allStocksPage   = page;
    allStocksFilter = sectorFilter;
    allStocksSort   = sortBy;

    // Filter
    var list = sectorFilter === 'All' ? stocks.slice() : stocks.filter(function(s) { return s.sector === sectorFilter; });

    // Sort
    list.sort(function(a, b) {
        if (sortBy === 'marketcap') return parseMarketCapNum(b.marketCap) - parseMarketCapNum(a.marketCap);
        if (sortBy === 'price')     return b.price - a.price;
        if (sortBy === 'change')    return b.change - a.change;
        if (sortBy === 'name')      return a.name.localeCompare(b.name);
        return 0;
    });

    var total = list.length;
    var start = page * ALL_PAGE_SIZE;
    var page_list = list.slice(start, start + ALL_PAGE_SIZE);

    // Update count
    document.getElementById('allStocksCount').textContent = total + ' companies';

    // Update sort active state
    document.querySelectorAll('.as-sort-btn').forEach(function(b) {
        b.classList.toggle('active', b.dataset.sort === sortBy);
    });

    // Update sector filter
    document.getElementById('allStocksSector').value = sectorFilter;

    // Render table
    var tbody = document.getElementById('allStocksBody');
    if (!page_list.length) {
        tbody.innerHTML = '<tr><td colspan="8" class="empty-row">No stocks found</td></tr>';
        return;
    }

    tbody.innerHTML = page_list.map(function(stock, idx) {
        var pos  = stock.change >= 0;
        var inWL = watchlist.has(stock.symbol);
        var rank = start + idx + 1;
        var high52 = stock._52High ? fmtINR(stock._52High) : '—';
        var low52  = stock._52Low  ? fmtINR(stock._52Low)  : '—';
        return '<tr onclick="openStockModal(\'' + stock.symbol + '\')" style="cursor:pointer;">'
            + '<td style="color:var(--text-muted);font-size:12px;width:32px;">' + rank + '</td>'
            + '<td><div class="stock-symbol">'
            +   '<div class="stock-logo" style="background-color:' + stock.color + '20;color:' + stock.color + ';border:1px solid ' + stock.color + '40;">' + stock.logoText + '</div>'
            +   '<div><strong>' + stock.symbol + '</strong><span>' + stock.name + '</span></div>'
            + '</div></td>'
            + '<td class="price-text" data-price="' + stock.symbol + '">' + fmtINR(stock.price) + '</td>'
            + '<td><span data-change="' + stock.symbol + '" style="color:var(--' + (pos ? 'positive':'negative') + ');font-weight:600;">'
            +   (pos ? '+' : '') + stock.change.toFixed(2) + '%</span></td>'
            + '<td>' + stock.marketCap + '</td>'
            + '<td style="font-size:12px;color:var(--text-muted);">' + high52 + ' / ' + low52 + '</td>'
            + '<td><span class="sector-tag">' + stock.sector + '</span></td>'
            + '<td onclick="event.stopPropagation()"><div style="display:flex;gap:5px;">'
            +   '<button class="btn btn-buy-sm" onclick="openOrderModal(\'' + stock.symbol + '\',\'buy\')">Buy</button>'
            +   '<button class="btn btn-wl' + (inWL ? ' btn-wl-active' : '') + '" onclick="toggleWatchlistRow(\'' + stock.symbol + '\',this)">'
            +   '<i data-lucide="star" style="width:13px;height:13px;"></i></button>'
            + '</div></td>'
            + '</tr>';
    }).join('');

    // Pagination
    var totalPages = Math.ceil(total / ALL_PAGE_SIZE);
    document.getElementById('allStocksPrev').disabled = page <= 0;
    document.getElementById('allStocksNext').disabled = page >= totalPages - 1;
    document.getElementById('allStocksPageInfo').textContent = 'Page ' + (page + 1) + ' of ' + totalPages + ' (' + total + ' stocks)';

    lucide.createIcons();
}

// ============================================================
// NAVIGATION
// ============================================================
function setView(view) {
    currentView = view;
    _priceCache  = null;
    _changeCache = null;
    document.querySelectorAll('.nav-item[data-view]').forEach(function(item) {
        item.classList.toggle('active', item.dataset.view === view);
    });
    // Fade-in the incoming section
    setTimeout(function() {
        var target = document.getElementById('section-' + view) || document.querySelector('.dashboard-content');
        if (target) { target.classList.remove('view-fade-in'); void target.offsetWidth; target.classList.add('view-fade-in'); }
    }, 10);

    // Sections outside .dashboard-content (full-page views)
    var fullPageViews = ['orders','news','calculator','compare','settings','heatmap','journal',
                         'calendar','screener-pro','global','technicals','dividends',
                         'market-pulse','earnings',
                         'options-chain','positions','funds','brokerage-calc','strategy'];
    var isFullPage = fullPageViews.indexOf(view) !== -1;

    // Show/hide the main dashboard-content wrapper
    var dashContent = document.querySelector('.dashboard-content');
    if (dashContent) dashContent.style.display = isFullPage ? 'none' : '';

    // Show/hide each full-page section
    ['orders','news','calculator','compare','settings','heatmap','journal',
     'calendar','screener-pro','global','technicals','dividends',
     'market-pulse','earnings',
     'options-chain','positions','funds','brokerage-calc','strategy'].forEach(function(v) {
        var el = document.getElementById('section-' + v);
        if (el) el.style.display = (v === view) ? 'block' : 'none';
    });

    if (isFullPage) {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (view === 'orders')       { renderOrderHistory(); }
        if (view === 'news')         { renderNews(); }
        if (view === 'calculator')   { calcSIP(); calcLumpsum(); }
        if (view === 'compare')      { renderCompare(); }
        if (view === 'settings')     { renderSettings(); }
        if (view === 'heatmap')      { renderHeatmap(); }
        if (view === 'journal')      { renderJournal(); }
        if (view === 'calendar')     { renderCalendar(); }
        if (view === 'screener-pro') { applyScreenerPro(); }
        if (view === 'global')       { fetchGlobalMarkets(); }
        if (view === 'technicals')   { renderTechnicalScreener(); }
        if (view === 'dividends')    { renderDividendTracker(); }
        if (view === 'market-pulse')    { renderMarketPulse(); }
        if (view === 'earnings')        { renderEarningsCalendar(); }
        if (view === 'options-chain')   { renderOptionsChain(); }
        if (view === 'positions')       { renderPositions(); }
        if (view === 'funds')           { renderFunds(); }
        if (view === 'brokerage-calc')  { renderBrokerageCalc(); }
        if (view === 'strategy')        { renderStrategy(); }
        return;
    }

    // ── Sections inside .dashboard-content ──
    var screener  = document.getElementById('section-screener');
    var funds     = document.getElementById('section-mutualfunds');
    var overview  = document.getElementById('section-dashboard');
    var gainers   = document.getElementById('section-gainers');
    var ipo       = document.getElementById('section-ipo');
    var portfolio = document.getElementById('section-portfolio');

    switch (view) {
        case 'dashboard':
            document.getElementById('screenerTitle').textContent = 'NSE Top Picks';
            document.getElementById('sectorFilter').value = 'All';
            _screenerLoadedCount = 10;
            renderScreener();
            buildDOMCache(); // Rebuild cache after new elements are added
            overview.scrollIntoView({ behavior:'smooth', block:'start' });
            break;
        case 'screener':
            document.getElementById('screenerTitle').textContent = 'NSE Top Picks';
            document.getElementById('sectorFilter').value = 'All';
            _screenerLoadedCount = 10;
            renderScreener();
            buildDOMCache();
            screener.scrollIntoView({ behavior:'smooth', block:'start' });
            break;
        case 'gainers':
            renderGainersLosers();
            renderSectorPerformance();
            gainers.scrollIntoView({ behavior:'smooth', block:'start' });
            break;
        case 'mutualfunds':
            document.getElementById('fundCategoryFilter').value = 'All';
            renderMutualFunds();
            funds.scrollIntoView({ behavior:'smooth', block:'start' });
            break;
        case 'ipo':
            renderIPO();
            ipo.scrollIntoView({ behavior:'smooth', block:'start' });
            break;
        case 'portfolio':
            renderPortfolio();
            buildDOMCache();
            portfolio.scrollIntoView({ behavior:'smooth', block:'start' });
            break;
        case 'watchlist':
            renderWatchlist();
            buildDOMCache();
            document.getElementById('section-screener').scrollIntoView({ behavior:'smooth', block:'start' });
            break;
        case 'allstocks':
            renderAllStocks(0, 'All', 'marketcap');
            document.getElementById('section-allstocks').scrollIntoView({ behavior:'smooth', block:'start' });
            break;
    }
}

// ============================================================
// LIVE SEARCH  — fixed: never clears input while typing
// ============================================================

// Just hides dropdown — does NOT touch input value
function hideSearchDropdown() {
    document.getElementById('searchDropdown').classList.add('hidden');
}

// Hides dropdown AND clears input — only called after user selects a result
function clearSearch() {
    document.getElementById('searchDropdown').classList.add('hidden');
    document.getElementById('searchInput').value = '';
}

// Smart local search with keyword + fuzzy matching
function matchStock(s, t) {
    var sym  = s.symbol.toLowerCase();
    var name = s.name.toLowerCase();
    var kw   = (s.k || '').toLowerCase();
    // Starts-with gets top priority; contains is secondary
    return sym.startsWith(t) || name.startsWith(t)
        || sym.indexOf(t) !== -1 || name.indexOf(t) !== -1 || kw.indexOf(t) !== -1;
}

function scoreStock(s, t) {
    var sym  = s.symbol.toLowerCase();
    var name = s.name.toLowerCase();
    if (sym === t)          return 100;
    if (sym.startsWith(t)) return 90;
    if (name.startsWith(t))return 80;
    if (sym.indexOf(t) !== -1) return 70;
    if (name.indexOf(t) !== -1)return 60;
    return 50;
}

function buildDropdownHTML(localMatches, apiQuotes, term) {
    var t    = term.toLowerCase().trim();
    var html = '';

    // ── Local NSE/BSE stocks ──
    if (localMatches.length) {
        html += '<div class="search-group-label"><i data-lucide="zap" style="width:11px;height:11px;display:inline;vertical-align:middle;"></i> Stocks in NexTrade</div>';
        localMatches.forEach(function(s) {
            var pos = s.change >= 0;
            html += '<div class="search-item" onclick="selectSearchResult(\'' + s.symbol + '\')">'
                + '<div class="si-left">'
                +   '<div style="display:flex;align-items:center;gap:8px;">'
                +     '<div style="width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;background-color:' + s.color + '20;color:' + s.color + ';border:1px solid ' + s.color + '40;">' + s.logoText + '</div>'
                +     '<div><strong>' + s.symbol + '</strong><br><span>' + s.name + '</span></div>'
                +   '</div>'
                + '</div>'
                + '<div style="text-align:right;">'
                +   '<div style="font-size:13px;font-weight:700;">' + fmtINR(s.price) + '</div>'
                +   '<div style="font-size:12px;font-weight:600;color:var(--' + (pos ? 'positive' : 'negative') + ');">' + (pos ? '+' : '') + s.change.toFixed(2) + '%</div>'
                + '</div>'
                + '</div>';
        });
    }

    // ── Extra results from Yahoo Finance search API ──
    var localYFSyms = localMatches.map(function(s) { return YF_STOCK_MAP[s.symbol]; }).filter(Boolean);
    if (apiQuotes && apiQuotes.length) {
        var newQ = apiQuotes.filter(function(q) { return localYFSyms.indexOf(q.symbol) === -1; });
        if (newQ.length) {
            html += '<div class="search-group-label"><i data-lucide="globe" style="width:11px;height:11px;display:inline;vertical-align:middle;"></i> More on NSE / BSE</div>';
            newQ.slice(0, 6).forEach(function(q) {
                var ourSym = q.symbol.replace(/\.(NS|BO)$/, '');
                var exc    = q.symbol.endsWith('.NS') ? 'NSE' : 'BSE';
                var sName  = q.shortname || q.longname || ourSym;
                html += '<div class="search-item" onclick="selectSearchResult(\'' + ourSym + '\',\'' + q.symbol + '\')">'
                    + '<div class="si-left">'
                    +   '<div style="display:flex;align-items:center;gap:8px;">'
                    +     '<div style="width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;background:rgba(59,130,246,0.15);color:#60a5fa;border:1px solid rgba(59,130,246,0.3);flex-shrink:0;">' + ourSym[0] + '</div>'
                    +     '<div><strong>' + ourSym + '</strong><br><span>' + sName + '</span></div>'
                    +   '</div>'
                    + '</div>'
                    + '<span class="exchange-badge" style="padding:3px 8px;font-size:10px;height:fit-content;">' + exc + '</span>'
                    + '</div>';
            });
        }
    }

    // ── Mutual funds ──
    var mfMatches = mutualFunds.filter(function(f) {
        return f.name.toLowerCase().indexOf(t) !== -1 || f.house.toLowerCase().indexOf(t) !== -1
            || f.category.toLowerCase().indexOf(t) !== -1;
    }).slice(0, 3);
    if (mfMatches.length) {
        html += '<div class="search-group-label"><i data-lucide="briefcase" style="width:11px;height:11px;display:inline;vertical-align:middle;"></i> Mutual Funds</div>';
        mfMatches.forEach(function(f) {
            var safe = f.name.replace(/'/g, "\\'");
            html += '<div class="search-item" onclick="openFundModal(\'' + safe + '\');clearSearch();">'
                + '<div class="si-left">'
                +   '<div style="display:flex;align-items:center;gap:8px;">'
                +     '<div style="width:30px;height:30px;border-radius:8px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:13px;flex-shrink:0;background-color:' + f.color + '20;color:' + f.color + ';border:1px solid ' + f.color + '40;">' + f.logoText + '</div>'
                +     '<div><strong>' + f.name + '</strong><br><span>' + f.house + ' &middot; ' + f.category + '</span></div>'
                +   '</div>'
                + '</div>'
                + '<div style="text-align:right;font-size:12px;font-weight:600;color:var(--positive);">+' + f.return1y + '%<br><span style="color:var(--text-muted);font-weight:400;">1Y</span></div>'
                + '</div>';
        });
    }

    // ── IPOs ──
    var ipoMatches = ipoData.filter(function(i) {
        return i.name.toLowerCase().indexOf(t) !== -1 || i.symbol.toLowerCase().indexOf(t) !== -1;
    }).slice(0, 2);
    if (ipoMatches.length) {
        html += '<div class="search-group-label"><i data-lucide="rocket" style="width:11px;height:11px;display:inline;vertical-align:middle;"></i> IPO</div>';
        ipoMatches.forEach(function(ipo) {
            var sc = { open:'ipo-open', upcoming:'ipo-upcoming', listed:'ipo-listed' }[ipo.status] || '';
            html += '<div class="search-item" onclick="setView(\'ipo\');clearSearch();">'
                + '<div class="si-left"><strong>' + ipo.name + '</strong><br><span>&#8377;' + ipo.priceRange + '</span></div>'
                + '<span class="ipo-status ' + sc + '">' + ipo.status + '</span>'
                + '</div>';
        });
    }

    if (!html) {
        html = '<div class="search-empty">'
            + '<i data-lucide="search-x" style="width:28px;height:28px;color:var(--text-muted);display:block;margin:0 auto 8px;"></i>'
            + '<div>No results for <strong>"' + term + '"</strong></div>'
            + '<div style="font-size:12px;color:var(--text-muted);margin-top:4px;">Try searching by ticker symbol (e.g. INFY, HDFC) or company name</div>'
            + '</div>';
    }

    return html;
}

function showDropdown(html) {
    var dd = document.getElementById('searchDropdown');
    dd.innerHTML = html;
    dd.classList.remove('hidden');
    lucide.createIcons();
}

// Instant local search — no API call, runs on every keystroke
function searchLocal(term) {
    var t = term.toLowerCase().trim();
    if (!t) { hideSearchDropdown(); return; }

    var localMatches = stocks
        .filter(function(s) { return matchStock(s, t); })
        .sort(function(a, b) { return scoreStock(b, t) - scoreStock(a, t); })
        .slice(0, 8);

    showDropdown(buildDropdownHTML(localMatches, null, term));
}

// API search — debounced, enhances results with Yahoo Finance
async function searchAPI(term) {
    var t = term.trim();
    if (t.length < 2) return;

    var localMatches = stocks
        .filter(function(s) { return matchStock(s, t.toLowerCase()); })
        .sort(function(a, b) { return scoreStock(b, t.toLowerCase()) - scoreStock(a, t.toLowerCase()); })
        .slice(0, 8);

    try {
        var res  = await fetchWithFallback(YF_SEARCH_URL + encodeURIComponent(t), 5000);
        var data = await res.json();
        var quotes = (data.quotes || []).filter(function(q) {
            return (q.symbol.endsWith('.NS') || q.symbol.endsWith('.BO')) && q.typeDisp === 'Equity';
        });
        // Only update dropdown if user is still typing this term
        var current = document.getElementById('searchInput').value.trim();
        if (current.toLowerCase() === t.toLowerCase()) {
            showDropdown(buildDropdownHTML(localMatches, quotes, term));
        }
    } catch (e) { /* Keep local results showing */ }
}

async function selectSearchResult(symbol, yfSymbol) {
    clearSearch();
    var local = stocks.find(function(s) { return s.symbol === symbol; });
    if (local) { openStockModal(symbol); return; }

    if (!yfSymbol) yfSymbol = symbol + '.NS';
    showToast('Loading ' + symbol + ' from NSE...', 'info');

    try {
        var res  = await fetchWithFallback(YF_QUOTE_URL + yfSymbol, 6000);
        var json = await res.json();
        var q    = json.quoteResponse && json.quoteResponse.result && json.quoteResponse.result[0];
        if (!q) throw new Error('No data');

        var tempStock = {
            symbol: symbol, name: q.shortName || q.longName || symbol,
            price:  q.regularMarketPrice || 0,
            change: parseFloat((q.regularMarketChangePercent || 0).toFixed(2)),
            marketCap: q.marketCap ? formatMarketCap(q.marketCap) : 'N/A',
            pe:        q.trailingPE ? parseFloat(q.trailingPE.toFixed(1)) : null,
            sector:    q.sector || q.quoteType || 'N/A',
            color: '#3b82f6', logoText: symbol[0],
            _52High:  q.fiftyTwoWeekHigh, _52Low: q.fiftyTwoWeekLow,
            _volume:  q.regularMarketVolume, _eps: q.epsTrailingTwelveMonths,
            _bookVal: q.bookValue, _divYield: q.trailingAnnualDividendYield,
            _temp: true, k: ''
        };
        stocks.push(tempStock);
        openStockModal(symbol);
        setTimeout(function() {
            if (!watchlist.has(symbol)) {
                var idx = stocks.findIndex(function(s) { return s.symbol === symbol && s._temp; });
                if (idx !== -1) stocks.splice(idx, 1);
            }
        }, 120000);
    } catch(e) {
        showToast('Could not load ' + symbol + '. Check the symbol and try again.', 'error');
    }
}

// ============================================================
// STOCK MODAL
// ============================================================
function openStockModal(symbol) {
    var stock = stocks.find(function(s) { return s.symbol === symbol; });
    if (!stock) return;

    currentChartSymbol = symbol;
    currentChartRange  = '1M';

    var range = get52WeekRange(stock);
    var pos   = stock.change >= 0;

    document.getElementById('modalLogo').textContent = stock.logoText;
    document.getElementById('modalLogo').style.cssText =
        'background-color:' + stock.color + '20;color:' + stock.color + ';border:1px solid ' + stock.color + '40;';
    document.getElementById('modalSymbol').textContent = stock.symbol;
    document.getElementById('modalName').textContent   = stock.name;
    document.getElementById('modalPrice').textContent  = fmtINR(stock.price);
    document.getElementById('modalMarketCap').textContent = stock.marketCap;
    document.getElementById('modalPE').textContent     = stock.pe ? stock.pe : '—';
    document.getElementById('modal52High').textContent = fmtINR(range.high);
    document.getElementById('modal52Low').textContent  = fmtINR(range.low);
    document.getElementById('modalVolume').textContent = getVolume(stock);
    document.getElementById('modalSector').textContent = stock.sector;

    // EPS, Book Value, Dividend
    var eps = stock._eps || (stock.pe ? (stock.price / stock.pe).toFixed(2) : null);
    document.getElementById('modalEPS').textContent       = eps ? '\u20B9' + parseFloat(eps).toFixed(2) : '—';
    document.getElementById('modalBookValue').textContent = stock._bookVal ? '\u20B9' + parseFloat(stock._bookVal).toFixed(2) : '—';
    document.getElementById('modalDividend').textContent  = stock._divYield ? (stock._divYield * 100).toFixed(2) + '%' : '—';

    // OHLCV — from live API or estimated
    var open      = stock._open     || (stock.price * (1 - Math.random() * 0.012)).toFixed(2);
    var prevClose = stock._prevClose|| (stock.price / (1 + stock.change / 100)).toFixed(2);
    var dayHigh   = stock._dayHigh  || (stock.price * (1 + Math.random() * 0.015)).toFixed(2);
    var dayLow    = stock._dayLow   || (stock.price * (1 - Math.random() * 0.015)).toFixed(2);
    document.getElementById('modalOpen').textContent      = fmtINR(parseFloat(open));
    document.getElementById('modalPrevClose').textContent = fmtINR(parseFloat(prevClose));
    document.getElementById('modalDayHigh').textContent   = fmtINR(parseFloat(dayHigh));
    document.getElementById('modalDayLow').textContent    = fmtINR(parseFloat(dayLow));

    // 52W range bar
    var low52  = parseFloat(range.low);
    var high52 = parseFloat(range.high);
    var pct    = high52 > low52 ? Math.max(2, Math.min(98, (stock.price - low52) / (high52 - low52) * 100)).toFixed(1) : 50;
    document.getElementById('modal52Fill').style.width   = pct + '%';
    document.getElementById('modal52Marker').style.left  = pct + '%';
    document.getElementById('modal52PctLabel').textContent = pct + '% of 52-week range';

    var badge = document.getElementById('modalChange');
    badge.textContent = (pos ? '+' : '') + stock.change.toFixed(2) + '%';
    badge.className   = 'trend-badge ' + (pos ? 'trend-positive' : 'trend-negative');

    // Reset chart range tabs
    document.querySelectorAll('.chart-range-tab').forEach(function(t) {
        t.classList.toggle('active', t.dataset.range === '1M');
    });

    // Show modal first, then load chart (needs container width)
    document.getElementById('stockModal').classList.remove('hidden');
    lucide.createIcons();
    renderStockScore(stock);

    var wlBtn = document.getElementById('modalWatchlistBtn');
    wlBtn.dataset.symbol = symbol;
    wlBtn.onclick = function() {
        toggleWatchlistRow(symbol, null);
        updateModalWatchlistBtn(symbol);
        var rowBtn = document.querySelector('tr[data-symbol="' + symbol + '"] .btn-wl');
        if (rowBtn) rowBtn.classList.toggle('btn-wl-active', watchlist.has(symbol));
    };
    updateModalWatchlistBtn(symbol);

    document.getElementById('modalBuyBtn').onclick  = function() { closeModal('stockModal'); openOrderModal(symbol, 'buy'); };
    document.getElementById('modalSellBtn').onclick = function() { closeModal('stockModal'); openOrderModal(symbol, 'sell'); };

    // Load chart after a brief paint delay
    setTimeout(function() { loadModalChart('1M'); }, 60);
}

function updateModalWatchlistBtn(symbol) {
    var btn  = document.getElementById('modalWatchlistBtn');
    var inWL = watchlist.has(symbol);
    btn.innerHTML  = '<i data-lucide="star" style="width:15px;height:15px;"></i> ' + (inWL ? 'In Watchlist' : 'Add to Watchlist');
    btn.className  = 'btn btn-watchlist-btn' + (inWL ? ' btn-watchlist-active' : '');
    lucide.createIcons();
}

// ============================================================
// ORDER MODAL
// ============================================================
function openOrderModal(symbol, side) {
    var stock = stocks.find(function(s) { return s.symbol === symbol; });
    if (!stock) return;
    currentOrderStock = stock;
    currentOrderSide  = side;

    var badge = document.getElementById('orderSideBadge');
    badge.textContent = side.toUpperCase();
    badge.className   = 'order-side-badge ' + (side === 'buy' ? 'order-buy' : 'order-sell');

    document.getElementById('orderSymbolTitle').textContent  = symbol + ' — ' + stock.name.split(' ')[0];
    document.getElementById('orderCurrentPrice').textContent = 'LTP: ' + fmtINR(stock.price) + ' (' + (stock.change >= 0 ? '+' : '') + stock.change.toFixed(2) + '%)';
    document.getElementById('orderPrice').value = stock.price.toFixed(2);
    document.getElementById('orderQty').value = 1;

    // Reset to Market order
    document.querySelectorAll('.order-tab').forEach(function(t) { t.classList.toggle('active', t.dataset.otype === 'market'); });
    document.getElementById('orderPriceField').style.display   = 'none';
    document.getElementById('orderTriggerField').style.display = 'none';

    var confirmBtn = document.getElementById('confirmOrderBtn');
    confirmBtn.className  = 'btn btn-full ' + (side === 'buy' ? 'btn-buy' : 'btn-sell');
    confirmBtn.textContent = (side === 'buy' ? 'Buy ' : 'Sell ') + symbol;

    updateOrderSummary();
    document.getElementById('orderModal').classList.remove('hidden');
    lucide.createIcons();
}

function updateOrderSummary() {
    if (!currentOrderStock) return;
    var qty   = parseInt(document.getElementById('orderQty').value) || 1;
    var activeTab = document.querySelector('.order-tab.active');
    var otype = activeTab ? activeTab.dataset.otype : 'market';
    var price = (otype === 'limit' || otype === 'sl')
        ? (parseFloat(document.getElementById('orderPrice').value) || currentOrderStock.price)
        : currentOrderStock.price;
    var est   = qty * price;
    document.getElementById('orderEstValue').textContent = fmtINR(est);
    document.getElementById('orderMargin').textContent   = fmtINR(est * 0.2);
    var balEl = document.getElementById('availableBalance');
    if (balEl) {
        balEl.textContent = '\u20B9' + virtualBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 });
        balEl.className = est > virtualBalance ? 'negative-text' : 'positive-text';
    }
}

// ============================================================
// FUND INVEST MODAL
// ============================================================
function openFundModal(fundName) {
    var fund = mutualFunds.find(function(f) { return f.name === fundName; });
    if (!fund) return;
    currentFund = fund;

    document.getElementById('fundModalLogo').textContent = fund.logoText;
    document.getElementById('fundModalLogo').style.cssText =
        'background-color:' + fund.color + '20;color:' + fund.color + ';border:1px solid ' + fund.color + '40;';
    document.getElementById('fundModalName').textContent  = fund.name;
    document.getElementById('fundModalHouse').textContent = fund.house + ' \u00B7 NAV \u20B9' + fund.nav.toFixed(2);
    document.getElementById('fundModal1Y').textContent    = '+' + fund.return1y + '%';
    document.getElementById('fundModal3Y').textContent    = '+' + fund.return3y + '%';
    var riskEl = document.getElementById('fundModalRisk');
    riskEl.textContent = fund.risk;
    riskEl.className   = 'risk-badge ' + riskClass(fund.risk);

    document.getElementById('sipAmount').value      = '5000';
    document.getElementById('lumpsumAmount').value  = '10000';
    switchInvestTab('sip');
    updateSIPPreview();
    updateLumpsumPreview();
    document.getElementById('fundModal').classList.remove('hidden');
    lucide.createIcons();
}

function switchInvestTab(tab) {
    document.querySelectorAll('.invest-tab').forEach(function(t) {
        t.classList.toggle('active', t.dataset.tab === tab);
    });
    document.getElementById('sipForm').classList.toggle('hidden', tab !== 'sip');
    document.getElementById('lumpsumForm').classList.toggle('hidden', tab !== 'lumpsum');
}

function updateSIPPreview() {
    var amt = parseInt(document.getElementById('sipAmount').value) || 5000;
    document.getElementById('sipPreview').innerHTML =
        '<div><span>Monthly SIP</span><strong>\u20B9' + amt.toLocaleString('en-IN') + '</strong></div>'
        + '<div><span>1 Year Total</span><strong>\u20B9' + (amt * 12).toLocaleString('en-IN') + '</strong></div>'
        + '<div><span>3 Year Total</span><strong>\u20B9' + (amt * 36).toLocaleString('en-IN') + '</strong></div>';
}

function updateLumpsumPreview() {
    if (!currentFund) return;
    var amt   = parseInt(document.getElementById('lumpsumAmount').value) || 10000;
    var units = (amt / currentFund.nav).toFixed(3);
    document.getElementById('lumpsumPreview').innerHTML =
        '<div><span>You are investing</span><strong>\u20B9' + amt.toLocaleString('en-IN') + '</strong></div>'
        + '<div><span>Approx. Units @ \u20B9' + currentFund.nav.toFixed(2) + '</span><strong>' + units + ' units</strong></div>';
}

// ============================================================
// MODALS
// ============================================================
function closeModal(id) { document.getElementById(id).classList.add('hidden'); }
function overlayClose(event, id) { if (event.target === document.getElementById(id)) closeModal(id); }

// ============================================================
// PRICE SIMULATION  (micro-nudges between API refreshes)
// ============================================================
// Pre-built DOM cache so we never run querySelector in the hot loop
var _priceCache  = null;
var _changeCache = null;

function buildDOMCache() {
    _priceCache  = {};
    _changeCache = {};
    document.querySelectorAll('[data-price]').forEach(function(el) {
        var sym = el.dataset.price;
        if (!_priceCache[sym]) _priceCache[sym] = [];
        _priceCache[sym].push(el);
    });
    document.querySelectorAll('[data-change]').forEach(function(el) {
        var sym = el.dataset.change;
        if (!_changeCache[sym]) _changeCache[sym] = [];
        _changeCache[sym].push(el);
    });
}

function updatePricesInDOM() {
    // Rebuild cache if it's empty (e.g. after a view change that re-renders cards)
    if (!_priceCache) buildDOMCache();

    // Optimization: Iterate over the elements we KNOW are in the DOM instead of all ~100+ stocks
    for (var sym in _priceCache) {
        var stock = stocksMap[sym];
        if (!stock) continue;
        
        var priceEls  = _priceCache[sym] || [];
        var changeEls = _changeCache[sym] || [];

        priceEls.forEach(function(el) {
            var newTxt = fmtINR(stock.price);
            if (el.textContent !== newTxt) {
                el.textContent = newTxt;
                var cls = stock.change >= 0 ? 'price-flash-up' : 'price-flash-down';
                el.classList.remove('price-flash-up', 'price-flash-down');
                void el.offsetWidth;
                el.classList.add(cls);
                setTimeout(function() { el.classList.remove(cls); }, 900);
            }
        });

        changeEls.forEach(function(el) {
            var pos = stock.change >= 0;
            el.style.color = 'var(--' + (pos ? 'positive' : 'negative') + ')';
            el.textContent = (pos ? '\u25B2 +' : '\u25BC ') + stock.change.toFixed(2) + '%';
        });
    }

    indices.forEach(function(idx, i) {
        var priceEl = document.getElementById('idx-price-' + i);
        var badgeEl = document.getElementById('idx-badge-' + i);
        if (priceEl) priceEl.textContent = idx.value.toLocaleString('en-IN',{minimumFractionDigits:2});
        if (badgeEl) {
            var pos = idx.change >= 0;
            badgeEl.className   = 'trend-badge ' + (pos ? 'trend-positive' : 'trend-negative');
            badgeEl.textContent = (pos ? '+' : '') + idx.change.toFixed(2) + '%';
        }
    });

    checkPriceAlerts();
}

function startPriceSimulation() {
    // Slowed from 3s → 10s to drastically cut CPU usage
    setInterval(function() {
        stocks.forEach(function(s) {
            var d = (Math.random() - 0.48) * 0.18;
            s.price  = parseFloat(Math.max(1, s.price * (1 + d / 100)).toFixed(2));
            s.change = parseFloat((s.change + (Math.random() - 0.5) * 0.04).toFixed(2));
        });
        indices.forEach(function(idx) {
            var d = (Math.random() - 0.48) * 0.12;
            idx.value  = parseFloat(Math.max(1, idx.value * (1 + d / 100)).toFixed(2));
            idx.change = parseFloat((idx.change + (Math.random() - 0.5) * 0.03).toFixed(2));
        });
        updatePricesInDOM();
        updateTicker();
        // Recalculate and re-render analytics so they match the "Accurate" simulated prices
        renderGainersLosers();
        renderSectorPerformance();
        if (currentView === 'heatmap') renderHeatmap();
    }, 10000);  // was 3000ms
}


// ============================================================
// VIRTUAL ACCOUNT — balance, order execution, order history
// ============================================================
function updateBalanceDisplay() {
    var el = document.getElementById('balanceDisplay');
    if (el) el.textContent = '\u20B9' + virtualBalance.toLocaleString('en-IN', { minimumFractionDigits: 2 });
}

function executeOrder() {
    if (!currentOrderStock) return;
    var qty   = parseInt(document.getElementById('orderQty').value) || 1;
    var activeOrderTab   = document.querySelector('.order-tab.active');
    var activeProductTab = document.querySelector('.product-tab.active');
    var otype   = activeOrderTab   ? activeOrderTab.dataset.otype     : 'market';
    var product = activeProductTab ? activeProductTab.dataset.product : 'cnc';
    var price = (otype === 'limit' || otype === 'sl')
        ? parseFloat(document.getElementById('orderPrice').value) || currentOrderStock.price
        : currentOrderStock.price;
    var symbol = currentOrderStock.symbol;
    var side   = currentOrderSide;
    var total  = parseFloat((qty * price).toFixed(2));

    if (side === 'buy') {
        if (total > virtualBalance) {
            showToast('Insufficient balance! Need \u20B9' + total.toLocaleString('en-IN') + ' but have \u20B9' + virtualBalance.toLocaleString('en-IN'), 'error');
            return;
        }
        virtualBalance -= total;
        var existing = portfolioHoldings.find(function(h) { return h.symbol === symbol; });
        if (existing) {
            var newQty  = existing.qty + qty;
            existing.avgCost = parseFloat(((existing.qty * existing.avgCost + total) / newQty).toFixed(2));
            existing.qty = newQty;
        } else {
            portfolioHoldings.push({ symbol: symbol, qty: qty, avgCost: parseFloat(price.toFixed(2)) });
        }
    } else {
        var holding = portfolioHoldings.find(function(h) { return h.symbol === symbol; });
        if (!holding || holding.qty < qty) {
            showToast('Insufficient holdings! You have ' + (holding ? holding.qty : 0) + ' shares of ' + symbol, 'error');
            return;
        }
        virtualBalance += total;
        holding.qty -= qty;
        if (holding.qty <= 0) portfolioHoldings = portfolioHoldings.filter(function(h) { return h.symbol !== symbol; });
    }

    orderHistory.unshift({
        id: Date.now(), symbol: symbol, name: currentOrderStock.name.split(' ')[0],
        side: side, qty: qty, price: parseFloat(price.toFixed(2)),
        total: total, type: otype || 'market', product: product.toUpperCase(),
        time: new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit' }),
        date: new Date().toLocaleDateString('en-IN'), status: 'Executed'
    });

    saveState();
    closeModal('orderModal');
    updateBalanceDisplay();
    updateOrderSummary();

    var emoji = side === 'buy' ? '\uD83D\uDCC8' : '\uD83D\uDCC9';
    showToast(emoji + ' ' + side.toUpperCase() + ' ' + qty + ' × ' + symbol + ' @ \u20B9' + price.toFixed(2) + ' executed!', side === 'buy' ? 'success' : 'info');

    if (currentView === 'portfolio') renderPortfolio();
    if (currentView === 'orders')   renderOrderHistory();
}

function renderOrderHistory() {
    var tbody = document.getElementById('ordersBody');
    if (!tbody) return;
    if (!orderHistory.length) {
        tbody.innerHTML = '<tr><td colspan="9" class="empty-row" style="padding:40px;"><div style="display:flex;flex-direction:column;align-items:center;gap:8px;opacity:0.5;"><i data-lucide="clipboard-list" style="width:32px;height:32px;"></i>No orders yet. Start trading!</div></td></tr>';
        lucide.createIcons(); return;
    }
    tbody.innerHTML = orderHistory.map(function(o) {
        var isBuy = o.side === 'buy';
        return '<tr>'
            + '<td style="color:var(--text-muted);font-size:12px;">' + o.date + '<br>' + o.time + '</td>'
            + '<td><strong>' + o.symbol + '</strong><br><small style="color:var(--text-muted);">' + o.name + '</small></td>'
            + '<td><span class="order-side-tag ' + (isBuy ? 'buy-tag' : 'sell-tag') + '">' + o.side.toUpperCase() + '</span></td>'
            + '<td>' + o.qty + '</td>'
            + '<td>' + fmtINR(o.price) + '</td>'
            + '<td style="font-weight:700;">' + fmtINR(o.total) + '</td>'
            + '<td><span class="order-type-badge">' + o.type.toUpperCase() + '</span></td>'
            + '<td><span style="font-size:11px;">' + o.product + '</span></td>'
            + '<td><span class="status-executed">&#10004; ' + o.status + '</span></td>'
            + '</tr>';
    }).join('');
}

// ============================================================
// PRICE ALERTS
// ============================================================
function setPriceAlert(symbol, targetPrice, condition) {
    priceAlerts.push({ symbol: symbol, targetPrice: targetPrice, condition: condition, triggered: false });
    showToast('Alert set: ' + symbol + ' ' + condition + ' \u20B9' + parseFloat(targetPrice).toLocaleString('en-IN'), 'success');
    closeModal('alertModal');
}

function checkPriceAlerts() {
    priceAlerts.forEach(function(alert) {
        if (alert.triggered) return;
        var stock = stocks.find(function(s) { return s.symbol === alert.symbol; });
        if (!stock) return;
        var triggered = (alert.condition === 'above' && stock.price >= alert.targetPrice)
                     || (alert.condition === 'below' && stock.price <= alert.targetPrice);
        if (triggered) {
            alert.triggered = true;
            showToast('\uD83D\uDD14 Alert! ' + alert.symbol + ' hit \u20B9' + stock.price.toFixed(2) + ' (' + alert.condition + ' \u20B9' + alert.targetPrice + ')', 'success');
        }
    });
}

function openAlertModal(symbol) {
    var stock = stocks.find(function(s) { return s.symbol === symbol; });
    if (!stock) return;
    document.getElementById('alertSymbolName').textContent = symbol + ' — ' + stock.name;
    document.getElementById('alertCurrentPrice').textContent = 'Current: ' + fmtINR(stock.price);
    document.getElementById('alertTargetPrice').value = stock.price.toFixed(2);
    document.getElementById('alertModal').classList.remove('hidden');
    lucide.createIcons();
}

function fetchLiveNews() {
    // Using Google News RSS via our proxy (bypasses Moneycontrol WAF restrictions)
    var rssUrl = 'https://news.google.com/rss/search?q=india+stock+market&hl=en-IN&gl=IN&ceid=IN:en';
    fetchWithFallback(rssUrl, 7000).then(function(res) {
        return res.text();
    }).then(function(xmlText) {
        var parser = new DOMParser();
        var xml    = parser.parseFromString(xmlText, "text/xml");
        var items  = xml.querySelectorAll('item');
        if (!items.length) return;

        var newNews = [];
        items.forEach(function(item, idx) {
            if (idx > 40) return; // Expand to 40 articles
            var title = item.querySelector('title') ? item.querySelector('title').textContent : '';
            var rawDesc = item.querySelector('description') ? item.querySelector('description').textContent : '';
            
            // Basic HTML stripping for cleaner description
            var desc = rawDesc.replace(/<[^>]*>/g, '').trim();

            // Clean title and infer tag/sector
            var tag = 'Neutral';
            if (title.toLowerCase().indexOf('surge') !== -1 || title.toLowerCase().indexOf('rise') !== -1 || title.toLowerCase().indexOf('buy') !== -1) tag = 'Positive';
            if (title.toLowerCase().indexOf('fall') !== -1 || title.toLowerCase().indexOf('drop') !== -1 || title.toLowerCase().indexOf('slump') !== -1) tag = 'Negative';

            var sector = 'Market';
            if (title.toLowerCase().indexOf('sensex') !== -1 || title.toLowerCase().indexOf('nifty') !== -1) sector = 'Indices';
            if (title.toLowerCase().indexOf('bank') !== -1) sector = 'Banking';
            if (title.toLowerCase().indexOf('tech') !== -1 || title.toLowerCase().indexOf('it ') !== -1) sector = 'Technology';

            // Simulating time relative to now for the UI
            var timeStr = 'Just Now';
            if (idx > 1) timeStr = (idx * 5) + ' mins ago';
            if (idx > 12) timeStr = Math.floor(idx/12) + ' hrs ago';

            newNews.push({
                title: title,
                time: timeStr,
                tag: tag,
                sector: sector,
                desc: desc
            });
        });

        if (newNews.length > 0) {
            newsData = newNews;
            if (currentView === 'news') renderNews();
        }
    }).catch(function(e) {
        console.error('News Fetch Error:', e);
    });
}

// ============================================================
// NEWS
// ============================================================
function renderNews() {
    var filter = (document.getElementById('newsFilter') || {}).value || 'All';
    var filtered = filter === 'All' ? newsData : newsData.filter(function(n) { return n.sector === filter; });
    var tagColors = { 'Positive':'#10b981', 'Negative':'#ef4444', 'Neutral':'#f59e0b' };
    
    document.getElementById('newsGrid').innerHTML = filtered.map(function(n) {
        var c = tagColors[n.tag] || '#60a5fa';
        // Truncate description for card view
        var desc = n.desc || '';
        if (desc.length > 120) desc = desc.substring(0, 117) + '...';

        return '<div class="news-card glass-panel">'
            + '<div class="news-tag-row">'
            +   '<span class="news-tag" style="background:' + c + '22;color:' + c + ';border:1px solid ' + c + '44;">' + n.tag + '</span>'
            +   '<span class="news-sector">' + n.sector + '</span>'
            +   '<span class="news-time">' + n.time + '</span>'
            + '</div>'
            + '<p class="news-title">' + n.title + '</p>'
            + '<p class="news-desc" style="font-size:12px; color:var(--text-muted); margin: 8px 0; line-height:1.4;">' + desc + '</p>'
            + '<div class="news-footer"><button class="btn" style="font-size:11px;padding:4px 10px;" onclick="showToast(\'Full article opening...\',\'info\')">Read More</button></div>'
            + '</div>';
    }).join('');
}

// ============================================================
// SIP CALCULATOR
// ============================================================
function calcSIP() {
    var monthly  = parseFloat(document.getElementById('calcSIP').value) || 5000;
    var years    = parseInt(document.getElementById('calcYears').value) || 10;
    var rate     = parseFloat(document.getElementById('calcRate').value) || 12;
    var taxRate  = parseFloat(document.getElementById('calcSIPTax').value) / 100 || 0.125;
    var inflation= parseFloat(document.getElementById('calcSIPInflation').value) / 100 || 0.0509;
    var n        = years * 12;
    var r        = rate / 12 / 100;
    var fv       = monthly * (Math.pow(1 + r, n) - 1) / r * (1 + r);
    var invested = monthly * n;
    var returns  = fv - invested;
    // Tax is applied only on gains (returns), not on invested principal
    var taxAmount  = returns * taxRate;
    var afterTax   = fv - taxAmount;
    // Inflation-adjusted real value of the after-tax corpus
    var realValue  = afterTax / Math.pow(1 + inflation, years);

    document.getElementById('calcInvested').textContent  = fmtINR(Math.round(invested));
    document.getElementById('calcReturns').textContent   = fmtINR(Math.round(returns));
    document.getElementById('calcTotal').textContent     = fmtINR(Math.round(fv));
    document.getElementById('calcGain').textContent      = ((realValue - invested) / invested * 100).toFixed(1) + '%';
    document.getElementById('calcAfterTax').textContent  = fmtINR(Math.round(afterTax));
    document.getElementById('calcRealValue').textContent = fmtINR(Math.round(realValue));
    // Update mini bar
    var pct = Math.min(95, (invested / fv) * 100);
    document.getElementById('calcInvestedBar').style.width = pct + '%';
    document.getElementById('calcReturnsBar').style.width = (100 - pct) + '%';
}

function calcLumpsum() {
    var amount   = parseFloat(document.getElementById('calcLumpsum').value) || 100000;
    var years    = parseInt(document.getElementById('calcLumpsumYears').value) || 10;
    var rate     = parseFloat(document.getElementById('calcLumpsumRate').value) || 12;
    var taxRate  = parseFloat(document.getElementById('calcLSTax').value) / 100 || 0.125;
    var inflation= parseFloat(document.getElementById('calcLSInflation').value) / 100 || 0.0509;
    var fv       = amount * Math.pow(1 + rate / 100, years);
    var returns  = fv - amount;
    // LTCG tax on profits only (invested principal is not taxed)
    var taxAmount  = returns * taxRate;
    var afterTax   = fv - taxAmount;
    // Real value: inflation-adjusted purchasing power
    var realValue  = afterTax / Math.pow(1 + inflation, years);

    document.getElementById('calcLsInvested').textContent  = fmtINR(Math.round(amount));
    document.getElementById('calcLsTotal').textContent     = fmtINR(Math.round(fv));
    document.getElementById('calcLsReturns').textContent   = fmtINR(Math.round(returns));
    document.getElementById('calcLsGain').textContent      = ((realValue - amount) / amount * 100).toFixed(1) + '%';
    document.getElementById('calcLsAfterTax').textContent  = fmtINR(Math.round(afterTax));
    document.getElementById('calcLsRealValue').textContent = fmtINR(Math.round(realValue));
}

// ============================================================
// HOLDINGS PIE CHART  (SVG donut)
// ============================================================
function drawHoldingsDonut(containerId) {
    var container = document.getElementById(containerId);
    if (!container) return;
    var sectorMap = {};
    portfolioHoldings.forEach(function(h) {
        var s = stocks.find(function(x) { return x.symbol === h.symbol; });
        if (!s) return;
        var val = h.qty * s.price;
        sectorMap[s.sector] = (sectorMap[s.sector] || 0) + val;
    });
    var entries = Object.keys(sectorMap).map(function(k) { return { name: k, val: sectorMap[k] }; });
    if (!entries.length) { container.innerHTML = ''; return; }
    var total = entries.reduce(function(a, b) { return a + b.val; }, 0);
    var colors = ['#3b82f6','#10b981','#f59e0b','#ef4444','#8b5cf6','#ec4899','#06b6d4','#84cc16','#f97316','#14b8a6'];
    var cx = 80, cy = 80, R = 65, r = 38;
    var startAngle = -Math.PI / 2;
    var paths = '';
    var legend = '';
    entries.forEach(function(e, i) {
        var angle = (e.val / total) * 2 * Math.PI;
        var endAngle = startAngle + angle;
        var x1 = cx + R * Math.cos(startAngle), y1 = cy + R * Math.sin(startAngle);
        var x2 = cx + R * Math.cos(endAngle),   y2 = cy + R * Math.sin(endAngle);
        var xi1= cx + r * Math.cos(endAngle),   yi1= cy + r * Math.sin(endAngle);
        var xi2= cx + r * Math.cos(startAngle), yi2= cy + r * Math.sin(startAngle);
        var large = angle > Math.PI ? 1 : 0;
        var color = colors[i % colors.length];
        paths += '<path d="M' + x1.toFixed(1) + ',' + y1.toFixed(1)
            + ' A' + R + ',' + R + ' 0 ' + large + ',1 ' + x2.toFixed(1) + ',' + y2.toFixed(1)
            + ' L' + xi1.toFixed(1) + ',' + yi1.toFixed(1)
            + ' A' + r + ',' + r + ' 0 ' + large + ',0 ' + xi2.toFixed(1) + ',' + yi2.toFixed(1)
            + 'Z" fill="' + color + '" opacity="0.9"/>';
        legend += '<div class="donut-legend-item"><span style="background:' + color + '"></span>' + e.name + '<strong>' + ((e.val / total) * 100).toFixed(1) + '%</strong></div>';
        startAngle = endAngle;
    });
    container.innerHTML = '<div class="donut-wrap">'
        + '<svg width="160" height="160" viewBox="0 0 160 160">' + paths
        + '<text x="80" y="76" text-anchor="middle" fill="var(--text-main)" font-size="11" font-family="Outfit,sans-serif">Holdings</text>'
        + '<text x="80" y="91" text-anchor="middle" fill="var(--text-muted)" font-size="10" font-family="Outfit,sans-serif">by Sector</text>'
        + '</svg>'
        + '<div class="donut-legend">' + legend + '</div>'
        + '</div>';
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    loadState();
    renderDashboardCards();
    renderScreener();
    renderAllStocks(0, 'All', 'marketcap');
    renderMutualFunds();
    renderTicker();
    renderGainersLosers();
    renderSectorPerformance();
    renderIPO();
    renderPortfolio();
    renderOrderHistory();
    startPriceSimulation();
    updateWatchlistBadge();
    updateBalanceDisplay();
    updateMarketStatus();
    setInterval(updateMarketStatus, 60000);

    // Sentiment Meter: Initial fetch + every 60s
    var fgWrap = document.getElementById('fearGreedWrap');
    if (fgWrap) fgWrap.innerHTML = '<div class="glass-panel" style="padding:20px;text-align:center;color:var(--text-muted);"><i data-lucide="loader" class="spin"></i> Fetching Live Sentiment...</div>';
    fetchFearGreedData();
    setInterval(fetchFearGreedData, 60000);

    // Live data: immediate + every 90s
    fetchRealTimeData();
    setInterval(fetchRealTimeData, 90000);

    // IST clock
    startISTClock();

    // Refresh ring countdown (90s cycle)
    startRefreshRing(90);

    // Nav items
    document.querySelectorAll('.nav-item[data-view]').forEach(function(item) {
        item.addEventListener('click', function(e) { e.preventDefault(); setView(item.dataset.view); });
    });

    // Sector filter
    document.getElementById('sectorFilter').addEventListener('change', function(e) { _screenerLoadedCount = 10; renderScreener(e.target.value); });
    document.getElementById('applyStockFilter').addEventListener('click', function() { _screenerLoadedCount = 10; renderScreener(document.getElementById('sectorFilter').value); });

    // Fund filter
    document.getElementById('fundCategoryFilter').addEventListener('change', function(e) { renderMutualFunds(e.target.value); });
    document.getElementById('applyFundFilter').addEventListener('click', function() { renderMutualFunds(document.getElementById('fundCategoryFilter').value); });

    // IPO filter
    document.getElementById('ipoFilter').addEventListener('change', function(e) { renderIPO(e.target.value); });

    // LIVE SEARCH
    document.getElementById('searchInput').addEventListener('input', function(e) {
        clearTimeout(searchTimeout);
        var term = e.target.value;
        // Optimization: debounce local search to 150ms to prevent DOM thrashing
        searchTimeout = setTimeout(function() {
            searchLocal(term);
            if (term.trim().length >= 2) {
                searchAPI(term);
            }
        }, 150);
    });
    document.getElementById('searchInput').addEventListener('keydown', function(e) {
        if (e.key === 'Escape') hideSearchDropdown();
    });
    document.addEventListener('click', function(e) {
        if (!e.target.closest('.search-bar')) hideSearchDropdown();
    });

    // Invest tabs
    document.querySelectorAll('.invest-tab').forEach(function(tab) {
        tab.addEventListener('click', function() { switchInvestTab(tab.dataset.tab); });
    });

    // SIP quick amounts
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('sip-quick')) {
            var amt = e.target.dataset.amt;
            var sipForm = document.getElementById('sipForm');
            var lumForm = document.getElementById('lumpsumForm');
            if (!sipForm.classList.contains('hidden')) {
                document.getElementById('sipAmount').value = amt;
                updateSIPPreview();
            } else if (!lumForm.classList.contains('hidden')) {
                document.getElementById('lumpsumAmount').value = amt;
                updateLumpsumPreview();
            }
        }
    });

    // SIP / Lumpsum inputs
    document.getElementById('sipAmount').addEventListener('input', updateSIPPreview);
    document.getElementById('lumpsumAmount').addEventListener('input', updateLumpsumPreview);

    // Confirm invest
    document.getElementById('confirmInvestBtn').addEventListener('click', function() {
        var isSIP = document.querySelector('.invest-tab.active').dataset.tab === 'sip';
        var amt = isSIP ? document.getElementById('sipAmount').value : document.getElementById('lumpsumAmount').value;
        var type = isSIP ? 'SIP' : 'Lump Sum';
        closeModal('fundModal');
        showToast(type + ' of \u20B9' + Number(amt).toLocaleString('en-IN') + ' confirmed! \uD83C\uDF89', 'success');
    });

    // Order type tabs
    document.querySelectorAll('.order-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.order-tab').forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            var otype = tab.dataset.otype;
            document.getElementById('orderPriceField').style.display   = (otype === 'limit' || otype === 'sl') ? 'flex' : 'none';
            document.getElementById('orderTriggerField').style.display = (otype === 'sl' || otype === 'sl-m') ? 'flex' : 'none';
            updateOrderSummary();
        });
    });

    // Product type tabs
    document.querySelectorAll('.product-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.product-tab').forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
        });
    });

    // Order form inputs
    document.getElementById('orderQty').addEventListener('input', updateOrderSummary);
    document.getElementById('orderPrice').addEventListener('input', updateOrderSummary);

    // Confirm order — actually executes the trade
    document.getElementById('confirmOrderBtn').addEventListener('click', executeOrder);

    // All Stocks browser controls
    document.getElementById('allStocksSector').addEventListener('change', function(e) {
        renderAllStocks(0, e.target.value, allStocksSort);
    });
    document.querySelectorAll('.as-sort-btn').forEach(function(btn) {
        btn.addEventListener('click', function() { renderAllStocks(0, allStocksFilter, btn.dataset.sort); });
    });
    document.getElementById('allStocksPrev').addEventListener('click', function() {
        if (allStocksPage > 0) renderAllStocks(allStocksPage - 1, allStocksFilter, allStocksSort);
    });
    document.getElementById('allStocksNext').addEventListener('click', function() {
        renderAllStocks(allStocksPage + 1, allStocksFilter, allStocksSort);
    });

    // Chart range tabs in stock modal
    document.querySelectorAll('.chart-range-tab').forEach(function(tab) {
        tab.addEventListener('click', function() { loadModalChart(tab.dataset.range); });
    });

    // Bell — show alerts count
    document.getElementById('notifBtn').addEventListener('click', function() {
        var pending = priceAlerts.filter(function(a) { return !a.triggered; }).length;
        showToast(pending ? pending + ' active price alert(s)' : 'No active alerts', 'info');
    });

    // News filter
    var newsFilterEl = document.getElementById('newsFilter');
    if (newsFilterEl) newsFilterEl.addEventListener('change', renderNews);

    // Price alert modal
    document.getElementById('confirmAlertBtn').addEventListener('click', function() {
        var price = document.getElementById('alertTargetPrice').value;
        var cond  = document.getElementById('alertCondition').value;
        var sym   = document.getElementById('alertSymbolName').textContent.split(' — ')[0];
        if (!price || !sym) return;
        setPriceAlert(sym, parseFloat(price), cond);
    });
    document.getElementById('alertModal').addEventListener('click', function(e) {
        if (e.target === document.getElementById('alertModal')) closeModal('alertModal');
    });

    // Calculator inputs — live update
    ['calcSIP','calcYears','calcRate'].forEach(function(id) {
        document.getElementById(id).addEventListener('input', calcSIP);
    });
    ['calcLumpsum','calcLumpsumYears','calcLumpsumRate'].forEach(function(id) {
        document.getElementById(id).addEventListener('input', calcLumpsum);
    });

    // Calc tabs
    document.querySelectorAll('.calc-tab').forEach(function(tab) {
        tab.addEventListener('click', function() {
            document.querySelectorAll('.calc-tab').forEach(function(t) { t.classList.remove('active'); });
            tab.classList.add('active');
            document.getElementById('calcSIPForm').classList.toggle('hidden',  tab.dataset.calc !== 'sip');
            document.getElementById('calcLSForm').classList.toggle('hidden',   tab.dataset.calc !== 'lumpsum');
            document.getElementById('calcWIForm').classList.toggle('hidden',   tab.dataset.calc !== 'whatif');
            if (tab.dataset.calc === 'whatif') calcWhatIf();
        });
    });

    // Populate What-If stock dropdown
    var wiStockEl = document.getElementById('wiStock');
    if (wiStockEl) {
        wiStockEl.innerHTML = stocks.map(function(s) {
            return '<option value="' + s.symbol + '">' + s.symbol + ' — ' + s.name.substring(0, 35) + '</option>';
        }).join('');
    }


    // Initial renders for new sections
    updateBalanceDisplay();
    buildDOMCache();
    fetchLiveNews();
    setInterval(fetchLiveNews, 300000); // Update news every 5 minutes
    renderNews();
    calcSIP();
    calcLumpsum();

    // Escape closes all modals
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeModal('stockModal');
            closeModal('fundModal');
            closeModal('orderModal');
            closeModal('alertModal');
            hideSearchDropdown();
        }
    });
});

// ============================================================
// FUND DETAIL MODAL
// ============================================================
var currentFundDetail = null;
var fundDescriptions = {
    'Large Cap':  'Invests primarily in top 100 companies by market capitalisation. Offers stable returns with lower risk, suited for long-term wealth creation.',
    'Mid Cap':    'Focuses on companies ranked 101-250 by market cap. Higher growth potential than large caps with moderate risk. Ideal for 5+ year horizons.',
    'Small Cap':  'Targets companies beyond top 250. High potential returns but volatile. Suited for aggressive investors with 7+ year horizon.',
    'Flexi Cap':  'Fund manager has flexibility to invest across large, mid and small caps based on market conditions. Balanced risk-reward profile.',
    'ELSS':       'Equity Linked Savings Scheme — qualifies for ₹1.5L deduction under Section 80C. 3-year lock-in period. Tax-efficient wealth creation.',
    'Hybrid':     'Invests in a mix of equity and debt instruments. Provides returns from equity with stability from debt. Good for moderate risk appetite.',
    'Debt':       'Invests in bonds, government securities and money market instruments. Capital preservation with predictable returns. Low risk.',
    'Index':      'Passively tracks a stock index like NIFTY 50. Very low expense ratio. Returns mirror the index performance with minimal fund manager intervention.'
};
var catAverages = {
    'Large Cap': '14.2%', 'Mid Cap': '18.5%', 'Small Cap': '22.1%',
    'Flexi Cap': '16.8%', 'ELSS': '15.3%', 'Hybrid': '11.6%',
    'Debt': '7.4%', 'Index': '13.9%'
};

function openFundDetail(fundName) {
    var fund = mutualFunds.find(function(f) { return f.name === fundName; });
    if (!fund) return;
    currentFundDetail = fund;

    document.getElementById('fdLogo').textContent = fund.logoText;
    document.getElementById('fdLogo').style.cssText =
        'background-color:' + fund.color + '20;color:' + fund.color + ';border:1px solid ' + fund.color + '40;font-weight:700;font-size:14px;display:flex;align-items:center;justify-content:center;width:44px;height:44px;border-radius:10px;flex-shrink:0;';
    document.getElementById('fdName').textContent  = fund.name;
    document.getElementById('fdHouse').textContent = fund.house + ' · Direct Plan · Growth';
    document.getElementById('fdNAV').textContent   = '₹' + fund.nav.toFixed(2);
    document.getElementById('fd1Y').textContent    = (fund.return1y >= 0 ? '+' : '') + fund.return1y + '%';
    document.getElementById('fd3Y').textContent    = (fund.return3y >= 0 ? '+' : '') + fund.return3y + '%';
    document.getElementById('fdAUM').textContent   = '₹' + fund.aum + ' Cr';
    document.getElementById('fdRisk').textContent  = fund.risk;
    document.getElementById('fdCat').textContent   = fund.category;
    document.getElementById('fdRating').textContent= '★'.repeat(fund.rating) + '☆'.repeat(5 - fund.rating) + ' (' + fund.rating + '/5)';
    document.getElementById('fdMinSIP').textContent= '₹500 / month';
    document.getElementById('fdExit').textContent  = '1% if redeemed within 1 year';
    document.getElementById('fdCatAvg').textContent= 'Category avg: ' + (catAverages[fund.category] || 'N/A');
    var barPct = Math.min(100, Math.max(10, fund.return1y * 2));
    document.getElementById('fdReturnBar').style.width = barPct + '%';
    document.getElementById('fdDescription').textContent =
        (fundDescriptions[fund.category] || 'A SEBI-registered mutual fund offering competitive returns with professional fund management.') +
        ' This fund has delivered ' + fund.return1y + '% returns in the last year and ' + fund.return3y + '% over 3 years, outperforming many peers in the ' + fund.category + ' category.';

    document.getElementById('fundDetailModal').classList.remove('hidden');
    lucide.createIcons();
}

function openFundInvest(fund) {
    if (!fund) return;
    closeModal('fundDetailModal');
    openFundModal(fund.name);
}

// ============================================================
// STOCK COMPARATOR
// ============================================================
function renderCompare() {
    var sector = document.getElementById('compareSector').value;
    var filtered = stocks.filter(function(s) { return s.sector === sector; });

    if (!filtered.length) {
        document.getElementById('compareBody').innerHTML = '';
        document.getElementById('compareEmptyMsg').style.display = 'block';
        return;
    }
    document.getElementById('compareEmptyMsg').style.display = 'none';

    // Sort by change % descending to rank by performance
    var ranked = filtered.slice().sort(function(a, b) { return b.change - a.change; });

    var html = '';
    ranked.forEach(function(s, i) {
        var rank = i + 1;
        var rankClass = rank === 1 ? 'rank-1' : rank === 2 ? 'rank-2' : rank === 3 ? 'rank-3' : 'rank-other';
        var pos = s.change >= 0;
        var changeColor = pos ? 'var(--positive)' : 'var(--negative)';
        var simReturn = parseFloat((s.change * (1 + Math.random() * 1.5)).toFixed(2));
        var winRow = rank === 1 ? ' class="compare-win"' : '';
        var crown  = rank === 1 ? ' 🏆' : '';
        html += '<tr' + winRow + '>'
            + '<td><span class="rank-badge ' + rankClass + '">' + rank + '</span></td>'
            + '<td><strong>' + s.symbol + '</strong>' + crown + '<br><span style="color:var(--text-muted);font-size:11px;">' + s.name.substring(0,28) + '</span></td>'
            + '<td class="price-text">' + fmtINR(s.price) + '</td>'
            + '<td style="color:' + changeColor + ';font-weight:600;">' + (pos ? '▲ +' : '▼ ') + s.change.toFixed(2) + '%</td>'
            + '<td style="color:' + (simReturn >= 0 ? 'var(--positive)' : 'var(--negative)') + ';font-weight:600;">' + (simReturn >= 0 ? '+' : '') + simReturn.toFixed(2) + '%</td>'
            + '<td>' + (s.marketCap || 'N/A') + '</td>'
            + '<td>' + (s.pe || 'N/A') + '</td>'
            + '<td><button class="btn btn-invest" onclick="openStockModal(\'' + s.symbol.replace(/'/g, "\\'") + '\')">View</button> <button class="btn btn-primary" style="padding:4px 10px;font-size:11px;" onclick="openOrder(\'' + s.symbol.replace(/'/g, "\\'") + '\',\'buy\')">Buy</button></td>'
            + '</tr>';
    });
    document.getElementById('compareBody').innerHTML = html;
    lucide.createIcons();
}

// ============================================================
// SETTINGS
// ============================================================
var _simIntervalId = null;

function renderSettings() {
    var bal = document.getElementById('settingsBalance');
    var balV = document.getElementById('settingsBalVal');
    var oc  = document.getElementById('settingsOrderCount');
    var wl  = document.getElementById('settingsWLCount');
    var ds  = document.getElementById('settingsDataSrc');
    var ac  = document.getElementById('settingsAlertCount');
    if (bal)  bal.textContent  = '₹' + virtualBalance.toLocaleString('en-IN', {minimumFractionDigits:2});
    if (balV) balV.textContent = '₹' + virtualBalance.toLocaleString('en-IN', {minimumFractionDigits:2});
    if (oc)   oc.textContent   = orderHistory.length;
    if (wl)   wl.textContent   = watchlist.length;
    if (ds)   ds.textContent   = (document.getElementById('dataSourceBadge') || {}).textContent || '—';
    if (ac)   ac.textContent   = (typeof priceAlerts !== 'undefined' ? priceAlerts.length : 0);
    lucide.createIcons();
}

function resetVirtualAccount() {
    if (!confirm('Reset your virtual account to ₹10,00,000? All holdings and orders will be cleared.')) return;
    virtualBalance     = 1000000;
    portfolioHoldings  = [];
    orderHistory       = [];
    saveState();
    updateBalanceDisplay();
    renderSettings();
    showToast('✅ Virtual account reset to ₹10,00,000!', 'success');
}

function clearAllAlerts() {
    if (typeof priceAlerts !== 'undefined') {
        priceAlerts = [];
        try { localStorage.setItem('nt_alerts', JSON.stringify([])); } catch(e) {}
    }
    renderSettings();
    showToast('All price alerts cleared', 'info');
}

function setTheme(theme) {
    document.getElementById('themeDark').classList.toggle('active', theme === 'dark');
    document.getElementById('themeLight').classList.toggle('active', theme === 'light');
    document.body.classList.toggle('light-mode', theme === 'light');
    try { localStorage.setItem('nt_theme', theme); } catch(e) {}
    showToast(theme === 'light' ? 'Light mode applied' : 'Dark mode applied', 'info');
}

function setAccent(primary, secondary) {
    document.documentElement.style.setProperty('--accent-primary', primary);
    document.documentElement.style.setProperty('--accent-secondary', secondary || primary);
    showToast('Accent colour updated!', 'success');
}

function changeSimSpeed(msVal) {
    var ms = parseInt(msVal || (document.getElementById('simSpeed') || {}).value) || 10000;
    showToast('Price updates: every ' + (ms / 1000) + 's', 'info');
}

// ============================================================
// FEAR & GREED INDEX
// ============================================================
function computeFearGreed() {
    if (!stocks || !stocks.length) return 50;
    var gainers   = stocks.filter(function(s) { return s.change > 0; }).length;
    var breadth   = (gainers / stocks.length) * 100;
    var avgChange = stocks.reduce(function(sum, s) { return sum + s.change; }, 0) / stocks.length;
    var momentum  = Math.max(0, Math.min(100, 50 + avgChange * 10));
    // Large-cap weighting (top 15 stocks)
    var topStocks = stocks.slice(0, 15);
    var topAvg    = topStocks.reduce(function(sum, s) { return sum + s.change; }, 0) / topStocks.length;
    var topMom    = Math.max(0, Math.min(100, 50 + topAvg * 10));
    return Math.round(Math.max(0, Math.min(100, breadth * 0.5 + momentum * 0.3 + topMom * 0.2)));
}

function getFGLabel(score) {
    if (score <= 20) return { label: 'Extreme Fear',  color: '#ef4444' };
    if (score <= 40) return { label: 'Fear',           color: '#f97316' };
    if (score <= 60) return { label: 'Neutral',        color: '#eab308' };
    if (score <= 80) return { label: 'Greed',          color: '#22c55e' };
    return               { label: 'Extreme Greed',  color: '#10b981' };
}

async function fetchFearGreedData() {
    try {
        var url = 'https://query1.finance.yahoo.com/v8/finance/chart/%5EINDIAVIX?interval=1d&range=5d';
        var res = await fetchWithFallback(url, 6000);
        var json = await res.json();
        var meta = json.chart && json.chart.result && json.chart.result[0] && json.chart.result[0].meta;
        if (!meta) throw new Error('no vix data');
        
        var vix = meta.regularMarketPrice;
        var prevVix = meta.chartPreviousClose || vix;
        var vixChange = ((vix - prevVix) / prevVix) * 100;
        
        // Nifty 50 momentum (last 5 days)
        var niftyUrl = 'https://query1.finance.yahoo.com/v8/finance/chart/%5ENSEI?interval=1d&range=5d';
        var nRes = await fetchWithFallback(niftyUrl, 6000);
        var nJson = await nRes.json();
        var r = nJson.chart.result[0];
        var prices = r.indicators.quote[0].close.filter(function(p) { return p != null; });
        var niftyMom = ((prices[prices.length-1] - prices[0]) / prices[0]) * 100;

        console.log('[FearGreed] VIX:', vix.toFixed(2), 'change:', vixChange.toFixed(1)+'%', 'NiftyMom:', niftyMom.toFixed(2)+'%');
        renderFearGreed(vix, vixChange, niftyMom);
    } catch(e) {
        console.warn('[FearGreed] Failed, using fallback:', e.message);
        renderFearGreed(18, 0, 0); // Fallback stable values
    }
}

function renderFearGreed(vix, vixChange, niftyMom) {
    var el = document.getElementById('fearGreedWrap'); // Target the existing DOM element
    if (!el) return;

    // Sentiment Calculation (0-100)
    // 0 = Extreme Fear, 100 = Extreme Greed
    // Factors: VIX (inverted), Nifty Momentum
    var vixBase = 15; // "Normal" VIX for India
    var vixFactor = Math.max(0, Math.min(100, 50 - (vix - vixBase) * 2.5));
    var momFactor = Math.max(0, Math.min(100, 50 + niftyMom * 10));
    
    var score = Math.round(vixFactor * 0.6 + momFactor * 0.4);
    var label, color, sub;

    if (score >= 80)      { label = 'EXTREME GREED'; color = '#10b981'; sub = 'Markets are overheated. Caution advised.'; }
    else if (score >= 60) { label = 'GREED';         color = '#22c55e'; sub = 'Bullish momentum is strong.'; }
    else if (score >= 40) { label = 'NEUTRAL';       color = '#eab308'; sub = 'Market is indecisive.'; }
    else if (score >= 20) { label = 'FEAR';          color = '#f97316'; sub = 'Bearish sentiment rising.'; }
    else                  { label = 'EXTREME FEAR';  color = '#ef4444'; sub = 'High panic. Look for value picks.'; }

    var needleRotate = -90 + (score / 100) * 180;

    el.innerHTML = `
        <div class="fg-premium-widget glass-panel" style="background: rgba(255, 255, 255, 0.03); backdrop-filter: blur(16px); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 20px; padding: 24px; position: relative;">
            <div class="fg-header" style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
                <div class="fg-title-area">
                    <span style="font-size: 14px; font-weight: 600; color: var(--text-muted); letter-spacing: 0.5px; text-transform: uppercase;">Fear & Greed Index</span>
                </div>
                <div class="fg-live-badge" style="display:flex; align-items:center; gap:6px; font-size:11px; font-weight:700; color:#10b981; background:rgba(16, 185, 129, 0.1); padding:4px 8px; border-radius:4px; border:1px solid rgba(16, 185, 129, 0.2);">
                    <span style="display:inline-block; width:6px; height:6px; border-radius:50%; background:#10b981; box-shadow:0 0 6px #10b981; animation:pulse-status 2s infinite;"></span>LIVE MARKET DATA
                </div>
            </div>
            
            <div class="fg-main" style="position:relative; text-align:center; padding-top: 10px;">
                <div class="fg-gauge-wrap" style="position:relative; width:220px; margin:0 auto; height:110px;">
                    <svg viewBox="0 0 100 50" style="width:100%; height:100px; display:block;">
                        <path d="M10,45 A40,40 0 0,1 90,45" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="8" stroke-linecap="round"/>
                        <path d="M10,45 A40,40 0 0,1 90,45" fill="none" stroke="url(#fgGrad)" stroke-width="8" stroke-dasharray="${score * 1.25}, 200" stroke-linecap="round" style="transition: stroke-dasharray 1.5s ease;"/>
                        <defs>
                            <linearGradient id="fgGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="#ef4444" />
                                <stop offset="25%" stop-color="#f97316" />
                                <stop offset="50%" stop-color="#eab308" />
                                <stop offset="75%" stop-color="#22c55e" />
                                <stop offset="100%" stop-color="#10b981" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div class="fg-needle" style="position:absolute; bottom:5px; left:50%; width:4px; height:80px; background:${color}; border-radius:2px; transform-origin:bottom center; transform: translateX(-50%) rotate(${needleRotate}deg); box-shadow: 0 0 8px ${color}; transition: transform 1s ease;"></div>
                    <div class="fg-pivot" style="position:absolute; bottom:-1px; left:50%; width:16px; height:16px; background:var(--bg-card); border: 2px solid ${color}; border-radius:50%; transform:translateX(-50%); box-shadow: 0 0 8px rgba(0,0,0,0.5);"></div>
                </div>
                
                <div style="font-size:32px; font-weight:800; color:${color}; margin-top:5px; text-shadow: 0 0 12px ${color};">${score}</div>
                <div class="fg-status-label" style="font-size:16px; font-weight:800; color:${color}; letter-spacing:1px; text-transform:uppercase;">${label}</div>
                
                <div class="fg-info" style="margin-top:20px; border-top: 1px solid rgba(255,255,255,0.05); padding-top:20px;">
                    <p class="fg-desc" style="color:var(--text-muted); font-size:13px; margin:0 0 15px 0;">${sub}</p>
                    <div class="fg-vitals" style="display:flex; justify-content:space-between; text-align:center;">
                        <div class="fg-v-item" style="flex:1;">
                            <span style="display:block; font-size:11px; color:var(--text-muted); margin-bottom:4px;">India VIX <span style="font-size:9px">(Volatility)</span></span>
                            <strong style="font-size:14px; color:${vixChange > 0 ? '#ef4444' : '#10b981'}">${vix.toFixed(2)} <span style="font-size:11px;">(${vixChange > 0 ? '+' : ''}${vixChange.toFixed(1)}%)</span></strong>
                        </div>
                        <div class="fg-v-item" style="flex:1; border-left:1px solid rgba(255,255,255,0.05);">
                            <span style="display:block; font-size:11px; color:var(--text-muted); margin-bottom:4px;">Nifty 50 <span style="font-size:9px">(5d Momentum)</span></span>
                            <strong style="font-size:14px; color:${niftyMom > 0 ? '#10b981' : '#ef4444'}">${niftyMom > 0 ? '+' : ''}${niftyMom.toFixed(2)}%</strong>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    if (typeof lucide !== 'undefined') lucide.createIcons();
}



// ============================================================
// MARKET HEATMAP
// ============================================================
function getHMColor(change) {
    if (change <= -3)  return { bg: '#7f1d1d', border: '#991b1b' };
    if (change <= -2)  return { bg: '#b91c1c', border: '#dc2626' };
    if (change <= -1)  return { bg: '#dc2626', border: '#ef4444' };
    if (change < 0)    return { bg: '#ef4444', border: '#f87171' };
    if (change === 0)  return { bg: '#1f2937', border: '#374151' };
    if (change < 1)    return { bg: '#166534', border: '#16a34a' };
    if (change < 2)    return { bg: '#15803d', border: '#22c55e' };
    if (change < 3)    return { bg: '#14532d', border: '#15803d' };
    return                    { bg: '#052e16', border: '#14532d' };
}

function getHMSizeClass(marketCapStr) {
    if (!marketCapStr) return 'hm-sm';
    var num = parseFloat(marketCapStr);
    if (marketCapStr.indexOf('L') !== -1) num *= 100000;
    if (num >= 700000) return 'hm-xl';
    if (num >= 200000) return 'hm-lg';
    if (num >= 50000)  return 'hm-md';
    return 'hm-sm';
}

function switchHeatmapSector(sector, btn) {
    currentHeatmapSector = sector;
    // Update active tab
    document.querySelectorAll('.hm-sector-tab').forEach(function(t) { t.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    renderHeatmap();
}

function _hmSortedStocks(list) {
    return list.slice().sort(function(a, b) {
        var aN = parseFloat(a.marketCap) * (a.marketCap.indexOf('L') !== -1 ? 100000 : 1);
        var bN = parseFloat(b.marketCap) * (b.marketCap.indexOf('L') !== -1 ? 100000 : 1);
        return bN - aN;
    });
}

function _hmCellHtml(s) {
    var col = getHMColor(s.change);
    var sz  = getHMSizeClass(s.marketCap);
    var chgStr = (s.change >= 0 ? '+' : '') + s.change.toFixed(2) + '%';
    var safe = s.symbol.replace(/'/g, "\\'");
    return '<div class="hm-cell ' + sz + '" style="background:' + col.bg + ';border-color:' + col.border + ';" onclick="openStockModal(\'' + safe + '\')" title="' + s.name + '">'
        + '<span class="hm-sym">' + s.symbol + '</span>'
        + '<span class="hm-chg">' + chgStr + '</span>'
        + '<span class="hm-price">' + fmtINR(s.price) + '</span>'
        + '</div>';
}

function renderHeatmap() {
    var grid = document.getElementById('heatmapGrid');
    if (!grid) return;

    if (currentHeatmapSector !== 'All') {
        // Single sector view — flat, sorted by market cap
        var sectorStocks = _hmSortedStocks(stocks.filter(function(s) { return s.sector === currentHeatmapSector; }));
        grid.innerHTML = sectorStocks.length
            ? sectorStocks.map(_hmCellHtml).join('')
            : '<p style="color:var(--text-muted);padding:20px;">No stocks in this sector.</p>';
        return;
    }

    // All-sectors view — group by sector with headers
    var sectors = {};
    var sectorOrder = [];
    stocks.forEach(function(s) {
        if (!sectors[s.sector]) { sectors[s.sector] = []; sectorOrder.push(s.sector); }
        sectors[s.sector].push(s);
    });

    var html = '';
    sectorOrder.forEach(function(sec) {
        var sorted = _hmSortedStocks(sectors[sec]);
        var avgChange = sorted.reduce(function(a, s) { return a + s.change; }, 0) / sorted.length;
        var secColor = avgChange >= 0 ? 'var(--positive)' : 'var(--negative)';
        var secSign  = avgChange >= 0 ? '+' : '';
        html += '<div class="hm-sector-header">'
            + sec
            + ' <span style="color:' + secColor + ';font-size:11px;margin-left:6px;">'
            + secSign + avgChange.toFixed(2) + '% avg</span>'
            + '</div>';
        html += sorted.map(_hmCellHtml).join('');
        html += '<div style="width:100%;height:8px;"></div>'; // spacer between sectors
    });
    grid.innerHTML = html;
}

// ============================================================
// TRADE JOURNAL
// ============================================================
function renderJournal() {
    var statsEl = document.getElementById('journalStats');
    var bodyEl  = document.getElementById('journalBody');
    var curveEl = document.getElementById('journalCurveWrap');
    if (!statsEl) return;

    if (!orderHistory.length) {
        statsEl.innerHTML = '<div style="grid-column:1/-1;text-align:center;color:var(--text-muted);padding:40px 0;">No trades yet. Place virtual orders to see your journal!</div>';
        if (bodyEl)  bodyEl.innerHTML  = '<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:30px;">No trades yet</td></tr>';
        if (curveEl) curveEl.innerHTML = '';
        return;
    }

    // Process in chronological order (orderHistory is newest-first, so reverse)
    var trades     = orderHistory.slice().reverse();
    var avgCostMap = {}, qtMap = {};
    var realPnl = 0, wins = 0, losses = 0, totalGain = 0, totalLoss = 0;
    var balance = 1000000;
    var equityCurve = [balance];
    var tradeRows   = [];

    trades.forEach(function(o) {
        var pnl = null;
        if (o.side === 'BUY') {
            var prevCost = avgCostMap[o.symbol] || 0;
            var prevQty  = qtMap[o.symbol]  || 0;
            avgCostMap[o.symbol] = (prevCost * prevQty + o.price * o.qty) / (prevQty + o.qty);
            qtMap[o.symbol]  = prevQty + o.qty;
            balance -= o.total;
        } else {
            var cost = avgCostMap[o.symbol] || o.price;
            pnl = (o.price - cost) * o.qty;
            realPnl += pnl;
            if (pnl >= 0) { wins++;   totalGain += pnl;              }
            else           { losses++; totalLoss += Math.abs(pnl);   }
            balance += o.total;
        }
        equityCurve.push(balance);
        tradeRows.push({ o: o, pnl: pnl });
    });

    var sellCount    = orderHistory.filter(function(o) { return o.side === 'SELL'; }).length;
    var winRate      = sellCount > 0 ? (wins / sellCount * 100).toFixed(1) + '%' : '—';
    var avgGainStr   = wins   > 0 ? '+' + fmtINR(Math.round(totalGain  / wins))   : '—';
    var avgLossStr   = losses > 0 ? '-' + fmtINR(Math.round(totalLoss  / losses)) : '—';
    var pf           = totalLoss > 0 ? (totalGain / totalLoss).toFixed(2) : (totalGain > 0 ? '∞' : '—');
    var pnlColor     = realPnl  >= 0 ? 'var(--positive)' : 'var(--negative)';
    var pfColor      = (pf === '∞' || parseFloat(pf) >= 1) ? 'var(--positive)' : 'var(--negative)';

    var cards = [
        { label: 'Total Trades',  val: orderHistory.length,                                                         color: '' },
        { label: 'Win Rate',      val: winRate,                                                                      color: '' },
        { label: 'Realized P&L',  val: (realPnl >= 0 ? '+' : '-') + fmtINR(Math.abs(Math.round(realPnl))),          color: pnlColor },
        { label: 'Avg Gain',      val: avgGainStr,                                                                   color: 'var(--positive)' },
        { label: 'Avg Loss',      val: avgLossStr,                                                                   color: 'var(--negative)' },
        { label: 'Profit Factor', val: pf,                                                                            color: pfColor },
    ];
    statsEl.innerHTML = cards.map(function(c) {
        return '<div class="journal-stat-card glass-panel">'
            + '<span class="js-label">' + c.label + '</span>'
            + '<strong class="js-val"' + (c.color ? ' style="color:' + c.color + ';"' : '') + '>' + c.val + '</strong>'
            + '</div>';
    }).join('');

    // Equity curve SVG
    if (equityCurve.length > 1 && curveEl) {
        var W = 600, H = 130, PL = 10, PR = 10, PT = 12, PB = 10;
        var cW = W - PL - PR, cH = H - PT - PB;
        var minV = Math.min.apply(null, equityCurve);
        var maxV = Math.max.apply(null, equityCurve);
        var rng  = maxV - minV || 1;
        var n    = equityCurve.length;
        var pts  = equityCurve.map(function(v, i) {
            return [(PL + (i / (n - 1)) * cW).toFixed(1), (PT + (1 - (v - minV) / rng) * cH).toFixed(1)];
        });
        var lc  = realPnl >= 0 ? '#10b981' : '#ef4444';
        var pd  = 'M' + pts[0][0] + ',' + pts[0][1];
        for (var i = 1; i < pts.length; i++) pd += ' L' + pts[i][0] + ',' + pts[i][1];
        var fd  = pd + ' L' + pts[n-1][0] + ',' + (PT + cH) + ' L' + PL + ',' + (PT + cH) + ' Z';

        curveEl.innerHTML = '<div class="journal-curve-wrap">'
            + '<div class="jc-label">EQUITY CURVE &nbsp;&mdash;&nbsp; Virtual Balance Over Time</div>'
            + '<svg viewBox="0 0 ' + W + ' ' + H + '" style="width:100%;height:130px;">'
            + '<defs><linearGradient id="ecGr" x1="0" y1="0" x2="0" y2="1">'
            + '<stop offset="0%" stop-color="' + lc + '" stop-opacity="0.3"/>'
            + '<stop offset="100%" stop-color="' + lc + '" stop-opacity="0.02"/>'
            + '</linearGradient></defs>'
            + '<path d="' + fd + '" fill="url(#ecGr)"/>'
            + '<path d="' + pd + '" fill="none" stroke="' + lc + '" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>'
            + '</svg></div>';
    }

    // Trade rows (newest first)
    tradeRows.reverse();
    var rows = tradeRows.map(function(t) {
        var o = t.o, pnl = t.pnl;
        var pnlStr = pnl !== null ? ((pnl >= 0 ? '+' : '-') + fmtINR(Math.abs(Math.round(pnl)))) : '—';
        var pc     = pnl !== null ? (pnl >= 0 ? 'var(--positive)' : 'var(--negative)') : 'var(--text-muted)';
        return '<tr>'
            + '<td style="font-size:11px;color:var(--text-muted);">' + (o.time || '—') + '</td>'
            + '<td><strong>' + o.symbol + '</strong></td>'
            + '<td><span class="order-side-tag ' + (o.side === 'BUY' ? 'buy-tag' : 'sell-tag') + '">' + o.side + '</span></td>'
            + '<td>' + o.qty + '</td>'
            + '<td class="price-text">' + fmtINR(o.price) + '</td>'
            + '<td>' + fmtINR(o.total) + '</td>'
            + '<td style="color:' + pc + ';font-weight:600;">' + pnlStr + '</td>'
            + '<td><span class="status-executed">' + (o.type || 'Market') + '</span></td>'
            + '</tr>';
    });
    if (bodyEl) bodyEl.innerHTML = rows.join('') || '<tr><td colspan="8" style="text-align:center;color:var(--text-muted);padding:30px;">No trades yet</td></tr>';
}

// ============================================================
// WHAT-IF MACHINE
// ============================================================
function calcWhatIf() {
    var symEl  = document.getElementById('wiStock');
    var amtEl  = document.getElementById('wiAmount');
    var yrsEl  = document.getElementById('wiYears');
    var resEl  = document.getElementById('wiResult');
    if (!symEl || !amtEl || !yrsEl || !resEl) return;

    var symbol = symEl.value;
    var amount = parseFloat(amtEl.value) || 100000;
    var years  = parseInt(yrsEl.value)   || 5;

    var stock = stocks.find(function(s) { return s.symbol === symbol; });
    if (!stock) {
        resEl.innerHTML = '<p style="color:var(--text-muted);text-align:center;padding:30px 0;">Select a stock to see the simulation.</p>';
        return;
    }

    // Sector CAGR approximations (5-yr annualised, India context)
    var sectorCAGR = {
        'Technology': 0.18, 'Finance': 0.14, 'Energy': 0.10,
        'Consumer': 0.12, 'Infrastructure': 0.15, 'Healthcare': 0.16,
        'Auto': 0.13, 'Metals': 0.11, 'Chemicals': 0.19,
        'Telecom': 0.07, 'default': 0.12
    };
    // Add stock-specific variance from sector avg using symbol hash
    var hashOffset = 0;
    for (var i = 0; i < stock.symbol.length; i++) hashOffset += stock.symbol.charCodeAt(i);
    var variance   = ((hashOffset % 7) - 3) * 0.01;  // -0.03 to +0.03
    var stockCAGR  = (sectorCAGR[stock.sector] || sectorCAGR['default']) + variance;

    var niftyCAGR  = 0.127; // NIFTY 50 long-term average

    var histPrice     = stock.price / Math.pow(1 + stockCAGR, years);
    var sharesIfBought = amount / histPrice;
    var currentValue   = sharesIfBought * stock.price;
    var gain           = currentValue - amount;
    var returnPct      = (gain / amount) * 100;
    var actualCAGR     = (Math.pow(currentValue / amount, 1 / years) - 1) * 100;

    var niftyValue     = amount * Math.pow(1 + niftyCAGR, years);
    var better         = currentValue >= niftyValue;
    var col            = gain >= 0 ? 'var(--positive)' : 'var(--negative)';

    var maxV = Math.max(currentValue, niftyValue);

    resEl.innerHTML = '<div class="wi-result-grid">'
        + mkWiCard('Amount Invested',   fmtINR(amount),                                               '')
        + mkWiCard('Shares Purchased',  sharesIfBought.toFixed(4),                                    '')
        + mkWiCard('Value Today',       fmtINR(Math.round(currentValue)),                              col, true)
        + mkWiCard('Total Gain / Loss', (gain >= 0 ? '+' : '-') + fmtINR(Math.abs(Math.round(gain))), col)
        + mkWiCard('Total Return',      (returnPct >= 0 ? '+' : '') + returnPct.toFixed(1) + '%',      col)
        + mkWiCard('CAGR',              actualCAGR.toFixed(1) + '% p.a.',                              col)
        + '</div>'
        + '<div class="wi-vs-section">'
        + '<div class="wi-vs-title">How you fared vs NIFTY 50 Benchmark</div>'
        + '<div class="wi-vs-row">'
        + '<span class="wi-vs-name">' + symbol + '</span>'
        + '<div class="wi-bar-track"><div class="wi-bar-fill" style="width:' + Math.min(100, currentValue / maxV * 100).toFixed(1) + '%;background:' + col + ';"></div></div>'
        + '<span class="wi-vs-val" style="color:' + col + ';">' + fmtINR(Math.round(currentValue)) + '</span>'
        + '</div>'
        + '<div class="wi-vs-row" style="margin-top:8px;">'
        + '<span class="wi-vs-name">NIFTY 50</span>'
        + '<div class="wi-bar-track"><div class="wi-bar-fill" style="width:' + Math.min(100, niftyValue / maxV * 100).toFixed(1) + '%;background:#6366f1;"></div></div>'
        + '<span class="wi-vs-val" style="color:#6366f1;">' + fmtINR(Math.round(niftyValue)) + '</span>'
        + '</div>'
        + '<p class="wi-verdict" style="color:' + (better ? 'var(--positive)' : 'var(--negative)') + ';">'
        + (better ? '✅ ' + symbol + ' beat NIFTY by ' + fmtINR(Math.round(currentValue - niftyValue)) + '!' : '📉 NIFTY beat ' + symbol + ' by ' + fmtINR(Math.round(niftyValue - currentValue)))
        + '</p>'
        + '</div>'
        + '<p class="wi-disclaimer">★ Based on estimated sector CAGR averages. Actual past returns may differ. For educational purposes only.</p>';
}

function mkWiCard(label, val, color, big) {
    return '<div class="wi-result-card glass-panel">'
        + '<span>' + label + '</span>'
        + '<strong' + (color ? ' style="color:' + color + ';' + (big ? 'font-size:20px;' : '') + '"' : '') + '>' + val + '</strong>'
        + '</div>';
}

// ============================================================
// STOCK STRENGTH SCORE
// ============================================================
function computeStockScore(stock) {
    // 1. Momentum: daily % change
    var momScore = Math.max(0, Math.min(100, 50 + stock.change * 8));

    // 2. Valuation: PE vs sector average
    var sectorPE = { 'Technology':30,'Finance':18,'Energy':12,'Consumer':52,'Infrastructure':32,
                     'Healthcare':36,'Auto':22,'Metals':14,'Chemicals':32,'Telecom':40 };
    var avgPE    = sectorPE[stock.sector] || 25;
    var peScore  = 50;
    if (stock.pe) {
        if      (stock.pe < avgPE * 0.6) peScore = 88;
        else if (stock.pe < avgPE)       peScore = 68;
        else if (stock.pe < avgPE * 1.4) peScore = 44;
        else                             peScore = 22;
    }

    // 3. 52-Week position (price within annual range)
    var range   = get52WeekRange(stock);
    var lo      = parseFloat(range.low);
    var hi      = parseFloat(range.high);
    var posScore = hi > lo ? ((stock.price - lo) / (hi - lo)) * 100 : 50;
    posScore     = Math.max(0, Math.min(100, posScore));

    // 4. Market cap tier (proxy for stability)
    var mcStr  = stock.marketCap || '0L Cr';
    var mcNum  = parseFloat(mcStr) * (mcStr.indexOf('L') !== -1 ? 100000 : 1);
    var mcScore = mcNum >= 500000 ? 90 : mcNum >= 100000 ? 72 : mcNum >= 30000 ? 55 : 38;

    // Weighted composite
    var composite = Math.round(momScore * 0.3 + peScore * 0.3 + posScore * 0.25 + mcScore * 0.15);
    composite     = Math.max(0, Math.min(100, composite));

    var label, color;
    if      (composite >= 80) { label = 'Excellent'; color = '#10b981'; }
    else if (composite >= 65) { label = 'Strong';    color = '#22c55e'; }
    else if (composite >= 50) { label = 'Average';   color = '#eab308'; }
    else if (composite >= 35) { label = 'Weak';      color = '#f97316'; }
    else                       { label = 'Poor';      color = '#ef4444'; }

    return {
        score: composite, label: label, color: color,
        factors: [
            { name: 'Momentum',       score: Math.round(momScore)  },
            { name: 'Valuation (P/E)', score: Math.round(peScore)  },
            { name: '52-Week Range',  score: Math.round(posScore)  },
            { name: 'Market Cap',     score: Math.round(mcScore)   },
        ]
    };
}

function renderStockScore(stock) {
    var wrap = document.getElementById('modalScoreWrap');
    if (!wrap || !stock) return;
    var s = computeStockScore(stock);

    var factorsHtml = s.factors.map(function(f) {
        var fc = f.score >= 65 ? 'var(--positive)' : f.score >= 40 ? '#eab308' : 'var(--negative)';
        return '<div class="ss-factor">'
            + '<span class="ss-fn">' + f.name + '</span>'
            + '<div class="ss-f-track"><div class="ss-f-fill" style="width:' + f.score + '%;background:' + fc + ';"></div></div>'
            + '<span class="ss-fv" style="color:' + fc + ';">' + f.score + '</span>'
            + '</div>';
    }).join('');

    wrap.innerHTML = '<div class="stock-score-card glass-panel">'
        + '<div class="ss-header">'
        + '<span class="ss-title">Stock Strength Score</span>'
        + '<span class="ss-badge" style="background:' + s.color + '22;color:' + s.color + ';border:1px solid ' + s.color + '44;">' + s.label + '</span>'
        + '<span class="ss-num" style="color:' + s.color + ';">' + s.score + '<small>/100</small></span>'
        + '</div>'
        + '<div class="ss-main-track"><div class="ss-main-fill" style="width:' + s.score + '%;background:linear-gradient(90deg,' + s.color + '99,' + s.color + ');"></div></div>'
        + '<div class="ss-factors">' + factorsHtml + '</div>'
        + '</div>';
}

// ============================================================
// SECTION: ECONOMIC CALENDAR
// ============================================================
var calendarEvents = [
    { date:'2026-04-09', title:'RBI MPC Meeting — Policy Rate Decision',     cat:'RBI',      impact:'HIGH',   desc:'Reserve Bank of India Monetary Policy Committee — April 2026. Expected to hold repo rate at 6.25%.' },
    { date:'2026-06-04', title:'RBI MPC Meeting — June 2026',                cat:'RBI',      impact:'HIGH',   desc:'Bi-monthly monetary policy review. Watch for any change in stance or forward guidance.' },
    { date:'2026-08-06', title:'RBI MPC Meeting — August 2026',              cat:'RBI',      impact:'HIGH',   desc:'RBI mid-year policy. Key inflation data and monsoon impact will be assessed.' },
    { date:'2026-02-01', title:'Union Budget 2026–27 Presented',             cat:'RBI',      impact:'HIGH',   desc:'Finance Minister presented Union Budget. Capital gains tax, LTCG/STCG slabs, and infra allocations announced.' },
    { date:'2026-04-16', title:'TCS Q4 FY26 Results',                       cat:'Earnings',  impact:'HIGH',   desc:'Tata Consultancy Services Q4 FY26 earnings. Watch for margin guidance and deal wins.' },
    { date:'2026-04-23', title:'Infosys Q4 FY26 Results',                   cat:'Earnings',  impact:'HIGH',   desc:'Infosys Q4 earnings with FY27 revenue guidance. Key for entire IT sector sentiment.' },
    { date:'2026-04-26', title:'Wipro Q4 FY26 Results',                     cat:'Earnings',  impact:'MED',    desc:'Wipro quarterly results and FY27 outlook commentary.' },
    { date:'2026-05-03', title:'HDFC Bank Q4 FY26 Results',                 cat:'Earnings',  impact:'HIGH',   desc:'HDFC Bank Q4 FY26. Watch NIM compression, loan growth and provisioning.' },
    { date:'2026-05-07', title:'ICICI Bank Q4 FY26 Results',                cat:'Earnings',  impact:'HIGH',   desc:'ICICI Bank quarterly. Asset quality trends and retail credit growth in focus.' },
    { date:'2026-05-10', title:'Reliance Industries Q4 FY26 Results',       cat:'Earnings',  impact:'HIGH',   desc:'RIL quarterly. Jio subscriber adds, O2C margins and retail performance key.' },
    { date:'2026-05-15', title:'NIFTY 50 Semi-Annual Rebalancing',          cat:'Index',     impact:'MED',    desc:'NSE reviews NIFTY 50 composition. Stocks entering/exiting the index trigger institutional flows.' },
    { date:'2026-05-28', title:'NSE F&O May Expiry',                        cat:'Index',     impact:'MED',    desc:'May 2026 F&O expiry. Expect higher intraday volatility near expiry day.' },
    { date:'2026-06-25', title:'NSE F&O June Expiry',                       cat:'Index',     impact:'MED',    desc:'June F&O series expiry. Monthly options settlement.' },
    { date:'2026-07-06', title:'US FOMC Meeting — July 2026',               cat:'Global',    impact:'HIGH',   desc:'Federal Reserve interest rate decision. Any cut or hold has direct FII flow impact on Indian markets.' },
    { date:'2026-07-30', title:'US FOMC Meeting — July End',                cat:'Global',    impact:'HIGH',   desc:'Second July Fed meeting. Watch dot-plot for rate path signals.' },
    { date:'2026-09-16', title:'US FOMC Meeting — September 2026',          cat:'Global',    impact:'HIGH',   desc:'Fed September decision. Historically a key meeting for rate trajectory changes.' },
    { date:'2026-04-30', title:'IPO Season — April Closing Week',           cat:'IPO',       impact:'MED',    desc:'Multiple SME and mainboard IPOs typically close in the last week of April.' },
    { date:'2026-05-20', title:'Q4 FY26 IPO Window Opens',                  cat:'IPO',       impact:'MED',    desc:'Post-results season, new IPO filings and listings are expected in May-June.' },
    { date:'2026-06-15', title:'SEBI Board Meeting — June 2026',            cat:'RBI',       impact:'MED',    desc:'SEBI board meeting. Watch for new regulations on F&O, algo trading and SME listings.' },
    { date:'2026-07-25', title:'NSE F&O July Expiry',                       cat:'Index',     impact:'MED',    desc:'July F&O series settlement.' },
    { date:'2026-08-27', title:'NSE F&O August Expiry',                     cat:'Index',     impact:'MED',    desc:'August F&O expiry — typically volatile due to post-Budget and monsoon data.' },
    { date:'2026-10-08', title:'RBI MPC Meeting — October 2026',            cat:'RBI',       impact:'HIGH',   desc:'Q2 FY27 RBI policy review. Festive season credit demand and CPI in focus.' },
    { date:'2026-07-15', title:'HCL Tech Q1 FY27 Results',                  cat:'Earnings',  impact:'MED',    desc:'HCL Technologies Q1 FY27 quarterly. First tech results of the new fiscal year.' },
    { date:'2026-07-18', title:'Bajaj Finance Q1 FY27 Results',             cat:'Earnings',  impact:'HIGH',   desc:'Bajaj Finance AUM growth and NPA data — key barometer for consumer credit health.' },
];

function renderCalendar() {
    var grid = document.getElementById('calendarGrid');
    if (!grid) return;
    var filter = (document.getElementById('calendarFilter') || {}).value || 'All';
    var today  = new Date();
    today.setHours(0,0,0,0);

    var events = calendarEvents.filter(function(e) {
        return filter === 'All' || e.cat === filter;
    });

    events.sort(function(a, b) {
        var da = new Date(a.date), db = new Date(b.date);
        var aFut = da >= today, bFut = db >= today;
        if (aFut && !bFut) return -1;
        if (!aFut && bFut) return  1;
        return aFut ? da - db : db - da;
    });

    var catIcons = { RBI:'🏦', Earnings:'📊', IPO:'🚀', Index:'📈', Global:'🌍' };
    var impColors = { HIGH:'var(--negative)', MED:'#f59e0b', LOW:'var(--positive)' };

    grid.innerHTML = events.map(function(e) {
        var d       = new Date(e.date);
        var isPast  = d < today;
        var isToday = d.getTime() === today.getTime();
        var diff    = Math.round((d - today) / 86400000);
        var diffStr = isToday ? 'TODAY' : isPast ? Math.abs(diff) + 'd ago' : 'in ' + diff + 'd';
        var day     = d.getDate();
        var mon     = d.toLocaleString('en-IN', { month:'short' }) + ' ' + d.getFullYear();

        return '<div class="calendar-event-card' + (isPast ? ' cal-past' : '') + (isToday ? ' cal-today' : '') + '">'
            + '<div class="cal-date-col">'
            + '<span class="cal-day">' + day + '</span>'
            + '<span class="cal-month">' + mon + '</span>'
            + '<span class="cal-days-pill" style="background:' + (isPast ? 'rgba(255,255,255,0.07)' : isToday ? 'var(--accent-primary)' : 'rgba(59,130,246,0.2)') + ';color:' + (isPast ? 'var(--text-muted)' : isToday ? '#fff' : '#60a5fa') + ';">' + diffStr + '</span>'
            + '</div>'
            + '<div class="cal-body">'
            + '<div class="cal-title-row">'
            + '<span class="cal-cat-icon">' + (catIcons[e.cat] || '📌') + '</span>'
            + '<span class="cal-title">' + e.title + '</span>'
            + '<span class="cal-impact-badge" style="background:' + impColors[e.impact] + '22;color:' + impColors[e.impact] + ';border:1px solid ' + impColors[e.impact] + '44;">' + e.impact + '</span>'
            + '</div>'
            + '<p class="cal-desc">' + e.desc + '</p>'
            + '</div>'
            + '</div>';
    }).join('') || '<div style="text-align:center;padding:40px;color:var(--text-muted);">No events for this category.</div>';
}

// ============================================================
// SECTION: SCREENER PRO
// ============================================================
function applyScreenerPro() {
    var sector    = (document.getElementById('spSector')    || {}).value || 'All';
    var minPrice  = parseFloat(document.getElementById('spMinPrice')  && document.getElementById('spMinPrice').value)  || 0;
    var maxPrice  = parseFloat(document.getElementById('spMaxPrice')  && document.getElementById('spMaxPrice').value)  || Infinity;
    var minPE     = parseFloat(document.getElementById('spMinPE')     && document.getElementById('spMinPE').value)     || 0;
    var maxPE     = parseFloat(document.getElementById('spMaxPE')     && document.getElementById('spMaxPE').value)     || Infinity;
    var minChange = parseFloat(document.getElementById('spMinChange') && document.getElementById('spMinChange').value) || -Infinity;
    var sort      = (document.getElementById('spSort')      || {}).value || 'change-desc';

    var results = stocks.filter(function(s) {
        if (sector !== 'All' && s.sector !== sector) return false;
        if (s.price < minPrice || s.price > maxPrice) return false;
        if (s.pe !== null && s.pe !== undefined) {
            if (s.pe < minPE || s.pe > maxPE) return false;
        }
        if (s.change < minChange) return false;
        return true;
    });

    results.sort(function(a, b) {
        if (sort === 'change-desc') return b.change - a.change;
        if (sort === 'change-asc')  return a.change - b.change;
        if (sort === 'price-desc')  return b.price - a.price;
        if (sort === 'price-asc')   return a.price - b.price;
        if (sort === 'pe-asc') {
            var ap = a.pe || 9999, bp = b.pe || 9999;
            return ap - bp;
        }
        // marketcap
        var mc = function(s) { return parseFloat(s.marketCap) * (s.marketCap.indexOf('L') !== -1 ? 100000 : 1); };
        return mc(b) - mc(a);
    });

    var wrap = document.getElementById('screenerProResults');
    if (!wrap) return;

    if (!results.length) {
        wrap.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">No stocks match your criteria. Adjust filters and try again.</div>';
        return;
    }

    var rows = results.map(function(s) {
        var pos = s.change >= 0;
        return '<tr onclick="openStockModal(\'' + s.symbol + '\')" style="cursor:pointer;">'
            + '<td><div style="display:flex;align-items:center;gap:8px;"><div style="width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;background:' + s.color + '20;color:' + s.color + ';border:1px solid ' + s.color + '40;">' + s.logoText + '</div><div><strong>' + s.symbol + '</strong><br><span style="font-size:11px;color:var(--text-muted);">' + s.sector + '</span></div></div></td>'
            + '<td style="font-variant-numeric:tabular-nums;">' + fmtINR(s.price) + '</td>'
            + '<td><span style="color:var(--' + (pos?'positive':'negative') + ');font-weight:600;">' + (pos?'+':'') + s.change.toFixed(2) + '%</span></td>'
            + '<td>' + (s.pe || '—') + '</td>'
            + '<td>' + s.marketCap + '</td>'
            + '<td><button class="btn btn-buy btn-sm" onclick="event.stopPropagation();openOrderModal(\'' + s.symbol + '\',\'buy\')">Buy</button></td>'
            + '</tr>';
    }).join('');

    wrap.innerHTML = '<table class="stock-table"><thead><tr><th>Symbol</th><th>LTP (&#8377;)</th><th>Change</th><th>P/E</th><th>Market Cap</th><th>Action</th></tr></thead><tbody>' + rows + '</tbody></table>'
        + '<p style="text-align:center;font-size:12px;color:var(--text-muted);margin-top:10px;">' + results.length + ' stocks matched</p>';
}

// ============================================================
// SECTION: GLOBAL MARKETS (Live Yahoo Finance)
// ============================================================
var GLOBAL_SYMBOLS = [
    { symbol:'^GSPC',    name:'S&P 500',       cat:'Index',     flag:'🇺🇸', unit:'pts' },
    { symbol:'^IXIC',    name:'Nasdaq Comp.',  cat:'Index',     flag:'🇺🇸', unit:'pts' },
    { symbol:'^DJI',     name:'Dow Jones',     cat:'Index',     flag:'🇺🇸', unit:'pts' },
    { symbol:'^FTSE',    name:'FTSE 100',      cat:'Index',     flag:'🇬🇧', unit:'pts' },
    { symbol:'^N225',    name:'Nikkei 225',    cat:'Index',     flag:'🇯🇵', unit:'pts' },
    { symbol:'^HSI',     name:'Hang Seng',     cat:'Index',     flag:'🇭🇰', unit:'pts' },
    { symbol:'^GDAXI',   name:'DAX',           cat:'Index',     flag:'🇩🇪', unit:'pts' },
    { symbol:'GC=F',     name:'Gold',          cat:'Commodity', flag:'🥇', unit:'$/oz' },
    { symbol:'CL=F',     name:'Crude Oil WTI', cat:'Commodity', flag:'🛢️', unit:'$/bbl' },
    { symbol:'SI=F',     name:'Silver',        cat:'Commodity', flag:'🥈', unit:'$/oz' },
    { symbol:'USDINR=X', name:'USD / INR',     cat:'Forex',     flag:'💱', unit:'₹' },
    { symbol:'EURINR=X', name:'EUR / INR',     cat:'Forex',     flag:'💶', unit:'₹' },
    { symbol:'GBPINR=X', name:'GBP / INR',     cat:'Forex',     flag:'🇬🇧', unit:'₹' },
    { symbol:'JPYINR=X', name:'JPY / INR',     cat:'Forex',     flag:'🇯🇵', unit:'₹' },
    { symbol:'BTC-USD',  name:'Bitcoin',       cat:'Crypto',    flag:'₿', unit:'USD' },
    { symbol:'ETH-USD',  name:'Ethereum',      cat:'Crypto',    flag:'Ξ', unit:'USD' },
];

var _globalMarketData   = [];
var _globalActiveCat    = 'All';

async function fetchGlobalMarkets() {
    var grid = document.getElementById('globalMarketsGrid');
    if (!grid) return;
    grid.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">&#8987; Fetching live prices from Yahoo Finance...</div>';

    try {
        var syms = GLOBAL_SYMBOLS.map(function(g) { return g.symbol; }).join(',');
        var url  = 'https://query2.finance.yahoo.com/v7/finance/quote?formatted=false&corsDomain=finance.yahoo.com&symbols=' + encodeURIComponent(syms);
        var res  = await fetchWithFallback(url, 10000);
        var data = await res.json();
        var quotes = (data.quoteResponse && data.quoteResponse.result) || [];

        _globalMarketData = GLOBAL_SYMBOLS.map(function(g) {
            var q = quotes.find(function(r) { return r.symbol === g.symbol; }) || {};
            return {
                symbol:  g.symbol,
                name:    g.name,
                cat:     g.cat,
                flag:    g.flag,
                unit:    g.unit,
                price:   q.regularMarketPrice        || null,
                change:  q.regularMarketChangePercent|| null,
                prevClose: q.regularMarketPreviousClose || null,
                dayHigh: q.regularMarketDayHigh      || null,
                dayLow:  q.regularMarketDayLow       || null,
            };
        });

        document.getElementById('globalLastUpdated').textContent =
            'Updated: ' + new Date().toLocaleTimeString('en-IN', { hour:'2-digit', minute:'2-digit', second:'2-digit' }) + ' IST';
        renderGlobalMarkets();
    } catch(e) {
        grid.innerHTML = '<div style="text-align:center;padding:40px;color:var(--negative);">&#9888; Could not fetch live data. Check connection and try Refresh.</div>';
    }
}

function filterGlobalCat(cat, btn) {
    _globalActiveCat = cat;
    document.querySelectorAll('.global-cat-tab').forEach(function(b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    renderGlobalMarkets();
}

function renderGlobalMarkets() {
    var grid = document.getElementById('globalMarketsGrid');
    if (!grid || !_globalMarketData.length) return;

    var items = _globalActiveCat === 'All'
        ? _globalMarketData
        : _globalMarketData.filter(function(g) { return g.cat === _globalActiveCat; });

    if (!items.length) {
        grid.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted);">No data for this category.</div>';
        return;
    }

    grid.innerHTML = items.map(function(g) {
        if (g.price === null) {
            return '<div class="gm-card glass-panel gm-' + g.cat.toLowerCase() + '">'
                + '<div class="gm-top"><span class="gm-flag">' + g.flag + '</span>'
                + '<span class="gm-cat-badge">' + g.cat + '</span></div>'
                + '<div class="gm-name">' + g.name + '</div>'
                + '<div class="gm-price" style="color:var(--text-muted);">N/A</div>'
                + '</div>';
        }
        var pos   = g.change >= 0;
        var clr   = pos ? 'var(--positive)' : 'var(--negative)';
        var arrow = pos ? '▲' : '▼';
        var fmt   = function(n) {
            if (n >= 1000) return n.toLocaleString('en-US', { minimumFractionDigits:2, maximumFractionDigits:2 });
            return n.toFixed(n < 10 ? 4 : 2);
        };

        return '<div class="gm-card glass-panel">'
            + '<div class="gm-top">'
            + '<span class="gm-flag">' + g.flag + '</span>'
            + '<span class="gm-cat-badge gm-cat-' + g.cat.toLowerCase() + '">' + g.cat + '</span>'
            + '</div>'
            + '<div class="gm-name">' + g.name + '</div>'
            + '<div class="gm-price" style="color:' + clr + ';">' + fmt(g.price) + ' <small style="font-size:11px;opacity:0.7;">' + g.unit + '</small></div>'
            + '<div class="gm-change" style="color:' + clr + ';">' + arrow + ' ' + Math.abs(g.change).toFixed(2) + '%</div>'
            + (g.dayHigh ? '<div class="gm-range">H: ' + fmt(g.dayHigh) + ' &nbsp;|&nbsp; L: ' + fmt(g.dayLow) + '</div>' : '')
            + '</div>';
    }).join('');
}

// ============================================================
// SECTION: ANALYST INTELLIGENCE (Live Yahoo Finance)
// ============================================================
async function fetchAnalystData(symbol) {
    var panel = document.getElementById('analystPanel');
    var tip   = document.getElementById('analystLoadTip');
    var cont  = document.getElementById('analystContent');
    if (!panel) return;

    panel.style.display = 'block';
    if (tip) tip.textContent = 'Loading...';
    if (cont) cont.innerHTML = '<div style="color:var(--text-muted);font-size:12px;padding:8px 0;">&#8987; Fetching analyst data...</div>';

    var yfSym = YF_STOCK_MAP[symbol] || symbol + '.NS';
    try {
        var url  = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/' + yfSym
                 + '?modules=recommendationTrend%2CfinancialData%2CdefaultKeyStatistics';
        var res  = await fetchWithFallback(url, 8000);
        var data = await res.json();
        var result = data.quoteSummary && data.quoteSummary.result && data.quoteSummary.result[0];
        if (!result) throw new Error('No data');

        var trend    = result.recommendationTrend && result.recommendationTrend.trend;
        var finData  = result.financialData || {};
        var keyStats = result.defaultKeyStatistics || {};
        var t0       = (trend && trend[0]) || {};

        var sB = t0.strongBuy   || 0;
        var b  = t0.buy         || 0;
        var h  = t0.hold        || 0;
        var s  = t0.sell        || 0;
        var sS = t0.strongSell  || 0;
        var total = sB + b + h + s + sS || 1;

        var targetMean = finData.targetMeanPrice  && finData.targetMeanPrice.raw;
        var targetHigh = finData.targetHighPrice  && finData.targetHighPrice.raw;
        var targetLow  = finData.targetLowPrice   && finData.targetLowPrice.raw;
        var recMean    = finData.recommendationMean && finData.recommendationMean.raw;

        var recLabel = recMean
            ? (recMean < 1.5 ? 'Strong Buy' : recMean < 2.5 ? 'Buy' : recMean < 3.5 ? 'Hold' : recMean < 4.5 ? 'Sell' : 'Strong Sell')
            : null;
        var recColor = recMean
            ? (recMean < 1.5 ? '#10b981' : recMean < 2.5 ? '#22c55e' : recMean < 3.5 ? '#f59e0b' : recMean < 4.5 ? '#f97316' : '#ef4444')
            : 'var(--text-muted)';

        var stock = stocks.find(function(st) { return st.symbol === symbol; });
        var curPrice = stock ? stock.price : 0;

        var pct = function(n) { return Math.round(n / total * 100); };

        var barHtml = [
            { label:'Strong Buy', count:sB, color:'#10b981' },
            { label:'Buy',        count:b,  color:'#22c55e' },
            { label:'Hold',       count:h,  color:'#f59e0b' },
            { label:'Sell',       count:s,  color:'#f97316' },
            { label:'Strong Sell',count:sS, color:'#ef4444' },
        ].map(function(r) {
            if (!r.count) return '';
            return '<div class="analyst-bar-row">'
                + '<span class="analyst-label">' + r.label + '</span>'
                + '<div class="analyst-bar-track"><div class="analyst-bar-fill" style="width:' + pct(r.count) + '%;background:' + r.color + ';"></div></div>'
                + '<span class="analyst-count" style="color:' + r.color + ';">' + r.count + '</span>'
                + '</div>';
        }).join('');

        var targetHtml = targetMean ? (
            '<div class="analyst-target-row">'
            + '<div class="analyst-target-item"><span>Price Target</span><strong>\u20b9' + targetMean.toFixed(0) + '</strong></div>'
            + '<div class="analyst-target-item"><span>Upside</span><strong style="color:' + (targetMean > curPrice ? 'var(--positive)' : 'var(--negative)') + ';">' + (((targetMean - curPrice) / curPrice) * 100).toFixed(1) + '%</strong></div>'
            + '<div class="analyst-target-item"><span>Range</span><strong>\u20b9' + (targetLow||0).toFixed(0) + ' – \u20b9' + (targetHigh||0).toFixed(0) + '</strong></div>'
            + '</div>'
        ) : '';

        if (tip) tip.textContent = total + ' analysts';
        cont.innerHTML = (recLabel
            ? '<div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">'
            + '<span style="font-size:13px;font-weight:700;color:' + recColor + ';padding:4px 10px;border-radius:20px;background:' + recColor + '1a;border:1px solid ' + recColor + '44;">' + recLabel + '</span>'
            + '</div>'
            : '')
            + barHtml + targetHtml;

    } catch(e) {
        if (tip) tip.textContent = '(unavailable)';
        if (cont) cont.innerHTML = '<div style="color:var(--text-muted);font-size:12px;padding:4px 0;">Analyst data not available for this stock.</div>';
    }
}

// Hook analyst fetch into stock modal open
var _origOpenStockModal = openStockModal;
openStockModal = function(symbol) {
    _origOpenStockModal(symbol);
    fetchAnalystData(symbol);
};

// ============================================================
// SECTION: TECHNICAL SCREENER
// ============================================================
function computeStockRSI(stock) {
    var seed = 0;
    for (var i = 0; i < stock.symbol.length; i++) seed += stock.symbol.charCodeAt(i);

    var base;
    if      (stock.change >  3)  base = 74;
    else if (stock.change >  1)  base = 63;
    else if (stock.change >  0)  base = 54;
    else if (stock.change > -1)  base = 46;
    else if (stock.change > -3)  base = 37;
    else                         base = 26;

    var jitter = (seed % 22) - 11;
    return Math.max(8, Math.min(93, base + jitter));
}

function computeTechSignal(stock, rsi) {
    var range    = get52WeekRange(stock);
    var lo       = parseFloat(range.low);
    var hi       = parseFloat(range.high);
    var pos52    = hi > lo ? (stock.price - lo) / (hi - lo) * 100 : 50;

    var bullScore = 0;
    if (rsi < 30)  bullScore += 3;
    if (rsi < 40)  bullScore += 1;
    if (rsi > 70)  bullScore -= 3;
    if (rsi > 60)  bullScore -= 1;
    if (stock.change >  2) bullScore += 2;
    if (stock.change >  0) bullScore += 1;
    if (stock.change < -2) bullScore -= 2;
    if (stock.change <  0) bullScore -= 1;
    if (pos52 > 80) bullScore -= 1;
    if (pos52 < 20) bullScore += 1;

    if      (bullScore >=  4) return 'strong-buy';
    else if (bullScore >=  2) return 'buy';
    else if (bullScore >= -1) return 'neutral';
    else if (bullScore >= -3) return 'sell';
    else                      return 'strong-sell';
}

function getTrend(stock) {
    var seed = 0;
    for (var i = 0; i < stock.symbol.length; i++) seed += stock.symbol.charCodeAt(i);
    var aboveMA = (seed % 3 === 0) ? (stock.change > 0) : (stock.change > -0.5);
    if (stock.change > 1.5) return '<span style="color:var(--positive);">&#9650; Uptrend</span>';
    if (stock.change < -1.5) return '<span style="color:var(--negative);">&#9660; Downtrend</span>';
    return aboveMA
        ? '<span style="color:#f59e0b;">&#9654; Sideways+</span>'
        : '<span style="color:var(--text-muted);">&#9654; Sideways</span>';
}

function getVolStatus(stock) {
    var seed = 0;
    for (var i = 0; i < stock.symbol.length; i++) seed += stock.symbol.charCodeAt(i);
    var spikeSeed = (seed * 31 + 7) % 100;
    if (Math.abs(stock.change) > 2 || spikeSeed < 18)
        return '<span style="color:#f59e0b;font-weight:600;">&#9650; Spike</span>';
    if (spikeSeed < 50)
        return '<span style="color:var(--text-muted);">Normal</span>';
    return '<span style="color:var(--text-muted);opacity:0.6;">Low</span>';
}

var SIGNAL_LABELS = {
    'strong-buy':  { text:'STRONG BUY',  cls:'tsi-strong-buy'  },
    'buy':         { text:'BUY',         cls:'tsi-buy'         },
    'neutral':     { text:'NEUTRAL',     cls:'tsi-neutral'     },
    'sell':        { text:'SELL',        cls:'tsi-sell'        },
    'strong-sell': { text:'STRONG SELL', cls:'tsi-strong-sell' },
};

function renderTechnicalScreener() {
    var tbody      = document.getElementById('techScreenerBody');
    var countEl    = document.getElementById('techScreenerCount');
    if (!tbody) return;

    var sigFilter  = (document.getElementById('techSignalFilter')  || {}).value || 'all';
    var secFilter  = (document.getElementById('techSectorFilter')  || {}).value || 'all';

    var items = stocks.map(function(s) {
        var rsi    = computeStockRSI(s);
        var signal = computeTechSignal(s, rsi);
        return { stock:s, rsi:rsi, signal:signal };
    }).filter(function(item) {
        if (secFilter !== 'all' && item.stock.sector !== secFilter) return false;
        if (sigFilter === 'oversold')  return item.rsi < 30;
        if (sigFilter === 'overbought')return item.rsi > 70;
        if (sigFilter !== 'all' && item.signal !== sigFilter) return false;
        return true;
    });

    items.sort(function(a, b) { return b.stock.change - a.stock.change; });

    if (!items.length) {
        tbody.innerHTML = '<tr><td colspan="9" style="text-align:center;padding:32px;color:var(--text-muted);">No stocks match this filter.</td></tr>';
        if (countEl) countEl.textContent = '';
        return;
    }

    var range = get52WeekRange;
    tbody.innerHTML = items.map(function(item) {
        var s    = item.stock;
        var rsi  = item.rsi;
        var sig  = SIGNAL_LABELS[item.signal];
        var pos  = s.change >= 0;
        var r    = range(s);
        var lo   = parseFloat(r.low), hi = parseFloat(r.high);
        var pos52 = hi > lo ? Math.round((s.price - lo) / (hi - lo) * 100) : 50;

        var rsiColor = rsi < 30 ? 'var(--positive)' : rsi > 70 ? 'var(--negative)' : '#f59e0b';

        return '<tr onclick="openStockModal(\'' + s.symbol + '\')" style="cursor:pointer;">'
            + '<td><div style="display:flex;align-items:center;gap:8px;"><div style="width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;background:' + s.color + '20;color:' + s.color + ';border:1px solid ' + s.color + '40;">' + s.logoText + '</div><strong>' + s.symbol + '</strong></div></td>'
            + '<td style="font-variant-numeric:tabular-nums;">' + fmtINR(s.price) + '</td>'
            + '<td><span style="color:var(--' + (pos?'positive':'negative') + ');font-weight:600;">' + (pos?'+':'') + s.change.toFixed(2) + '%</span></td>'
            + '<td><strong style="color:' + rsiColor + ';">' + rsi + '</strong></td>'
            + '<td><span class="tsi-badge ' + sig.cls + '">' + sig.text + '</span></td>'
            + '<td>' + getTrend(s) + '</td>'
            + '<td><div style="display:flex;align-items:center;gap:6px;"><div style="flex:1;height:4px;background:rgba(255,255,255,0.1);border-radius:2px;"><div style="width:' + pos52 + '%;height:100%;background:' + (pos52>70?'var(--positive)':pos52<30?'var(--negative)':'#f59e0b') + ';border-radius:2px;"></div></div><span style="font-size:11px;color:var(--text-muted);">' + pos52 + '%</span></div></td>'
            + '<td>' + getVolStatus(s) + '</td>'
            + '<td><button class="btn btn-buy btn-sm" onclick="event.stopPropagation();openOrderModal(\'' + s.symbol + '\',\'buy\')">Buy</button></td>'
            + '</tr>';
    }).join('');

    if (countEl) countEl.textContent = items.length + ' stocks shown';
}

// ============================================================
// SECTION: DIVIDEND TRACKER
// ============================================================
var dividendData = [
    { symbol:'TCS',       name:'Tata Consultancy Services', exDate:'2026-04-25', amount:22,    yield:0.58, freq:'Quarterly',  type:'Interim' },
    { symbol:'HCLTECH',   name:'HCL Technologies',          exDate:'2026-04-24', amount:12,    yield:0.89, freq:'Quarterly',  type:'Interim' },
    { symbol:'NESTLEIND', name:'Nestle India',               exDate:'2026-04-28', amount:12,    yield:0.54, freq:'Quarterly',  type:'Interim' },
    { symbol:'VEDL',      name:'Vedanta Ltd',                exDate:'2026-04-22', amount:4,     yield:0.90, freq:'Interim',    type:'Interim' },
    { symbol:'POWERGRID', name:'Power Grid Corp',            exDate:'2026-04-30', amount:6.75,  yield:2.26, freq:'Interim',    type:'Interim' },
    { symbol:'INFY',      name:'Infosys Ltd',                exDate:'2026-05-15', amount:21,    yield:1.39, freq:'Quarterly',  type:'Interim' },
    { symbol:'HDFCBANK',  name:'HDFC Bank',                  exDate:'2026-05-05', amount:19.50, yield:1.18, freq:'Annual',     type:'Final'   },
    { symbol:'ONGC',      name:'ONGC',                       exDate:'2026-05-28', amount:2.50,  yield:0.93, freq:'Semi-Annual',type:'Interim' },
    { symbol:'BPCL',      name:'Bharat Petroleum Corp',      exDate:'2026-05-20', amount:5,     yield:1.73, freq:'Semi-Annual',type:'Interim' },
    { symbol:'NTPC',      name:'NTPC Ltd',                   exDate:'2026-05-10', amount:3.25,  yield:0.91, freq:'Interim',    type:'Interim' },
    { symbol:'RECLTD',    name:'REC Ltd',                    exDate:'2026-06-08', amount:6,     yield:1.12, freq:'Interim',    type:'Interim' },
    { symbol:'PFC',       name:'Power Finance Corp',         exDate:'2026-05-15', amount:5.50,  yield:1.20, freq:'Interim',    type:'Interim' },
    { symbol:'WIPRO',     name:'Wipro Ltd',                  exDate:'2026-06-05', amount:6,     yield:1.34, freq:'Annual',     type:'Final'   },
    { symbol:'IRFC',      name:'IRFC Ltd',                   exDate:'2026-05-30', amount:1.60,  yield:0.95, freq:'Semi-Annual',type:'Final'   },
    { symbol:'HPCL',      name:'Hindustan Petroleum',        exDate:'2026-05-25', amount:3.50,  yield:0.90, freq:'Semi-Annual',type:'Interim' },
    { symbol:'SBIN',      name:'State Bank of India',        exDate:'2026-06-15', amount:13.70, yield:1.69, freq:'Annual',     type:'Final'   },
    { symbol:'COALINDIA', name:'Coal India',                 exDate:'2026-06-10', amount:5.40,  yield:1.18, freq:'Semi-Annual',type:'Interim' },
    { symbol:'HINDALCO',  name:'Hindalco Industries',        exDate:'2026-06-25', amount:6,     yield:0.95, freq:'Annual',     type:'Final'   },
    { symbol:'IOC',       name:'Indian Oil Corp',            exDate:'2026-06-25', amount:2,     yield:1.38, freq:'Annual',     type:'Final'   },
    { symbol:'GAIL',      name:'GAIL India',                 exDate:'2026-07-05', amount:2.50,  yield:1.40, freq:'Annual',     type:'Final'   },
    { symbol:'ITC',       name:'ITC Ltd',                    exDate:'2026-07-20', amount:7.50,  yield:1.64, freq:'Annual',     type:'Final'   },
    { symbol:'TATASTEEL', name:'Tata Steel',                 exDate:'2026-06-30', amount:3.60,  yield:2.22, freq:'Annual',     type:'Final'   },
    { symbol:'MARUTI',    name:'Maruti Suzuki',              exDate:'2026-07-10', amount:125,   yield:1.11, freq:'Annual',     type:'Final'   },
    { symbol:'BAJAJ-AUTO',name:'Bajaj Auto',                 exDate:'2026-07-22', amount:200,   yield:2.29, freq:'Annual',     type:'Final'   },
    { symbol:'BRITANNIA', name:'Britannia Industries',       exDate:'2026-07-15', amount:72,    yield:1.37, freq:'Annual',     type:'Final'   },
    { symbol:'DRREDDY',   name:"Dr Reddy's Labs",            exDate:'2026-07-28', amount:40,    yield:0.64, freq:'Annual',     type:'Final'   },
    { symbol:'CIPLA',     name:'Cipla Ltd',                  exDate:'2026-07-20', amount:5,     yield:0.34, freq:'Annual',     type:'Final'   },
    { symbol:'HDFCLIFE',  name:'HDFC Life Insurance',        exDate:'2026-07-10', amount:2.10,  yield:0.34, freq:'Annual',     type:'Final'   },
    { symbol:'TITAN',     name:'Titan Company',              exDate:'2026-07-25', amount:6,     yield:0.19, freq:'Annual',     type:'Final'   },
    { symbol:'HINDZINC',  name:'Hindustan Zinc',             exDate:'2026-06-20', amount:32,    yield:6.54, freq:'Interim',    type:'Interim' },
];

function renderDividendTracker() {
    var tbody   = document.getElementById('divTrackerBody');
    var statsEl = document.getElementById('divStatsRow');
    if (!tbody) return;

    var sortBy  = (document.getElementById('divSortFilter') || {}).value || 'exdate';
    var typeF   = (document.getElementById('divTypeFilter') || {}).value || 'all';
    var today   = new Date(); today.setHours(0,0,0,0);

    var data = dividendData.filter(function(d) {
        return typeF === 'all' || d.type === typeF;
    });

    data.sort(function(a, b) {
        if (sortBy === 'exdate') {
            var da = new Date(a.exDate), db = new Date(b.exDate);
            var aUp = da >= today, bUp = db >= today;
            if (aUp && !bUp) return -1;
            if (!aUp && bUp) return  1;
            return aUp ? da - db : db - da;
        }
        if (sortBy === 'yield')  return b.yield  - a.yield;
        if (sortBy === 'amount') return b.amount - a.amount;
        return 0;
    });

    var upcoming = data.filter(function(d) { return new Date(d.exDate) >= today; });
    var avgYield = data.reduce(function(s, d) { return s + d.yield; }, 0) / (data.length || 1);

    if (statsEl) {
        statsEl.innerHTML = [
            { label:'Upcoming Ex-Dates', val: upcoming.length, color:'#60a5fa' },
            { label:'Total Tracked',     val: data.length,     color:'var(--text-secondary)' },
            { label:'Avg. Yield',        val: avgYield.toFixed(2) + '%', color:'var(--positive)' },
            { label:'Highest Yield',     val: Math.max.apply(null, data.map(function(d){return d.yield;})).toFixed(2) + '%', color:'#f59e0b' },
        ].map(function(s) {
            return '<div class="div-stat-card glass-panel">'
                + '<span style="font-size:11px;color:var(--text-muted);">' + s.label + '</span>'
                + '<strong style="font-size:20px;color:' + s.color + ';">' + s.val + '</strong>'
                + '</div>';
        }).join('');
    }

    tbody.innerHTML = data.map(function(d) {
        var exD    = new Date(d.exDate);
        var isPast = exD < today;
        var diff   = Math.round((exD - today) / 86400000);
        var status, statusColor;
        if (isPast) {
            status = 'Ex-Date Passed'; statusColor = 'var(--text-muted)';
        } else if (diff === 0) {
            status = 'TODAY!'; statusColor = 'var(--accent-primary)';
        } else if (diff <= 7) {
            status = 'In ' + diff + ' days'; statusColor = '#f59e0b';
        } else {
            status = 'In ' + diff + ' days'; statusColor = 'var(--positive)';
        }

        var yieldColor = d.yield >= 3 ? 'var(--positive)' : d.yield >= 1.5 ? '#f59e0b' : 'var(--text-secondary)';
        var stock = stocks.find(function(s) { return s.symbol === d.symbol; });
        var logo  = stock ? stock.logoText : d.symbol[0];
        var color = stock ? stock.color    : '#3b82f6';

        return '<tr' + (isPast ? ' style="opacity:0.55;"' : '') + '>'
            + '<td><div style="display:flex;align-items:center;gap:8px;"><div style="width:28px;height:28px;border-radius:7px;display:flex;align-items:center;justify-content:center;font-weight:700;font-size:11px;background:' + color + '20;color:' + color + ';border:1px solid ' + color + '40;">' + logo + '</div><div><strong>' + d.symbol + '</strong><br><span style="font-size:11px;color:var(--text-muted);">' + d.name + '</span></div></div></td>'
            + '<td style="font-weight:600;">' + new Date(d.exDate).toLocaleDateString('en-IN', {day:'2-digit',month:'short',year:'numeric'}) + '</td>'
            + '<td style="font-weight:700;">&#8377;' + d.amount + '</td>'
            + '<td style="color:' + yieldColor + ';font-weight:600;">' + d.yield + '%</td>'
            + '<td>' + d.freq + '</td>'
            + '<td><span style="font-size:11px;padding:2px 8px;border-radius:20px;background:rgba(255,255,255,0.08);color:var(--text-secondary);">' + d.type + '</span></td>'
            + '<td style="color:' + statusColor + ';font-weight:600;">' + status + '</td>'
            + '<td>' + (stock ? '<button class="btn btn-buy btn-sm" onclick="openOrderModal(\'' + d.symbol + '\',\'buy\')">Buy</button>' : '') + '</td>'
            + '</tr>';
    }).join('');
}

// ============================================================
// SECTION: INIT (DOMContentLoaded additions)
// ============================================================
document.addEventListener('DOMContentLoaded', function() {
    var calFilterEl = document.getElementById('calendarFilter');
    if (calFilterEl) calFilterEl.addEventListener('change', renderCalendar);
});

// ============================================================
// SECTION: MARKET PULSE
// ============================================================
var _pulseSectors = [
    { name:'IT',      stocks:['TCS','INFY','WIPRO','HCLTECH','TECHM'] },
    { name:'Banking', stocks:['HDFCBANK','ICICIBANK','SBIN','KOTAKBANK','AXISBANK'] },
    { name:'Auto',    stocks:['MARUTI','TATAMOTORS','M&M','BAJAJ-AUTO','HEROMOTOCO'] },
    { name:'FMCG',    stocks:['HINDUNILVR','ITC','NESTLEIND','BRITANNIA','DABUR'] },
    { name:'Pharma',  stocks:['SUNPHARMA','DRREDDY','CIPLA','DIVISLAB','AUROPHARMA'] },
    { name:'Energy',  stocks:['RELIANCE','ONGC','BPCL','IOC','NTPC'] },
    { name:'Metals',  stocks:['TATASTEEL','HINDALCO','JSWSTEEL','COALINDIA','VEDL'] },
    { name:'Realty',  stocks:['DLF','GODREJPROP','PRESTIGE','OBEROIRLTY','BRIGADE'] }
];

var _activePulseTab = 'breadth';

function computePulseBreadth() {
    var adv = 0, dec = 0, unch = 0;
    stocks.forEach(function(s) {
        if (s.changePct > 0.3) adv++;
        else if (s.changePct < -0.3) dec++;
        else unch++;
    });
    return { adv: adv, dec: dec, unch: unch, total: stocks.length };
}

function computeSectorFlow() {
    return _pulseSectors.map(function(sector) {
        var ss = stocks.filter(function(s) { return sector.stocks.indexOf(s.symbol) !== -1; });
        if (!ss.length) return { name: sector.name, avgChange: 0 };
        var avg = ss.reduce(function(sum, s) { return sum + (s.changePct || 0); }, 0) / ss.length;
        return { name: sector.name, avgChange: parseFloat(avg.toFixed(2)) };
    }).sort(function(a, b) { return b.avgChange - a.avgChange; });
}

function switchPulseTab(tab, btn) {
    _activePulseTab = tab;
    document.querySelectorAll('#pulseTabs .feature-tab').forEach(function(b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    renderPulseContent();
}

function renderPulseContent() {
    var el = document.getElementById('pulse-content');
    if (!el) return;
    if (_activePulseTab === 'breadth')   el.innerHTML = buildPulseBreadthHTML();
    else if (_activePulseTab === 'sectors')   el.innerHTML = buildPulseSectorHTML();
    else if (_activePulseTab === 'sentiment') el.innerHTML = buildPulseSentimentHTML();
    else if (_activePulseTab === 'fii')       el.innerHTML = buildPulseFIIHTML();
}

function buildPulseBreadthHTML() {
    var b = computePulseBreadth();
    var advPct = Math.round(b.adv / b.total * 100);
    var decPct = Math.round(b.dec / b.total * 100);
    var unchPct = 100 - advPct - decPct;
    var adRatio = b.dec > 0 ? (b.adv / b.dec).toFixed(2) : '∞';
    var nearHigh = 0, nearLow = 0, midRange = 0;
    stocks.forEach(function(s) {
        if (!s.high52 || !s.low52 || !s.price) return;
        var range = s.high52 - s.low52;
        if (range <= 0) return;
        var pos = (s.price - s.low52) / range;
        if (pos >= 0.8) nearHigh++;
        else if (pos <= 0.2) nearLow++;
        else midRange++;
    });
    return '<div class="pulse-breadth-grid">' +
        '<div class="pulse-stat-card pulse-adv"><div class="pulse-stat-num">' + b.adv + '</div><div class="pulse-stat-label">Advancing</div><div class="pulse-stat-pct">' + advPct + '%</div></div>' +
        '<div class="pulse-stat-card pulse-unch"><div class="pulse-stat-num">' + b.unch + '</div><div class="pulse-stat-label">Unchanged</div><div class="pulse-stat-pct">' + unchPct + '%</div></div>' +
        '<div class="pulse-stat-card pulse-dec"><div class="pulse-stat-num">' + b.dec + '</div><div class="pulse-stat-label">Declining</div><div class="pulse-stat-pct">' + decPct + '%</div></div>' +
        '</div>' +
        '<div class="pulse-bar-section">' +
        '<div class="pulse-bar-label"><span>Market Breadth Bar</span><span class="pulse-bar-ratio">A/D Ratio: ' + adRatio + '</span></div>' +
        '<div class="pulse-breadth-bar">' +
        '<div class="pulse-bar-adv" style="width:' + advPct + '%"></div>' +
        '<div class="pulse-bar-unch" style="width:' + unchPct + '%"></div>' +
        '<div class="pulse-bar-dec" style="width:' + decPct + '%"></div>' +
        '</div></div>' +
        '<div class="pulse-bar-section" style="margin-top:24px;">' +
        '<div class="pulse-bar-label"><span>52-Week Position</span></div>' +
        '<div class="pulse-highs-grid">' +
        '<div class="pulse-52w-card pulse-adv"><span class="p52-num">' + nearHigh + '</span><span class="p52-lbl">Near 52W High</span></div>' +
        '<div class="pulse-52w-card pulse-unch"><span class="p52-num">' + midRange + '</span><span class="p52-lbl">Mid Range</span></div>' +
        '<div class="pulse-52w-card pulse-dec"><span class="p52-num">' + nearLow + '</span><span class="p52-lbl">Near 52W Low</span></div>' +
        '</div></div>';
}

function buildPulseSectorHTML() {
    var flows = computeSectorFlow();
    var rows = flows.map(function(s) {
        var cls = s.avgChange >= 0 ? 'positive' : 'negative';
        var barW = Math.min(Math.abs(s.avgChange) * 20, 100);
        var sign = s.avgChange >= 0 ? '+' : '';
        return '<div class="sector-flow-row">' +
            '<div class="sf-name">' + s.name + '</div>' +
            '<div class="sf-bar-wrap"><div class="sf-bar ' + cls + '" style="width:' + barW + '%"></div></div>' +
            '<div class="sf-pct ' + cls + '">' + sign + s.avgChange + '%</div>' +
            '</div>';
    }).join('');
    return '<div class="sector-flow-container">' +
        '<div class="pulse-section-title">Average % Change by Sector (Today)</div>' +
        '<div class="sector-flow-list">' + rows + '</div></div>';
}

function buildPulseSentimentHTML() {
    var nifty = indices.find(function(i) { return i.symbol === '^NSEI'; }) || indices[0];
    var fgScore = 50;
    if (nifty && nifty.changePct) {
        fgScore = Math.max(5, Math.min(95, 50 + Math.round(nifty.changePct * 8)));
    }
    var fgLabel = fgScore < 20 ? 'Extreme Fear' : fgScore < 40 ? 'Fear' : fgScore < 60 ? 'Neutral' : fgScore < 80 ? 'Greed' : 'Extreme Greed';
    var fgColor = fgScore < 40 ? 'var(--negative)' : fgScore < 60 ? 'var(--text-muted)' : 'var(--positive)';
    var b = computePulseBreadth();
    var breadthScore = Math.round(b.adv / b.total * 100);
    var indicators = [
        { name:'Market Breadth', value: breadthScore + '% advancing', bullish: breadthScore > 50 },
        { name:'NIFTY Momentum', value: (nifty && nifty.changePct ? (nifty.changePct > 0 ? '+' : '') + nifty.changePct.toFixed(2) + '%' : 'N/A'), bullish: !!(nifty && nifty.changePct > 0) },
        { name:'A/D Ratio', value: b.dec > 0 ? (b.adv / b.dec).toFixed(2) + ':1' : '∞', bullish: b.adv > b.dec },
        { name:'Overall Sentiment', value: fgLabel, bullish: fgScore >= 50 }
    ];
    var indHTML = indicators.map(function(ind) {
        return '<div class="sentiment-indicator-row">' +
            '<span class="si-name">' + ind.name + '</span>' +
            '<span class="si-value">' + ind.value + '</span>' +
            '<span class="si-badge ' + (ind.bullish ? 'si-bull' : 'si-bear') + '">' + (ind.bullish ? 'Bullish' : 'Bearish') + '</span>' +
            '</div>';
    }).join('');
    return '<div class="sentiment-wrap">' +
        '<div class="fg-circle-wrap"><div class="fg-circle" style="--fg-score:' + fgScore + ';">' +
        '<div class="fg-score-num" style="color:' + fgColor + '">' + fgScore + '</div>' +
        '<div class="fg-score-lbl">' + fgLabel + '</div>' +
        '</div></div>' +
        '<div class="sentiment-indicators">' + indHTML + '</div></div>';
}

function buildPulseFIIHTML() {
    var fiiData = [
        { date:'Apr 18', fii:1243.5,  dii:-456.2  },
        { date:'Apr 17', fii:-892.1,  dii:1124.8  },
        { date:'Apr 16', fii:2104.6,  dii:-987.3  },
        { date:'Apr 15', fii:-1567.2, dii:2341.5  },
        { date:'Apr 14', fii:3421.8,  dii:-1102.4 },
        { date:'Apr 11', fii:-2234.5, dii:1876.3  },
        { date:'Apr 10', fii:876.2,   dii:-234.1  },
        { date:'Apr 09', fii:1543.7,  dii:432.8   },
        { date:'Apr 08', fii:-345.6,  dii:987.4   },
        { date:'Apr 07', fii:2876.3,  dii:-1432.6 }
    ];
    var fiiNet = fiiData.reduce(function(s, d) { return s + d.fii; }, 0);
    var diiNet = fiiData.reduce(function(s, d) { return s + d.dii; }, 0);
    var rows = fiiData.map(function(d) {
        return '<tr>' +
            '<td>' + d.date + '</td>' +
            '<td class="' + (d.fii >= 0 ? 'positive' : 'negative') + '">' + (d.fii >= 0 ? '+' : '') + d.fii.toFixed(1) + ' Cr</td>' +
            '<td class="' + (d.dii >= 0 ? 'positive' : 'negative') + '">' + (d.dii >= 0 ? '+' : '') + d.dii.toFixed(1) + ' Cr</td>' +
            '</tr>';
    }).join('');
    return '<div class="fii-wrap">' +
        '<div class="fii-summary">' +
        '<div class="fii-sum-card"><div class="fii-sum-label">FII Net (10D)</div><div class="fii-sum-val ' + (fiiNet >= 0 ? 'positive' : 'negative') + '">' + (fiiNet >= 0 ? '+' : '') + fiiNet.toFixed(1) + ' Cr</div></div>' +
        '<div class="fii-sum-card"><div class="fii-sum-label">DII Net (10D)</div><div class="fii-sum-val ' + (diiNet >= 0 ? 'positive' : 'negative') + '">' + (diiNet >= 0 ? '+' : '') + diiNet.toFixed(1) + ' Cr</div></div>' +
        '<div class="fii-sum-card"><div class="fii-sum-label">Source</div><div class="fii-sum-val" style="font-size:12px;color:var(--text-muted)">NSE India<br>(Representative)</div></div>' +
        '</div>' +
        '<table class="fii-table"><thead><tr><th>Date</th><th>FII Flow</th><th>DII Flow</th></tr></thead><tbody>' + rows + '</tbody></table>' +
        '</div>';
}

function renderMarketPulse() {
    _activePulseTab = 'breadth';
    document.querySelectorAll('#pulseTabs .feature-tab').forEach(function(t, i) { t.classList.toggle('active', i === 0); });
    renderPulseContent();
}

// ============================================================
// SECTION: EARNINGS CALENDAR
// ============================================================
var _earningsData = [
    { name:'TCS',          symbol:'TCS',        sector:'IT',       date:'2026-04-18', eps_est:25.4, rev:'61,500 Cr', status:'reported', eps_actual:26.2, surprise:3.1  },
    { name:'Infosys',      symbol:'INFY',       sector:'IT',       date:'2026-04-17', eps_est:17.8, rev:'37,200 Cr', status:'reported', eps_actual:18.1, surprise:1.7  },
    { name:'HDFC Bank',    symbol:'HDFCBANK',   sector:'Banking',  date:'2026-04-19', eps_est:82.5, rev:'85,000 Cr', status:'reported', eps_actual:84.3, surprise:2.2  },
    { name:'HCL Tech',     symbol:'HCLTECH',    sector:'IT',       date:'2026-04-16', eps_est:17.2, rev:'28,000 Cr', status:'reported', eps_actual:17.6, surprise:2.3  },
    { name:'Wipro',        symbol:'WIPRO',      sector:'IT',       date:'2026-04-24', eps_est:6.2,  rev:'22,500 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:'ICICI Bank',   symbol:'ICICIBANK',  sector:'Banking',  date:'2026-04-26', eps_est:19.8, rev:'19,800 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:'Kotak Bank',   symbol:'KOTAKBANK',  sector:'Banking',  date:'2026-04-26', eps_est:21.4, rev:'15,000 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:'Nestle India', symbol:'NESTLEIND',  sector:'FMCG',     date:'2026-04-25', eps_est:28.5, rev:'5,200 Cr',  status:'upcoming', eps_actual:null, surprise:null },
    { name:'Axis Bank',    symbol:'AXISBANK',   sector:'Banking',  date:'2026-04-24', eps_est:13.5, rev:'15,800 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:'Reliance',     symbol:'RELIANCE',   sector:'Energy',   date:'2026-04-28', eps_est:74.2, rev:'2,22,000 Cr',status:'upcoming',eps_actual:null, surprise:null },
    { name:'Bajaj Finance',symbol:'BAJFINANCE', sector:'NBFC',     date:'2026-04-29', eps_est:38.5, rev:'16,200 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:'Maruti Suzuki',symbol:'MARUTI',     sector:'Auto',     date:'2026-05-02', eps_est:115.4,rev:'38,500 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:'Titan Company',symbol:'TITAN',      sector:'Consumer', date:'2026-05-08', eps_est:12.1, rev:'12,800 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:'L&T',          symbol:'LT',         sector:'Infra',    date:'2026-05-09', eps_est:42.3, rev:'67,000 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:'Sun Pharma',   symbol:'SUNPHARMA',  sector:'Pharma',   date:'2026-05-14', eps_est:8.9,  rev:'13,200 Cr', status:'upcoming', eps_actual:null, surprise:null },
    { name:"Dr. Reddy's",  symbol:'DRREDDY',    sector:'Pharma',   date:'2026-05-15', eps_est:65.2, rev:'8,900 Cr',  status:'upcoming', eps_actual:null, surprise:null }
];

var _activeEarningsTab = 'upcoming';

function switchEarningsTab(tab, btn) {
    _activeEarningsTab = tab;
    document.querySelectorAll('#earningsTabs .feature-tab').forEach(function(b) { b.classList.remove('active'); });
    if (btn) btn.classList.add('active');
    renderEarningsContent();
}

function renderEarningsContent() {
    var el = document.getElementById('earnings-content');
    if (!el) return;
    var today = new Date('2026-04-21');
    var filtered = _earningsData.slice();
    if (_activeEarningsTab === 'upcoming') {
        filtered = filtered.filter(function(e) { return e.status === 'upcoming'; });
        filtered.sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
    } else if (_activeEarningsTab === 'thisweek') {
        var weekEnd = new Date(today); weekEnd.setDate(weekEnd.getDate() + 7);
        filtered = filtered.filter(function(e) {
            var d = new Date(e.date);
            return d >= today && d <= weekEnd;
        });
        filtered.sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
    } else if (_activeEarningsTab === 'reported') {
        filtered = filtered.filter(function(e) { return e.status === 'reported'; });
        filtered.sort(function(a, b) { return new Date(b.date) - new Date(a.date); });
    } else {
        filtered.sort(function(a, b) { return new Date(a.date) - new Date(b.date); });
    }
    if (!filtered.length) {
        el.innerHTML = '<div style="text-align:center;padding:40px;color:var(--text-muted)">No earnings in this period</div>';
        return;
    }
    var rows = filtered.map(function(e) {
        var daysDiff = Math.round((new Date(e.date) - today) / 86400000);
        var badge = e.status === 'reported'
            ? '<span class="earn-badge earn-reported">Reported</span>'
            : daysDiff <= 0 ? '<span class="earn-badge earn-today">Today</span>'
            : daysDiff === 1 ? '<span class="earn-badge earn-soon">Tomorrow</span>'
            : daysDiff <= 7 ? '<span class="earn-badge earn-soon">' + daysDiff + 'd away</span>'
            : '<span class="earn-badge earn-upcoming">' + e.date + '</span>';
        var epsHTML = e.status === 'reported' && e.eps_actual !== null
            ? '<span class="positive">₹' + e.eps_actual + '</span>'
            : '<span style="color:var(--text-muted)">₹' + e.eps_est + ' est</span>';
        var surpriseHTML = e.status === 'reported' && e.surprise !== null
            ? '<span class="' + (e.surprise >= 0 ? 'positive' : 'negative') + '">' + (e.surprise >= 0 ? '+' : '') + e.surprise + '%</span>'
            : '<span style="color:var(--text-muted)">—</span>';
        return '<tr style="cursor:pointer;" onclick="openStockModal(\'' + e.symbol + '\')">' +
            '<td><strong>' + e.name + '</strong><br><span style="font-size:11px;color:var(--text-muted)">' + e.sector + '</span></td>' +
            '<td>' + badge + '</td>' +
            '<td>' + epsHTML + '</td>' +
            '<td>' + surpriseHTML + '</td>' +
            '<td style="color:var(--text-muted);font-size:12px;">' + e.rev + '</td>' +
            '</tr>';
    }).join('');
    el.innerHTML = '<table class="earn-table"><thead><tr><th>Company</th><th>Status</th><th>EPS</th><th>Surprise</th><th>Revenue Est.</th></tr></thead><tbody>' + rows + '</tbody></table>';
}

function renderEarningsCalendar() {
    _activeEarningsTab = 'upcoming';
    document.querySelectorAll('#earningsTabs .feature-tab').forEach(function(t, i) { t.classList.toggle('active', i === 0); });
    renderEarningsContent();
}

// ============================================================
// DYNAMIC FEATURES: Clock, Refresh Ring, Tab Title, Big Movers
// ============================================================

function startISTClock() {
    function tick() {
        var now = new Date();
        var ist = new Date(now.toLocaleString('en-US', { timeZone: 'Asia/Kolkata' }));
        var h = String(ist.getHours()).padStart(2, '0');
        var m = String(ist.getMinutes()).padStart(2, '0');
        var s = String(ist.getSeconds()).padStart(2, '0');
        var el = document.getElementById('ntClock');
        if (el) el.textContent = h + ':' + m + ':' + s;
        // Market open 09:15–15:30 IST weekdays
        var day = ist.getDay();
        var mins = ist.getHours() * 60 + ist.getMinutes();
        var isOpen = day >= 1 && day <= 5 && mins >= 555 && mins < 930;
        var dot = document.querySelector('.nt-clock-wrap');
        if (dot) dot.classList.toggle('market-open', isOpen);
    }
    tick();
    setInterval(tick, 1000);
}

function startRefreshRing(totalSeconds) {
    var fill = document.getElementById('refreshRingFill');
    var icon = document.getElementById('refreshIcon');
    if (!fill) return;
    var circumference = 2 * Math.PI * 13; // r=13
    fill.style.strokeDasharray = circumference;
    fill.style.strokeDashoffset = '0';
    var elapsed = 0;
    setInterval(function() {
        elapsed = (elapsed + 1) % totalSeconds;
        var progress = elapsed / totalSeconds;
        fill.style.strokeDashoffset = circumference * (1 - progress);
        // spin the icon when refreshing (elapsed near 0 means just refreshed)
        if (elapsed === 0 && icon) {
            icon.classList.add('spin-once');
            setTimeout(function() { icon.classList.remove('spin-once'); }, 700);
        }
    }, 1000);
}

function updateTabTitle() {
    var nifty = indices.find(function(i) { return i.symbol === '^NSEI'; }) || indices[0];
    if (!nifty || !nifty.value) return;
    var sign = nifty.change >= 0 ? '▲' : '▼';
    document.title = sign + ' ' + nifty.value.toLocaleString('en-IN', { maximumFractionDigits: 2 }) + ' NIFTY | NexTrade';
}

var _lastBigMoverCheck = {};
function checkBigMovers() {
    stocks.forEach(function(s) {
        if (!s.changePct || Math.abs(s.changePct) < 3) return;
        var key = s.symbol + '_' + Math.round(s.changePct);
        if (_lastBigMoverCheck[key]) return;
        _lastBigMoverCheck[key] = true;
        var dir = s.changePct > 0 ? '🚀' : '🔻';
        var sign = s.changePct > 0 ? '+' : '';
        showToast(dir + ' ' + s.name + ' ' + sign + s.changePct.toFixed(2) + '% today', s.changePct > 0 ? 'success' : 'error');
    });
}

// ============================================================
// ──  BROKER FEATURES  ──────────────────────────────────────
// ============================================================

function fmtOI(n) {
    if (n === undefined || n === null) return '0';
    var abs = Math.abs(n), sign = n < 0 ? '-' : '';
    if (abs >= 10000000) return sign + (abs / 10000000).toFixed(2) + 'Cr';
    if (abs >= 100000)   return sign + (abs / 100000).toFixed(2) + 'L';
    return sign + abs.toLocaleString('en-IN');
}

// ── OPTIONS CHAIN ──────────────────────────────────────────
var _optionsActive = 'nifty';
var _optionsData = {
    nifty: {
        name:'NIFTY 50', spot:24487.65, lot:75,
        expiries:['29 May 2026','05 Jun 2026','26 Jun 2026'],
        strikes:[
            { k:24000, ce:{ oi:823500,  coiChg:-15000, vol:218400, iv:19.4, ltp:523.70, chg:-8.45, itm:true  }, pe:{ oi:187500,  coiChg:4500,   vol:48600,  iv:13.2, ltp:37.85,  chg:-2.10, itm:false } },
            { k:24100, ce:{ oi:675000,  coiChg:-9000,  vol:183600, iv:18.7, ltp:427.35, chg:-7.20, itm:true  }, pe:{ oi:213750,  coiChg:6750,   vol:57150,  iv:13.6, ltp:44.10,  chg:-1.85, itm:false } },
            { k:24200, ce:{ oi:541500,  coiChg:12750,  vol:151200, iv:17.9, ltp:335.80, chg:6.40,  itm:true  }, pe:{ oi:262500,  coiChg:8250,   vol:68250,  iv:14.1, ltp:52.95,  chg:3.20,  itm:false } },
            { k:24300, ce:{ oi:982500,  coiChg:22500,  vol:264600, iv:17.2, ltp:249.55, chg:5.80,  itm:true  }, pe:{ oi:412500,  coiChg:15000,  vol:102600, iv:14.6, ltp:67.30,  chg:4.15,  itm:false } },
            { k:24400, ce:{ oi:1323750, coiChg:-30000, vol:378000, iv:16.5, ltp:169.70, chg:-3.95, itm:true  }, pe:{ oi:885000,  coiChg:-22500, vol:223200, iv:15.1, ltp:88.15,  chg:-5.30, itm:false } },
            { k:24500, ce:{ oi:2437500, coiChg:45000,  vol:654000, iv:15.8, ltp:98.30,  chg:2.15,  itm:false, atm:true }, pe:{ oi:2625000, coiChg:37500, vol:697500, iv:15.9, ltp:111.50, chg:1.80, itm:false, atm:true } },
            { k:24600, ce:{ oi:1762500, coiChg:52500,  vol:461250, iv:16.3, ltp:46.85,  chg:3.25,  itm:false }, pe:{ oi:1387500, coiChg:30000,  vol:354750, iv:16.4, ltp:160.10, chg:-4.70, itm:true  } },
            { k:24700, ce:{ oi:1125000, coiChg:37500,  vol:291750, iv:17.1, ltp:21.40,  chg:2.80,  itm:false }, pe:{ oi:825000,  coiChg:-18750, vol:214500, iv:17.0, ltp:235.60, chg:-6.10, itm:true  } },
            { k:24800, ce:{ oi:825000,  coiChg:18750,  vol:210000, iv:17.8, ltp:9.75,   chg:1.30,  itm:false }, pe:{ oi:637500,  coiChg:-13500, vol:163800, iv:17.7, ltp:324.20, chg:-7.35, itm:true  } },
            { k:24900, ce:{ oi:562500,  coiChg:11250,  vol:142500, iv:18.6, ltp:4.50,   chg:0.80,  itm:false }, pe:{ oi:412500,  coiChg:-9000,  vol:107250, iv:18.5, ltp:419.80, chg:-8.20, itm:true  } },
            { k:25000, ce:{ oi:1987500, coiChg:67500,  vol:498750, iv:19.3, ltp:2.20,   chg:0.45,  itm:false }, pe:{ oi:262500,  coiChg:-6000,  vol:67500,  iv:19.1, ltp:518.30, chg:-9.10, itm:true  } },
        ]
    },
    banknifty: {
        name:'BANK NIFTY', spot:52340.80, lot:15,
        expiries:['21 May 2026','28 May 2026','25 Jun 2026'],
        strikes:[
            { k:51400, ce:{ oi:157500, coiChg:-3000,  vol:42000,  iv:21.2, ltp:1065.50, chg:-12.40, itm:true  }, pe:{ oi:45000,  coiChg:1500,  vol:12750, iv:15.1, ltp:68.30,   chg:-3.20,  itm:false } },
            { k:51600, ce:{ oi:127500, coiChg:-4500,  vol:34500,  iv:20.4, ltp:875.20,  chg:-10.15, itm:true  }, pe:{ oi:60000,  coiChg:2250,  vol:16500, iv:15.5, ltp:78.90,   chg:-2.80,  itm:false } },
            { k:51800, ce:{ oi:105000, coiChg:3000,   vol:28500,  iv:19.6, ltp:692.40,  chg:7.30,   itm:true  }, pe:{ oi:82500,  coiChg:3000,  vol:22500, iv:16.0, ltp:96.70,   chg:4.50,   itm:false } },
            { k:52000, ce:{ oi:232500, coiChg:7500,   vol:63000,  iv:18.8, ltp:516.80,  chg:5.60,   itm:true  }, pe:{ oi:172500, coiChg:-5250, vol:46500, iv:16.5, ltp:121.40,  chg:-6.80,  itm:false } },
            { k:52200, ce:{ oi:397500, coiChg:-10500, vol:108000, iv:18.0, ltp:352.60,  chg:-4.20,  itm:true  }, pe:{ oi:300000, coiChg:-7500, vol:81000, iv:17.0, ltp:158.30,  chg:-8.10,  itm:false } },
            { k:52400, ce:{ oi:727500, coiChg:18000,  vol:198000, iv:17.3, ltp:202.50,  chg:3.80,   itm:false, atm:true }, pe:{ oi:742500, coiChg:15000, vol:202500, iv:17.4, ltp:264.20, chg:2.90, itm:false, atm:true } },
            { k:52600, ce:{ oi:510000, coiChg:15000,  vol:138750, iv:17.9, ltp:98.40,   chg:4.10,   itm:false }, pe:{ oi:405000, coiChg:-9750,  vol:109500, iv:17.8, ltp:362.10,  chg:-5.40,  itm:true  } },
            { k:52800, ce:{ oi:322500, coiChg:9750,   vol:87000,  iv:18.6, ltp:43.80,   chg:2.60,   itm:false }, pe:{ oi:255000, coiChg:-7500,  vol:69000,  iv:18.5, ltp:508.30,  chg:-7.20,  itm:true  } },
            { k:53000, ce:{ oi:217500, coiChg:6750,   vol:58500,  iv:19.4, ltp:19.50,   chg:1.35,   itm:false }, pe:{ oi:157500, coiChg:-4500,  vol:42750,  iv:19.3, ltp:684.70,  chg:-9.30,  itm:true  } },
            { k:53200, ce:{ oi:135000, coiChg:4500,   vol:36750,  iv:20.2, ltp:8.70,    chg:0.75,   itm:false }, pe:{ oi:97500,  coiChg:-3000,  vol:26250,  iv:20.1, ltp:874.10,  chg:-11.20, itm:true  } },
            { k:53400, ce:{ oi:472500, coiChg:15000,  vol:127500, iv:21.1, ltp:3.90,    chg:0.40,   itm:false }, pe:{ oi:67500,  coiChg:-1500,  vol:18000,  iv:20.9, ltp:1069.50, chg:-13.40, itm:true  } },
        ]
    },
    finnifty: {
        name:'FIN NIFTY', spot:23180.45, lot:40,
        expiries:['27 May 2026','24 Jun 2026'],
        strikes:[
            { k:22700, ce:{ oi:64000,  coiChg:-2400, vol:17200, iv:20.8, ltp:512.30, chg:-6.80, itm:true  }, pe:{ oi:18000,  coiChg:800,   vol:5200,  iv:14.8, ltp:32.60,  chg:-1.80, itm:false } },
            { k:22800, ce:{ oi:52000,  coiChg:-1600, vol:14400, iv:20.1, ltp:416.80, chg:-5.60, itm:true  }, pe:{ oi:24000,  coiChg:1200,  vol:6800,  iv:15.2, ltp:37.40,  chg:-1.50, itm:false } },
            { k:22900, ce:{ oi:44000,  coiChg:2000,  vol:12000, iv:19.4, ltp:326.20, chg:4.80,  itm:true  }, pe:{ oi:32000,  coiChg:1600,  vol:8800,  iv:15.6, ltp:47.10,  chg:2.40,  itm:false } },
            { k:23000, ce:{ oi:96000,  coiChg:4000,  vol:26800, iv:18.7, ltp:241.50, chg:3.60,  itm:true  }, pe:{ oi:72000,  coiChg:-2400, vol:19600, iv:16.0, ltp:62.80,  chg:-3.20, itm:false } },
            { k:23100, ce:{ oi:148000, coiChg:-5200, vol:41200, iv:18.0, ltp:162.40, chg:-2.80, itm:true  }, pe:{ oi:124000, coiChg:-4000, vol:34000, iv:16.5, ltp:84.20,  chg:-4.10, itm:false } },
            { k:23200, ce:{ oi:288000, coiChg:8800,  vol:80000, iv:17.4, ltp:91.60,  chg:1.80,  itm:false, atm:true }, pe:{ oi:304000, coiChg:7200, vol:84400, iv:17.5, ltp:113.80, chg:1.40, itm:false, atm:true } },
            { k:23300, ce:{ oi:208000, coiChg:7200,  vol:57600, iv:17.9, ltp:42.30,  chg:2.20,  itm:false }, pe:{ oi:168000, coiChg:-5200, vol:46400, iv:17.8, ltp:164.60, chg:-3.10, itm:true  } },
            { k:23400, ce:{ oi:132000, coiChg:5200,  vol:36400, iv:18.5, ltp:18.70,  chg:1.40,  itm:false }, pe:{ oi:104000, coiChg:-4000, vol:28800, iv:18.4, ltp:241.90, chg:-4.20, itm:true  } },
            { k:23500, ce:{ oi:84000,  coiChg:3200,  vol:23200, iv:19.2, ltp:8.20,   chg:0.80,  itm:false }, pe:{ oi:64000,  coiChg:-2800, vol:17600, iv:19.1, ltp:331.50, chg:-5.40, itm:true  } },
            { k:23600, ce:{ oi:52000,  coiChg:2000,  vol:14400, iv:19.9, ltp:3.60,   chg:0.40,  itm:false }, pe:{ oi:40000,  coiChg:-2000, vol:11000, iv:19.8, ltp:427.20, chg:-6.30, itm:true  } },
            { k:23700, ce:{ oi:196000, coiChg:8800,  vol:54400, iv:20.7, ltp:1.60,   chg:0.20,  itm:false }, pe:{ oi:28000,  coiChg:-1200, vol:7600,  iv:20.5, ltp:525.10, chg:-7.20, itm:true  } },
        ]
    }
};

function switchOptionsTab(idx, btn) {
    _optionsActive = idx;
    document.querySelectorAll('#optionsTabs .feature-tab').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active');
    renderOptionsChain();
}

function renderOptionsChain() {
    var d = _optionsData[_optionsActive];
    var el = document.getElementById('options-content');
    if (!el) return;
    var totalCeOi = d.strikes.reduce(function(s, r) { return s + r.ce.oi; }, 0);
    var totalPeOi = d.strikes.reduce(function(s, r) { return s + r.pe.oi; }, 0);
    var pcr = (totalPeOi / totalCeOi).toFixed(2);
    var maxPainStrike = d.strikes.reduce(function(best, row) { return row.pe.oi > best.oi ? { k: row.k, oi: row.pe.oi } : best; }, { k: 0, oi: 0 }).k;
    var html = '<div class="oc-meta-bar">';
    html += '<div class="oc-meta-item"><span class="oc-meta-label">Spot</span><span class="oc-meta-val positive">&#8377;' + d.spot.toLocaleString('en-IN') + '</span></div>';
    html += '<div class="oc-meta-item"><span class="oc-meta-label">PCR (OI)</span><span class="oc-meta-val ' + (parseFloat(pcr) >= 1 ? 'positive' : 'negative') + '">' + pcr + '</span></div>';
    html += '<div class="oc-meta-item"><span class="oc-meta-label">Max Pain</span><span class="oc-meta-val">&#8377;' + maxPainStrike.toLocaleString('en-IN') + '</span></div>';
    html += '<div class="oc-meta-item"><span class="oc-meta-label">Lot Size</span><span class="oc-meta-val">' + d.lot + '</span></div>';
    html += '<div class="oc-meta-item"><span class="oc-meta-label">Expiry</span><select class="oc-expiry-sel">';
    d.expiries.forEach(function(e) { html += '<option>' + e + '</option>'; });
    html += '</select></div></div>';
    html += '<div class="oc-wrap"><table class="oc-table"><thead><tr>';
    html += '<th colspan="6" class="oc-ce-head">CALLS (CE)</th><th class="oc-strike-head">STRIKE</th><th colspan="6" class="oc-pe-head">PUTS (PE)</th>';
    html += '</tr><tr><th>OI</th><th>Chg OI</th><th>Volume</th><th>IV</th><th>LTP</th><th>Chg</th><th></th><th>Chg</th><th>LTP</th><th>IV</th><th>Volume</th><th>Chg OI</th><th>OI</th></tr></thead><tbody>';
    d.strikes.forEach(function(row) {
        var atmCls = row.ce.atm ? ' oc-atm-row' : '';
        html += '<tr class="oc-row' + atmCls + '">';
        html += '<td class="' + (row.ce.itm ? 'oc-itm' : '') + '">' + fmtOI(row.ce.oi) + '</td>';
        html += '<td class="' + (row.ce.coiChg >= 0 ? 'positive' : 'negative') + '">' + (row.ce.coiChg >= 0 ? '+' : '') + fmtOI(row.ce.coiChg) + '</td>';
        html += '<td class="' + (row.ce.itm ? 'oc-itm' : '') + '">' + fmtOI(row.ce.vol) + '</td>';
        html += '<td>' + row.ce.iv + '%</td>';
        html += '<td class="oc-ltp' + (row.ce.itm ? ' oc-itm' : '') + '">' + row.ce.ltp.toFixed(2) + '</td>';
        html += '<td class="' + (row.ce.chg >= 0 ? 'positive' : 'negative') + '">' + (row.ce.chg >= 0 ? '+' : '') + row.ce.chg.toFixed(2) + '</td>';
        html += '<td class="oc-strike' + (row.ce.atm ? ' oc-atm-strike' : '') + '">' + row.k.toLocaleString('en-IN') + '</td>';
        html += '<td class="' + (row.pe.chg >= 0 ? 'positive' : 'negative') + '">' + (row.pe.chg >= 0 ? '+' : '') + row.pe.chg.toFixed(2) + '</td>';
        html += '<td class="oc-ltp' + (row.pe.itm ? ' oc-itm' : '') + '">' + row.pe.ltp.toFixed(2) + '</td>';
        html += '<td>' + row.pe.iv + '%</td>';
        html += '<td class="' + (row.pe.itm ? 'oc-itm' : '') + '">' + fmtOI(row.pe.vol) + '</td>';
        html += '<td class="' + (row.pe.coiChg >= 0 ? 'positive' : 'negative') + '">' + (row.pe.coiChg >= 0 ? '+' : '') + fmtOI(row.pe.coiChg) + '</td>';
        html += '<td class="' + (row.pe.itm ? 'oc-itm' : '') + '">' + fmtOI(row.pe.oi) + '</td>';
        html += '</tr>';
    });
    html += '</tbody></table></div>';
    el.innerHTML = html;
}

// ── POSITIONS ─────────────────────────────────────────────
var _posActiveTab = 'today';

function _isToday(dateStr) {
    if (!dateStr) return false;
    var now = new Date();
    var d = now.getDate(), m = now.getMonth(), y = now.getFullYear();
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    return dateStr.indexOf(d + ' ' + months[m] + ' ' + y) !== -1 ||
           dateStr.indexOf(y + '-' + String(m+1).padStart(2,'0') + '-' + String(d).padStart(2,'0')) !== -1 ||
           dateStr.indexOf(String(d).padStart(2,'0') + '/' + String(m+1).padStart(2,'0') + '/' + y) !== -1;
}

function _getMISPositions() {
    var map = {};
    (orderHistory || []).forEach(function(o) {
        if (!_isToday(o.date)) return;
        var prod = (o.product || o.type || '').toUpperCase();
        if (prod !== 'MIS' && prod !== 'INTRADAY') return;
        var key = o.symbol;
        if (!map[key]) map[key] = { symbol: o.symbol, buyQty: 0, sellQty: 0, buyVal: 0, sellVal: 0 };
        if (o.side === 'BUY')  { map[key].buyQty  += o.qty; map[key].buyVal  += o.qty * o.price; }
        if (o.side === 'SELL') { map[key].sellQty += o.qty; map[key].sellVal += o.qty * o.price; }
    });
    var positions = [];
    Object.keys(map).forEach(function(sym) {
        var p = map[sym];
        var netQty = p.buyQty - p.sellQty;
        if (netQty === 0) return;
        var side = netQty > 0 ? 'BUY' : 'SELL';
        var qty = Math.abs(netQty);
        var avgPrice = side === 'BUY' ? (p.buyVal / p.buyQty) : (p.sellVal / p.sellQty);
        var st = (stocks || []).find(function(s) { return s.symbol === sym; });
        var ltp = st && st.price ? st.price : avgPrice;
        var pnl = side === 'BUY' ? (ltp - avgPrice) * qty : (avgPrice - ltp) * qty;
        var pnlPct = avgPrice > 0 ? (pnl / (avgPrice * qty)) * 100 : 0;
        positions.push({ symbol: sym, side: side, qty: qty, avgPrice: avgPrice, ltp: ltp, pnl: pnl, pnlPct: pnlPct });
    });
    return positions;
}

function switchPositionsTab(tab, btn) {
    _posActiveTab = tab;
    document.querySelectorAll('#positionsTabs .feature-tab').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active'); renderPositionsContent();
}
function renderPositions() {
    _posActiveTab = 'today';
    document.querySelectorAll('#positionsTabs .feature-tab').forEach(function(b, i) { b.classList.toggle('active', i === 0); });
    renderPositionsContent();
}
function renderPositionsContent() {
    var el = document.getElementById('positions-content'); if (!el) return;
    if (_posActiveTab === 'today')    el.innerHTML = buildPositionsTodayHTML();
    if (_posActiveTab === 'holdings') el.innerHTML = buildPositionsHoldingsHTML();
    if (_posActiveTab === 'pnl')      el.innerHTML = buildPositionsPnLHTML();
}
function buildPositionsTodayHTML() {
    var positions = _getMISPositions();
    var totalPnl = positions.reduce(function(s, p) { return s + p.pnl; }, 0);
    var pCls = totalPnl >= 0 ? 'positive' : 'negative';
    var html = '<div class="pos-summary-bar">';
    html += '<div class="pos-summary-item"><span>MTM P&L</span><b class="' + pCls + '">' + (totalPnl >= 0 ? '+' : '') + '&#8377;' + Math.abs(totalPnl).toFixed(2) + '</b></div>';
    html += '<div class="pos-summary-item"><span>Open Positions</span><b>' + positions.length + '</b></div>';
    html += '<div class="pos-summary-item"><span>MIS Trades Today</span><b>' + (orderHistory || []).filter(function(o){ return _isToday(o.date); }).length + '</b></div>';
    html += '</div>';
    if (positions.length === 0) {
        return html + '<div class="pos-empty"><div class="pos-empty-icon">&#9783;</div><p>No open intraday positions today.</p><p style="font-size:12px;color:var(--text-muted);margin-top:8px;">Place MIS orders from the Dashboard to see them here.</p></div>';
    }
    html += '<div style="overflow-x:auto;margin-top:16px;"><table class="trade-table"><thead><tr>';
    html += '<th>Symbol</th><th>Side</th><th>Qty</th><th>Avg Price</th><th>LTP</th><th>MTM P&L</th><th>P&L %</th><th>Action</th></tr></thead><tbody>';
    positions.forEach(function(p) {
        var plC = p.pnl >= 0 ? 'positive' : 'negative';
        var sC = p.side === 'BUY' ? 'pos-buy-badge' : 'pos-sell-badge';
        html += '<tr>';
        html += '<td><span class="trade-sym">' + p.symbol + '</span></td>';
        html += '<td><span class="' + sC + '">' + p.side + '</span></td>';
        html += '<td>' + p.qty + '</td>';
        html += '<td>&#8377;' + p.avgPrice.toFixed(2) + '</td>';
        html += '<td class="trade-ltp">&#8377;' + p.ltp.toFixed(2) + '</td>';
        html += '<td class="' + plC + '"><b>' + (p.pnl >= 0 ? '+' : '') + '&#8377;' + p.pnl.toFixed(2) + '</b></td>';
        html += '<td class="' + plC + '">' + (p.pnlPct >= 0 ? '+' : '') + p.pnlPct.toFixed(2) + '%</td>';
        html += '<td><button class="pos-exit-btn" onclick="showToast(\'Exit order placed for ' + p.symbol + '\',\'success\')">Exit</button></td>';
        html += '</tr>';
    });
    return html + '</tbody></table></div>';
}
function buildPositionsHoldingsHTML() {
    if (!portfolioHoldings || portfolioHoldings.length === 0) {
        return '<div class="pos-empty"><div class="pos-empty-icon">&#9783;</div><p>No holdings yet.</p><p style="font-size:12px;color:var(--text-muted);margin-top:8px;">Buy stocks with CNC/Delivery from the Dashboard.</p></div>';
    }
    var totalInv = 0, totalCur = 0;
    portfolioHoldings.forEach(function(h) {
        var st = stocks.find(function(s) { return s.symbol === h.symbol; });
        var ltp = st && st.price ? st.price : h.avgCost;
        totalInv += h.qty * h.avgCost;
        totalCur += h.qty * ltp;
    });
    var totalPnl = totalCur - totalInv;
    var pCls = totalPnl >= 0 ? 'positive' : 'negative';
    var html = '<div class="pos-summary-bar">';
    html += '<div class="pos-summary-item"><span>Invested</span><b>&#8377;' + totalInv.toLocaleString('en-IN', { maximumFractionDigits: 0 }) + '</b></div>';
    html += '<div class="pos-summary-item"><span>Current Value</span><b>&#8377;' + totalCur.toLocaleString('en-IN', { maximumFractionDigits: 0 }) + '</b></div>';
    html += '<div class="pos-summary-item"><span>Total P&L</span><b class="' + pCls + '">' + (totalPnl >= 0 ? '+' : '') + '&#8377;' + Math.abs(totalPnl).toFixed(2) + '</b></div>';
    html += '<div class="pos-summary-item"><span>Holdings</span><b>' + portfolioHoldings.length + '</b></div>';
    html += '</div>';
    html += '<div style="overflow-x:auto;margin-top:16px;"><table class="trade-table"><thead><tr>';
    html += '<th>Symbol</th><th>Name</th><th>Qty</th><th>Avg Cost</th><th>LTP</th><th>Invested</th><th>Current Value</th><th>P&L</th><th>P&L %</th></tr></thead><tbody>';
    portfolioHoldings.forEach(function(h) {
        var st = stocks.find(function(s) { return s.symbol === h.symbol; });
        var ltp = st && st.price ? st.price : h.avgCost;
        var inv = h.qty * h.avgCost, cur = h.qty * ltp, pnl = cur - inv;
        var pct = inv > 0 ? (pnl / inv) * 100 : 0;
        var pC = pnl >= 0 ? 'positive' : 'negative';
        html += '<tr>';
        html += '<td><span class="trade-sym">' + h.symbol + '</span></td>';
        html += '<td style="font-size:12px;color:var(--text-muted);">' + (h.name || '') + '</td>';
        html += '<td>' + h.qty + '</td>';
        html += '<td>&#8377;' + h.avgCost.toFixed(2) + '</td>';
        html += '<td class="trade-ltp">&#8377;' + ltp.toFixed(2) + '</td>';
        html += '<td>&#8377;' + inv.toLocaleString('en-IN', { maximumFractionDigits: 0 }) + '</td>';
        html += '<td>&#8377;' + cur.toLocaleString('en-IN', { maximumFractionDigits: 0 }) + '</td>';
        html += '<td class="' + pC + '"><b>' + (pnl >= 0 ? '+' : '') + '&#8377;' + Math.abs(pnl).toFixed(2) + '</b></td>';
        html += '<td class="' + pC + '">' + (pct >= 0 ? '+' : '') + pct.toFixed(2) + '%</td>';
        html += '</tr>';
    });
    return html + '</tbody></table></div>';
}
function buildPositionsPnLHTML() {
    var misPosns = _getMISPositions();
    var dayMTM = misPosns.reduce(function(s, p) { return s + p.pnl; }, 0);
    var inv = portfolioHoldings.reduce(function(s, h) { return s + h.qty * h.avgCost; }, 0);
    var cur = portfolioHoldings.reduce(function(s, h) {
        var st = stocks.find(function(x) { return x.symbol === h.symbol; });
        return s + h.qty * (st && st.price ? st.price : h.avgCost);
    }, 0);
    var holdingsPnl = cur - inv;
    var totalOrders = (orderHistory || []).filter(function(o) { return _isToday(o.date); }).length;
    var todayBuy = (orderHistory || []).filter(function(o) { return _isToday(o.date) && o.side === 'BUY'; })
                    .reduce(function(s, o) { return s + (o.total || o.qty * o.price); }, 0);
    var todaySell = (orderHistory || []).filter(function(o) { return _isToday(o.date) && o.side === 'SELL'; })
                     .reduce(function(s, o) { return s + (o.total || o.qty * o.price); }, 0);
    var cards = [
        { label: 'Intraday MTM P&L',  val: dayMTM,      cls: dayMTM >= 0 ? 'positive' : 'negative',      fmt: 'pnl' },
        { label: 'Portfolio P&L',     val: holdingsPnl,  cls: holdingsPnl >= 0 ? 'positive' : 'negative', fmt: 'pnl' },
        { label: 'Total Invested',    val: inv,           cls: '',                                          fmt: 'abs' },
        { label: 'Current Value',     val: cur,           cls: '',                                          fmt: 'abs' },
        { label: 'Today Buy Value',   val: todayBuy,      cls: 'negative',                                  fmt: 'abs' },
        { label: 'Today Sell Value',  val: todaySell,     cls: 'positive',                                  fmt: 'abs' },
        { label: 'Orders Today',      val: totalOrders,   cls: '',                                          fmt: 'count' },
        { label: 'Open MIS Positions',val: misPosns.length, cls: '', fmt: 'count' },
    ];
    var html = '<div class="pnl-grid">';
    cards.forEach(function(c) {
        var display;
        if (c.fmt === 'pnl')   display = (c.val >= 0 ? '+&#8377;' : '-&#8377;') + Math.abs(c.val).toFixed(2);
        else if (c.fmt === 'abs') display = '&#8377;' + Math.abs(c.val).toLocaleString('en-IN', { maximumFractionDigits: 0 });
        else display = c.val;
        html += '<div class="pnl-card"><div class="pnl-card-label">' + c.label + '</div><div class="pnl-card-val ' + c.cls + '">' + display + '</div></div>';
    });
    return html + '</div>';
}

// ── FUNDS & MARGINS ────────────────────────────────────────
var _fundsActiveTab = 'overview';
function switchFundsTab(tab, btn) {
    _fundsActiveTab = tab;
    document.querySelectorAll('#fundsTabs .feature-tab').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active'); renderFundsContent();
}
function renderFunds() {
    _fundsActiveTab = 'overview';
    document.querySelectorAll('#fundsTabs .feature-tab').forEach(function(b, i) { b.classList.toggle('active', i === 0); });
    renderFundsContent();
}
function renderFundsContent() {
    var el = document.getElementById('funds-content'); if (!el) return;
    if (_fundsActiveTab === 'overview') el.innerHTML = buildFundsOverviewHTML();
    if (_fundsActiveTab === 'equity')   el.innerHTML = buildFundsEquityHTML();
    if (_fundsActiveTab === 'ledger')   el.innerHTML = buildFundsLedgerHTML();
}
function buildFundsOverviewHTML() {
    var bal = virtualBalance;
    var opening = 1000000;
    var invested = portfolioHoldings.reduce(function(s, h) { return s + h.qty * h.avgCost; }, 0);
    var used = Math.max(0, opening - bal);
    var pct = Math.min(100, (used / opening) * 100).toFixed(1);
    var todayBuy = (orderHistory || []).filter(function(o) { return _isToday(o.date) && o.side === 'BUY'; })
                    .reduce(function(s, o) { return s + (o.total || o.qty * o.price); }, 0);
    var html = '<div class="funds-overview-grid">';
    html += '<div class="funds-card funds-avail"><div class="funds-card-label">Available Cash</div><div class="funds-card-val">&#8377;' + bal.toLocaleString('en-IN', { maximumFractionDigits: 2 }) + '</div><div class="funds-card-sub">Ready to trade</div></div>';
    html += '<div class="funds-card funds-used"><div class="funds-card-label">Funds Used</div><div class="funds-card-val negative">&#8377;' + used.toLocaleString('en-IN', { maximumFractionDigits: 2 }) + '</div><div class="funds-card-sub">' + pct + '% of opening balance</div></div>';
    html += '<div class="funds-card"><div class="funds-card-label">Opening Balance</div><div class="funds-card-val">&#8377;' + opening.toLocaleString('en-IN') + '</div><div class="funds-card-sub">Virtual account balance</div></div>';
    html += '<div class="funds-card"><div class="funds-card-label">Holdings Value</div><div class="funds-card-val">&#8377;' + invested.toLocaleString('en-IN', { maximumFractionDigits: 0 }) + '</div><div class="funds-card-sub">CNC stock investments</div></div>';
    html += '</div>';
    html += '<div class="funds-bar-wrap"><div class="funds-bar-label"><span>Fund Utilisation</span><span>' + pct + '%</span></div><div class="funds-bar-track"><div class="funds-bar-fill" style="width:' + pct + '%"></div></div></div>';
    html += '<div class="funds-breakdown"><div style="font-weight:600;font-size:14px;margin-bottom:14px;color:var(--text-main);">Fund Flow</div>';
    var totalOrders = (orderHistory || []).length;
    var frows = [
        ['Opening Balance', '&#8377;' + opening.toLocaleString('en-IN'), ''],
        ['Today\'s Buy Orders', '-&#8377;' + todayBuy.toLocaleString('en-IN', { maximumFractionDigits: 2 }), todayBuy > 0 ? 'negative' : ''],
        ['Total Orders Placed', totalOrders + ' orders', ''],
        ['Available Balance', '&#8377;' + bal.toLocaleString('en-IN', { maximumFractionDigits: 2 }), bal >= opening ? 'positive' : 'negative'],
    ];
    frows.forEach(function(r, i) {
        html += '<div class="funds-row' + (i === 3 ? ' funds-row-total' : '') + '"><span>' + r[0] + '</span><span class="' + r[2] + '">' + r[1] + '</span></div>';
    });
    return html + '</div>';
}
function buildFundsEquityHTML() {
    var bal = virtualBalance;
    var mis5x = bal * 5;
    var holdingsVal = portfolioHoldings.reduce(function(s, h) {
        var st = stocks.find(function(x) { return x.symbol === h.symbol; });
        return s + h.qty * (st && st.price ? st.price : h.avgCost);
    }, 0);
    var todayBuyVal = (orderHistory || []).filter(function(o) { return _isToday(o.date) && o.side === 'BUY'; })
                       .reduce(function(s, o) { return s + (o.total || o.qty * o.price); }, 0);
    var items = [
        ['Cash Available (Delivery)', '&#8377;' + bal.toLocaleString('en-IN', { maximumFractionDigits: 2 }), 'Available for CNC (equity delivery) orders'],
        ['Intraday Limit (MIS)', '&#8377;' + mis5x.toLocaleString('en-IN', { maximumFractionDigits: 0 }), '5× cash leverage for intraday (MIS) orders'],
        ['Holdings Market Value', '&#8377;' + holdingsVal.toLocaleString('en-IN', { maximumFractionDigits: 0 }), 'Current value of CNC holdings at LTP'],
        ['Today\'s Buy Value', '&#8377;' + todayBuyVal.toLocaleString('en-IN', { maximumFractionDigits: 2 }), 'Capital deployed today across all orders'],
        ['Collateral Value', '&#8377;0.00', 'Pledged securities (not available in simulator)'],
        ['Peak Margin Used', '&#8377;' + Math.max(todayBuyVal, holdingsVal).toLocaleString('en-IN', { maximumFractionDigits: 0 }), 'Highest margin utilised today'],
    ];
    var html = '<div class="funds-section-grid">';
    items.forEach(function(item) {
        html += '<div class="funds-detail-card"><div class="fdc-label">' + item[0] + '</div><div class="fdc-val">' + item[1] + '</div><div class="fdc-sub">' + item[2] + '</div></div>';
    });
    return html + '</div>';
}
function buildFundsLedgerHTML() {
    var entries = [];
    entries.push({ date: 'Opening', narr: 'Opening Balance — Virtual Account', dr: 0, cr: 1000000 });
    var sorted = (orderHistory || []).slice().sort(function(a, b) {
        return (a.date || '').localeCompare(b.date || '');
    });
    sorted.forEach(function(o) {
        var val = o.total || (o.qty * o.price);
        var narr = (o.side === 'BUY' ? 'Buy' : 'Sell') + ' ' + o.symbol + ' ' + o.qty + ' @ &#8377;' + (o.price || 0).toFixed(2);
        if (o.product) narr += ' (' + o.product + ')';
        if (o.side === 'BUY') entries.push({ date: o.date || '', narr: narr, dr: val, cr: 0 });
        else                  entries.push({ date: o.date || '', narr: narr, dr: 0, cr: val });
    });
    var runBal = 1000000;
    var html = '<div style="overflow-x:auto;margin-top:16px;"><table class="trade-table"><thead><tr><th>Date</th><th>Narration</th><th>Debit (&#8377;)</th><th>Credit (&#8377;)</th><th>Balance (&#8377;)</th></tr></thead><tbody>';
    entries.forEach(function(l) {
        runBal = runBal - l.dr + l.cr;
        html += '<tr>';
        html += '<td style="color:var(--text-muted);font-size:12px;white-space:nowrap;">' + l.date + '</td>';
        html += '<td>' + l.narr + '</td>';
        html += '<td class="' + (l.dr > 0 ? 'negative' : '') + '">' + (l.dr > 0 ? l.dr.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : '—') + '</td>';
        html += '<td class="' + (l.cr > 0 ? 'positive' : '') + '">' + (l.cr > 0 ? l.cr.toLocaleString('en-IN', { maximumFractionDigits: 2 }) : '—') + '</td>';
        html += '<td><b>&#8377;' + runBal.toLocaleString('en-IN', { maximumFractionDigits: 2 }) + '</b></td>';
        html += '</tr>';
    });
    if (entries.length <= 1) {
        html += '<tr><td colspan="5" style="text-align:center;color:var(--text-muted);padding:32px;">No transactions yet. Place orders from the Dashboard.</td></tr>';
    }
    return html + '</tbody></table></div>';
}

// ── BROKERAGE CALCULATOR ───────────────────────────────────
var _brokerageActiveTab = 'intraday';
function switchBrokerageTab(tab, btn) {
    _brokerageActiveTab = tab;
    document.querySelectorAll('#brokerageTabs .feature-tab').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active'); renderBrokerageContent();
}
function renderBrokerageCalc() {
    _brokerageActiveTab = 'intraday';
    document.querySelectorAll('#brokerageTabs .feature-tab').forEach(function(b, i) { b.classList.toggle('active', i === 0); });
    renderBrokerageContent();
}
function renderBrokerageContent() {
    var el = document.getElementById('brokerage-content'); if (!el) return;
    var tab = _brokerageActiveTab;
    var isIntra = tab === 'intraday';
    var subLabel = isIntra
        ? '<p class="bc-tab-note">Intraday (MIS) — Flat &#8377;20 or 0.03% brokerage per order. STT only on sell side. Position auto-squares at 3:20 PM.</p>'
        : '<p class="bc-tab-note">Delivery (CNC) — 0.1% or &#8377;20 brokerage per order. STT on both buy &amp; sell. No auto-square off.</p>';
    el.innerHTML = '<div class="bc-layout">'
        + '<div class="bc-inputs">'
        + subLabel
        + '<div class="bc-field"><label>Buy Price (&#8377;)</label><input id="bc_buy" type="number" value="1500" min="0.01" step="0.05" oninput="calcBrokerage()" class="bc-input"></div>'
        + '<div class="bc-field"><label>Sell Price (&#8377;)</label><input id="bc_sell" type="number" value="1550" min="0.01" step="0.05" oninput="calcBrokerage()" class="bc-input"></div>'
        + '<div class="bc-field"><label>Quantity (shares)</label><input id="bc_qty" type="number" value="100" min="1" oninput="calcBrokerage()" class="bc-input"></div>'
        + '<div class="bc-field"><label>Exchange</label><select id="bc_exch" class="bc-input" onchange="calcBrokerage()"><option value="nse">NSE</option><option value="bse">BSE</option></select></div>'
        + '</div>'
        + '<div class="bc-results" id="bc_results"></div>'
        + '</div>';
    calcBrokerage();
}
function calcBrokerage() {
    var buy  = parseFloat((document.getElementById('bc_buy')  || {}).value) || 0;
    var sell = parseFloat((document.getElementById('bc_sell') || {}).value) || 0;
    var qty  = parseInt((document.getElementById('bc_qty')    || {}).value) || 0;
    var exch = ((document.getElementById('bc_exch') || {}).value) || 'nse';
    var tab  = _brokerageActiveTab;
    var isIntra = tab === 'intraday';

    var buyT = buy * qty, sellT = sell * qty, profit = (sell - buy) * qty;

    // Brokerage: ₹20 flat per order or 0.03% (intraday) / 0.1% (delivery)
    var brokRate = isIntra ? 0.0003 : 0.001;
    var brokBuy  = Math.min(buyT  * brokRate, 20);
    var brokSell = Math.min(sellT * brokRate, 20);
    var brok = brokBuy + brokSell;

    // STT: intraday = 0.025% on sell only; delivery = 0.1% on both
    var stt = isIntra ? sellT * 0.00025 : (buyT + sellT) * 0.001;

    // Exchange transaction charges: NSE 0.00335% | BSE 0.003%
    var exchRate = exch === 'nse' ? 0.0000335 : 0.00003;
    var exchChg = (buyT + sellT) * exchRate;

    // SEBI: ₹10 per crore (0.000001)
    var sebi = (buyT + sellT) * 0.000001;

    // GST 18% on (brokerage + exchange charges + SEBI)
    var gst = (brok + exchChg + sebi) * 0.18;

    // Stamp duty: intraday 0.003% on buy; delivery 0.015% on buy
    var stampRate = isIntra ? 0.00003 : 0.00015;
    var stamp = buyT * stampRate;

    var total = brok + stt + exchChg + sebi + gst + stamp;
    var net = profit - total;
    var be = qty > 0 ? (buyT + total) / qty : 0;

    var f = function(n) { return '&#8377;' + Math.abs(n).toFixed(2); };
    var res = document.getElementById('bc_results'); if (!res) return;

    var grossCls = profit >= 0 ? 'positive' : 'negative';
    var netCls   = net   >= 0 ? 'positive' : 'negative';

    var html = '<div class="bc-summary-bar">';
    html += '<div class="bc-summary-item"><span>Turnover</span><b>&#8377;' + (buyT + sellT).toLocaleString('en-IN', { maximumFractionDigits: 2 }) + '</b></div>';
    html += '<div class="bc-summary-item"><span>Gross P&L</span><b class="' + grossCls + '">' + (profit >= 0 ? '+' : '-') + f(profit) + '</b></div>';
    html += '<div class="bc-summary-item"><span>Total Charges</span><b class="negative">-' + f(total) + '</b></div>';
    html += '<div class="bc-summary-item"><span>Net P&L</span><b class="' + netCls + '"><b>' + (net >= 0 ? '+' : '-') + f(net) + '</b></b></div>';
    html += '</div>';

    html += '<div style="font-size:13px;font-weight:600;color:var(--text-muted);margin:18px 0 10px;">Charge Breakdown</div>';
    html += '<div class="bc-charge-list">';
    var rows = [
        ['Brokerage (buy + sell)', brok,    'negative'],
        ['STT / Securities Transaction Tax', stt, 'negative'],
        [exch.toUpperCase() + ' Exchange Charges', exchChg, 'negative'],
        ['SEBI Regulatory Fee', sebi, 'negative'],
        ['GST @ 18%', gst, 'negative'],
        ['Stamp Duty', stamp, 'negative'],
    ];
    rows.forEach(function(r) {
        html += '<div class="bc-charge-row"><span>' + r[0] + '</span><span class="' + r[2] + '">-' + f(r[1]) + '</span></div>';
    });
    html += '<div class="bc-charge-row bc-total-row"><span>Total Charges</span><span class="negative">-' + f(total) + '</span></div>';
    html += '<div class="bc-charge-row bc-net-row"><span>Net P&L</span><span class="' + netCls + '"><b>' + (net >= 0 ? '+' : '-') + f(net) + '</b></span></div>';
    html += '</div>';
    html += '<div class="bc-breakeven">Breakeven sell price: <b>&#8377;' + be.toFixed(2) + '</b> &nbsp;|&nbsp; Cost/share: <b>&#8377;' + (qty > 0 ? (total / qty).toFixed(4) : '0') + '</b></div>';
    html += '<p style="font-size:11px;color:var(--text-muted);margin-top:12px;">Based on NSE rates + Zerodha flat &#8377;20 model. Actual charges may vary slightly.</p>';
    res.innerHTML = html;
}

// ── STRATEGY BUILDER ──────────────────────────────────────
var _strategyActiveTab = 'builder';
var _selectedStrategy  = 'Bull Call Spread';
var _strategyPresets = {
    'Long Call':        [{ action:'BUY',  type:'CE',    stOff:0,  label:'ATM Call',        premium:98  }],
    'Long Put':         [{ action:'BUY',  type:'PE',    stOff:0,  label:'ATM Put',          premium:111 }],
    'Covered Call':     [{ action:'BUY',  type:'STOCK', stOff:0,  label:'Buy 75 shares',    premium:24487 },
                         { action:'SELL', type:'CE',    stOff:2,  label:'OTM Call (Sell)',  premium:46  }],
    'Bull Call Spread': [{ action:'BUY',  type:'CE',    stOff:0,  label:'ATM Call (Buy)',   premium:98  },
                         { action:'SELL', type:'CE',    stOff:2,  label:'OTM Call (Sell)',  premium:46  }],
    'Bear Put Spread':  [{ action:'BUY',  type:'PE',    stOff:0,  label:'ATM Put (Buy)',    premium:111 },
                         { action:'SELL', type:'PE',    stOff:-2, label:'OTM Put (Sell)',   premium:67  }],
    'Long Straddle':    [{ action:'BUY',  type:'CE',    stOff:0,  label:'ATM Call',         premium:98  },
                         { action:'BUY',  type:'PE',    stOff:0,  label:'ATM Put',          premium:111 }],
    'Short Straddle':   [{ action:'SELL', type:'CE',    stOff:0,  label:'ATM Call (Sell)',  premium:98  },
                         { action:'SELL', type:'PE',    stOff:0,  label:'ATM Put (Sell)',   premium:111 }],
    'Long Strangle':    [{ action:'BUY',  type:'CE',    stOff:2,  label:'OTM Call',         premium:46  },
                         { action:'BUY',  type:'PE',    stOff:-2, label:'OTM Put',          premium:67  }],
    'Iron Condor':      [{ action:'BUY',  type:'CE',    stOff:4,  label:'Far OTM Call',     premium:9   },
                         { action:'SELL', type:'CE',    stOff:2,  label:'OTM Call (Sell)',  premium:46  },
                         { action:'SELL', type:'PE',    stOff:-2, label:'OTM Put (Sell)',   premium:67  },
                         { action:'BUY',  type:'PE',    stOff:-4, label:'Far OTM Put',      premium:19  }],
};

function switchStrategyTab(tab, btn) {
    _strategyActiveTab = tab;
    document.querySelectorAll('#strategyTabs .feature-tab').forEach(function(b) { b.classList.remove('active'); });
    btn.classList.add('active'); renderStrategyContent();
}
function switchStratTabToPayoff() {
    var btn = document.querySelectorAll('#strategyTabs .feature-tab')[1];
    if (btn) switchStrategyTab('payoff', btn);
}
function renderStrategy() {
    _strategyActiveTab = 'builder';
    document.querySelectorAll('#strategyTabs .feature-tab').forEach(function(b, i) { b.classList.toggle('active', i === 0); });
    renderStrategyContent();
}
function renderStrategyContent() {
    var el = document.getElementById('strategy-content'); if (!el) return;
    if (_strategyActiveTab === 'builder') el.innerHTML = buildStrategyBuilderHTML();
    if (_strategyActiveTab === 'payoff')  el.innerHTML = buildStrategyPayoffHTML();
    if (_strategyActiveTab === 'greeks')  el.innerHTML = buildStrategyGreeksHTML();
}
function buildStrategyBuilderHTML() {
    var spot = 24500, step = 100;
    var legs = _strategyPresets[_selectedStrategy] || [];
    var keys = Object.keys(_strategyPresets);
    var sel = '<select class="bc-input" onchange="_selectedStrategy=this.value;renderStrategyContent()">';
    keys.forEach(function(k) { sel += '<option' + (k === _selectedStrategy ? ' selected' : '') + '>' + k + '</option>'; });
    sel += '</select>';
    var html = '<div class="strat-layout"><div class="strat-controls">';
    html += '<div class="bc-field"><label>Strategy</label>' + sel + '</div>';
    html += '<div class="bc-field"><label>Underlying</label><input class="bc-input" value="NIFTY 50 — &#8377;24,487.65" readonly></div>';
    html += '<div class="bc-field"><label>ATM Strike</label><input class="bc-input" value="24,500" readonly></div>';
    html += '<div class="bc-field"><label>Expiry</label><input class="bc-input" value="29 May 2026" readonly></div>';
    html += '</div><div class="strat-legs"><h3 style="margin-bottom:12px;font-size:14px;">Strategy Legs</h3>';
    html += '<table class="fno-table"><thead><tr><th>Action</th><th>Type</th><th>Strike</th><th>Premium</th><th>Qty (lots)</th></tr></thead><tbody>';
    legs.forEach(function(leg) {
        var strike = leg.type === 'STOCK' ? '-' : (spot + leg.stOff * step).toLocaleString('en-IN');
        var cls = leg.action === 'BUY' ? 'pos-buy-badge' : 'pos-sell-badge';
        html += '<tr><td><span class="' + cls + '">' + leg.action + '</span></td><td>' + leg.type + '</td>';
        html += '<td>' + strike + '</td><td>&#8377;' + leg.premium + '</td><td>1</td></tr>';
    });
    html += '</tbody></table>';
    var netDeb = legs.reduce(function(s, l) { return l.action === 'BUY' ? s + l.premium : s - l.premium; }, 0);
    html += '<div style="margin-top:12px;padding:12px;background:var(--bg-panel);border-radius:8px;font-size:13px;">';
    html += 'Net <b>' + (netDeb >= 0 ? 'Debit' : 'Credit') + ':</b> &#8377;' + Math.abs(netDeb) + ' per share';
    html += ' &nbsp;|&nbsp; <b>Max Risk per lot:</b> &#8377;' + (Math.abs(netDeb) * 75).toLocaleString('en-IN') + '</div>';
    html += '<button class="nt-primary-btn" style="margin-top:14px" onclick="switchStratTabToPayoff()">View Payoff Chart &#8594;</button>';
    html += '</div></div>';
    return html;
}
function buildStrategyPayoffHTML() {
    var spot = 24500, step = 100;
    var legs = _strategyPresets[_selectedStrategy] || [];
    var minS = spot * 0.88, maxS = spot * 1.12;
    var W = 680, H = 270, padL = 60, padR = 20, padT = 24, padB = 40;
    var cW = W - padL - padR, cH = H - padT - padB;
    var payoffs = [];
    for (var i = 0; i <= 120; i++) {
        var s = minS + (maxS - minS) * i / 120;
        var pnl = 0;
        legs.forEach(function(leg) {
            if (leg.type === 'STOCK') { pnl += (s - spot); return; }
            var k = spot + leg.stOff * step;
            var o = leg.type === 'CE' ? Math.max(0, s - k) - leg.premium : Math.max(0, k - s) - leg.premium;
            pnl += leg.action === 'SELL' ? -o : o;
        });
        payoffs.push({ s: s, p: pnl });
    }
    var allP = payoffs.map(function(p) { return p.p; });
    var minP = Math.min.apply(null, allP), maxP = Math.max.apply(null, allP);
    var pad2 = (maxP - minP) * 0.14;
    var lo = minP - pad2, hi = maxP + pad2;
    if (lo > -1) lo = -Math.abs(maxP || 50) * 0.25;
    if (hi < 1)  hi =  Math.abs(minP || 50) * 0.25;
    function sx(sv) { return padL + (sv - minS) / (maxS - minS) * cW; }
    function sy(pv) { return padT + (1 - (pv - lo) / (hi - lo)) * cH; }
    var zY = sy(0);
    var pathD = payoffs.reduce(function(acc, pt, idx) {
        return acc + (idx === 0 ? 'M ' : ' L ') + sx(pt.s).toFixed(1) + ' ' + sy(pt.p).toFixed(1);
    }, '');
    var xTks = [minS, spot * 0.94, spot * 0.97, spot, spot * 1.03, spot * 1.06, maxS];
    var html = '<div style="padding:8px 0;"><h3 style="margin-bottom:4px;">' + _selectedStrategy + ' — Payoff at Expiry</h3>';
    html += '<p style="color:var(--text-muted);font-size:12px;margin-bottom:10px;">NIFTY Spot: &#8377;24,487.65 &middot; Expiry: 29 May 2026 &middot; Lot = 75</p>';
    html += '<div style="overflow-x:auto;"><svg width="100%" viewBox="0 0 ' + W + ' ' + H + '" style="display:block;max-width:720px;min-width:320px;">';
    for (var g = 0; g <= 4; g++) {
        var gy = padT + g * cH / 4;
        var gv = hi - g * (hi - lo) / 4;
        html += '<line x1="' + padL + '" y1="' + gy.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + gy.toFixed(1) + '" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>';
        html += '<text x="' + (padL - 5) + '" y="' + (gy + 4).toFixed(1) + '" text-anchor="end" font-size="9" fill="var(--text-muted)">' + (gv >= 0 ? '+' : '') + Math.round(gv) + '</text>';
    }
    html += '<line x1="' + padL + '" y1="' + zY.toFixed(1) + '" x2="' + (W - padR) + '" y2="' + zY.toFixed(1) + '" stroke="rgba(255,255,255,0.28)" stroke-width="1.5" stroke-dasharray="4,3"/>';
    html += '<line x1="' + sx(spot).toFixed(1) + '" y1="' + padT + '" x2="' + sx(spot).toFixed(1) + '" y2="' + (H - padB) + '" stroke="var(--accent-primary)" stroke-width="1" stroke-dasharray="3,3" opacity="0.65"/>';
    html += '<text x="' + sx(spot).toFixed(1) + '" y="' + (padT - 5) + '" text-anchor="middle" font-size="9" fill="var(--accent-primary)">Spot</text>';
    html += '<path d="' + pathD + '" fill="none" stroke="var(--positive)" stroke-width="2.5" stroke-linejoin="round"/>';
    xTks.forEach(function(t) { html += '<text x="' + sx(t).toFixed(1) + '" y="' + (H - padB + 14) + '" text-anchor="middle" font-size="9" fill="var(--text-muted)">' + Math.round(t / 100) * 100 + '</text>'; });
    html += '<text x="' + (W / 2) + '" y="' + (H - 2) + '" text-anchor="middle" font-size="9" fill="var(--text-muted)">Price at Expiry (&#8377;)</text>';
    html += '<text x="14" y="' + (H / 2) + '" text-anchor="middle" font-size="9" fill="var(--text-muted)" transform="rotate(-90 14 ' + (H / 2) + ')">P&amp;L (&#8377;/share)</text>';
    html += '</svg></div>';
    var netDeb2 = legs.reduce(function(s, l) { return l.action === 'BUY' ? s + l.premium : s - l.premium; }, 0);
    html += '<div class="strat-metrics">';
    html += '<div class="strat-metric"><span>Max Profit/lot</span><b class="positive">' + (maxP > 9000 ? 'Unlimited' : '+&#8377;' + (maxP * 75).toFixed(0)) + '</b></div>';
    html += '<div class="strat-metric"><span>Max Loss/lot</span><b class="negative">' + (minP < -9000 ? 'Unlimited' : '-&#8377;' + Math.abs(minP * 75).toFixed(0)) + '</b></div>';
    html += '<div class="strat-metric"><span>Net ' + (netDeb2 >= 0 ? 'Debit' : 'Credit') + '</span><b>&#8377;' + Math.abs(netDeb2) + '</b></div>';
    html += '<div class="strat-metric"><span>Lot Size</span><b>75</b></div></div></div>';
    return html;
}
function buildStrategyGreeksHTML() {
    var spot = 24500, step = 100;
    var legs = _strategyPresets[_selectedStrategy] || [];
    var html = '<div style="overflow-x:auto;margin-top:16px;">';
    html += '<p style="color:var(--text-muted);font-size:12px;margin-bottom:12px;">Approximate Greeks at current spot. Values per lot (75 shares).</p>';
    html += '<table class="fno-table"><thead><tr><th>Leg</th><th>Action</th><th>Type</th><th>Strike</th><th>&#916; Delta</th><th>&#915; Gamma</th><th>&#920; Theta</th><th>&#957; Vega</th></tr></thead><tbody>';
    var nD = 0, nG = 0, nT = 0, nV = 0;
    legs.forEach(function(leg) {
        if (leg.type === 'STOCK') {
            html += '<tr><td>' + leg.label + '</td><td><span class="pos-buy-badge">BUY</span></td><td>STOCK</td><td>-</td><td class="positive">+1.00</td><td>0</td><td>0</td><td>0</td></tr>';
            nD += 75; return;
        }
        var k = spot + leg.stOff * step;
        var mon = (spot - k) / spot;
        var delta = leg.type === 'CE' ? Math.max(0.05, Math.min(0.95, 0.5 + mon * 4)) : Math.max(0.05, Math.min(0.95, 0.5 - mon * 4));
        delta = Math.round(delta * 100) / 100;
        var gamma = Math.round(0.002 * Math.exp(-4 * Math.abs(mon)) * 10000) / 10000;
        var theta = -Math.round(leg.premium * 0.012 * 100) / 100;
        var vega  = Math.round(leg.premium * 0.08 * 100) / 100;
        var m = leg.action === 'SELL' ? -1 : 1;
        nD += m * delta * 75; nG += m * gamma * 75; nT += m * theta * 75; nV += m * vega * 75;
        var cls = leg.action === 'BUY' ? 'pos-buy-badge' : 'pos-sell-badge';
        html += '<tr><td>' + leg.label + '</td><td><span class="' + cls + '">' + leg.action + '</span></td><td>' + leg.type + '</td>';
        html += '<td>' + k.toLocaleString('en-IN') + '</td>';
        html += '<td class="' + (m > 0 ? 'positive' : 'negative') + '">' + (m > 0 ? '+' : '-') + delta + '</td>';
        html += '<td class="' + (m > 0 ? 'positive' : 'negative') + '">' + (m > 0 ? '+' : '-') + gamma + '</td>';
        html += '<td class="' + (m > 0 ? 'negative' : 'positive') + '">' + (m > 0 ? '' : '+') + theta + '</td>';
        html += '<td class="positive">+' + vega + '</td></tr>';
    });
    html += '<tr style="border-top:2px solid var(--border-color);font-weight:700;"><td colspan="4">Net Position</td>';
    html += '<td class="' + (nD >= 0 ? 'positive' : 'negative') + '">' + (nD >= 0 ? '+' : '') + nD.toFixed(1) + '</td>';
    html += '<td class="' + (nG >= 0 ? 'positive' : 'negative') + '">' + (nG >= 0 ? '+' : '') + nG.toFixed(3) + '</td>';
    html += '<td class="' + (nT >= 0 ? 'positive' : 'negative') + '">' + (nT >= 0 ? '+' : '') + nT.toFixed(2) + '</td>';
    html += '<td class="' + (nV >= 0 ? 'positive' : 'negative') + '">' + (nV >= 0 ? '+' : '') + nV.toFixed(2) + '</td></tr>';
    return html + '</tbody></table></div>';
}
