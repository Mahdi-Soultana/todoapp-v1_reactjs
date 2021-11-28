import React from "react";
import ClearBtn from "../ClearBtn/ClearBtn";
import TodoItem from "../TodoItem/TodoItem";
import { TodoListStyled } from "./TodoListStyled";
function TodoList({ data }) {
  return (
    <TodoListStyled>
      {(data.length &&
        data.map((item, i) => (
          <TodoItem key={item.id} item={{ ...item, i }} />
        ))) || <h2>No Todo Added yeat !!</h2>}
    </TodoListStyled>
  );
}

export default TodoList;
