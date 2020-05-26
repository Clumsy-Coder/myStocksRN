import * as selectors from 'src/redux/Favorites/Selectors';
import { AppState } from 'src/redux/index.reducers';
import { Reducer } from 'src/redux/Favorites/Types';

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
          symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
        },
      };
      const expected = {
        symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
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
          symbols: [stockMetadata1, stockMetadata2, stockMetadata3],
        },
      };
      const expected = [stockMetadata1, stockMetadata2, stockMetadata3];

      const actual = selectors.selectFavoriteSymbols(store);
      expect(actual).toEqual(expected);
    });
  });
});
