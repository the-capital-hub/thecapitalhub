import React from "react";
import "./coinvestor.scss";
// import GIcon from "../../../../Images/Google - png 0.png";
// import LightSpeedIcon from "../../../../Images/LightSpeed VT - jpeg 1.png";
// import MatrixIcon from "../../../../Images/Matrix .svg";
// import NexusIcon from "../../../../Images/Nexus Mods - jpeg 1.png";
import RegisterKaroLogo from '../../../../Images/service/registerkaro_logo.jpeg'
import AlienLogo from '../../../../Images/service/logo_A.jpeg'
import AdvocateLogo from '../../../../Images/service/advocate_logo.jpeg'
import SbiLogo from '../../../../Images/service/sbi_logo.jpeg'




const CoInvestorCard = () => {
  return (
    <>
      <div class="coinvestor-container">
        <div class="card">
          <img src={RegisterKaroLogo} alt="image" />
          <h3>RegisterKaro</h3>
        </div>
        <div class="card">
          <img src={AlienLogo} alt="image" />
          <h3>Alien Marketing</h3>
        </div>
        <div class="card">
          <img src={AdvocateLogo} alt="image" />
          <h3>Legal Vakil</h3>
        </div>
        <div class="card">
          <img src={SbiLogo} alt="image" />
          <h3>State Bank Of India</h3>
        </div>
      </div>
    </>
  );
};

export default CoInvestorCard;
