import React, { useState } from "react";
import Button from "../../atoms/Button/Button";
import { Todo } from "../../../types/todo";
import { createTodo_request } from "../../../apis/todo";

const TodoForm: React.FC<{
  addTodoList: React.Dispatch<React.SetStateAction<Todo[]>>;
}> = ({ addTodoList }) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const token = localStorage.getItem("token");

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEnteredContent(event.target.value);
  };

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredTitle === "" && enteredContent === "") {
      alert("글을 모두 입력해주세요");
      return;
    }

    const todo = { title: enteredTitle, content: enteredContent };
    const response = await createTodo_request(todo, token);
    addTodoList((prev) => {
      return [...prev, response.data];
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
