import React, { useState, useEffect } from "react";
import { getTodos_request } from "../../apis/todo";
import { Todo } from "../../types/todo";
import TodoForm from "../../components/templates/TodoForm/TodoForm";
import TodoList from "../../components/templates/TodoList/TodoList";

const Main = () => {
  const token = localStorage.getItem("token");
  const [todoList, setTodoList] = useState<Todo[]>([]);

  useEffect(() => {
    getTodos_request(token).then((res) => {
      const { data } = res;
      setTodoList(data);
    });
  }, [token]);

  return (
    <>
      {token ? (
        <>
          <TodoList todoList={todoList} />
          <TodoForm addTodoList={setTodoList} />
        </>
      ) : (
        <div>잘못된 접근입니다.</div>
      )}
    </>
  );
};

export default Main;
