import { createStore, applyMiddleware, Store, Middleware } from 'redux';
// eslint-disable-next-line import/no-extraneous-dependencies
import logger from 'redux-logger';
// eslint-disable-next-line import/no-extraneous-dependencies
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-community/async-storage';
import { persistStore, persistReducer, PersistConfig } from 'redux-persist';

// eslint-disable-next-line import/no-unresolved
import { BUILD_VERSION } from '@env';
import rootReducer, { AppState, AppActions } from 'src/redux/index.reducers';
import rootSaga from 'src/redux/index.sagas';

const persistConfig: PersistConfig<AppState, AppState> = {
  key: 'favorites',
  storage: AsyncStorage,
  whitelist: ['Favorites'],
};

const persistedReducer = persistReducer<AppState, AppActions>(persistConfig, rootReducer);
const sagaMiddleware = createSagaMiddleware();
const middleware: Middleware[] = [sagaMiddleware];

if (BUILD_VERSION === 'development') {
  middleware.push(logger);
}

const store: Store<AppState, AppActions> = createStore(
  persistedReducer,
  composeWithDevTools(applyMiddleware(...middleware)),
);
sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
export default store;
