import * as actions from 'src/redux/Favorites/Actions';
import { ActionTypes, Reducer } from 'src/redux/Favorites/Types';

const stockSymbol = 'IBM';
const stockMetadata1: Reducer.FavoriteStockData = {
  '1. symbol': 'IBM',
  '2. name': 'International Business Machines Corporation',
  '4. region': 'United States',
  '7. timezone': 'UTC-05',
  '8. currency': 'USD',
};

describe('Favorites action creators', () => {
  it('Should create action to add stock to favorites', () => {
    const expected = {
      type: ActionTypes.ADD_FAVORITE_STOCK,
      stockMetadata: stockMetadata1,
    };

    expect(actions.addFavoriteStock(stockMetadata1)).toEqual(expected);
  });

  it('Should create action to remove stock from favorites', () => {
    const expected = {
      type: ActionTypes.REMOVE_FAVORITE_STOCK,
      stockSymbol,
    };

    expect(actions.removeFavoriteStock(stockSymbol)).toEqual(expected);
  });

  it('Should create action to clear Favorites', () => {
    const expected = {
      type: ActionTypes.CLEAR_FAVORITE_STOCKS,
    };

    expect(actions.clearFavoriteStocks()).toEqual(expected);
  });
});
