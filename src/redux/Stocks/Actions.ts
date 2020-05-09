import {
  IGetStockQuoteAC,
  IGetStockChartAC,
  ActionTypesEnum,
  IGetStockQuotePendingAC,
  IGetStockQuoteFulfilledAC,
  IStockQuote,
  IGetStockQuoteRejectedAC,
} from 'src/redux/Stocks/Types';

/**
 * Fetch stock quote action creator.
 * ONLY to be called by the front end.
 * @param stockSymbol Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuote = (stockSymbol: string): IGetStockQuoteAC => ({
  type: ActionTypesEnum.GET_STOCK_QUOTE,
  stockSymbol,
});

/**
 * Fetch stock quote pending action creator.
 * ONLY to be called by redux saga.
 * Only used for internal use.
 * @param stockSymbol Company stock symbol in uppercase. Ex: AAPL
 */
export const fetchStockQuotePending = (stockSymbol: string): IGetStockQuotePendingAC => ({
  type: ActionTypesEnum.GET_STOCK_QUOTE_PENDING,
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
  payload: IStockQuote,
): IGetStockQuoteFulfilledAC => ({
  type: ActionTypesEnum.GET_STOCK_QUOTE_FULFILLED,
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
): IGetStockQuoteRejectedAC => ({
  type: ActionTypesEnum.GET_STOCK_QUOTE_REJECTED,
  stockSymbol,
  error,
});

// ---------------------------------------------------------------------------------------------- //

export const fetchStockChart = (stockSymbol: string): IGetStockChartAC => ({
  type: ActionTypesEnum.GET_STOCK_CHART,
  stockSymbol,
});
