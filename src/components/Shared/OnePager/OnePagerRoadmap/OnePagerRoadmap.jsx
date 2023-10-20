import React from "react";
import IconCalendar from "../../../InvestorOneLink/SvgIcons/IconCalendar";

export default function OnePagerRoadmap() {
  return (
    <div className="onePager_roadmap">
      <h4 className="main_color">Roadmap</h4>
      <div className="two_col_grid row-gap-4 column-gap-5">
        {/* Roadmap 1 */}
        <fieldset>
          <legend className="main_color">Date</legend>
          <div className="onePager_input d-flex justify-content-between align-items-center main_border">
            <input
              type="text"
              readOnly
              value={""}
              className="date_input border-0 w-100"
            />
            <IconCalendar />
          </div>
        </fieldset>
        <fieldset>
          <legend className="main_color">Milestone 1</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>

        {/* Roadmap 2 */}
        <fieldset>
          <legend className="main_color">Date</legend>
          <div className="onePager_input d-flex justify-content-between align-items-center main_border">
            <input
              type="text"
              readOnly
              value={""}
              className="date_input border-0 w-100"
            />
            <IconCalendar />
          </div>
        </fieldset>
        <fieldset>
          <legend className="main_color">Milestone 2</legend>
          <input
            type="text"
            readOnly
            value={""}
            className="onePager_input shadow-sm main_border"
          />
        </fieldset>

        {/* Roadmap 3 */}
        <fieldset>
          <legend className="main_color">Date</legend>
          <div className="onePager_input d-flex justify-content-between align-items-center main_border">
            <input
              type="text"
              readOnly
              value={""}
              className="date_input border-0 w-100"
            />
            <IconCalendar />
          </div>
        </fieldset>
        <fieldset>
          <legend className="main_color">Milestone 3</legend>
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
