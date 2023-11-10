// import { useState } from "react";
import "./Profile.scss";
// import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import InvestorRightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import ProfessionalInfo from "../../../components/Investor/StartupProfilePageComponents/ProfessionalInfo/ProfessionalInfo";
import StartupsInvested from "../../../components/NewInvestor/ProfileComponents/StartupsInvested/StartupsInvested";
import SectorsInterested from "../../../components/NewInvestor/ProfileComponents/SectorsInterested/SectorsInterested";
import InvestmentPhilosophy from "../../../components/NewInvestor/ProfileComponents/InvestmentPhilosophy/InvestmentPhilosophy";
import MissingDetails from "../../../components/Investor/InvestorHome/Components/Questionnaire/MissingDetails";
import UserBio from "../../../components/Investor/InvestorHome/Components/UserBio/UserBio";
import {
  selectIsInvestor,
  selectUserInvestor,
  setUserCompany,
} from "../../../Store/features/user/userSlice";
import { getInvestorById } from "../../../Service/user";

function Profile() {
  // Fetch loggedInUser from global state
  // const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const isInvestor = useSelector(selectIsInvestor);
  const userInvestor = useSelector(selectUserInvestor);
  const dispatch = useDispatch();

  // Update page title
  useEffect(() => {
    document.title = "Profile | Investors - The Capital Hub";
    dispatch(setPageTitle("Profile"));

    // Fetch company data
    if (isInvestor) {
      getInvestorById(userInvestor)
        .then(({ data }) => {
          dispatch(setUserCompany(data));
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [dispatch, isInvestor, userInvestor]);

  return (
    <MaxWidthWrapper>
      <div className="profile_container">
        <div className="two_col_wrapper">
          <div className="main_content">
            {/* <SmallProfileCard /> */}

            {/* Professional Info */}
            <ProfessionalInfo theme={"investor"} />

            {/* Misssing details Chat Assistant */}
            <MissingDetails isInvestor={true} />

            {/* Bio */}
            <UserBio />

            {/* Startups Invested In */}
            <StartupsInvested />

            {/* Sectores Interested */}
            <SectorsInterested />

            {/* Investment Philosophy */}
            <InvestmentPhilosophy />
          </div>

          {/* Right Content */}
          <div className="right_content d-none d-xl-block">
            <InvestorRightProfileCard />
            <RecommendationCard isInvestor={true} />
            <NewsCorner />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}

export default Profile;
