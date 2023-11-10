import React from "react";
import DefaultAvatar from "../../../Images/Chat/default-user-avatar.webp";
import "./InvestorOneLinkPhilosophy.scss";
import PhilosophyTable from "../../../components/InvestorOneLink/InvestorOneLinkPhilosophy/PhilosophyTable";
import PhilosophyAbout from "../../../components/InvestorOneLink/InvestorOneLinkPhilosophy/PhilosophyAbout";
import PhilosophyIncorporation from "../../../components/InvestorOneLink/InvestorOneLinkPhilosophy/PhilosophyIncorporation";
import { useOutletContext } from "react-router-dom";
import PhilosophyDetails from "../../../components/InvestorOneLink/InvestorOneLinkPhilosophy/PhilosophyDetails";

export default function InvestorOneLinkInvestment() {
  // Fetch or get from state
  const { company, investor } = useOutletContext();
  const { firstName, lastName, designation, location, profilePicture } =
    investor;
  const { companyName } = company;

  return (
    <div className="investment_philosophy_wrapper mb-5 ps-3 leftBorder">
      <h2 className="mb-3">Investment Philosophy</h2>

      {/* Main content */}
      <section className="investment_philosophy_section px-3 py-4 px-lg-4 bg-white rounded-4 border d-flex flex-column gap-4">
        {/* Header */}
        <header className="d-flex flex-column flex-md-row align-items-center gap-4">
          <img
            src={profilePicture || DefaultAvatar}
            alt={`${firstName} ${lastName}` || "fullName"}
            width={"150px"}
            height={"150px"}
            className="rounded-circle"
          />

          {/* text */}
          <div className="me-md-auto text-center text-md-start">
            <h4 className="fw-semibold">
              {`${firstName} ${lastName}` || "fullName"}
            </h4>
            <p className="fs-5 fw-light m-0 text-muted">
              {designation || "designation"}
            </p>
            <p className="fs-5 fw-light m-0 text-muted">
              {location || "location"}
            </p>
          </div>
        </header>

        {/* About */}
        <PhilosophyAbout companyName={companyName} />

        {/* Details */}
        <PhilosophyDetails />

        {/* Incorporation */}
        <PhilosophyIncorporation />

        {/* Revenue table */}
        <PhilosophyTable />

        {/* Section end */}
      </section>
    </div>
  );
}
