const axios = require("axios");
export const signIn = (username, password) => {
  return axios({
    method: "post",
    url: "http://localhost:8848/api/auth/signin",
    data: {
      username: username,
      password: password
    },
    config: {
      headers: { "Content-Type": "application/json" }
    }
  });
};

export const signOut = refreshtoken => {
  localStorage.removeItem("accessToken");
  localStorage.removeItem("refreshToken");
  return axios({
    method: "post",
    url: "http://localhost:8848/api/auth/signout",
    data: {
      refreshtoken
    },
    config: {
      headers: { "Content-Type": "application/json" }
    }
  });
};
