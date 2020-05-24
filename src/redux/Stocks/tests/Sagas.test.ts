import { runSaga } from 'redux-saga';
import sinon from 'sinon';
import { AxiosResponse } from 'axios';
import { takeEvery } from 'redux-saga/effects';
import { expectSaga } from 'redux-saga-test-plan';
import * as matchers from 'redux-saga-test-plan/matchers';

import sagaWatcher, {
  fetchStockQuoteSaga,
  fetchStockDailyAdjustedSaga,
} from 'src/redux/Stocks/Sagas';
import { ActionTypes, StocksActions, DataDomain, Actions } from 'src/redux/Stocks/Types';
import * as actions from 'src/redux/Stocks/Actions';
import * as api from 'src/share/Utilities';

const stockSymbol1 = 'IBM';
const stockSymbol2 = 'AAPL';
const stockSymbol3 = 'SHOP';
const stockQuoteData1: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'IBM',
    '02. open': '119.3700',
    '03. high': '119.4650',
    '04. low': '117.5900',
    '05. price': '118.3900',
    '06. volume': '4179906',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '119.1200',
    '09. change': '-0.7300',
    '10. change percent': '-0.6128%',
  },
};

const stockQuoteData2: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'AAPL',
    '02. open': '315.7700',
    '03. high': '319.2300',
    '04. low': '315.3500',
    '05. price': '318.8900',
    '06. volume': '20240356',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '316.8500',
    '09. change': '2.0400',
    '10. change percent': '0.6438%',
  },
};

const stockQuoteData3: DataDomain.StockQuote = {
  'Global Quote': {
    '01. symbol': 'SHOP',
    '02. open': '804.6300',
    '03. high': '826.3799',
    '04. low': '793.6400',
    '05. price': '825.1700',
    '06. volume': '2761628',
    '07. latest trading day': '2020-05-22',
    '08. previous close': '802.3500',
    '09. change': '22.8200',
    '10. change percent': '2.8441%',
  },
};

