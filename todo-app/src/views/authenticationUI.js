import React, { Component } from "react";
import * as authService from "../services/authService";
import { Redirect } from "react-router-dom";

class Signin extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }

  render() {
    return localStorage.getItem("accessToken") ? (
      <Redirect to="/todo" />
    ) : (
      <div>
        Username:
        <input
          onChange={event => {
            this.setState({ username: event.target.value });
          }}
        />
        <br />
        Password:
        <input
          type="password"
          onChange={event => {
            this.setState({ password: event.target.value });
          }}
        />
        <br />
        <button
          onClick={async () => {
            try {
              let response = await authService.signIn(
                this.state.username,
                this.state.password
              );
              if (response.status === 200) {
                this.props.storeTokens(
                  response.data.data.accesstoken,
                  response.data.data.refreshtoken
                );
              }
            } catch (err) {
              if (err.response.status === 401) {
                alert("asdasd", err.response.data);
              }
            }
          }}
        >
          Signin
        </button>
      </div>
    );
  }
}
export default Signin;
