/*
██████╗  █████╗ ████████╗ █████╗     ██████╗  ██████╗ ███╗   ███╗ █████╗ ██╗███╗   ██╗
██╔══██╗██╔══██╗╚══██╔══╝██╔══██╗    ██╔══██╗██╔═══██╗████╗ ████║██╔══██╗██║████╗  ██║
██║  ██║███████║   ██║   ███████║    ██║  ██║██║   ██║██╔████╔██║███████║██║██╔██╗ ██║
██║  ██║██╔══██║   ██║   ██╔══██║    ██║  ██║██║   ██║██║╚██╔╝██║██╔══██║██║██║╚██╗██║
██████╔╝██║  ██║   ██║   ██║  ██║    ██████╔╝╚██████╔╝██║ ╚═╝ ██║██║  ██║██║██║ ╚████║
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝  ╚═╝    ╚═════╝  ╚═════╝ ╚═╝     ╚═╝╚═╝  ╚═╝╚═╝╚═╝  ╚═══╝

*/

/**
 * Data format when fetching stock quote
 * check https://iexcloud.io/docs/api/#quote
 */
export interface StockQuote {
  symbol: string; // stock ticker. ex: AAPL
  companyName: string; // company name
  primaryExchange: string; // Refers to the primary listing exchange for the symbol
  latestPrice: number; // Refers to the latest relevant price of the security which is derived from multiple sources
  latestVolume: number; // Refers to the latest total market volume of the stock across all markets
  latestUpdate: number; // latest update time in epoch represented in milliseconds
  latestTime: string; // latest update time in human readable format
  change: number; // Refers to the change in price between latestPrice and previousClose
  changePercent: number; // Refers to the percent change in price between latestPrice and previousClose
  open: number; // open stock price
  close: number; // close stock price
  high: number | null; // highest stock price during stock hours. null before 9:45 and weekends
  low: number | null; // lowest stock price during stock hours. null before 9:45 and weekends
  week52High: number; // highest stock price in the last 52 weeks
  week52Low: number; // lowest stock price in the last 52 weeks
  marketCap: number; // is calculated in real time using latestPrice
  ytdChange: number; // Refers to the price change percentage from start of year to previous close
  peRatio: number; // Refers to the price-to-earnings ratio for the company
  // volume: number; // Total volume for the stock, but only updated after market open
  avgTotalVolume: number;
  previousClose: number; // Refers to the previous trading day closing price
  extendedPrice: number; // Refers to the 15 minute delayed price outside normal market hours 0400 - 0930 ET and 1600 - 2000 ET
  extendedChange: number; // Refers to the price change between extendedPrice and latestPrice
  extendedChangePercent: number; // Refers to the price change percent between extendedPrice and latestPrice
  previousVolume: number; // Refers to the previous trading day volume

  // openTime: number;
  // closeTime: number;
  // openSource: string;
  // closeSource: string;
  // highTime: number;
  // highSource: string;
  // lowTime: number;
  // lowSource: string;

  // delayedPrice: number;
  // delayedPriceTime: number;
  // oddLotDelayedPrice: number;
  // oddLotDelayedPriceTime: number;
  // extendedPriceTime: number;
  // iexRealtimePrice: number;
  // iexRealtimeSize: number;
  // iexLastUpdated: number;
  // iexMarketPercent: number;
  // iexVolume: number;
  // iexBidPrice: number;
  // iexBidSize: number;
  // iexAskPrice: number;
  // iexAskSize: number;
  // iexOpen: null;
  // iexOpenTime: null;
  // iexClose: number;
  // iexCloseTime: number;
  // lastTradeTime: number;
  // isUSMarketOpen: Boolean;
}

/**
 * Data format when fetching stock chart data.
 * check https://iexcloud.io/docs/api/#charts
 * check https://iexcloud.io/docs/api/#historical-prices
 * check https://iexcloud.io/docs/api/#intraday-prices
 */
export interface StockChart {
  date: string; // Formatted as YYYY-MM-DD
  open: number; // Adjusted data for historical dates. Split adjusted only
  close: number; // Adjusted data for historical dates. Split adjusted only
  high: number; // Adjusted data for historical dates. Split adjusted only
  low: number; // Adjusted data for historical dates. Split adjusted only
  volume: number; // Adjusted data for historical dates. Split adjusted only
  currency: string;
  change: number; // Change from previous trading day
  changePercent: number; // Change percent from previous trading day
  label: string; // A human readable format of the date depending on the range
  changeOverTime: number; // Percent change of each interval relative to first value. Useful for comparing multiple stocks
  // uClose: number; // Unadjusted data for historical dates
  // uOpen: number; // Unadjusted data for historical dates
  // uHigh: number; // Unadjusted data for historical dates
  // uLow: number; // Unadjusted data for historical dates
  // uVolume: number; // Unadjusted data for historical dates
}

// ---------------------------------------------------------------------------------------------- //
/*
██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗██████╗
██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗
██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  ██████╔╝
██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  ██╔══██╗
██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗██║  ██║
╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝

*/

/**
 * Stocks reducer state
 */
export interface StockState {
  [symbol: string]: {
    quote: {
      fetching: boolean;
      data?: StockQuote;
      error?: Error;
    };
    chart?: {
      fetching: boolean;
      data?: StockChart[];
      error?: Error;
    };
  };
}

