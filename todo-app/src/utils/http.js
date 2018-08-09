const axios = require("axios");

//create instance
const axiosInstance = axios.create({
  baseURL: "http://localhost:8848/api/"
});

axiosInstance.interceptors.request.use(config => {
  config.headers["accesstoken"] = localStorage.getItem("accessToken");
  return config;
});

//Get request
export const get = (url, params) => {
  return axiosInstance({
    method: "get",
    url,
    params
  });
};

//Token refresh request
const refreshtoken = (url, headers) => {
  return axiosInstance({
    method: "get",
    url,
    headers
  });
};

//Response Interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if (error.response.status === 403) {
      return refreshtoken("/auth/refresh", {
        refreshtoken: localStorage.getItem("refreshToken")
      }).then(response => {
        localStorage.setItem("accessToken", response.data.data);
        return get("/todo").then(response => {
          return response;
        });
      });
    }
  }
);
