import React, { createContext, useContext } from "react";

const TodoItemProviderContext = createContext({
  updateItem: (id) => {},
  deleteItem: (id) => {},
});

function TodoItemProvider({ children, value }) {
  return (
    <TodoItemProviderContext.Provider value={value}>
      {children}
    </TodoItemProviderContext.Provider>
  );
}
export const useTodoContext = () => useContext(TodoItemProviderContext);
export default TodoItemProvider;
