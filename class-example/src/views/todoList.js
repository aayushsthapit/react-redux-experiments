import { connect } from "react-redux";

import { addTodo, setTodoAsComplete } from "../actions/todoActions";

import TodoListUI from "./todoListUI";

const mapStateToProps = state => {
  return {
    todoList: state.todo.list,
    length: state.todo.list.length
  };
};

const mapDispatchToProps = dispatch => {
  return {
    addTodoItem: name => dispatch(addTodo(name)),
    completeTodo: index => dispatch(setTodoAsComplete(index))
  };
};

const EnhancedTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoListUI);

export default EnhancedTodoList;
