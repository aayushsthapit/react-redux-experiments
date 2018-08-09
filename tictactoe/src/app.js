import React, { Component } from "react";
import store from "./store";
import "./App.css";
import Board from "./views/ticTacToe";
import { Provider } from "react-redux";

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Board />
      </Provider>
    );
  }
}

export default App;
