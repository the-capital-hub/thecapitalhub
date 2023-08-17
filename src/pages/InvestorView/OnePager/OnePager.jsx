import { useState } from "react";
import "./OnePager.scss";
import {
  Card,
  CompanyDetails,
  MarketCard,
  SimpleCard,
} from "../../../components/InvestorView";

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
        <h4>Market (in crores)</h4>
        <div className="cards">
          <MarketCard title={"TAM"} subtitle={"(Total Advisable Market)"} />
          <MarketCard title={"SAM"} subtitle={"(Service Advisable Market)"} />
          <MarketCard title={"SAM"} subtitle={"(Service Advisable Market)"} />
        </div>
      </div>
    </div>
  );
};

export default OnePager;
