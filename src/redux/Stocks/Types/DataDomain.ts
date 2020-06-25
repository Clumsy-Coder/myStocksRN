/**
 * Data structure for fetching quote for a single symbol.
 *
 * https://iexcloud.io/docs/api/#quote
 */
export interface Quote {
  /**
   * Refers to the latest relevant **price** of the security.
   *
   * **Use this to get the latest price**
   * */
  latestPrice: number;
  /**
   * Refers to the latest total market **volume** of the stock across all markets.
   *
   * **Use this to get the latest volume**
   */
  latestVolume: number;
  /** Refers to the machine readable epoch timestamp of when **latestPrice** was last updated. */
  latestUpdate: number;
  /**
   * Refers to a human readable time/date of when **latestPrice** was last updated.
   * The format will vary based on **latestSource** is intended to be displayed to a user.
   * Use **latestUpdate** for machine readable timestamp.
   */
  latestTime: string;
  /** Refers to the source of the latest price. */
  calculationPrice?: 'tops' | 'sip' | 'previousclose' | 'close';
  /** This will represent a human readable description of the source of latestPrice. */
  latestSource?: 'IEX real time price' | '15 minute delayed price' | 'Close' | 'Previous close';
  /** Refers to the change in price between **latestPrice** and **previousClose** */
  change: number;
  /**
   * Refers to the percent change in price between **latestPrice** and **previousClose**.
   * For example, a 5% change would be represented as 0.05.
   * You can use the query string parameter **displayPercent** to return this field multiplied by 100.
   * So, 5% change would be represented as 5.
   */
  changePercent: number;
  /**
   * Total volume for the stock, but only updated after market open.
   * To get premarket volume, use **latestVolume**
   */
  volume: number;
  /**
   * Refers to the official open price from the SIP.
   * 15 minute delayed (can be **null** after 00:00 ET, before 9:45 and weekends)
   */
  open: number | null;
  /** Refers to the official listing exchange time for the open from the SIP. 15 minute delayed */
  openTime?: number;
  /** Refers to the official close price from the SIP. 15 minute delayed */
  close: number | null;
  /** Refers to the official listing exchange time for the close from the SIP. 15 minute delayed */
  closeTime?: number;
  /** Refers to the previous trading day closing price. */
  previousClose: number;
  /** Refers to the previous trading day volume. */
  previousVolume: number;
  /**
   * Refers to the market-wide highest price from the SIP.
   * 15 minute delayed during normal market hours 9:30 - 16:00 (null before 9:45 and weekends).
   */
  high: number | null;
  /**
   * Refers to the market-wide lowest price from the SIP.
   * 15 minute delayed during normal market hours 9:30 - 16:00 (null before 9:45 and weekends).
   */
  low: number | null;
  /**
   * Refers to the 15 minute delayed price outside normal market hours 0400 - 0930 ET and 1600 - 2000 ET.
   * This provides pre market and post market price.
   * This is purposefully separate from latestPrice so users can display the two prices separately.
   */
  extendedPrice?: number;
  /** Refers to the price change between **extendedPrice** and **latestPrice**. */
  extendedChange?: number;
  /**  Refers to the price change percent between **extendedPrice** and **latestPrice**. */
  extendedChangePercent?: number;
  /** Refers to the last update time of **extendedPrice** */
  extendedPriceTime?: number;
  /** Refers to the 15 minute delayed market price from the SIP during normal market hours 9:30 - 16:00 ET. */
  delayedPrice?: number;
  /** Refers to the last update time of the delayed market price during normal market hours 9:30 - 16:00 ET. */
  delayedPriceTime?: number;
  /** Refers to the 15 minute delayed odd Lot trade price from the SIP during normal market hours 9:30 - 16:00 ET. */
  oddLotDelayedPrice?: number;
  /** Refers to the last update time of the odd Lot trade price during normal market hours 9:30 - 16:00 ET. */
  oddLotDelayedPriceTime?: number;
  /** is calculated in real time using latestPrice. */
  marketCap: number;
  /** Refers to the 30 day average volume. */
  avgTotalVolume: number;
  /** Refers to the adjusted 52 week high. */
  week52High: number;
  /** Refers to the adjusted 52 week low. */
  week52Low: number;
  /** Refers to the price change percentage from start of year to previous close. */
  ytdChange: number;
  /** Refers to the price of the last trade on IEX. */
  iexRealtimePrice?: number;
  /** Refers to the size of the last trade on IEX. */
  iexRealtimeSize?: number;
  /**
   * Refers to the last update time of **iexRealtimePrice** in milliseconds since midnight Jan 1, 1970 UTC or -1 or 0.
   * If the value is -1 or 0, IEX has not quoted the symbol in the trading day.
   */
  iexLastUpdated?: number | '-1' | '0';
  /** Refers to IEX’s percentage of the market in the stock. */
  iexMarketPercent?: number;
  /** Refers to shares traded in the stock on IEX. */
  iexVolume?: number;
  /** Refers to the best bid price on IEX. */
  iexBidPrice?: number;
  /** Refers to amount of shares on the bid on IEX. */
  iexBidSize?: number;
  /** Refers to the best ask price on IEX. */
  iexAskPrice?: number;
  /** Refers to amount of shares on the ask on IEX. */
  iexAskSize?: number;
  /** Refers to the stock ticker. */
  symbol: string;
  /** Refers to the company name. */
  companyName: string;
  /** Refers to the primary listing exchange for the symbol. */
  primaryExchange: string;
  /** Refers to the price-to-earnings ratio for the company. */
  peRatio: number;
  /**	Epoch timestamp in milliseconds of the last market hours trade excluding the closing auction trade. */
  lastTradeTime?: number;
  /** For US stocks, indicates if the market is in normal market hours. Will be false during extended hours trading. */
  isUSMarketOpen?: boolean;
}

