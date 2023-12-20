import React from "react";
import { Bookmark } from "../../../../Images/Investor/CompanyProfile";
import "./PersonActions.scss";
import { Link } from "react-router-dom";

export default function PersonActions({
  person = "Founder",
  userId,
  name,
  isInvestor,
}) {
  const linkTo = isInvestor ? `/investor/user/${name}` : `/user/${name}`;
  return (
    <div className="d-flex flex-column justify-content-end ">
      {/* <button className="person_bookmark position-absolute top-0 right-0 me-4">
        <img src={Bookmark} alt="bookmark icon" />
      </button> */}

      <div className="d-flex flex-column-reverse flex-md-row align-items-start gap-3 mt-3 mb-3 mt-lg-0">
        <Link to={linkTo} state={{ userId: userId }}>
          <button className="btn btn-capital-outline actions-btn">
            Connect with the {person}
          </button>
        </Link>

        {/* <button className="btn-capital actions-btn">Invest Now</button> */}
      </div>
    </div>
  );
}
