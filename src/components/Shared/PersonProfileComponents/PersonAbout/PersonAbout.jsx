import React from "react";
import "./PersonAbout.scss";

export default function PersonAbout({
  bio,
  firstName,
  lastName,
  email,
  mobileNumber,
}) {
  return (
    <>
      <article className="person__about d-flex flex-column gap-4 flex-lg-row gap-lg-0 mt-2">
        <h6 className="div__heading">Bio:</h6>
        <p className="about__text">{bio}</p>
      </article>
      <article className="name_number d-flex flex-column gap-4 mt-2">
        <h6 className="div__heading">Personal Information:</h6>

        <div className="personal_info_grid">
          <div className="fname">
            <p className="fw-lighter fs-5">First Name</p>
            <p className="fw-medium fs-5 text-black">{firstName}</p>
          </div>
          <div className="email">
            <p className="fw-lighter fs-5">Email Address</p>
            <p className="fw-medium fs-5 text-black text-break">{email}</p>
          </div>
          <div className="lname">
            <p className="fw-lighter fs-5">Last Name</p>
            <p className="fw-medium fs-5 text-black">{lastName}</p>
          </div>
          <div className="number">
            <p className="fw-lighter fs-5">Mobile Number</p>
            <p className="fw-medium fs-5 text-black">{mobileNumber}</p>
          </div>
        </div>
      </article>
    </>
  );
}
