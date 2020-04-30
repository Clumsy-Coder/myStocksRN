import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';

import { BUILD_VERSION } from 'react-native-dotenv';
import reducers from 'src/redux/index.reducers';

const middleware = [];

if (BUILD_VERSION === 'development') {
  middleware.push(logger);
}

const store = createStore(reducers, applyMiddleware(...middleware));

export default store;
