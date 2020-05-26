import reducer from 'src/redux/Favorites/Reducer';
import { ActionTypes, Reducer, Actions } from 'src/redux/Favorites/Types';

const stockSymbol1 = 'IBM';
const stockSymbol2 = 'AAPL';
const stockSymbol3 = 'SHOP';
const stockMetadata1: Reducer.FavoriteStockData = {
  '1. symbol': 'IBM',
  '2. name': 'International Business Machines Corporation',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

const stockMetadata2: Reducer.FavoriteStockData = {
  '1. symbol': 'AAPL',
  '2. name': 'Apple Inc.',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

const stockMetadata3: Reducer.FavoriteStockData = {
  '1. symbol': 'SHOP',
  '2. name': 'Shopify Inc.',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

const stockMetadata4: Reducer.FavoriteStockData = {
  '1. symbol': 'AMZN',
  '2. name': 'Amazon.com Inc.',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

describe('Favorites reducer', () => {
  describe(`Handle ${ActionTypes.ADD_FAVORITE_STOCK} action`, () => {
    describe('Empty Favorites', () => {
      it('Add one stock symbol', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata1,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Add two stock symbols', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata1,
        };
        const action2: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata2,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2],
        };

        let actual: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Add three stock symbols', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata1,
        };
        const action2: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata2,
        };
        const action3: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata3,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
        };

        let actual: Reducer.FavoritesReducerState = {
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
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata2,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Add two stock symbols', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata2,
        };
        const action2: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata3,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
        };

        let actual: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Add three stock symbols', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1],
        };
        const action: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata2,
        };
        const action2: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata3,
        };
        const action3: Actions.AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockMetadata: stockMetadata4,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2, stockMetadata3, stockMetadata4],
        };

        let actual: Reducer.FavoritesReducerState = {
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
          const state: Reducer.FavoritesReducerState = {
            symbols: [],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata1,
          };
          const expected: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1],
          };

          let actual: Reducer.FavoritesReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action);
          expect(actual).toEqual(expected);
        });

        it('Add two stock symbols', () => {
          const state: Reducer.FavoritesReducerState = {
            symbols: [],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata1,
          };
          const action2: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata2,
          };
          const expected: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1, stockMetadata2],
          };

          let actual: Reducer.FavoritesReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action);
          actual = reducer(actual, action2);
          actual = reducer(actual, action2);
          expect(actual).toEqual(expected);
        });

        it('Add three stock symbols', () => {
          const state: Reducer.FavoritesReducerState = {
            symbols: [],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata1,
          };
          const action2: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata2,
          };
          const action3: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata3,
          };
          const expected: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
          };

          let actual: Reducer.FavoritesReducerState = {
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
          const state: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata1,
          };
          const expected: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1],
          };

          let actual: Reducer.FavoritesReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          expect(actual).toEqual(expected);
        });

        it('Add two stock symbols', () => {
          const state: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1, stockMetadata2],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata1,
          };
          const action2: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata2,
          };
          const expected: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1, stockMetadata2],
          };

          let actual: Reducer.FavoritesReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action2);
          expect(actual).toEqual(expected);
        });

        it('Add three stock symbols', () => {
          const state: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
          };
          const action: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata1,
          };
          const action2: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata2,
          };
          const action3: Actions.AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockMetadata: stockMetadata3,
          };
          const expected: Reducer.FavoritesReducerState = {
            symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
          };

          let actual: Reducer.FavoritesReducerState = {
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
        const state: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol1,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('Non-empty Favorites', () => {
      it('Remove non-existent stock symbol', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata2, stockMetadata3],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol1,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata2, stockMetadata3],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Remove one stock symbol', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol1,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata2],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Remove two stock symbols', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol1,
        };
        const action2: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol2,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata3],
        };

        let actual: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Remove three stock symbols', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2, stockMetadata3, stockMetadata4],
        };
        const action: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol1,
        };
        const action2: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol2,
        };
        const action3: Actions.RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol3,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata4],
        };

        let actual: Reducer.FavoritesReducerState = {
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
        const state: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        const action: Actions.ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('Non-empty Favorites', () => {
      it('Clear Favorites with one stock symbol', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1],
        };
        const action: Actions.ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Clear Favorites with two stock symbols', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2],
        };
        const action: Actions.ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [],
        };

        let actual: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        expect(actual).toEqual(expected);
      });

      it('Clear Favorites with three stock symbols', () => {
        const state: Reducer.FavoritesReducerState = {
          symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
        };
        const action: Actions.ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: Reducer.FavoritesReducerState = {
          symbols: [],
        };

        let actual: Reducer.FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        expect(actual).toEqual(expected);
      });
    });
  });
});
