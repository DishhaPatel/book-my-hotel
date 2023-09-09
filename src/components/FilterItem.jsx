function FilterItem({ filter, checked, handleOnChange }) {
  const { label } = filter;
  return (
    <div
      className="filter-item"
      onClick={() => handleOnChange(!checked, filter)}
    >
      <input type="checkbox" checked={checked} />
      <label>{label}</label>
    </div>
  );  
}

export default FilterItem;
