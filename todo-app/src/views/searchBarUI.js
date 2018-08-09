import React, { Component } from "react";
import { queryGenerator } from "../utils/queryGenerator";
import fetchData from "../services/todoService";
const QUERY_TYPE = "name";

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      inputField: ""
    };
  }

  render() {
    return (
      <div>
        <input
          placeholder="Search by name."
          onChange={event => {
            fetchData(
              this.props.storeDataToStore,
              queryGenerator(this.props.query, event.target.value, QUERY_TYPE),
              event.target.value
            );
          }}
        />
        {this.state.inputField}
      </div>
    );
  }
}
export default SearchBar;
