/* eslint-disable max-len */
import { ActionCreator } from 'redux';

import { ActionTypes, DataDomain, Actions } from 'src/redux/Stocks/Types';

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                  STOCK QUOTE ACTIONS CREATORS                                  //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Fetch stock quote action creator.
 * ONLY to be called by the front end.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuote: ActionCreator<Actions.Quote.FetchAction> = (
  stockSymbol: string,
): Actions.Quote.FetchAction => ({
  type: ActionTypes.FETCH_STOCK_QUOTE,
  stockSymbol,
});

/**
 * Fetch stock quote pending action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuotePending: ActionCreator<Actions.Quote.FetchPendingAction> = (
  stockSymbol: string,
): Actions.Quote.FetchPendingAction => ({
  type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
  stockSymbol,
});

/**
 * Fetch stock quote fulfilled action creator.
 * ONLY to be called by redux saga.
 * Only used internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param payload - data fetched
 */
export const fetchStockQuoteFulfilled: ActionCreator<Actions.Quote.FetchFulfilledAction> = (
  stockSymbol: string,
  payload: DataDomain.Quote,
): Actions.Quote.FetchFulfilledAction => ({
  type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
  stockSymbol,
  payload,
});

/**
 * Fetch stock quote rejected action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param error - error message
 */
export const fetchStockQuoteRejected: ActionCreator<Actions.Quote.FetchRejectedAction> = (
  stockSymbol: string,
  error: Error,
): Actions.Quote.FetchRejectedAction => ({
  type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
  stockSymbol,
  error,
});

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                  STOCK Chart ACTIONS CREATORS                                  //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Fetch stock Chart action creator.
 * ONLY to be called by the front end.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param outputsize - 'compact' or 'full'
 */
export const fetchStockChart: ActionCreator<Actions.Chart.FetchAction> = (
  stockSymbol: string,
  chartRange: DataDomain.ChartRange,
): Actions.Chart.FetchAction => ({
  type: ActionTypes.FETCH_STOCK_CHART,
  stockSymbol,
  chartRange,
});

/**
 * Fetch stock Chart pending action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockChartPending: ActionCreator<Actions.Chart.FetchPendingAction> = (
  stockSymbol: string,
): Actions.Chart.FetchPendingAction => ({
  type: ActionTypes.FETCH_STOCK_CHART_PENDING,
  stockSymbol,
});

/**
 * Fetch Stock Chart fulfilled action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param payload - data fetched
 */
export const fetchStockChartFulfilled: ActionCreator<Actions.Chart.FetchFulfilledAction> = (
  stockSymbol: string,
  payload: DataDomain.Chart[],
): Actions.Chart.FetchFulfilledAction => ({
  type: ActionTypes.FETCH_STOCK_CHART_FULFILLED,
  stockSymbol,
  payload,
});

/**
 * Fetch Stock Chart rejected action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param error - error message
 */
export const fetchStockChartRejected: ActionCreator<Actions.Chart.FetchRejectedAction> = (
  stockSymbol: string,
  error: Error,
): Actions.Chart.FetchRejectedAction => ({
  type: ActionTypes.FETCH_STOCK_CHART_REJECTED,
  stockSymbol,
  error,
});

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                 STOCK SEARCH ACTIONS CREATORS                                  //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Set search keyword action creator.
 * @param keyword - string to search
 */
export const setSearchKeyword: ActionCreator<Actions.Search.SetSearchKeywordAction> = (
  keyword: string,
): Actions.Search.SetSearchKeywordAction => ({
  type: ActionTypes.SET_SEARCH_KEYWORD,
  keyword,
});

/**
 * Clear search keyword action creator.
 */
export const clearSearchKeyword: ActionCreator<Actions.Search.ClearSearchKeywordAction> = (): Actions.Search.ClearSearchKeywordAction => ({
  type: ActionTypes.CLEAR_SEARCH_KEYWORD,
});

export const fetchStockSearch: ActionCreator<Actions.Search.FetchAction> = (
  keyword: string,
): Actions.Search.FetchAction => ({
  type: ActionTypes.SEARCH_KEYWORD,
  keyword,
});

