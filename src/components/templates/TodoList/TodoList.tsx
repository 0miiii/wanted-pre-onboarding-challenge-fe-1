import React from "react";
import { Link } from "react-router-dom";
import { Todo } from "../../../types/todo";
import Container from "./TodoList.style";
import TodoForm from "../../molecules/TodoForm/TodoForm";

type Props = {
  todoList: Todo[];
  onAddTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  onClickedTodo: React.Dispatch<React.SetStateAction<string>>;
};

const TodoList: React.FC<Props> = ({ todoList, onAddTodo, onClickedTodo }) => {
  const clickHandler = (id: string) => {
    onClickedTodo(id);
  };

  return (
    <Container>
      <TodoForm onAddTodo={onAddTodo} />
      <ul>
        {todoList.map((todo) => (
          <li
            key={todo.id}
            onClick={() => clickHandler(todo.id)}
            aria-hidden="true"
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
