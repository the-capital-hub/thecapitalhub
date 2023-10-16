import React from "react";
import "./PersonAbout.scss";

export default function PersonAbout({
  bio,
  firstName,
  lastName,
  email,
  mobileNumber,
  experience,
  education,
  companyName,
  designation,
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
          <>
            {/* <div className="">
              <p className="fw-lighter fs-5">First Name</p>
              <p className="fw-medium fs-5 text-black">{firstName}</p>
            </div> */}
            {/* <div className="">
              <p className="fw-lighter fs-5">Email Address</p>
              <p className="fw-medium fs-5 text-black">{email}</p>
            </div> */}
          </>
          <>
            {/* <div className="">
              <p className="fw-lighter fs-5">Last Name</p>
              <p className="fw-medium fs-5 text-black">{lastName}</p>
            </div> */}
            {/* <div className="">
              <p className="fw-lighter fs-5">Mobile Number</p>
              <p className="fw-medium fs-5 text-black">{mobileNumber}</p>
            </div> */}
<div className="">
              <p className="fw-lighter fs-5">Education</p>
              <p className="fw-medium fs-5 text-black">{education}</p>
            </div>

            <div className="">
              <p className="fw-lighter fs-5">Company Name</p>
              <p className="fw-medium fs-5 text-black">{companyName}</p>
            </div>

            <div className="">
              <p className="fw-lighter fs-5">Designation</p>
              <p className="fw-medium fs-5 text-black">{designation}</p>
            </div>

            <div className="">
              <p className="fw-lighter fs-5">Experience</p>
              <p className="fw-medium fs-5 text-black">{experience}</p>
            </div>

            
          </>
        </div>
      </article>
    </>
  );
}
