import "./FilterBySelect.scss";

function FilterBySelect({ name, label, onChange, options, value }) {
  return (
    <div className="filter_by_select">
      <label style={{ color: "#fff", marginLeft: "0.5rem" }}>{label}</label>
      <div
        style={{
          paddingRight: "1rem",
          borderRadius: "10px",
        }}
        className="select"
      >
        <select
          name={name}
          id={label}
          onChange={onChange}
          value={value}
          style={{ paddingRight: "" }}
        >
          <option value={""} hidden={!value}>
            {!value ? label : "None"}
          </option>
          {options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default FilterBySelect;
