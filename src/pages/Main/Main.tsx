import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { getTodos_request } from "../../apis/todo";
import Button from "../../components/atoms/Button/Button";
import TodoForm from "../../components/templates/TodoForm/TodoForm";
import TodoList from "../../components/templates/TodoList/TodoList";

type getTodoType = {
  title: string;
  content: string;
  id: string;
  createdAt: string;
  updatedAt: string;
};

const Main = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [todoList, setTodoList] = useState<getTodoType[]>([]);

  useEffect(() => {
    getTodos_request(token).then((res) => {
      const { data } = res;
      setTodoList(data);
    });
  }, [token]);

  const logoutHandler = () => {
    localStorage.removeItem("token");
    alert("로그아웃 성공");
    navigate("/login");
  };

  return (
    <>
      {token ? (
        <>
          <Button onClick={logoutHandler}>로그아웃</Button>
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
