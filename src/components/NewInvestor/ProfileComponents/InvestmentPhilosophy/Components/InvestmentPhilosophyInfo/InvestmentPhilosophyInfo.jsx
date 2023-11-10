import React, { useState } from "react";
import {
  loginSuccess,
  selectCompanyFounderId,
  selectFounderAlmaMaterMatters,
  selectImportanceOfManagament,
  selectLoggedInUserId,
  selectRoleAsAInvestor,
  selectUserSectorPreferences,
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

const LEGENDS = [
  "What is the importance of management?",
  "What role do you play as an investor? Are you more passive or active?",
  "How much does founder's alma mater matter?",
];

export default function InvestmentPhilosophyInfo() {
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const companyFounderId = useSelector(selectCompanyFounderId);
  const userSectorPreferences = useSelector(selectUserSectorPreferences);
  const importanceOfManagament = useSelector(selectImportanceOfManagament);
  const roleAsAInvestor = useSelector(selectRoleAsAInvestor);
  const founderAlmaMaterMatters = useSelector(selectFounderAlmaMaterMatters);

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

    const { importanceOfManagament, roleAsAInvestor, founderAlmaMaterMatters } =
      e.target;

    let updatedData = {
      importanceOfManagament: importanceOfManagament.value,
      roleAsAInvestor: roleAsAInvestor.value,
      founderAlmaMaterMatters: founderAlmaMaterMatters.value,
      sectorPreferences: selectedSectors,
    };

    console.log("sending to server", updatedData);

    try {
      const { data } = await updateUserAPI(updatedData);
      console.log("Response", data.data);
      dispatch(loginSuccess(data.data));
      setLoading(false);
      setIsEditing(!isEditing);
      // Alert
      setAlert({ success: "Changes Saved" });
      setTimeout(() => {
        setAlert(null);
      }, 2000);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setIsEditing(!isEditing);
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
              className="edit_button"
              onClick={() => setIsEditing(!isEditing)}
              type="button"
            >
              {isEditing ? "Cancel" : "Edit"}
              <CiEdit />
            </button>
            {isEditing && (
              <button
                className="edit_button"
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
            <legend>What are your industries of preference?</legend>
            <SectorPreferences
              isEditing={isEditing}
              setSelectedSectors={setSelectedSectors}
            />
          </fieldset>

          {/* Text fields */}
          <InfoField
            data={importanceOfManagament}
            isEditing={isEditing}
            legend={LEGENDS[0]}
            name={"importanceOfManagament"}
            key={"importanceOfManagament"}
          />

          <InfoField
            data={roleAsAInvestor}
            isEditing={isEditing}
            legend={LEGENDS[1]}
            name={"roleAsAInvestor"}
            key={"roleAsAInvestor"}
          />

          <InfoField
            data={founderAlmaMaterMatters}
            isEditing={isEditing}
            legend={LEGENDS[2]}
            name={"founderAlmaMaterMatters"}
            key={"founderAlmaMaterMatters"}
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
