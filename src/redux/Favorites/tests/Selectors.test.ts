import * as selectors from 'src/redux/Favorites/Selectors';
import { AppState } from 'src/redux/index.reducers';

describe('Favorites selectors', () => {
  describe('Empty store', () => {
    it('Selects Favorites with empty reducer', () => {
      const store: AppState = {
        Stocks: {},
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
        Stocks: {},
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
        Stocks: {},
        Favorites: {
          symbols: ['AAPL', 'AMZN', 'SHOP'],
        },
      };
      const expected = {
        symbols: ['AAPL', 'AMZN', 'SHOP'],
      };

      const actual = selectors.selectFavorites(store);
      expect(actual).toEqual(expected);
      expect(actual).toHaveProperty('symbols');
      expect(actual.symbols).toHaveLength(3);
      expect(typeof actual.symbols[0]).toBe('string');
      expect(typeof actual.symbols[1]).toBe('string');
      expect(typeof actual.symbols[2]).toBe('string');
      expect(actual.symbols[0]).toBe('AAPL');
      expect(actual.symbols[1]).toBe('AMZN');
      expect(actual.symbols[2]).toBe('SHOP');
    });

    it('Selects Favorite symbols', () => {
      const store: AppState = {
        Stocks: {},
        Favorites: {
          symbols: ['AAPL', 'AMZN', 'SHOP'],
        },
      };
      const expected = ['AAPL', 'AMZN', 'SHOP'];

      const actual = selectors.selectFavoriteSymbols(store);
      expect(actual).toEqual(expected);
      expect(actual).toHaveLength(3);
      expect(typeof actual[0]).toBe('string');
      expect(typeof actual[1]).toBe('string');
      expect(typeof actual[2]).toBe('string');
      expect(actual[0]).toBe('AAPL');
      expect(actual[1]).toBe('AMZN');
      expect(actual[2]).toBe('SHOP');
    });
  });
});
