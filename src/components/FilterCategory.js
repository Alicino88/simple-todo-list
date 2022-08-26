function FilterCategory(props) {
  const filterCategory = (e) => {
    let category = e.target.value;
    /*after selecting the category this is sent to the parent component ToDos where we filter the view according to it */
    props.onSelectCategory(category);
  };
  return (
    <div>
      <label>Filter by year</label>
      <select onChange={filterCategory} value={props.visibleCategory}>
        <option>Family</option>
        <option>Study</option>
        <option>Home</option>
      </select>
    </div>
  );
}

export default FilterCategory;
