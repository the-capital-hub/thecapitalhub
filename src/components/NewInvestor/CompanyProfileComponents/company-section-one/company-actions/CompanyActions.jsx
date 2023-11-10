import { Bookmark } from "../../../../../Images/Investor/CompanyProfile";
import "./CompanyActions.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CompanyActions({ isOnelink = false, founderId }) {
  let location = useLocation();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const linkTo = loggedInUser?.isInvestor === "true" ? `/investor/user/${founderId}` : `/user/${founderId}`;

  return (
    <div className="company__actions d-flex flex-column justify-content-end ">
      {isOnelink ? (
        ""
      ) : (
        <button className="bookmark position-absolute top-0 right-0 me-4">
          <img src={Bookmark} alt="bookmark icon" />
        </button>
      )}
      <div className="action__buttons d-flex flex-column-reverse flex-md-row align-items-start gap-3 mt-3 mb-3 mt-lg-0">
        {isOnelink ? (
          ""
        ) : (
          <Link to={linkTo}>
            <button className="btn-capital-outline actions-btn">
              Connect with the Founder
            </button>
          </Link>
        )}
        {!location.pathname === "/company-profile" && (
          <button className="btn-capital actions-btn">Invest Now</button>
        )}
      </div>
    </div>
  );
}
