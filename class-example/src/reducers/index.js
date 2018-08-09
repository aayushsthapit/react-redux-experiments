import { combineReducers } from 'redux';

import todoReducer from './todoReducer';
import userReducer from './usersReducer';

const reducer = combineReducers({
  todo: todoReducer,
  users: userReducer
});

export default reducer;
