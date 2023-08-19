import React from "react";
import "./FundAsking.scss";
import PramodSq from "../../../../../Images/PramodSqare.png";

const FundAsking = ({ company, page }) => {
  return (
    <>
      <div className="row fund_asking_container">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Funding Ask (in lakhs)</h5>
              <img src={PramodSq} alt="image" />
              <hr />
              <div className="amount_text">
                {page === "oneViewEdit" ? (
                  <input placeholder={company?.fundingAsk || 10000} />
                ) : (
                  <h6>{company?.fundingAsk || 10000}</h6>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FundAsking;
