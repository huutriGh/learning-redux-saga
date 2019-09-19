import qs from 'query-string';
import axiosService from './../commons/axiosService';
import { API_ENDPOINT } from './../constants';
// http://localhost:3000/tasks

const url = '/tasks';
export const getList = (para = {}) => {
  let queryParams = '';
  if (Object.keys(para).length > 0) {
    queryParams = `?${qs.stringify(para)}`;
  }
  return axiosService.get(`${API_ENDPOINT}${url}${queryParams}`);
};

export const addTask = data => {
  return axiosService.post(`${API_ENDPOINT}${url}`, data);
};
