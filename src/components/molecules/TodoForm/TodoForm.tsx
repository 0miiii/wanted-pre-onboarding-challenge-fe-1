import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { Todo, RequestTodo } from "../../../types/todo";
import * as S from "./TodoForm.style";
import todoApi from "../../../apis/todo";

type Props = {
  onAddTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoForm: React.FC<Props> = ({ onAddTodo }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEnteredContent(event.target.value);
  };

  const createTodoHandler = async (todo: RequestTodo) => {
    setIsLoading(true);
    const { data } = await todoApi.createTodo(todo);
    onAddTodo((prev) => {
      return [...prev, data.data];
    });
    setIsLoading(false);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (enteredTitle === "" && enteredContent === "") {
      alert("글을 모두 입력해주세요");
      return;
    }
    if (!window.confirm("등록하시겠습니까?")) {
      return;
    }
    const todo = { title: enteredTitle, content: enteredContent };
    createTodoHandler(todo)
      .then(() => {
        setEnteredTitle("");
        setEnteredContent("");
      })
      .catch((err) => {
        alert(err);
        setIsLoading(false);
      });
  };

  return (
    <S.Container onSubmit={submitHandler}>
      <h1>Todo 작성하기</h1>

      <S.InputContainer>
        <label htmlFor="title">title</label>
        <input
          id="title"
          type="text"
          onChange={titleChangeHandler}
          value={enteredTitle}
        />
      </S.InputContainer>

      <S.InputContainer>
        <label htmlFor="content">content</label>
        <textarea
          id="content"
          onChange={contentChangeHandler}
          value={enteredContent}
        />
      </S.InputContainer>

      <Button disabled={isLoading}>작성하기</Button>
    </S.Container>
  );
};

export default TodoForm;
