import axios, { AxiosResponse } from 'axios';

type LoginResponse = {
  access_token: string;
};

type LoginProps = {
  id: string;
  password: string;
};

const login = async ({ id, password }: LoginProps) => {
  if (id === 'CS') {
    const response = await axios.get<LoginResponse>('CSLogin.json');
    return response;
  } else if (id === 'normal') {
    const response = await axios.get<LoginResponse>('NormalLogin.json');
    return response;
  } else {
    const response = new Promise((resolve, reject) => {
      reject(new Error('아이디 존재 하지 않음'));
      return undefined;
    });
  }
};

export default login;
