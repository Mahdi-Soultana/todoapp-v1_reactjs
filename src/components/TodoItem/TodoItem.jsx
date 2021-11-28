import React, { useContext } from "react";
import { useTodoContext } from "../../hooks/TodoItemProvider";
import { TodoItemStyled } from "./TodoItemStlyed";

function TodoItem({ item: { id, todo, i } }) {
  const { updateItem, deleteItem } = useTodoContext();
  return (
    <TodoItemStyled>
      <p>
        {""}
        <span>{i + 1} -</span>
        {todo || "Heloooooo"}
      </p>
      <div>
        <button onClick={() => updateItem(id)}>edit</button>
        <button onClick={() => deleteItem(id)}>Delete</button>
      </div>
    </TodoItemStyled>
  );
}

export default TodoItem;
