import "./OtherUserProfile.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import messageIcon from "../../../Images/StartUp/icons/message.svg";
import connection from "../../../Images/StartUp/icons/connection-user.png";

import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import companyLogo from "../../../Images/dummy/companyLogo.png";
import CompanyDetailsCard from "../../../components/Investor/InvestorGlobalCards/CompanyDetails/CompanyDetailsCard";
import ColorCard from "../../../components/Investor/InvestorGlobalCards/ColoredCards/ColorCard";
import lastRoundInvIcon from "../../../Images/StartUp/icons/ColoredCards/isoSideCoin.svg";
import totalInvIcon from "../../../Images/StartUp/icons/ColoredCards/oneHandSideCoin.svg";
import noOfInvIcon from "../../../Images/StartUp/icons/ColoredCards/Investors.svg";
import fundAskIcon from "../../../Images/StartUp/icons/ColoredCards/fundAsk.svg";
import valuationIcon from "../../../Images/StartUp/icons/ColoredCards/3Coins.svg";
import raisedFundsIcon from "../../../Images/StartUp/icons/ColoredCards/3CoinStack.svg";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  getUserAndStartUpByUserIdAPI,
  sentConnectionRequest,
} from "../../../Service/user";
import FeaturedPostsContainer from "../../../components/Investor/InvestorGlobalCards/MilestoneCard/FeaturedPostsContainer";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import AfterSuccessPopup from "../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";

