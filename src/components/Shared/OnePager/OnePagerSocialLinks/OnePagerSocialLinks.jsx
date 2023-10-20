import React from "react";

export default function OnePagerSocialLinks() {
  return (
    <div className="social_links">
      <h4 className="main_color">Social Links</h4>
      <div className="three_col_grid gap-3">
        <fieldset>
          <legend className="main_color">Competitor name 1</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>

        <fieldset>
          <legend className="main_color">Competitor name 2</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>

        <fieldset>
          <legend className="main_color">Competitor name 3</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>
      </div>
    </div>
  );
}
