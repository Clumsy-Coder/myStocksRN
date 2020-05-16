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
export const addFavoriteStock = (stockSymbol: string): AddFavoriteStockAction => ({
  type: ActionTypes.ADD_FAVORITE_STOCK,
  stockSymbol,
});

/**
 * Remove stock from Favorites action creator.
 * @param stockSymbol - Stock symbol in uppercase. Ex: AAPL
 */
export const removeFavoriteStock = (stockSymbol: string): RemoveFavoriteStockAction => ({
  type: ActionTypes.REMOVE_FAVORITE_STOCK,
  stockSymbol,
});

/**
 * Clear all stocks from Favorites action creator.
 */
export const clearFavoriteStocks = (): ClearFavoriteStocksAction => ({
  type: ActionTypes.CLEAR_FAVORITE_STOCKS,
});
