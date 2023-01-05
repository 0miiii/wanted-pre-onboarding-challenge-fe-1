import React from "react";
import { Link } from "react-router-dom";

type getTodoType = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

const TodoList: React.FC<{ todoList: getTodoType[] }> = ({ todoList }) => {
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
