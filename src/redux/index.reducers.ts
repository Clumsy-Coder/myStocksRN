import { combineReducers } from 'redux';

import StockReducer from 'src/redux/Stocks/Reducer';

const reducers = {
  Stocks: StockReducer,
};

export default combineReducers(reducers);
