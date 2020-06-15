import { runSaga } from 'redux-saga';
import sinon from 'sinon';
import { AxiosResponse } from 'axios';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import sagaWatcher, {
  fetchStockQuoteSaga,
  fetchStockDailyAdjustedSaga,
  fetchStockQuoteBatchSaga,
} from 'src/redux/Stocks/Sagas';
import { ActionTypes, StocksActions, DataDomain } from 'src/redux/Stocks/Types';
import * as actions from 'src/redux/Stocks/Actions';
import * as api from 'src/share/Utilities';
import { AppState } from 'src/redux/index.reducers';

import * as testdata from 'jest.testdata';

describe('Stocks Saga', () => {
  describe('Stocks quote watcher', () => {
    it(`Should watch ${ActionTypes.FETCH_STOCK_QUOTE} action`, () => {
      const gen = sagaWatcher();
      const expected = takeEvery(ActionTypes.FETCH_STOCK_QUOTE, fetchStockQuoteSaga);
      const actual = gen.next().value;

      expect(actual).toEqual(expected);
    });

    it(`Should fire on ${ActionTypes.FETCH_STOCK_QUOTE} action in case success`, () => {
      return expectSaga(sagaWatcher)
        .provide([
          [
            matchers.call.fn(api.fetchStockQuoteUrl),
            Promise.resolve({ data: testdata.stockQuoteData1 }),
          ],
        ])
        .put(actions.fetchStockQuotePending(testdata.stockSymbol1))
        .call(api.fetchStockQuoteUrl, testdata.stockSymbol1)
        .put(actions.fetchStockQuoteFulfilled(testdata.stockSymbol1, testdata.stockQuoteData1))
        .not.put(actions.fetchStockQuoteRejected(testdata.stockSymbol1, new Error('')))
        .dispatch(actions.fetchStockQuote(testdata.stockSymbol1))
        .silentRun()
        .then((result) => expect(result.toJSON()).toMatchSnapshot());
    });

    it(`Should fire on ${ActionTypes.FETCH_STOCK_QUOTE} action in case failure`, () => {
      return expectSaga(sagaWatcher)
        .provide([[matchers.call.fn(api.fetchStockQuoteUrl), Promise.reject(new Error(''))]])
        .put(actions.fetchStockQuotePending(testdata.stockSymbol1))
        .call(api.fetchStockQuoteUrl, testdata.stockSymbol1)
        .put(actions.fetchStockQuoteRejected(testdata.stockSymbol1, new Error('')))
        .not.put(actions.fetchStockQuoteFulfilled(testdata.stockSymbol1, testdata.stockQuoteData1))
        .dispatch(actions.fetchStockQuote(testdata.stockSymbol1))
        .silentRun()
        .then((result) => expect(result.toJSON()).toMatchSnapshot());
    });
  });

  describe('Stocks quote saga', () => {
    it('Should load and handle Stock quote data in case of success', async () => {
      const dispatchedActions: StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StocksActions): number => dispatchedActions.push(action),
      };
      const promiseResponse: AxiosResponse<DataDomain.StockQuote> = {
        data: testdata.stockQuoteData1,
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
      };

      const stub = sinon.stub(api, 'fetchStockQuoteUrl').returns(Promise.resolve(promiseResponse));
      await runSaga(fakeStore, fetchStockQuoteSaga, actions.fetchStockQuote(testdata.stockSymbol1));

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockQuotePending(testdata.stockSymbol1));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockQuoteFulfilled(testdata.stockSymbol1, testdata.stockQuoteData1),
      );

      stub.restore(); // important: do NOT remove
    });

    it('Should load and handle Stock quote data in case of failure', async () => {
      const dispatchedActions: StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StocksActions): number => dispatchedActions.push(action),
      };

      const stub = sinon.stub(api, 'fetchStockQuoteUrl').returns(Promise.reject(new Error('')));
      await runSaga(fakeStore, fetchStockQuoteSaga, actions.fetchStockQuote(testdata.stockSymbol1));

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockQuotePending(testdata.stockSymbol1));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockQuoteRejected(testdata.stockSymbol1, new Error('')),
      );

      stub.restore(); // important: do NOT remove
    });
  });

  describe('Stocks Daily Adjusted saga', () => {
    it('Should load and handle Stock Daily Adjusted data in case of success', async () => {
      const dispatchedActions: StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StocksActions): number => dispatchedActions.push(action),
      };
      const promiseResponse: AxiosResponse<DataDomain.StockDailyAdj> = {
        data: testdata.stockDailyAdjData1,
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
      };

      const stub = sinon
        .stub(api, 'fetchStockDailyAdjustedUrl')
        .returns(Promise.resolve(promiseResponse));
      await runSaga(
        fakeStore,
        fetchStockDailyAdjustedSaga,
        actions.fetchStockDailyAdj(testdata.stockSymbol1, 'compact'),
      );

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(
        actions.fetchStockDailyAdjPending(testdata.stockSymbol1),
      );
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockDailyAdjFulfilled(testdata.stockSymbol1, testdata.stockDailyAdjData1),
      );

      stub.restore(); // important: do NOT remove
    });

    it('Should load and handle Stock Daily Adjusted data in case of failure', async () => {
      const dispatchedActions: StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StocksActions): number => dispatchedActions.push(action),
      };

      const stub = sinon
        .stub(api, 'fetchStockDailyAdjustedUrl')
        .returns(Promise.reject(new Error('')));
      await runSaga(
        fakeStore,
        fetchStockDailyAdjustedSaga,
        actions.fetchStockDailyAdj(testdata.stockSymbol1, 'compact'),
      );

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(
        actions.fetchStockDailyAdjPending(testdata.stockSymbol1),
      );
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockDailyAdjRejected(testdata.stockSymbol1, new Error('')),
      );

      stub.restore(); // important: do NOT remove
    });
  });

  describe('Stock quote batch saga', () => {
    describe('Watcher', () => {
      it(`Should watch ${ActionTypes.FETCH_STOCK_QUOTE_BATCH} action`, () => {
        const gen = sagaWatcher();
        const expected = takeLatest(ActionTypes.FETCH_STOCK_QUOTE_BATCH, fetchStockQuoteBatchSaga);
        gen.next(); // ignore FETCH_STOCK_QUOTE action
        gen.next(); // ignore FETCH_STOCK_DAILY_ADJUSTED action
        const actual = gen.next().value;

        expect(actual).toEqual(expected);
      });
    });

    describe('Saga', () => {
      it('Should dispatch action to fetch Stock quote for every stock symbol', async () => {
        const rootState: AppState = {
          Stocks: {
            symbols: {},
            search: {},
          },
          Favorites: {
            symbols: [
              testdata.stockSearchData1.bestMatches[0],
              testdata.stockSearchData2.bestMatches[0],
              testdata.stockSearchData3.bestMatches[0],
            ],
          },
        };

        return expectSaga(fetchStockQuoteBatchSaga, actions.fetchStockQuoteBatch())
          .withState(rootState)
          .put(actions.fetchStockQuote(testdata.stockSymbol1))
          .put(actions.fetchStockQuote(testdata.stockSymbol2))
          .put(actions.fetchStockQuote(testdata.stockSymbol3))
          .dispatch(actions.fetchStockQuoteBatch())
          .silentRun()
          .then((result) => expect(result.toJSON()).toMatchSnapshot());
      });
    });
  });
});
