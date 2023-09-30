import React, { useState, useEffect } from "react";
import "./CompanyProfilePage.scss";
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
import { getStartupByFounderId, postStartUpData } from "../../../Service/user";

export default function CompanyProfilePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [colorCardData, setColorCardData] = useState(null);

  const [companyData, setCompanyData] = useState([]);
  const [isBioEditable, setIsBioEditable] = useState(false);
  const [companyDescription, setCompanyDescription] = useState(null);
  
  useEffect(() => {
    if (!loggedInUser?.investor) {
      getStartupByFounderId(loggedInUser._id).then(({ data }) => {
        setCompanyData(data);
        setCompanyDescription(data.description)
        setColorCardData({
          last_round_investment: data.colorCard.last_round_investment,
          total_investment: data.colorCard.total_investment,
          no_of_investers: data.colorCard.no_of_investers,
          fund_ask: data.colorCard.fund_ask,
          valuation: data.colorCard.valuation,
          raised_funds: data.colorCard.raised_funds,
        });
      });
    }
  }, []);

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

  // Handle Description submit
  const submitBioHandler = async (e) => {
    e.preventDefault();
    const companyData = {
      description: companyDescription,
      founderId: loggedInUser._id,
    }
    try {
      const response = await postStartUpData(companyData);
      if(response.status === 200) {
        setIsBioEditable(false);
      }
    } catch (error) {
      console.log(error);
    }
  }


  return (
    <div className="companyProfilePage__wrapper">
      {/* Main content */}
      <div className="main__content">
        <SmallProfileCard text={"Company Profile"} />

        <div className="profile__form bg-white rounded-5 p-5">
          <CompanyProfileForm companyData={companyData} />
        </div>

        {/* Company Description */}
        <div className="paragraph__component bg-white rounded-5 p-5 d-flex flex-column gap-4">
          <div className="d-flex align-items-center justify-content-between">
            <h2>Company Description</h2>

            <span className="ms-auto">
              <button className="edit__btn" onClick={() => setIsBioEditable(!isBioEditable)}>
                {isBioEditable ? "Cancel" : "Edit"}
                <CiEdit />
              </button>
              {isBioEditable && (
                <button
                  className="ms-2 edit__btn"
                  onClick={e => submitBioHandler(e)}
                >
                  Save <CiSaveUp2 />
                </button>
              )}
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
              {companyDescription || "Click on edit to add company description"}
            </p>
          )}
          <Link className="see__more align-self-end">See more</Link>
        </div>

        {/* Core Team */}
        <div className="core__team bg-white rounded-5 p-5 d-flex flex-column gap-4">
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

        {/* Milestones */}
        <div className="milestones__component bg-white rounded-5 p-5 d-flex flex-column gap-4">
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
            text="Last round investment"
            image={CoinIcon}
            amount={colorCardData?.last_round_investment || ""}
            onAmountChange={(amount) =>
              handleAmountChange("last_round_investment", amount)
            }
            field={"last_round_investment"}
            colorCardData={colorCardData}
          />
          <ColorCard
            color="white"
            background="#DAC191"
            text="Total Investment"
            image={CoinIcon}
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
            image={CoinIcon}
            amount={colorCardData?.no_of_investers || ""}
            onAmountChange={(amount) =>
              handleAmountChange("no_of_investers", amount)
            }
            field={"no_of_investers"}
            colorCardData={colorCardData}
          />
          <ColorCard
            color="white"
            background="#2B2B2B"
            text="Fund ask"
            image={CoinIcon}
            amount={colorCardData?.fund_ask || ""}
            onAmountChange={(amount) => handleAmountChange("fund_ask", amount)}
            field={"fund_ask"}
            colorCardData={colorCardData}
          />
          <ColorCard
            color="white"
            background="#FF7373"
            text="Valuation"
            image={CoinIcon}
            amount={colorCardData?.valuation || ""}
            onAmountChange={(amount) => handleAmountChange("valuation", amount)}
            field={"valuation"}
            colorCardData={colorCardData}
          />
          <ColorCard
            color="white"
            background="#9198DA"
            text="Raised funds"
            image={CoinIcon}
            amount={colorCardData?.raised_funds || ""}
            onAmountChange={(amount) =>
              handleAmountChange("raised_funds", amount)
            }
            field={"raised_funds"}
            colorCardData={colorCardData}
          />
        </div>
      </div>

      {/* Right side content */}
      <div className="right__content">
        <RecommendationCard />
        <NewsCorner />
      </div>
    </div>
  );
}
