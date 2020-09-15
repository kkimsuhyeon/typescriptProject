import axios, { AxiosResponse } from 'axios';

type LoginResponse = {
  access_token: string;
};

type LoginProps = {
  id: string;
  password: string;
};

const login = async ({ id, password }: LoginProps) => {
  let response:AxiosResponse<LoginResponse> | Promise<any>;
  if (id === 'CS') {
    response = await axios.get<LoginResponse>('CSLogin.json');
  } else if (id === 'normal') {
    response = await axios.get<LoginResponse>('NormalLogin.json');
  } else {
    response = new Promise((resolve, reject) => {
      reject(new Error('아이디 존재 하지 않음'));
    });
  }

  return response;
};

export default login;
