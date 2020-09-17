import axios from 'axios';
import login from './login';
import { getAuthWork, getCoinWork, getFiatWork, getQnaWork, getManage } from './csInfo';
import getNotice from './notice';

axios.defaults.baseURL = 'dummy/';

axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return error;
  },
);

export { getNotice, login, getAuthWork, getCoinWork, getFiatWork, getQnaWork, getManage };
