import { useRef } from "react";

export default function ViewSelect({ handleViewSelect }) {
  const dayRef = useRef(null);
  const weekRef = useRef(null);
  const monthRef = useRef(null);

  function handleDayClick(e) {
    handleViewSelect(e.target.dataset.view);
    dayRef.current.classList.add("active__view");
    weekRef.current.classList.remove("active__view");
    monthRef.current.classList.remove("active__view");
  }

  function handleWeekClick(e) {
    handleViewSelect(e.target.dataset.view);
    weekRef.current.classList.add("active__view");
    dayRef.current.classList.remove("active__view");
    monthRef.current.classList.remove("active__view");
  }

  function handleMonthClick(e) {
    handleViewSelect(e.target.dataset.view);
    monthRef.current.classList.add("active__view");
    weekRef.current.classList.remove("active__view");
    dayRef.current.classList.remove("active__view");
  }

  return (
    <div className="view__selector d-flex gap-2 bg-light px-2 py-3 rounded-3">
      <button
        className="view__btn border-0 px-3 py-2 rounded-3"
        data-view="day"
        onClick={handleDayClick}
        ref={dayRef}
      >
        Day
      </button>
      <button
        className="view__btn border-0 px-3 py-2 rounded-3 active__view"
        data-view="week"
        onClick={handleWeekClick}
        ref={weekRef}
      >
        Week
      </button>
      <button
        className="view__btn border-0 px-3 py-2 rounded-3"
        data-view="month"
        onClick={handleMonthClick}
        ref={monthRef}
      >
        Month
      </button>
    </div>
  );
}
