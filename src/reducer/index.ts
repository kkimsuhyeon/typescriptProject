import { combineReducers } from 'redux';

import signin from './signin';
import user from './user';
import alert from './alert'

const rootReducer = combineReducers({
  signin,
  user,
  alert,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
