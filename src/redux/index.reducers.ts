import { combineReducers, Reducer } from 'redux';

import StockReducer from 'src/redux/Stocks/Reducer';
import FavoritesReducer from 'src/redux/Favorites/Reducer';
import { StocksActions, Reducer as StockReducerType } from 'src/redux/Stocks/Types';
import { FavoritesActions, FavoritesReducerState } from 'src/redux/Favorites/Types';

export interface AppState {
  Stocks: StockReducerType.ReducerState;
  Favorites: FavoritesReducerState;
}
export type AppActions = StocksActions | FavoritesActions;

const rootReducer: Reducer<AppState, AppActions> = combineReducers<AppState>({
  Stocks: StockReducer,
  Favorites: FavoritesReducer,
});

export default rootReducer;
