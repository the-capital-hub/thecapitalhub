import { useState } from "react";
import "./Profile.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import CompanyDetailsCard from "../../../components/Investor/InvestorGlobalCards/CompanyDetails/CompanyDetailsCard";
import RightProfileCard from "../../../components/Investor/InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import MileStoneCard from "../../../components/Investor/Cards/MilestoneCard/MileStoneCard";

function Profile() {
  const [isBioEditable, setIsBioEditable] = useState(false);
  // const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const loggedInUser = {
    _id: "64e9fd9d4e368da2bf3e721f",
    firstName: "Pramod",
    lastName: "Badiger",
    phoneNumber: "+919998887770",
    email: "pramod@gmail.com",
    profilePicture:
      "https://res.cloudinary.com/drjt9guif/image/upload/c_scale,q_100,w_265/v1692955323/TheCapitalHub/users/profilePictures/wprwfl9rsdkyfptag0hw.webp",
    connections: [
      "64e87dcae2108d5c01ebb619",
      "64e7327ed2133164ba157af3",
      "64e87dcae2108d5c01ebb619",
      "64e87dcae2108d5c01ebb619",
    ],
    userStatus: "active",
    savedPosts: [],
    createdAt: "2023-08-26T13:26:53.761Z",
    updatedAt: "2023-09-03T14:31:02.721Z",
    __v: 0,
    designation: "Founder",
    education: "Graduate, University of Northampton",
    experience: "5+ Years building various startups & Growth $10M+",
    bio: "I am the founder and CEO of The Capital Hub. Welcome! Hi",
    recentExperience: [],
    recentEducation: [],
  };

  const [bioContent, setBioContent] = useState(loggedInUser?.bio || "");
  const [personalEditable, setPersonalEditable] = useState(false);

  const [personalData, setPersonalData] = useState({
    designation: loggedInUser?.designation || "",
    education: loggedInUser?.education || "",
    experience: loggedInUser?.experience || "",
    profilePicture: loggedInUser.profilePicture || "",
  });

  // useEffect(() => {
  //   getStartupByFounderId(loggedInUser._id).then(({ data }) => {
  //     console.log("ssss__>", data.colorCard.last_round_investment);
  //     setColorCardData({
  //       last_round_investment: data.colorCard.last_round_investment,
  //       total_investment: data.colorCard.total_investment,
  //       no_of_investers: data.colorCard.no_of_investers,
  //       fund_ask: data.colorCard.fund_ask,
  //       valuation: data.colorCard.valuation,
  //       raised_funds: data.colorCard.raised_funds,
  //     });
  //   });
  // }, []);

  const dispatch = useDispatch();

  const personalEditHandler = (field) => {
    setPersonalEditable(!personalEditable);
  };

  const submitPersonalHandler = async () => {
    try {
      const { profilePicture, ...newPersonalData } = personalData;
      // if (typeof profilePicture === "object") {
      //   const image = await getBase64(profilePicture);
      //   newPersonalData.profilePicture = image;
      // }
      // const {
      //   data: { data },
      // } = await updateUserAPI(newPersonalData);
      // dispatch(loginSuccess(data));
      // setPersonalEditable(!personalEditable);
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
    // const {
    //   data: { data },
    // } = await updateUserAPI({ bio: bioContent });
    // dispatch(loginSuccess(data));
    // setIsBioEditable(!isBioEditable);
  };

  useEffect(() => {
    document.title = "Profile | The Capital Hub";
  }, []);

  return (
    <div className="container-fluid profile_container">
      <div className="row mt-2">
        <div className="col seventy">
          <SmallProfileCard />
          <div className="content-70">
            <div className="row">
              <div className="col-12 mt-2">
                <div className=" box bio_container">
                  <div className="row profileContainer">
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
                          <span className="small_typo">
                            {loggedInUser?.location || "Bangalore , India"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="col-2 col-md-4 col-five">
                      <div className=" m-4">
                        <button className="connect_btn px-3">
                          <img src={AddUserIcon} alt="add user" />
                          {/* <span className="mx-2 d-none d-md-block"> */}
                          <span className="mx-2">Connect</span>
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
                      <table className="">
                        <tbody>
                          <tr></tr>
                          <tr>
                            <td>
                              <strong className="">Company</strong>
                            </td>
                            <td
                              className="small_typo"
                              style={{ marginBottom: "1rem" }}
                            >
                              {loggedInUser?.startUp?.company || "No StartUp"}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="">Designation</strong>
                            </td>
                            <td style={{ marginBottom: "1rem" }}>
                              {renderEditableField("designation")}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="">Education</strong>
                            </td>
                            <td style={{ marginBottom: "1rem" }}>
                              {renderEditableField("education")}
                            </td>
                          </tr>
                          <tr>
                            <td>
                              <strong className="">Experience</strong>
                            </td>
                            <td style={{ marginBottom: "1rem" }}>
                              {renderEditableField("experience")}
                            </td>
                          </tr>
                          {personalEditable && (
                            <tr>
                              <td>
                                <strong className="">Profile Picture</strong>
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
                    <h2 className="typography green_underline">
                      Personal Information
                    </h2>
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
                              <strong className="">Firstname</strong>
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
                              <strong className="">LastName</strong>
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
                              <strong className="">Email</strong>
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
                              <strong className="">Mobile number</strong>
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
                    <h2 className="typography green_underline">Bio</h2>
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
          </div>
        </div>
        <div className="col thirty">
          <div className="content-30">
            <div className="row d-none d-xl-block">
              <RightProfileCard noProfile />
              <RecommendationCard />
              <NewsCorner />
            </div>
          </div>
        </div>
      </div>
      <div className="startups_invested">
        <div className="header">
          <h2 className="green_underline typography">Startups Invested</h2>
          <div className="green_button">
            <Link to={""}>Add New</Link>
          </div>
        </div>
        <div className="invested_cards">
          <div className="invested_card">
            <img src="" alt="" />
            <div className="description">
              <h6>StartUp Name</h6>
              <hr />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat tenetur harum corrupti ut alias, provident porro facere
                inventore est corporis quis explicabo laudantium repellendus ad
                impedit voluptatem quia nobis voluptatibus.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
