import React from "react";
import { TodoInfo } from "../../../types/todo";
import * as S from "./TodoList.style";
import TodoForm from "../../molecules/TodoForm/TodoForm";

type Props = {
  todoList: TodoInfo[];
  onAddTodo: React.Dispatch<React.SetStateAction<TodoInfo[]>>;
  onClickedTodo: React.Dispatch<React.SetStateAction<string>>;
  isLoading: boolean;
};

const TodoList: React.FC<Props> = ({
  todoList,
  onAddTodo,
  onClickedTodo,
  isLoading,
}) => {
  const clickHandler = (id: string) => {
    onClickedTodo(id);
  };

  return (
    <S.Container>
      <TodoForm onAddTodo={onAddTodo} />
      {!isLoading && todoList.length > 0 && (
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
      )}
      {!isLoading && todoList.length === 0 && <div>등록된 글이 없습니다</div>}
      {isLoading && <div>로딩중입니다</div>}
    </S.Container>
  );
};

export default TodoList;
