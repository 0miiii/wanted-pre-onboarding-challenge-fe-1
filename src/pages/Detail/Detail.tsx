import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { getTodosById_request, deleteTodoRequest } from "../../apis/todo";
import { Todo } from "../../types/todo";
import Button from "../../components/atoms/Button/Button";

const Detail = () => {
  const [todo, setTodo] = useState<Todo>();
  const navigate = useNavigate();
  const { id } = useParams();
  const token = localStorage.getItem("token");

  const deleteHandler = () => {
    deleteTodoRequest(id, token).then((res) => {
      alert("삭제되었습니다.");
      navigate("/main");
    });
  };

  const editHandler = () => {
    navigate(`/detail/${id}/edit`, { state: todo });
  };

  useEffect(() => {
    getTodosById_request(id, token).then((res) => {
      const { data } = res;
      setTodo(data);
    });
  }, [id, token]);

  return (
    <div>
      <h1>title</h1>
      <div>{todo?.title}</div>
      <h2>content</h2>
      <div>{todo?.content}</div>
      <Button onClick={editHandler}>수정하기</Button>
      <Button onClick={deleteHandler}>삭제하기</Button>
    </div>
  );
};

export default Detail;
