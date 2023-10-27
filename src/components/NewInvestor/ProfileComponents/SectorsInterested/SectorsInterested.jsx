import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getInvestorById } from "../../../../Service/user";
import {
  ModalBSBody,
  ModalBSContainer,
  ModalBSHeader,
  ModalBsLauncher,
} from "../../../PopUp/ModalBS";
import SectorCard from "../SectorCard";
import AddEditModal from "../AddEditModal";
import "./SectorsInterested.scss";

export default function SectorsInterested() {
  // Fetch loggedInUser from global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // State for Investor
  const [investor, setInvestor] = useState(null);

  // States for sectors Interested
  const [sectorsData, setSectorsData] = useState([]);

  useEffect(() => {
    getInvestorById(loggedInUser?.investor)
      .then(({ data }) => {
        setInvestor(data);
        setSectorsData(data.sectorInterested);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [loggedInUser]);

  return (
    <>
      <div className="sector_interested border shadow-sm">
        <div className="header border-bottom p-4">
          <h2 className="green_underline typography">Sectors Interested</h2>
          <div className="">
            {investor?.founderId === loggedInUser._id && (
              <ModalBsLauncher
                id="sectorsModal"
                className={"green_button px-2 px-sm-3 "}
              >
                Add New
              </ModalBsLauncher>
            )}
          </div>
        </div>
        {/* Loop cards from here onwards */}
        <div className="interested_cards px-3 py-5 ">
          {sectorsData.map((sector, index) => {
            return <SectorCard key={sector.id} sector={sector} />;
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
