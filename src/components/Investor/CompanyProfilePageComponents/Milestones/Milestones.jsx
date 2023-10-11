import React from "react";
import "./Milestones.scss";
import { Link, useLocation } from "react-router-dom";
import MilestoneBadge from "./MilestoneBadge";
import MockBadge from "../../../../Images/StartUp/Milestones/MockBadge.svg";
import MockFundsBadge from "../../../../Images/StartUp/Milestones/MockfundsBadge.svg";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSFooter,
  ModalBSHeader,
  ModalBsLauncher,
} from "../../../PopUp/ModalBS";
import AddMilestoneModal from "./AddMilestoneModal";

export default function Milestones({ headingClass, containerClass, theme }) {
  // Mock data array
  const companyMilestones = [
    {
      milestone: "Founded in",
      text: "Sept, 2022",
      badge: MockBadge,
    },
    {
      milestone: "First Fund Raise",
      text: "₹ 10 M",
      badge: MockFundsBadge,
    },
  ];

  let { pathname } = useLocation();

  return (
    <div className={` d-flex flex-column gap-4 ${containerClass} `}>
      <div className="d-flex align-items-center justify-content-between">
        <h2 className={headingClass}>Milestones</h2>
        <Link className={`see__more align-self-end ${theme}`}>See more</Link>
      </div>
      <div
        className={`milestone__cards__container d-flex align-items-center gap-5 pb-3 ${theme}`}
      >
        {companyMilestones.map((mile, index) => {
          return (
            <MilestoneBadge
              badge={mile.badge}
              milestone={mile.milestone}
              text={mile.text}
              key={`${mile.milestone}${index}`}
              theme={theme}
            />
          );
        })}
      </div>
      {/* If authorised show "Add" button that triggers add modal */}
      {!pathname.includes("onelink") ? (
        <div className="align-self-end">
          <ModalBsLauncher
            id={"AddMilestoneModal"}
            className={`orange_button d-flex align-items-center gap-1 w-auto ${theme}`}
          >
            <span>Add</span>
          </ModalBsLauncher>
        </div>
      ) : (
        ""
      )}
      {/* Modal for adding new team member */}
      <div className="addMilestoneModal__container">
        <ModalBSContainer id={"AddMilestoneModal"} modalXl>
          <ModalBSHeader
            title={"Add Milestone"}
            className={"orange__heading"}
          />
          <ModalBSBody>
            <AddMilestoneModal />
          </ModalBSBody>
        </ModalBSContainer>
      </div>
    </div>
  );
}
