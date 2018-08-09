import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import fetchData from "../services/todoService";
import { signOut } from "../services/authService";
import Todo from "../components/Todo";
import SearchBarUI from "./searchBarUI";
import SelectMenu from "./selectMenu";
// import Pagination from "./pagination";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      loginStatus: true
    };
    this.setCurrentPage = this.setCurrentPage.bind(this);
  }
  componentWillMount() {
    if (localStorage.getItem("refreshToken")) {
      fetchData(this.props.storeDataToStore, this.props.query);
    }
  }

  setCurrentPage(page) {
    this.setState({ currentPage: page });
  }

  render() {
    return !localStorage.getItem("refreshToken") ? (
      <Redirect to="/" />
    ) : (
      <div>
        <SearchBarUI
          storeDataToStore={this.props.storeDataToStore}
          query={this.props.query}
        />
        <SelectMenu
          storeDataToStore={this.props.storeDataToStore}
          query={this.props.query}
        />
        <Todo list={this.props.list} listLength={this.props.listLength} />
        {/* <Pagination
          storeDataToStore={this.props.storeDataToStore}
          query={this.props.query}
          listLength={this.props.listLength}
        /> */}
        <button
          onClick={async () => {
            await signOut(localStorage.getItem("refreshToken"));
            this.setState({ loginStatus: false });
          }}
        >
          Log Out
        </button>
      </div>
    );
  }
}

export default TodoList;
