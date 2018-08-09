import { connect } from "react-redux";

import { storeDataToStore, reset } from "../actions/todoActions";
import TodoListUI from "./todoListUI";
// import {reset} from "../actions/to"

const mapStateToProps = state => {
  return {
    list: state.todo.list,
    listLength: state.todo.listlength,
    query: state.todo.query
  };
};

const mapDispatchToProps = dispatch => {
  return {
    storeDataToStore: (list, listlength, query) => {
      dispatch(storeDataToStore(list, listlength, query));
    },

    resetStates: () => {
      dispatch(reset());
    }
  };
};

const EnhancedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListUI);

export default EnhancedTodoList;
