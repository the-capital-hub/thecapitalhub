import React, { useState } from "react";
import {
  loginSuccess,
  selectAssessCompanyCompetitiveAdvantage,
  selectCompanyFounderId,
  selectEvaluateCompanyGrowthPotential,
  selectFounderAlmaMaterMatters,
  selectGuideOnSellingInvestments,
  selectImportanceOfManagament,
  selectIndustryTrendsHoldInYourStrategy,
  selectLoggedInUserId,
  selectMacroeconomicFactorsInfluenceInvestments,
  selectRiskManagementInInvestments,
  selectRoleAsAInvestor,
  selectTimingInInvestmentDecisions,
  selectUserSectorPreferences,
  selectWeightGaveToTechnologicalInnovation,
} from "../../../../../../Store/features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
// import { postInvestorData } from "../../../../../../Service/user";
import "./InvestmentPhilosophyInfo.scss";
import InfoField from "./InfoField/InfoField";
import SectorPreferences from "./SectorPreferences/SectorPreferences";
import { updateUserAPI } from "../../../../../../Service/user";
import SpinnerBS from "../../../../../Shared/Spinner/SpinnerBS";
import InvestorAfterSuccessPopUp from "../../../../../PopUp/InvestorAfterSuccessPopUp/InvestorAfterSuccessPopUp";
import ErrorPopUp from "../../../../../PopUp/ErrorPopUp/ErrorPopUp";
import { TEXT_QUESTIONS } from "../../../../../../constants/Investor/ProfilePage";

