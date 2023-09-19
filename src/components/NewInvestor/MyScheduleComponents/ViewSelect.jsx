import { useState } from "react";

export default function ViewSelect({ handleViewSelect }) {
  const [activeView, setActiveView] = useState("week");

  function handleViewClick(id) {
    handleViewSelect(id);
    setActiveView(id);
  }

  const viewOptions = ["day", "week", "month"];

  const ViewButton = ({ view, handleViewClick }) => {
    return (
      <button
        id={view}
        className={`"view__btn border-0 px-3 py-1 rounded-3 text-capitalize bg-transparent " ${
          view === activeView ? "active__view" : ""
        } `}
        onClick={(e) => handleViewClick(e.target.id)}
      >
        {view}
      </button>
    );
  };

  return (
    <div className="view__selector d-flex gap-2 bg-light px-2 py-3 rounded-3">
      {viewOptions.map((view) => {
        return (
          <ViewButton
            view={view}
            handleViewClick={handleViewClick}
            key={view}
          />
        );
      })}
    </div>
  );
}
