import { createSelector } from 'reselect';

import { RootState } from 'src/redux/index.reducers';
import { FavoriteReducerState } from 'src/redux/Favorites/Types';

/**
 * Select 'Favorites' from root reducer.
 * ```ts
 * {
 *    selectedFavorites: selectFavorites(state)
 * }
 * ```
 * @param state - RootState - Root redux state
 */
export const selectFavorites = (state: RootState): FavoriteReducerState => state.Favorites;

/**
 * Select Favorites stock 'symbols'
 * ```ts
 * {
 *    selectedFavoriteSymbols: selectFavoriteSymbols(state)
 * }
 * ```
 */
export const selectFavoriteSymbols = createSelector(
  [selectFavorites],
  (favorites: FavoriteReducerState): string[] => favorites.symbols,
);
