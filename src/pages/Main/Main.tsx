import React, { useState, useEffect } from "react";
import { AxiosResponse } from "axios";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import todoApi from "../../apis/todo";
import { Todo } from "../../types/todo";
import TodoForm from "../../components/templates/TodoForm/TodoForm";
import TodoList from "../../components/templates/TodoList/TodoList";

type GetTodos = { data: Todo[] };

const Main = () => {
  const isLogin = useSelector((state: RootState) => state.auth.isLoggedIn);
  const [todoList, setTodoList] = useState<Todo[]>([]);

  const getTodos = () => {
    todoApi
      .getTodos()
      .then((response: AxiosResponse<GetTodos>) => {
        setTodoList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getTodos();
  }, []);

  return (
    <main>
      {isLogin && (
        <>
          <TodoList todoList={todoList} />
          <TodoForm addTodoList={setTodoList} />
        </>
      )}
      {!isLogin && <div>잘못된 접근입니다.</div>}
    </main>
  );
};

export default Main;
