import React, { useContext, useEffect } from "react";
import "./investorHome.css";
import ArrowIcon from "../../../Images/investorIcon/Arrow.svg";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import AddUserIconBlack from "../../../Images/investorIcon/Add-UserBlack.svg";
import LocationIcon from "../../../Images/investorIcon/octicon_location-16.svg";
import EmailIcon from "../../../Images/investorIcon/Message.svg";
import TweeterIcon from "../../../Images/investorIcon/Tweeter.svg";
import IntagramIcon from "../../../Images/investorIcon/Instagram.svg";
import LinkedinIcon from "../../../Images/investorIcon/Linkedin.svg";
import WebIcon from "../../../Images/investorIcon/WebIcon.svg";
import LogoX from "../../../Images/investorIcon/LogoX.png";
import LoopIcon from "../../../Images/investorIcon/LoopIcon.svg";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import Card from "../Cards/MilestoneCard/Card";
import { SidebarContext } from "../../Sidebar/SidebarContext";
import SmallProfileCard from "../Cards/TwoSmallMyProfile/SmallProfileCard";

const InvestorHome = () => {
  // const sidebarCollapsed = useContext(SidebarContext);
  const { showPopup, closePopup } = useContext(SidebarContext);

  const formatDate = (dateString) => {
    const options = { weekday: "short", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate("2023-06-22");

  useEffect(() => {
    // console.log("sidebarCollapsed", sidebarCollapsed);
  });
  return (
    <div className="container-fluid">
      <div className="row mt-2">
      <SmallProfileCard />
        <div className="col">
          <div className="content-70">
            

            <div className="row">
              <div className="col-12 mt-2">
                <div className=" box bio_container">
                  <div className="row">
                    <div className="col-7">
                      <div className="image_name_section mt-2">
                        <img src={profilePic} alt="profileimage" />
                        <div className="left_profile_text flex_content">
                          <h2 className="typography">Pramod badiger</h2>
                          <span className="small_typo">
                            Founder & CEO of capital Hub
                          </span>
                          <span className="small_typo">Bangalore , India</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-5">
                      <div className="connect_btn m-4">
                        <button>
                          <img src={AddUserIcon} />
                          <span>Connect</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="divider_hr" />
                  <div className="row">
                    <div className="designation mt-2">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Current company
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              Capital Hub
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Designation
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              Founder & CEO
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Education
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              Graduate, University of Northampton
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Experience
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              5+ Years building various startups
                              <br />
                              Mentored 21 startups
                              <br />
                              Growth $ 10M+
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-2">
                <div className=" box personal_information">
                  <div className="personal_information_header">
                    <h2 className="typography">Personal Information</h2>
                    <button>
                      Edit <CiEdit />
                    </button>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="designation_info">
                      <table>
                        <tbody>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Firstname
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              Pramod
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                LastName
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              Badigard
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Email
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              Pramodbadigar@gmail.com
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Mobile number
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              +91 7567388228
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-2">
                <div className=" box personal_information">
                  <div className="personal_information_header">
                    <h2 className="typography">Bio</h2>
                    <button>
                      Edit <CiEdit />
                    </button>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="designation_info">
                      <p className="small_typo">
                        A little about myself. “Dejection is a sign of failure
                        but it becomes the cause of success”. I wrote this when
                        I was 16 years old and that’s exactly when I idealised
                        the reality of life. In this current world, success is
                        defined in many ways, some of which include money, fame
                        and power. I believe that success is just the beginning
                        of a new problem. Every step of our lives we work hard
                        to solve an issue and every time we end up with a new
                        problem.
                      </p>
                    </div>
                  </div>
                  <div className="col-12 mt-2 designation_see_more">
                    <Link to={"/"}>See more</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-2">
                <div className=" box personal_information">
                  <div className="personal_information_header">
                    <h2 className="typography">Milestones</h2>
                    <div className="milestone_see_more">
                      <Link to={"/"}>See more</Link>
                    </div>
                  </div>
                  <div className="col-12 mt-2">
                    <Card />
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-2">
                <div className=" box bio_container company_details">
                  <div className="row">
                    <div className="col-12">
                      <div className="image_name_section mt-2 company_details_image_text">
                        <span className="company_details_logo_container">
                          <img src={LogoX} alt="profileimage" />
                        </span>
                        <div className="left_profile_text flex_content">
                          <h2 className="typography m-2">The Capital Hub</h2>
                          <span className="small_typo m-2">
                            Channing & Barrett industries pvt ltd
                          </span>
                          <span className="small_typo location_icon">
                            <img src={LocationIcon} alt="location" />
                            jayanagar 4th block banglore{" "}
                            <img src={EmailIcon} alt="location" />
                            pramodbadigar.capitalhub@gmail.com{" "}
                          </span>
                          <div className="small_typo social_icon mt-3">
                            <img src={WebIcon} alt="social_img" />
                            <img src={LinkedinIcon} alt="social_img" />
                            <img src={TweeterIcon} alt="social_img" />
                            <img src={IntagramIcon} alt="social_img" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="company_details mt-4">
                      <p>
                        As the Founder at Capital HUB, Man's all about building
                        great start-ups from a simple idea to an elegant
                        reality. Humbled and honored to have worked with Angels
                        and VC's across the globe to support and grow the
                        startup culture.As the Founder at Capital HUB, Man's all
                        about building great start-ups from a simple idea to an
                        elegant reality. Humbled and honored to have worked with
                        Angels and VC's across the globe to support and grow the
                        startup culture.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="content-30">
            <div className="row">
              <div className="col-12">
                <div className="box view_profile" style={{ width: "100%" }}>
                  <div className="view_profile_name_section mt-2">
                    <img src={profilePic} alt="profileimage" />
                    <div className="right_profile_text flex_content">
                      <h2 className="typography">Pramod badiger</h2>
                      <span className="smallest_typo">
                        pramodbadigar@gmail.com
                      </span>
                      <span className="smallest_typo">
                        Founder & CEO of capital Hub
                      </span>
                    </div>
                    <button className="profile_btn mt-2">View Profile</button>
                    <button className="profile_btn mt-1 manage_acount_btn">
                      Manage Account
                    </button>
                    {/* loop */}
                    <div className="card mt-2 right_view_profile_card right_loop_card ">
                      <div className="card-header">
                        <div className="loop_title">
                          <span>Loop</span>
                          <span style={{ fontSize: "10px" }}>
                            -Your Virtual Assistant
                          </span>
                        </div>
                        <img src={LoopIcon} alt="loop" />
                      </div>
                      <div className="card-body">
                        <h5 className="card-title">
                          How can I help you today?
                        </h5>

                        <div className="input-group">
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Type your message and loop me in"
                          />
                          <button
                            className="btn btn-primary send-button"
                            type="button"
                          >
                            send
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 recommendation_card">
                <div className="card mt-2 right_view_profile_card right_view_profile">
                  <div className="card-header">
                    <div className="loop_title">
                      <span>Recommendation (Investor)</span>
                    </div>
                  </div>
                  <div className="card-body recommendation_card_body ">
                    <img src={profilePic} alt="img" />
                    <div className="recommendation_card_text">
                      <h3>Harideep</h3>
                      <h4 className="smallest_typo">
                        UI/UX Designer/Product Designer
                      </h4>
                      <button>
                        <img src={AddUserIconBlack} />
                        <span>Connect</span>
                      </button>
                    </div>
                  </div>
                  <hr className="hr" />
                  <div className="card-body recommendation_card_body ">
                    <img src={profilePic} alt="img" />
                    <div className="recommendation_card_text">
                      <h3>Harideep</h3>
                      <h4 className="smallest_typo">
                        UI/UX Designer/Product Designer
                      </h4>
                      <button>
                        <img src={AddUserIconBlack} />
                        <span>Connect</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-12 recommendation_card">
                <div className="card mt-2 right_view_profile_card right_view_profile">
                  <div className="card-header">
                    <div className="loop_title">
                      <span>News Corner</span>
                    </div>
                  </div>
                  <div className="card-body recommendation_card_body ">
                    <div className="recommendation_card_text">
                      <h4 className="smallest_typo">
                        Cellbell startup has raised to $10 million dollor
                        funding
                      </h4>
                      <button>
                        <span>Show more</span>
                      </button>
                    </div>
                  </div>
                  <hr className="hr" />
                  <div className="card-body recommendation_card_body ">
                    <div className="recommendation_card_text">
                      <h4 className="smallest_typo">
                        Cellbell startup has raised to $10 million dollor
                        funding
                      </h4>
                      <button>
                        <span>Show more</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHome;