const stockDailyAdjData1: DataDomain.StockDailyAdj = {
  'Meta Data': {
    '1. Information': 'Daily Time Series with Splits and Dividend Events',
    '2. Symbol': 'IBM',
    '3. Last Refreshed': '2020-05-22',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2020-05-22': {
      '1. open': '119.3700',
      '2. high': '119.4650',
      '3. low': '117.5900',
      '4. close': '118.3900',
      '5. adjusted close': '118.3900',
      '6. volume': '4179906',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
    '2020-05-21': {
      '1. open': '120.9900',
      '2. high': '121.7200',
      '3. low': '118.9700',
      '4. close': '119.1200',
      '5. adjusted close': '119.1200',
      '6. volume': '4018329',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
  },
};

const stockDailyAdjData2: DataDomain.StockDailyAdj = {
  'Meta Data': {
    '1. Information': 'Daily Time Series with Splits and Dividend Events',
    '2. Symbol': 'AAPL',
    '3. Last Refreshed': '2020-05-22',
    '4. Output Size': 'Compact',
    '5. Time Zone': 'US/Eastern',
  },
  'Time Series (Daily)': {
    '2020-05-22': {
      '1. open': '315.7700',
      '2. high': '319.2300',
      '3. low': '315.3500',
      '4. close': '318.8900',
      '5. adjusted close': '318.8900',
      '6. volume': '20240356',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
    '2020-05-21': {
      '1. open': '318.6600',
      '2. high': '320.8900',
      '3. low': '315.8700',
      '4. close': '316.8500',
      '5. adjusted close': '316.8500',
      '6. volume': '25672211',
      '7. dividend amount': '0.0000',
      '8. split coefficient': '1.0000',
    },
  },
};

const stockSearchData: DataDomain.StockSearch = {
  bestMatches: [
    {
      '1. symbol': 'IBM',
      '2. name': 'International Business Machines Corporation',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'IBMM',
      '2. name': 'iShares iBonds Dec 2024 Term Muni Bond ETF',
      '3. type': 'ETF',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '0.8571',
    },
  ],
};

const stockSearchData2: DataDomain.StockSearch = {
  bestMatches: [
    {
      '1. symbol': 'AAPL',
      '2. name': 'Apple Inc.',
      '3. type': 'Equity',
      '4. region': 'United States',
      '5. marketOpen': '09:30',
      '6. marketClose': '16:00',
      '7. timezone': 'UTC-05',
      '8. currency': 'USD',
      '9. matchScore': '1.0000',
    },
    {
      '1. symbol': 'AAPL.ARG',
      '2. name': 'Apple Inc.',
      '3. type': 'Equity',
      '4. region': 'Argentina',
      '5. marketOpen': '11:00',
      '6. marketClose': '17:00',
      '7. timezone': 'UTC-03',
      '8. currency': 'ARS',
      '9. matchScore': '0.7273',
    },
  ],
};

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
          [matchers.call.fn(api.fetchStockQuoteUrl), Promise.resolve({ data: stockQuoteData1 })],
        ])
        .put(actions.fetchStockQuotePending(stockSymbol1))
        .call(api.fetchStockQuoteUrl, stockSymbol1)
        .put(actions.fetchStockQuoteFulfilled(stockSymbol1, stockQuoteData1))
        .not.put(actions.fetchStockQuoteRejected(stockSymbol1, new Error('')))
        .dispatch(actions.fetchStockQuote(stockSymbol1))
        .silentRun()
        .then((result) => expect(result.toJSON()).toMatchSnapshot());
    });

    it(`Should fire on ${ActionTypes.FETCH_STOCK_QUOTE} action in case failure`, () => {
      return expectSaga(sagaWatcher)
        .provide([[matchers.call.fn(api.fetchStockQuoteUrl), Promise.reject(new Error(''))]])
        .put(actions.fetchStockQuotePending(stockSymbol1))
        .call(api.fetchStockQuoteUrl, stockSymbol1)
        .put(actions.fetchStockQuoteRejected(stockSymbol1, new Error('')))
        .not.put(actions.fetchStockQuoteFulfilled(stockSymbol1, stockQuoteData1))
        .dispatch(actions.fetchStockQuote(stockSymbol1))
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
        data: stockQuoteData1,
        headers: {},
        status: 200,
        statusText: '',
        request: {},
        config: {},
      };

      const stub = sinon.stub(api, 'fetchStockQuoteUrl').returns(Promise.resolve(promiseResponse));
      await runSaga(fakeStore, fetchStockQuoteSaga, actions.fetchStockQuote(stockSymbol1));

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockQuotePending(stockSymbol1));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockQuoteFulfilled(stockSymbol1, stockQuoteData1),
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
      await runSaga(fakeStore, fetchStockQuoteSaga, actions.fetchStockQuote(stockSymbol1));

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockQuotePending(stockSymbol1));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockQuoteRejected(stockSymbol1, new Error('')),
      );

      stub.restore(); // important: do NOT remove
    });
  });

  describe('Stocks chart saga', () => {
    it('Should load and handle Stock chart data in case of success', async () => {
      const dispatchedActions: StocksActions[] = [];
      const fakeStore = {
        getState: (): {} => ({}),
        dispatch: (action: StocksActions): number => dispatchedActions.push(action),
      };
      const promiseResponse: AxiosResponse<DataDomain.StockDailyAdj> = {
        data: stockDailyAdjData1,
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
        actions.fetchStockDailyAdj(stockSymbol1, 'compact'),
      );

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockDailyAdjPending(stockSymbol1));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockDailyAdjFulfilled(stockSymbol1, stockDailyAdjData1),
      );

      stub.restore(); // important: do NOT remove
    });

    it('Should load and handle Stock chart data in case of failure', async () => {
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
        actions.fetchStockDailyAdj(stockSymbol1, 'compact'),
      );

      expect(stub.calledOnce).toBe(true);
      expect(dispatchedActions.length).toEqual(2);
      expect(dispatchedActions[0]).toEqual(actions.fetchStockDailyAdjPending(stockSymbol1));
      expect(dispatchedActions[1]).toEqual(
        actions.fetchStockDailyAdjRejected(stockSymbol1, new Error('')),
      );

      stub.restore(); // important: do NOT remove
    });
  });
});
