import axios from "axios";
import { userInfoType } from "../types/user";

export const auth_request = async (auth: string, userInfo: userInfoType) => {
  let endpoint = auth === "signup" ? "create" : "login";

  try {
    const { data } = await axios.post(
      `http://localhost:8080/users/${endpoint}`,
      userInfo
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
