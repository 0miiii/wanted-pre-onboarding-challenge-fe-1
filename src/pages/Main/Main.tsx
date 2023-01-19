import React, { useState, useEffect } from "react";
import todoApi from "../../apis/todo";
import { Todo } from "../../types/todo";
import Container from "./Main.style";
import TodoDetail from "../../components/templates/TodoDetail/TodoDetail";
import TodoList from "../../components/templates/TodoList/TodoList";

const Main = () => {
  const [todoList, setTodoList] = useState<Todo[]>([]);
  const [clickedTodo, setClickedTodo] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    todoApi
      .getTodos()
      .then((response) => {
        setTodoList(response.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  }, []);

  return (
    <Container>
      <TodoList
        todoList={todoList}
        onAddTodo={setTodoList}
        onClickedTodo={setClickedTodo}
        isLoading={isLoading}
      />
      <TodoDetail clickedTodo={clickedTodo} onDeleteTodo={setTodoList} />
    </Container>
  );
};

export default Main;
