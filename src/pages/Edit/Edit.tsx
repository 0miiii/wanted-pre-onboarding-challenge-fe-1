import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import Button from "../../components/atoms/Button/Button";
import todoApi from "../../apis/todo";
import { Todo } from "../../types/todo";

const Edit = () => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredContent, setEnteredContent] = useState("");
  const navigate = useNavigate();
  const location: { state: Todo } = useLocation();
  const todoToEdit = location.state;

  const titleChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredTitle(event.target.value);
  };

  const contentChangeHandler = (
    event: React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    setEnteredContent(event.target.value);
  };

  useEffect(() => {
    setEnteredTitle(todoToEdit.title);
    setEnteredContent(todoToEdit.content);
  }, [todoToEdit.content, todoToEdit.title]);

  const submitHandler = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (enteredTitle === "" && enteredContent === "") {
      alert("글을 모두 입력해주세요");
      return;
    }

    const todo = { title: enteredTitle, content: enteredContent };
    todoApi
      .updateTodo(todoToEdit.id, todo)
      .then((response) => {
        navigate(`/detail/${todoToEdit.id}`);
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

export default Edit;
