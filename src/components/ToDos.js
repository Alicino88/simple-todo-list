import FilterCategory from "./FilterCategory";
import { useState } from "react";

function ToDos(props) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  /*the category arrives from the child component FilterCategory */
  const filterChangeCategory = (category) => {
    console.log(category);
    setSelectedCategory(category);
  };

  /*below we create a new array of todos filtered according to the current selected category */
  const filteredToDos = props.items.filter((toDo) => {
    return toDo.category === selectedCategory;
  });
  return (
    <div>
      <FilterCategory
        onSelectCategory={filterChangeCategory}
        visibleCategory={selectedCategory}
      />
      {selectedCategory === "All" &&
        props.items.map((item) => (
          <div key={item.key}>
            <h3>{item.title}</h3>
            <p>{item.hours}</p>
            <p>{item.category}</p>
          </div>
        ))}

      {filteredToDos.map((item) => (
        <div key={item.key}>
          <h3>{item.title}</h3>
          <p>{item.hours}</p>
          <p>{item.category}</p>
        </div>
      ))}
    </div>
  );
}

export default ToDos;
