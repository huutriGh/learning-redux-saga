// import * as taskApis from './../apis/task';
import * as taskConstants from './../constants/task';

export const fetchListTask = (para = {}) => {
  return {
    type: taskConstants.FETCH_TASK,
    payload: {
      para,
    },
  };
};
export const fetchListTaskSuccess = data => {
  return {
    type: taskConstants.FETCH_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const fetchListTaskFailed = error => {
  return {
    type: taskConstants.FETCH_TASK_FAILED,
    payload: {
      error,
    },
  };
};
export const addTask = (title, description) => {
  return {
    type: taskConstants.ADD_TASK,
    payload: {
      title,
      description,
    },
  };
};
export const addTaskSuccess = data => {
  return {
    type: taskConstants.ADD_TASK_SUCCESS,
    payload: {
      data,
    },
  };
};
export const addTaskFailed = error => {
  return {
    type: taskConstants.ADD_TASK_FAILED,
    payload: {
      error,
    },
  };
};

export const filterTask = keyword => ({
  type: taskConstants.FILTER_TASK,
  payload: {
    keyword,
  },
});
export const filterTaskSuccess = data => ({
  type: taskConstants.FILTER_TASK_SUCCESS,
  payload: {
    data,
  },
});
export const setTaskEditing = task => ({
  type: taskConstants.SET_TASK_EDITTING,
  payload: {
    task,
  },
});

/**
 * B1: fetchListTaskRequest
 * B2: Reset State Task=>[]
 * B3: fetchListTaskSuccess (data response)
 */
// export const fetchListTaskRequest = () => {
//   return dispatch => {
//     dispatch(fetchListTask());
//     taskApis
//       .getList()
//       .then(res => {
//         const { data } = res;
//         dispatch(fetchListTaskSuccess(data));
//       })
//       .catch(error => {
//         dispatch(fetchListTaskFailed(error));
//       });
//   };
// };
