import React, { useState } from "react";
import MockBadge from "../../../../Images/StartUp/Milestones/MockBadge.svg";
import MockFundsBadge from "../../../../Images/StartUp/Milestones/MockfundsBadge.svg";
import MilestoneBadge from "./MilestoneBadge";
import "./AddMilestoneModal.scss";

const allBadges = [
  {
    milestone: "Joining Capital HUB",
    badge: MockBadge,
  },
  {
    milestone: "Founded company",
    badge: MockBadge,
  },
  {
    milestone: "Earned first revenue",
    badge: MockFundsBadge,
  },
  {
    milestone: "Hired first full-time team member",
    badge: MockBadge,
  },
  {
    milestone: "Raised first round of funding",
    badge: MockFundsBadge,
  },
  {
    milestone: "Got first client",
    badge: MockBadge,
  },
];

const ACTIONS = { add: "add", remove: "remove" };

export default function AddMilestoneModal({ theme }) {
  return (
    <div className="milestone_modal_container d-flex gap-3">
      <div className="d-flex flex-column gap-3">
        <div className="d-flex flex-column gap-3 p-3 bg-light rounded-3">
          <h5>Current Milestones</h5>
          <div
            className={`badges__container d-flex gap-4 p-3 overflow-x-auto ${theme}`}
          >
            {allBadges.slice(0, 3).map((badge, index) => {
              return (
                <MilestoneBadge
                  badge={badge.badge}
                  milestone={badge.milestone}
                  isMini
                  key={`${badge.milestone}${index}`}
                  theme={theme}
                  action={ACTIONS.remove}
                />
              );
            })}
          </div>
        </div>

        <div className="d-flex flex-column gap-3 p-3 bg-light rounded-3">
          <h5>Add Milestones</h5>
          <div
            className={`badges__container d-flex gap-4 p-3 overflow-x-auto ${theme}`}
          >
            {allBadges.map((badge, index) => {
              return (
                <MilestoneBadge
                  badge={badge.badge}
                  milestone={badge.milestone}
                  isMini
                  key={`${badge.milestone}${index}`}
                  theme={theme}
                  action={ACTIONS.add}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
