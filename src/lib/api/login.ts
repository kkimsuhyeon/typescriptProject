import axios from 'axios';

type LoginResponse = {
  access_token: string;
};

type LoginProps = {
  id: string;
  password: string;
};

const login = async ({ id, password }: LoginProps) => {
  const response = await axios.get<LoginResponse>('signin.json', {
    // params: {
    //   id,
    //   password,
    // },
  });

  return response;
};

export default login;
