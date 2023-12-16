import React from "react";
import { useOutletContext } from "react-router-dom";
import { PhilosophyQuestions } from "../../../constants/Investor/ProfilePage";

export default function PhilosophyDetails() {
  const { investor } = useOutletContext();
  const { investmentPhilosophy, sectorPreferences } = investor;

  return (
    <div className="philosophy_details d-flex flex-column gap-4">
      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          What are your Industries of preference?
        </legend>
        <div className="d-flex align-items-center gap-3 flex-wrap py-4">
          {sectorPreferences?.map((sector) => {
            return (
              <span key={sector} className="sector_tag">
                {sector}
              </span>
            );
          })}
        </div>
      </fieldset>

      {Object.keys(PhilosophyQuestions).map((question, index) => {
        return (
          <fieldset className="border rounded-3 shadow-sm" key={question}>
            <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
              {PhilosophyQuestions[question]}
            </legend>
            <p className="m-0 fw-light fs-6 py-4">
              {investmentPhilosophy[question]}
            </p>
          </fieldset>
        );
      })}
    </div>
  );
}
