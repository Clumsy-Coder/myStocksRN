import reducer from 'src/redux/Favorites/Reducer';
import {
  ActionTypes,
  FavoritesReducerState,
  AddFavoriteStockAction,
  ClearFavoriteStocksAction,
  RemoveFavoriteStockAction,
} from 'src/redux/Favorites/Types';

describe('Favorites reducer', () => {
  describe(`Handle ${ActionTypes.ADD_FAVORITE_STOCK} action`, () => {
    describe('Empty Favorites', () => {
      it('Add one stock symbol', () => {
        const stockSymbol = 'AAPL';
        const state: FavoritesReducerState = {
          symbols: [],
        };
        const action: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol,
        };
        const expected: FavoritesReducerState = {
          symbols: ['AAPL'],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Add two stock symbols', () => {
        const stockSymbol = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const state: FavoritesReducerState = {
          symbols: [],
        };
        const action: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol,
        };
        const action2: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: stockSymbol2,
        };
        const expected: FavoritesReducerState = {
          symbols: ['AAPL', 'AMZN'],
        };

        let actual: FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Add three stock symbols', () => {
        const stockSymbol = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const stockSymbol3 = 'SHOP';
        const state: FavoritesReducerState = {
          symbols: [],
        };
        const action: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol,
        };
        const action2: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: stockSymbol2,
        };
        const action3: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: stockSymbol3,
        };
        const expected: FavoritesReducerState = {
          symbols: ['AAPL', 'AMZN', 'SHOP'],
        };

        let actual: FavoritesReducerState = {
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
        const stockSymbol = 'AAPL';
        const state: FavoritesReducerState = {
          symbols: ['GOOGL'],
        };
        const action: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol,
        };
        const expected: FavoritesReducerState = {
          symbols: ['GOOGL', 'AAPL'],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Add two stock symbols', () => {
        const stockSymbol = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const state: FavoritesReducerState = {
          symbols: ['GOOGL'],
        };
        const action: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol,
        };
        const action2: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: stockSymbol2,
        };
        const expected: FavoritesReducerState = {
          symbols: ['GOOGL', 'AAPL', 'AMZN'],
        };

        let actual: FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Add three stock symbols', () => {
        const stockSymbol = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const stockSymbol3 = 'SHOP';
        const state: FavoritesReducerState = {
          symbols: ['GOOGL'],
        };
        const action: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol,
        };
        const action2: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: stockSymbol2,
        };
        const action3: AddFavoriteStockAction = {
          type: ActionTypes.ADD_FAVORITE_STOCK,
          stockSymbol: stockSymbol3,
        };
        const expected: FavoritesReducerState = {
          symbols: ['GOOGL', 'AAPL', 'AMZN', 'SHOP'],
        };

        let actual: FavoritesReducerState = {
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
          const stockSymbol = 'AAPL';
          const state: FavoritesReducerState = {
            symbols: [],
          };
          const action: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol,
          };
          const expected: FavoritesReducerState = {
            symbols: ['AAPL'],
          };

          let actual: FavoritesReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action);
          expect(actual).toEqual(expected);
        });

        it('Add two stock symbols', () => {
          const stockSymbol = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const state: FavoritesReducerState = {
            symbols: [],
          };
          const action: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol,
          };
          const action2: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: stockSymbol2,
          };
          const expected: FavoritesReducerState = {
            symbols: ['AAPL', 'AMZN'],
          };

          let actual: FavoritesReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action);
          actual = reducer(actual, action2);
          actual = reducer(actual, action2);
          expect(actual).toEqual(expected);
        });

        it('Add three stock symbols', () => {
          const stockSymbol = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const stockSymbol3 = 'SHOP';
          const state: FavoritesReducerState = {
            symbols: [],
          };
          const action: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol,
          };
          const action2: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: stockSymbol2,
          };
          const action3: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: stockSymbol3,
          };
          const expected: FavoritesReducerState = {
            symbols: ['AAPL', 'AMZN', 'SHOP'],
          };

          let actual: FavoritesReducerState = {
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
          const stockSymbol = 'AAPL';
          const state: FavoritesReducerState = {
            symbols: ['AAPL'],
          };
          const action: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol,
          };
          const expected: FavoritesReducerState = {
            symbols: ['AAPL'],
          };

          let actual: FavoritesReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          expect(actual).toEqual(expected);
        });

        it('Add two stock symbols', () => {
          const stockSymbol = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const state: FavoritesReducerState = {
            symbols: ['AAPL', 'AMZN'],
          };
          const action: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol,
          };
          const action2: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: stockSymbol2,
          };
          const expected: FavoritesReducerState = {
            symbols: ['AAPL', 'AMZN'],
          };

          let actual: FavoritesReducerState = {
            symbols: [],
          };
          actual = reducer(state, action);
          actual = reducer(actual, action2);
          expect(actual).toEqual(expected);
        });

        it('Add three stock symbols', () => {
          const stockSymbol = 'AAPL';
          const stockSymbol2 = 'AMZN';
          const stockSymbol3 = 'SHOP';
          const state: FavoritesReducerState = {
            symbols: ['AAPL', 'AMZN', 'SHOP'],
          };
          const action: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol,
          };
          const action2: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: stockSymbol2,
          };
          const action3: AddFavoriteStockAction = {
            type: ActionTypes.ADD_FAVORITE_STOCK,
            stockSymbol: stockSymbol3,
          };
          const expected: FavoritesReducerState = {
            symbols: ['AAPL', 'AMZN', 'SHOP'],
          };

          let actual: FavoritesReducerState = {
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
        const stockSymbol = 'AAPL';
        const state: FavoritesReducerState = {
          symbols: [],
        };
        const action: RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol,
        };
        const expected: FavoritesReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('Non-empty Favorites', () => {
      it('Remove non-existent stock symbol', () => {
        const stockSymbol = 'SHOP';
        const state: FavoritesReducerState = {
          symbols: ['GOOGL', 'AAPL'],
        };
        const action: RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol,
        };
        const expected: FavoritesReducerState = {
          symbols: ['GOOGL', 'AAPL'],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Remove one stock symbol', () => {
        const stockSymbol = 'AAPL';
        const state: FavoritesReducerState = {
          symbols: ['GOOGL', 'AAPL'],
        };
        const action: RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol,
        };
        const expected: FavoritesReducerState = {
          symbols: ['GOOGL'],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Remove two stock symbols', () => {
        const stockSymbol = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const state: FavoritesReducerState = {
          symbols: ['GOOGL', 'AAPL', 'AMZN'],
        };
        const action: RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol,
        };
        const action2: RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol2,
        };
        const expected: FavoritesReducerState = {
          symbols: ['GOOGL'],
        };

        let actual: FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        actual = reducer(actual, action2);
        expect(actual).toEqual(expected);
      });

      it('Remove three stock symbols', () => {
        const stockSymbol = 'AAPL';
        const stockSymbol2 = 'AMZN';
        const stockSymbol3 = 'SHOP';
        const state: FavoritesReducerState = {
          symbols: ['GOOGL', 'AAPL', 'AMZN', 'SHOP'],
        };
        const action: RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol,
        };
        const action2: RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol2,
        };
        const action3: RemoveFavoriteStockAction = {
          type: ActionTypes.REMOVE_FAVORITE_STOCK,
          stockSymbol: stockSymbol3,
        };
        const expected: FavoritesReducerState = {
          symbols: ['GOOGL'],
        };

        let actual: FavoritesReducerState = {
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
        const state: FavoritesReducerState = {
          symbols: [],
        };
        const action: ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: FavoritesReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });
    });

    describe('Non-empty Favorites', () => {
      it('Clear Favorites with one stock symbol', () => {
        const state: FavoritesReducerState = {
          symbols: ['AAPL'],
        };
        const action: ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: FavoritesReducerState = {
          symbols: [],
        };

        expect(reducer(state, action)).toEqual(expected);
      });

      it('Clear Favorites with two stock symbols', () => {
        const state: FavoritesReducerState = {
          symbols: ['AAPL', 'AMZN'],
        };
        const action: ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: FavoritesReducerState = {
          symbols: [],
        };

        let actual: FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        expect(actual).toEqual(expected);
      });

      it('Clear Favorites with three stock symbols', () => {
        const state: FavoritesReducerState = {
          symbols: ['AAPL', 'AMZN', 'SHOP'],
        };
        const action: ClearFavoriteStocksAction = {
          type: ActionTypes.CLEAR_FAVORITE_STOCKS,
        };
        const expected: FavoritesReducerState = {
          symbols: [],
        };

        let actual: FavoritesReducerState = {
          symbols: [],
        };
        actual = reducer(state, action);
        expect(actual).toEqual(expected);
      });
    });
  });
});
