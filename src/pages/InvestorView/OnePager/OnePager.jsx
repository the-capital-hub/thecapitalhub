import { useState } from "react";
import "./OnePager.scss";
import { CompanyDetails } from "../../../components/InvestorView";

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
    </div>
  );
};

export default OnePager;
