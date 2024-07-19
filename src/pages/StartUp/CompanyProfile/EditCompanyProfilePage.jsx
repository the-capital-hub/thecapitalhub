import React, { useState, useEffect } from "react";
import "./EditCompanyProfilePage.scss";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
// import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import CompanyProfileForm from "../../../components/Investor/CompanyProfilePageComponents/CompanyProfileForm";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";
// import { CiEdit, CiSaveUp2 } from "react-icons/ci";
// import RaghuImage from "../../../Images/aboutUs/Raghu.jpeg";
import {
  About2,
  About3,
  Revenue1,
  Revenue2,
} from "../../../Images/Investor/CompanyProfile";
import revenue from "../../../Images/Investor/CompanyProfile/image 83-1.png";
import revenue2 from "../../../Images/Investor/CompanyProfile/image 83-6.png";
import revenue3 from "../../../Images/Investor/CompanyProfile/image 83-5.png";
import CoinIcon from "../../../Images/investorView/Rectangle.png";
import ColorCard from "../../../components/Investor/InvestorGlobalCards/ColoredCards/ColorCard";
import { getStartupByFounderId, postStartUpData } from "../../../Service/user";
import CoreTeam from "../../../components/Investor/CompanyProfilePageComponents/CoreTeam/CoreTeam";
// import Milestones from "../../../components/Investor/CompanyProfilePageComponents/Milestones/Milestones";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import {
  selectTheme,
  setPageTitle,
} from "../../../Store/features/design/designSlice";
// import backIcon from "../../../Images/Chat/BackIcon.svg";
import { useNavigate } from "react-router-dom";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import CompanyDescription from "../../../components/Investor/CompanyProfilePageComponents/CompanyDescription/CompanyDescription";
import AfterSuccessPopUp from "../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import ErrorPopUp from "../../../components/PopUp/ErrorPopUp/ErrorPopUp";
import {
  selectLoggedInUserId,
  selectUserCompanyData,
  setUserCompany,
} from "../../../Store/features/user/userSlice";
import IconChevronBack from "../../../components/Investor/SvgIcons/IconChevronBack";
import PublicLinks from "../../../components/Investor/CompanyProfilePageComponents/PublicLinks/PublicLinks";

