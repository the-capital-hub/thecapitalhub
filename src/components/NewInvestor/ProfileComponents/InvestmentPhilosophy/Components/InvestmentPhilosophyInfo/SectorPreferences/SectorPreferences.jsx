import React from "react";
import { sectorOptions } from "../../../../../../../constants/Startups/ExplorePage";
import "./SectorPreferences.scss";
import { useSelector } from "react-redux";
import { selectUserSectorPreferences } from "../../../../../../../Store/features/user/userSlice";

export default function SectorPreferences({
  isEditing = false,
  setSelectedSectors,
}) {
  // Fetch from store
  const userSectorPreferences = useSelector(selectUserSectorPreferences);

  function handleSectorSelect(e) {
    const { name, checked } = e.target;
    if (checked) {
      setSelectedSectors((prev) => [...prev, name]);
    } else {
      setSelectedSectors((prev) => {
        let copy = [...prev];
        let index = copy.indexOf(name);
        return copy.toSpliced(index, 1);
      });
    }
  }

  return (
    <div className="d-flex align-items-center gap-3 flex-wrap">
      {!isEditing ? (
        userSectorPreferences.length ? (
          userSectorPreferences?.map((sector, index) => {
            return (
              <span key={sector} className="investor-check-wrapper shadow-sm">
                <input
                  type="checkbox"
                  className="btn-check"
                  id={sector}
                  name={sector}
                  onClick={handleSectorSelect}
                  autoComplete="off"
                  checked={true}
                  readOnly
                />
                <label className="btn btn-outline-primary" htmlFor={sector}>
                  {sector}
                </label>
              </span>
            );
          })
        ) : (
          <p className="text-muted">No selected preference</p>
        )
      ) : (
        sectorOptions.map((sector, index) => {
          return (
            <span key={sector} className="investor-check-wrapper shadow-sm">
              <input
                type="checkbox"
                className="btn-check"
                id={sector}
                name={sector}
                onClick={handleSectorSelect}
                autoComplete="off"
                defaultChecked={userSectorPreferences.includes(sector)}
              />
              <label className="btn btn-outline-primary" htmlFor={sector}>
                {sector}
              </label>
            </span>
          );
        })
      )}
    </div>
  );
}
