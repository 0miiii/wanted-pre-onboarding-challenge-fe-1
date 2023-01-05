import React from "react";
import { Link } from "react-router-dom";
import { Todo } from "../../../types/todo";

const TodoList: React.FC<{ todoList: Todo[] }> = ({ todoList }) => {
  return (
    <ul>
      {todoList.map((todo) => (
        <Link to={`/detail/${todo.id}`} key={todo.id}>
          <li>{todo.title}</li>
        </Link>
      ))}
    </ul>
  );
};

export default TodoList;
