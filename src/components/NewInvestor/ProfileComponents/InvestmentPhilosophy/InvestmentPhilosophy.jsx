import React, { useState } from "react";
import { postInvestorData } from "../../../../Service/user";
import { useSelector } from "react-redux";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
// import linkSectorIcon from "../../../../Images/Investor/Profile/link_sector.png";
// import educationIcon from "../../../../Images/Investor/Profile/iit_education.svg";
import "./InvestmentPhilosophy.scss";
import ExperienceModal from "./Modals/ExperienceModal/ExperienceModal";
import EducationModal from "./Modals/EducationModal/EducationModal";
import {
  selectCompanyFounderId,
  selectLoggedInUserId,
  selectUserInvestmentPhilosophy,
} from "../../../../Store/features/user/userSlice";
import Education from "./Components/Education/Education";
import RecentExperience from "./Components/RecentExperience/RecentExperience";
import InvestmentDetails from "./Components/InvestmentDetails/InvestmentDetails";

export default function InvestmentPhilosophy() {
  // Fetch from store
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const companyFounderId = useSelector(selectCompanyFounderId);
  const userInvestmentPhilosophy = useSelector(selectUserInvestmentPhilosophy);

  // States Investment Philosophy
  const [isInvestmentPhilosophy, setIsInvestmentPhilosophy] = useState(false);
  const [investmentPhilosophy, setInvestmentPhilosophy] = useState(
    userInvestmentPhilosophy || ""
  );

  // Submit investment Philosophy
  const submitInvestmentPhilosophyChange = async () => {
    try {
      const { data } = await postInvestorData({
        founderId: loggedInUserId,
        investmentPhilosophy: investmentPhilosophy,
      });
      console.log(data);
      setIsInvestmentPhilosophy(!isInvestmentPhilosophy);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <section className="investment_philosophy shadow-sm">
      <h2 className="green_underline typography">Investment Philosophy</h2>
      {companyFounderId === loggedInUserId && (
        <span className="ms-auto">
          <button
            className="edit_button"
            onClick={() => setIsInvestmentPhilosophy(!isInvestmentPhilosophy)}
          >
            {isInvestmentPhilosophy ? "Cancel" : "Edit"}
            <CiEdit />
          </button>
          {isInvestmentPhilosophy && (
            <button
              className="ms-2 edit_button"
              onClick={() => submitInvestmentPhilosophyChange()}
            >
              Save <CiSaveUp2 />
            </button>
          )}
        </span>
      )}

      {/* Description */}
      <div className="d-flex flex-column flex-md-row gap-2 w-100 px-4 py-2">
        <p>Description: </p>
        {isInvestmentPhilosophy ? (
          <textarea
            value={investmentPhilosophy}
            name="investmentPhilosophy"
            onChange={(e) => setInvestmentPhilosophy(e.target.value)}
          />
        ) : (
          <p className="text-secondary">
            {investmentPhilosophy ||
              "Click on edit to add Investment Philosophy"}
          </p>
        )}
      </div>

      {/* Recent Experience */}
      <RecentExperience />

      {/* Education */}
      <Education />

      {/* Investment Details */}
      <InvestmentDetails />
      <button className="green_button btn mx-3">
        Book Your Appointment Now
      </button>

      {/* Modals */}
      <ExperienceModal />
      <EducationModal />
    </section>
  );
}
