import {
  call,
  fork,
  take,
  put,
  delay,
  takeLatest,
  select,
} from 'redux-saga/effects';
import { getList } from './../apis/task';
import * as taskTypes from './../constants/task';
import { STATUS_CODE } from './../constants/index';
import {
  fetchListTaskSuccess,
  fetchListTaskFailed,
  filterTaskSuccess,
} from '../actions/task';

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

function* filterTaskSaga({ payload }) {
  yield delay(500);
  const { keyword } = payload;
  const list = yield select(state => state.task.listTask);
  const filterTask = list.filter(task =>
    task.title.toLowerCase().includes(keyword.trim().toLowerCase()),
  );
  yield put(filterTaskSuccess(filterTask));
}

function* rootSaga() {
  yield fork(watchFetchTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
}
export default rootSaga;
