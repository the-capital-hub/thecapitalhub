import React, { useContext, useEffect, useState } from "react";
import "./investorHome.scss";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import MileStoneCard from "../InvestorGlobalCards/MilestoneCard/MileStoneCard";
import { SidebarContext } from "../../Sidebar/SidebarContext";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import CompanyDetailsCard from "../InvestorGlobalCards/CompanyDetails/CompanyDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { updateUserAPI } from "../../../Service/user";
import { loginSuccess } from "../../../Store/Action/userAction";
import { getBase64 } from "../../../utils/getBase64";

const InvestorHome = () => {
  const [isBioEditable, setIsBioEditable] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [bioContent, setBioContent] = useState(loggedInUser?.bio || "");
  const [personalEditable, setPersonalEditable] = useState(false);

  const [personalData, setPersonalData] = useState({
    designation: loggedInUser?.designation || "",
    education: loggedInUser?.education || "",
    experience: loggedInUser?.experience || "",
    profilePicture: loggedInUser.profilePicture,
  });

  const dispatch = useDispatch();

  const personalEditHandler = (field) => {
    setPersonalEditable(!personalEditable);
  };

  const submitPersonalHandler = async () => {
    try {
      const newPersonalData = personalData;
      if (newPersonalData.profilePictufre !== loggedInUser.profilePicture) {
        const image = await getBase64(newPersonalData.profilePicture);
        newPersonalData.profilePicture = image;
      }
      const {
        data: { data },
      } = await updateUserAPI(personalData);
      dispatch(loginSuccess(data));
      setPersonalEditable(!personalEditable);
    } catch (error) {
      console.log(error);
    }
  };

  const personalChangeHandler = (e) => {
    if (e.target.name === "profilePicture") {
      const { name, files } = e.target;
      setPersonalData({
        ...personalData,
        [name]: files[0],
      });
    } else {
      const { name, value } = e.target;
      setPersonalData({
        ...personalData,
        [name]: value,
      });
    }
  };

  const renderEditableField = (fieldName) => {
    if (personalEditable) {
      if (fieldName === "profilePicture") {
        return (
          <input
            type="file"
            className="w-100"
            accept="image/*"
            name={fieldName}
            value={personalData.fieldName}
            onChange={personalChangeHandler}
          />
        );
      }
      return (
        <input
          type="text"
          className="w-100"
          name={fieldName}
          value={personalData.fieldName}
          onChange={personalChangeHandler}
        />
      );
    }
    return <span className="small_typo">{loggedInUser[fieldName]}</span>;
  };

  const submitBioHandler = async () => {
    const {
      data: { data },
    } = await updateUserAPI({ bio: bioContent });
    dispatch(loginSuccess(data));
    setIsBioEditable(!isBioEditable);
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
                    <div className="col-10 col-md-8 col-seven">
                      <div className="image_name_section mt-2">
                        <img
                          src={loggedInUser.profilePicture}
                          alt="profileimage"
                          className="rounded-circle"
                        />
                        <div className="flex-grow-1 left_profile_text flex_content ms-3">
                          <h2 className="typography">
                            {loggedInUser?.firstName} {loggedInUser?.lastName}
                          </h2>
                          <span className="small_typo">
                            {loggedInUser?.designation ||
                              "Founder & CEO of The Capital Hub"}
                          </span>
                          <br />
                          <span className="small_typo">Bangalore , India</span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 col-md-4 col-five">
                      <div className=" m-4">
                        <button className="connect_btn px-3">
                          <img src={AddUserIcon} />
                          <span className="mx-2 d-none d-md-block">Connect</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <hr className="divider_hr" />
                  <div className="row">
                    <div className="designation mt-2 w-100">
                      <span className="edit_btn w-100 d-flex ">
                        <span className="ms-auto">
                          <button onClick={() => personalEditHandler()}>
                            {personalEditable ? "Cancel" : "Edit"}
                            <CiEdit />
                          </button>
                          {personalEditable && (
                            <button
                              className="ms-2"
                              onClick={() => submitPersonalHandler()}
                            >
                              Save <CiSaveUp2 />
                            </button>
                          )}
                        </span>
                      </span>
                      <table className="w-100">
                        <tbody>
                          <tr></tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Company
                              </strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              The Capital Hub
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Designation
                              </strong>
                            </td>
                            <td style={{ marginBottom: "1rem" }}>
                              {renderEditableField("designation")}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Education
                              </strong>
                            </td>
                            <td style={{ marginBottom: "1rem" }}>
                              {renderEditableField("education")}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="designation_list">
                                Experience
                              </strong>
                            </td>
                            <td style={{ marginBottom: "1rem" }}>
                              {renderEditableField("experience")}
                            </td>
                          </tr>
                          {personalEditable && (
                            <tr>
                              <td>
                                <strong className="designation_list">
                                  Profile Picture
                                </strong>
                              </td>
                              <td style={{ marginBottom: "1rem" }}>
                                {renderEditableField("profilePicture")}
                              </td>
                            </tr>
                          )}
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
                    <span className="ms-auto">
                      <button onClick={() => setIsBioEditable(!isBioEditable)}>
                        {isBioEditable ? "Cancel" : "Edit"}
                        <CiEdit />
                      </button>
                      {isBioEditable && (
                        <button
                          className="ms-2"
                          onClick={() => submitBioHandler()}
                        >
                          Save <CiSaveUp2 />
                        </button>
                      )}
                    </span>
                  </div>
                  <div className="col-12 mt-2">
                    <div className="designation_info">
                      {isBioEditable ? (
                        <textarea
                          value={bioContent}
                          name="bio"
                          onChange={(e) => setBioContent(e.target.value)}
                        />
                      ) : (
                        <p className="small_typo">
                          {loggedInUser?.bio || "Click on edit to add bio"}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="col-12 mt-2 designation_see_more">
                    <Link to={""}>See more</Link>
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
                      <Link to={""}>See more</Link>
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
