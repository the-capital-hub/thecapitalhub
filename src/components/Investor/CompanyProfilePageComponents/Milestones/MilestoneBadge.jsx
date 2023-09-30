import React from "react";
import { Link } from "react-router-dom";

export default function MilestoneBadge({ badge, milestone, text }) {
  return (
    <div
      className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
      style={{ backgroundColor: "#EDEDED", width: "260px" }}
    >
      <div
        className="bg-white p-1 rounded-circle d-flex justify-content-center align-items-center"
        style={{ width: "140px", height: "140px" }}
      >
        <img
          src={badge}
          alt={"badge"}
          style={{ width: "120px", height: "120px" }}
          className="rounded-circle"
        />
      </div>
      <div className="text-center">
        <h5>{milestone}</h5>
        <p>{text}</p>
      </div>
      <Link className="see__more orange align-self-end mt-auto">See more</Link>
    </div>
  );
}
