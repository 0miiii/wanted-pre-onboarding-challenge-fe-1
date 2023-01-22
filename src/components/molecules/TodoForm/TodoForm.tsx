import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { TodoInfo, RequestTodo } from "../../../types/todo";
import * as S from "./TodoForm.style";
import TODO from "../../../constants/todo";
import todoApi from "../../../apis/todo";

type Props = {
  onAddTodo: React.Dispatch<React.SetStateAction<TodoInfo[]>>;
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
      alert(TODO.ENTER_ALL_TEXT);
      return;
    }
    if (!window.confirm(TODO.DO_YOU_REGISTER)) {
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
    <S.FormContainer onSubmit={submitHandler}>
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

      <S.BtnContainer>
        <Button disabled={isLoading}>작성하기</Button>
      </S.BtnContainer>
    </S.FormContainer>
  );
};

export default TodoForm;
