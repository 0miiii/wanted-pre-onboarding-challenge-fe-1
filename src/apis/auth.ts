import instance from "./instance";

type UserInfo = { email: string | undefined; password: string | undefined };

const authApi = {
  signUp: (userInfo: UserInfo) => {
    return instance.post("/users/create", userInfo);
  },
  login: (userInfo: UserInfo) => {
    return instance.post("/users/login", userInfo);
  },
};

export default authApi;
