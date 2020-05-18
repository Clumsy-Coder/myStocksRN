import { ActionCreator } from 'redux';

import { chartRange } from 'src/share/Constants';
import {
  ActionTypes,
  StockQuote,
  StockChart,
  FetchStockQuoteAction,
  FetchStockChartAction,
  FetchStockQuotePendingAction,
  FetchStockQuoteFulfilledAction,
  FetchStockQuoteRejectedAction,
  FetchStockChartPendingAction,
  FetchStockChartFulfilledAction,
  FetchStockChartRejectedAction,
} from 'src/redux/Stocks/Types';

/**
 * Fetch stock quote action creator.
 * ONLY to be called by the front end.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuote: ActionCreator<FetchStockQuoteAction> = (
  stockSymbol: string,
): FetchStockQuoteAction => ({
  type: ActionTypes.FETCH_STOCK_QUOTE,
  stockSymbol,
});

/**
 * Fetch stock quote pending action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuotePending: ActionCreator<FetchStockQuotePendingAction> = (
  stockSymbol: string,
): FetchStockQuotePendingAction => ({
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
export const fetchStockQuoteFulfilled: ActionCreator<FetchStockQuoteFulfilledAction> = (
  stockSymbol: string,
  payload: StockQuote,
): FetchStockQuoteFulfilledAction => ({
  type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
  stockSymbol,
  payload: { data: payload },
});

/**
 * Fetch stock quote rejected action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param error - error message
 */
export const fetchStockQuoteRejected: ActionCreator<FetchStockQuoteRejectedAction> = (
  stockSymbol: string,
  error: Error,
): FetchStockQuoteRejectedAction => ({
  type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
  stockSymbol,
  error,
});

// ---------------------------------------------------------------------------------------------- //

/**
 * Fetch stock chart action creator.
 * ONLY to be called by the front end.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param range - Date range for the stock chart
 */
export const fetchStockChart: ActionCreator<FetchStockChartAction> = (
  stockSymbol: string,
  range: chartRange,
  sort: 'asc' | 'desc',
): FetchStockChartAction => ({
  type: ActionTypes.FETCH_STOCK_CHART,
  stockSymbol,
  range,
  sort,
});

/**
 * Fetch stock chart pending action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockChartPending: ActionCreator<FetchStockChartPendingAction> = (
  stockSymbol: string,
): FetchStockChartPendingAction => ({
  type: ActionTypes.FETCH_STOCK_CHART_PENDING,
  stockSymbol,
});

/**
 * Fetch Stock chart fulfilled action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param payload - data fetched
 */
export const fetchStockChartFulfilled: ActionCreator<FetchStockChartFulfilledAction> = (
  stockSymbol: string,
  payload: StockChart[],
): FetchStockChartFulfilledAction => ({
  type: ActionTypes.FETCH_STOCK_CHART_FULFILLED,
  stockSymbol,
  payload: { data: payload },
});

/**
 * Fetch Stock chart rejected action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param error - error message
 */
export const fetchStockChartRejected: ActionCreator<FetchStockChartRejectedAction> = (
  stockSymbol: string,
  error: Error,
): FetchStockChartRejectedAction => ({
  type: ActionTypes.FETCH_STOCK_CHART_REJECTED,
  stockSymbol,
  error,
});
