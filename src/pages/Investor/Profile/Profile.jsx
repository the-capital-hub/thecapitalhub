import { useState } from "react";
import "./Profile.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import InvestorRightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import fisdomStartUpIcon from "../../../Images/Investor/Profile/fisdom_startup.png";
import theCapitalHub from "../../../Images/Investor/Profile/thecapitalhub.svg";
import bondLink from "../../../Images/Investor/Profile/bondlink.svg";
import linkSectorIcon from "../../../Images/Investor/Profile/link_sector.png";
import Agritech from "../../../Images/Investor/Profile/Agritech.svg";
import Finance from "../../../Images/Investor/Profile/Finance.svg";
import Sunbank from "../../../Images/Investor/Profile/Sunbank.svg";
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
import { loginSuccess } from "../../../Store/Action/userAction";
import {
  getInvestorById,
  updateUserAPI,
  postInvestorData,
} from "../../../Service/user";
import { getBase64 } from "../../../utils/getBase64";
import SectorCard from "../../../components/NewInvestor/ProfileComponents/SectorCard";
import AddEditModal from "../../../components/NewInvestor/ProfileComponents/AddEditModal";
import { BsFillCloudUploadFill } from "react-icons/bs";

function Profile() {
  const [isBioEditable, setIsBioEditable] = useState(false);
  const [investor, setInvestor] = useState(null);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [companyName, setCompanyName] = useState("");
  const [editCompanyName, setEditCompanyName] = useState({
    founderId: loggedInUser._id,
    companyName: companyName,
  });
  const [investedStartups, setInvestedStartups] = useState([]);
  const [sectorsData, setSectorsData] = useState([]);
  const [isInvestmentPhilosophy, setIsInvestmentPhilosophy] = useState(false);
  // Mock data for Startups Invested in
  // const investedStartups = [
  //   {
  //     name: "The Capital Hub",
  //     image: theCapitalHub,
  //     id: 1,
  //   },
  //   {
  //     name: "Fisdom",
  //     image: fisdomStartUpIcon,
  //     id: 2,
  //   },
  //   {
  //     name: "Bondlink",
  //     image: bondLink,
  //     id: 3,
  //   },
  //   {
  //     name: "The Capital Hub",
  //     image: theCapitalHub,
  //     id: 4,
  //   },
  //   {
  //     name: "Fisdom",
  //     image: fisdomStartUpIcon,
  //     id: 5,
  //   },
  //   {
  //     name: "Bondlink",
  //     image: bondLink,
  //     id: 6,
  //   },
  // ];

  // Mock data for Sectors Interested
  // const sectorsData = [
  //   {
  //     id: 1,
  //     name: "Link Sector",
  //     image: linkSectorIcon,
  //   },
  //   {
  //     id: 2,
  //     name: "Agritech",
  //     image: Agritech,
  //   },
  //   {
  //     id: 3,
  //     name: "Finance",
  //     image: Finance,
  //   },
  //   {
  //     id: 4,
  //     name: "Sunbank",
  //     image: Sunbank,
  //   },
  // ];

  const [bioContent, setBioContent] = useState(loggedInUser?.bio || "");
  const [personalEditable, setPersonalEditable] = useState(false);
  const [investmentPhilosophy, setInvestmentPhilosophy] = useState(null);

  const [personalData, setPersonalData] = useState({
    designation: loggedInUser?.designation || "",
    education: loggedInUser?.education || "",
    experience: loggedInUser?.experience || "",
    profilePicture: loggedInUser.profilePicture || "",
  });

  useEffect(() => {
    getInvestorById(loggedInUser?.investor).then(({ data }) => {
      setInvestor(data);
      setCompanyName(data.companyName);
      setInvestedStartups(data.startupsInvested)
      setSectorsData(data.sectorInterested);
      setInvestmentPhilosophy(data.investmentPhilosophy || "");
    });
  }, [loggedInUser]);

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
      const response = await postInvestorData(editCompanyName);
      setCompanyName(editCompanyName.companyName);
      setPersonalEditable(!personalEditable);
    } catch (error) {
      console.log(error);
    }
  };

  const companyNameHandler = (e) => {
    const { name, value } = e.target;
    setEditCompanyName({
      ...editCompanyName,
      companyName: value,
    });
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

  const submitInvestmentPhilosophyChange = async () => {
    try {
      const {data} = await postInvestorData({
        founderId: loggedInUser._id,
        investmentPhilosophy: investmentPhilosophy,
      });
      console.log(data);
      setIsInvestmentPhilosophy(!isInvestmentPhilosophy);
    } catch (error) {
      console.log(error);
    }
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
                              {/* {investor?.companyName || "No StartUp"} */}
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
              <InvestorRightProfileCard />
              <RecommendationCard />
              <NewsCorner />
            </div>
          </div>
        </div>
      </div>

      {/* Startups Invested In */}
      <div className="startups_invested shadow-sm mt-4">
        <div className="header border-bottom p-4 ">
          <h2 className="green_underline typography">Startups Invested</h2>
          <div className="">
            {/* <Link to={""}> */}
            <ModalBsLauncher
              id="startupsModal"
              className={"green_button px-2 px-sm-3 "}
            >
              Add New
            </ModalBsLauncher>
            {/* </Link> */}
          </div>
        </div>
        {/* Loop cards here */}
        <div className="invested_cards px-3 py-4">
          {investedStartups.map((startUp, index) => {
            return <InvestedCard startUp={startUp} key={startUp.id} />;
          })}
        </div>
      </div>
      {/* Startups Modal */}
      <ModalBSContainer id="startupsModal" isStatic={false} modalXl>
        <ModalBSHeader title="Add/Edit Startups Invested" />
        <ModalBSBody>
          <AddEditModal
            dataArray={investedStartups}
            heading={"Startups Invested"}
            setInvestedStartups={setInvestedStartups}
          />
        </ModalBSBody>
      </ModalBSContainer>

      {/* Sectores Interested */}
      <div className="sector_interested shadow-sm">
        <div className="header border-bottom p-4">
          <h2 className="green_underline typography">Sectors Interested</h2>
          <div className="">
            {/* <Link to={""}> */}
            <ModalBsLauncher
              id="sectorsModal"
              className={"green_button px-2 px-sm-3 "}
            >
              Add New
            </ModalBsLauncher>
            {/* </Link> */}
          </div>
        </div>
        {/* Loop cards from here onwards */}
        <div className="interested_cards px-3 py-5 ">
          {sectorsData.map((sector, index) => {
            return <SectorCard key={sector.id} sector={sector} />;
          })}
        </div>
      </div>
      {/* Sectors Modal */}
      <ModalBSContainer id="sectorsModal" isStatic={false} modalXl>
        <ModalBSHeader title={"Add/Edit Sectors interested"} />
        <ModalBSBody>
          <AddEditModal
            dataArray={sectorsData}
            heading={"Sectors Interested"}
            isStartups={false}
            setSectorsData={setSectorsData}
          />
        </ModalBSBody>
      </ModalBSContainer>

      <section className="investment_philosophy shadow-sm">
        <h2 className="green_underline typography">Investment Philosophy</h2>
        <span className="ms-auto">
          <button onClick={() => setIsInvestmentPhilosophy(!isInvestmentPhilosophy)}>
            {isInvestmentPhilosophy ? "Cancel" : "Edit"}
            <CiEdit />
          </button>
          {isInvestmentPhilosophy && (
            <button
              className="ms-2"
            onClick={() => submitInvestmentPhilosophyChange()}
            >
              Save <CiSaveUp2 />
            </button>
          )}
        </span>
        <div className="d-flex flex-column flex-md-row gap-2 w-100 px-4 py-2">
          <p>Description: </p>
          {isInvestmentPhilosophy ? (
            <textarea
              value={investmentPhilosophy}
              name="investmentPhilosophy"
              onChange={(e) => setInvestmentPhilosophy(e.target.value)}
            />
          ) : (
            <p className="text-secondary">
              {investmentPhilosophy || "Click on edit to add Investment Philosophy"}
            </p>
          )}
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
