import React, { useState, useEffect } from "react";
import { Outlet } from "react-router";
import { AxiosResponse } from "axios";
import todoApi from "../../apis/todo";
import { Todo } from "../../types/todo";
import Container from "./Main.style";
import TodoDetail from "../../components/templates/TodoDetail/TodoDetail";
import TodoList from "../../components/templates/TodoList/TodoList";

type GetTodos = { data: Todo[] };

const Main = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [clickedTodo, setClickedTodo] = useState("");

  useEffect(() => {
    todoApi
      .getTodos()
      .then((response: AxiosResponse<GetTodos>) => {
        setTodoList(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Container>
      <TodoList
        todoList={todoList}
        onAddTodo={setTodoList}
        onClickedTodo={setClickedTodo}
      />
      <TodoDetail clickedTodo={clickedTodo} onDeleteTodo={setTodoList} />
    </Container>
  );
};

export default Main;
