import { createCachedSelector } from 're-reselect';

import { RootState } from 'src/redux/index.reducers';
import {
  StockState,
  StockData,
  StockQuoteData,
  StockQuote,
  StockChartData,
  StockChart,
} from 'src/redux/Stocks/Types';

/**
 * Select 'Stocks' from root reducer.
 * ```ts
 * {
 *    selectedAllStocks: selectAllStocks(state)
 * }
 * ```
 * @param state - RootState - Root redux state
 * @returns StockState - redux Stocks reducer state
 */
export const selectAllStocks = (state: RootState): StockState => state.Stocks;

/**
 * Select 'Stock symbol' provided by props.
 * The props is handed by Component props.
 * ```ts
 * {
 *    selectedStockSymbol: selectStockSymbol(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns string - Stock symbol
 */
export const selectStockSymbol = (state: RootState, props: { stockSymbol: string }): string =>
  props.stockSymbol;

/**
 * Select stock data by Stock symbol.
 * ```ts
 * {
 *    selectedData: selectStock(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockData - Stock data by stock symbol
 */
export const selectStock = createCachedSelector(
  [selectAllStocks, selectStockSymbol],
  (stocks: StockState, stockSymbol: string): StockData => stocks[stockSymbol],
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);

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
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockQuoteData - Stock quote data
 */
export const selectStockQuote = createCachedSelector(
  [selectStock],
  (stockData: StockData): StockQuoteData => stockData.quote,
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock quote **fetching** status by Stock symbol.
 * ```ts
 * {
 *    selectedStockFetching: selectStockQuoteFetching(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns boolean - Stock data fetching status
 */
export const selectStockQuoteFetching = createCachedSelector(
  [selectStockQuote],
  (stockQuoteData: StockQuoteData): boolean => stockQuoteData.fetching,
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock quote **data** by Stock symbol.
 * ```ts
 * {
 *    selectedStockData: selectStockQuoteData(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockQuote | undefined - Stock quote data
 */
export const selectStockQuoteData = createCachedSelector(
  [selectStockQuote],
  (stockQuoteData: StockQuoteData): StockQuote | undefined => stockQuoteData.data,
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock quote **error** by Stock symbol.
 * ```ts
 * {
 *    selectedDataError: selectStockQuoteError(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns Error - Stock data fetching status
 */
export const selectStockQuoteError = createCachedSelector(
  [selectStockQuote],
  (stockQuoteData: StockQuoteData): Error | undefined => stockQuoteData.error,
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                   STOCK CHART DATA SELECTORS                                   //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Select stock chart data by Stock symbol.
 * ```ts
 * {
 *    selectedStock: selectStockChart(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockChartData | undefined - Stock quote data
 */
export const selectStockChart = createCachedSelector(
  [selectStock],
  (stockData: StockData): StockChartData | undefined => stockData.chart,
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock chart **fetching** status by Stock symbol.
 * ```ts
 * {
 *    selectedStockFetching: selectStockChartFetching(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns boolean | undefined - Stock data fetching status
 */
export const selectStockChartFetching = createCachedSelector(
  [selectStockChart],
  (stockChartData: StockChartData | undefined): boolean | undefined => stockChartData?.fetching,
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock chart **data** by Stock symbol.
 * ```ts
 * {
 *    selectedStockData: selectStockChartData(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns StockChart[] | undefined - Stock quote data
 */
export const selectStockChartData = createCachedSelector(
  [selectStockChart],
  (stockChartData: StockChartData | undefined): StockChart[] | undefined => stockChartData?.data,
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock chart **error** by Stock symbol.
 * ```ts
 * {
 *    selectedDataError: selectStockChartError(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - RootState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns Error | undefined - Stock data fetching status
 */
export const selectStockChartError = createCachedSelector(
  [selectStockChart],
  (stockChartData: StockChartData | undefined): Error | undefined => stockChartData?.error,
)((rootState: RootState, props: { stockSymbol: string }): string => props.stockSymbol);
