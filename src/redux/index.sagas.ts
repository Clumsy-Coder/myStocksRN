import { all } from 'redux-saga/effects';

import stocksSagaWatcher from 'src/redux/Stocks/Sagas';

export default function* () {
  yield all([stocksSagaWatcher()]);
}
