import { all, AllEffect, ForkEffect } from 'redux-saga/effects';

import stocksSagaWatcher from 'src/redux/Stocks/Sagas';

type RootSaga = Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>, void, unknown>;

export default function* (): RootSaga {
  try {
    yield all([stocksSagaWatcher()]);
  } catch (error) {}
}
