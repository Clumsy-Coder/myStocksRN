/* eslint-disable jest/no-commented-out-tests */
import * as actions from 'src/redux/Stocks/Actions';
import { ActionTypes, Actions } from 'src/redux/Stocks/Types';

import * as testdata from 'jest.testdata';

describe('Stock action creators', () => {
  describe('Stock quotes', () => {
    it('Should create an action to fetch Stock quote', () => {
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE,
        stockSymbol: testdata.stockSymbol1,
      };
      expect(actions.fetchStockQuote(testdata.stockSymbol1)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote PENDING', () => {
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
        stockSymbol: testdata.stockSymbol1,
      };
      expect(actions.fetchStockQuotePending(testdata.stockSymbol1)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote FULFILLED', () => {
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
        stockSymbol: testdata.stockSymbol1,
        payload: testdata.stockQuoteData1,
      };
      expect(
        actions.fetchStockQuoteFulfilled(testdata.stockSymbol1, testdata.stockQuoteData1),
      ).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock quote REJECTED', () => {
      const expectedAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
        stockSymbol: testdata.stockSymbol1,
        error: new Error(''),
      };
      expect(actions.fetchStockQuoteRejected(testdata.stockSymbol1, new Error(''))).toEqual(
        expectedAction,
      );
    });
  });

  describe('Stock Chart', () => {
    it('Should create an action to fetch Stock Chart', () => {
      const expectedAction: Actions.Chart.FetchAction = {
        type: ActionTypes.FETCH_STOCK_CHART,
        stockSymbol: testdata.stockSymbol1,
        chartRange: 'max',
      };
      expect(actions.fetchStockChart(testdata.stockSymbol1, 'max')).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock Chart PENDING', () => {
      const expectedAction: Actions.Chart.FetchPendingAction = {
        type: ActionTypes.FETCH_STOCK_CHART_PENDING,
        stockSymbol: testdata.stockSymbol1,
      };
      expect(actions.fetchStockChartPending(testdata.stockSymbol1)).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock Chart FULFILLED', () => {
      const expectedAction: Actions.Chart.FetchFulfilledAction = {
        type: ActionTypes.FETCH_STOCK_CHART_FULFILLED,
        stockSymbol: testdata.stockSymbol1,
        payload: testdata.stockChartData1,
      };
      expect(
        actions.fetchStockChartFulfilled(testdata.stockSymbol1, testdata.stockChartData1),
      ).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock Chart REJECTED', () => {
      const expectedAction: Actions.Chart.FetchRejectedAction = {
        type: ActionTypes.FETCH_STOCK_CHART_REJECTED,
        stockSymbol: testdata.stockSymbol1,
        error: new Error(''),
      };
      expect(actions.fetchStockChartRejected(testdata.stockSymbol1, new Error(''))).toEqual(
        expectedAction,
      );
    });
  });

  describe('Stock search', () => {
    it('Should create an action to set stock search keyword', () => {
      const expectedAction: Actions.Search.SetSearchKeywordAction = {
        type: ActionTypes.SET_SEARCH_KEYWORD,
        keyword: testdata.stockSymbol1,
      };
      expect(actions.setSearchKeyword(testdata.stockSymbol1)).toEqual(expectedAction);
    });

    it('Should create an action to clear stock search keyword', () => {
      const expectedAction: Actions.Search.ClearSearchKeywordAction = {
        type: ActionTypes.CLEAR_SEARCH_KEYWORD,
      };
      expect(actions.clearSearchKeyword(testdata.stockSymbol1)).toEqual(expectedAction);
    });

    // it(`Should create an action for ${ActionTypes.SET_STOCK_METADATA}`, () => {
    //   const expectedAction: Actions.Search.SetStockMetadata = {
    //     type: ActionTypes.SET_STOCK_METADATA,
    //     stockSymbol: testdata.stockSymbol1,
    //     payload: testdata.stockSearchData1.bestMatches[0],
    //   };

    //   expect(
    //     actions.setStockMetadata(testdata.stockSymbol1, testdata.stockSearchData1.bestMatches[0]),
    //   ).toEqual(expectedAction);
    // });

    it('Should create an action fetch Stock search', () => {
      const expectedAction: Actions.Search.FetchAction = {
        type: ActionTypes.SEARCH_KEYWORD,
        keyword: testdata.stockSymbol1,
      };
      expect(actions.fetchStockSearch(testdata.stockSymbol1)).toEqual(expectedAction);
    });

    it('Should create an action fetch Stock search PENDING', () => {
      const expectedAction: Actions.Search.FetchPendingAction = {
        type: ActionTypes.SEARCH_KEYWORD_PENDING,
        keyword: testdata.stockSymbol1,
      };
      expect(actions.fetchStockSearchPending(testdata.stockSymbol1)).toEqual(expectedAction);
    });

    // it('Should create an action fetch Stock search, FULFILLED', () => {
    //   const expectedAction: Actions.Search.FetchFulfilledAction = {
    //     type: ActionTypes.SEARCH_KEYWORD_FULFILLED,
    //     keyword: testdata.stockSymbol1,
    //     payload: testdata.stockSearchData1,
    //   };
    //   expect(
    //     actions.fetchStockSearchFulfilled(testdata.stockSymbol1, testdata.stockSearchData1),
    //   ).toEqual(expectedAction);
    // });

    it('Should create an action fetch Stock search, REJECTED', () => {
      const expectedAction: Actions.Search.FetchRejectedAction = {
        type: ActionTypes.SEARCH_KEYWORD_REJECTED,
        keyword: testdata.stockSymbol1,
        error: new Error(''),
      };
      expect(actions.fetchStockSearchRejected(testdata.stockSymbol1, new Error(''))).toEqual(
        expectedAction,
      );
    });
  });

  describe('Stock quote batch fetching', () => {
    it('Should create an action to fetch a batch of stock quotes', () => {
      const expectedAction: Actions.Batch.FetchQuoteAction = {
        type: ActionTypes.FETCH_STOCK_QUOTE_BATCH,
      };
      expect(actions.fetchStockQuoteBatch()).toEqual(expectedAction);
    });
  });

  describe('Stock Symbols Metadata', () => {
    it('Should create an action to fetch Stock Symbols Metadata', () => {
      const expectedAction: Actions.SymbolsMetadata.FetchAction = {
        type: ActionTypes.FETCH_SYMBOLS_METADATA,
      };
      expect(actions.fetchSymbolsMetadata()).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock Symbols Metadata PENDING', () => {
      const expectedAction: Actions.SymbolsMetadata.FetchPendingAction = {
        type: ActionTypes.FETCH_SYMBOLS_METADATA_PENDING,
      };
      expect(actions.fetchSymbolsMetadataPending()).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock Symbols Metadata FULFILLED', () => {
      const expectedAction: Actions.SymbolsMetadata.FetchFulfilledAction = {
        type: ActionTypes.FETCH_SYMBOLS_METADATA_FULFILLED,
        payload: [testdata.symbolsMetadata1, testdata.symbolsMetadata2, testdata.symbolsMetadata3],
      };
      expect(
        actions.fetchSymbolsMetadataFulfilled([
          testdata.symbolsMetadata1,
          testdata.symbolsMetadata2,
          testdata.symbolsMetadata3,
        ]),
      ).toEqual(expectedAction);
    });

    it('Should create an action to fetch Stock Symbols Metadata REJECTED', () => {
      const expectedAction: Actions.SymbolsMetadata.FetchRejectedAction = {
        type: ActionTypes.FETCH_SYMBOLS_METADATA_REJECTED,
        error: new Error(''),
      };
      expect(actions.fetchSymbolsMetadataRejected(new Error(''))).toEqual(expectedAction);
    });
  });
});
