import axios, { AxiosError, AxiosRequestConfig } from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8080",
});

instance.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers = {
        Authorization: token,
      };
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  (res) => {
    return res;
  },
  (error: AxiosError<{ details: string }>) => {
    return Promise.reject(error.response?.data.details);
  }
);

export default instance;
