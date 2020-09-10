import { INITIALIZE_USER_INFO, UPDATE_USER_INFO } from './type/user';

export const initializeUserInfo = () => {
  return {
    type: INITIALIZE_USER_INFO,
  };
};

export const updateUserInfo = ({ role, name }: { role: string; name: string }) => {
  return {
    type: UPDATE_USER_INFO,
    payload: {
      role,
      name,
    },
  };
};
