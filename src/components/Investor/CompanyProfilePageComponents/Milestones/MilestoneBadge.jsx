import React from "react";
import { Link } from "react-router-dom";
import "./MilestoneBadge.scss";
import IconDeleteFill from "../../SvgIcons/IconDeleteFill";
import { PlusIcon } from "../../../NewInvestor/SvgIcons";
import { addMilestoneToUserAPI } from "../../../../Service/user";
import { useSelector } from "react-redux";

const DATEOPTIONS = {
  year: "numeric",
  month: "long",
  day: "numeric",
};

export default function MilestoneBadge({
  isMini,
  theme,
  action,
  setUserMilestones,
  milestone,
}) {
  const { createdAt } = useSelector((state) => state.user.loggedInUser);
  const { badge, text, _id: milestoneId } = milestone;

  // States for loading

  // handle remove milestone
  async function handleRemoveMilestone(e, milestoneId) {}

  // handle add milestone
  async function handleAddMilestone(e, milestoneId) {
    try {
      const { data } = await addMilestoneToUserAPI({
        milestoneId: milestoneId,
      });
      // console.log("After add milestone", data);
      setUserMilestones((prev) => [...prev, milestone]);
    } catch (error) {
      console.log(error);
    }
  }

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
          {text}
        </h5>
        {isMini ? (
          ""
        ) : (
          <p>
            {text === "Joining Capital HUB"
              ? new Date(createdAt).toLocaleDateString([], DATEOPTIONS)
              : ""}
          </p>
        )}
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
          onClick={(e) => handleAddMilestone(e, milestoneId)}
        >
          <PlusIcon height="1.5rem" width="1.5rem" />
        </button>
      )}
      {isMini && action === "remove" && (
        <button
          className={`action_badge btn border-0 ${theme}`}
          onClick={(e) => handleRemoveMilestone(e, milestoneId)}
        >
          <IconDeleteFill />
        </button>
      )}
    </div>
  );
}
