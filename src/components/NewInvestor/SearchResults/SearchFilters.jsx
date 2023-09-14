import "./SearchFilters.scss";

const searchFilters = ["Industry", "Age", "Stage", "Startups"];

export default function SearchFilters() {
  return (
    <div className="search__filters__container d-flex gap-4 ms-3">
      <div className="filter__list d-flex gap-4 pe-4 border-end">
        {searchFilters.map((filter, index) => {
          return (
            <button
              key={`${filter}`}
              style={{ outline: "none", border: "none" }}
              className="bg-white fs-6 fw-normal py-3 px-5 rounded-pill shadow-sm"
            >
              {filter}
            </button>
          );
        })}
      </div>
      <button
        className="fs-6 fw-normal py-3 px-5 rounded-pill shadow-sm"
        style={{
          background: "rgba(211, 243, 107, 1)",
          outline: "none",
          border: "none",
        }}
      >
        Filters
      </button>
    </div>
  );
}