export const fetchStockSearchPending: ActionCreator<Actions.Search.FetchPendingAction> = (
  keyword: string,
): Actions.Search.FetchPendingAction => ({
  type: ActionTypes.SEARCH_KEYWORD_PENDING,
  keyword,
});

// export const fetchStockSearchFulfilled: ActionCreator<Actions.Search.FetchFulfilledAction> = (
//   keyword: string,
//   payload: DataDomain.StockSearch,
// ): Actions.Search.FetchFulfilledAction => ({
//   type: ActionTypes.SEARCH_KEYWORD_FULFILLED,
//   keyword,
//   payload,
// });

export const fetchStockSearchRejected: ActionCreator<Actions.Search.FetchRejectedAction> = (
  keyword: string,
  error: Error,
): Actions.Search.FetchRejectedAction => ({
  type: ActionTypes.SEARCH_KEYWORD_REJECTED,
  keyword,
  error,
});

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                STOCK METADATA ACTIONS CREATORS                                 //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

// /**
//  * Set Stock metadata by stock symbol
//  * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
//  * @param payload - Stock metadata
//  */
// export const setStockMetadata: ActionCreator<Actions.Search.SetStockMetadata> = (
//   stockSymbol: string,
//   payload: DataDomain.StockSearchBase,
// ): Actions.Search.SetStockMetadata => ({
//   type: ActionTypes.SET_STOCK_METADATA,
//   stockSymbol,
//   payload,
// });

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                  STOCK BATCH ACTIONS CREATORS                                  //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Fetch multiple stock quote data in a single batch action creator.
 * ONLY to be called by the front end.
 * NOTE: uses stock symbols from favorites to fetch stock quotes. Handled in Stocks redux saga
 */
export const fetchStockQuoteBatch: ActionCreator<Actions.Batch.FetchQuoteAction> = (): Actions.Batch.FetchQuoteAction => ({
  type: ActionTypes.FETCH_STOCK_QUOTE_BATCH,
});

// /**
//  * Fetch multiple stock chart data in a single batch action creator.
//  * ONLY to be called by the front end.
//  * @param stockSymbols - An array of company stock symbol in uppercase. Ex: ['AAPL', 'SHOP]
//  * @param range - Date range for the stock chart
//  * @param sort - sort data by date in ascending or descending order
//  */
// export const fetchStockChartBatch: ActionCreator<Actions.Batch.FetchDailyAdjustedBatchAction> = (): Actions.Batch.FetchDailyAdjustedBatchAction => ({
//   type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_BATCH,
// });

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                             STOCK SYMBOL METADATA ACTIONS CREATORS                             //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Fetch stock Symbols metadata creator.
 * ONLY to be called by the front end.
 */
export const fetchSymbolsMetadata: ActionCreator<Actions.SymbolsMetadata.FetchAction> = (): Actions.SymbolsMetadata.FetchAction => ({
  type: ActionTypes.FETCH_SYMBOLS_METADATA,
});

/**
 * Fetch stock Symbols metadata pending action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 */
export const fetchSymbolsMetadataPending: ActionCreator<Actions.SymbolsMetadata.FetchPendingAction> = (): Actions.SymbolsMetadata.FetchPendingAction => ({
  type: ActionTypes.FETCH_SYMBOLS_METADATA_PENDING,
});

/**
 * Fetch Stock Symbols metadata fulfilled action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param payload - data fetched
 */
export const fetchSymbolsMetadataFulfilled: ActionCreator<Actions.SymbolsMetadata.FetchFulfilledAction> = (
  payload: DataDomain.Symbols[],
): Actions.SymbolsMetadata.FetchFulfilledAction => ({
  type: ActionTypes.FETCH_SYMBOLS_METADATA_FULFILLED,
  payload,
});

/**
 * Fetch Stock Symbols metadata rejected action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param error - error message
 */
export const fetchSymbolsMetadataRejected: ActionCreator<Actions.SymbolsMetadata.FetchRejectedAction> = (
  error: Error,
): Actions.SymbolsMetadata.FetchRejectedAction => ({
  type: ActionTypes.FETCH_SYMBOLS_METADATA_REJECTED,
  error,
});
