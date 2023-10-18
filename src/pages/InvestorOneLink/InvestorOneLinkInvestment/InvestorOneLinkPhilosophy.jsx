import React from "react";
import DefaultAvatar from "../../../Images/Chat/default-user-avatar.webp";
import "./InvestorOneLinkPhilosophy.scss";
import PhilosophyTable from "../../../components/InvestorOneLink/InvestorOneLinkPhilosophy/PhilosophyTable";
import PhilosophyAbout from "../../../components/InvestorOneLink/InvestorOneLinkPhilosophy/PhilosophyAbout";
import PhilosophyIncorporation from "../../../components/InvestorOneLink/InvestorOneLinkPhilosophy/PhilosophyIncorporation";
import { useOutletContext } from "react-router-dom";

export default function InvestorOneLinkInvestment() {
  // Fetch or get from state
  const { company, investor } = useOutletContext();
  const { firstName, lastName, designation, location, profilePicture } =
    investor;
  const { investmentPhilosophy, companyName } = company;

  console.log("company", company);
  console.log("investor", investor);

  return (
    <div className="investment_philosophy_wrapper mb-5 ps-3 leftBorder">
      <h2 className="mb-3">Investment Philosophy</h2>

      {/* Main content */}
      <section className="investment_philosophy_section px-3 py-4 px-lg-4 bg-white rounded border d-flex flex-column gap-4">
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

        {/* Description */}
        <div className="philosophy_description">
          <fieldset className="fieldbox border rounded-3 shadow-sm">
            <legend className="px-3 py-1 rounded-pill bg-white">
              Description
            </legend>
            <p className="m-0 fw-light fs-6 py-4">
              {investmentPhilosophy ||
                `Lorem ipsum dolor sit amet consectetur. Maecenas ac elementum
              lacus vel vitae sed nisi aliquam aliquet. Vel adipiscing placerat
              tellus faucibus diam mauris ipsum vitae. Justo adipiscing integer
              dictum tortor viverra vel .`}
            </p>
          </fieldset>
        </div>

        {/* Incorporation */}
        <PhilosophyIncorporation />

        {/* Revenue table */}
        <PhilosophyTable />

        {/* Section end */}
      </section>
    </div>
  );
}
