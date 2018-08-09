import { combineReducers } from "redux";

import todoReducer from "./todoReducer";
import authReducer from "./authReducer";

const reducer = combineReducers({
  todo: todoReducer,
  auth: authReducer
});

export default reducer;
