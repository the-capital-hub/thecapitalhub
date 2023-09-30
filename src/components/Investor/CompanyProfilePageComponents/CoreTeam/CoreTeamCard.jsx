import React from "react";

export default function CoreTeamCard({ image, name, designation }) {
  return (
    <div
      className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
      style={{ backgroundColor: "#EDEDED" }}
    >
      <img
        src={image}
        alt={"name"}
        style={{ width: "50px", height: "50px" }}
        className="rounded-circle"
        loading="lazy"
      />
      <h5 className="text-capitalize">{name}</h5>
      <p className="text-capitalize">{designation}</p>
    </div>
  );
}
