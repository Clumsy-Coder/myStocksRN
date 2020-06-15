import * as actions from 'src/redux/Favorites/Actions';
import { ActionTypes, Reducer } from 'src/redux/Favorites/Types';

import * as testdata from 'jest.testdata';

describe('Favorites action creators', () => {
  it('Should create action to add stock to favorites', () => {
    const expected = {
      type: ActionTypes.ADD_FAVORITE_STOCK,
      stockMetadata: testdata.stockMetadata1,
    };

    expect(actions.addFavoriteStock(testdata.stockMetadata1)).toEqual(expected);
  });

  it('Should create action to remove stock from favorites', () => {
    const expected = {
      type: ActionTypes.REMOVE_FAVORITE_STOCK,
      stockSymbol: testdata.stockSymbol1,
    };

    expect(actions.removeFavoriteStock(testdata.stockSymbol1)).toEqual(expected);
  });

  it('Should create action to clear Favorites', () => {
    const expected = {
      type: ActionTypes.CLEAR_FAVORITE_STOCKS,
    };

    expect(actions.clearFavoriteStocks()).toEqual(expected);
  });
});
