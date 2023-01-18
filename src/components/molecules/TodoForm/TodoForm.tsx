import React, { useState } from "react";
import { AxiosResponse } from "axios";
import Button from "../../atoms/Button/Button";
import { Todo } from "../../../types/todo";
import todoApi from "../../../apis/todo";

type Props = {
  onAddTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const TodoForm: React.FC<Props> = ({ onAddTodo }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEnteredContent(event.target.value);
  };

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredTitle === "" && enteredContent === "") {
      alert("글을 모두 입력해주세요");
      return;
    }

    const todo = { title: enteredTitle, content: enteredContent };
    todoApi
      .createTodo(todo)
      .then((response: AxiosResponse<{ data: Todo }>) => {
        onAddTodo((prev) => {
          return [...prev, response.data.data];
        });
      })
      .catch((error) => {
        console.log(error);
      });

    setEnteredTitle("");
    setEnteredContent("");
  };

  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="title">title</label>
      <input
        id="title"
        type="text"
        onChange={titleChangeHandler}
        value={enteredTitle}
      />
      <label htmlFor="content">content</label>
      <textarea
        id="content"
        onChange={contentChangeHandler}
        value={enteredContent}
      />
      <Button>작성완료</Button>
    </form>
  );
};

export default TodoForm;
