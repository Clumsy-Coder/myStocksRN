/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { call, put, all, takeEvery, takeLatest, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';

import * as stocksActions from 'src/redux/Stocks/Actions';
import * as api from '@share/Api';
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
 * Initiate the fetching of stock Chart data.
 * It will dispatch STOCKS/FETCH_STOCK_CHART_PENDING action.
 * STOCKS/FETCH_STOCK_CHART_FULFILLED action will be dispatched if data fetching was successful.
 * STOCKS/FETCH_STOCK_CHART_REJECTED action will be dispatched if data fetching was unsuccessful.
 *
 * @param action - Fetch stock Chart action
 */
export function* fetchStockChartSaga(action: Actions.Chart.FetchAction) {
  try {
    const { stockSymbol, chartRange } = action;
    yield put(stocksActions.fetchStockChartPending(action.stockSymbol));
    const response = yield call(api.fetchStockChartUrl, stockSymbol, chartRange);
    yield put(stocksActions.fetchStockChartFulfilled(action.stockSymbol, response.data));
  } catch (error) {
    yield put(stocksActions.fetchStockChartRejected(action.stockSymbol, error));
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
    const stockSymbols: string[] = yield select(selectFavoriteSymbols);
    yield all(stockSymbols.map((stock) => put(stocksActions.fetchStockQuotePending(stock))));

    const response: AxiosResponse<DataDomain.QuoteBatch> = yield call(
      api.fetchStockChartBatchUrl,
      stockSymbols,
    );
    const { data } = response;

    yield all(
      stockSymbols.map((stock) =>
        put(stocksActions.fetchStockQuoteFulfilled(stock, data[stock].quote)),
      ),
    );
  } catch (error) {
    const stockSymbols: string[] = yield select(selectFavoriteSymbols);
    yield all(stockSymbols.map((stock) => put(stocksActions.fetchStockQuoteRejected(stock))));
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
// export function* fetchStockChartBatchSaga(action: FetchStockChartBatchAction) {
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

/**
 * Initiate the fetching of Symbols metadata.
 *
 * It will dispatch STOCKS/FETCH_SYMBOLS_METADATA_PENDING action.
 * STOCKS/FETCH_SYMBOLS_METADATA_FULFILLED action is dispatched if data fetching was successful.
 * STOCKS/FETCH_SYMBOLS_METADATA_REJECTED action is dispatched if data fetching was unsuccessful.
 *
 * @param action - Fetch Symbols metadata action
 */
export function* fetchSymbolsMetadataSaga(action: Actions.SymbolsMetadata.FetchAction) {
  try {
    yield put(stocksActions.fetchSymbolsMetadataPending());
    const response = yield call(api.fetchSymbolsMetadataUrl);
    yield put(stocksActions.fetchSymbolsMetadataFulfilled(response.data));
  } catch (error) {
    yield put(stocksActions.fetchSymbolsMetadataRejected(error));
  }
}

export default function* watchStocksSagas() {
  yield takeEvery(ActionTypes.FETCH_STOCK_QUOTE, fetchStockQuoteSaga);
  yield takeEvery(ActionTypes.FETCH_STOCK_CHART, fetchStockChartSaga);
  yield takeLatest(ActionTypes.FETCH_STOCK_QUOTE_BATCH, fetchStockQuoteBatchSaga);
  // yield takeLatest(ActionTypes.FETCH_STOCK_CHART_BATCH, fetchStockChartBatchSaga);
  // yield takeLatest(ActionTypes.FETCH_STOCK_QUOTE_CHART_BATCH, fetchStockQuoteChartBatchSaga);
  yield takeLatest(ActionTypes.FETCH_SYMBOLS_METADATA, fetchSymbolsMetadataSaga);
}
