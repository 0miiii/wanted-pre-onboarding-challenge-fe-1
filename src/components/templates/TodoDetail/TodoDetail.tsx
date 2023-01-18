import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import { AxiosResponse } from "axios";
import todoApi from "../../../apis/todo";
import { Todo } from "../../../types/todo";
import Container from "./TodoDetail.style";
import Button from "../../atoms/Button/Button";

type Props = {
  clickedTodo: string;
  onDeleteTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const intialTodo = {
  title: "",
  content: "",
  id: "",
  createdAt: "",
  updatedAt: "",
};

const TodoDetail: React.FC<Props> = ({ clickedTodo, onDeleteTodo }) => {
  const [todo, setTodo] = useState<Todo>(intialTodo);

  const deleteHandler = () => {
    todoApi
      .deleteTodo(clickedTodo)
      .then(() => {
        onDeleteTodo((prev) => {
          return prev.filter((preTodo) => preTodo.id !== clickedTodo);
        });
        setTodo(intialTodo);
        alert("삭제되었습니다.");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const editHandler = () => {};

  useEffect(() => {
    todoApi
      .getTodosById(clickedTodo)
      .then((response: AxiosResponse<{ data: Todo }>) => {
        setTodo(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [clickedTodo]);

  return (
    <Container>
      <h1>{todo?.title}</h1>
      <p>{todo?.content}</p>
      <Button onClick={editHandler}>수정하기</Button>
      <Button onClick={deleteHandler}>삭제하기</Button>
    </Container>
  );
};

export default TodoDetail;
