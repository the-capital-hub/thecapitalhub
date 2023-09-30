import React from "react";
import { Link } from "react-router-dom";

export default function MilestoneBadge({ badge, milestone, text, isMini }) {
  return (
    <div
      className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
      style={{
        backgroundColor: "#EDEDED",
        width: `${isMini ? "160px" : "260px"}`,
      }}
    >
      <div
        className="bg-white p-1 rounded-circle d-flex justify-content-center align-items-center"
        style={{
          width: `${isMini ? "80px" : "140px"}`,
          height: `${isMini ? "80px" : "140px"}`,
        }}
      >
        <img
          src={badge}
          alt={"badge"}
          style={{
            width: `${isMini ? "60px" : "120px"}`,
            height: `${isMini ? "60px" : "120px"}`,
          }}
          className="rounded-circle"
        />
      </div>
      <div className="text-center">
        <h5 className={`${isMini ? "fs-6" : ""}`}>{milestone}</h5>
        {isMini ? "" : <p>{text}</p>}
      </div>
      {isMini ? (
        ""
      ) : (
        <Link className="see__more orange align-self-end mt-auto">
          See more
        </Link>
      )}
    </div>
  );
}
