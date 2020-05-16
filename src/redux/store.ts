import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer } from 'redux-persist';

import { BUILD_VERSION } from 'react-native-dotenv';
import rootReducer from 'src/redux/index.reducers';
import rootSaga from 'src/redux/index.sagas';

const persistConfig: any = {
  key: 'favorites',
  storage: AsyncStorage,
  whitelist: ['Favorites'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleware: any = [sagaMiddleware];

if (BUILD_VERSION === 'development') {
  middleware.push(logger);
}

const store = createStore(persistedReducer, composeWithDevTools(applyMiddleware(...middleware)));
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
