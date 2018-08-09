import { SIGN_IN } from "../actions/authActions";
import { RESET } from "../actions/todoActions";

const INITIAL_STATE = { accessToken: "", refreshToken: "" };

const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SIGN_IN: {
      return {
        ...state,
        accessToken: action.payload.accessToken,
        refreshToken: action.payload.refreshToken
      };
    }
    case RESET: {
      state = undefined;
    }
    default: {
      return state;
    }
  }
};

export default authReducer;
