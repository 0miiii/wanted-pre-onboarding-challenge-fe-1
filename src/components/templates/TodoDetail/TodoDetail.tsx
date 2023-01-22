import React, { useEffect, useState } from "react";
import todoApi from "../../../apis/todo";
import { TodoInfo } from "../../../types/todo";
import Container from "./TodoDetail.style";
import Button from "../../atoms/Button/Button";

type Props = {
  clickedTodo: string;
  onSetTodo: React.Dispatch<React.SetStateAction<TodoInfo[]>>;
};

const intialTodo = {
  title: "",
  content: "",
  id: "",
  createdAt: "",
  updatedAt: "",
};

const TodoDetail: React.FC<Props> = ({ clickedTodo, onSetTodo }) => {
  const [todo, setTodo] = useState<TodoInfo>(intialTodo);
  const [isLoading, setIsLoading] = useState(false);
  const [editedTitle, setEditedTitle] = useState("");
  const [editedContent, setEditContent] = useState("");
  const [isEdit, setIsEdit] = useState(false);

  const deleteHandler = () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) {
      return;
    }
    todoApi
      .deleteTodo(clickedTodo)
      .then(() => {
        onSetTodo((prev) => {
          return prev.filter((preTodo) => preTodo.id !== clickedTodo);
        });
        setTodo(intialTodo);
        alert("삭제되었습니다.");
      })
      .catch((error) => {
        alert(error);
      });
  };

  const editHandler = () => {
    setIsEdit(true);
  };

  const editCancelHandler = () => {
    if (!window.confirm("수정 취소하시겠습니까?")) {
      return;
    }
    setEditedTitle(todo.title);
    setEditContent(todo.content);
    setIsEdit(false);
  };

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(event.target.value);
  };

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEditContent(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!window.confirm("수정하시겠습니까?")) {
      return;
    }
    const editedTodo = { title: editedTitle, content: editedContent };
    todoApi
      .updateTodo(clickedTodo, editedTodo)
      .then((response) => {
        onSetTodo((prev) => {
          return prev.map((preTodo) => {
            if (preTodo.id === clickedTodo) {
              return response.data.data;
            }
            return preTodo;
          });
        });
        setTodo(response.data.data);
      })
      .catch((err) => alert(err));
    setIsEdit(false);
  };

  useEffect(() => {
    setIsEdit(false);
    setIsLoading(true);
    todoApi
      .getTodosById(clickedTodo)
      .then((response) => {
        setTodo(response.data.data);
        setEditedTitle(response.data.data.title);
        setEditContent(response.data.data.content);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(error);
        setIsLoading(false);
      });
  }, [clickedTodo]);

  return (
    <Container>
      {!isLoading && !isEdit && (
        <>
          <h1>{todo.title}</h1>
          <p>{todo.content}</p>
          <Button onClick={editHandler}>수정하기</Button>
          <Button onClick={deleteHandler}>삭제하기</Button>
        </>
      )}
      {isLoading && <div>로딩중입니다.</div>}
      {isEdit && (
        <form onSubmit={submitHandler}>
          <input
            type="text"
            value={editedTitle}
            onChange={titleChangeHandler}
          />
          <textarea value={editedContent} onChange={contentChangeHandler} />
          <Button type="button" onClick={editCancelHandler}>
            취소하기
          </Button>
          <Button type="submit">수정하기</Button>
        </form>
      )}
    </Container>
  );
};

export default TodoDetail;
