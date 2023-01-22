import React, { useState, useEffect } from "react";
import todoApi from "../../apis/todo";
import { TodoInfo } from "../../types/todo";
import Container from "./Todo.style";
import TodoDetail from "../../components/templates/TodoDetail/TodoDetail";
import TodoMain from "../../components/templates/TodoMain/TodoMain";

const Todo = () => {
  const [todoList, setTodoList] = useState<TodoInfo[]>([]);
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
      <TodoMain
        todoList={todoList}
        onAddTodo={setTodoList}
        onClickedTodo={setClickedTodo}
        isLoading={isLoading}
      />
      <TodoDetail clickedTodo={clickedTodo} onSetTodo={setTodoList} />
    </Container>
  );
};

export default Todo;
