import { createCachedSelector } from 're-reselect';
import { createSelector } from 'reselect';

import { AppState } from 'src/redux/index.reducers';
import { DataDomain, Reducer } from 'src/redux/Stocks/Types';

/**
 * Select 'Stocks' from root reducer.
 * ```ts
 * {
 *    selectedAllStocks: selectAllStocks(state)
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns ReducerState - redux Stocks reducer state
 */
export const selectAllStocks = (state: AppState): Reducer.ReducerState => state.Stocks;

/**
 * Select 'Stock symbol' provided by props.
 * The props is handed by Component props.
 * ```ts
 * {
 *    selectedStockSymbol: selectStockSymbol(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns string - Stock symbol
 */
export const selectStockSymbol = (state: AppState, props: { stockSymbol: string }): string =>
  props.stockSymbol;

/**
 * Select stock data by Stock symbol.
 * ```ts
 * {
 *    selectedData: selectStock(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockData - Stock data by stock symbol
 */
export const selectStock = createCachedSelector(
  [selectAllStocks, selectStockSymbol],
  (stocks: Reducer.ReducerState, stockSymbol: string): Reducer.StockData =>
    stocks.symbols[stockSymbol],
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                     STOCK SEARCH SELECTORS                                     //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Select Stock search keyword.
 * ```ts
 * {
 *    selectedStockKeyword: selectSearchKeyword(state),
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns string - Stock search keyword
 */
export const selectSearchKeyword = createSelector(
  [selectAllStocks],
  (stocks: Reducer.ReducerState): string | undefined => stocks.searchKeyword,
);

/**
 * Select Stock search results.
 * ```ts
 * {
 *    selectedStockSearchResult: selectSearchResults(state),
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns Reducer.StockSearchResultData | undefined - Stock search results
 */
export const selectSearchResults = createSelector(
  [selectAllStocks],
  (stocks: Reducer.ReducerState): Reducer.StockSearchResultData | undefined => stocks.searchResults,
);

/**
 * Select Stock search **fetching**
 * ```ts
 * {
 *    selectedStockSearchFetching: selectSearchFetching(state),
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns boolean | undefined - Stock search fetching
 */
export const selectSearchFetching = createSelector(
  [selectSearchResults],
  (stockSearch: Reducer.StockSearchResultData | undefined): boolean | undefined =>
    stockSearch?.fetching,
);

/**
 * Select Stock search **data**
 * ```ts
 * {
 *    selectedSearchData: selectSearchData(state),
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns DataDomain.StockSearchBase[] | undefined - Stock search data
 */
export const selectSearchData = createSelector(
  [selectSearchResults],
  (
    stockSearch: Reducer.StockSearchResultData | undefined,
  ): DataDomain.StockSearchBase[] | undefined => stockSearch?.data,
);

/**
 * Select Stock search **error**
 * ```ts
 * {
 *    selectedSearchError: selectSearchError(state),
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns Error | undefined - Stock search error
 */
export const selectSearchError = createSelector(
  [selectSearchResults],
  (stockSearch: Reducer.StockSearchResultData | undefined): Error | undefined => stockSearch?.error,
);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                   STOCK QUOTE DATA SELECTORS                                   //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Select stock quote data by Stock symbol.
 * ```ts
 * {
 *    selectedStock: selectStockQuote(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockQuoteData - Stock quote data
 */
export const selectStockQuote = createCachedSelector(
  [selectStock],
  (stockData: Reducer.StockData): Reducer.StockQuoteData => stockData.quote,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock quote **fetching** status by Stock symbol.
 * ```ts
 * {
 *    selectedStockFetching: selectStockQuoteFetching(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns boolean - Stock data fetching status
 */
export const selectStockQuoteFetching = createCachedSelector(
  [selectStockQuote],
  (stockQuoteData: Reducer.StockQuoteData): boolean => stockQuoteData.fetching,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock quote **data** by Stock symbol.
 * ```ts
 * {
 *    selectedStockData: selectStockQuoteData(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockQuote | undefined - Stock quote data
 */
export const selectStockQuoteData = createCachedSelector(
  [selectStockQuote],
  (stockQuoteData: Reducer.StockQuoteData): DataDomain.StockQuote | undefined =>
    stockQuoteData.data,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock quote **error** by Stock symbol.
 * ```ts
 * {
 *    selectedDataError: selectStockQuoteError(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns Error | undefined - Stock quote Error
 */
export const selectStockQuoteError = createCachedSelector(
  [selectStockQuote],
  (stockQuoteData: Reducer.StockQuoteData): Error | undefined => stockQuoteData.error,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                              STOCK DAILY ADJUSTED DATA SELECTORS                               //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Select stock Daily Adjusted data by Stock symbol.
 * ```ts
 * {
 *    selectedStock: selectStockDailyAdjusted(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns Reducer.StockDailyAdjustedData | undefined - Stock Daily Adjusted data
 */
export const selectStockDailyAdjusted = createCachedSelector(
  [selectStock],
  (stockData: Reducer.StockData): Reducer.StockDailyAdjData | undefined => stockData.dailyAdj,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock Daily Adjusted **fetching** status by Stock symbol.
 * ```ts
 * {
 *    selectedStockFetching: selectStockDailyAdjustedFetching(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns boolean | undefined - Stock Daily Adjusted data fetching status
 */
export const selectStockDailyAdjustedFetching = createCachedSelector(
  [selectStockDailyAdjusted],
  (stockDailyAdjustedData: Reducer.StockDailyAdjData | undefined): boolean | undefined =>
    stockDailyAdjustedData?.fetching,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock Daily Adjusted **data** by Stock symbol.
 * ```ts
 * {
 *    selectedStockData: selectStockDailyAdjustedData(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns DataDomain.StockDailyAdj | undefined - Stock Daily Adjusted data
 */
export const selectStockDailyAdjustedData = createCachedSelector(
  [selectStockDailyAdjusted],
  (
    stockDailyAdjustedData: Reducer.StockDailyAdjData | undefined,
  ): DataDomain.StockDailyAdj | undefined => stockDailyAdjustedData?.data,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock Daily Adjusted **error** by Stock symbol.
 * ```ts
 * {
 *    selectedDataError: selectStockDailyAdjustedError(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns Error | undefined - Stock Daily Adjusted Error
 */
export const selectStockDailyAdjustedError = createCachedSelector(
  [selectStockDailyAdjusted],
  (stockDailyAdjustedData: Reducer.StockDailyAdjData | undefined): Error | undefined =>
    stockDailyAdjustedData?.error,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                   STOCK META DATA SELECTORS                                    //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Select stock **meta** by Stock symbol.
 * ```ts
 * {
 *    selectedStockMetadata: selectStockMetadata(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns DataDomain.StockSearchBase | undefined - Stock meta
 */
export const selectStockMetadata = createCachedSelector(
  [selectStock],
  (stockData: Reducer.StockData): DataDomain.StockSearchBase | undefined => stockData.metadata,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);
