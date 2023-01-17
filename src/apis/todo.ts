import instance from "./instance";
import { RequestTodo } from "../types/todo";

const todoApi = {
  getTodos: () => {
    return instance.get("/todos");
  },
  getTodosById: (id: string) => {
    return instance.get(`/todos/${id}`);
  },
  createTodo: (todo: RequestTodo) => {
    return instance.post("/todos", todo);
  },
  updateTodo: (id: string, todo: RequestTodo) => {
    return instance.put(`todos/${id}`, todo);
  },
  deleteTodo: (id: string) => {
    return instance.delete(`/todos/${id}`);
  },
};

export default todoApi;
