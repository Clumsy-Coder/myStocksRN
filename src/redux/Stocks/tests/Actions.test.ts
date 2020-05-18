import * as actions from 'src/redux/Stocks/Actions';
import {
  ActionTypes,
  StockQuote,
  StockChart,
  FetchStockChartAction,
  FetchStockChartPendingAction,
  FetchStockChartFulfilledAction,
  FetchStockChartRejectedAction,
} from 'src/redux/Stocks/Types';

describe('Stock action creators', () => {
  describe('Stock quotes', () => {
    it('Should create an action to fetch Stock quote', () => {
      const stockSymbol = 'AAPL';
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE,
        stockSymbol,
      };
      expect(actions.fetchStockQuote(stockSymbol)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote PENDING', () => {
      const stockSymbol = 'AAPL';
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
        stockSymbol,
      };
      expect(actions.fetchStockQuotePending(stockSymbol)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote FULFILLED', () => {
      const stockSymbol = 'AAPL';
      const stockQuote: StockQuote = {
        symbol: 'SHOP',
        companyName: 'Shopify, Inc.',
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
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
        stockSymbol,
        payload: {
          data: stockQuote,
        },
      };
      expect(actions.fetchStockQuoteFulfilled(stockSymbol, stockQuote)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote REJECTED', () => {
      const stockSymbol = 'AAPL';
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
        stockSymbol,
        error: new Error(''),
      };
      expect(actions.fetchStockQuoteRejected(stockSymbol, new Error(''))).toEqual(expectedAction);
    });
  });

  describe('Stock chart', () => {
    it('Should create an action to fetch Stock chart', () => {
      const stockSymbol = 'AAPL';
      const expectedAction: FetchStockChartAction = {
        type: ActionTypes.FETCH_STOCK_CHART,
        stockSymbol,
        range: '5d',
        sort: 'asc',
      };
      expect(actions.fetchStockChart(stockSymbol, '5d', 'asc')).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock chart PENDING', () => {
      const stockSymbol = 'AAPL';
      const expectedAction: FetchStockChartPendingAction = {
        type: ActionTypes.FETCH_STOCK_CHART_PENDING,
        stockSymbol,
      };
      expect(actions.fetchStockChartPending(stockSymbol)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock chart FULFILLED', () => {
      const stockSymbol = 'AAPL';
      const stockChart: StockChart[] = [
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
      const expectedAction: FetchStockChartFulfilledAction = {
        type: ActionTypes.FETCH_STOCK_CHART_FULFILLED,
        stockSymbol,
        payload: {
          data: stockChart,
        },
      };
      expect(actions.fetchStockChartFulfilled(stockSymbol, stockChart)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock chart REJECTED', () => {
      const stockSymbol = 'AAPL';
      const expectedAction: FetchStockChartRejectedAction = {
        type: ActionTypes.FETCH_STOCK_CHART_REJECTED,
        stockSymbol,
        error: new Error(''),
      };
      expect(actions.fetchStockChartRejected(stockSymbol, new Error(''))).toEqual(expectedAction);
    });
  });
});
