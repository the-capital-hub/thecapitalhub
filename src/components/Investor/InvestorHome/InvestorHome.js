import React, { useContext, useEffect, useState } from "react";
import "./investorHome.scss";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import { CiEdit } from "react-icons/ci";
import { Link } from "react-router-dom";
import MileStoneCard from "../InvestorGlobalCards/MilestoneCard/MileStoneCard";
import { SidebarContext } from "../../Sidebar/SidebarContext";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import CompanyDetailsCard from "../InvestorGlobalCards/CompanyDetails/CompanyDetailsCard";
import { useSelector } from "react-redux";

const InvestorHome = () => {
  const [isBioEditable, setIsBioEditable] = useState(false);
  const [bioContent, setBioContent] = useState(`
    A little about myself. “Dejection is a sign of failure...
  `);

  const handleEditBio = () => {
    setIsBioEditable(!isBioEditable);
  };

  const handleBioChange = (newBioContent) => {
    setBioContent(newBioContent);
    // Perform other actions like updating the backend, etc.
  };
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [isDesignationEditable, setIsDesignationEditable] = useState(false);
  const [isExperienceEditable, setIsExperienceEditable] = useState(false);
  const [isEducationEditable, setIsEducationEditable] = useState(false);

  const handleEdit = (field) => {
    switch (field) {
      case "designation":
        setIsDesignationEditable(!isDesignationEditable);
        break;
      case "experience":
        setIsExperienceEditable(!isExperienceEditable);
        break;
      case "education":
        setIsEducationEditable(!isEducationEditable);
        break;
      default:
        break;
    }
  };

  const renderEditableField = (fieldName, value, isEditable) => {
    if (isEditable) {
      return (
        <input
          type="text"
          value={value}
          onChange={(e) => handleFieldChange(fieldName, e.target.value)}
        />
      );
    }
    return <span className="small_typo">{value}</span>;
  };

  const handleFieldChange = (fieldName, newValue) => {
    console.log("fieldName", fieldName, ...newValue);
    // Handle field value changes and update state or perform other actions.
  };
  return (
    <div className="container-fluid investorHome_main_container">
      <div className="row mt-2">
        <div className="col seventy">
          <SmallProfileCard />
          <div className="content-70">
            <div className="row">
              <div className="col-12 mt-2">
                <div className=" box bio_container">
                  <div className="row">
                    <div className="col-8 col-seven">
                      <div className="image_name_section mt-2">
                        <img src={profilePic} alt="profileimage" />
                        <div className="left_profile_text flex_content ms-3">
                          <h2 className="typography">
                            {loggedInUser?.firstName} {loggedInUser?.lastName}
                            {console.log("loggedInUser--<", loggedInUser)}
                          </h2>
                          <span className="small_typo">
                            Founder & CEO of capital Hub
                          </span>
                          <span className="small_typo">Bangalore , India</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-4 col-five">
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
                            <td className="edit_btn">
                              <button onClick={() => handleEdit("experience")}>
                                Edit <CiEdit />
                              </button>
                            </td>
                          </tr>
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
                            <td style={{ marginBottom: "1rem" }}>
                              {renderEditableField(
                                "designation",
                                "Founder & CEO",
                                isDesignationEditable
                              )}
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
                            <td style={{ marginBottom: "1rem" }}>
                              {renderEditableField(
                                "experience",
                                "5+ Years building various startups\nMentored 21 startups\nGrowth $ 10M+",
                                isExperienceEditable
                              )}
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
                    {/* <button>
                      Edit <CiEdit />
                    </button> */}
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
                              {loggedInUser?.firstName}
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
                              {loggedInUser?.lastName}
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
                              {loggedInUser?.email}
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
                              {loggedInUser?.phoneNumber}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <div className="row">
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
            </div> */}

            <div className="row">
              <div className="col-12 mt-2">
                <div className="box personal_information">
                  <div className="personal_information_header">
                    <h2 className="typography">Bio</h2>
                    <button onClick={handleEditBio}>
                      Edit <CiEdit />
                    </button>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="designation_info">
                      {isBioEditable ? (
                        <textarea
                          value={bioContent}
                          onChange={(e) => handleBioChange(e.target.value)}
                        />
                      ) : (
                        <p className="small_typo">{bioContent}</p>
                      )}
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
                    <MileStoneCard />
                  </div>
                </div>
              </div>
            </div>
            <CompanyDetailsCard />
          </div>
        </div>
        <div className="col thirty">
          <div className="content-30">
            <div className="row">
              <RightProfileCard />
              <RecommendationCard />
              <NewsCorner />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorHome;
