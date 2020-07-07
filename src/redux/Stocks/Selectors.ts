import { createCachedSelector } from 're-reselect';
import { createSelector } from 'reselect';
import { LineChartProps } from 'react-native-chart-kit/dist/line-chart/LineChart';
// import { AbstractChartConfig } from 'react-native-chart-kit/dist/AbstractChart/AbstractChartConfig';
import { Dimensions } from 'react-native';

import { AppState } from 'src/redux/index.reducers';
import { DataDomain, Reducer, Selectors } from 'src/redux/Stocks/Types';
import { selectFavoriteSymbols } from 'src/redux/Favorites/Selectors';
import { Reducer as FavoritesReducer } from 'src/redux/Favorites/Types';
import { defaultQuote } from '@redux/Stocks/Reducer';

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
 * Select Stock Search.
 * ```ts
 * {
 *    selectStockSearch: selectSearch(state)
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns Reducer.StockSearch - Stock search
 */
export const selectSearch = createSelector(
  [selectAllStocks],
  (stocks: Reducer.ReducerState): Reducer.StockSearch | undefined => stocks.search,
);

/**
 * Select Stock search keyword.
 * ```ts
 * {
 *    selectedStockKeyword: selectSearchKeyword(state),
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns string | undefined - Stock search keyword
 */
export const selectSearchKeyword = createSelector(
  [selectSearch],
  (search: Reducer.StockSearch | undefined): string | undefined => search?.keyword,
);

// /**
//  * Select Stock search results.
//  * ```ts
//  * {
//  *    selectedStockSearchResult: selectSearchResults(state),
//  * }
//  * ```
//  * @param state - AppState - Root redux state
//  * @returns Reducer.StockSearchResultData | undefined - Stock search results
//  */
// export const selectSearchResults = createSelector(
//   [selectSearch],
//   (search: Reducer.StockSearch | undefined): Reducer.StockSearchResultData | undefined =>
//     search?.results,
// );

// /**
//  * Select Stock search **fetching**
//  * ```ts
//  * {
//  *    selectedStockSearchFetching: selectSearchFetching(state),
//  * }
//  * ```
//  * @param state - AppState - Root redux state
//  * @returns boolean | undefined - Stock search fetching
//  */
// export const selectSearchFetching = createSelector(
//   [selectSearchResults],
//   (stockSearch: Reducer.StockSearchResultData | undefined): boolean | undefined =>
//     stockSearch?.fetching,
// );

// /**
//  * Select Stock search **data**
//  * ```ts
//  * {
//  *    selectedSearchData: selectSearchData(state),
//  * }
//  * ```
//  * @param state - AppState - Root redux state
//  * @returns DataDomain.StockSearchBase[] | undefined - Stock search data
//  */
// export const selectSearchData = createSelector(
//   [selectSearchResults],
//   (
//     stockSearch: Reducer.StockSearchResultData | undefined,
//   ): DataDomain.StockSearchBase[] | undefined => stockSearch?.data,
// );

// /**
//  * Select Stock search **error**
//  * ```ts
//  * {
//  *    selectedSearchError: selectSearchError(state),
//  * }
//  * ```
//  * @param state - AppState - Root redux state
//  * @returns Error | undefined - Stock search error
//  */
// export const selectSearchError = createSelector(
//   [selectSearchResults],
//   (stockSearch: Reducer.StockSearchResultData | undefined): Error | undefined => stockSearch?.error,
// );

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
 * @returns QuoteData - Stock quote data
 */
export const selectStockQuote = createCachedSelector(
  [selectStock],
  (stockData: Reducer.StockData): Reducer.QuoteData => stockData.quote,
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
  (stockQuoteData: Reducer.QuoteData): boolean => stockQuoteData.fetching,
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
 * @returns Quote | undefined - Stock quote data
 */
export const selectStockQuoteData = createCachedSelector(
  [selectStockQuote],
  (stockQuoteData: Reducer.QuoteData): DataDomain.Quote => stockQuoteData.data,
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
  (stockQuoteData: Reducer.QuoteData): Error | undefined => stockQuoteData.error,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                   STOCK CHART DATA SELECTORS                                   //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Select stock Chart data by Stock symbol.
 * ```ts
 * {
 *    selectedStock: selectStockChart(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns Reducer.StockChartData | undefined - Stock Chart data
 */
export const selectStockChart = createCachedSelector(
  [selectStock],
  (stockData: Reducer.StockData): Reducer.ChartData | undefined => stockData.chart,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock Chart **fetching** status by Stock symbol.
 * ```ts
 * {
 *    selectedStockFetching: selectStockChartFetching(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns boolean | undefined - Stock Chart data fetching status
 */
export const selectStockChartFetching = createCachedSelector(
  [selectStockChart],
  (stockChartData: Reducer.ChartData | undefined): boolean | undefined => stockChartData?.fetching,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock Chart **data** by Stock symbol.
 * ```ts
 * {
 *    selectedStockData: selectStockChartData(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns DataDomain.ChartData | undefined - Stock Chart data
 */
export const selectStockChartData = createCachedSelector(
  [selectStockChart],
  (stockChartData: Reducer.ChartData | undefined): DataDomain.Chart[] | undefined =>
    stockChartData?.data,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

/**
 * Select stock Chart **error** by Stock symbol.
 * ```ts
 * {
 *    selectedDataError: selectStockChartError(state, { stockSymbol: 'AAPL' })
 * }
 * ```
 * @param state - AppState - Root redux state
 * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
 * @returns Error | undefined - Stock Chart Error
 */
export const selectStockChartError = createCachedSelector(
  [selectStockChart],
  (stockChartData: Reducer.ChartData | undefined): Error | undefined => stockChartData?.error,
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                   STOCK META DATA SELECTORS                                    //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

// /**
//  * Select stock **meta** by Stock symbol.
//  * ```ts
//  * {
//  *    selectedStockMetadata: selectStockMetadata(state, { stockSymbol: 'AAPL' })
//  * }
//  * ```
//  * @param state - AppState - Root redux state
//  * @param props - \{ stockSymbol: string \} - Stock symbol to select in uppercase. Ex: AAPL
//  * @returns DataDomain.StockSearchBase | undefined - Stock meta
//  */
// export const selectStockMetadata = createCachedSelector(
//   [selectStock],
//   (stockData: Reducer.StockData): DataDomain.StockSearchBase | undefined => stockData.metadata,
// )((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                 SYMBOLS METADATA DATA SELECTORS                                //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Select Symbols metadata.
 * The props is handed by Component props.
 * ```ts
 * {
 *    selectedSymbolsMetadata: selectSymbolsMetadata(state)
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns Reducer.SymbolsData - Symbols Data
 */
export const selectSymbolsMetadata = createSelector(
  [selectAllStocks],
  (stockData: Reducer.ReducerState): Reducer.SymbolsData => stockData.symbolsMetadata,
);

/**
 * Select Symbols metadata **fetching**.
 * The props is handed by Component props.
 * ```ts
 * {
 *    selectedSymbolsMetadataFetching: selectSymbolsMetadataFetching(state)
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns boolean - true if data is being fetched, false otherwise.
 */
export const selectSymbolsMetadataFetching = createSelector(
  [selectSymbolsMetadata],
  (symbolsData: Reducer.SymbolsData): boolean => symbolsData.fetching,
);

/**
 * Select Symbols metadata **data**.
 * The props is handed by Component props.
 * ```ts
 * {
 *    selectedSymbolsMetadataData: selectSymbolsMetadataData(state)
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns DataDomain.Symbols[] - Array of Symbols.
 */
export const selectSymbolsMetadataData = createSelector(
  [selectSymbolsMetadata],
  (symbolsData: Reducer.SymbolsData): DataDomain.Symbols[] => symbolsData.data,
);

/**
 * Select Symbols metadata **error**.
 * The props is handed by Component props.
 * ```ts
 * {
 *    selectedSymbolsMetadataError: selectSymbolsMetadataError(state)
 * }
 * ```
 * @param state - AppState - Root redux state
 * @returns Error | undefined - Error when fetching data or undefined if data fetching was successful.
 */
export const selectSymbolsMetadataError = createSelector(
  [selectSymbolsMetadata],
  (symbolsData: Reducer.SymbolsData): Error | undefined => symbolsData.error,
);

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                 DATA PROCESSING DATA SELECTORS                                 //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Selector for displaying info on Home screen.
 *
 * If the stock is in the process of fetching or theres no stock quote data, return an object with fetching property.
 * ```ts
 * {
 *    selectedStockQuoteTrim: selectStockQuoteTrim(state)
 * }
 * ```
 *
 * @param state - AppState - Root redux state
 * @returns Selectors.SelectQuoteTrim[] - Home screen stock info
 */
export const selectStockQuoteTrim = createSelector(
  [selectAllStocks, selectFavoriteSymbols, selectSymbolsMetadataData],
  (
    stocks: Reducer.ReducerState,
    favorites: string[],
    symbolsMetadata: DataDomain.Symbols[],
  ): Selectors.SelectQuoteTrim[] => {
    return favorites.map(
      (symbol): Selectors.SelectQuoteTrim => {
        if (
          stocks.symbols[symbol] === undefined ||
          stocks.symbols[symbol].quote === undefined ||
          (stocks.symbols[symbol].quote.fetching &&
            stocks.symbols[symbol].quote.data === defaultQuote)
        ) {
          return {
            fetching: true,
            symbol,
            companyName: symbolsMetadata.find((obj) => obj.symbol === symbol)?.name || '',
            price: 0,
            change: 0,
            changePercent: 0,
          };
        }

        return {
          fetching: false,
          symbol,
          companyName: stocks.symbols[symbol].quote.data?.companyName || 'N/A',
          price: stocks.symbols[symbol].quote.data?.latestPrice || 0,
          change: stocks.symbols[symbol].quote.data?.change || 0,
          changePercent: stocks.symbols[symbol].quote.data?.changePercent || 0,
        };
      },
    );
  },
);

/**
 * Selector for displaying info on StockDetails screen.
 *
 * If the stock is in the process of fetching or theres no stock quote data or no stock chart data,
 * return an object { fetching: true, quote: defaultQuote, chart: [] }.
 *
 * ```ts
 * {
 *    selectedStockDetailsTrim: selectStockDetailsTrim(state, { stockSymbol: 'IBM' })
 * }
 * ```
 *
 * @param state - AppState - Root redux state
 * @returns Selectors.SelectStockDetailsTrim - StockDetails screen data info
 */
export const selectStockDetailsTrim = createCachedSelector(
  [selectStockQuote, selectStockChart],
  (
    quote: Reducer.QuoteData,
    chart: Reducer.ChartData | undefined,
  ): Selectors.SelectStockDetailsTrim => {
    if (chart === undefined || (quote.fetching && chart.fetching))
      return { fetching: true, quote: defaultQuote, chart: [] };

    return {
      fetching: false,
      quote: quote.data,
      chart: chart.data,
    };
  },
)((rootState: AppState, props: { stockSymbol: string }): string => props.stockSymbol);

// export const selectStockDetailsLineChart = createSelector(
//   [selectStockChart],
//   (chart: Reducer.ChartData | undefined): LineChartProps => {
//     if (chart === undefined || chart.fetching)
//       return {
//         data: {
//           labels: [],
//           datasets: [],
//         },
//         width: Dimensions.get('window').width,
//         height: 500,
//       };

//     const results: LineChartProps = {
//       data: {
//         labels: chart.data.map((cur) => cur.date),
//         datasets: [
//           {
//             data: chart.data.map((cur) => cur.close),
//             color: (opacity = 1): string => `rgba(134, 65, 244, ${opacity})`,
//             strokeWidth: 2,
//           },
//         ],
//       },
//       width: Dimensions.get('window').width,
//       height: 500,
//     };

//     return results;
//   },
// );

export const selectStockDetailsLineChart = createSelector(
  [selectStockChart],
  (chart: Reducer.ChartData | undefined): { date: string; price: number }[] => {
    if (chart === undefined || (chart.fetching && chart.data.length === 0)) return [];

    return chart.data.map((cur) => ({ date: cur.date, price: cur.close }));
  },
);
