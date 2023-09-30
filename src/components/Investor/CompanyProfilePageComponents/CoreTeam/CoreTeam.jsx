import React from "react";
import "./CoreTeam.scss";
import CoreTeamCard from "./CoreTeamCard";
import RaghuImage from "../../../../Images/aboutUs/Raghu.jpeg";
import { Link } from "react-router-dom";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSFooter,
  ModalBSHeader,
  ModalBsLauncher,
} from "../../../PopUp/ModalBS";
import AddTeamMemberModal from "./AddTeamMemberModal";

export default function CoreTeam() {
  // Mock dataArray
  const team = [1, 1, 1, 1];

  return (
    <div className=" d-flex flex-column gap-4">
      <div className="d-flex align-items-center justify-content-between">
        <h2>Core Team</h2>
        <Link className="see__more align-self-end">See more</Link>
      </div>
      <div className="team__cards__container d-flex align-items-center gap-5 flex-wrap">
        {team.map(() => {
          return (
            <CoreTeamCard
              image={RaghuImage}
              name={"Raghu"}
              designation={"Web Developer"}
            />
          );
        })}
      </div>
      {
        <div className="align-self-end">
          <ModalBsLauncher
            id={"AddTeamMemberModal"}
            className="orange_button d-flex align-items-center gap-1 w-auto "
          >
            <span>Add</span>
          </ModalBsLauncher>
        </div>
      }
      {/* Modal for adding new team member */}
      <div className="addCoreTeamModal__container">
        <ModalBSContainer id={"AddTeamMemberModal"}>
          <ModalBSHeader
            title={"Add Team Member"}
            className={"orange__heading"}
          />
          <ModalBSBody>
            <AddTeamMemberModal />
          </ModalBSBody>
        </ModalBSContainer>
      </div>
    </div>
  );
}
