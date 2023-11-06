import { useEffect } from "react";
import "./investorHome.scss";
// import profilePic from "../../../Images/investorIcon/profilePic.webp";
// import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
// import { CiEdit, CiSaveUp2 } from "react-icons/ci";
// import { Link } from "react-router-dom";
import FeaturedPostsContainer from "../InvestorGlobalCards/MilestoneCard/FeaturedPostsContainer";
// import { SidebarContext } from "../../Sidebar/SidebarContext";
// import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import CompanyDetailsCard from "../InvestorGlobalCards/CompanyDetails/CompanyDetailsCard";
import { useDispatch, useSelector } from "react-redux";
import { getStartupByFounderId } from "../../../Service/user";
import {
  getCompanyFounderId,
  setUserCompany,
} from "../../../Store/features/user/userSlice";
// import CoinIcon from "../../../Images/investorView/Rectangle.png";
// import ColorCard from "../InvestorGlobalCards/ColoredCards/ColorCard";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import ProfessionalInfo from "../StartupProfilePageComponents/ProfessionalInfo/ProfessionalInfo";
import { setPageTitle } from "../../../Store/features/design/designSlice";
// import OnBoardUser from "../../OnBoardUser/OnBoardUser";
// import { startupOnboardingSteps } from "../../OnBoardUser/steps/startup";
import ColorCards from "./Components/ColorCards/ColorCards";
import UserBio from "./Components/UserBio/UserBio";
import MissingDetails from "./Components/Questionnaire/MissingDetails";

// Startup profile page
const InvestorHome = () => {
  // Fetch loggedInUser from global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const loggedInUserId = useSelector((state) => state.user.loggedInUser._id);
  const companyFounderId = useSelector(getCompanyFounderId);
  const dispatch = useDispatch();

  // Update title
  useEffect(() => {
    document.title = "Profile | The Capital Hub";
    dispatch(setPageTitle("Profile"));
  });

  // Fetch startup company data
  useEffect(() => {
    getStartupByFounderId(loggedInUserId)
      .then(({ data }) => {
        dispatch(setUserCompany(data));
      })
      .catch((error) => {
        console.error("Error fetching startup data:", error);
      });
  }, [loggedInUserId, dispatch]);

  console.log("home was rendered");

  return (
    <MaxWidthWrapper>
      <div className="investorHome_main_container my-5">
        <div className="two_column_wrapper">
          <div className="seventy d-flex flex-column gap-3">
            {/* Small Profile Card */}
            {/* <SmallProfileCard className={""} /> */}

            <div className="content-70 d-flex flex-column gap-4">
              {/* Professional info component */}
              <ProfessionalInfo theme={"startup"} />

              {/* offcanvas trigger - Add missing details. Show if details are missing */}
              <MissingDetails />

              {/* Bio */}
              <UserBio />

              <div className="box personal_information">
                <div className="personal_information_header connections-container">
                  <h2 className="typography">Connections</h2>
                  {/* <div className="milestone_see_more">
                    <Link to={""}>See more</Link>
                  </div> */}
                </div>
                <div className="col-12 mt-2 milestones">
                  <ConnectionCard />
                </div>
              </div>

              {/* Featured Posts */}
              <div className="box personal_information">
                <div className="personal_information_header">
                  <h2 className="typography">Featured posts</h2>
                  {/* <div className="milestone_see_more">
                    <Link to={""}>See more</Link>
                  </div> */}
                </div>
                <div className="mt-2 milestones">
                  <FeaturedPostsContainer userId={loggedInUserId} />
                </div>
              </div>
              {/* Featured Posts End */}

              {/* Company Details */}
              <div className="">
                <CompanyDetailsCard
                  className=""
                  userDetails={loggedInUser}
                  page={loggedInUserId === companyFounderId ? "edit" : ""}
                />
              </div>

              {/* Color Cards */}
              <ColorCards />
            </div>
          </div>
          <div className="thirty d-none d-xl-block">
            <RightProfileCard />
            <RecommendationCard />
            <NewsCorner />
          </div>
        </div>

        {/* OffCanvas for questionnaire */}
        {/* <Questionnaire
          countData={countData}
          setCountData={setCountData}
          handleRefetch={handleRefetch}
        /> */}
      </div>
      {/* <OnBoardUser steps={startupOnboardingSteps.profilePage} /> */}
    </MaxWidthWrapper>
  );
};

export default InvestorHome;
