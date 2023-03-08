import classes from "./ActionButton.module.css";

function ActionButton(props) {
  return (
    <div className={classes.action}>
      <button onClick={props.toggleTodoForm}>
        {props.addTodoForm === false ? "New Todo" : "Add Todo"}
      </button>
    </div>
  );
}
export default ActionButton;
