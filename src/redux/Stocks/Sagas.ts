import { put, takeEvery } from 'redux-saga/effects';
import axios, { AxiosResponse } from 'axios';

import * as stocksActions from 'src/redux/Stocks/Actions';
import { fetchStockQuoteUrl } from 'src/share/Utilities';
import { IStockQuote, IGetStockQuoteAC, ActionTypesEnum } from 'src/redux/Stocks/Types';

/**
 * Initiate the fetching of stock quote.
 * It will dispatch GET_STOCK_QUOTE_PENDING action.
 * Once the fetching is successful, it will dispatch GET_STOCK_QUOTE_FULFILLED action.
 * If the fetching failed, it will dispatch GET_STOCK_QUOTE_REJECTED action.
 *
 * @param action Fetch Stock quote action creator
 */
export function* fetchStockQuoteSaga(action: IGetStockQuoteAC) {
  const url = yield fetchStockQuoteUrl(action.stockSymbol.toUpperCase());
  yield put(stocksActions.fetchStockQuotePending(action.stockSymbol));

  try {
    const response: AxiosResponse<IStockQuote> = yield axios.get(url);
    yield put(stocksActions.fetchStockQuoteFulfilled(action.stockSymbol, response.data));
  } catch (error) {
    yield put(stocksActions.fetchStockQuoteRejected(action.stockSymbol, error));
  }
}

export default function* watchStocksSagas() {
  yield takeEvery(ActionTypesEnum.GET_STOCK_QUOTE, fetchStockQuoteSaga);
}
