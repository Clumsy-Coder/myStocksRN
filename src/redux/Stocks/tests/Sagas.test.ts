import { runSaga, Saga } from 'redux-saga';
import sinon from 'sinon';
import { AxiosResponse } from 'axios';
import { takeEvery, takeLatest } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import sagaWatcher, {
  fetchStockQuoteSaga,
  fetchStockChartSaga,
  fetchStockQuoteBatchSaga,
  fetchSymbolsMetadataSaga,
} from 'src/redux/Stocks/Sagas';
import { ActionTypes, Actions, DataDomain } from 'src/redux/Stocks/Types';
import * as actions from 'src/redux/Stocks/Actions';
import * as api from '@share/Api';
import { AppState } from 'src/redux/index.reducers';
import * as favoritesSelector from '@redux/Favorites/Selectors';

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
      const dispatchedActions: Actions.StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: Actions.StocksActions): number => dispatchedActions.push(action),
      };
      const promiseResponse: AxiosResponse<DataDomain.Quote> = {
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
      const dispatchedActions: Actions.StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: Actions.StocksActions): number => dispatchedActions.push(action),
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

  describe('Stocks Chart saga', () => {
    it('Should load and handle Stock Chart data in case of success', async () => {
      const dispatchedActions: Actions.StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: Actions.StocksActions): number => dispatchedActions.push(action),
      };
      const promiseResponse: AxiosResponse<DataDomain.Chart[]> = {
        data: testdata.stockChartData1,
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
      };

      const stub = sinon.stub(api, 'fetchStockChartUrl').returns(Promise.resolve(promiseResponse));
      await runSaga(
        fakeStore,
        fetchStockChartSaga,
        actions.fetchStockChart(testdata.stockSymbol1, 'max'),
      );

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockChartPending(testdata.stockSymbol1));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockChartFulfilled(testdata.stockSymbol1, testdata.stockChartData1),
      );

      stub.restore(); // important: do NOT remove
    });

    it('Should load and handle Stock Chart data in case of failure', async () => {
      const dispatchedActions: Actions.StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: Actions.StocksActions): number => dispatchedActions.push(action),
      };

      const stub = sinon.stub(api, 'fetchStockChartUrl').returns(Promise.reject(new Error('')));
      await runSaga(
        fakeStore,
        fetchStockChartSaga,
        actions.fetchStockChart(testdata.stockSymbol1, 'max'),
      );

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockChartPending(testdata.stockSymbol1));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockChartRejected(testdata.stockSymbol1, new Error('')),
      );

      stub.restore(); // important: do NOT remove
    });
  });

  describe('Stocks Symbol Metadata saga', () => {
    it('Should load and handle Stock Symbols Metadata in case of success', async () => {
      const dispatchedActions: Actions.StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: Actions.StocksActions): number => dispatchedActions.push(action),
      };
      const promiseResponse: AxiosResponse<DataDomain.Symbols[]> = {
        data: [testdata.symbolsMetadata1, testdata.symbolsMetadata2, testdata.symbolsMetadata3],
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
      };

      const stub = sinon
        .stub(api, 'fetchSymbolsMetadataUrl')
        .returns(Promise.resolve(promiseResponse));
      await runSaga(fakeStore, fetchSymbolsMetadataSaga, actions.fetchSymbolsMetadata());

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(
        actions.fetchSymbolsMetadataPending(testdata.stockSymbol1),
      );
      expect(dispatchedActions[1]).toEqual(
        actions.fetchSymbolsMetadataFulfilled([
          testdata.symbolsMetadata1,
          testdata.symbolsMetadata2,
          testdata.symbolsMetadata3,
        ]),
      );

      stub.restore(); // important: do NOT remove
    });

    it('Should load and handle Stock Symbols Metadata in case of failure', async () => {
      const dispatchedActions: Actions.StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: Actions.StocksActions): number => dispatchedActions.push(action),
      };

      const stub = sinon
        .stub(api, 'fetchSymbolsMetadataUrl')
        .returns(Promise.reject(new Error('')));
      await runSaga(fakeStore, fetchSymbolsMetadataSaga, actions.fetchSymbolsMetadata());

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchSymbolsMetadataPending());
      expect(dispatchedActions[1]).toEqual(actions.fetchSymbolsMetadataRejected(new Error('')));

      stub.restore(); // important: do NOT remove
    });
  });

  describe('Stock quote batch saga', () => {
    describe('Watcher', () => {
      it(`Should watch ${ActionTypes.FETCH_STOCK_QUOTE_BATCH} action`, () => {
        const gen = sagaWatcher();
        const expected = takeLatest(ActionTypes.FETCH_STOCK_QUOTE_BATCH, fetchStockQuoteBatchSaga);
        gen.next(); // ignore FETCH_STOCK_QUOTE action
        gen.next(); // ignore FETCH_STOCK_CHART action
        const actual = gen.next().value;

        expect(actual).toEqual(expected);
      });
    });

    describe('Saga', () => {
      it('Should load and handle Stock quote batch data in case of success', async () => {
        const dispatchedActions: Actions.StocksActions[] = [];
        const fakeStore = {
          getState: (): AppState => ({
            ...testdata.baseAppState,
            Favorites: {
              symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
            },
          }),
          dispatch: (action: Actions.StocksActions): number => dispatchedActions.push(action),
        };

        const promiseResponse: AxiosResponse<DataDomain.QuoteBatch> = {
          data: {
            [testdata.stockSymbol1]: {
              quote: testdata.stockQuoteData1,
            },
            [testdata.stockSymbol2]: {
              quote: testdata.stockQuoteData2,
            },
            [testdata.stockSymbol3]: {
              quote: testdata.stockQuoteData3,
            },
          },
          headers: {},
          status: 200,
          statusText: '',
          request: {},
          config: {},
        };

        const stub = sinon
          .stub(api, 'fetchStockQuoteBatchUrl')
          .returns(Promise.resolve(promiseResponse));
        await runSaga(
          fakeStore,
          <Saga<any[]>>fetchStockQuoteBatchSaga,
          actions.fetchStockQuoteBatch(),
        );

        expect(stub.calledOnce).toBe(true);
        expect(dispatchedActions.length).toEqual(6);
        expect(dispatchedActions[0]).toEqual(actions.fetchStockQuotePending(testdata.stockSymbol1));
        expect(dispatchedActions[1]).toEqual(actions.fetchStockQuotePending(testdata.stockSymbol2));
        expect(dispatchedActions[2]).toEqual(actions.fetchStockQuotePending(testdata.stockSymbol3));
        expect(dispatchedActions[3]).toEqual(
          actions.fetchStockQuoteFulfilled(testdata.stockSymbol1, testdata.stockQuoteData1),
        );
        expect(dispatchedActions[4]).toEqual(
          actions.fetchStockQuoteFulfilled(testdata.stockSymbol2, testdata.stockQuoteData2),
        );
        expect(dispatchedActions[5]).toEqual(
          actions.fetchStockQuoteFulfilled(testdata.stockSymbol3, testdata.stockQuoteData3),
        );

        stub.restore(); // important: do NOT remove
      });

      it('Should load and handle Stock quote batch data in case of failure', async () => {
        const dispatchedActions: Actions.StocksActions[] = [];
        const fakeStore = {
          getState: (): AppState => ({
            ...testdata.baseAppState,
            Favorites: {
              symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
            },
          }),
          dispatch: (action: Actions.StocksActions): number => dispatchedActions.push(action),
        };

        const stub = sinon
          .stub(api, 'fetchStockQuoteBatchUrl')
          .returns(Promise.reject(new Error('')));
        await runSaga(
          fakeStore,
          <Saga<any[]>>fetchStockQuoteBatchSaga,
          actions.fetchStockQuoteBatch(),
        );

        expect(stub.calledOnce).toBe(true);
        expect(dispatchedActions.length).toEqual(6);
        expect(dispatchedActions[0]).toEqual(actions.fetchStockQuotePending(testdata.stockSymbol1));
        expect(dispatchedActions[1]).toEqual(actions.fetchStockQuotePending(testdata.stockSymbol2));
        expect(dispatchedActions[2]).toEqual(actions.fetchStockQuotePending(testdata.stockSymbol3));
        expect(dispatchedActions[3]).toEqual(
          actions.fetchStockQuoteRejected(testdata.stockSymbol1, new Error('')),
        );
        expect(dispatchedActions[4]).toEqual(
          actions.fetchStockQuoteRejected(testdata.stockSymbol2, new Error('')),
        );
        expect(dispatchedActions[5]).toEqual(
          actions.fetchStockQuoteRejected(testdata.stockSymbol3, new Error('')),
        );

        stub.restore(); // important: do NOT remove
      });
    });
  });
});
