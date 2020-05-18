/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { call, put, takeEvery } from 'redux-saga/effects';

import * as stocksActions from 'src/redux/Stocks/Actions';
import * as api from 'src/share/Utilities';
import { FetchStockQuoteAC, ActionTypesEnum, FetchStockChartAC } from 'src/redux/Stocks/Types';

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
  try {
    yield put(stocksActions.fetchStockQuotePending(action.stockSymbol));
    const response = yield call(api.fetchStockQuoteUrl, action.stockSymbol);
    yield put(stocksActions.fetchStockQuoteFulfilled(action.stockSymbol, response.data));
  } catch (error) {
    yield put(stocksActions.fetchStockQuoteRejected(action.stockSymbol, error));
  }
}

/**
 * Initiate the fetching of stock chart data.
 * It will dispatch STOCKS/FETCH_STOCK_CHART_PENDING action.
 * STOCKS/FETCH_STOCK_CHART_FULFILLED action will be dispatched if data fetching was successful.
 * STOCKS/FETCH_STOCK_CHART_REJECTED action will be dispatched if data fetching was unsuccessful.
 *
 * @param action - Fetch stock chart action
 */
export function* fetchStockChartSaga(action: FetchStockChartAC) {
  try {
    const { stockSymbol, range, sort } = action;
    yield put(stocksActions.fetchStockChartPending(action.stockSymbol));
    const response = yield call(api.fetchStockChartUrl, stockSymbol, range, sort);
    yield put(stocksActions.fetchStockChartFulfilled(action.stockSymbol, response.data));
  } catch (error) {
    yield put(stocksActions.fetchStockChartRejected(action.stockSymbol, error));
  }
}

export default function* watchStocksSagas() {
  yield takeEvery(ActionTypesEnum.FETCH_STOCK_QUOTE, fetchStockQuoteSaga);
  yield takeEvery(ActionTypesEnum.FETCH_STOCK_CHART, fetchStockChartSaga);
}
