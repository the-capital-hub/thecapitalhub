import React from "react";
import IconMessage from "../../SvgIcons/IconMessage";
import { Link } from "react-router-dom";

export default function ProfileHeader({ userData }) {
  return (
    <div className="profile rounded border shadow-sm">
      <div className="short_details d-flex flex-column flex-md-row align-items-center justify-content-between">
        <div className="d-flex flex-column w-100 flex-md-row align-items-center justify-content-between ">
          <img
            src={userData?.profilePicture}
            width={150}
            height={150}
            alt="profile"
            className="rounded-circle"
          />
          <div className="flex-grow-1 left_profile_text mt-2 mt-md-0 me-auto me-md-0 ms-md-4">
            <h3 className="typography h3">
              {userData?.firstName || "John"} {userData?.lastName || "Doe"}
            </h3>
            <span className="small_typo">
              {userData?.designation || "Founder & CEO of The Capital Hub"}
            </span>
            <br />
            <span className="small_typo">
              {userData?.location || "Bangalore , India"}
            </span>
          </div>
        </div>
        <div className="buttons d-flex gap-2 flex-row align-items-md-center">
          <Link
            // to={`/chats?userId=${userData?._id}`}
            className="text-decoration-none"
          >
            <button className="message btn rounded-pill px-3 py-2">
              <IconMessage />
              <span>Message</span>
            </button>
          </Link>
          <button className="more btn rounded-pill px-3 py-2">
            <span>More</span>
          </button>
        </div>
      </div>
      <div className="details">
        <div className="single_details row row-cols-1 row-cols-md-2 ">
          <span className="col-md-3 label fw-bold">Current Company</span>
          <span className="col-md-9 value text-secondary">
            {userData?.startUp?.company || userData.investor.companyName || ""}
          </span>
        </div>
        <div className="single_details row row-cols-1 row-cols-md-2 ">
          <span className="col-md-3 label fw-bold">Designation</span>
          <span className="col-md-9 value text-secondary">
            {userData?.designation || "designation"}
          </span>
        </div>
        <div className="single_details row row-cols-1 row-cols-md-2 ">
          <span className="col-md-3 label fw-bold">Education</span>
          <span className="col-md-9 value text-secondary">
            {userData?.education || "education"}
          </span>
        </div>
        <div className="single_details row row-cols-1 row-cols-md-2 ">
          <span className="col-md-3 label fw-bold">Experience</span>
          <span className="col-md-9 value text-secondary">
            {userData?.experience || "experience"}
          </span>
        </div>
      </div>
    </div>
  );
}
