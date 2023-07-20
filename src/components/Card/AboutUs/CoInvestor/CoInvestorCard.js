import React from "react";
import "./coinvestor.scss";
import GIcon from "../../../../Images/Google - png 0.png";
import LightSpeedIcon from "../../../../Images/LightSpeed VT - jpeg 1.png";
import MatrixIcon from "../../../../Images/Matrix .svg";
import NexusIcon from "../../../../Images/Nexus Mods - jpeg 1.png";

const CoInvestorCard = () => {
  return (
    <>
      <div class="coinvestor-container">
        <div class="card">
          <img src={LightSpeedIcon} alt="" />
        </div>
        <div class="card">
          <img src={MatrixIcon} alt="" />
        </div>
        <div class="card">
          <img src={NexusIcon} alt="" />
        </div>
        <div class="card">
          <img src={GIcon} alt="" />
        </div>
      </div>
    </>
  );
};

export default CoInvestorCard;