// ---------------------------------------------------------------------------------------------- //
/*
 █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗    ████████╗██╗   ██╗██████╗ ███████╗███████╗
██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║    ╚══██╔══╝╚██╗ ██╔╝██╔══██╗██╔════╝██╔════╝
███████║██║        ██║   ██║██║   ██║██╔██╗ ██║       ██║    ╚████╔╝ ██████╔╝█████╗  ███████╗
██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║       ██║     ╚██╔╝  ██╔═══╝ ██╔══╝  ╚════██║
██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║       ██║      ██║   ██║     ███████╗███████║
╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝       ╚═╝      ╚═╝   ╚═╝     ╚══════╝╚══════╝

*/

/**
 * Stocks action types
 */
export enum ActionTypesEnum {
  FETCH_STOCK_QUOTE = 'STOCKS/FETCH_STOCK_QUOTE',
  FETCH_STOCK_QUOTE_PENDING = 'STOCKS/FETCH_STOCK_QUOTE_PENDING',
  FETCH_STOCK_QUOTE_FULFILLED = 'STOCKS/FETCH_STOCK_QUOTE_FULFILLED',
  FETCH_STOCK_QUOTE_REJECTED = 'STOCKS/FETCH_STOCK_QUOTE_REJECTED',

  FETCH_STOCK_CHART = 'STOCKS/FETCH_STOCK_CHART',
  FETCH_STOCK_CHART_PENDING = 'STOCKS/FETCH_STOCK_CHART_PENDING',
  FETCH_STOCK_CHART_FULFILLED = 'STOCKS/FETCH_STOCK_CHART_FULFILLED',
  FETCH_STOCK_CHART_REJECTED = 'STOCKS/FETCH_STOCK_CHART_REJECTED',
}

// ---------------------------------------------------------------------------------------------- //
/*
 █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗     ██████╗██████╗ ███████╗ █████╗ ████████╗ ██████╗ ██████╗ ███████╗
██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║    ██╔════╝██╔══██╗██╔════╝██╔══██╗╚══██╔══╝██╔═══██╗██╔══██╗██╔════╝
███████║██║        ██║   ██║██║   ██║██╔██╗ ██║    ██║     ██████╔╝█████╗  ███████║   ██║   ██║   ██║██████╔╝███████╗
██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║    ██║     ██╔══██╗██╔══╝  ██╔══██║   ██║   ██║   ██║██╔══██╗╚════██║
██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║    ╚██████╗██║  ██║███████╗██║  ██║   ██║   ╚██████╔╝██║  ██║███████║
╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝     ╚═════╝╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚═╝  ╚═╝╚══════╝

*/

/**
 * Fetch Stock Quote action creator.
 */
export interface FetchStockQuoteAC {
  type: ActionTypesEnum.FETCH_STOCK_QUOTE;
  readonly stockSymbol: string; // stock symbol
}

/**
 * Fetch Stock Quote pending action creator
 */
export interface FetchStockQuotePendingAC {
  type: ActionTypesEnum.FETCH_STOCK_QUOTE_PENDING;
  readonly stockSymbol: string;
}

/**
 * Fetch Stock Quote fulfilled action creator
 */
export interface FetchStockQuoteFulfilledAC {
  type: ActionTypesEnum.FETCH_STOCK_QUOTE_FULFILLED;
  readonly stockSymbol: string;
  readonly payload: { data: StockQuote };
}

/**
 * Fetch Stock Quote rejected action creator
 */
export interface FetchStockQuoteRejectedAC {
  type: ActionTypesEnum.FETCH_STOCK_QUOTE_REJECTED;
  readonly stockSymbol: string;
  readonly error: Error;
}

/**
 * Union of action creators for Stock Quote
 * Check {@link FetchStockQuoteAC}
 * Check {@link FetchStockQuotePendingAC}
 * Check {@link FetchStockQuoteFulfilledAC}
 * Check {@link FetchStockQuoteRejectedAC}
 */
export type StockQuoteAction =
  | FetchStockQuoteAC
  | FetchStockQuotePendingAC
  | FetchStockQuoteFulfilledAC
  | FetchStockQuoteRejectedAC;

// ---------------------------------------------------------------------------------------------- //
// get stock chart action creator

/**
 * Fetch Stock Chart action creator
 */
export interface FetchStockChartAC {
  type: ActionTypesEnum.FETCH_STOCK_CHART;
  readonly stockSymbol: string;
}

/**
 * Fetch Stock Chart pending action creator
 */
export interface FetchStockChartPendingAC {
  type: ActionTypesEnum.FETCH_STOCK_CHART_PENDING;
  readonly stockSymbol: string;
}

/**
 * Fetch Stock Chart fulfilled action creator
 */
export interface FetchStockChartFulfilledAC {
  type: ActionTypesEnum.FETCH_STOCK_CHART_FULFILLED;
  readonly stockSymbol: string;
  readonly payload: { data: StockChart[] };
}

/**
 * Fetch Stock Chart rejected action creator
 */
export interface FetchStockChartRejectedAC {
  type: ActionTypesEnum.FETCH_STOCK_CHART_REJECTED;
  readonly stockSymbol: string;
  readonly error: Error;
}

/**
 * Union of action creators for Stock Chart
 * Check {@link FetchStockChartAC}
 * Check {@link FetchStockChartPendingAC}
 * Check {@link FetchStockChartFulfilledAC}
 * Check {@link FetchStockChartRejectedAC}
 */
export type StockChartAction =
  | FetchStockChartAC
  | FetchStockChartPendingAC
  | FetchStockChartFulfilledAC
  | FetchStockChartRejectedAC;

// ---------------------------------------------------------------------------------------------- //
/**
 * Union of action creators for StockQuoteAction and StockChartAction
 *
 * Check {@link StockQuoteAction}
 * Check {@link StockChartAction}
 */
export type StockActionTypes = StockQuoteAction | StockChartAction;
