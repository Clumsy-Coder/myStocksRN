import { Action } from 'redux';

import { chartRange } from 'src/share/Constants';

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
  // currency: string;
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

/**
 * Data format when fetching stock quote data for multiple stock symbols in a single batch.
 */
export interface StockQuoteBatch {
  [symbol: string]: {
    quote: StockQuote;
  };
}

/**
 * Data format when fetching stock chart data for multiple stock symbols in a single batch,
 */
export interface StockChartBatch {
  [symbol: string]: {
    chart: StockChart[];
  };
}

/**
 * Data format when fetching stock quote and chart data for multiple stock symbols in a single batch.
 */
export interface StockQuoteChartBatch {
  [symbol: string]: {
    quote: StockQuote;
    chart: StockChart[];
  };
}

/**
 * A union of Stocks data domain types
 * Check {@link StockQuote}
 * Check {@link StockChart}
 * Check {@link StockQuoteBatch}
 * Check {@link StockChartBatch}
 * Check {@link StockQuoteChartBatch}
 */
export type StocksDataDomain =
  | StockQuote
  | StockChart
  | StockQuoteBatch
  | StockChartBatch
  | StockQuoteChartBatch;

// ---------------------------------------------------------------------------------------------- //
/*
  ██████╗ ███████╗██████╗ ██╗   ██╗ ██████╗███████╗██████╗     ███████╗████████╗ █████╗ ████████╗███████╗
  ██╔══██╗██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔══██╗    ██╔════╝╚══██╔══╝██╔══██╗╚══██╔══╝██╔════╝
  ██████╔╝█████╗  ██║  ██║██║   ██║██║     █████╗  ██████╔╝    ███████╗   ██║   ███████║   ██║   █████╗
  ██╔══██╗██╔══╝  ██║  ██║██║   ██║██║     ██╔══╝  ██╔══██╗    ╚════██║   ██║   ██╔══██║   ██║   ██╔══╝
  ██║  ██║███████╗██████╔╝╚██████╔╝╚██████╗███████╗██║  ██║    ███████║   ██║   ██║  ██║   ██║   ███████╗
  ╚═╝  ╚═╝╚══════╝╚═════╝  ╚═════╝  ╚═════╝╚══════╝╚═╝  ╚═╝    ╚══════╝   ╚═╝   ╚═╝  ╚═╝   ╚═╝   ╚══════╝

*/

export interface StockQuoteData {
  fetching: boolean;
  data?: StockQuote;
  error?: Error;
}

export interface StockChartData {
  fetching: boolean;
  data?: StockChart[];
  error?: Error;
}

export interface StockData {
  quote: StockQuoteData;
  chart?: StockChartData;
}

/**
 * Stocks reducer state
 */
export interface StocksReducerState {
  [symbol: string]: StockData;
}

export type StocksReducerTypes = StockQuoteData | StockChartData | StockData | StocksReducerState;

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
export enum ActionTypes {
  FETCH_STOCK_QUOTE = 'STOCKS/FETCH_STOCK_QUOTE',
  FETCH_STOCK_QUOTE_PENDING = 'STOCKS/FETCH_STOCK_QUOTE_PENDING',
  FETCH_STOCK_QUOTE_FULFILLED = 'STOCKS/FETCH_STOCK_QUOTE_FULFILLED',
  FETCH_STOCK_QUOTE_REJECTED = 'STOCKS/FETCH_STOCK_QUOTE_REJECTED',

  FETCH_STOCK_CHART = 'STOCKS/FETCH_STOCK_CHART',
  FETCH_STOCK_CHART_PENDING = 'STOCKS/FETCH_STOCK_CHART_PENDING',
  FETCH_STOCK_CHART_FULFILLED = 'STOCKS/FETCH_STOCK_CHART_FULFILLED',
  FETCH_STOCK_CHART_REJECTED = 'STOCKS/FETCH_STOCK_CHART_REJECTED',

  FETCH_STOCK_QUOTE_BATCH = 'STOCKS/FETCH_STOCK_QUOTE_BATCH',
  FETCH_STOCK_CHART_BATCH = 'STOCKS/FETCH_STOCK_CHART_BATCH',
  FETCH_STOCK_QUOTE_CHART_BATCH = 'STOCKS/FETCH_STOCK_QUOTE_CHART_BATCH',
}

// ---------------------------------------------------------------------------------------------- //
/*
   █████╗  ██████╗████████╗██╗ ██████╗ ███╗   ██╗███████╗
  ██╔══██╗██╔════╝╚══██╔══╝██║██╔═══██╗████╗  ██║██╔════╝
  ███████║██║        ██║   ██║██║   ██║██╔██╗ ██║███████╗
  ██╔══██║██║        ██║   ██║██║   ██║██║╚██╗██║╚════██║
  ██║  ██║╚██████╗   ██║   ██║╚██████╔╝██║ ╚████║███████║
  ╚═╝  ╚═╝ ╚═════╝   ╚═╝   ╚═╝ ╚═════╝ ╚═╝  ╚═══╝╚══════╝

*/

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                      STOCK QUOTE ACTIONS                                       //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Fetch Stock Quote action.
 */