export default function EditCompanyProfilePage() {
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const userCompanyData = useSelector(selectUserCompanyData);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const theme = useSelector(selectTheme);
  const [publicLinks, setPublicLinks] = useState(null);
  const [colorCardData, setColorCardData] = useState(null);
  const [companyData, setCompanyData] = useState([]);
  const [isBioEditable, setIsBioEditable] = useState(false);
  const [companyDescription, setCompanyDescription] = useState(null);
  // States for popup
  const [showPopup, setShowPopup] = useState({ success: false, error: false });
  const [isSaveAll, setIsSaveAll] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userCompanyData) {
      getStartupByFounderId(loggedInUserId)
        .then(({ data }) => {
          setCompanyData(data);
          setCompanyDescription(data.description);
          setColorCardData({
            last_round_investment: data.colorCard.last_round_investment,
            total_investment: data.colorCard.total_investment,
            no_of_investers: data.colorCard.no_of_investers,
            fund_ask: data.colorCard.fund_ask,
            valuation: data.colorCard.valuation,
            raised_funds: data.colorCard.raised_funds,
            last_year_revenue: data.colorCard?.last_year_revenue,
            target: data.colorCard?.target,
          });
        })
        .catch((error) => {
          console.error("Error fetching startup data:", error);
        });
    } else {
      setCompanyData(userCompanyData);
      setCompanyDescription(userCompanyData.description);
      setColorCardData({
        last_round_investment: userCompanyData.colorCard?.last_round_investment,
        total_investment: userCompanyData.colorCard?.total_investment,
        no_of_investers: userCompanyData.colorCard?.no_of_investers,
        fund_ask: userCompanyData.colorCard?.fund_ask,
        valuation: userCompanyData.colorCard?.valuation,
        raised_funds: userCompanyData.colorCard?.raised_funds,
        last_year_revenue: userCompanyData.colorCard?.last_year_revenue,
        target: userCompanyData.colorCard?.target,
      });
    }
    document.title = "Edit Company Profile | The Capital Hub";
    dispatch(setPageTitle("Edit Company"));
  }, [isSaveAll, dispatch, loggedInUserId, userCompanyData]);

  // handleAmountChange
  const handleAmountChange = (currentfield, updatedAmount) => {
    setColorCardData((prevData) => ({
      ...prevData,
      [currentfield]: updatedAmount,
    }));
  };

  // Handle Form submit
  // function handleFormSubmit(e) {
  //   e.preventDefault();
  // }

  // Handle Description Change
  const handleDescriptionChange = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + 2 + "px";

    setCompanyDescription(e.target.value);
  };

  // Handle Description submit
  const submitBioHandler = async (e) => {
    e.preventDefault();
    // Set Loading
    setLoading(true);

    const companyData = {
      description: companyDescription,
      founderId: loggedInUserId,
    };
    try {
      const response = await postStartUpData(companyData);
      if (response.status === 200) {
        setIsBioEditable(false);
        setLoading(false);
        handleShowPopup({ success: true });
        setCompanyData((prev) => ({
          ...prev,
          description: companyDescription,
        }));
        dispatch(setUserCompany(response.data));
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
      handleShowPopup({ error: true });
    }
  };

  const handleSaveAll = (e) => {
    setLoading(true);
    submitBioHandler(e);
    setIsSaveAll(true);
    setTimeout(() => {
      setIsSaveAll(false);
      setLoading(false);
    }, 1000);
  };

  // handle show popup
  const handleShowPopup = (popupType) => {
    setShowPopup((prev) => ({ ...prev, ...popupType }));
    setTimeout(() => {
      handlePopupClose();
    }, 2000);
  };

  // handle popup close
  const handlePopupClose = () => {
    setShowPopup({ success: false, error: false });
  };

  return (
    <MaxWidthWrapper>
      <div className="editcompanyProfilePage__wrapper">
        {/* Main content */}

        <div className="main__content">
          <span
            className="back_img rounded-circle shadow-sm"
            title="Go Back"
            onClick={() => navigate(-1)}
          >
            {/* <img
              src={backIcon}
              width={20}
              height={20}
              onClick={() => navigate(-1)}
              alt=""
            /> */}
            <IconChevronBack width={25} height={25} color="var(--d-l-grey)" />
          </span>
          {/* <SmallProfileCard text={"Company Profile"} /> */}
  
          <div className="company_profile_form rounded-4 py-3 px-3 px-md-5">
            <CompanyProfileForm
              companyData={companyData}
              isSaveAll={isSaveAll}
              handleShowPopup={handleShowPopup}
            />
          </div>
          <PublicLinks publicLinks={companyData?.socialLinks}  loading={loading} />
          {/* Company Description */}
          <CompanyDescription
            companyData={companyData}
            companyDescription={companyDescription}
            setCompanyDescription={setCompanyDescription}
            isBioEditable={isBioEditable}
            setIsBioEditable={setIsBioEditable}
            submitBioHandler={submitBioHandler}
            handleDescriptionChange={handleDescriptionChange}
            loading={loading}
          />

          {/* Core Team */}
          <div className="core__team  rounded-4 py-3 px-3 px-md-5">
            <CoreTeam
              companyData={companyData}
              setCompanyData={setCompanyData}
              theme="startup"
            />
          </div>

          {/* Milestones */}
          {/* <div className="milestones__component bg-white rounded-4 py-5 px-3 px-md-5 d-flex flex-column gap-4">
            <Milestones theme={"startup"} />
          </div> */}

          {/* Color Cards */}
          <div className="col-12 mt-2">
            <h6
              className="typography div__heading"
              style={{
                marginLeft: "1rem",
                textDecoration: "underline",
                textDecorationColor: "rgba(253,89,1,1)",
                textDecorationThickness: "2px",
                textUnderlineOffset: "0.25em",
                fontSize: "13px",
                color: theme === "dark" ? "#fff" : "black",
              }}
            >{`Previous Funding Round`}</h6>
            <div className="card_holder d-flex flex-wrap">
              <ColorCard
                color="white"
                background="#DAC191"
                text="Total Investment"
                image={About2}
                amount={colorCardData?.total_investment || ""}
                onAmountChange={(amount) =>
                  handleAmountChange("total_investment", amount)
                }
                field={"total_investment"}
                colorCardData={colorCardData}
              />
              <ColorCard
                color="white"
                background="#DCDCDC"
                text="No.of Investers"
                image={About3}
                amount={colorCardData?.no_of_investers || ""}
                onAmountChange={(amount) =>
                  handleAmountChange("no_of_investers", amount)
                }
                field={"no_of_investers"}
                colorCardData={colorCardData}
                noRupee={true}
              />
              <ColorCard
                color="white"
                background="#BB98FF"
                text="Valuation"
                image={CoinIcon}
                amount={colorCardData?.last_round_investment || ""}
                onAmountChange={(amount) =>
                  handleAmountChange("last_round_investment", amount)
                }
                field={"last_round_investment"}
                colorCardData={colorCardData}
              />
            </div>
          </div>
          <div>
            <h6
              className="typography div__heading"
              style={{
                marginLeft: "1rem",
                textDecoration: "underline",
                textDecorationColor: "rgba(253,89,1,1)",
                textDecorationThickness: "2px",
                textUnderlineOffset: "0.25em",
                fontSize: "13px",
                color: theme === "dark" ? "#fff" : "black",
              }}
            >{`Current Funding Round`}</h6>
            <div className="card_holder d-flex flex-wrap">
              <ColorCard
                color="white"
                background="#2B2B2B"
                text="Fund ask"
                image={revenue2}
                amount={colorCardData?.fund_ask || ""}
                onAmountChange={(amount) =>
                  handleAmountChange("fund_ask", amount)
                }
                field={"fund_ask"}
                colorCardData={colorCardData}
              />
              <ColorCard
                color="white"
                background="#FF7373"
                text="Valuation"
                image={revenue}
                amount={colorCardData?.valuation || ""}
                onAmountChange={(amount) =>
                  handleAmountChange("valuation", amount)
                }
                field={"valuation"}
                colorCardData={colorCardData}
              />
              <ColorCard
                color="white"
                background="#9198DA"
                text="Funds raised"
                image={revenue3}
                amount={colorCardData?.raised_funds || ""}
                onAmountChange={(amount) =>
                  handleAmountChange("raised_funds", amount)
                }
                field={"raised_funds"}
                colorCardData={colorCardData}
              />
            </div>
          </div>
          <div className="col-12 mt-2">
            <h6
              className="typography div__heading"
              style={{
                marginLeft: "1rem",
                textDecoration: "underline",
                textDecorationColor: "rgba(253,89,1,1)",
                textDecorationThickness: "2px",
                textUnderlineOffset: "0.25em",
                fontSize: "13px",
                color: theme === "dark" ? "#fff" : "black",
              }}
            >{`Revenue Statistics`}</h6>
            <div className="card_holder d-flex flex-wrap">
              <ColorCard
                color="white"
                background="#DAC191"
                text="Last year revenue(FY 23)"
                image={Revenue1}
                amount={colorCardData?.last_year_revenue || "NA"}
                onAmountChange={(amount) =>
                  handleAmountChange("last_year_revenue", amount)
                }
                field={"last_year_revenue"}
                colorCardData={colorCardData}
              />
              <ColorCard
                color="white"
                background="#DCDCDC"
                text="Target (FY 24)"
                image={Revenue2}
                amount={colorCardData?.target || "NA"}
                onAmountChange={(amount) =>
                  handleAmountChange("target", amount)
                }
                field={"target"}
                colorCardData={colorCardData}
                noRupee={true}
              />
            </div>
          </div>
          <button
            className={`align-self-end btn-base startup`}
            onClick={handleSaveAll}
          >
            {loading ? (
              <SpinnerBS
                colorClass={"text-light"}
                spinnerSizeClass="spinner-border-sm"
              />
            ) : (
              "Save all"
            )}
          </button>
        </div>
        {/* Right side content */}
        <div className="right__content">
          <RecommendationCard />
          <NewsCorner />
        </div>

        {/* Popups */}
        {showPopup.success && (
          <AfterSuccessPopUp
            successText={"Changes Saved"}
            onClose={handlePopupClose}
          />
        )}
        {showPopup.error && (
          <ErrorPopUp
            message={"Error While Saving! Please try again"}
            onClose={handlePopupClose}
          />
        )}
      </div>
    </MaxWidthWrapper>
  );
}
