import instance from "./instance";
import { RequestTodo, Todo } from "../types/todo";

const todoApi = {
  getTodos: () => {
    return instance.get<Todo[]>("/todos");
  },
  getTodosById: (id: string) => {
    return instance.get<Todo>(`/todos/${id}`);
  },
  createTodo: (todo: RequestTodo) => {
    return instance.post<Todo>("/todos", todo);
  },
  updateTodo: (id: string, todo: RequestTodo) => {
    return instance.put<Todo>(`todos/${id}`, todo);
  },
  deleteTodo: (id: string) => {
    return instance.delete<null>(`/todos/${id}`);
  },
};

export default todoApi;
