import axios from "axios";
import { userInfoType } from "../types/user";

export const signup_request = async (userInfo: userInfoType) => {
  try {
    const { data } = await axios.post(
      "http://localhost:8080/users/create",
      userInfo
    );
    return data;
  } catch (err) {
    console.log(err);
  }
};
