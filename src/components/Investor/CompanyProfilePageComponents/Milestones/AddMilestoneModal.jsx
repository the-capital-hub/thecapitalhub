import React, { useState } from "react";
import MockBadge from "../../../../Images/StartUp/Milestones/MockBadge.svg";
import MockFundsBadge from "../../../../Images/StartUp/Milestones/MockfundsBadge.svg";
import MilestoneBadge from "./MilestoneBadge";

export default function AddMilestoneModal() {
  const [milestoneText, setMilestoneText] = useState("");

  // fetch all badges data
  const allBadges = [
    {
      milestone: "Founded in",
      badge: MockBadge,
    },
    {
      milestone: "First Fund Raise",
      badge: MockFundsBadge,
    },
    {
      milestone: "First Fund Raise",
      badge: MockFundsBadge,
    },
    {
      milestone: "First Fund Raise",
      badge: MockFundsBadge,
    },
    {
      milestone: "First Fund Raise",
      badge: MockFundsBadge,
    },
  ];

  // handleChange
  function handleInputChange(e) {
    setMilestoneText(e.target.value);
  }

  // handle AddMilestone
  function handleAddMilestone(e) {
    e.preventDefault();
  }

  return (
    <div className="d-flex flex-column gap-3">
      <div className="d-flex flex-column gap-3 p-3 bg-light rounded-3">
        <h5>Select Milestone</h5>
        <div className="badges__container d-flex gap-4 flex-wrap p-3">
          {allBadges.map((badge, index) => {
            return (
              <MilestoneBadge
                badge={badge.badge}
                milestone={badge.milestone}
                milestoneWidth="200px"
                isMini
              />
            );
          })}
        </div>
      </div>

      {/* form */}
      <form
        onSubmit={handleAddMilestone}
        className="d-flex align-items-center justify-content-center gap-4 p-4"
      >
        {/* milestoneText input */}
        <div className="">
          <input
            type="text"
            name="milestoneText"
            id="milestoneText"
            placeholder="milestone text"
            value={milestoneText}
            className="modal__input p-2 rounded-2 w-100"
            onChange={handleInputChange}
          />
        </div>
        <button className="orange_button" type="submit" data-bs-dismiss="modal">
          Add
        </button>
      </form>
    </div>
  );
}
