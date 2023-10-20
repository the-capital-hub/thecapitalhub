import React from "react";
import { Link } from "react-router-dom";
import IconEditCapital from "../../../InvestorOneLink/SvgIcons/IconEditCapital";

export default function OnePagerCompanyAbout({
  description,
  problem,
  solution,
  marketLandscape,
  showEdit,
}) {
  return (
    <div className="onePager_company_about gap-5 px-3 px-lg-4 py-5 bg-white rounded-4 border shadow-sm">
      <fieldset className="span_full">
        <legend className="d-flex align-items-center pb-2">
          Brief Introduction (Up to 250 characters ){" "}
          {showEdit && (
            <Link
              to={"/onelink/edit"}
              className="text-black text-decoration-none fs-5 ms-auto d-flex align-items-center gap-2"
            >
              <IconEditCapital />
              <span>Edit</span>
            </Link>
          )}
        </legend>

        <textarea
          type="text"
          readOnly
          value={description || "Brief Introduction"}
          className="onePager_input about_input shadow-sm"
        />
      </fieldset>

      <fieldset>
        <legend>Problem</legend>
        <textarea
          type="text"
          readOnly
          value={problem || "Problem"}
          className="onePager_input about_input shadow-sm"
        />
      </fieldset>

      <fieldset>
        <legend>Solution</legend>
        <textarea
          type="text"
          readOnly
          value={solution || "Solution"}
          className="onePager_input about_input shadow-sm"
        />
      </fieldset>

      <fieldset className="span_full">
        <legend>Market Landscape</legend>
        <textarea
          type="text"
          readOnly
          value={"Market Landscape"}
          className="onePager_input about_input shadow-sm"
        />
      </fieldset>
    </div>
  );
}