import { useDispatch, useSelector } from "react-redux";
import { setPageTitle } from "../../../Store/features/design/designSlice";
function OtherUserProfile() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();
  const [userData, setUserData] = useState(null);
  const [connectionSent, setConnectionSent] = useState(false);

  const { userId } = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    window.title = "User Profile | The Capital Hub";
    dispatch(setPageTitle("User Profile"));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    getUserAndStartUpByUserIdAPI(userId)
      .then(({ data }) => setUserData(data))
      .catch(() => navigate("/profile"));
  }, [userId, connectionSent]);

  const handleConnect = (userId) => {
    sentConnectionRequest(loggedInUser._id, userId)
      .then(({ data }) => {
        console.log("Connection data: ", data);
        if (data?.message === "Connection Request Sent") {
          setConnectionSent(true); // Set the state to true once
          setTimeout(() => {
            setConnectionSent(false); // Reset the state after a delay
          }, 2500);
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="mt-5 mt-md-4">
      <MaxWidthWrapper>
        <section className="other_user_profile">
          {/* <SmallProfileCard className="mt-lg-2 mt-xl-0" text="User Details" /> */}
          {userData ? (
            <>
              <div className="row profile rounded-4 border shadow-sm">
                <div className="short_details d-flex flex-column flex-md-row align-items-center justify-content-between">
                  <div className="d-flex flex-column w-100 flex-md-row align-items-center justify-content-between ">
                    <img
                      src={userData.profilePicture}
                      width={100}
                      alt="profileimage"
                      className="rounded-circle"
                    />
                    <div className="flex-grow-1 left_profile_text mt-2 mt-md-0 me-auto me-md-0 ms-md-4">
                      <h3 className="typography h3">
                        {userData?.firstName} {userData?.lastName}
                      </h3>
                      <span className="small_typo">
                        {userData?.designation ||
                          "Founder & CEO of The Capital Hub"}
                      </span>
                      <br />
                      <span className="small_typo">
                        {userData?.location || "Bangalore , India"}
                      </span>
                    </div>
                  </div>
                  <div className="buttons d-flex gap-2 flex-row align-items-md-center">
                    <Link
                      to={`/chats?userId=${userData?._id}`}
                      className="text-decoration-none"
                    >
                      <button className="message btn rounded-pill px-3 py-2">
                        <img src={messageIcon} width={20} alt="message user" />
                        <span>Message</span>
                      </button>
                    </Link>
                    {userData?.connections?.includes(loggedInUser._id) ? (
                      <button className="connection-status  btn rounded-pill px-3 py-2">
                        <span>Connected</span>
                      </button>
                    ) : userData?.connectionsReceived?.includes(
                        loggedInUser._id
                      ) ? (
                      <button className=" connection-status d-flex btn rounded-pill px-3 py-2">
                        <img src={connection} width={20} alt="message user" />
                        <span>Pending</span>
                      </button>
                    ) : (
                      <button className="connection-status d-flex  btn rounded-pill px-3 py-2">
                        <img src={connection} width={20} alt="message user" />
                        <span onClick={() => handleConnect(userData?._id)}>
                          Connect
                        </span>
                      </button>
                    )}
                  </div>
                </div>
                <div className="details">
                  <div className="single_details row row-cols-1 row-cols-md-2 ">
                    <span className="col-md-3 label fw-bold">
                      Current Company
                    </span>
                    <span className="col-md-9 value text-secondary">
                      {userData?.startUp?.company ||
                        userData?.investor?.companyName}
                    </span>
                  </div>
                  <div className="single_details row row-cols-1 row-cols-md-2 ">
                    <span className="col-md-3 label fw-bold">Designation</span>
                    <span className="col-md-9 value text-secondary">
                      {userData?.designation}
                    </span>
                  </div>
                  <div className="single_details row row-cols-1 row-cols-md-2 ">
                    <span className="col-md-3 label fw-bold">Education</span>
                    <span className="col-md-9 value text-secondary">
                      {userData?.education}
                    </span>
                  </div>
                  <div className="single_details row row-cols-1 row-cols-md-2 ">
                    <span className="col-md-3 label fw-bold">Experience</span>
                    <span className="col-md-9 value text-secondary">
                      {userData?.experience}
                    </span>
                  </div>
                </div>
              </div>
              <div className="row row-cols-auto row-cols-lg-2 g-0 gx-md-4 two_column_wrapper mb-4">
                <div className="left_container p-0 pe-md-auto d-flex flex-column gap-3 col-12 col-lg-8">
                  {/* <div className="about rounded-4 border shadow-sm profile_container">
                    <h4 className="h4">About</h4>
                    <p className="text-secondary">{userData?.bio}</p>
                  </div>
                  <div className="personal_information rounded-4 border shadow-sm profile_container">
                    <h4 className="h4">Personal Information</h4>
                    <div className="details w-100 m-0 p-0 col-md-9 row row-cols-1 row-cols-md-2">
                      <div className="d-flex flex-column mb-1 mb-md-3 p-0">
                        <p className="text-secondary mb-1">First name</p>
                        <p className="m-0">{userData?.firstName}</p>
                      </div>
                      <div className="d-flex flex-column mb-1 mb-md-3 p-0">
                        <p className="text-secondary mb-1">Last name</p>
                        <p className="m-0">{userData?.lastName}</p>
                      </div>
                      <div className="d-flex flex-column mb-1 mb-md-3 p-0">
                        <p className="text-secondary mb-1">Email address</p>
                        <p className="m-0">{userData?.email}</p>
                      </div>
                      <div className="d-flex flex-column mb-1 mb-md-3 p-0">
                        <p className="text-secondary mb-1">Mobile number</p>
                        <p className="m-0">{userData?.phoneNumber}</p>
                      </div>
                    </div>
                  </div> */}
                  {/* Experience */}
                  {/* <div className="experience rounded-4 border shadow-sm profile_container">
                    <h4 className="h4">Experience</h4>
                    <div className="single_experience row row-cols-1 row-cols-md-2 gx-2">
                      <div className="col-12 col-md-1 image">
                        <img
                          src={companyLogo}
                          alt="company logo"
                          width={60}
                          height={60}
                          className="rounded-circle p-1 border"
                        />
                      </div>
                      <div className="col-12 col-md-11">
                        <h5 className="h5">Data Science</h5>
                        <h6 className="h6">The capital hub</h6>
                        <p className="m-0 text-secondary font_12">
                          Jun 2022 - Present · 1 yr 4 mos
                        </p>
                        <p className="m-0 text-secondary font_12">
                          Bangalore, Karnataka, India
                        </p>
                        <p className="mt-2 font_14">
                          Skills: Data Visualization · Statistical Modeling ·
                          Machine Learning Algorithms · Datasets · Pattern
                          Recognition · Data Mining · Artificial Intelligence (AI)
                          · Big Data · Neural Networks ·
                        </p>
                      </div>
                    </div>
                  </div> */}
                  {/* Education */}
                  {/* <div className="education rounded-4 border shadow-sm profile_container">
                    <h4 className="h4">Education</h4>
                    <div className="single_education">
                      <h6 className="h6">
                        Avanthi Institute of Engineering & Technology, Tamaram
                        Village, Makavarapalem mandal
                      </h6>
                      <p className="m-0 font_14">
                        B.tech-Electronic communication Engineering
                      </p>
                      <p className="m-0 font_12 font_light">March 2019 - 2023</p>
                    </div>
                  </div> */}
                  {/* bio */}
                  {userData?.bio ? (
                    <div className="bio rounded-4 border shadow-sm profile_container">
                      <h4 className="h4">Bio</h4>
                      <div className="single_education">
                        <h6 className="h6">{userData?.bio}</h6>
                      </div>
                    </div>
                  ) : (
                    ""
                  )}
                  {/* Otheruser's Featured Posts */}
                  <div className="bg-white rounded-4 shadow-sm d-flex flex-column gap-3 p-4">
                    {/* Heading */}
                    <div className="d-flex justify-content-between">
                      <h4>Featured Posts</h4>
                      <Link
                        className="fs-6 text-decoration-none"
                        style={{ color: "#717171" }}
                      >
                        See More
                      </Link>
                    </div>
                    {/* Featured Posts container */}
                    <FeaturedPostsContainer userId={userId} />
                  </div>
                  {/* Company Details */}
                  <div className="company_details_container shadow-sm rounded">
                    <CompanyDetailsCard
                      className="company_details rounded-4 border profile_container"
                      userDetails={userData}
                    />
                  </div>
                  {/* Color Cards */}
                  <div className="coloured_cards row row-cols-1 row-cols-md-2 row-cols-lg-3 gap-3">
                    <ColorCard
                      color="white"
                      background="#BB98FF"
                      text="Last round investment"
                      image={lastRoundInvIcon}
                      amount={
                        userData?.startUp?.colorCard?.last_round_investment
                      }
                      isNotEditable
                    />
                    <ColorCard
                      color="white"
                      background="#DAC191"
                      text="Total Investment"
                      image={totalInvIcon}
                      isNotEditable
                      amount={userData?.startUp?.colorCard?.total_investment}
                    />
                    <ColorCard
                      color="white"
                      background="#DCDCDC"
                      text="No.of Investers"
                      image={noOfInvIcon}
                      amount={userData?.startUp?.colorCard?.no_of_investers}
                      noRupee
                      isNotEditable
                    />
                    <ColorCard
                      color="white"
                      background="#2B2B2B"
                      text="Fund ask"
                      image={fundAskIcon}
                      isNotEditable
                      amount={userData?.startUp?.colorCard?.fund_ask}
                    />
                    <ColorCard
                      color="white"
                      background="#FF7373"
                      text="Valuation"
                      image={valuationIcon}
                      isNotEditable
                      amount={userData?.startUp?.colorCard?.valuation}
                    />
                    <ColorCard
                      isNotEditable
                      color="white"
                      background="#9198DA"
                      text="Raised funds"
                      image={raisedFundsIcon}
                      amount={userData?.startUp?.colorCard?.raised_funds}
                    />
                  </div>
                </div>
                <div className="right_container">
                  <RecommendationCard />
                  <NewsCorner />
                </div>
              </div>
            </>
          ) : (
            <h4
              className="h4 text-secondary w-100 my-5 text-center"
              style={{ minHeight: "90vh" }}
            >
              <div class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
            </h4>
          )}
          {connectionSent && (
            <AfterSuccessPopup
              withoutOkButton
              onClose={() => setConnectionSent(!connectionSent)}
              successText="Connection Sent Successfully"
            />
          )}
        </section>
      </MaxWidthWrapper>
    </div>
  );
}

export default OtherUserProfile;
