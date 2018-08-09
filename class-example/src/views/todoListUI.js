import React from "react";
import PropTypes from "prop-types";

import TodoItem from "../components/TodoItem";

const TodoList = ({
  length = 0,
  todoList = [],
  addTodoItem = f => f,
  completeTodo = f => f
}) => (
  <ul>
    <p onClick={() => addTodoItem("Learn Rx")}>Length {length}</p>
    {todoList.map((todo, index) => (
      <TodoItem
        {...todo}
        key={index}
        setCompleteTodo={() => completeTodo(index)}
      />
    ))}
  </ul>
);

export default TodoList;
