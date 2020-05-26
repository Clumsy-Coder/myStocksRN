import * as actions from 'src/redux/Stocks/Actions';
import { ActionTypes, DataDomain, Actions } from 'src/redux/Stocks/Types';

const stockSymbol1 = 'IBM';
const stockSymbol2 = 'AAPL';

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

describe('Stock action creators', () => {
  describe('Stock quotes', () => {
    it('Should create an action to fetch Stock quote', () => {
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE,
        stockSymbol: stockSymbol1,
      };
      expect(actions.fetchStockQuote(stockSymbol1)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote PENDING', () => {
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
        stockSymbol: stockSymbol1,
      };
      expect(actions.fetchStockQuotePending(stockSymbol1)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote FULFILLED', () => {
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
        stockSymbol: stockSymbol1,
        payload: stockQuoteData1,
      };
      expect(actions.fetchStockQuoteFulfilled(stockSymbol1, stockQuoteData1)).toEqual(
        expectedAction,
      );
    });

    it('Should create an action to fetch Stock quote REJECTED', () => {
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
        stockSymbol: stockSymbol1,
        error: new Error(''),
      };
      expect(actions.fetchStockQuoteRejected(stockSymbol1, new Error(''))).toEqual(expectedAction);
    });
  });

  describe('Stock Daily Adjusted', () => {
    it('Should create an action to fetch Stock Daily Adjusted', () => {
      const expectedAction: Actions.DailyAdjusted.FetchAction = {
        type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED,
        stockSymbol: stockSymbol1,
        outputsize: 'compact',
      };
      expect(actions.fetchStockDailyAdj(stockSymbol1, 'compact')).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock Daily Adjusted PENDING', () => {
      const expectedAction: Actions.DailyAdjusted.FetchPendingAction = {
        type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING,
        stockSymbol: stockSymbol1,
      };
      expect(actions.fetchStockDailyAdjPending(stockSymbol1)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock Daily Adjusted FULFILLED', () => {
      const expectedAction: Actions.DailyAdjusted.FetchFulfilledAction = {
        type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED,
        stockSymbol: stockSymbol1,
        payload: stockDailyAdjData1,
      };
      expect(actions.fetchStockDailyAdjFulfilled(stockSymbol1, stockDailyAdjData1)).toEqual(
        expectedAction,
      );
    });

    it('Should create an action to fetch Stock Daily Adjusted REJECTED', () => {
      const expectedAction: Actions.DailyAdjusted.FetchRejectedAction = {
        type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED,
        stockSymbol: stockSymbol1,
        error: new Error(''),
      };
      expect(actions.fetchStockDailyAdjRejected(stockSymbol1, new Error(''))).toEqual(
        expectedAction,
      );
    });
  });
});
