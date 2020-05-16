import { combineReducers } from 'redux';

import StockReducer from 'src/redux/Stocks/Reducer';
import FavoritesReducer from 'src/redux/Favorites/Reducer';
import { StockActionTypes } from 'src/redux/Stocks/Types';
import { FavoritesActions } from 'src/redux/Favorites/Types';

const rootReducer = combineReducers({
  Stocks: StockReducer,
  Favorites: FavoritesReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export type RootActions = StockActionTypes | FavoritesActions;
