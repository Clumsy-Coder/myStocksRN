import { ActionCreator } from 'redux';

import {
  ActionTypes,
  AddFavoriteStockAction,
  RemoveFavoriteStockAction,
  ClearFavoriteStocksAction,
} from 'src/redux/Favorites/Types';

/**
 * Add stock to Favorites action creator.
 * @param stockSymbol - Stock symbol in uppercase. Ex: AAPL
 */
export const addFavoriteStock: ActionCreator<AddFavoriteStockAction> = (
  stockSymbol: string,
): AddFavoriteStockAction => ({
  type: ActionTypes.ADD_FAVORITE_STOCK,
  stockSymbol,
});

/**
 * Remove stock from Favorites action creator.
 * @param stockSymbol - Stock symbol in uppercase. Ex: AAPL
 */
export const removeFavoriteStock: ActionCreator<RemoveFavoriteStockAction> = (
  stockSymbol: string,
): RemoveFavoriteStockAction => ({
  type: ActionTypes.REMOVE_FAVORITE_STOCK,
  stockSymbol,
});

/**
 * Clear all stocks from Favorites action creator.
 */
// eslint-disable-next-line max-len
export const clearFavoriteStocks: ActionCreator<ClearFavoriteStocksAction> = (): ClearFavoriteStocksAction => ({
  type: ActionTypes.CLEAR_FAVORITE_STOCKS,
});