/**
 * Data structure when fetching Stock Chart for a single symbol.
 *
 * https://iexcloud.io/docs/api/#charts
 */
export interface Chart {
  /** Formatted as YYYY-MM-DD */
  date: string;
  /** Adjusted data for historical dates. Split adjusted only. */
  open: number;
  /**  Adjusted data for historical dates. Split adjusted only. */
  high: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  low: number;
  /** Adjusted data for historical dates. Split adjusted only. */
  close: number;
  /** Unadjusted data for historical dates.  */
  volume: number;
  /** Unadjusted data for historical dates. */
  uOpen?: number;
  /** Unadjusted data for historical dates. */
  uHigh?: number;
  /** Unadjusted data for historical dates. */
  uLow?: number;
  /** Unadjusted data for historical dates. */
  uClose?: number;
  /** Unadjusted data for historical dates. */
  uVolume?: number;
  /**  Change from previous trading day. */
  change: number;
  /**  Change percent from previous trading day. */
  changePercent: number;
  /** A human readable format of the date depending on the range. */
  label: string;
  /** Percent change of each interval relative to first value. Useful for comparing multiple stocks.  */
  changeOverTime: number;
}

/**
 * Path Parameter for fetching stock Chart data.
 * This specifies the data range.
 *
 * - **max**: All available data up to 15 years
 * - **5y**: Five years
 * - **2y**: Two years
 * - **1y**: One year
 * - **ytd**: Year-to-date
 * - **6m**: Six months
 * - **3m**: Three months
 * - **1m**: One month (default)
 * - **1mm**:	One month. Historically adjusted market-wide data in 30 minute intervals
 * - **5d**: Five Days. Historically adjusted market-wide data by day.
 * - **5dm**:	Five Days. Historically adjusted market-wide data in 10 minute intervals
 * - **date**: Specific date. If used with the query parameter chartByDay, then this returns historical OHLCV data for that date. Otherwise, it returns data by minute for a specified date, if available. Date format **YYYYMMDD**. Currently supporting trailing 30 calendar days of minute bar data.
 * - **dynamic**: One day. Will return **1d** or **1m** data depending on the day or week and time of day. Intraday per minute data is only returned during market hours.
 */
export type ChartRange =
  | 'max'
  | '5y'
  | '2y'
  | '1y'
  | 'ytd'
  | '6m'
  | '3m'
  | '1m'
  | '1mm'
  | '5d'
  | '5dm'
  | 'date'
  | 'dynamic';

/**
 * Data structure for fetching symbols
 *
 * https://iexcloud.io/docs/api/#symbols
 */
export interface Symbols {
  /** refers to the symbol represented in Nasdaq Integrated symbology (INET). */
  symbol: string;
  /** refers to Exchange using IEX Supported Exchanges list. */
  exchange: string;
  /** refers to the name of the company or security. */
  name: string;
  /** refers to the date the symbol reference data was generated. YYYY-MM-DD format */
  date: string;
  /** will be true if the symbol is enabled for trading on IEX. */
  isEnabled?: boolean;
  /**
   * refers to the common issue type
   *  - ad - ADR
   *  - re - REIT
   *  - ce - Closed end fund
   *  - si - Secondary Issue
   *  - lp - Limited Partnerships
   *  - cs - Common Stock
   *  - et - ETF
   *  - wt - Warrant
   *  - oef - Open Ended Fund
   *  - cef - Closed Ended Fund
   *  - ps - Preferred Stock
   *  - ut - Unit
   *  - struct - Structured Product
   */
  type?:
    | 'ad'
    | 're'
    | 'ce'
    | 'si'
    | 'lp'
    | 'cs'
    | 'et'
    | 'wt'
    | 'oef'
    | 'cef'
    | 'ps'
    | 'ut'
    | 'struct';
  /** refers to the country code for the symbol using ISO 3166-1 alpha-2 */
  region: string;
  /** refers to the currency the symbol is traded in using ISO 4217 */
  currency: string;
  /** unique ID applied by IEX to track securities through symbol changes. */
  iexId?: string;
  /** The FIGI id for the security if available */
  figi?: string;
  /** CIK number for the security if available */
  cik?: string;
}

/**
 * A list of strings that indicate what data to fetch **Stock Quote**.
 * Instead of fetching everything of **Stocks Quote**, fetch only the necessary data.
 *
 * https://iexcloud.io/docs/api/#quote
 *
 * https://iexcloud.io/docs/api/#filter-results
 */
export const quoteFilter: (keyof Quote)[] = [
  'symbol',
  'companyName',
  'primaryExchange',
  'latestPrice',
  'latestTime',
  'latestUpdate',
  'latestVolume',
  'extendedPrice',
  'extendedChange',
  'extendedChangePercent',
  'previousClose',
  'previousVolume',
  'change',
  'changePercent',
  'avgTotalVolume',
  'marketCap',
  'peRatio',
  'week52High',
  'week52Low',
  'ytdChange',
  'open',
  'close',
  'high',
  'low',
  'volume',
  'previousClose',
];

/**
 * A list of strings that indicate what data to fetch when fetching **Stock Charts**.
 * Instead of fetching everything of **Stock Charts**, fetch only the necessary data.
 *
 * https://iexcloud.io/docs/api/#charts
 *
 * https://iexcloud.io/docs/api/#filter-results
 */
export const chartFilter: (keyof Chart)[] = [
  'date',
  'label',
  'open',
  'close',
  'high',
  'low',
  'volume',
  'change',
  'changePercent',
  'changeOverTime',
];

/**
 * A union of Stocks data domain types
 */
export type StocksDataDomain = Quote | Chart;
