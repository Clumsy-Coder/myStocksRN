import { combineReducers } from 'redux';

import StockReducer from 'src/redux/Stocks/Reducer';
import { StockActionTypes } from 'src/redux/Stocks/Types';

const rootReducer = combineReducers({
  Stocks: StockReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
export type RootActions = StockActionTypes;
