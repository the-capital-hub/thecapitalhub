import React from "react";
import Default from "../../../Images/Investor/searchResult/business-and-trade.png";
import "./ResultBar.scss";
import { Link } from "react-router-dom";

export default function ResultBar({ image, name, description, isCompany, id }) {
  return (
    <Link
      className="Link"
      to={isCompany ? `/investor/company-profile/${id}` : ""}
    >
      <div className="result__bar d-flex align-items-center gap-3 p-3">
        <img
          src={image || Default}
          alt=""
          style={{ width: "80px", height: "80px", objectFit: "cover" }}
          className="rounded-circle border border-dangers"
        />
        <div className="result__item__text d-flex flex-column">
          <h4>{name || "BondLink"}</h4>
          <p className="m-0" style={{ color: "rgba(74, 74, 74, 1)" }}>
            {description ||
              "One classical breakdown of economic activity distinguishes three sectors."}
          </p>
        </div>
      </div>
    </Link>
  );
}
