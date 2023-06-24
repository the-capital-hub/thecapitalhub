import React from "react";
import ArrowIcon from "../../../../Images/investorIcon/Arrow.svg";
import './style.css'

const SmallProfileCard = ({text}) => {
  const formatDate = (dateString) => {
    const options = { weekday: "short", month: "long", day: "numeric" };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };
  const formattedDate = formatDate("2023-06-22");

  return (
    <div className="container">
      <div className="row small_card_row">
        <div className="col-6">
          <div className="box boxOne flex_content">
            <h2 className="typography">Hello, Mr. Pramod</h2>
            <span className="smallest_typo">{formattedDate}</span>
          </div>
        </div>
        <div className="col-6">
          <div className="box boxTwo flex_content">
            <img src={ArrowIcon} alt="arrow" />
            <h2 className="typography">{text ? text :"My Profile"}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SmallProfileCard;
