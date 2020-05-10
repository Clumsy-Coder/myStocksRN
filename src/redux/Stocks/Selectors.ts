import { createCachedSelector } from 're-reselect';

import { RootState } from 'src/redux/index.reducers';
import { StockState, StockData, StockQuoteData, StockQuote } from 'src/redux/Stocks/Types';

/**
 * Stocks state selector
 * @param state - RootState - Root redux state
 * @returns StockState - redux Stocks reducer state
 */
export const selectAllStocks = (state: RootState): StockState => state.Stocks;

/**
 * Select stock data by Stock symbol.
 * ```ts
 * {
 *    selectedData: selectStock(state, 'AAPL')
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - string - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockData - Stock data by stock symbol
 */
export const selectStock = createCachedSelector(
  selectAllStocks,
  (state: StockState, stockSymbol: string): string => stockSymbol,
  (stocks: StockState, stockSymbol: string): StockData => stocks[stockSymbol],
)((state: StockState, stockSymbol: string): string => stockSymbol);

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
 *    selectedStock: selectStockQuote(state, 'AAPL')
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - string - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockQuoteData - Stock quote data
 */
export const selectStockQuote = createCachedSelector(
  selectStock,
  (stock: StockData, stockSymbol: string): string => stockSymbol,
  (stock: StockData): StockQuoteData => stock.quote,
)((stock: StockData, stockSymbol: string): string => stockSymbol);

/**
 * Select stock quote **fetching** status by Stock symbol.
 * ```ts
 * {
 *    selectedStockFetching: selectStockQuoteFetching(state, 'AAPL')
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - string - Stock symbol to select in uppercase. Ex: AAPL
 * @returns boolean - Stock data fetching status
 */
export const selectStockQuoteFetching = createCachedSelector(
  selectStockQuote,
  (quote: StockQuoteData, stockSymbol: string): string => stockSymbol,
  (quote: StockQuoteData): boolean => quote.fetching,
)((quote: StockQuoteData, stockSymbol: string): string => stockSymbol);

/**
 * Select stock quote **data** by Stock symbol.
 * ```ts
 * {
 *    selectedStockData: selectStockQuoteData(state, 'AAPL')
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - string - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockQuote | undefined - Stock quote data
 */
export const selectStockQuoteData = createCachedSelector(
  selectStockQuote,
  (quote: StockQuoteData, stockSymbol: string): string => stockSymbol,
  (quote: StockQuoteData): StockQuote | undefined => quote.data,
)((quote: StockQuoteData, stockSymbol: string): string => stockSymbol);

/**
 * Select stock quote **error** by Stock symbol.
 * ```ts
 * {
 *    selectedDataError: selectStockQuoteError(state, 'AAPL')
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - string - Stock symbol to select in uppercase. Ex: AAPL
 * @returns Error - Stock data fetching status
 */
export const selectStockQuoteError = createCachedSelector(
  selectStockQuote,
  (quote: StockQuoteData, stockSymbol: string): string => stockSymbol,
  (quote: StockQuoteData): Error | undefined => quote.error,
)((quote: StockQuoteData, stockSymbol: string): string => stockSymbol);
