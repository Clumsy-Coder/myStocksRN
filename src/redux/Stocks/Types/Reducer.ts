import * as DataDomain from '@redux/Stocks/Types/DataDomain';

/**
 * Data structure for Stock quote used in Stock Reducer
 */
export interface StockQuoteData {
  fetching: boolean;
  data?: DataDomain.Quote;
  error?: Error;
}

/**
 * Data structure for Stock Daily Adjusted used in Stock Reducer
 */
export interface StockChartData {
  fetching: boolean;
  data?: DataDomain.Chart;
  error?: Error;
}

// export interface StockSearchResultData {
//   fetching: boolean;
//   data?: DataDomain.StockSearchBase[];
//   error?: Error;
// }

// export interface StockSearch {
//   keyword?: string;
//   results?: Reducer.StockSearchResultData;
// }

/**
 * A data structure wrapper for one Stock
 */
export interface StockData {
  quote: StockQuoteData;
  chart?: StockChartData;
  // metadata?: DataDomain.StockSearchBase;
}

/**
 * Stocks reducer state
 */
export interface ReducerState {
  symbols: {
    [symbol: string]: StockData;
  };
  // search?: Reducer.StockSearch;
}
