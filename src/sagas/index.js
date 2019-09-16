import { call, fork, take, put, delay } from 'redux-saga/effects';
import { getList } from './../apis/task';
import * as taskTypes from './../constants/task';
import { STATUS_CODE } from './../constants/index';
import { fetchListTaskSuccess, fetchListTaskFailed } from '../actions/task';

import { showLoading, hideLoading } from './../actions/ui';
/**
 * B1: Thuc thi action fetch task
 * B2: GOi API
 * B3: Kiem tra status code
 * Neu thanh cong ...
 * Neu that bai ...
 * B4: Thuc thi cong viec tiep theo.
 */
function* watchFetchTaskAction() {
  while (true) {
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const res = yield call(getList);
    const { status, data } = res;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFailed(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}

function* watchCreateTaskAction() {
  yield 'Watching Create task';
  // console.log('Watching Create task', yield);
}

function* rootSaga() {
  yield fork(watchFetchTaskAction);
  yield fork(watchCreateTaskAction);
}
export default rootSaga;
