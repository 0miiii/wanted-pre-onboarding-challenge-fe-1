import instance from "./instance";

type UserInfo = { email: string | undefined; password: string | undefined };
type Response = { message: string; token: string };

const authApi = {
  signUp: (userInfo: UserInfo) => {
    return instance.post<Response>("/users/create", userInfo);
  },
  login: (userInfo: UserInfo) => {
    return instance.post<Response>("/users/login", userInfo);
  },
};

export default authApi;
