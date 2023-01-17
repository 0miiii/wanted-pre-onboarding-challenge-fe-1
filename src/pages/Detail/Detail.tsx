import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AxiosResponse } from "axios";
import todoApi from "../../apis/todo";
import { Todo } from "../../types/todo";
import Button from "../../components/atoms/Button/Button";

const Detail = () => {
  const [todo, setTodo] = useState<Todo>();
  const navigate = useNavigate();
  const { id } = useParams();

  const deleteHandler = () => {
    todoApi
      .deleteTodo(id as string)
      .then(() => {
        alert("삭제되었습니다.");
        navigate("/main");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editHandler = () => {
    navigate(`/detail/${id as string}/edit`, { state: todo });
  };

  useEffect(() => {
    todoApi
      .getTodosById(id as string)
      .then((response: AxiosResponse<{ data: Todo }>) => {
        setTodo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

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
