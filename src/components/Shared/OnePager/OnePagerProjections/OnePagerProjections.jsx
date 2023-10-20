import React from "react";
import OnePagerTable from "./OnePagerTable";

export default function OnePagerProjections() {
  return (
    <div className="onePager_projections">
      <h4 className="main_color">Projections</h4>
      <div className=" d-flex flex-column gap-3">
        <OnePagerTable heading={"Revenue"} />
        <OnePagerTable heading={"Expenses"} />
      </div>
    </div>
  );
}
