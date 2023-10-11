import React, { useState, useEffect } from "react";
import "./EditInvestorCompanyProfilePage.scss";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import CompanyProfileForm from "../../../components/Investor/CompanyProfilePageComponents/CompanyProfileForm";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import RaghuImage from "../../../Images/aboutUs/Raghu.jpeg";
import CoinIcon from "../../../Images/investorView/Rectangle.png";
import ColorCard from "../../../components/Investor/InvestorGlobalCards/ColoredCards/ColorCard";
import { getInvestorById, postInvestorData } from "../../../Service/user";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";

export default function EditInvestorCompanyProfilePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [colorCardData, setColorCardData] = useState(null);

  const [field, setField] = useState("last_round_investment");
  const [companyData, setCompanyData] = useState([]);
  const [isBioEditable, setIsBioEditable] = useState(false);
  const [companyDescription, setCompanyDescription] = useState(null);

  useEffect(() => {
    getInvestorById(loggedInUser.investor).then(({ data }) => {
      setCompanyData(data);
      setColorCardData({
        averageInvestment: data.colorCard.averageInvestment,
        total_investment: data.colorCard.total_investment,
        no_of_investments: data.colorCard.no_of_investments,
        minimumTicketsSize: data.colorCard.minimumTicketsSize,
        maximumTicketsSize: data.colorCard.maximumTicketsSize,
        seedRound: data.colorCard.seedRound,
      });
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

  // Handle Form submit
  function handleFormSubmit(e) {
    e.preventDefault();
  }

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

  return (
    <MaxWidthWrapper>
      <div className="editinvestorCompanyProfilePage__wrapper p-3 border-start">
        {/* Main content */}
        <div className="main__content">
          <SmallProfileCard text={"Company Profile"} />
          {/* Company profile form */}
          <div className="bg-white rounded-3 p-5 border">
            <CompanyProfileForm companyData={companyData} investor={true} />
          </div>
          {/* Company Description */}
          <div className="paragraph__component bg-white rounded-3 p-5 d-flex flex-column gap-4 border">
            <div className="d-flex flex-column-reverse flex-sm-row align-items-sm-center justify-content-between">
              <h2>Company Description</h2>
              <span className="ms-auto">
                <div className="d-flex gap-2">
                  <button
                    className={`align-self-end btn-base investor ${
                      isBioEditable ? "btn-sm" : ""
                    }`}
                    onClick={() => setIsBioEditable(!isBioEditable)}
                  >
                    {isBioEditable ? "Cancel" : "Edit"}
                    {/* <CiEdit /> */}
                  </button>
                  {isBioEditable && (
                    <button
                      className={`align-self-end btn-base investor ${
                        isBioEditable ? "btn-sm" : ""
                      }`}
                      onClick={(e) => submitBioHandler(e)}
                    >
                      Save
                      {/* <CiSaveUp2 /> */}
                    </button>
                  )}
                </div>
              </span>
            </div>
            {/* <p>
              A little about myself. “Dejection is a sign of failure but it
              becomes the cause of success”. I wrote this when I was 16 years old
              and that’s exactly when I idealised the reality of life. In this
              current world, success is defined in many ways, some of which
              include money, fame and power. I believe that success is just the
              beginning of a new problem. Every step of our lives we work hard to
              solve an issue and every time we end up with a new problem.
            </p> */}
            {isBioEditable ? (
              <textarea
                value={companyDescription}
                name="bio"
                onChange={(e) => setCompanyDescription(e.target.value)}
              />
            ) : (
              <p className="small_typo">
                {companyDescription ||
                  "Click on edit to add company description"}
              </p>
            )}
            {/* <Link className="see__more align-self-end">See more</Link> */}
          </div>
          {/* When integrating with backend replace below code with CoreTeam Component */}
          {/* Core Team */}
          <div className="core__team bg-white rounded-3 p-5 d-flex flex-column gap-4 border">
            <div className="d-flex align-items-center justify-content-between">
              <h2>Core Team</h2>
              <Link className="see__more align-self-end">See more</Link>
            </div>
            <div className="team__cards__container d-flex align-items-center gap-5 flex-wrap">
              <div
                className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
                style={{ backgroundColor: "#EDEDED" }}
              >
                <img
                  src={RaghuImage}
                  alt={"name"}
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                />
                <h5>Raghu</h5>
                <p>Web Developer</p>
              </div>
              <div
                className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
                style={{ backgroundColor: "#EDEDED" }}
              >
                <img
                  src={RaghuImage}
                  alt={"name"}
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                />
                <h5>Raghu</h5>
                <p>Web Developer</p>
              </div>
              <div
                className="p-4 d-flex flex-column  align-items-center gap-3 rounded-5"
                style={{ backgroundColor: "#EDEDED" }}
              >
                <img
                  src={RaghuImage}
                  alt={"name"}
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                />
                <h5>Raghu</h5>
                <p>Web Developer</p>
              </div>
              <div
                className="p-4 d-flex flex-column  align-items-center gap-3 rounded-5"
                style={{ backgroundColor: "#EDEDED" }}
              >
                <img
                  src={RaghuImage}
                  alt={"name"}
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                />
                <h5>Raghu</h5>
                <p>Web Developer</p>
              </div>
            </div>
          </div>
          {/* When integrating with backend replace below code with Milestones Component */}
          {/* Milestones */}
          <div className="milestones__component bg-white rounded-3 p-5 d-flex flex-column gap-4 border">
            <div className="d-flex align-items-center justify-content-between">
              <h2>Milestones</h2>
              <Link className="see__more align-self-end">See more</Link>
            </div>
            <div className="milestone__cards__container d-flex align-items-center gap-5 flex-wrap">
              <div
                className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
                style={{
                  backgroundColor: "#EDEDED",
                  width: "240px",
                  height: "260px",
                }}
              >
                {/* <img
                  src={RaghuImage}
                  alt={"name"}
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                /> */}
                <Link className="see__more orange align-self-end mt-auto">
                  See more
                </Link>
              </div>
              <div
                className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
                style={{
                  backgroundColor: "#EDEDED",
                  width: "240px",
                  height: "260px",
                }}
              >
                {/* <img
                    src={RaghuImage}
                    alt={"name"}
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-circle"
                  /> */}
                <Link className="see__more orange align-self-end mt-auto">
                  See more
                </Link>
              </div>
              <div
                className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
                style={{
                  backgroundColor: "#EDEDED",
                  width: "240px",
                  height: "260px",
                }}
              >
                {/* <img
                    src={RaghuImage}
                    alt={"name"}
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-circle"
                  /> */}
                <Link className="see__more orange align-self-end mt-auto">
                  See more
                </Link>
              </div>
              <div
                className="p-4 d-flex flex-column align-items-center gap-3 rounded-5"
                style={{
                  backgroundColor: "#EDEDED",
                  width: "240px",
                  height: "260px",
                }}
              >
                {/* <img
                    src={RaghuImage}
                    alt={"name"}
                    style={{ width: "50px", height: "50px" }}
                    className="rounded-circle"
                  /> */}
                <Link className="see__more orange align-self-end mt-auto">
                  See more
                </Link>
              </div>
            </div>
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
        </div>
        {/* Right side content */}
        <div className="right__content">
          <RecommendationCard isInvestor={true} />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
