import React, { useEffect, useRef, useState } from "react";
import { FormStyled } from "./StyledForm";
import { useTodoContext } from "../../hooks/TodoItemProvider";
function Form() {
  const refInput = useRef("");
  const { isEditing, addTodo, data, setSuccess, success } = useTodoContext();

  function handelSubmit(e) {
    e.preventDefault();
    const inputValue = refInput.current.value.trim();
    if (!inputValue) {
      //handel Empty Value

      setSuccess({
        msg: "please enter value",
        show: true,
        type: "danger",
      });
    } else if (inputValue && isEditing) {
      //handel Edit Value
      setSuccess({
        msg: "your todo Edited !",
        show: true,
        type: "warning",
      });
      addTodo(inputValue);
    } else {
      //handel Add Value
      setSuccess({
        msg: "your todo Added !",
        show: true,
        type: "success",
      });
      addTodo(inputValue);
    }
  }
  return (
    <FormStyled
      onSubmit={handelSubmit}
      edit={isEditing}
      show={success.show}
      type={success.type}
    >
      <span> {success.msg}</span>
      <h3>Grocerie Todo App</h3>
      <div>
        <input type="text" ref={refInput} />
        <button type="submit">{isEditing ? "Edit" : "Submit"}</button>
      </div>
    </FormStyled>
  );
}

export default Form;
