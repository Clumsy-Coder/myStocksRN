import {
  FetchStockQuoteAC,
  FetchStockChartAC,
  ActionTypesEnum,
  FetchStockQuotePendingAC,
  FetchStockQuoteFulfilledAC,
  StockQuote,
  FetchStockQuoteRejectedAC,
} from 'src/redux/Stocks/Types';

/**
 * Fetch stock quote action creator.
 * ONLY to be called by the front end.
 * @param stockSymbol Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuote = (stockSymbol: string): FetchStockQuoteAC => ({
  type: ActionTypesEnum.FETCH_STOCK_QUOTE,
  stockSymbol,
});

/**
 * Fetch stock quote pending action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuotePending = (stockSymbol: string): FetchStockQuotePendingAC => ({
  type: ActionTypesEnum.FETCH_STOCK_QUOTE_PENDING,
  stockSymbol,
});

/**
 * Fetch stock quote fulfilled action creator.
 * ONLY to be called by redux saga.
 * Only used internal use.
 * @param stockSymbol Company stock symbol in uppercase. Ex: AAPL
 * @param payload data fetched
 */
export const fetchStockQuoteFulfilled = (
  stockSymbol: string,
  payload: StockQuote,
): FetchStockQuoteFulfilledAC => ({
  type: ActionTypesEnum.FETCH_STOCK_QUOTE_FULFILLED,
  stockSymbol,
  payload: { data: payload },
});

/**
 * Fetch stock quote rejected action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol Company stock symbol in uppercase. Ex: AAPL
 * @param error error message
 */
export const fetchStockQuoteRejected = (
  stockSymbol: string,
  error: Error,
): FetchStockQuoteRejectedAC => ({
  type: ActionTypesEnum.FETCH_STOCK_QUOTE_REJECTED,
  stockSymbol,
  error,
});

// ---------------------------------------------------------------------------------------------- //

export const fetchStockChart = (stockSymbol: string): FetchStockChartAC => ({
  type: ActionTypesEnum.FETCH_STOCK_CHART,
  stockSymbol,
});
