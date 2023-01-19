import instance from "./instance";
import { EnteredUserInfo } from "../types/user";

type Response = { message: string; token: string };

const authApi = {
  signUp: (userInfo: EnteredUserInfo) => {
    return instance.post<Response>("/users/create", userInfo);
  },
  login: (userInfo: EnteredUserInfo) => {
    return instance.post<Response>("/users/login", userInfo);
  },
};

export default authApi;
