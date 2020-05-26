import { createSelector } from 'reselect';

import { AppState } from 'src/redux/index.reducers';
import { Reducer } from 'src/redux/Favorites/Types';

/**
 * Select 'Favorites' from root reducer.
 * ```ts
 * {
 *    selectedFavorites: selectFavorites(state)
 * }
 * ```
 * @param state - RootState - Root redux state
 * @returns FavoriteReducerState - Favorites reducer state
 */
export const selectFavorites = (state: AppState): Reducer.FavoritesReducerState => state.Favorites;

/**
 * Select Favorites stock 'symbols'
 * ```ts
 * {
 *    selectedFavoriteSymbols: selectFavoriteSymbols(state)
 * }
 * ```
 * @param state - RootState - Root redux state
 * @returns string[] - Array of stock symbols in uppercase
 */
export const selectFavoriteSymbols = createSelector(
  [selectFavorites],
  (favorites: Reducer.FavoritesReducerState): Reducer.FavoriteStockData[] => favorites.symbols,
);
