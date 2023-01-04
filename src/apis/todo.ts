import axios from "axios";
import { TodoType } from "../types/todo";

export const createTodo_request = async (
  todo: TodoType,
  token: string | null
) => {
  try {
    const { data } = await axios.post(`http://localhost:8080/todos`, todo, {
      headers: { Authorization: token },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