export interface FetchStockQuoteAction extends Action<ActionTypes.FETCH_STOCK_QUOTE> {
  type: ActionTypes.FETCH_STOCK_QUOTE;
  readonly stockSymbol: string; // stock symbol
}

/**
 * Fetch Stock Quote pending action
 */
export interface FetchStockQuotePendingAction
  extends Action<ActionTypes.FETCH_STOCK_QUOTE_PENDING> {
  type: ActionTypes.FETCH_STOCK_QUOTE_PENDING;
  readonly stockSymbol: string;
}

/**
 * Fetch Stock Quote fulfilled action
 */
export interface FetchStockQuoteFulfilledAction
  extends Action<ActionTypes.FETCH_STOCK_QUOTE_FULFILLED> {
  type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED;
  readonly stockSymbol: string;
  readonly payload: { data: StockQuote };
}

/**
 * Fetch Stock Quote rejected action
 */
export interface FetchStockQuoteRejectedAction
  extends Action<ActionTypes.FETCH_STOCK_QUOTE_REJECTED> {
  type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED;
  readonly stockSymbol: string;
  readonly error: Error;
}

/**
 * Union of action creators for Stock Quote
 * Check {@link FetchStockQuoteAction}
 * Check {@link FetchStockQuotePendingAction}
 * Check {@link FetchStockQuoteFulfilledAction}
 * Check {@link FetchStockQuoteRejectedAction}
 */
export type StockQuoteActions =
  | FetchStockQuoteAction
  | FetchStockQuotePendingAction
  | FetchStockQuoteFulfilledAction
  | FetchStockQuoteRejectedAction;

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                      STOCK CHART ACTIONS                                       //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Fetch Stock Chart action
 */
export interface FetchStockChartAction extends Action<ActionTypes.FETCH_STOCK_CHART> {
  type: ActionTypes.FETCH_STOCK_CHART;
  readonly stockSymbol: string;
  readonly range: chartRange;
  readonly sort: 'asc' | 'desc';
}

/**
 * Fetch Stock Chart pending action
 */
export interface FetchStockChartPendingAction
  extends Action<ActionTypes.FETCH_STOCK_CHART_PENDING> {
  type: ActionTypes.FETCH_STOCK_CHART_PENDING;
  readonly stockSymbol: string;
}

/**
 * Fetch Stock Chart fulfilled action
 */
export interface FetchStockChartFulfilledAction
  extends Action<ActionTypes.FETCH_STOCK_CHART_FULFILLED> {
  type: ActionTypes.FETCH_STOCK_CHART_FULFILLED;
  readonly stockSymbol: string;
  readonly payload: { data: StockChart[] };
}

/**
 * Fetch Stock Chart rejected action
 */
export interface FetchStockChartRejectedAction
  extends Action<ActionTypes.FETCH_STOCK_CHART_REJECTED> {
  type: ActionTypes.FETCH_STOCK_CHART_REJECTED;
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
export type StockChartActions =
  | FetchStockChartAction
  | FetchStockChartPendingAction
  | FetchStockChartFulfilledAction
  | FetchStockChartRejectedAction;

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                      STOCK BATCH ACTIONS                                       //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Fetch Stock quote batch action
 */
export interface FetchStockQuoteBatchAction extends Action<ActionTypes.FETCH_STOCK_QUOTE_BATCH> {
  type: ActionTypes.FETCH_STOCK_QUOTE_BATCH;
  readonly stockSymbols: string[];
}

/**
 * Fetch Stock chart batch action
 */
export interface FetchStockChartBatchAction extends Action<ActionTypes.FETCH_STOCK_CHART_BATCH> {
  type: ActionTypes.FETCH_STOCK_CHART_BATCH;
  readonly stockSymbols: string[];
  readonly range: chartRange;
  readonly sort: 'asc' | 'desc';
}

/**
 * Fetch Stock quote and chart batch action
 */
export interface FetchStockQuoteChartBatchAction
  extends Action<ActionTypes.FETCH_STOCK_QUOTE_CHART_BATCH> {
  type: ActionTypes.FETCH_STOCK_QUOTE_CHART_BATCH;
  readonly stockSymbols: string[];
  readonly range: chartRange;
  readonly sort: 'asc' | 'desc';
}

export type StockBatchActions =
  | FetchStockQuoteBatchAction
  | FetchStockChartBatchAction
  | FetchStockQuoteChartBatchAction;

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                      STOCK ACTIONS UNIONS                                      //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Union of action creators for StockQuoteAction and StockChartAction
 *
 * Check {@link StockQuoteAction}
 * Check {@link StockChartAction}
 */
export type StocksActions = StockQuoteActions | StockChartActions | StockBatchActions;
