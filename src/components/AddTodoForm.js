import { useState } from "react";

import ActionButton from "../views/ActionButton";
import classes from "./AddTodoForm.module.css";

function AddTodo(props) {
  const [textInputValue, setTextInputValue] = useState(
    props.currentData ? props.currentData : ""
  );

  function submitHandler(event) {
    event.preventDefault();
    props.submitData(textInputValue, props.currentData);
  }

  function handleChangeInput(event) {
    setTextInputValue(event.target.value);
  }

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="todoText">Enter Todo Description:</label>
        <input
          type="text"
          id="todoText"
          value={textInputValue}
          onChange={handleChangeInput}
          required
        />
      </div>

      <ActionButton />
    </form>
  );
}

export default AddTodo;
