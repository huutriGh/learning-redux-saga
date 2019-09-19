import {
  call,
  delay,
  fork,
  put,
  take,
  takeEvery,
  takeLatest,
} from 'redux-saga/effects';
import { hideModal } from '../actions/modal';
import {
  addTaskSuccess,
  fetchListTask,
  fetchListTaskFailed,
  fetchListTaskSuccess,
} from '../actions/task';
import { hideLoading, showLoading } from './../actions/ui';
import { addTask, getList } from './../apis/task';
import { STATUSES, STATUS_CODE } from './../constants/index';
import * as taskTypes from './../constants/task';

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
    const action = yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const { payload } = action;
    const { para } = payload;
    const res = yield call(getList, para);
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
  yield put(fetchListTask({ q: keyword }));
  // const { keyword } = payload;
  // const list = yield select(state => state.task.listTask);
  // const filterTask = list.filter(task =>
  //   task.title.toLowerCase().includes(keyword.trim().toLowerCase()),
  // );
  // yield put(filterTaskSuccess(filterTask));
}

function* addTaskSaga({ payload }) {
  const { title, description } = payload;
  yield put(showLoading());
  const res = yield call(addTask, {
    title,
    description,
    status: STATUSES[0].value,
  });
  const { data, status } = res;
  if (status === STATUS_CODE.CREATED) {
    yield put(addTaskSuccess(data));
    yield put(hideModal());
  } else {
    yield put(addTaskSuccess(data));
  }
  yield delay(1000);
  yield put(hideLoading());
}

function* rootSaga() {
  yield fork(watchFetchTaskAction);
  yield takeLatest(taskTypes.FILTER_TASK, filterTaskSaga);
  yield takeEvery(taskTypes.ADD_TASK, addTaskSaga);
}
export default rootSaga;
