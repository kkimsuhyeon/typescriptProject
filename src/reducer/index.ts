import { combineReducers } from 'redux';

import signin from './signin';
import user from './user';

const rootReducer = combineReducers({
  signin,
  user,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
