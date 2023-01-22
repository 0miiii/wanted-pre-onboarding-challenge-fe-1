import instance from "./instance";
import { RequestTodo, TodoInfo } from "../types/todo";

const todoApi = {
  getTodos: () => {
    return instance.get<{ data: TodoInfo[] }>("/todos");
  },
  getTodosById: (id: string) => {
    return instance.get<{ data: TodoInfo }>(`/todos/${id}`);
  },
  createTodo: (todo: RequestTodo) => {
    return instance.post<{ data: TodoInfo }>("/todos", todo);
  },
  updateTodo: (id: string, todo: RequestTodo) => {
    return instance.put<{ data: TodoInfo }>(`todos/${id}`, todo);
  },
  deleteTodo: (id: string) => {
    return instance.delete<null>(`/todos/${id}`);
  },
};

export default todoApi;
