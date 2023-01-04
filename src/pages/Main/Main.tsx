import React from "react";
import { useNavigate } from "react-router";
import Button from "../../components/atoms/Button/Button";
import TodoForm from "../../components/templates/TodoForm/TodoForm";

const Main = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

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
          <TodoForm />
        </>
      ) : (
        <div>잘못된 접근입니다.</div>
      )}
    </>
  );
};

export default Main;
