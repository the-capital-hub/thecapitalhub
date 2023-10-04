import React from "react";

export default function SpinnerBS({
  colorClass,
  spinnerClass = "spinner-border",
}) {
  return (
    <div className="d-flex justify-content-center my-4">
      <div className={`${spinnerClass} ${colorClass}`} role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    </div>
  );
}
