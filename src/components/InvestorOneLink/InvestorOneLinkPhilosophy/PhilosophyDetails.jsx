import React from "react";
import { useOutletContext } from "react-router-dom";

const LEGENDS = {
  importanceOfManagament: "What is the importance of Management?",
  roleAsAInvestor:
    "What role do you play as an Investor? Are you more passive or active?",
  founderAlmaMaterMatters: "How much does Founder's alma mater matter?",
  sectorPreferences: "What are your Industries of preference?",
  riskManagementInInvestments: "How crucial is risk management in investments?",
  guideOnSellingInvestments:
    "What factors guide your decisions on selling investments?",
  timingInInvestmentDecisions:
    "How important is timing in investment decisions?",
  macroeconomicFactorsInfluenceInvestments:
    "How do macroeconomic factors significantly influence your investments?",
  assessCompanyCompetitiveAdvantage:
    "How do you assess a company's competitive advantage?",
  industryTrendsHoldInYourStrategy:
    "What significance do industry trends hold in your strategy?",
  evaluateCompanyGrowthPotential:
    "How do you evaluate a company's growth potential?",
  weightGaveToTechnologicalInnovation:
    "How much weight do you give to technological innovation?",
};

export default function PhilosophyDetails() {
  const { investor } = useOutletContext();
  const {
    founderAlmaMaterMatters,
    roleAsAInvestor,
    importanceOfManagament,
    sectorPreferences,
    riskManagementInInvestments,
    guideOnSellingInvestments,
    timingInInvestmentDecisions,
    macroeconomicFactorsInfluenceInvestments,
    assessCompanyCompetitiveAdvantage,
    industryTrendsHoldInYourStrategy,
    evaluateCompanyGrowthPotential,
    weightGaveToTechnologicalInnovation,
  } = investor;

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

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.riskManagementInInvestments}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">{riskManagementInInvestments}</p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.guideOnSellingInvestments}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">{guideOnSellingInvestments}</p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.timingInInvestmentDecisions}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">{timingInInvestmentDecisions}</p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.macroeconomicFactorsInfluenceInvestments}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">
          {macroeconomicFactorsInfluenceInvestments}
        </p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.assessCompanyCompetitiveAdvantage}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">
          {assessCompanyCompetitiveAdvantage}
        </p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.industryTrendsHoldInYourStrategy}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">
          {industryTrendsHoldInYourStrategy}
        </p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.evaluateCompanyGrowthPotential}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">
          {evaluateCompanyGrowthPotential}
        </p>
      </fieldset>

      <fieldset className="border rounded-3 shadow-sm">
        <legend className="px-3 py-1 rounded-pill bg-white fw-bold">
          {LEGENDS.weightGaveToTechnologicalInnovation}
        </legend>
        <p className="m-0 fw-light fs-6 py-4">
          {weightGaveToTechnologicalInnovation}
        </p>
      </fieldset>
    </div>
  );
}
