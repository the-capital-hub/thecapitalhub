import React, { useContext, useEffect } from "react";
import "./investorHome.css";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import Card from "../Cards/MilestoneCard/Card";
import { SidebarContext } from "../../Sidebar/SidebarContext";
import SmallProfileCard from "../Cards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../Cards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../Cards/Recommendation/RecommendationCard";
import NewsCorner from "../Cards/NewsCorner/NewsCorner";
import CompanyDetailsCard from "../Cards/CompanyDetails/CompanyDetailsCard";

const InvestorHome = () => {
  return (
    <div className="container-fluid">
      <div className="row mt-2">
        <div className="col">
        <SmallProfileCard />
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
            <CompanyDetailsCard/>
          </div>
        </div>
        <div className="col">
          <div className="content-30">
            <div className="row">
              <RightProfileCard />
              <RecommendationCard />
              <NewsCorner/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHome;
