import { CHANGE_INPUT, INITIALIZE_INPUT } from './type/signin';

export const initializeInput = () => {
  return {
    type: INITIALIZE_INPUT,
  };
};

export const changeInput = ({ name, value }: { name: 'id' | 'password'; value: string }) => {
  return {
    type: CHANGE_INPUT,
    payload: {
      name,
      value,
    },
  };
};
