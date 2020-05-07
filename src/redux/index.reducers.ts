import { combineReducers } from 'redux';

import StockReducer from 'src/redux/Stocks/Reducer';

const rootReducer = combineReducers({
  Stocks: StockReducer,
});

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>;
