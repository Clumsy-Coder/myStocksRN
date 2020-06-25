import reducer from 'src/redux/Favorites/Reducer';
import { ActionTypes, Reducer, Actions } from 'src/redux/Favorites/Types';

import * as testdata from 'jest.testdata';

describe('Favorites reducer', () => {
  describe(`Handle ${ActionTypes.ADD_FAVORITE_STOCK} action`, () => {
    describe('Empty Favorites', () => {
      it('Add one stock symbol', () => {
        const state: Reducer.ReducerState = {
          symbols: [],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Add two stock symbols', () => {
        const state: Reducer.ReducerState = {
          symbols: [],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol1,
        };
        const action2: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2],
        };

        let actual: Reducer.ReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Add three stock symbols', () => {
        const state: Reducer.ReducerState = {
          symbols: [],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol1,
        };
        const action2: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol2,
        };
        const action3: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol3,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
        };

        let actual: Reducer.ReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        actual = reducer(actual, action3);
        expect(actual).toEqual(expected);
      });
    });

    describe('Non-empty Favorites', () => {
      it('Add one stock symbol', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Add two stock symbols', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol2,
        };
        const action2: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol3,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
        };

        let actual: Reducer.ReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Add three stock symbols', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol2,
        };
        const action2: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol3,
        };
        const action3: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol4,
        };
        const expected: Reducer.ReducerState = {
          symbols: [
            testdata.stockSymbol1,
            testdata.stockSymbol2,
            testdata.stockSymbol3,
            testdata.stockSymbol4,
          ],
        };

        let actual: Reducer.ReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        actual = reducer(actual, action3);
        expect(actual).toEqual(expected);
      });
    });

    describe('Duplicate Favorites', () => {
      describe('Empty Favorites', () => {
        it('Add one stock symbols', () => {
          const state: Reducer.ReducerState = {
            symbols: [],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol1,
          };
          const expected: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1],
          };

          let actual: Reducer.ReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action);
          expect(actual).toEqual(expected);
        });

        it('Add two stock symbols', () => {
          const state: Reducer.ReducerState = {
            symbols: [],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol1,
          };
          const action2: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol2,
          };
          const expected: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1, testdata.stockSymbol2],
          };

          let actual: Reducer.ReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action);
          actual = reducer(actual, action2);
          actual = reducer(actual, action2);
          expect(actual).toEqual(expected);
        });

        it('Add three stock symbols', () => {
          const state: Reducer.ReducerState = {
            symbols: [],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol1,
          };
          const action2: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol2,
          };
          const action3: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol3,
          };
          const expected: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
          };

          let actual: Reducer.ReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action);
          actual = reducer(actual, action2);
          actual = reducer(actual, action2);
          actual = reducer(actual, action3);
          actual = reducer(actual, action3);
          expect(actual).toEqual(expected);
        });
      });

      describe('Non-empty Favorites', () => {
        it('Add one stock symbols', () => {
          const state: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol1,
          };
          const expected: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1],
          };

          let actual: Reducer.ReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          expect(actual).toEqual(expected);
        });

        it('Add two stock symbols', () => {
          const state: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1, testdata.stockSymbol2],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol1,
          };
          const action2: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol2,
          };
          const expected: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1, testdata.stockSymbol2],
          };

          let actual: Reducer.ReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action2);
          expect(actual).toEqual(expected);
        });

        it('Add three stock symbols', () => {
          const state: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol1,
          };
          const action2: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol2,
          };
          const action3: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: testdata.stockSymbol3,
          };
          const expected: Reducer.ReducerState = {
            symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
          };

          let actual: Reducer.ReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action2);
          actual = reducer(actual, action3);
          expect(actual).toEqual(expected);
        });
      });
    });
  });

  describe(`Handle ${ActionTypes.REMOVE_FAVORITE_STOCK}`, () => {
    describe('Empty Favorites', () => {
      it('Remove non-existent stock symbol', () => {
        const state: Reducer.ReducerState = {
          symbols: [],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('Non-empty Favorites', () => {
      it('Remove non-existent stock symbol', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol2, testdata.stockSymbol3],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol2, testdata.stockSymbol3],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Remove one stock symbol', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol1,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol2],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Remove two stock symbols', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol1,
        };
        const action2: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol2,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol3],
        };

        let actual: Reducer.ReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Remove three stock symbols', () => {
        const state: Reducer.ReducerState = {
          symbols: [
            testdata.stockSymbol1,
            testdata.stockSymbol2,
            testdata.stockSymbol3,
            testdata.stockSymbol4,
          ],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol1,
        };
        const action2: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol2,
        };
        const action3: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: testdata.stockSymbol3,
        };
        const expected: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol4],
        };

        let actual: Reducer.ReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        actual = reducer(actual, action3);
        expect(actual).toEqual(expected);
      });
    });
  });

  describe(`Handle ${ActionTypes.CLEAR_FAVORITE_STOCKS}`, () => {
    describe('Empty Favorites', () => {
      it('Clear Favorites with no Favorites', () => {
        const state: Reducer.ReducerState = {
          symbols: [],
        };
        const action: Actions.ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: Reducer.ReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('Non-empty Favorites', () => {
      it('Clear Favorites with one stock symbol', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1],
        };
        const action: Actions.ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: Reducer.ReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Clear Favorites with two stock symbols', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2],
        };
        const action: Actions.ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: Reducer.ReducerState = {
          symbols: [],
        };

        let actual: Reducer.ReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        expect(actual).toEqual(expected);
      });

      it('Clear Favorites with three stock symbols', () => {
        const state: Reducer.ReducerState = {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
        };
        const action: Actions.ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: Reducer.ReducerState = {
          symbols: [],
        };

        let actual: Reducer.ReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        expect(actual).toEqual(expected);
      });
    });
  });
});
