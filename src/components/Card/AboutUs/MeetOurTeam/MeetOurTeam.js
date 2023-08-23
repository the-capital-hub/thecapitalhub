import React from "react";
import "./meetourteam.scss";
import EmailIcon from "../../../../Images/Message.svg";
import LinkedInIcon from "../../../../Images/service/linkedin.svg";
import UpmaImage from "../../../../Images/service/Upma.jpeg";
import PreetiImage from "../../../../Images/service/preeti.jpeg";
import RaghuImage from "../../../../Images/service/raghu.jpeg";
import { Link } from "react-router-dom";

const MeetOurTeam = () => {
  return (
    <>
      <div class="meetourteam_container ">
        <div class="card col-lg-4 col-md-6 col-sm-12">
          <img src={UpmaImage} alt="image" />

          <div class="info">
            <div className="social_icon_list">
              <Link to="mailto:investments@capitalhub.in">
                <img src={EmailIcon} alt="emailicon" />
              </Link>
              <Link to="https://www.linkedin.com/in/your-profile-url">
                <img src={LinkedInIcon} alt="image" />
              </Link>
            </div>
            <p class="name">Upma Singh</p>
            <p class="designation">Senior Investment Analyst</p>
            <p className="hovering_para">
              A seasoned Analyst with a keen eye for market trends and
              investment opportunities, driving success for The Capital HUB's
              clients.
            </p>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 col-sm-12">
          <img src={PreetiImage} alt="image" />

          <div class="info">
          <div className="social_icon_list">
              <Link to="mailto:investments@capitalhub.in">
                <img src={EmailIcon} alt="emailicon" />
              </Link>
              <Link to="https://www.linkedin.com/in/your-profile-url">
                <img src={LinkedInIcon} alt="image" />
              </Link>
            </div>
            <p class="name">Preeti Yadav</p>
            <p class="designation">Senior Investment Analyst</p>
            <p className="hovering_para">
              A seasoned Analyst with a keen eye for market trends and
              investment opportunities, driving success for The Capital HUB's
              clients.
            </p>
          </div>
        </div>
        <div class="card col-lg-4 col-md-6 col-sm-12">
          <img src={RaghuImage} alt="image" />
          <div class="info">
          <div className="social_icon_list">
              <Link to="mailto:investments@capitalhub.in">
                <img src={EmailIcon} alt="emailicon" />
              </Link>
              <Link to="https://www.linkedin.com/in/your-profile-url">
                <img src={LinkedInIcon} alt="image" />
              </Link>
            </div>
            <p class="name">Raghukrishnan J</p>
            <p class="designation">Senior Investment Analyst</p>
            <p className="hovering_para">
              A seasoned Analyst with a keen eye for market trends and
              investment opportunities, driving success for The Capital HUB's
              clients.
            </p>
          </div>
        </div>
        {/* <div class="card">
          <img src={NexusIcon} alt="image" />
          <div class="info">
            <p class="name">Hari</p>
            <p class="designation">UI/UX Designer</p>
          </div>
        </div>
        <div class="card">
          <img src={GIcon} alt="image" />
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
