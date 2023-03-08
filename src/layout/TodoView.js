import { useState } from "react";

import AllTodo from "../components/AllTodo";
import AddTodoForm from "../components/AddTodoForm";
import ActionButton from "../views/ActionButton";

function TodoView() {
  const [allTodo, setAllTodo] = useState([]);
  const [addTodoForm, setAddTodoForm] = useState(false);
  const [currentTodoData, setCurrentTodoData] = useState("");

  function addTodoData(data, update) {
    setAddTodoForm(!addTodoForm);
    if (update) {
      setAllTodo((previousTodoList) =>
        previousTodoList.map((item, index) => {
          if (item === update) {
            item = data;
            return item;
          }
          return item;
        })
      );
      setCurrentTodoData("");
    } else setAllTodo((previousTodoList) => previousTodoList.concat(data));
  }

  function removeTodoData(data) {
    setAllTodo((previousTodoList) =>
      previousTodoList.filter((item) => item !== data)
    );
  }

  function updateTodoData(data) {
    setCurrentTodoData(data);
    setAddTodoForm(true);
  }

  return (
    <div>
      {addTodoForm && (
        <AddTodoForm submitData={addTodoData} currentData={currentTodoData} />
      )}
      {!addTodoForm && (
        <AllTodo
          data={allTodo}
          removeData={removeTodoData}
          updateTodo={updateTodoData}
        />
      )}
      {!addTodoForm && (
        <ActionButton addTodoForm={addTodoForm} toggleTodoForm={addTodoData} />
      )}
    </div>
  );
}
export default TodoView;
