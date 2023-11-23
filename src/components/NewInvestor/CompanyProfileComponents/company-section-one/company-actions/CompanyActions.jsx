import { Bookmark } from "../../../../../Images/Investor/CompanyProfile";
import "./CompanyActions.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  selectIsInvestor,
  selectMyInterests,
} from "../../../../../Store/features/user/userSlice";

export default function CompanyActions({
  isOnelink = false,
  founderId,
  companyId,
}) {
  let location = useLocation();
  const isInvestor = useSelector(selectIsInvestor);
  const myInterests = useSelector(selectMyInterests);

  let myInterestsIds = myInterests?.map((interest) => interest.companyId);

  const linkTo = isInvestor
    ? `/investor/user/${founderId}`
    : `/user/${founderId}`;

  return (
    <div className="company__actions d-flex flex-column justify-content-end">
      {isOnelink ? (
        ""
      ) : (
        <button className="bookmark position-absolute top-0 right-0 me-4">
          <img src={Bookmark} alt="bookmark icon" />
        </button>
      )}
      <div className="action__buttons d-flex flex-column flex-md-row align-items-start gap-3 mt-3 mb-3 mt-lg-0">
        {isOnelink ? (
          ""
        ) : (
          <>
            {/* Condition 1 -  check if path is either a company-profile page or explore page.
             Condition 2 - check if loggedInUser's myIntersts has the current company in it.
             Render Show Interest Button of condition 1 is true and condition 2 is false*/}
            {(location.pathname.includes("/investor/company-profile") ||
              location.pathname.includes("/investor/explore")) &&
              !myInterestsIds.includes(companyId) && (
                <button
                  className="btn-capital text-center"
                  data-bs-toggle="modal"
                  data-bs-target={`#selectCommitmentModal${founderId}`}
                >
                  Show Interest
                </button>
              )}
            <Link to={linkTo}>
              <button className="btn-capital-outline actions-btn">
                Connect with the Founder
              </button>
            </Link>
          </>
        )}
        {!location.pathname === "/company-profile" && (
          <button className="btn-capital actions-btn">Invest Now</button>
        )}
      </div>
    </div>
  );
}