export default function InvestmentPhilosophyInfo() {
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const companyFounderId = useSelector(selectCompanyFounderId);
  const userSectorPreferences = useSelector(selectUserSectorPreferences);
  const importanceOfManagament = useSelector(selectImportanceOfManagament);
  const roleAsAInvestor = useSelector(selectRoleAsAInvestor);
  const founderAlmaMaterMatters = useSelector(selectFounderAlmaMaterMatters);
  const riskManagementInInvestments = useSelector(
    selectRiskManagementInInvestments
  );
  const guideOnSellingInvestments = useSelector(
    selectGuideOnSellingInvestments
  );
  const timingInInvestmentDecisions = useSelector(
    selectTimingInInvestmentDecisions
  );
  const macroeconomicFactorsInfluenceInvestments = useSelector(
    selectMacroeconomicFactorsInfluenceInvestments
  );
  const assessCompanyCompetitiveAdvantage = useSelector(
    selectAssessCompanyCompetitiveAdvantage
  );
  const industryTrendsHoldInYourStrategy = useSelector(
    selectIndustryTrendsHoldInYourStrategy
  );
  const evaluateCompanyGrowthPotential = useSelector(
    selectEvaluateCompanyGrowthPotential
  );
  const weightGaveToTechnologicalInnovation = useSelector(
    selectWeightGaveToTechnologicalInnovation
  );

  const dispatch = useDispatch();

  // Local states
  const [isEditing, setIsEditing] = useState(false);
  const [selectedSectors, setSelectedSectors] = useState(userSectorPreferences);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  // Submit investment Philosophy
  const submitInvestmentPhilosophyChange = async (e) => {
    e.preventDefault();

    // Set loading
    setLoading(true);

    const {
      importanceOfManagament,
      roleAsAInvestor,
      founderAlmaMaterMatters,
      riskManagementInInvestments,
      guideOnSellingInvestments,
      timingInInvestmentDecisions,
      macroeconomicFactorsInfluenceInvestments,
      assessCompanyCompetitiveAdvantage,
      industryTrendsHoldInYourStrategy,
      evaluateCompanyGrowthPotential,
      weightGaveToTechnologicalInnovation,
    } = e.target;

    let updatedData = {
      importanceOfManagament: importanceOfManagament?.value,
      roleAsAInvestor: roleAsAInvestor?.value,
      founderAlmaMaterMatters: founderAlmaMaterMatters?.value,
      riskManagementInInvestments: riskManagementInInvestments?.value,
      guideOnSellingInvestments: guideOnSellingInvestments?.value,
      timingInInvestmentDecisions: timingInInvestmentDecisions?.value,
      macroeconomicFactorsInfluenceInvestments:
        macroeconomicFactorsInfluenceInvestments?.value,
      assessCompanyCompetitiveAdvantage:
        assessCompanyCompetitiveAdvantage?.value,
      industryTrendsHoldInYourStrategy: industryTrendsHoldInYourStrategy?.value,
      evaluateCompanyGrowthPotential: evaluateCompanyGrowthPotential?.value,
      weightGaveToTechnologicalInnovation:
        weightGaveToTechnologicalInnovation?.value,
      sectorPreferences: selectedSectors,
    };

    console.log("sending to server", updatedData);

    try {
      const { data } = await updateUserAPI(updatedData);
      console.log("Response", data.data);
      dispatch(loginSuccess(data.data));
      setLoading(false);
      setIsEditing(false);
      // Alert
      setAlert({ success: "Changes Saved" });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsEditing(false);
      // Alert
      setAlert({ error: "Error saving changes! Please try again." });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    }
  };

  return (
    <>
      <form
        onSubmit={submitInvestmentPhilosophyChange}
        className="d-flex flex-column gap-2"
      >
        {companyFounderId === loggedInUserId && (
          <span
            className="ms-auto d-flex align-items-center gap-3"
            style={{ marginRight: "30px" }}
          >
            <button
              className="btn edit_button"
              onClick={() => setIsEditing(!isEditing)}
              type="button"
            >
              {isEditing ? "Cancel" : "Edit"}
              <CiEdit />
            </button>
            {isEditing && (
              <button
                className="btn edit_button"
                //   onClick={() => submitInvestmentPhilosophyChange()}
                type="submit"
              >
                {loading ? (
                  <SpinnerBS
                    spinnerSizeClass="spinner-border-sm"
                    className={"mx-auto"}
                  />
                ) : (
                  <>
                    Save <CiSaveUp2 />
                  </>
                )}
              </button>
            )}
          </span>
        )}

        {/* Info */}
        <div className="philosophy_info d-flex flex-column gap-4 w-100 px-4 py-2">
          {/* Select field */}
          <fieldset className="">
            <legend>What are your Industries of preference?</legend>
            <SectorPreferences
              isEditing={isEditing}
              setSelectedSectors={setSelectedSectors}
            />
          </fieldset>

          {/* Text fields */}
          <InfoField
            data={importanceOfManagament}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[0]}
            name={"importanceOfManagament"}
            key={"importanceOfManagament"}
            loading={loading}
          />

          <InfoField
            data={roleAsAInvestor}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[1]}
            name={"roleAsAInvestor"}
            key={"roleAsAInvestor"}
            loading={loading}
          />

          <InfoField
            data={founderAlmaMaterMatters}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[2]}
            name={"founderAlmaMaterMatters"}
            key={"founderAlmaMaterMatters"}
            loading={loading}
          />

          <InfoField
            data={riskManagementInInvestments}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[3]}
            name={"riskManagementInInvestments"}
            key={"riskManagementInInvestments"}
            loading={loading}
          />

          <InfoField
            data={guideOnSellingInvestments}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[4]}
            name={"guideOnSellingInvestments"}
            key={"guideOnSellingInvestments"}
            loading={loading}
          />

          <InfoField
            data={timingInInvestmentDecisions}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[5]}
            name={"timingInInvestmentDecisions"}
            key={"timingInInvestmentDecisions"}
            loading={loading}
          />

          <InfoField
            data={macroeconomicFactorsInfluenceInvestments}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[6]}
            name={"macroeconomicFactorsInfluenceInvestments"}
            key={"macroeconomicFactorsInfluenceInvestments"}
            loading={loading}
          />

          <InfoField
            data={assessCompanyCompetitiveAdvantage}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[7]}
            name={"assessCompanyCompetitiveAdvantage"}
            key={"assessCompanyCompetitiveAdvantage"}
            loading={loading}
          />

          <InfoField
            data={industryTrendsHoldInYourStrategy}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[8]}
            name={"industryTrendsHoldInYourStrategy"}
            key={"industryTrendsHoldInYourStrategy"}
            loading={loading}
          />

          <InfoField
            data={evaluateCompanyGrowthPotential}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[9]}
            name={"evaluateCompanyGrowthPotential"}
            key={"evaluateCompanyGrowthPotential"}
            loading={loading}
          />

          <InfoField
            data={weightGaveToTechnologicalInnovation}
            isEditing={isEditing}
            legend={TEXT_QUESTIONS[10]}
            name={"weightGaveToTechnologicalInnovation"}
            key={"weightGaveToTechnologicalInnovation"}
            loading={loading}
          />
        </div>
      </form>
      {alert?.success && (
        <InvestorAfterSuccessPopUp
          successText={alert.success}
          onClose={() => setAlert(null)}
        />
      )}
      {alert?.error && (
        <ErrorPopUp message={alert.error} onClose={() => setAlert(null)} />
      )}
    </>
  );
}
