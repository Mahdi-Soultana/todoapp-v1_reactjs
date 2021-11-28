import React, { useState, useEffect, useMemo } from "react";
import TodoItemProvider from "../hooks/TodoItemProvider";
import Form from "./Form/Form";
import TodoList from "./TodoList/TodoList";

function Todo() {
  const [editItemId, setEditItemId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  let [data, setData] = useState([{ id: "&", todo: "heloooooooooooo" }]);
  const addTodo = (todo) => {
    if (isEditing) {
      setData(
        data.map((item) => {
          if (item.id == editItemId) {
            console.log("item", item);
            return { todo, id: editItemId };
          }
          return item;
        }),
      );
      setIsEditing(false);
      return;
    }
    todo = { todo, id: new Date().getTime() * Math.random() * 10 };
    setData([...data, todo]);
  };

  function updateItem(id) {
    setIsEditing(true);
    setEditItemId(id);
    console.log(id, "updated");
  }

  function deleteItem(id) {
    setData(data.filter((todo) => todo.id !== id));
    setSuccess({
      msg: "Todo Deleted !",
      show: true,
      type: "deleted",
    });
  }

  let [success, setSuccess] = useState({
    msg: "",
    show: false,
    type: "",
  });

  useEffect(() => {
    console.log("hi");
    let timeout = setTimeout(() => {
      console.log("timeOUt");
      setSuccess({
        msg: "",
        show: false,
        type: "",
      });
    }, 3000);
    return () => {
      clearTimeout(timeout);
    };
  }, [data]);
  return (
    <TodoItemProvider
      value={{
        deleteItem,
        updateItem,
        addTodo,
        isEditing,
        data,
        setSuccess,
        success,
      }}
    >
      <Form />
      <TodoList data={data} />
    </TodoItemProvider>
  );
}

export default Todo;
