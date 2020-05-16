import * as actions from 'src/redux/Favorites/Actions';
import { ActionTypes } from 'src/redux/Favorites/Types';

describe('Favorites action creators', () => {
  it('Should create action to add stock to favorites', () => {
    const stockSymbol = 'AAPL';
    const expected = {
      type: ActionTypes.ADD_FAVORITE_STOCK,
      stockSymbol,
    };

    expect(actions.addFavoriteStock(stockSymbol)).toEqual(expected);
  });

  it('Should create action to remove stock from favorites', () => {
    const stockSymbol = 'AAPL';
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
