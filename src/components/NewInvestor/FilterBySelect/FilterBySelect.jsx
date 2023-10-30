import "./FilterBySelect.scss";

function FilterBySelect({ name, label, onChange, options, value }) {
  return (
    <div className="filter_by_select">
      <select name={name} id={label} onChange={onChange} value={value}>
        <option value={""}>{!value ? label : "None"}</option>
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default FilterBySelect;
