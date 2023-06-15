import React from "react";
import "./home.css";
import GirlIcon from "../../Images/GirlIcons.png";
import G1Icon from "../../Images/Group 1 (1).svg";
import G2Icon from "../../Images/Group 2 (1).svg";
import G3Icon from "../../Images/Group 2 (2).svg";
import G4Icon from "../../Images/Group 3.svg";
import G5Icon from "../../Images/Group 4.svg";
import G6Icon from "../../Images/Group 5.svg";
import laptopIcon from "../../Images/Group 6.svg";
import AngelIcon from "../../Images/Group 7.svg";
import ManageTeamIcon from "../../Images/Group 8.svg";
import ManageClientIcon from "../../Images/Group 9.svg";
import ManageInvestortIcon from "../../Images/Group 10.svg";
import MentorIcon from "../../Images/Group 13.svg";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Home = () => {
  const [clicked, setClicked] = useState(false);
  const [selectedLink, setSelectedLink] = useState("home");

  return (
    <>
      <div className="container">
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
                <button className="btn1 btn-primary">Start Up</button>
              </div>
              <div className="col">
                <button className="btn2 btn-primary">Investor</button>
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
          <div className="why_choose_us row justify-content-around align-items-center my-4">
            <h2 className="text-center mb-5 mt-5">Why choose us</h2>
            <div className="col-md-4 b why_chooseus_card mb-69">
              <div className="row d-flex justify-content-center align-item-center inside_card">
                <img src={G1Icon} alt="img" />
                <h3>Angel Investor</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  in porttitor in sit sem eu, nunc diam. Quis nisi,
                </p>
              </div>
            </div>
            <div className="col-md-4 b why_chooseus_card mb-69">
              <div className="row d-flex justify-content-center align-item-center inside_card">
                <img src={G2Icon} alt="img" />
                <h3>One link</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  in porttitor in sit sem eu, nunc diam. Quis nisi,
                </p>
              </div>
            </div>
            <div className="col-md-4 b why_chooseus_card mb-69">
              <div className="row d-flex justify-content-center align-item-center inside_card">
                <img src={G3Icon} alt="img" />
                <h3>Networking</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  in porttitor in sit sem eu, nunc diam. Quis nisi,
                </p>
              </div>
            </div>
            <div className="col-md-4 b why_chooseus_card mb-69">
              <div className="row d-flex justify-content-center align-item-center inside_card">
                <img src={G4Icon} alt="img" />
                <h3>Team Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  in porttitor in sit sem eu, nunc diam. Quis nisi,
                </p>
              </div>
            </div>
            <div className="col-md-4 b why_chooseus_card mb-69">
              <div className="row d-flex justify-content-center align-item-center inside_card">
                <img src={G5Icon} alt="img" />
                <h3>Client Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  in porttitor in sit sem eu, nunc diam. Quis nisi,
                </p>
              </div>
            </div>
            <div className="col-md-4 b why_chooseus_card mb-69">
              <div className="row d-flex justify-content-center align-item-center inside_card">
                <img src={G6Icon} alt="img" />
                <h3>Client Management</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet
                  in porttitor in sit sem eu, nunc diam. Quis nisi,
                </p>
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
                <h3>Create your one link now</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum
                  lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing
                  placerat tellus faucibus diam mauris ipsum vitae. Justo
                  adipiscing integer dictum tortor viverra vel .
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
                  Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum
                  lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing
                  placerat tellus faucibus diam mauris ipsum vitae. Justo
                  adipiscing integer dictum tortor viverra vel .
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
                  Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum
                  lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing
                  placerat tellus faucibus diam mauris ipsum vitae. Justo
                  adipiscing integer dictum tortor viverra vel .
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
                  Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum
                  lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing
                  placerat tellus faucibus diam mauris ipsum vitae. Justo
                  adipiscing integer dictum tortor viverra vel .
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
                  Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum
                  lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing
                  placerat tellus faucibus diam mauris ipsum vitae. Justo
                  adipiscing integer dictum tortor viverra vel .
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
                  Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum
                  lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing
                  placerat tellus faucibus diam mauris ipsum vitae. Justo
                  adipiscing integer dictum tortor viverra vel .
                </p>
                <button className="mentor_button">Learn more</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid our_startups_section">
        <div className="container">
          <div className="row d-flex align-items-center justify-content-center">
            <div className="col-md-8 b">
              <ul id="navbar" className={clicked ? "active" : ""}>
                <li>
                  <Link
                    to="/fintech"
                    className={selectedLink === "fintech" ? "active" : ""}
                    onClick={() => setSelectedLink("fintech")}
                  >
                    Fintech
                  </Link>
                </li>
                <li>
                  <Link
                    to="/edutech"
                    className={selectedLink === "edutech" ? "active" : ""}
                    onClick={() => setSelectedLink("edutech")}
                  >
                    Edutech
                  </Link>
                </li>
                <li>
                  <Link
                    to="/agreective"
                    className={selectedLink === "agreective" ? "active" : ""}
                    onClick={() => setSelectedLink("agreective")}
                  >
                    Agreective
                  </Link>
                </li>
                <li>
                  {/* {console.log((localStorage.getItem('isLoggedIn')))} */}
                  <Link
                    to="/invest"
                    className={""}
                    onClick={() => setSelectedLink("invest")}
                  >
                    Invest
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-4 title_text b">
              <button className="">Invest now</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
