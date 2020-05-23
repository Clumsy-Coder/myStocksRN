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
  payload: DataDomain.StockQuote,
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
//                                  STOCK CHART ACTIONS CREATORS                                  //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

/**
 * Fetch stock chart action creator.
 * ONLY to be called by the front end.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param range - Date range for the stock chart
 * @param sort - sort data by date in ascending or descending order
 */
export const fetchStockDailyAdj: ActionCreator<Actions.DailyAdjusted.FetchAction> = (
  stockSymbol: string,
  outputsize: 'compact' | 'full',
): Actions.DailyAdjusted.FetchAction => ({
  type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED,
  stockSymbol,
  outputsize,
});

/**
 * Fetch stock chart pending action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockDailyAdjPending: ActionCreator<Actions.DailyAdjusted.FetchPendingAction> = (
  stockSymbol: string,
): Actions.DailyAdjusted.FetchPendingAction => ({
  type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING,
  stockSymbol,
});

/**
 * Fetch Stock chart fulfilled action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param payload - data fetched
 */
export const fetchStockDailyAdjFulfilled: ActionCreator<Actions.DailyAdjusted.FetchFulfilledAction> = (
  stockSymbol: string,
  payload: DataDomain.StockDailyAdj,
): Actions.DailyAdjusted.FetchFulfilledAction => ({
  type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED,
  stockSymbol,
  payload,
});

/**
 * Fetch Stock chart rejected action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol - Company stock symbol in uppercase. Ex: AAPL
 * @param error - error message
 */
export const fetchStockDailyAdjRejected: ActionCreator<Actions.DailyAdjusted.FetchRejectedAction> = (
  stockSymbol: string,
  error: Error,
): Actions.DailyAdjusted.FetchRejectedAction => ({
  type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED,
  stockSymbol,
  error,
});

// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
//                                                                                                //
//                                  STOCK BATCH ACTIONS CREATORS                                  //
//                                                                                                //
// ////////////////////////////////////////////////////////////////////////////////////////////// //
// ////////////////////////////////////////////////////////////////////////////////////////////// //

// /**
//  * Fetch multiple stock quote data in a single batch action creator.
//  * ONLY to be called by the front end.
//  * @param stockSymbols - An array of company stock symbol in uppercase. Ex: ['AAPL', 'SHOP]
//  */
// export const fetchStockQuoteBatch: ActionCreator<Actions.Batch.FetchQuoteBatchAction> = (): Actions.Batch.FetchQuoteBatchAction => ({
//   type: ActionTypes.FETCH_STOCK_QUOTE_BATCH,
// });

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
