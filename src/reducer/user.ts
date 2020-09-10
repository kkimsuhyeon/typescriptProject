import { INITIALIZE_USER_INFO, UPDATE_USER_INFO } from 'action/type/user';
import { initializeUserInfo, updateUserInfo } from 'action/user';

type UserAction = ReturnType<typeof initializeUserInfo> | ReturnType<typeof updateUserInfo>;

type UserState = {
  name: string;
  role: string;
  isLogin: boolean;
};

const initialState: UserState = {
  name: '',
  role: '',
  isLogin: false,
};

const user = (state: UserState = initialState, action: UserAction) => {
  switch (action.type) {
    case INITIALIZE_USER_INFO: {
      return { name: '', role: '', isLogin: false };
    }

    case UPDATE_USER_INFO: {
      const { name, role } = action.payload;
      return { name, role, isLogin: true };
    }

    default: {
      return state;
    }
  }
};

export default user;
