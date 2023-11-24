import React from "react";
import "./LookingForFund.scss";

export default function LookingForFund() {
  return (
    <div className="looking_for_fund_wrapper bg-black text-white py-4">
      <div className="d-flex align-items-center justify-content-around flex-wrap gap-3">
        <p className="m-0 fs-3">Looking for Funding?</p>

        <button
          type="button"
          className="btn orange_button d-flex align-items-center justify-content-center"
        >
          <span>Click Here</span>
        </button>
      </div>
    </div>
  );
}
