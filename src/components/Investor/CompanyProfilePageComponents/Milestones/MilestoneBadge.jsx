import React from "react";
import { Link } from "react-router-dom";
import "./MilestoneBadge.scss";
import IconEdit from "../../SvgIcons/IconEdit";
import IconDeleteFill from "../../SvgIcons/IconDeleteFill";
import { PlusIcon } from "../../../NewInvestor/SvgIcons";

export default function MilestoneBadge({
  badge,
  milestone,
  text,
  isMini,
  theme,
  action,
}) {
  // handle remove milestone
  async function handleRemoveMilestone() {}

  // handle add milestone
  async function handleAddMilestone() {}

  return (
    <div
      className={`badge_container p-4 d-flex flex-column align-items-center gap-3 rounded-5 position-relative ${theme}`}
      style={{
        backgroundColor: "#EDEDED",
        flex: `0 0 ${isMini ? "200px" : "260px"}`,
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
        <h5
          className={`text-capitalize ${isMini ? "fs-6" : ""}`}
          style={{ minHeight: `${isMini ? "60px" : "none"}` }}
        >
          {milestone}
        </h5>
        {isMini ? "" : <p>{text}</p>}
      </div>
      {isMini ? (
        ""
      ) : (
        <Link className={`see__more orange align-self-end mt-auto ${theme}`}>
          See more
        </Link>
      )}
      {isMini && action === "add" && (
        <button
          className={`action_badge btn border-0 ${theme}`}
          onClick={handleRemoveMilestone}
        >
          <PlusIcon height="1.5rem" width="1.5rem" />
        </button>
      )}
      {isMini && action === "remove" && (
        <button
          className={`action_badge btn border-0 ${theme}`}
          onClick={handleAddMilestone}
        >
          <IconDeleteFill />
        </button>
      )}
    </div>
  );
}
