import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
  ModalBsLauncher,
} from "../../../PopUp/ModalBS";
import SectorCard from "../SectorCard";
import AddEditModal from "../AddEditModal";
import "./SectorsInterested.scss";
import { selectUserSectorInterested } from "../../../../Store/features/user/userSlice";

export default function SectorsInterested() {
  // Fetch loggedInUser from global state
  const userSectorInterested = useSelector(selectUserSectorInterested);

  // States for sectors Interested
  const [sectorsData, setSectorsData] = useState(userSectorInterested);

  return (
    <>
      <div className="sector_interested border shadow-sm">
        <div className="header border-bottom p-4">
          <h2 className="green_underline typography">Sectors Interested</h2>
          <div className="">
            {/* {investor?.founderId === loggedInUser._id && ( */}
            <ModalBsLauncher
              id="sectorsModal"
              className={"green_button px-2 px-sm-3 "}
            >
              Add New
            </ModalBsLauncher>
            {/* )} */}
          </div>
        </div>
        {/* Loop cards from here onwards */}
        <div className="interested_cards px-3 py-5 ">
          {sectorsData?.map((sector, index) => {
            return <SectorCard key={sector._id} sector={sector} />;
          })}
        </div>
        {/* Sectors Modal */}
        <ModalBSContainer id="sectorsModal" isStatic={false} modalXl>
          <ModalBSHeader title={"Add/Edit Sectors interested"} />
          <ModalBSBody>
            <AddEditModal
              dataArray={sectorsData}
              heading={"Sectors Interested"}
              isStartups={false}
              setSectorsData={setSectorsData}
            />
          </ModalBSBody>
        </ModalBSContainer>
      </div>
    </>
  );
}
