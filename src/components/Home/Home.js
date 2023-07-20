import React from "react";
import "./home.scss";
import GirlIcon from "../../Images/GirlIcons.png";
import laptopIcon from "../../Images/Group 6.svg";
import AngelIcon from "../../Images/Group 7.svg";
import ManageTeamIcon from "../../Images/Group 8.svg";
import ManageClientIcon from "../../Images/Group 9.svg";
import ManageInvestortIcon from "../../Images/Group 10.svg";
import MentorIcon from "../../Images/Group 13.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Accel from "../../Images/Accel.svg";
import RTP from "../../Images/RTP.svg";
import Zoover from "../../Images/Zoover2.svg";
import Nexus from "../../Images/Nexus Mods.svg";
import Matrix from "../../Images/Matrix .svg";
import Vhal from "../../Images/Vhall .svg";
import YCom from "../../Images/Y Combinator.png";
import LightSpeedIcon from "../../Images/LightSpeed.svg";
import Kalari from "../../Images/KalaariCapital.svg";
import GoogleIcon from "../../Images/Google.svg";
import GoogleIcon1 from "../../Images/Google1.svg";
import MicrosoftIcon1 from "../../Images/Microsoft1.svg";
import MicrosoftIcon from "../../Images/Microsoft.svg";
import Amazon from "../../Images/amazon.svg";
import Zoover1 from "../../Images/Zoover.svg";
import WhyChooseUsCard from "../Card/Home/WhyChooseUs/WhyChooseUsCard";
import OurStartUp from "./OurStartUp";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");

  return (
    <>
      <div className="container mb-md-5">
        <div className="row">
          <div className=" col-md-8 title__text d-flex flex-column justify-content-center">
            <h2>
              Find your prefect mentorship <br />
              for better future{" "}
              <span style={{ color: "#FD5901" }}>start up</span>
            </h2>

            <h4>Are you a investor ?</h4>
            <div className="row row-cols-md-3 g-0 mt-5">
              <div className="col">
                <Link to="/signup">
                  <button className="btn1 btn-primary">Start Up</button>
                </Link>
              </div>
              <div className="col">
                <Link to="/investor">
                  <button className="btn2 btn-primary">Investor</button>
                </Link>
              </div>
            </div>
          </div>
          <div className=" col-md-4 image_section">
            <img src={GirlIcon} alt="img1" />
          </div>
        </div>
      </div>
      <div className="container-fluid why_choose_us_container">
        <div className="container">
          <WhyChooseUsCard/>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6 ">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Create your one link now</h3>
                <p>
                  Build your online presence effortlessly with our user-friendly
                  platform. Customise your unique One-Link, showcase your work,
                  and connect with your audience seamlessly. Start building your
                  digital footprint today!
                </p>
                <button>Create</button>
              </div>
            </div>
            <div className="col-6  onelink_img">
              <img src={laptopIcon} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-5  angel_img">
              <img src={AngelIcon} alt="img" />
            </div>
            <div className="col-7 ">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Angle Investment made easy</h3>
                <p>
                  Unlock the potential of early-stage startups and
                  entrepreneurs. Our platform connects angel investors with
                  innovative ideas, providing a streamlined and secure
                  investment process for sustainable growth and financial
                  returns.
                </p>
                <button className="angel_button">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6 ">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Manage your team</h3>
                <p>
                  Efficiently oversee your team's projects, tasks, and
                  collaboration with our powerful Team Management tools.
                  Streamline workflows, foster effective communication, and
                  drive productivity to achieve remarkable results.
                </p>
                <button>Learn more</button>
              </div>
            </div>
            <div className="col-6  onelink_img">
              <img src={ManageTeamIcon} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-5  client_img">
              <img src={ManageClientIcon} alt="img" />
            </div>
            <div className="col-7 ">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Client Management</h3>
                <p>
                  Transform your approach to client relationships. Our Client
                  Management system centralises client data, streamlines
                  communication, and automates processes, empowering you to
                  deliver personalised and exceptional service at every
                  touchpoint.
                </p>
                <button className="angel_button">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-6 ">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Investor management</h3>
                <p>
                  Elevate your investor relations with our comprehensive
                  Investor Management platform. From fundraising to reporting,
                  track and engage with investors, foster trust, and drive
                  success for your venture.
                </p>
                <button className="investor_button">Learn more</button>
              </div>
            </div>
            <div className="col-6  onelink_img">
              <img src={ManageInvestortIcon} alt="img" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid onelink_container">
        <div className="container margin_bottom">
          <div className="row d-flex justify-content-center align-items-center">
            <div className="col-5  mentor_img">
              <img src={MentorIcon} alt="img" />
            </div>
            <div className="col-7 ">
              <div className="row d-flex justify-content-left align-items-center title_text">
                <h3>Growth high for mentor</h3>
                <p>
                  Unlock the potential of mentorship. Join our network of
                  accomplished mentors and guide the next generation of
                  entrepreneurs. Share your expertise, cultivate innovative
                  ideas, and create a lasting impact on startup success.
                </p>
                <button className="mentor_button">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid our_startups_section">
       <OurStartUp/>
      </div>

      <div className="container-fluid our_investor_section">
        <div className="container">
          <div className="row ">
            <h2 style={{ textAlign: "center" }}>Co-investors</h2>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center">
              <img src={Accel} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center mt-80">
              <img src={RTP} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center">
              <img src={Zoover} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center mt-80">
              <img src={Nexus} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center">
              <img src={Matrix} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center mt-80">
              <img src={Vhal} alt="brans icons" />
            </div>
          </div>
          <div className="row mt-4">
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center">
              <img src={YCom} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center ">
              <img src={LightSpeedIcon} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center">
              <img src={Kalari} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center ">
              <img src={GoogleIcon} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center">
              <img src={MicrosoftIcon1} alt="brans icons" />
            </div>
            <div className="col-md-2 brand_icon d-flex justify-content-center align-items-center ">
              <img src={Vhal} alt="brans icons" />
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid">
        <div className="container mb-5">
          <div className="row d-flex justify-content-around align-items-center">
            <h2
              style={{
                textAlign: "center",
                marginTop: "68px",
                marginBottom: "68px",
              }}
            >
              Our Collaboration
            </h2>
            <div className="col-md-2 collab_brand_icon d-flex justify-content-center align-items-center">
              <img src={Amazon} alt="brans icons" />
            </div>
            <div className="col-md-2 collab_brand_icon d-flex justify-content-center align-items-center">
              <img src={Zoover1} alt="brans icons" />
            </div>
            <div className="col-md-2 collab_brand_icon d-flex justify-content-center align-items-center">
              <img src={GoogleIcon1} alt="brans icons" />
            </div>
            <div className="col-md-2 collab_brand_icon d-flex justify-content-center align-items-center">
              <img src={MicrosoftIcon} alt="brans icons" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
