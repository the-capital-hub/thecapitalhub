import React from "react";
import "./meetourteam.scss";
import EmailIcon from "../../../../Images/investorIcon/Message.svg";
import LinkedInIcon from "../../../../Images/investorIcon/Linkedin.svg";

const MeetOurTeam = () => {
  return (
    <>
      <div class="meetourteam_container">
        <div class="card">
          {/* <img src={LightSpeedIcon} alt="" /> */}
          <div className="social_icon">
            <img src={EmailIcon} alt="emailicon" />
            <img src={LinkedInIcon} alt="" />
          </div>
          <div class="info">
            <p class="name">Upma Singh</p>
            <p class="designation">Senior Investment Analyst</p>
            <p className="hovering_para">A seasoned Analyst with a keen eye for market trends and investment opportunities, driving success for Capital HUB's clients.</p>
          </div>
        </div>
        <div class="card">
          {/* <img src={LightSpeedIcon} alt="" /> */}
          <div className="social_icon">
            <img src={EmailIcon} alt="emailicon" />
            <img src={LinkedInIcon} alt="" />
          </div>
          <div class="info">
            <p class="name">Preeti Yadav</p>
            <p class="designation">Senior Investment Analyst</p>
            <p className="hovering_para">A seasoned Analyst with a keen eye for market trends and investment opportunities, driving success for Capital HUB's clients.</p>
    
          </div>
        </div>
        <div class="card">
          {/* <img src={MatrixIcon} alt="" /> */}
          <div className="social_icon">
            <img src={EmailIcon} alt="emailicon" />
            <img src={LinkedInIcon} alt="" />
          </div>
          <div class="info">
            <p class="name">Raghukrishnan J</p>
            <p class="designation">Senior Investment Analyst</p>
         <p className="hovering_para">A seasoned Analyst with a keen eye for market trends and investment opportunities, driving success for Capital HUB's clients.</p>
    
          </div>
        </div>
        {/* <div class="card">
          <img src={NexusIcon} alt="" />
          <div class="info">
            <p class="name">Hari</p>
            <p class="designation">UI/UX Designer</p>
          </div>
        </div>
        <div class="card">
          <img src={GIcon} alt="" />
          <div class="info">
            <p class="name">Raghu</p>
            <p class="designation">Project Manager</p>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default MeetOurTeam;
