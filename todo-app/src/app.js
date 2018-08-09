import React, { Component } from "react";
import { Provider } from "react-redux";

import store from "./store";

import "./app.css";

import Router from "./routes";

import { BrowserRouter } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
