import NewToDo from "./components/NewToDo";
import ToDos from "./components/ToDos";
import { useState } from "react";

function App() {
  const [toDos, setToDos] = useState([]);
  /*the data come from ToDoForm component when the "add task" button is clicked", passing through NewToDo */
  const getData = (data) => {
    /*previousData is initially an empty array that automatically comes as a argument (name is arbitrary) 
    /*the todos are stored inside a state so to trigger a re-render of the component whenever we add a new todo*/
    setToDos((previousData) => {
      return [data, ...previousData];
    });
  };

  /*if we would use the below syntax, at every re-render we would loose the previous toDo.
  Therefore we need to use the spred operator
  const getData = (data) => {
  setToDos([data]);
}; */
  console.log(toDos);

  return (
    <div className="App">
      <NewToDo onSubmitDataAgain={getData} />
      <ToDos items={toDos} />
    </div>
  );
}

export default App;
