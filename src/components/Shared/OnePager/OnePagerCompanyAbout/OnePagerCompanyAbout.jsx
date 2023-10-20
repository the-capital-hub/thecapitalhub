import React from "react";

export default function OnePagerCompanyAbout({
  description,
  problem,
  solution,
  marketLandscape,
}) {
  return (
    <div className="onePager_company_about gap-5 px-3 px-lg-4 py-5 bg-white rounded-4 border shadow-sm">
      <fieldset className="span_full">
        <legend>Brief Introduction (Up to 250 characters )</legend>
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
