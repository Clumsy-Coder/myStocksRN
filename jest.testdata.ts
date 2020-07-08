import { DataDomain, Reducer as StocksReducer } from '@redux/Stocks/Types';
import { Reducer as FavoritesReducer } from '@redux/Favorites/Types';
import { AppState } from '@redux/index.reducers';

export const baseStocksState: StocksReducer.ReducerState = {
  symbols: {},
  symbolsMetadata: {
    fetching: false,
    data: [],
    error: undefined,
  },
};

export const baseStockChartState: StocksReducer.ChartData = {
  data: [],
  fetching: false,
  error: undefined,
};

export const baseFavoritesState: FavoritesReducer.ReducerState = {
  symbols: [],
};

export const baseAppState: AppState = {
  Stocks: { ...baseStocksState },
  Favorites: { ...baseFavoritesState },
};

export const stockSymbol1 = 'IBM';
export const stockSymbol2 = 'AAPL';
export const stockSymbol3 = 'SHOP';
export const stockSymbol4 = 'AMZN';

export const stockQuoteData1: DataDomain.Quote = {
  symbol: 'IBM',
  companyName: 'International Business Machines Corp.',
  primaryExchange: 'New York Stock Exchange',
  latestPrice: 122.47,
  latestTime: 'June 19, 2020',
  latestUpdate: 1592596802601,
  latestVolume: 2865362,
  extendedPrice: 120,
  extendedChange: 2,
  extendedChangePercent: 0.1,
  previousClose: 124.16,
  previousVolume: 2865362,
  change: -1.69,
  changePercent: -1.361,
  avgTotalVolume: 4866120,
  marketCap: 108740133240,
  peRatio: 12.05,
  week52High: 158.75,
  week52Low: 90.56,
  ytdChange: -9.6759,
  close: 130,
  open: 110,
  high: 140,
  low: 100,
  volume: 2865320,
};

export const stockQuoteData2: DataDomain.Quote = {
  symbol: 'AAPL',
  companyName: 'Apple, Inc.',
  primaryExchange: 'NASDAQ',
  latestPrice: 349.55,
  latestTime: 'June 19, 2020',
  latestUpdate: 1592596799999,
  latestVolume: 24205100,
  extendedPrice: 320,
  extendedChange: 10,
  extendedChangePercent: 1,
  previousClose: 351.73,
  previousVolume: 24205096,
  change: -2.18,
  changePercent: -0.62,
  avgTotalVolume: 33063545,
  marketCap: 1515068547000,
  peRatio: 27.18,
  week52High: 356.56,
  week52Low: 192.58,
  ytdChange: 16.4867,
  close: 350,
  open: 340,
  high: 400,
  low: 200,
  volume: 24205100,
};

export const stockQuoteData3: DataDomain.Quote = {
  symbol: 'SHOP',
  companyName: 'Shopify, Inc.',
  primaryExchange: 'New York Stock Exchange',
  latestPrice: 881,
  latestTime: 'June 19, 2020',
  latestUpdate: 1592596802394,
  latestVolume: 3278930,
  extendedPrice: 888,
  extendedChange: 7,
  extendedChangePercent: 0.2,
  previousClose: 863.56,
  previousVolume: 3085810,
  change: 17.44,
  changePercent: 2.02,
  avgTotalVolume: 3278991,
  marketCap: 103287075331,
  peRatio: -758.11,
  week52High: 895.56,
  week52Low: 281.69,
  ytdChange: 113.77550000000001,
  close: 888,
  open: 801,
  high: 1000,
  low: 200,
  volume: 3278111,
};

export const stockQuoteData4: DataDomain.Quote = {
  symbol: 'AMZN',
  companyName: 'Amazon.com, Inc.',
  primaryExchange: 'NASDAQ',
  latestPrice: 2671.13,
  latestTime: 'June 19, 2020',
  latestUpdate: 1592596797333,
  latestVolume: 2487774,
  extendedPrice: 2609,
  extendedChange: 12,
  extendedChangePercent: 1.5,
  previousClose: 2653.98,
  previousVolume: 2487774,
  change: 17.15,
  changePercent: 0.6459999999999999,
  avgTotalVolume: 3808703,
  marketCap: 1332295536880,
  peRatio: 125.32,
  week52High: 2722.35,
  week52Low: 1626.03,
  ytdChange: 40.4756,
  close: 2650,
  open: 2668,
  high: 3000,
  low: 1500,
  volume: 2487733,
};

