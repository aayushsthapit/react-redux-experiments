import { FETCH_DATA, RESET } from "../actions/todoActions";

const INITIAL_STATE = {
  list: [],
  query: {
    name: "",
    per_page: "",
    sort_by: "",
    page: ""
  }
};
const todoReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_DATA: {
      return {
        ...state,
        list: action.payload.list,
        listlength: action.payload.listlength,
        query: action.payload.query
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

export default todoReducer;
