import { SET_VALUE } from "../actions/setValues";
import { RESET } from "../actions/reset";
const INITIAL_STATE = {
  squares: Array(9).fill(null),
  xIsNext: true
};

const setValueReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_VALUE: {
      const tempArray = state.squares.slice();
      tempArray[action.payload.index] = state.xIsNext ? "X" : "O";
      return { ...state, squares: tempArray, xIsNext: !state.xIsNext };
    }

    case RESET: {
      return INITIAL_STATE;
    }
    default:
      return state;
  }
};

export default setValueReducer;
