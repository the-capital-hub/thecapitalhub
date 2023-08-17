import { useState } from "react";
import "./OnePager.scss";
import {
  Card,
  CompanyDetails,
  ImagePlaceholder,
  MarketCard,
  SimpleCard,
  TeamCard,
  Title,
} from "../../../components/InvestorView";
import OnePagePreviewCard from "../../../components/Investor/InvestorGlobalCards/OneLink/OnePagePreviewCard/OnePagePreviewCard";
import OnePagePreview from "../../../components/Investor/OneLink/OnePagePreview/OnePagePreview";
import Table from "../../../components/Investor/OneLink/Table/Table";
import TeamsCard from "../../../components/InvestorView/TeamsCard/TeamsCard";
import InvestNow from "../InvestNow/InvestNow";

const OnePager = () => {
  const [rupeeHighlight, setRupeeHighlight] = useState(true);
  const [dollarHighlight, setDollarHighlight] = useState(false);

  const changeHighlight = (currency) => {
    if (currency === "rupee") {
      setDollarHighlight(false);
      setRupeeHighlight(true);
    }
    if (currency === "dollar") {
      setDollarHighlight(true);
      setRupeeHighlight(false);
    }
  };

  return (
    <div className="onePager">
      <div className="currency">
        <span
          className={rupeeHighlight && "highlighted"}
          onClick={() => changeHighlight("rupee")}
        >
          ₹
        </span>
        <span
          className={dollarHighlight && "highlighted"}
          onClick={() => changeHighlight("dollar")}
        >
          $
        </span>
      </div>

      <div className="companyDetails">
        <CompanyDetails />
      </div>

      <hr />

      <div className="cards">
        <SimpleCard
          title={"Problem"}
          text={"Enter the problem statement your startup is addressing"}
        />
        <SimpleCard
          title={"Solution"}
          text={"Enter the solution your startup is offering"}
        />
        <SimpleCard
          title={"Competitive Landscape"}
          text={"Mention your competitors"}
        />
      </div>

      <hr />

      <div className="marketCards">
        <Title title="Market (in cr)" />
        <div className="cards">
          <MarketCard title={"TAM"} subtitle={"(Total Advisable Market)"} />
          <MarketCard title={"SAM"} subtitle={"(Service Advisable Market)"} />
          <MarketCard title={"SAM"} subtitle={"(Service Advisable Market)"} />
        </div>
      </div>

      <div className="projections">
        <Title title={"Projections"} />
        <Table hidden={true} />
      </div>

      <div className="team">
        <Title title={"Team"} />
        <div className="cards">
          <TeamsCard />
          <TeamsCard />
          <TeamsCard />
        </div>
      </div>

      <div className="fundingAndContact">
        <div className="left">
          <Title title={"Funding ask (in Lakhs)"} />
          <div className="box">
            <h1>Enter Funding Amount</h1>
            <hr />
            <ImagePlaceholder
              text={
                "Upload image a piechart showing how you utilize the funding amount"
              }
            />
          </div>
        </div>
        <div className="right">
          <InvestNow />
        </div>
      </div>
    </div>
  );
};

export default OnePager;
