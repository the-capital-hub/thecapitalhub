import React from "react";

const LEGENDS = {
  importanceOfManagament: "What is the importance of Management?",
  roleAsAInvestor:
    "What role do you play as an Investor? Are you more passive or active?",
  founderAlmaMaterMatters: "How much does Founder's alma mater matter?",
  sectorPreferences: "What are your Industries of preference?",
};

export default function PhilosophyDetails({
  founderAlmaMaterMatters,
  roleAsAInvestor,
  importanceOfManagament,
  sectorPreferences,
}) {
  return (
    <div className="philosophy_details d-flex flex-column gap-4">
      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.sectorPreferences}
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

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.importanceOfManagament}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">{importanceOfManagament}</p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.roleAsAInvestor}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">{roleAsAInvestor}</p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.founderAlmaMaterMatters}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">{founderAlmaMaterMatters}</p>
      </fieldset>
    </div>
  );
}
