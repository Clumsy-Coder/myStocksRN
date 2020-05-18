import reducer from 'src/redux/Stocks/Reducer';
import {
  ActionTypes,
  StockQuote,
  StockChart,
  StocksReducerState,
  FetchStockQuotePendingAction,
  FetchStockQuoteFulfilledAction,
  FetchStockQuoteRejectedAction,
  FetchStockChartPendingAction,
  FetchStockChartFulfilledAction,
  FetchStockChartRejectedAction,
} from 'src/redux/Stocks/Types';

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

describe('Stocks reducer', () => {
  describe('Stocks quote', () => {
    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_PENDING}`, () => {
      it('Should handle one Stock quote', () => {
        const state: StocksReducerState = {};
        const action: FetchStockQuotePendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: 'AAPL',
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        expect(reducer(state, action)).toEqual(expected);
      });
      it('Should handle two Stock quotes', () => {
        const state2: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const action2: FetchStockQuotePendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: 'SHOP',
        };
        const expected2: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        expect(reducer(state2, action2)).toEqual(expected2);
      });

      it('Should handle three Stock quotes', () => {
        const state3: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: false,
              error: undefined,
            },
          },
        };
        const action3: FetchStockQuotePendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: 'AMZN',
        };
        const expected3: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: false,
              error: undefined,
            },
          },
          AMZN: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };

        expect(reducer(state3, action3)).toEqual(expected3);
      });
    });

    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_FULFILLED}`, () => {
      const data: StockQuote = {
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

      const data2: StockQuote = {
        symbol: 'AMZN',
        companyName: 'Amazon.com, Inc.',
        primaryExchange: 'ASNDQA',
        open: 733,
        close: 744.34,
        high: 736,
        low: 725,
        latestPrice: 2450.054,
        latestTime: '12:24:25 PM',
        latestUpdate: 1655573764729,
        latestVolume: 4134691,
        extendedPrice: 726.91,
        extendedChange: 3.1,
        extendedChangePercent: 0.4194815319493806,
        previousClose: 2460.16,
        previousVolume: 3281429,
        change: 27.249,
        changePercent: 1.159,
        avgTotalVolume: 5657375,
        marketCap: 1240038670201,
        peRatio: 117.4,
        week52High: 2495,
        week52Low: 1649.69,
        ytdChange: 29.266,
      };

      const data3: StockQuote = {
        symbol: 'TSLA',
        companyName: 'Tesla, Inc.',
        primaryExchange: 'QNADSA',
        open: 733,
        close: 744.34,
        high: 736,
        low: 725,
        latestPrice: 850.44,
        latestTime: '12:32:20 PM',
        latestUpdate: 1600998619958,
        latestVolume: 4134691,
        extendedPrice: 726.91,
        extendedChange: 3.1,
        extendedChangePercent: 0.4194815319493806,
        previousClose: 826.56,
        previousVolume: 16839279,
        change: -6,
        changePercent: -0.739,
        avgTotalVolume: 18172797,
        marketCap: 156381480781,
        peRatio: -996.67,
        week52High: 978.98,
        week52Low: 179.8,
        ytdChange: 95.963,
      };
      it('Should handle one Stock quote', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
        };
        const action: FetchStockQuoteFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: 'AAPL',
          payload: {
            data,
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle two Stock quotes', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
          AMZN: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
          AMZN: {
            quote: {
              fetching: false,
              error: undefined,
              data: data2,
            },
          },
        };

        const action: FetchStockQuoteFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: 'AMZN',
          payload: {
            data: data2,
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle three Stock quotes', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
          AMZN: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
          TSLA: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
          AMZN: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
          TSLA: {
            quote: {
              fetching: false,
              error: undefined,
              data: data3,
            },
          },
        };

        const action: FetchStockQuoteFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: 'TSLA',
          payload: {
            data: data3,
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_REJECTED}`, () => {
      it('Should handle one Stock quote', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: new Error(''),
            },
          },
        };
        const action: FetchStockQuoteRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: 'AAPL',
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle two Stock quotes', () => {
        const data: StockQuote = {
          symbol: 'AMZN',
          companyName: 'Amazon.com, Inc.',
          primaryExchange: 'ASNDQA',
          open: 733,
          close: 744.34,
          high: 736,
          low: 725,
          latestPrice: 2450.054,
          latestTime: '12:24:25 PM',
          latestUpdate: 1655573764729,
          latestVolume: 4134691,
          extendedPrice: 726.91,
          extendedChange: 3.1,
          extendedChangePercent: 0.4194815319493806,
          previousClose: 2460.16,
          previousVolume: 3281429,
          change: 27.249,
          changePercent: 1.159,
          avgTotalVolume: 5657375,
          marketCap: 1240038670201,
          peRatio: 117.4,
          week52High: 2495,
          week52Low: 1649.69,
          ytdChange: 29.266,
        };

        const state: StocksReducerState = {
          AMZN: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
          TSLA: {
            quote: {
              fetching: true,
              error: undefined,
            },
          },
        };
        const expected: StocksReducerState = {
          AMZN: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
          TSLA: {
            quote: {
              fetching: false,
              error: new Error(''),
            },
          },
        };
        const action: FetchStockQuoteRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: 'TSLA',
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle three Stock quotes', () => {
        const data: StockQuote = {
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

        const data2: StockQuote = {
          symbol: 'AMZN',
          companyName: 'Amazon.com, Inc.',
          primaryExchange: 'ASNDQA',
          open: 733,
          close: 744.34,
          high: 736,
          low: 725,
          latestPrice: 2450.054,
          latestTime: '12:24:25 PM',
          latestUpdate: 1655573764729,
          latestVolume: 4134691,
          extendedPrice: 726.91,
          extendedChange: 3.1,
          extendedChangePercent: 0.4194815319493806,
          previousClose: 2460.16,
          previousVolume: 3281429,
          change: 27.249,
          changePercent: 1.159,
          avgTotalVolume: 5657375,
          marketCap: 1240038670201,
          peRatio: 117.4,
          week52High: 2495,
          week52Low: 1649.69,
          ytdChange: 29.266,
        };

        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
          AMZN: {
            quote: {
              fetching: false,
              error: undefined,
              data: data2,
            },
          },
          TSLA: {
            quote: {
              fetching: false,
              error: new Error(''),
            },
          },
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: false,
              error: undefined,
              data,
            },
          },
          AMZN: {
            quote: {
              fetching: false,
              error: undefined,
              data: data2,
            },
          },
          TSLA: {
            quote: {
              fetching: false,
              error: new Error(''),
            },
          },
        };
        const action: FetchStockQuoteRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: 'TSLA',
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });

  describe('Stocks chart', () => {
    describe(`${ActionTypes.FETCH_STOCK_CHART_PENDING}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockChart', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: FetchStockChartPendingAction = {
          type: ActionTypes.FETCH_STOCK_CHART_PENDING,
          stockSymbol: 'AAPL',
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            chart: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockChart', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: FetchStockChartPendingAction = {
          type: ActionTypes.FETCH_STOCK_CHART_PENDING,
          stockSymbol: 'SHOP',
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            chart: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.FETCH_STOCK_CHART_FULFILLED}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockChart', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: FetchStockChartFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_CHART_FULFILLED,
          stockSymbol: 'AAPL',
          payload: { data: stockChartData1 },
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            chart: {
              fetching: false,
              error: undefined,
              data: stockChartData1,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockChart', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: FetchStockChartFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_CHART_FULFILLED,
          stockSymbol: 'SHOP',
          payload: { data: stockChartData1 },
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            chart: {
              fetching: false,
              error: undefined,
              data: stockChartData1,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.FETCH_STOCK_CHART_REJECTED}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockChart', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: FetchStockChartRejectedAction = {
          type: ActionTypes.FETCH_STOCK_CHART_REJECTED,
          stockSymbol: 'AAPL',
          error: new Error(''),
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            chart: {
              fetching: false,
              error: new Error(''),
              data: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockChart', () => {
        const state: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
        };
        const action: FetchStockChartRejectedAction = {
          type: ActionTypes.FETCH_STOCK_CHART_REJECTED,
          stockSymbol: 'SHOP',
          error: new Error(''),
        };
        const expected: StocksReducerState = {
          AAPL: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
          },
          SHOP: {
            quote: {
              fetching: true,
              error: undefined,
              data: undefined,
            },
            chart: {
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
