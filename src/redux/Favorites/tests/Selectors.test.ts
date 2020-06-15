import * as selectors from 'src/redux/Favorites/Selectors';
import { AppState } from 'src/redux/index.reducers';
import { Reducer } from 'src/redux/Favorites/Types';

import * as testdata from 'jest.testdata';

describe('Favorites selectors', () => {
  describe('Empty store', () => {
    it('Selects Favorites with empty reducer', () => {
      const store: AppState = {
        Stocks: {
          symbols: {},
        },
        Favorites: {
          symbols: [],
        },
      };
      const expected = {
        symbols: [],
      };

      expect(selectors.selectFavorites(store)).toEqual(expected);
    });

    it('Selects Favorite symbols with empty store', () => {
      const store: AppState = {
        Stocks: {
          symbols: {},
        },
        Favorites: {
          symbols: [],
        },
      };
      const expected: Reducer.FavoriteStockData[] = [];

      expect(selectors.selectFavoriteSymbols(store)).toEqual(expected);
    });
  });

  describe('Stored favorite stock symbols', () => {
    it('Selects Favorite reducer state', () => {
      const store: AppState = {
        Stocks: {
          symbols: {},
        },
        Favorites: {
          symbols: [testdata.stockMetadata1, testdata.stockMetadata2, testdata.stockMetadata3],
        },
      };
      const expected = {
        symbols: [testdata.stockMetadata1, testdata.stockMetadata2, testdata.stockMetadata3],
      };

      const actual = selectors.selectFavorites(store);
      expect(actual).toEqual(expected);
    });

    it('Selects Favorite symbols', () => {
      const store: AppState = {
        Stocks: {
          symbols: {},
        },
        Favorites: {
          symbols: [testdata.stockMetadata1, testdata.stockMetadata2, testdata.stockMetadata3],
        },
      };
      const expected = [testdata.stockMetadata1, testdata.stockMetadata2, testdata.stockMetadata3];

      const actual = selectors.selectFavoriteSymbols(store);
      expect(actual).toEqual(expected);
    });
  });
});
