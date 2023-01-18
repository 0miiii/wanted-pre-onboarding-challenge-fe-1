import React from "react";
import { Todo } from "../../../types/todo";
import * as S from "./TodoList.style";
import TodoForm from "../../molecules/TodoForm/TodoForm";

type Props = {
  todoList: Todo[];
  onAddTodo: React.Dispatch<React.SetStateAction<Todo[]>>;
  onClickedTodo: React.Dispatch<React.SetStateAction<string>>;
};

const TodoList: React.FC<Props> = ({ todoList, onAddTodo, onClickedTodo }) => {
  const clickHandler = (id: string) => {
    onClickedTodo(id);
  };

  return (
    <S.Container>
      <TodoForm onAddTodo={onAddTodo} />
      <ul>
        {todoList.map((todo) => (
          <S.ListContainer
            key={todo.id}
            onClick={() => clickHandler(todo.id)}
            aria-hidden="true"
          >
            {todo.title}
          </S.ListContainer>
        ))}
      </ul>
    </S.Container>
  );
};

export default TodoList;
