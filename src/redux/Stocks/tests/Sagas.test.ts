import { runSaga } from 'redux-saga';
import sinon from 'sinon';
import { AxiosResponse } from 'axios';
import { takeEvery } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import sagaWatcher, { fetchStockQuoteSaga, fetchStockChartSaga } from 'src/redux/Stocks/Sagas';
import { StockQuote, StockActionTypes, ActionTypesEnum, StockChart } from 'src/redux/Stocks/Types';
import * as actions from 'src/redux/Stocks/Actions';
import * as api from 'src/share/Utilities';

const stockSymbol = 'AAPL';
const data1: StockQuote = {
  symbol: 'AAPL',
  companyName: 'AAPL, Inc.',
  primaryExchange: 'NghcwnSo k ktxeor eYacE',
  open: 733,
  close: 744.34,
  high: 736,
  low: 725,
  latestPrice: 720.32,
  latestTime: 'May 8, 2020',
  latestUpdate: 1625938639425,
  latestVolume: 4134691,
  extendedPrice: 726.91,
  extendedChange: 3.1,
  extendedChangePercent: 0.4194815319493806,
  previousClose: 730.16,
  previousVolume: 4741435,
  change: -13.97,
  changePercent: -1.966,
  avgTotalVolume: 4147824,
  marketCap: 83884683022,
  peRatio: -626.03,
  week52High: 749.47,
  week52Low: 247.61,
  ytdChange: 75.35366771277485,
};

const stockChartData1: StockChart[] = [
  {
    date: '2020-05-11',
    open: 710.61,
    close: 758.74,
    high: 770.9,
    low: 737.75,
    volume: 3675742,
    change: 0,
    changePercent: 0,
    label: 'May 11',
    changeOverTime: 0,
  },
  {
    date: '2020-05-12',
    open: 798,
    close: 750.68,
    high: 803.67,
    low: 743.5,
    volume: 3773050,
    change: -8.41,
    changePercent: -1.0796,
    label: 'May 12',
    changeOverTime: -0.010945,
  },
];

describe('Stocks Saga', () => {
  describe('Stocks quote watcher', () => {
    it(`Should watch ${ActionTypesEnum.FETCH_STOCK_QUOTE} action`, () => {
      const gen = sagaWatcher();
      const expected = takeEvery(ActionTypesEnum.FETCH_STOCK_QUOTE, fetchStockQuoteSaga);
      const actual = gen.next().value;

      expect(actual).toEqual(expected);
    });

    it(`Should fire on ${ActionTypesEnum.FETCH_STOCK_QUOTE} action in case success`, () => {
      return expectSaga(sagaWatcher)
        .provide([[matchers.call.fn(api.fetchStockQuoteUrl), Promise.resolve({ data: data1 })]])
        .put(actions.fetchStockQuotePending(stockSymbol))
        .call(api.fetchStockQuoteUrl, stockSymbol)
        .put(actions.fetchStockQuoteFulfilled(stockSymbol, data1))
        .not.put(actions.fetchStockQuoteRejected(stockSymbol, new Error('')))
        .dispatch(actions.fetchStockQuote(stockSymbol))
        .silentRun()
        .then((result) => expect(result.toJSON()).toMatchSnapshot());
    });

    it(`Should fire on ${ActionTypesEnum.FETCH_STOCK_QUOTE} action in case failure`, () => {
      return expectSaga(sagaWatcher)
        .provide([[matchers.call.fn(api.fetchStockQuoteUrl), Promise.reject(new Error(''))]])
        .put(actions.fetchStockQuotePending(stockSymbol))
        .call(api.fetchStockQuoteUrl, stockSymbol)
        .put(actions.fetchStockQuoteRejected(stockSymbol, new Error('')))
        .not.put(actions.fetchStockQuoteFulfilled(stockSymbol, data1))
        .dispatch(actions.fetchStockQuote(stockSymbol))
        .silentRun()
        .then((result) => expect(result.toJSON()).toMatchSnapshot());
    });
  });

  describe('Stocks quote saga', () => {
    it('Should load and handle Stock quote data in case of success', async () => {
      const dispatchedActions: StockActionTypes[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StockActionTypes): number => dispatchedActions.push(action),
      };
      const promiseResponse: AxiosResponse<StockQuote> = {
        data: data1,
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
      };

      const stub = sinon.stub(api, 'fetchStockQuoteUrl').returns(Promise.resolve(promiseResponse));
      await runSaga(fakeStore, fetchStockQuoteSaga, actions.fetchStockQuote(stockSymbol));

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockQuotePending(stockSymbol));
      expect(dispatchedActions[1]).toEqual(actions.fetchStockQuoteFulfilled(stockSymbol, data1));

      stub.restore(); // important: do NOT remove
    });

    it('Should load and handle Stock quote data in case of failure', async () => {
      const dispatchedActions: StockActionTypes[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StockActionTypes): number => dispatchedActions.push(action),
      };

      const stub = sinon.stub(api, 'fetchStockQuoteUrl').returns(Promise.reject(new Error('')));
      await runSaga(fakeStore, fetchStockQuoteSaga, actions.fetchStockQuote(stockSymbol));

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockQuotePending(stockSymbol));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockQuoteRejected(stockSymbol, new Error('')),
      );

      stub.restore(); // important: do NOT remove
    });
  });

  describe('Stocks chart saga', () => {
    it('Should load and handle Stock chart data in case of success', async () => {
      const dispatchedActions: StockActionTypes[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StockActionTypes): number => dispatchedActions.push(action),
      };
      const promiseResponse: AxiosResponse<StockChart[]> = {
        data: stockChartData1,
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
        actions.fetchStockChart(stockSymbol, '5d', 'asc'),
      );

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockChartPending(stockSymbol));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockChartFulfilled(stockSymbol, stockChartData1),
      );

      stub.restore(); // important: do NOT remove
    });

    it('Should load and handle Stock chart data in case of failure', async () => {
      const dispatchedActions: StockActionTypes[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StockActionTypes): number => dispatchedActions.push(action),
      };

      const stub = sinon.stub(api, 'fetchStockChartUrl').returns(Promise.reject(new Error('')));
      await runSaga(
        fakeStore,
        fetchStockChartSaga,
        actions.fetchStockChart(stockSymbol, '5d', 'asc'),
      );

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockChartPending(stockSymbol));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockChartRejected(stockSymbol, new Error('')),
      );

      stub.restore(); // important: do NOT remove
    });
  });
});
