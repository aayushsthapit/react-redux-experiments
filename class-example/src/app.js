import React, { Component } from 'react';
import { Provider } from 'react-redux';

import store from './store';

import './app.css';

import TodoList from './views/todoList';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
          <TodoList />
        </div>
      </Provider>
    );
  }
}

export default App;
