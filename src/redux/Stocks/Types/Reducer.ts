import * as DataDomain from '@redux/Stocks/Types/DataDomain';

/**
 * Data structure for Stock quote used in Stock Reducer
 */
export interface QuoteData {
  fetching: boolean;
  data: DataDomain.Quote;
  error?: Error;
}

/**
 * Data structure for Stock Chart used in Stock Reducer
 */
export interface ChartData {
  fetching: boolean;
  data: DataDomain.Chart[];
  error?: Error;
}

// export interface StockSearchResultData {
//   fetching: boolean;
//   data?: DataDomain.StockSearchBase[];
//   error?: Error;
// }

export interface StockSearch {
  keyword: string;
  // results?: Reducer.StockSearchResultData;
}

/**
 * A data structure wrapper for one Stock
 */
export interface StockData {
  quote: QuoteData;
  chart: ChartData;
  // metadata?: DataDomain.StockSearchBase;
}

export interface SymbolsData {
  fetching: boolean;
  data: DataDomain.Symbols[];
  error?: Error;
}

/**
 * Stocks reducer state
 */
export interface ReducerState {
  symbols: {
    [symbol: string]: StockData;
  };
  search?: StockSearch;
  symbolsMetadata: SymbolsData;
}

/**
 * A union of Stocks Reducer types
 */
export type StocksReducerTypes = QuoteData | ChartData | StockData | ReducerState;
