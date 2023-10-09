import { useEffect, useState } from "react";
import "./investorHome.scss";
// import profilePic from "../../../Images/investorIcon/profilePic.webp";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import { Link } from "react-router-dom";
import FeaturedPostsContainer from "../InvestorGlobalCards/MilestoneCard/FeaturedPostsContainer";
// import { SidebarContext } from "../../Sidebar/SidebarContext";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import CompanyDetailsCard from "../InvestorGlobalCards/CompanyDetails/CompanyDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import {
  getStartupByFounderId,
  updateUserAPI,
  postStartUpData,
} from "../../../Service/user";
import { loginSuccess } from "../../../Store/Action/userAction";
import { getBase64 } from "../../../utils/getBase64";
import CoinIcon from "../../../Images/investorView/Rectangle.png";
import ColorCard from "../InvestorGlobalCards/ColoredCards/ColorCard";

const InvestorHome = () => {
  const [isBioEditable, setIsBioEditable] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [bioContent, setBioContent] = useState(loggedInUser?.bio || "");
  const [personalEditable, setPersonalEditable] = useState(false);
  const [companyName, setCompanyName] = useState("");
  const [personalData, setPersonalData] = useState({
    designation: loggedInUser?.designation || "",
    education: loggedInUser?.education || "",
    experience: loggedInUser?.experience || "",
    profilePicture: loggedInUser.profilePicture || "",
  });
  console.log("logged user", loggedInUser);
  const [colorCardData, setColorCardData] = useState(null);

  const [field, setField] = useState("last_round_investment");

  const handleAmountChange = (currentfield, updatedAmount) => {
    console.log(field);
    console.log(currentfield);
    setField(currentfield);
    setColorCardData((prevData) => ({
      ...prevData,
      [currentfield]: updatedAmount,
    }));
  };

  useEffect(() => {
    if (!loggedInUser?.investor) {
      getStartupByFounderId(loggedInUser._id).then(({ data }) => {
        setCompanyName(data?.company);
        // console.log("ssss__>", data.colorCard.last_round_investment);
        setColorCardData({
          last_round_investment: data.colorCard.last_round_investment,
          total_investment: data.colorCard.total_investment,
          no_of_investers: data.colorCard.no_of_investers,
          fund_ask: data.colorCard.fund_ask,
          valuation: data.colorCard.valuation,
          raised_funds: data.colorCard.raised_funds,
        });
      });
    }
  }, []);

  const [editCompanyName, setEditCompanyName] = useState({
    founderId: loggedInUser._id,
    company: companyName,
  });

  const dispatch = useDispatch();

  const personalEditHandler = (field) => {
    setPersonalEditable(!personalEditable);
  };

  const submitPersonalHandler = async () => {
    try {
      const { profilePicture, ...newPersonalData } = personalData;
      if (typeof profilePicture === "object") {
        const image = await getBase64(profilePicture);
        newPersonalData.profilePicture = image;
      }
      const {
        data: { data },
      } = await updateUserAPI(newPersonalData);
      dispatch(loginSuccess(data));
      const response = await postStartUpData(editCompanyName);
      setCompanyName(editCompanyName.company);
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

  const companyNameHandler = (e) => {
    const { name, value } = e.target;
    setEditCompanyName({
      ...editCompanyName,
      [name]: value,
    });
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
      if (fieldName === "company") {
        return (
          <input
            type="text"
            className="w-100"
            name={fieldName}
            value={editCompanyName.fieldName}
            onChange={companyNameHandler}
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
    if (fieldName === "company")
      return <span className="small_typo">{companyName}</span>;
    return <span className="small_typo">{loggedInUser[fieldName]}</span>;
  };

  const submitBioHandler = async () => {
    const {
      data: { data },
    } = await updateUserAPI({ bio: bioContent });
    dispatch(loginSuccess(data));
    setIsBioEditable(!isBioEditable);
  };

  useEffect(() => {
    document.title = "Profile | The Capital Hub";
  }, []);

  return (
    <div className="container investorHome_main_container">
      <div className=" two_column_wrapper mt-2">
        <div className=" seventy d-flex flex-column gap-3">
          <div className="row">
            <div className="col-12">
              <SmallProfileCard className={""} />
            </div>
          </div>
          <div className="content-70 d-flex flex-column gap-3">
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
                              {/* {companyName || "No StartUp"} */}
                              {renderEditableField("company")}
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

            {/* <div className="row">
              <div className="col-12 mt-2">
                <div className=" box personal_information">
                  <div className="personal_information_header">
                    <h2 className="typography">Personal Information</h2> */}
            {/* <button>
                      Edit <CiEdit />
                    </button> */}
            {/* </div>
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
            </div> */}

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
                    {/* <Link to={""}>See more</Link> */}
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-12 mt-2">
                <div className=" box personal_information">
                  <div className="personal_information_header">
                    <h2 className="typography">Featured posts</h2>
                    <div className="milestone_see_more">
                      <Link to={""}>See more</Link>
                    </div>
                  </div>
                  <div className="col-12 mt-2 milestones">
                    <FeaturedPostsContainer userId={loggedInUser._id} />
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <CompanyDetailsCard
                className="mt-2"
                userDetails={loggedInUser}
                page={"edit"}
              />
            </div>

            <div className="row">
              <div className="col-12 mt-2">
                {colorCardData && (
                  <div className="card_holder">
                    <ColorCard
                      color="white"
                      background="#BB98FF"
                      text="Last round investment"
                      image={CoinIcon}
                      amount={colorCardData.last_round_investment}
                      onAmountChange={(amount) =>
                        handleAmountChange("last_round_investment", amount)
                      }
                      field={field}
                      colorCardData={colorCardData}
                    />
                    <ColorCard
                      color="white"
                      background="#DAC191"
                      text="Total Investment"
                      image={CoinIcon}
                      amount={colorCardData.total_investment}
                      onAmountChange={(amount) =>
                        handleAmountChange("total_investment", amount)
                      }
                      field={field}
                      colorCardData={colorCardData}
                    />
                    <ColorCard
                      color="white"
                      background="#DCDCDC"
                      text="No.of Investers"
                      image={CoinIcon}
                      amount={colorCardData.no_of_investers}
                      onAmountChange={(amount) =>
                        handleAmountChange("no_of_investers", amount)
                      }
                      field={field}
                      colorCardData={colorCardData}
                    />
                    <ColorCard
                      color="white"
                      background="#2B2B2B"
                      text="Fund ask"
                      image={CoinIcon}
                      amount={colorCardData.fund_ask}
                      onAmountChange={(amount) =>
                        handleAmountChange("fund_ask", amount)
                      }
                      field={field}
                      colorCardData={colorCardData}
                    />
                    <ColorCard
                      color="white"
                      background="#FF7373"
                      text="Valuation"
                      image={CoinIcon}
                      amount={colorCardData.valuation}
                      onAmountChange={(amount) =>
                        handleAmountChange("valuation", amount)
                      }
                      field={field}
                      colorCardData={colorCardData}
                    />
                    <ColorCard
                      color="white"
                      background="#9198DA"
                      text="Raised funds"
                      image={CoinIcon}
                      amount={colorCardData.raised_funds}
                      onAmountChange={(amount) =>
                        handleAmountChange("raised_funds", amount)
                      }
                      field={field}
                      colorCardData={colorCardData}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="thirty">
          <RightProfileCard />
          <RecommendationCard />
          <NewsCorner />
        </div>
      </div>
    </div>
  );
};

export default InvestorHome;
