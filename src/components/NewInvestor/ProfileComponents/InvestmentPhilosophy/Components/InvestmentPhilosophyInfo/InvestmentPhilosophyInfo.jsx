import React, { useState } from "react";
import {
  selectCompanyFounderId,
  selectLoggedInUserId,
  selectUserInvestmentPhilosophy,
} from "../../../../../../Store/features/user/userSlice";
import { useSelector } from "react-redux";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import { postInvestorData } from "../../../../../../Service/user";
import "./InvestmentPhilosophyInfo.scss";
import InfoField from "./InfoField/InfoField";
import SectorPreferences from "./SectorPreferences/SectorPreferences";

const LEGENDS = [
  "What is the importance of management?",
  "What role do you play as an investor? Are you more passive or active?",
  "How much does founder's alma mater matter?",
];

export default function InvestmentPhilosophyInfo() {
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const companyFounderId = useSelector(selectCompanyFounderId);
  const userInvestmentPhilosophy = useSelector(selectUserInvestmentPhilosophy);

  const [isEditing, setIsEditing] = useState(false);
  const [investmentPhilosophy, setInvestmentPhilosophy] = useState(
    userInvestmentPhilosophy
  );

  // Submit investment Philosophy
  const submitInvestmentPhilosophyChange = async () => {
    try {
      const { data } = await postInvestorData({
        founderId: loggedInUserId,
        investmentPhilosophy: investmentPhilosophy,
      });
      console.log(data);
      setIsEditing(!isEditing);
    } catch (error) {
      console.log(error);
    }
  };

  //  Handle Info Change
  function handleInfoChange(e) {
    const { name, value } = e.target;

    // Resize
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + 2 + "px";

    //
  }

  return (
    <div className="d-flex flex-column gap-2">
      {companyFounderId === loggedInUserId && (
        <span className="ms-auto d-flex align-items-center">
          <button
            className="edit_button"
            onClick={() => setIsEditing(!isEditing)}
          >
            {isEditing ? "Cancel" : "Edit"}
            <CiEdit />
          </button>
          {isEditing && (
            <button
              className="edit_button"
              onClick={() => submitInvestmentPhilosophyChange()}
            >
              Save <CiSaveUp2 />
            </button>
          )}
        </span>
      )}

      {/* Info */}
      <div className="philosophy_info d-flex flex-column gap-4 w-100 px-4 py-2">
        {/* Select field */}
        <fieldset className="">
          <legend>What are your industries of preference?</legend>
          <SectorPreferences />
        </fieldset>

        {/* Text fields */}
        <InfoField
          handleInfoChange={handleInfoChange}
          investmentPhilosophy={investmentPhilosophy}
          isEditing={isEditing}
          legend={LEGENDS[0]}
          name={"one"}
          key={"one"}
        />

        <InfoField
          handleInfoChange={handleInfoChange}
          investmentPhilosophy={investmentPhilosophy}
          isEditing={isEditing}
          legend={LEGENDS[1]}
          name={"two"}
          key={"two"}
        />

        <InfoField
          handleInfoChange={handleInfoChange}
          investmentPhilosophy={investmentPhilosophy}
          isEditing={isEditing}
          legend={LEGENDS[2]}
          name={"three"}
          key={"three"}
        />
      </div>
    </div>
  );
}
