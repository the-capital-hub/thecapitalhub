import React from "react";
import IconCalendar from "../../../InvestorOneLink/SvgIcons/IconCalendar";
import { Link } from "react-router-dom";
import IconEditCapital from "../../../InvestorOneLink/SvgIcons/IconEditCapital";

export default function OnePagerCompanyInfo({
  company,
  location,
  startedAtDate,
  keyFocus,
  socialLinks,
  showEdit,
}) {
  const { website, ...otherLinks } = socialLinks;
  const links = Object.values(otherLinks);
  // console.log(links);

  return (
    <div className="onePager_company_info d-flex flex-column gap-4 px-3 px-lg-4 py-5 bg-white rounded-4 border shadow-sm">
      {/* Startup Name */}
      <fieldset>
        <legend className="d-flex align-items-center pb-2">
          Startup Name
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
        <input
          type="text"
          readOnly
          value={company}
          className="onePager_input shadow-sm"
        />
      </fieldset>

      {/* location and date */}
      <div className="d-flex flex-column flex-md-row align-items-center gap-4">
        <fieldset className="w-100">
          <legend>City, Country</legend>
          <input
            type="text"
            readOnly
            value={location}
            className="onePager_input shadow-sm"
          />
        </fieldset>
        <fieldset className="w-100">
          <legend>Founded Date</legend>
          <div className="onePager_input d-flex justify-content-between align-items-center shadow-sm">
            <input
              type="text"
              readOnly
              value={startedAtDate}
              className="date_input border-0 w-100"
            />
            <IconCalendar />
          </div>
        </fieldset>
      </div>

      {/* Tags */}
      <fieldset>
        <legend>Tags</legend>
        <input
          type="text"
          readOnly
          value={keyFocus}
          className="onePager_input shadow-sm"
        />
      </fieldset>

      {/* Website Link */}
      <fieldset>
        <legend>Website Link</legend>
        <input
          type="url"
          readOnly
          value={website}
          className="onePager_input shadow-sm text-break"
        />
      </fieldset>

      {/* Social Links */}
      <fieldset className="">
        <legend>Social Links</legend>

        <div className="d-flex align-items-center gap-3 flex-wrap">
          {links.map((link, index) => {
            return (
              <div
                className="onePager_input d-flex justify-content-between align-items-center shadow-sm visit_link"
                key={`${index}`}
              >
                <input
                  type="text"
                  readOnly
                  value={link}
                  className="border-0 w-75 text-break link__text__clip"
                  style={{ outline: "none" }}
                />
                <a
                  href={link}
                  target="_blank"
                  className="btn-capital px-4 text-decoration-none visit_btn"
                >
                  Visit
                </a>
              </div>
            );
          })}
        </div>
      </fieldset>
    </div>
  );
}
