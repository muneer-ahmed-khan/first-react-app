import { useState } from "react";

import Modal from "./Modal";
import Backdrop from "./Backdrop";
import classes from "./AllTodo.module.css";

function AllTodo(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler(item) {
    props.removeData(item);
    setModalIsOpen(false);
  }
  function closeModalHandler() {
    setModalIsOpen(false);
  }
  function toggleModal() {
    setModalIsOpen(true);
  }

  const noTodoData = <span className={classes.no_data}>Empty Todo List</span>;

  if (props.data.length) {
    return (
      <div>
        {props.data.map((item, index) => {
          if (typeof item === "string")
            return (
              <div className={classes.card} key={index}>
                <ul>
                  <li>
                    <h2> {item}</h2>
                  </li>
                </ul>

                <div className={classes.action}>
                  <button onClick={() => props.updateTodo(item)}>Edit</button>
                  <button onClick={toggleModal}>Delete</button>
                </div>
                {modalIsOpen && (
                  <Modal
                    onCancel={closeModalHandler}
                    onConfirm={() => deleteHandler(item)}
                  />
                )}
                {modalIsOpen && <Backdrop onCancel={closeModalHandler} />}
              </div>
            );
          else return null;
        })}
      </div>
    );
  } else {
    return noTodoData;
  }
}

export default AllTodo;
