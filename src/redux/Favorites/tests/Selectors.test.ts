import * as selectors from 'src/redux/Favorites/Selectors';
import { AppState } from 'src/redux/index.reducers';

import * as testdata from 'jest.testdata';

describe('Favorites selectors', () => {
  describe('Empty store', () => {
    it('Selects Favorites with empty reducer', () => {
      const store: AppState = {
        ...testdata.baseAppState,
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
        ...testdata.baseAppState,
        Favorites: {
          symbols: [],
        },
      };
      const expected: string[] = [];

      expect(selectors.selectFavoriteSymbols(store)).toEqual(expected);
    });
  });

  describe('Stored favorite stock symbols', () => {
    it('Selects Favorite reducer state', () => {
      const store: AppState = {
        ...testdata.baseAppState,
        Favorites: {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
        },
      };
      const expected = {
        symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
      };

      const actual = selectors.selectFavorites(store);
      expect(actual).toEqual(expected);
    });

    it('Selects Favorite symbols', () => {
      const store: AppState = {
        ...testdata.baseAppState,
        Favorites: {
          symbols: [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3],
        },
      };
      const expected = [testdata.stockSymbol1, testdata.stockSymbol2, testdata.stockSymbol3];

      const actual = selectors.selectFavoriteSymbols(store);
      expect(actual).toEqual(expected);
    });
  });
});
