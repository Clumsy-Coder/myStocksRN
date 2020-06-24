import { combineReducers, Reducer } from 'redux';

import StockReducer from 'src/redux/Stocks/Reducer';
import FavoritesReducer from 'src/redux/Favorites/Reducer';
import { Actions as StocksActions, Reducer as StockReducerType } from 'src/redux/Stocks/Types';
import {
  Actions as FavoritesActions,
  Reducer as FavoriteReducerType,
} from 'src/redux/Favorites/Types';

export interface AppState {
  Stocks: StockReducerType.ReducerState;
  Favorites: FavoriteReducerType.ReducerState;
}
export type AppActions = StocksActions.StocksActions | FavoritesActions.FavoritesActions;

const rootReducer: Reducer<AppState, AppActions> = combineReducers<AppState>({
  Stocks: StockReducer,
  Favorites: FavoritesReducer,
});

export default rootReducer;
