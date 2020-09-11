import axios from 'axios';
import login from './login';

axios.defaults.baseURL = 'dummy/';

axios.interceptors.response.use((response) => {
  return response;
}, (error) => {
  return error;
});

export { login };
