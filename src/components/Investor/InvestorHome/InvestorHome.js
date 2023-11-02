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
  getQuestionCountAPI,
} from "../../../Service/user";
import { loginSuccess } from "../../../Store/features/user/userSlice";
import { getBase64 } from "../../../utils/getBase64";
import CoinIcon from "../../../Images/investorView/Rectangle.png";
import ColorCard from "../InvestorGlobalCards/ColoredCards/ColorCard";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";
import ConnectionCard from "../ConnectionCard/ConnectionCard";
import ProfessionalInfo from "../StartupProfilePageComponents/ProfessionalInfo/ProfessionalInfo";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import Questionnaire from "./Components/Questionnaire/Questionnaire";
import OnBoardUser from "../../OnBoardUser/OnBoardUser";
import { startupOnboardingSteps } from "../../OnBoardUser/steps/startup";

// Startup profile page
const InvestorHome = () => {
  // Fetch loggedInUser from global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  // console.log("logged user", loggedInUser);
  const dispatch = useDispatch();

  // States for Bio
  const [isBioEditable, setIsBioEditable] = useState(false);
  const [bioContent, setBioContent] = useState(loggedInUser?.bio || "");

  // States for Company
  const [colorCardData, setColorCardData] = useState(null);
  const [companyFounderId, setCompanyFounderId] = useState("");

  // State for color card
  const [field, setField] = useState("last_round_investment");

  // State for question count
  const [countData, setCountData] = useState(null);
  const [refetch, setRefetch] = useState(false);

  const handleAmountChange = (currentfield, updatedAmount) => {
    console.log(field);
    console.log(currentfield);
    setField(currentfield);
    setColorCardData((prevData) => ({
      ...prevData,
      [currentfield]: updatedAmount,
    }));
  };

  // Fetch Questions count
  useEffect(() => {
    async function fetchQuestionsCount() {
      try {
        const { data } = await getQuestionCountAPI();
        console.log("count", data);
        setCountData(data);
      } catch (error) {
        console.error("Error fetching count:", error);
        throw error;
      }
    }

    fetchQuestionsCount();
  }, [refetch]);

  // Fetch startup data
  useEffect(() => {
    if (!loggedInUser?.investor) {
      getStartupByFounderId(loggedInUser._id)
        .then(({ data }) => {
          setCompanyFounderId(data?.founderId);
          setColorCardData({
            last_round_investment: data?.colorCard?.last_round_investment,
            total_investment: data?.colorCard?.total_investment,
            no_of_investors: data?.colorCard?.no_of_investors,
            fund_ask: data?.colorCard?.fund_ask,
            valuation: data?.colorCard?.valuation,
            raised_funds: data?.colorCard?.raised_funds,
          });
        })
        .catch((error) => {
          console.error("Error fetching startup data:", error);
        });
    }
  }, [loggedInUser._id, loggedInUser?.investor]);

  // Submit Bio
  const submitBioHandler = async () => {
    const {
      data: { data },
    } = await updateUserAPI({ bio: bioContent });
    dispatch(loginSuccess(data));
    setIsBioEditable(!isBioEditable);
  };

  useEffect(() => {
    document.title = "Profile | The Capital Hub";
    dispatch(setPageTitle("Profile"));
  }, []);

  // Handle Refetch count
  function handleRefetch() {
    setRefetch(!refetch);
  }

  return (
    <MaxWidthWrapper>
      <div className="investorHome_main_container my-5">
        <div className="two_column_wrapper">
          <div className="seventy d-flex flex-column gap-3">
            {/* Small Profile Card */}
            {/* <SmallProfileCard className={""} /> */}

            <div className="content-70 d-flex flex-column gap-4">
              {/* Professional info component */}
              <ProfessionalInfo
                theme={"startup"}
                companyFounderId={companyFounderId}
              />

              {/* offcanvas trigger - Add missing details. Show if details are missing */}
              {countData?.total ? (
                <button
                  id="missingDetails"
                  className="btn border-0 bg-white rounded-4 shadow-sm lh-1 py-4 fs-5"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#questionnaireOffCanvas"
                  ariaControls="offcanvasTop"
                  style={{ color: "#fd5901" }}
                >
                  Add missing details {countData && `(${countData.total})`}
                </button>
              ) : (
                ""
              )}

              {/* Bio */}
              <div className="box personal_information pb-4">
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
                <div className="mt-2">
                  <div className="designation_info">
                    {isBioEditable ? (
                      <textarea
                        value={bioContent}
                        name="bio"
                        onChange={(e) => setBioContent(e.target.value)}
                        className="profile_edit_field"
                        rows={5}
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

              <div className="box personal_information">
                <div className="personal_information_header connections-container">
                  <h2 className="typography">Connections</h2>
                  {/* <div className="milestone_see_more">
                    <Link to={""}>See more</Link>
                  </div> */}
                </div>
                <div className="col-12 mt-2 milestones">
                  <ConnectionCard userId={loggedInUser._id} />
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
                  <FeaturedPostsContainer userId={loggedInUser._id} />
                </div>
              </div>
              {/* Featured Posts End */}

              {/* Company Details */}
              <div className="">
                <CompanyDetailsCard
                  className=""
                  userDetails={loggedInUser}
                  page={loggedInUser._id === companyFounderId ? "edit" : ""}
                />
              </div>

              {/* Color Cards */}

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
                      isOneLink={loggedInUser._id !== companyFounderId}
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
                      isOneLink={loggedInUser._id !== companyFounderId}
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
                      noRupee={true}
                      isOneLink={loggedInUser._id !== companyFounderId}
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
                      isOneLink={loggedInUser._id !== companyFounderId}
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
                      isOneLink={loggedInUser._id !== companyFounderId}
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
                      isOneLink={loggedInUser._id !== companyFounderId}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="thirty d-none d-xl-block">
            <RightProfileCard />
            <RecommendationCard />
            <NewsCorner />
          </div>
        </div>

        {/* OffCanvas for questionnaire */}
        <Questionnaire
          countData={countData}
          setCountData={setCountData}
          handleRefetch={handleRefetch}
        />
      </div>
      <OnBoardUser steps={startupOnboardingSteps.profilePage} />
    </MaxWidthWrapper>
  );
};

export default InvestorHome;
