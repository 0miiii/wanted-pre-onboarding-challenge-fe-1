import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getTodosById_request } from "../../apis/todo";
import { Todo } from "../../types/todo";
import Button from "../../components/atoms/Button/Button";

const Detail = () => {
  const [todo, setTodo] = useState<Todo>();
  const { id } = useParams();
  const token = localStorage.getItem("token");

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
      <Button>수정하기</Button>
      <Button>삭제하기</Button>
    </div>
  );
};

export default Detail;
