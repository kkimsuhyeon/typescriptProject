import axios from 'axios';
import login from './login';
import {
  getAuthWork, getCoinWork, getFiatWork, getQnaWork,
} from './csInfo';

axios.defaults.baseURL = 'dummy/';

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return error;
  },
);

export {
  login, getAuthWork, getCoinWork, getFiatWork, getQnaWork,
};
