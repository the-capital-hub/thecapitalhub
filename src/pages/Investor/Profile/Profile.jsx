import { useState } from "react";
import "./Profile.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import InvestorRightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import { loginSuccess } from "../../../Store/features/user/userSlice";
import { updateUserAPI } from "../../../Service/user";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import ProfessionalInfo from "../../../components/Investor/StartupProfilePageComponents/ProfessionalInfo/ProfessionalInfo";
import StartupsInvested from "../../../components/NewInvestor/ProfileComponents/StartupsInvested/StartupsInvested";
import SectorsInterested from "../../../components/NewInvestor/ProfileComponents/SectorsInterested/SectorsInterested";
import InvestmentPhilosophy from "../../../components/NewInvestor/ProfileComponents/InvestmentPhilosophy/InvestmentPhilosophy";

function Profile() {
  // Fetch loggedInUser from global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  // States for bio
  const [bioContent, setBioContent] = useState(loggedInUser?.bio || "");
  const [isBioEditable, setIsBioEditable] = useState(false);

  // Submit Bio
  const submitBioHandler = async () => {
    const {
      data: { data },
    } = await updateUserAPI({ bio: bioContent });
    console.log(data);
    dispatch(loginSuccess(data)); // this is not updating the store
    setIsBioEditable(!isBioEditable);
  };

  // Update page title
  useEffect(() => {
    document.title = "Profile | Investors - The Capital Hub";
    dispatch(setPageTitle("Profile"));
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="profile_container">
        <div className="two_col_wrapper">
          <div className="main_content">
            {/* <SmallProfileCard /> */}

            {/* Professional Info */}
            <ProfessionalInfo theme={"investor"} />

            {/* Bio Start */}
            <div className="box personal_information rounded-4 border shadow-sm">
              <div className="personal_information_header">
                <h2 className="typography green_underline">Bio</h2>
                <span className="ms-auto">
                  <button onClick={() => setIsBioEditable(!isBioEditable)}>
                    {isBioEditable ? "Cancel" : "Edit"}
                    <CiEdit />
                  </button>
                  {isBioEditable && (
                    <button className="ms-2" onClick={() => submitBioHandler()}>
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
              {/* <div className="col-12 mt-2 designation_see_more">
                      <Link to={""}>See more</Link>
                    </div> */}
            </div>
            {/* Bio end */}

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

        {/* Startups Invested In */}
        {/* <StartupsInvested /> */}

        {/* Sectores Interested */}
        {/* <SectorsInterested /> */}

        {/* Investment Philosophy */}
        {/* <InvestmentPhilosophy /> */}
      </div>
    </MaxWidthWrapper>
  );
}

export default Profile;
