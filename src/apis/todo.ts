import axios from "axios";
import { RequestTodo } from "../types/todo";

export const createTodo_request = async (
  todo: RequestTodo,
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

export const getTodos_request = async (token: string | null) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/todos`, {
      headers: { Authorization: token },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};

export const getTodosById_request = async (
  id: string | undefined,
  token: string | null
) => {
  try {
    const { data } = await axios.get(`http://localhost:8080/todos/${id}`, {
      headers: { Authorization: token },
    });
    return data;
  } catch (err) {
    console.log(err);
  }
};
