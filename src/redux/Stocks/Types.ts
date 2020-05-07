/**
 * Data format when fetching stock quote
 * check https://iexcloud.io/docs/api/#quote
 *
 * @interface IStockQuote
 */
export interface IStockQuote {
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
 *
 * @interface IStockChart
 */
export interface IStockChart {
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
// used for Stocks reducer
export interface IStockState {
  [symbol: string]: {
    quote: {
      fetching: Boolean;
      data: IStockQuote | null;
      error?: any;
    };
    chart?: {
      fetching: boolean;
      data: IStockChart[] | null;
      error?: any;
    };
  };
}

// ---------------------------------------------------------------------------------------------- //
// action types

export enum ActionTypesEnum {
  GET_STOCK_QUOTE = 'STOCKS/GET_STOCK_QUOTE',
  GET_STOCK_QUOTE_PENDING = 'STOCKS/GET_STOCK_QUOTE_PENDING',
  GET_STOCK_QUOTE_FULFILLED = 'STOCKS/GET_STOCK_QUOTE_FULFILLED',
  GET_STOCK_QUOTE_REJECTED = 'STOCKS/GET_STOCK_QUOTE_REJECTED',

  GET_STOCK_CHART = 'STOCKS/GET_STOCK_CHART',
  GET_STOCK_CHART_PENDING = 'STOCKS/GET_STOCK_CHART_PENDING',
  GET_STOCK_CHART_FULFILLED = 'STOCKS/GET_STOCK_CHART_FULFILLED',
  GET_STOCK_CHART_REJECTED = 'STOCKS/GET_STOCK_CHART_REJECTED',
}

// ---------------------------------------------------------------------------------------------- //
// action creators

// get stock quote action creator
// called to initiate the fetching process
export interface IGetStockQuoteAC {
  type: ActionTypesEnum.GET_STOCK_QUOTE;
  readonly stockSymbol: string; // stock symbol
}

// called only in redux saga to handle side effects
export interface IGetStockQuotePendingAC {
  type: ActionTypesEnum.GET_STOCK_QUOTE_PENDING;
  readonly stockSymbol: string;
}

// called only in redux saga to handle side effects
export interface IGetStockQuoteFulfilledAC {
  type: ActionTypesEnum.GET_STOCK_QUOTE_FULFILLED;
  readonly stockSymbol: string;
  readonly payload: { data: IStockQuote };
}

// called only in redux saga to handle side effects
export interface IGetStockQuoteRejectedAC {
  type: ActionTypesEnum.GET_STOCK_QUOTE_REJECTED;
  readonly stockSymbol: string;
  readonly error: any;
}

export type StockQuoteAction =
  | IGetStockQuoteAC
  | IGetStockQuotePendingAC
  | IGetStockQuoteFulfilledAC
  | IGetStockQuoteRejectedAC;

// ---------------------------------------------------------------------------------------------- //
// get stock chart action creator
// called to initiate the fetching process
export interface IGetStockChartAC {
  type: ActionTypesEnum.GET_STOCK_CHART;
  readonly stockSymbol: string;
}

// called only in redux saga to handle side effects
export interface IGetStockChartPendingAC {
  type: ActionTypesEnum.GET_STOCK_CHART_PENDING;
  readonly stockSymbol: string;
}

// called only in redux saga to handle side effects
export interface IGetStockChartFulfilledAC {
  type: ActionTypesEnum.GET_STOCK_CHART_FULFILLED;
  readonly stockSymbol: string;
  readonly payload: { data: IStockChart[] };
}

// called only in redux saga to handle side effects
export interface IGetStockChartRejectedAC {
  type: ActionTypesEnum.GET_STOCK_CHART_REJECTED;
  readonly stockSymbol: string;
  readonly error: any;
}

export type StockChartAction =
  | IGetStockChartAC
  | IGetStockChartPendingAC
  | IGetStockChartFulfilledAC
  | IGetStockChartRejectedAC;

// ---------------------------------------------------------------------------------------------- //
// all Stock action creators
export type StockActionTypes = StockQuoteAction | StockChartAction;
