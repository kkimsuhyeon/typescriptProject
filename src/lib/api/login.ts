import axios from 'axios';

type LoginResponse = {
  access_token: string;
};

type LoginProps = {
  id: string;
  password: string;
};

const login = async ({ id, password }: LoginProps) => {
  let response;
  if (id === 'CS') {
    response = await axios.get<LoginResponse>('CSUser.json');
  } else if (id === 'normal') {
    response = await axios.get<LoginResponse>('NormalUser.json');
  } else {
    response = new Promise((resolve, reject) => {
      reject(new Error('아이디 존재 하지 않음'));
    });
  }

  return response;
};

export default login;
