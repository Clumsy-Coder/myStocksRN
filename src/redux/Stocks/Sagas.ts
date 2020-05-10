/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import * as stocksActions from 'src/redux/Stocks/Actions';
import { fetchStockQuoteUrl } from 'src/share/Utilities';
import { StockQuote, FetchStockQuoteAC, ActionTypesEnum } from 'src/redux/Stocks/Types';

/**
 * Initiate the fetching of stock quote.
 * It will dispatch FETCH_STOCK_QUOTE_PENDING action.
 * Once the fetching is successful, it will dispatch FETCH_STOCK_QUOTE_FULFILLED action.
 * If the fetching failed, it will dispatch FETCH_STOCK_QUOTE_REJECTED action.
 *
 * @param action - Fetch stock quote action creator
 * @returns
 */
export function* fetchStockQuoteSaga(action: FetchStockQuoteAC) {
  const url = yield fetchStockQuoteUrl(action.stockSymbol.toUpperCase());

  try {
    yield put(stocksActions.fetchStockQuotePending(action.stockSymbol));
    const response: AxiosResponse<StockQuote> = yield axios.get(url);
    yield put(stocksActions.fetchStockQuoteFulfilled(action.stockSymbol, response.data));
  } catch (error) {
    yield put(stocksActions.fetchStockQuoteRejected(action.stockSymbol, error));
  }
}

export default function* watchStocksSagas() {
  yield takeEvery(ActionTypesEnum.FETCH_STOCK_QUOTE, fetchStockQuoteSaga);
}
