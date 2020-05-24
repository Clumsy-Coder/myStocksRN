import reducer from 'src/redux/Stocks/Reducer';
import { ActionTypes, DataDomain, Reducer, Actions } from 'src/redux/Stocks/Types';

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

describe('Stocks reducer', () => {
  describe('Stocks quote', () => {
    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_PENDING}`, () => {
      it('Should handle one Stock quote', () => {
        const state: Reducer.ReducerState = {};
        const action: Actions.Quote.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        expect(reducer(state, action)).toEqual(expected);
      });
      it('Should handle two Stock quotes', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const action: Actions.Quote.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle three Stock quotes', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: false,
              error: undefined,
            },
          },
        };
        const action: Actions.Quote.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: stockSymbol3,
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: false,
              error: undefined,
            },
          },
          [stockSymbol3]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_FULFILLED}`, () => {
      it('Should handle one Stock quote', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
        };
        const action: Actions.Quote.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: stockSymbol1,
          payload: stockQuoteData1,
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle two Stock quotes', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData2,
            },
          },
        };

        const action: Actions.Quote.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: stockSymbol2,
          payload: stockQuoteData2,
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle three Stock quotes', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
          [stockSymbol3]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
          [stockSymbol3]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData3,
            },
          },
        };

        const action: Actions.Quote.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: stockSymbol3,
          payload: stockQuoteData3,
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_REJECTED}`, () => {
      it('Should handle one Stock quote', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: new Error(''),
            },
          },
        };
        const action: Actions.Quote.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: stockSymbol1,
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle two Stock quotes', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: false,
              error: new Error(''),
            },
          },
        };
        const action: Actions.Quote.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: stockSymbol2,
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle three Stock quotes', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData2,
            },
          },
          [stockSymbol3]: {
            quote: {
              fetching: false,
              error: new Error(''),
            },
          },
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData1,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: false,
              error: undefined,
              data: stockQuoteData2,
            },
          },
          [stockSymbol3]: {
            quote: {
              fetching: false,
              error: new Error(''),
            },
          },
        };
        const action: Actions.Quote.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: stockSymbol3,
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });

  describe('Stocks chart', () => {
    describe(`${ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING,
          stockSymbol: stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            dailyAdj: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING,
          stockSymbol: stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            dailyAdj: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED,
          stockSymbol: stockSymbol1,
          payload: stockDailyAdjData1,
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            dailyAdj: {
              fetching: false,
              error: undefined,
              data: stockDailyAdjData1,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            dailyAdj: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED,
          stockSymbol: stockSymbol2,
          payload: stockDailyAdjData2,
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            dailyAdj: {
              fetching: false,
              error: undefined,
              data: stockDailyAdjData2,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED,
          stockSymbol: stockSymbol1,
          error: new Error(''),
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            dailyAdj: {
              fetching: false,
              error: new Error(''),
              data: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            dailyAdj: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED,
          stockSymbol: stockSymbol2,
          error: new Error(''),
        };
        const expected: Reducer.ReducerState = {
          [stockSymbol1]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          [stockSymbol2]: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            dailyAdj: {
              fetching: false,
              error: new Error(''),
              data: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
