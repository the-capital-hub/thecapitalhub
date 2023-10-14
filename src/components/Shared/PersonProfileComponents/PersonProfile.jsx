import React from "react";
import PersonInfo from "./PersonHeader/PersonInfo";
import PersonActions from "./PersonHeader/PersonActions";
import PersonAbout from "./PersonAbout/PersonAbout";
import PublicLinks from "../../NewInvestor/CompanyProfileComponents/company-section-two/public-links/PublicLinks";
import CompanyStats from "../../NewInvestor/CompanyProfileComponents/company-section-one/company-stats/CompanyStats";
import "./PersonProfile.scss";

const PERSON = {
  profilePicture: "",
  firstName: "FirstName",
  lastName: "LastName",
  designation: "Founder",
  email: "example@xyz.com",
  mobileNumber: "+91 9876543210",
  companyName: "Company Name",
  location: "Bangalore",
  foundedYear: "2014",
  lastFunding: "May, 2023",
  about:
    "Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.",
};

export default function PersonProfile({ theme, short, personData }) {
  // Get from props or fetch data here

  const {
    profilePicture,
    firstName,
    lastName,
    designation,
    email,
    mobileNumber,
    companyName,
    location,
    about,
    lastFunding,
    foundedYear,
  } = PERSON;

  return (
    <div className={`person_profile_wrapper bg-white shadow-sm ${theme}`}>
      <div className="person__section__one border-bottom d-flex flex-column gap-4 py-5 px-5">
        {/* Profile header */}
        <div className="person__info d-flex flex-column flex-xl-row gap-4 justify-content-between position-relative">
          <PersonInfo
            fullName={`${firstName} ${lastName}`}
            designation={designation}
            profilePicture={profilePicture}
            companyName={companyName}
            location={location}
            foundedYear={foundedYear}
            lastFunding={lastFunding}
          />
          <PersonActions />
        </div>

        {/* Profile About */}
        <PersonAbout
          about={about}
          firstName={firstName}
          lastName={lastName}
          email={email}
          mobileNumber={mobileNumber}
        />
      </div>

      <div className="person__section__two d-flex flex-column gap-4 pt-3 pb-5 px-5">
        <PublicLinks />
        {!short && <CompanyStats />}
      </div>
    </div>
  );
}
