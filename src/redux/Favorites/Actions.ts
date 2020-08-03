import { ActionCreator } from 'redux';

import { ActionTypes, Actions } from 'src/redux/Favorites/Types';

/**
 * Add stock to Favorites action creator.
 * @param stockSymbol - Stock symbol in uppercase. Ex: AAPL
 */
export const addFavoriteStock: ActionCreator<Actions.AddFavoriteStockAction> = (
  stockSymbol: string,
): Actions.AddFavoriteStockAction => ({
  type: ActionTypes.ADD_FAVORITE_STOCK,
  stockSymbol,
});

/**
 * Remove stock from Favorites action creator.
 * @param stockSymbol - Stock symbol in uppercase. Ex: AAPL
 */
export const removeFavoriteStock: ActionCreator<Actions.RemoveFavoriteStockAction> = (
  stockSymbol: string,
): Actions.RemoveFavoriteStockAction => ({
  type: ActionTypes.REMOVE_FAVORITE_STOCK,
  stockSymbol,
});

/**
 * Clear all stocks from Favorites action creator.
 */
// eslint-disable-next-line max-len
export const clearFavoriteStocks: ActionCreator<Actions.ClearFavoriteStocksAction> = (): Actions.ClearFavoriteStocksAction => ({
  type: ActionTypes.CLEAR_FAVORITE_STOCKS,
});
