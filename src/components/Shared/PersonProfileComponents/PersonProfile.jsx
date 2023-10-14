import React from "react";
import DefaultAvatar from "../../../Images/Chat/default-user-avatar.webp";
import PersonInfo from "./PersonHeader/PersonInfo";

const PERSON = {
  image: DefaultAvatar,
  firstName: "FirstName",
  lastName: "LastName",
  email: "example@xyz.com",
  mobileNumber: "+91 9876543210",
  companyName: "Company Name",
  location: "Bangalore",
  foundedYear: "2014",
  lastFunding: "May, 2023",
  about:
    "Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.",
};

export default function PersonProfile() {
  const {
    image,
    firstName,
    lastName,
    email,
    mobileNumber,
    companyName,
    location,
    about,
    lastFunding,
    foundedYear,
  } = PERSON;

  return (
    <div className="person_profile_wrapper">
      <div className="company__section__one border-bottom d-flex flex-column gap-4 py-5 px-5">
        <div className="company__info d-flex flex-column flex-xl-row gap-4 justify-content-between position-relative">
          <PersonInfo
            name={name}
            logo={logo}
            tagline={tagline}
            location={location}
            foundedYear={new Date(foundedIn).getFullYear()}
          />
          <CompanyActions isOnelink={isOnelink} />
        </div>
        <CompanyAbout
          about={description}
          vision={!short && vision}
          mission={!short && mission}
          noOfEmployees={noOfEmployees}
        />
        {!short && <CompanyStats colorCard={colorCard} />}
      </div>
    </div>
  );
}
