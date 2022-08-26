import { useState } from "react";

function ToDoForm(props) {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredHours, setEnteredHours] = useState("");
  const [enteredCategory, setEnteredCategory] = useState("");

  const titleChangeHandler = (e) => {
    setEnteredTitle(e.target.value);
  };

  const hoursChangeHandler = (e) => {
    setEnteredHours(e.target.value);
  };

  const categoryChangeHandler = (e) => {
    setEnteredCategory(e.target.value);
  };

  const saveToDo = (e) => {
    e.preventDefault();
    let toDo = {
      title: enteredTitle,
      hours: enteredHours,
      category: enteredCategory,
      key: Math.random(),
    };

    /*below two-way data binding. When we click on "add task" button then the imput fields are erased*/
    setEnteredTitle("");
    setEnteredHours("");

    props.onSubmitButton(toDo);
  };

  return (
    <form>
      <div>
        <label htmlFor="title-select">Title</label>
        <input
          type="text"
          value={enteredTitle}
          onChange={titleChangeHandler}
          id="title-select"
        />
        <label>Category</label>
        <select onChange={categoryChangeHandler}>
          <option>--Select--</option>
          <option>Family</option>
          <option>Study</option>
          <option>Home</option>
        </select>

        <label htmlFor="hour-select">Estimated amount of hours</label>
        <input
          value={enteredHours}
          type="number"
          onChange={hoursChangeHandler}
          id="hour-select"
        />
        <button onClick={saveToDo}>Add task</button>
        <button onClick={props.onCloseButton}>Cancel</button>
      </div>
    </form>
  );
}

export default ToDoForm;
