import React from "react";
import { sectorOptions } from "../../../../../../../constants/Startups/ExplorePage";
import "./SectorPreferences.scss";

export default function SectorPreferences({ isEditing = false }) {
  function handleSectorSelect(e) {
    const { name, checked } = e.target;
  }

  return (
    <div className="d-flex align-items-center gap-3 flex-wrap">
      {isEditing
        ? ""
        : sectorOptions.map((sector, index) => {
            return (
              <span key={sector} className="investor-check-wrapper shadow-sm">
                <input
                  type="checkbox"
                  className="btn-check"
                  id={sector}
                  name={sector}
                  onClick={handleSectorSelect}
                  autoComplete="off"
                />
                <label className="btn btn-outline-primary" htmlFor={sector}>
                  {sector}
                </label>
              </span>
            );
          })}
    </div>
  );
}
