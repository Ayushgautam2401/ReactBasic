import { SagaIterator } from 'redux-saga';
import { all, fork } from 'redux-saga/effects';
import { testRext } from 'store/rext';

export default function* root(): SagaIterator {
  yield all([
    fork(testRext.saga)
  ]);
}
