/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { call, put, all, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import * as stocksActions from 'src/redux/Stocks/Actions';
import * as api from 'src/share/Utilities';
import { ActionTypes, Actions, DataDomain } from 'src/redux/Stocks/Types';
import { selectFavoriteSymbols } from 'src/redux/Favorites/Selectors';
import { Reducer as FavoritesReducer } from 'src/redux/Favorites/Types';

/**
 * Initiate the fetching of stock quote.
 * It will dispatch STOCKS/FETCH_STOCK_QUOTE_PENDING action.
 * Once the fetching is successful, it will dispatch FETCH_STOCK_QUOTE_FULFILLED action.
 * If the fetching failed, it will dispatch FETCH_STOCK_QUOTE_REJECTED action.
 *
 * @param action - Fetch stock quote action creator
 */
export function* fetchStockQuoteSaga(action: Actions.Quote.FetchAction) {
  try {
    yield put(stocksActions.fetchStockQuotePending(action.stockSymbol));
    const response = yield call(api.fetchStockQuoteUrl, action.stockSymbol);
    yield put(stocksActions.fetchStockQuoteFulfilled(action.stockSymbol, response.data));
  } catch (error) {
    yield put(stocksActions.fetchStockQuoteRejected(action.stockSymbol, error));
  }
}

/**
 * Initiate the fetching of stock Daily Adjusted data.
 * It will dispatch STOCKS/FETCH_STOCK_DAILY_ADJUSTED_PENDING action.
 * STOCKS/FETCH_STOCK_DAILY_ADJUSTED_FULFILLED action will be dispatched if data fetching was successful.
 * STOCKS/FETCH_STOCK_DAILY_ADJUSTED_REJECTED action will be dispatched if data fetching was unsuccessful.
 *
 * @param action - Fetch stock Daily Adjusted action
 */
export function* fetchStockDailyAdjustedSaga(action: Actions.DailyAdjusted.FetchAction) {
  try {
    const { stockSymbol, outputsize } = action;
    yield put(stocksActions.fetchStockDailyAdjPending(action.stockSymbol));
    const response = yield call(api.fetchStockDailyAdjustedUrl, stockSymbol, outputsize);
    yield put(stocksActions.fetchStockDailyAdjFulfilled(action.stockSymbol, response.data));
  } catch (error) {
    yield put(stocksActions.fetchStockDailyAdjRejected(action.stockSymbol, error));
  }
}

/**
 * Initiate the fetching of stock quote batch data.
 * It will dispatch STOCKS/FETCH_STOCK_QUOTE_PENDING action to the provided stock symbols.
 * STOCKS/FETCH_STOCK_QUOTE_FULFILLED action will dispatched for corresponding stock symbol if data fetching was successful.
 * STOCKS/FETCH_STOCK_QUOTE_REJECTED action will dispatched for corresponding stock symbol if data fetching was unsuccessful.
 *
 * @param action - Fetch stock quote batch action
 */
export function* fetchStockQuoteBatchSaga(action: Actions.Batch.FetchQuoteAction) {
  try {
    // get favorite stock symbols.
    const stockSymbols: FavoritesReducer.FavoriteStockData[] = yield select(selectFavoriteSymbols);

    // dispatch fetchStockQuotePending action for each stock symbol.
    yield all(
      stockSymbols.map((stock) => put(stocksActions.fetchStockQuotePending(stock['1. symbol']))),
    );

    // call api to fetch stock quote concurrently
    const response: AxiosResponse<DataDomain.StockQuote>[] = yield all(
      stockSymbols.map((stock) => call(api.fetchStockQuoteUrl, stock['1. symbol'])),
    );

    // dispatch fetchStockQuoteFulfilled action for each stock symbol.
    yield all(
      response.map((stock) =>
        put(
          stocksActions.fetchStockQuoteFulfilled(
            stock.data['Global Quote']['01. symbol'],
            stock.data,
          ),
        ),
      ),
    );
  } catch (error) {
    const stockSymbols: FavoritesReducer.FavoriteStockData[] = yield select(selectFavoriteSymbols);

    yield stockSymbols.map((stock) =>
      put(stocksActions.fetchStockQuoteRejected(stock['1. symbol'], error)),
    );
  }
}

// /**
//  * Initiate the fetching of stock chart batch data.
//  * It will dispatch STOCKS/FETCH_STOCK_CHART_PENDING action to the provided stock symbols.
//  * STOCKS/FETCH_STOCK_CHART_FULFILLED action will dispatched for corresponding stock symbol if data fetching was successful.
//  * STOCKS/FETCH_STOCK_CHART_REJECTED action will dispatched for corresponding stock symbol if data fetching was unsuccessful.
//  *
//  * @param action - Fetch stock chart batch action
//  */
// export function* fetchStockChartBatchSaga(action: FetchStockDailyAdjustedBatchAction) {
//   try {
//     const { stockSymbols, range, sort } = action;

//     for (const stock of stockSymbols) {
//       yield put(stocksActions.fetchStockChartPending(stock));
//     }
//     const response: AxiosResponse<StockChartBatch> = yield call(
//       api.fetchStockChartBatchUrl,
//       stockSymbols,
//       range,
//       sort,
//     );
//     const { data } = response;
//     for (const [symbol, stockChartData] of Object.entries(data)) {
//       yield put(stocksActions.fetchStockChartFulfilled(symbol, stockChartData.chart));
//     }
//   } catch (error) {
//     for (const stock of action.stockSymbols) {
//       yield put(stocksActions.fetchStockChartRejected(stock, error));
//     }
//   }
// }

// /**
//  * Initiate the fetching of stock chart batch data.
//  * It will dispatch STOCKS/FETCH_STOCK_QUOTE_PENDING and STOCKS/FETCH_STOCK_CHART_PENDING action to the provided stock symbols.
//  * STOCKS/FETCH_STOCK_QUOTE_FULFILLED and STOCKS/FETCH_STOCK_CHART_FULFILLED action will dispatched for corresponding stock symbol if data fetching was successful.
//  * STOCKS/FETCH_STOCK_QUOTE_REJECTED and STOCKS/FETCH_STOCK_CHART_REJECTED action will dispatched for corresponding stock symbol if data fetching was unsuccessful.
//  *
//  * @param action - Fetch stock chart batch action
//  */
// export function* fetchStockQuoteChartBatchSaga(action: FetchStockQuoteChartBatchAction) {
//   try {
//     const { stockSymbols, range, sort } = action;

//     for (const stock of stockSymbols) {
//       yield put(stocksActions.fetchStockQuotePending(stock));
//       yield put(stocksActions.fetchStockChartPending(stock));
//     }
//     const response: AxiosResponse<StockQuoteChartBatch> = yield call(
//       api.fetchStockQuoteChartBatchUrl,
//       stockSymbols,
//       range,
//       sort,
//     );
//     const { data } = response;
//     for (const [symbol, stockChartData] of Object.entries(data)) {
//       yield put(stocksActions.fetchStockQuoteFulfilled(symbol, stockChartData.quote));
//       yield put(stocksActions.fetchStockChartFulfilled(symbol, stockChartData.chart));
//     }
//   } catch (error) {
//     for (const stock of action.stockSymbols) {
//       yield put(stocksActions.fetchStockQuoteRejected(stock, error));
//       yield put(stocksActions.fetchStockChartRejected(stock, error));
//     }
//   }
// }

export default function* watchStocksSagas() {
  yield takeEvery(ActionTypes.FETCH_STOCK_QUOTE, fetchStockQuoteSaga);
  yield takeEvery(ActionTypes.FETCH_STOCK_DAILY_ADJUSTED, fetchStockDailyAdjustedSaga);
  yield takeLatest(ActionTypes.FETCH_STOCK_QUOTE_BATCH, fetchStockQuoteBatchSaga);
  // yield takeLatest(ActionTypes.FETCH_STOCK_CHART_BATCH, fetchStockChartBatchSaga);
  // yield takeLatest(ActionTypes.FETCH_STOCK_QUOTE_CHART_BATCH, fetchStockQuoteChartBatchSaga);
}
