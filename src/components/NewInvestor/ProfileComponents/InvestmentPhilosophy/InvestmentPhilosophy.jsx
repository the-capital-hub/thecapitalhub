import React from "react";
import "./InvestmentPhilosophy.scss";
import ExperienceModal from "./Modals/ExperienceModal/ExperienceModal";
import EducationModal from "./Modals/EducationModal/EducationModal";
import Education from "./Components/Education/Education";
import RecentExperience from "./Components/RecentExperience/RecentExperience";
import InvestmentDetails from "./Components/InvestmentDetails/InvestmentDetails";
import InvestmentPhilosophyInfo from "./Components/InvestmentPhilosophyInfo/InvestmentPhilosophyInfo";

export default function InvestmentPhilosophy() {
  return (
    <section className="investment_philosophy shadow-sm">
      <h2 className="green_underline typography">Investment Philosophy</h2>

      {/* Investment Philosophy Info */}
      <InvestmentPhilosophyInfo />

      {/* Recent Experience */}
      <RecentExperience />

      {/* Education */}
      <Education />

      {/* Investment Details */}
      <InvestmentDetails />
      {/* <button className="green_button btn mx-3">
        Book Your Appointment Now
      </button> */}

      {/* Modals */}
      <ExperienceModal />
      <EducationModal />
    </section>
  );
}
