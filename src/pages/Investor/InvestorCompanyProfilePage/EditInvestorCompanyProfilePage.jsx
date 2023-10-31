import React, { useState, useEffect } from "react";
import "./EditInvestorCompanyProfilePage.scss";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import CompanyProfileForm from "../../../components/Investor/CompanyProfilePageComponents/CompanyProfileForm";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import RaghuImage from "../../../Images/aboutUs/Raghu.jpeg";
import CoinIcon from "../../../Images/investorView/Rectangle.png";
import ColorCard from "../../../components/Investor/InvestorGlobalCards/ColoredCards/ColorCard";
import { getInvestorById, postInvestorData } from "../../../Service/user";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import Milestones from "../../../components/Investor/CompanyProfilePageComponents/Milestones/Milestones";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import CoreTeam from "../../../components/Investor/CompanyProfilePageComponents/CoreTeam/CoreTeam";
import { useNavigate } from "react-router-dom";
import backIcon from "../../../Images/Chat/BackIcon.svg";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import CompanyDescription from "../../../components/Investor/CompanyProfilePageComponents/CompanyDescription/CompanyDescription";

export default function EditInvestorCompanyProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [colorCardData, setColorCardData] = useState(null);

  const [field, setField] = useState("last_round_investment");
  const [companyData, setCompanyData] = useState([]);
  const [isBioEditable, setIsBioEditable] = useState(false);
  const [companyDescription, setCompanyDescription] = useState(null);

  // States for popup

  // Set page title
  useEffect(() => {
    document.title = "Edit Company Profile | Investors - The Capital Hub";
    dispatch(setPageTitle("Edit Company"));
  }, []);

  useEffect(() => {
    getInvestorById(loggedInUser.investor)
      .then(({ data }) => {
        setCompanyData(data);
        setCompanyDescription(data.description);
        setColorCardData({
          averageInvestment: data.colorCard.averageInvestment,
          total_investment: data.colorCard.total_investment,
          no_of_investments: data.colorCard.no_of_investments,
          minimumTicketsSize: data.colorCard.minimumTicketsSize,
          maximumTicketsSize: data.colorCard.maximumTicketsSize,
          seedRound: data.colorCard.seedRound,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  // handleAmountChange
  const handleAmountChange = (currentfield, updatedAmount) => {
    console.log(field);
    console.log(currentfield);
    setField(currentfield);
    setColorCardData((prevData) => ({
      ...prevData,
      [currentfield]: updatedAmount,
    }));
  };

  // Handle Description Change
  const handleDescriptionChange = (e) => {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + 3 + "px";

    setCompanyDescription(e.target.value);
  };

  // Handle Description submit
  const submitBioHandler = async (e) => {
    e.preventDefault();
    const companyData = {
      description: companyDescription,
      founderId: loggedInUser._id,
    };
    try {
      const response = await postInvestorData(companyData);
      if (response.status === 200) {
        setIsBioEditable(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const [isSaveAll, setIsSaveAll] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSaveAll = (e) => {
    setLoading(true);
    submitBioHandler(e);
    setIsSaveAll(true);
    setTimeout(() => {
      setIsSaveAll(false);
      setLoading(false);
    }, 1000);
  };

  return (
    <MaxWidthWrapper>
      <div className="editinvestorCompanyProfilePage__wrapper p-3 border-start">
        {/* Main content */}
        <div className="main__content">
          <span className="back_img rounded-circle shadow-sm" title="Go Back">
            <img
              src={backIcon}
              width={20}
              height={20}
              onClick={() => navigate(-1)}
            />
          </span>
          <SmallProfileCard text={"Company Profile"} />
          {/* Company profile form */}
          <div className="bg-white rounded-3 p-5 border">
            <CompanyProfileForm
              companyData={companyData}
              investor={true}
              isSaveAll={isSaveAll}
            />
          </div>
          {/* Company Description */}
          <CompanyDescription
            companyData={companyData}
            companyDescription={companyDescription}
            setCompanyDescription={setCompanyDescription}
            isBioEditable={isBioEditable}
            setIsBioEditable={setIsBioEditable}
            submitBioHandler={submitBioHandler}
            handleDescriptionChange={handleDescriptionChange}
          />

          {/* Core Team */}
          <div className="core__team bg-white rounded-3 p-5 d-flex flex-column gap-4 border">
            <CoreTeam
              companyData={companyData}
              setCompanyData={setCompanyData}
              theme="investor"
            />
          </div>

          {/* Milestones */}
          <div className="milestones__component bg-white rounded-3 p-5 d-flex flex-column gap-4 border">
            <Milestones theme={"investor"} />
          </div>

          {/* Color Cards */}
          <div className="card_holder d-flex justify-content-between flex-wrap">
            <ColorCard
              color="white"
              background="#BB98FF"
              text="Total Investment"
              image={CoinIcon}
              amount={colorCardData?.total_investment || "0"}
              onAmountChange={(amount) =>
                handleAmountChange("total_investment", amount)
              }
              field={"total_investment"}
              colorCardData={colorCardData}
              isInvestor={true}
            />
            <ColorCard
              color="white"
              background="#DAC191"
              text="Average Investment"
              image={CoinIcon}
              amount={colorCardData?.averageInvestment || "0"}
              onAmountChange={(amount) =>
                handleAmountChange("averageInvestment", amount)
              }
              field={"averageInvestment"}
              colorCardData={colorCardData}
              isInvestor={true}
            />
            <ColorCard
              color="white"
              background="#DCDCDC"
              text="No.of Investment"
              image={CoinIcon}
              amount={colorCardData?.no_of_investments || "0"}
              onAmountChange={(amount) =>
                handleAmountChange("no_of_investments", amount)
              }
              field={"no_of_investments"}
              colorCardData={colorCardData}
              isInvestor={true}
              noRupee={true}
            />
            <ColorCard
              color="white"
              background="#2B2B2B"
              text="Minimum Tickets Size"
              image={CoinIcon}
              amount={colorCardData?.minimumTicketsSize || "0"}
              onAmountChange={(amount) =>
                handleAmountChange("minimumTicketsSize", amount)
              }
              field={"minimumTicketsSize"}
              colorCardData={colorCardData}
              isInvestor={true}
              noRupee={true}
            />
            <ColorCard
              color="white"
              background="#FF7373"
              text="Maximum Tickets Size"
              image={CoinIcon}
              amount={colorCardData?.maximumTicketsSize || "0"}
              onAmountChange={(amount) =>
                handleAmountChange("maximumTicketsSize", amount)
              }
              field={"maximumTicketsSize"}
              colorCardData={colorCardData}
              isInvestor={true}
              noRupee={true}
            />
            <ColorCard
              color="white"
              background="#9198DA"
              text="Seed Round"
              image={CoinIcon}
              amount={colorCardData?.seedRound || "0"}
              onAmountChange={(amount) =>
                handleAmountChange("seedRound", amount)
              }
              field={"seedRound"}
              colorCardData={colorCardData}
              isInvestor={true}
              noRupee={true}
            />
          </div>
          <button
            className={`align-self-end btn-base investor`}
            onClick={handleSaveAll}
          >
            {loading ? (
              <SpinnerBS
                colorClass={"text-dark"}
                spinnerSizeClass="spinner-border-sm"
              />
            ) : (
              "Save all"
            )}
          </button>
        </div>
        {/* Right side content */}
        <div className="right__content">
          <RecommendationCard isInvestor={true} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
