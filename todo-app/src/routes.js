import React from "react";
import { Switch, Route } from "react-router-dom";
import EnhancedTodoList from "./views/todoList";
import EnhancedAuthentication from "./views/authentication";

const routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={EnhancedAuthentication} />
      <Route path="/todo" component={EnhancedTodoList} />
    </Switch>
  );
};

export default routes;