export const stockChartData1: DataDomain.Chart[] = [
  {
    date: '2020-06-12',
    label: 'Jun 12',
    open: 121.25,
    close: 121.91,
    high: 123.12,
    low: 119.28,
    volume: 6220327,
    change: 0,
    changePercent: 0,
    changeOverTime: 0,
  },
  {
    date: '2020-06-15',
    label: 'Jun 15',
    open: 119.19,
    close: 121.65,
    high: 122.37,
    low: 118.29,
    volume: 5151240,
    change: -0.26,
    changePercent: -0.2133,
    changeOverTime: -0.002133,
  },
];

export const stockChartData2: DataDomain.Chart[] = [
  {
    date: '2020-06-12',
    label: 'Jun 12',
    open: 344.72,
    close: 338.8,
    high: 347.8,
    low: 334.22,
    volume: 50036513,
    change: 0,
    changePercent: 0,
    changeOverTime: 0,
  },
  {
    date: '2020-06-15',
    label: 'Jun 15',
    open: 333.25,
    close: 342.99,
    high: 345.68,
    low: 332.58,
    volume: 34702230,
    change: 4.19,
    changePercent: 1.2367,
    changeOverTime: 0.012367,
  },
];

export const stockSearchData1 = {
  bestMatches: [
    {
      '1. symbol': 'IBM',
      '2. name': 'International Business Machines Corporation',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'IBMM',
      '2. name': 'iShares iBonds Dec 2024 Term Muni Bond ETF',
      '3. type': 'ETF',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '0.8571',
    },
  ],
};

export const stockSearchData2 = {
  bestMatches: [
    {
      '1. symbol': 'AAPL',
      '2. name': 'Apple Inc.',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'AAPL.ARG',
      '2. name': 'Apple Inc.',
      '3. type': 'Equity',
      '4. region': 'Argentina',
      '5. marketOpen': '11:00',
      '6. marketClose': '17:00',
      '7. timezone': 'UTC-03',
      '8. currency': 'ARS',
      '9. matchScore': '0.7273',
    },
  ],
};

export const stockSearchData3 = {
  bestMatches: [
    {
      '1. symbol': 'SHOP',
      '2. name': 'Shopify Inc.',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'TTSH',
      '2. name': 'Tile Shop Holdings Inc.',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '0.7273',
    },
  ],
};

export const stockMetadata1 = {
  '1. symbol': 'IBM',
  '2. name': 'International Business Machines Corporation',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

export const stockMetadata2 = {
  '1. symbol': 'AAPL',
  '2. name': 'Apple Inc.',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

export const stockMetadata3 = {
  '1. symbol': 'SHOP',
  '2. name': 'Shopify Inc.',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

export const stockMetadata4 = {
  '1. symbol': 'AMZN',
  '2. name': 'Amazon.com Inc.',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

export const symbolsMetadata1: DataDomain.Symbols = {
  symbol: 'IBM',
  exchange: 'NYS',
  name: 'International Business Machines Corporation',
  date: '2020-06-19',
  type: 'cs',
  iexId: 'IEX_534A593238312D52',
  region: 'US',
  currency: 'USD',
  isEnabled: true,
  figi: 'BBG000BLNNH6',
  cik: '51143',
};

export const symbolsMetadata2: DataDomain.Symbols = {
  symbol: 'AAPL',
  exchange: 'NAS',
  name: 'Apple Inc.',
  date: '2020-06-19',
  type: 'cs',
  iexId: 'IEX_4D48333344362D52',
  region: 'US',
  currency: 'USD',
  isEnabled: true,
  figi: 'BBG000B9XRY4',
  cik: '320193',
};

export const symbolsMetadata3: DataDomain.Symbols = {
  symbol: 'SHOP',
  exchange: 'NYS',
  name: 'Shopify Inc. Class A',
  date: '2020-06-19',
  type: 'cs',
  iexId: 'IEX_5643305A37472D52',
  region: 'US',
  currency: 'USD',
  isEnabled: true,
  figi: 'BBG008HBD923',
  cik: '1594805',
};

export const symbolsMetadata4: DataDomain.Symbols = {
  symbol: 'AMZN',
  exchange: 'NAS',
  name: 'Amazon.com Inc.',
  date: '2020-06-19',
  type: 'cs',
  iexId: 'IEX_4D434E59594C2D52',
  region: 'US',
  currency: 'USD',
  isEnabled: true,
  figi: 'BBG000BVPV84',
  cik: '1018724',
};
