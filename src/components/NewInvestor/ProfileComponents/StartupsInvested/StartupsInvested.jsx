import React, { useState } from "react";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
  ModalBsLauncher,
} from "../../../PopUp/ModalBS";
import AddEditModal from "../AddEditModal";
import { useSelector } from "react-redux";
import InvestedCard from "../InvestedCard";
import "./StartupsInvested.scss";
import { selectUserStartupsInvested } from "../../../../Store/features/user/userSlice";

export default function StartupsInvested() {
  // Fetch loggedInUser from global state
  const userStartupsInvested = useSelector(selectUserStartupsInvested);

  // States for Invested Startups
  const [investedStartups, setInvestedStartups] =
    useState(userStartupsInvested);

  return (
    <>
      <div className="startups_invested border shadow-sm">
        <div className="header border-bottom p-4 ">
          <h2 className="green_underline typography">Startups Invested</h2>
          <div className="">
            {/* {investor?.founderId === loggedInUser._id && ( */}
            <ModalBsLauncher
              id="startupsModal"
              className={"green_button px-2 px-sm-3 "}
            >
              Add New
            </ModalBsLauncher>
            {/* )} */}
          </div>
        </div>
        {/* Loop cards here */}
        <div className="invested_cards px-3 py-4">
          {userStartupsInvested?.map((startUp, index) => {
            return <InvestedCard startUp={startUp} key={startUp._id} />;
          })}
        </div>
        {/* Startups Modal */}
        <ModalBSContainer id="startupsModal" isStatic={false} modalXl>
          <ModalBSHeader title="Add/Edit Startups Invested" />
          <ModalBSBody>
            <AddEditModal
              dataArray={investedStartups}
              heading={"Startups Invested"}
              setInvestedStartups={setInvestedStartups}
            />
          </ModalBSBody>
        </ModalBSContainer>
      </div>
    </>
  );
}
