import reducer from 'src/redux/Stocks/Reducer';
import { ActionTypes, DataDomain, Reducer, Actions } from 'src/redux/Stocks/Types';

import * as testdata from 'jest.testdata';

describe('Stocks reducer', () => {
  describe('Stocks quote', () => {
    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_PENDING}`, () => {
      it('Should handle one Stock quote', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
        };
        const action: Actions.Quote.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };
        expect(reducer(state, action)).toEqual(expected);
      });
      it('Should handle two Stock quotes', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };
        const action: Actions.Quote.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: testdata.stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle three Stock quotes', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
              },
            },
          },
        };
        const action: Actions.Quote.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_PENDING,
          stockSymbol: testdata.stockSymbol3,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
              },
            },
            [testdata.stockSymbol3]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_FULFILLED}`, () => {
      it('Should handle one Stock quote', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
          },
        };
        const action: Actions.Quote.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: testdata.stockSymbol1,
          payload: testdata.stockQuoteData1,
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle two Stock quotes', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData2,
              },
            },
          },
        };

        const action: Actions.Quote.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: testdata.stockSymbol2,
          payload: testdata.stockQuoteData2,
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle three Stock quotes', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
            [testdata.stockSymbol3]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
            [testdata.stockSymbol3]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData3,
              },
            },
          },
        };

        const action: Actions.Quote.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_FULFILLED,
          stockSymbol: testdata.stockSymbol3,
          payload: testdata.stockQuoteData3,
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`It should handle ${ActionTypes.FETCH_STOCK_QUOTE_REJECTED}`, () => {
      it('Should handle one Stock quote', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: new Error(''),
              },
            },
          },
        };
        const action: Actions.Quote.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: testdata.stockSymbol1,
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle two Stock quotes', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
              },
            },
          },
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: false,
                error: new Error(''),
              },
            },
          },
        };
        const action: Actions.Quote.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: testdata.stockSymbol2,
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Should handle three Stock quotes', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData2,
              },
            },
            [testdata.stockSymbol3]: {
              quote: {
                fetching: false,
                error: new Error(''),
              },
            },
          },
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData1,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: false,
                error: undefined,
                data: testdata.stockQuoteData2,
              },
            },
            [testdata.stockSymbol3]: {
              quote: {
                fetching: false,
                error: new Error(''),
              },
            },
          },
        };
        const action: Actions.Quote.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_QUOTE_REJECTED,
          stockSymbol: testdata.stockSymbol3,
          error: new Error(''),
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });

  describe('Stocks Daily Adjusted', () => {
    describe(`${ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING,
          stockSymbol: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
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
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchPendingAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_PENDING,
          stockSymbol: testdata.stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
            [testdata.stockSymbol2]: {
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
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED,
          stockSymbol: testdata.stockSymbol1,
          payload: testdata.stockDailyAdjData1,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
              dailyAdj: {
                fetching: false,
                error: undefined,
                data: testdata.stockDailyAdjData1,
              },
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
            [testdata.stockSymbol2]: {
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
          },
        };
        const action: Actions.DailyAdjusted.FetchFulfilledAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_FULFILLED,
          stockSymbol: testdata.stockSymbol2,
          payload: testdata.stockDailyAdjData2,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
            [testdata.stockSymbol2]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
              dailyAdj: {
                fetching: false,
                error: undefined,
                data: testdata.stockDailyAdjData2,
              },
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
        };
        const action: Actions.DailyAdjusted.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED,
          stockSymbol: testdata.stockSymbol1,
          error: new Error(''),
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
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
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockDailyAdj', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
            [testdata.stockSymbol2]: {
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
          },
        };
        const action: Actions.DailyAdjusted.FetchRejectedAction = {
          type: ActionTypes.FETCH_STOCK_DAILY_ADJUSTED_REJECTED,
          stockSymbol: testdata.stockSymbol2,
          error: new Error(''),
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
            [testdata.stockSymbol2]: {
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
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });

  describe('Stock search', () => {
    describe(`${ActionTypes.SET_SEARCH_KEYWORD}`, () => {
      it('[Empty store]: Should set stock search keyword', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: '',
          },
        };
        const action: Actions.Search.SetSearchKeywordAction = {
          type: ActionTypes.SET_SEARCH_KEYWORD,
          keyword: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set stock search keyword', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
          },
        };
        const action: Actions.Search.SetSearchKeywordAction = {
          type: ActionTypes.SET_SEARCH_KEYWORD,
          keyword: testdata.stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol2,
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should not overwrite data other than searchKeyword', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
          search: {
            keyword: testdata.stockSymbol1,
          },
        };
        const action: Actions.Search.SetSearchKeywordAction = {
          type: ActionTypes.SET_SEARCH_KEYWORD,
          keyword: testdata.stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
          search: {
            keyword: testdata.stockSymbol2,
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.CLEAR_SEARCH_KEYWORD}`, () => {
      it('[Empty store]: Should set stock search keyword', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: '',
          },
        };
        const action: Actions.Search.ClearSearchKeywordAction = {
          type: ActionTypes.CLEAR_SEARCH_KEYWORD,
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: '',
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set stock search keyword', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
          },
        };
        const action: Actions.Search.ClearSearchKeywordAction = {
          type: ActionTypes.CLEAR_SEARCH_KEYWORD,
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: '',
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should not overwrite data other than searchKeyword', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
          search: {
            keyword: testdata.stockSymbol1,
          },
        };
        const action: Actions.Search.ClearSearchKeywordAction = {
          type: ActionTypes.CLEAR_SEARCH_KEYWORD,
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: true,
                error: undefined,
                data: undefined,
              },
            },
          },
          search: {
            keyword: '',
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.SET_STOCK_METADATA}`, () => {
      it('[Empty store]: Should set stock metadata', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
              },
            },
          },
        };
        const action: Actions.Search.SetStockMetadata = {
          type: ActionTypes.SET_STOCK_METADATA,
          stockSymbol: testdata.stockSymbol1,
          payload: testdata.stockSearchData1.bestMatches[0],
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
              },
              metadata: testdata.stockSearchData1.bestMatches[0],
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty]: Should set stock metadata', () => {
        const state: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                data: testdata.stockQuoteData1,
                error: undefined,
              },
            },
          },
        };
        const action: Actions.Search.SetStockMetadata = {
          type: ActionTypes.SET_STOCK_METADATA,
          stockSymbol: testdata.stockSymbol1,
          payload: testdata.stockSearchData1.bestMatches[0],
        };
        const expected: Reducer.ReducerState = {
          symbols: {
            [testdata.stockSymbol1]: {
              quote: {
                fetching: false,
                data: testdata.stockQuoteData1,
                error: undefined,
              },
              metadata: testdata.stockSearchData1.bestMatches[0],
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.SEARCH_KEYWORD_PENDING}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockSearch', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
        };
        const action: Actions.Search.FetchPendingAction = {
          type: ActionTypes.SEARCH_KEYWORD_PENDING,
          keyword: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            // keyword: testdata.stockSymbol1,
            results: {
              fetching: true,
              data: undefined,
              error: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockSearch', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
          },
        };
        const action: Actions.Search.FetchPendingAction = {
          type: ActionTypes.SEARCH_KEYWORD_PENDING,
          keyword: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
            results: {
              fetching: true,
              data: undefined,
              error: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.SEARCH_KEYWORD_FULFILLED}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockSearch', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
        };
        const action: Actions.Search.FetchFulfilledAction = {
          type: ActionTypes.SEARCH_KEYWORD_FULFILLED,
          keyword: testdata.stockSymbol1,
          payload: testdata.stockSearchData1,
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            // keyword: testdata.stockSymbol1,
            results: {
              fetching: false,
              data: testdata.stockSearchData1.bestMatches,
              error: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockSearch', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
            results: {
              fetching: true,
              data: undefined,
              error: undefined,
            },
          },
        };
        const action: Actions.Search.FetchFulfilledAction = {
          type: ActionTypes.SEARCH_KEYWORD_FULFILLED,
          keyword: testdata.stockSymbol1,
          payload: testdata.stockSearchData1,
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
            results: {
              fetching: false,
              data: testdata.stockSearchData1.bestMatches,
              error: undefined,
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe(`${ActionTypes.SEARCH_KEYWORD_REJECTED}`, () => {
      it('[Empty store]: Should set fetching, error and data for StockSearch', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
        };
        const action: Actions.Search.FetchRejectedAction = {
          type: ActionTypes.SEARCH_KEYWORD_REJECTED,
          keyword: testdata.stockSymbol1,
          error: new Error(''),
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            // keyword: testdata.stockSymbol1,
            results: {
              fetching: false,
              data: undefined,
              error: new Error(''),
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('[Non-empty store]: Should set fetching, error and data for StockSearch', () => {
        const state: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
            results: {
              fetching: true,
              data: undefined,
              error: undefined,
            },
          },
        };
        const action: Actions.Search.FetchRejectedAction = {
          type: ActionTypes.SEARCH_KEYWORD_REJECTED,
          keyword: testdata.stockSymbol1,
          error: new Error(''),
        };
        const expected: Reducer.ReducerState = {
          symbols: {},
          search: {
            keyword: testdata.stockSymbol1,
            results: {
              fetching: false,
              data: undefined,
              error: new Error(''),
            },
          },
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });
  });
});
