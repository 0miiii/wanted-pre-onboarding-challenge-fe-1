import instance from "./instance";
import { RequestTodo, Todo } from "../types/todo";

const todoApi = {
  getTodos: () => {
    return instance.get<{ data: Todo[] }>("/todos");
  },
  getTodosById: (id: string) => {
    return instance.get<{ data: Todo }>(`/todos/${id}`);
  },
  createTodo: (todo: RequestTodo) => {
    return instance.post<{ data: Todo }>("/todos", todo);
  },
  updateTodo: (id: string, todo: RequestTodo) => {
    return instance.put<{ data: Todo }>(`todos/${id}`, todo);
  },
  deleteTodo: (id: string) => {
    return instance.delete<null>(`/todos/${id}`);
  },
};

export default todoApi;
