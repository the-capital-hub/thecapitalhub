import "./FilterBySelect.scss";

function FilterBySelect({ name, label, onChange, options, value }) {
  return (
    <div className="filter_by_select">
      <select name={name} id="sector" onChange={onChange} value={value || ""}>
        <option value="">{label}</option>
        <option value="1">2</option>
        <option value="1">3</option>
        {/* {options.map(({ value, label }) => (
          <option key={label} value={value} label={label} />
        ))} */}
      </select>
    </div>
  );
}

export default FilterBySelect;
