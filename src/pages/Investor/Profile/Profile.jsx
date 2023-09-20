import { useState } from "react";
import "./Profile.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import RightProfileCard from "../../../components/Investor/InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import fisdomStartUpIcon from "../../../Images/Investor/Profile/fisdom_startup.png";
import theCapitalHub from "../../../Images/Investor/Profile/thecapitalhub.svg";
import bondLink from "../../../Images/Investor/Profile/bondlink.svg";
import linkSectorIcon from "../../../Images/Investor/Profile/link_sector.png";
import educationIcon from "../../../Images/Investor/Profile/iit_education.svg";
import avgInvestmentIcon from "../../../Images/Investor/Profile/avg_investment.png";
import noOfInvestmentIcon from "../../../Images/Investor/Profile/num_of_investments.svg";
import ticketSizeIcon from "../../../Images/Investor/Profile/ticket_size.svg";
import seedRoundIcon from "../../../Images/Investor/Profile/seed_round.svg";
import totalInvestmentIcon from "../../../Images/Investor/Profile/total_investment.png";
import InvestmentDetailCard from "../../../components/NewInvestor/InvestmentDetailCard/InvestmentDetailCard";
import ModalBsLauncher from "../../../components/PopUp/ModalBS/ModalBsLauncher/ModalBsLauncher";
import ModalBSContainer from "../../../components/PopUp/ModalBS/ModalBSContainer/ModalBSContainer";
import ModalBSHeader from "../../../components/PopUp/ModalBS/ModalBSHeader/ModalBSHeader";
import ModalBSBody from "../../../components/PopUp/ModalBS/ModalBSBody/ModalBSBody";
import ModalBSFooter from "../../../components/PopUp/ModalBS/ModalBSFooter/ModalBSFooter";
import InvestedCard from "../../../components/NewInvestor/ProfileComponents/InvestedCard";

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

  // Mock data for Startups Invested in
  const investedStartups = [
    {
      name: "The Capital Hub",
      image: theCapitalHub,
      id: 1,
    },
    {
      name: "Fisdom",
      image: fisdomStartUpIcon,
      id: 2,
    },
    {
      name: "Bondlink",
      image: bondLink,
      id: 3,
    },
    {
      name: "The Capital Hub",
      image: theCapitalHub,
      id: 4,
    },
    {
      name: "Fisdom",
      image: fisdomStartUpIcon,
      id: 5,
    },
    {
      name: "Bondlink",
      image: bondLink,
      id: 6,
    },
  ];

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
                <div className=" box bio_container rounded border shadow-sm">
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

            <div className="row rounded">
              <div className="col-12 mt-2">
                <div className=" box personal_information rounded border shadow-sm">
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
                <div className="box personal_information  rounded border shadow-sm">
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

      {/* Startups Invested In */}
      <div className="startups_invested shadow-sm ">
        <div className="header">
          <h2 className="green_underline typography">Startups Invested</h2>
          <div className="green_button">
            <Link to={""}>
              <ModalBsLauncher id="startupsModal">Add New</ModalBsLauncher>
            </Link>
          </div>
        </div>
        {/* Loop cards here */}
        <div className="invested_cards hide_scrollbar">
          {investedStartups.map((startUp, index) => {
            return <InvestedCard startUp={startUp} key={startUp.id} />;
          })}
        </div>
      </div>
      {/* Startups Modal */}
      <ModalBSContainer id="startupsModal">
        <ModalBSHeader title="Add/Edit Startups Invested" />
        <ModalBSBody>
          <div className="d-flex flex-column gap-2">
            {investedStartups.map((startUp, index) => {
              return (
                <div className="border p-1 d-flex justify-content-between align-items-center">
                  <img
                    src={startUp.image}
                    alt={startUp.name}
                    style={{ width: "50px" }}
                  />
                  <h5>{startUp.name}</h5>
                  <button className="btn green_button">Remove</button>
                </div>
              );
            })}
          </div>
        </ModalBSBody>
        {/* <ModalBSFooter>Footer</ModalBSFooter> */}
      </ModalBSContainer>

      <div className="sector_interested shadow-sm">
        <div className="header">
          <h2 className="green_underline typography">Sectors Interested</h2>
          <div className="green_button">
            <Link to={""}>Add New</Link>
          </div>
        </div>
        {/* Loop cards from here onwards */}
        <div className="interested_cards hide_scrollbar">
          <div className="interested_card border rounded shadow-sm">
            <img
              className="rounded-circle border"
              src={linkSectorIcon}
              alt="sector image"
              width={50}
              height={50}
            />
            <h6>Link Sector</h6>
          </div>
          <div className="interested_card border rounded shadow-sm">
            <img
              className="rounded-circle border"
              src={linkSectorIcon}
              alt="sector image"
              width={50}
              height={50}
            />
            <h6>Link Sector</h6>
          </div>
          <div className="interested_card border rounded shadow-sm">
            <img
              className="rounded-circle border"
              src={linkSectorIcon}
              alt="sector image"
              width={50}
              height={50}
            />
            <h6>Link Sector</h6>
          </div>
          <div className="interested_card border rounded shadow-sm">
            <img
              className="rounded-circle border"
              src={linkSectorIcon}
              alt="sector image"
              width={50}
              height={50}
            />
            <h6>Link Sector</h6>
          </div>
          <div className="interested_card border rounded shadow-sm">
            <img
              className="rounded-circle border"
              src={linkSectorIcon}
              alt="sector image"
              width={50}
              height={50}
            />
            <h6>Link Sector</h6>
          </div>
          <div className="interested_card border rounded shadow-sm">
            <img
              className="rounded-circle border"
              src={linkSectorIcon}
              alt="sector image"
              width={50}
              height={50}
            />
            <h6>Link Sector</h6>
          </div>
          <div className="interested_card border rounded shadow-sm">
            <img
              className="rounded-circle border"
              src={linkSectorIcon}
              alt="sector image"
              width={50}
              height={50}
            />
            <h6>Link Sector</h6>
          </div>
        </div>
      </div>
      <section className="investment_philosophy shadow-sm">
        <h2 className="green_underline typography">Investment Philosophy</h2>
        <div className="d-flex flex-column flex-md-row gap-2 w-100 px-4 py-2">
          <p>Description: </p>
          <p className="text-secondary">
            Investing Deploying Capital toward projects or activities that are
            expected to generate a positive financial return over time.
          </p>
        </div>
        <div className="recent_experience border rounded mx-md-4">
          <div className="flex-md-row header">
            <h5 className="green_underline h5">Recent Experience</h5>
            <div className="green_button">
              <Link to={""}>
                <span>Add </span>
                <span className="d-none d-md-inline-block">Experience</span>
              </Link>
            </div>
          </div>
          <div className="experience_cards">
            <div className="experience_card py-2 mt-1 row row-cols-1 row-cols-md-2">
              <div className="img_container rounded d-flex align-items-center justify-content-center mx-auto col-6 col-md-2">
                <img
                  className="rounded-circle"
                  src={linkSectorIcon}
                  height={100}
                  alt="experience image"
                />
              </div>
              <div className="description mt-1 mt-md-0 col-md-9 row row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Company Name</p>
                  <p className="m-0">The Capital HUB, India</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Location</p>
                  <p className="m-0">Bangalore, India</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Experience</p>
                  <p className="m-0">2Years 2 months, Present Full Time.</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Role</p>
                  <p className="m-0">UI/UX Designer</p>
                </div>
              </div>
            </div>
            <div className="experience_card py-2 mt-1 row row-cols-1 row-cols-md-2">
              <div className="img_container rounded d-flex align-items-center justify-content-center mx-auto col-6 col-md-2">
                <img
                  className="rounded-circle"
                  src={linkSectorIcon}
                  height={100}
                  alt="experience image"
                />
              </div>
              <div className="description mt-1 mt-md-0 col-md-9 row row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Company Name</p>
                  <p className="m-0">The Capital HUB, India</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Location</p>
                  <p className="m-0">Bangalore, India</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Experience</p>
                  <p className="m-0">2Years 2 months, Present Full Time.</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Role</p>
                  <p className="m-0">UI/UX Designer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="education border rounded mx-md-4">
          <div className="flex-md-row header">
            <h5 className="green_underline h5">Education</h5>
            <div className="green_button">
              <Link to={""}>
                <span>Add </span>
                <span className="d-none d-md-inline-block">Education</span>
              </Link>
            </div>
          </div>
          <div className="experience_cards">
            <div className="experience_card py-2 mt-1 row row-cols-1 row-cols-md-2">
              <div className="img_container rounded d-flex align-items-center justify-content-center mx-auto col-6 col-md-2">
                <img
                  className="rounded-circle"
                  src={educationIcon}
                  height={100}
                  alt="education image"
                />
              </div>
              <div className="description mt-1 mt-md-0 col-md-9 row row-cols-1 row-cols-md-2 row-cols-xl-3">
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">College Name</p>
                  <p className="m-0">IIIT, India</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Location</p>
                  <p className="m-0">Bangalore, India</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Passed Out</p>
                  <p className="m-0">2010 - 2014</p>
                </div>
                <div className="d-flex flex-column mb-1 mb-md-3">
                  <p className="text-secondary mb-1">Course</p>
                  <p className="m-0">
                    B.Tech, Computer Science And Engineering.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="investment_details_cards row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3">
          <InvestmentDetailCard
            className="col"
            img={totalInvestmentIcon}
            title="Total Investment"
            amount="1 Crore"
          />
          <InvestmentDetailCard
            className="col"
            img={avgInvestmentIcon}
            title="Average Investment"
            amount="50 Lakhs"
          />
          <InvestmentDetailCard
            className="col"
            img={noOfInvestmentIcon}
            title="No.of Investment"
            amount="10"
          />
          <InvestmentDetailCard
            className="col"
            img={ticketSizeIcon}
            title="Minimum Tickets Size"
            amount="25 Lakhs"
          />
          <InvestmentDetailCard
            className="col"
            img={ticketSizeIcon}
            title="Maximum Tickets Size"
            amount="50 Lakhs"
          />
          <InvestmentDetailCard
            className="col"
            img={seedRoundIcon}
            title="Seed Round"
            amount="10"
          />
        </div>
        <button className="green_button btn mx-3">
          Book Your Appointment Now
        </button>
      </section>
    </div>
  );
}

export default Profile;
