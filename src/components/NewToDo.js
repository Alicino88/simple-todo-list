import ToDoForm from "./ToDoForm";
import { useState } from "react";
function NewToDo(props) {
  const [formVisible, setFormVisible] = useState(false);
  const startEditHandler = () => {
    setFormVisible(true);
  };
  const stopEditHandler = () => {
    setFormVisible(false);
  };

  /*data are coming from ToDoForm component */
  const transferData = (data) => {
    props.onSubmitDataAgain(data);
  };

  return (
    <div>
      {!formVisible && <button onClick={startEditHandler}>New To Do</button>}
      {formVisible && (
        <ToDoForm
          onSubmitButton={transferData}
          onCloseButton={stopEditHandler}
        />
      )}
    </div>
  );
}

export default NewToDo;
