import faker from 'faker';

import * as actions from 'src/redux/Stocks/Actions';
import { ActionTypesEnum, StockQuote } from 'src/redux/Stocks/Types';

describe('Stock action creators', () => {
  describe('Stock quotes', () => {
    it('Should create an action to fetch Stock quote', () => {
      const stockSymbol = 'AAPL';
      const expectedAction = {
        type: ActionTypesEnum.FETCH_STOCK_QUOTE,
        stockSymbol,
      };
      expect(actions.fetchStockQuote(stockSymbol)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote PENDING', () => {
      const stockSymbol = 'AAPL';
      const expectedAction = {
        type: ActionTypesEnum.FETCH_STOCK_QUOTE_PENDING,
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
        type: ActionTypesEnum.FETCH_STOCK_QUOTE_FULFILLED,
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
        type: ActionTypesEnum.FETCH_STOCK_QUOTE_REJECTED,
        stockSymbol,
        error: new Error(''),
      };
      expect(actions.fetchStockQuoteRejected(stockSymbol, new Error(''))).toEqual(expectedAction);
    });
  });
});
