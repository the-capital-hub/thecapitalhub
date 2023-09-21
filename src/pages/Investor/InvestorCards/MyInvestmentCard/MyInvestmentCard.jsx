import React from "react";
import "./MyInvestmentCard.scss";
import InvestedIcon from "../../../../Images/investorIcon/Ellipse 192.svg";

const MyInvestmentCard = ({ company, isInterests = false }) => {
  return (
    <div className="investment-card-container border rounded-3">
      <div className="d-flex flex-column py-2 px-3 border-bottom ">
        <div className="left">
          <img src={company.logo} alt="Logo" className="logo" />
          <div className="text">
            <strong className="green_underline">{company.name}</strong>
          </div>
        </div>
        {!isInterests ? (
          <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
            {company.description}
          </p>
        ) : (
          <div className="para mt-2">
            <p className="m-0 ask__heading ">
              <strong>Ask:</strong>
            </p>
            <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
              {company.description}
            </p>
          </div>
        )}
      </div>

      {!isInterests ? (
        <div className="bottom d-flex align-items-center py-4 px-3 gap-2 ">
          <img src={InvestedIcon} alt="Image" className="small-image" />
          <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
            Invested:{" "}
            <span className="equity text-decoration-underline ms-2 ">
              {company.equity}%
            </span>{" "}
            <strong>Equity</strong>
          </p>
        </div>
      ) : (
        <div className="">
          <div className="d-flex align-items-center py-2 px-3 border-bottom">
            <p className="m-0">
              <strong>My Commitment:</strong> EA
            </p>
          </div>
          <div className="bottom d-flex align-items-center py-2 px-3 gap-2">
            <img src={InvestedIcon} alt="Image" className="small-image" />
            <p className="m-0 " style={{ color: "rgba(74, 74, 74, 1)" }}>
              Invested:{" "}
              <span className="equity text-decoration-underline ms-2 ">
                {company.equity}%
              </span>{" "}
              <strong>Equity</strong>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyInvestmentCard;
