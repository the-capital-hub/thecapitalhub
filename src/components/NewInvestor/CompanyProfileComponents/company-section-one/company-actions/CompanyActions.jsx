import { Bookmark } from "../../../../../Images/Investor/CompanyProfile";
import "./CompanyActions.scss";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  selectIsInvestor,
  selectLoggedInUserId,
  selectMyInterests,
  setUserCompany,
} from "../../../../../Store/features/user/userSlice";
import { postInvestorData } from "../../../../../Service/user";
import { useState } from "react";
import SpinnerBS from "../../../../Shared/Spinner/SpinnerBS";

export default function CompanyActions({
  isOnelink = false,
  founderId,
  companyId,
}) {
  let location = useLocation();
  const dispatch = useDispatch();

  const isInvestor = useSelector(selectIsInvestor);
  const myInterests = useSelector(selectMyInterests);
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const userCompanyData = useSelector((state) => state.user.company);

  // Loading states
  const [loading, setLoading] = useState(false);

  let myInterestsIds = myInterests?.map((interest) => interest.companyId);

  const linkTo = isInvestor
    ? `/investor/user/${founderId}`
    : `/user/${founderId}`;

  // Handle Uninterst click
  const handleUninterest = async (e, companyId) => {
    // guard clause
    if (!userCompanyData) {
      return;
    }

    setLoading(true);

    let updatedMyInterests = myInterests.filter(
      (interest) => interest.companyId !== companyId
    );
    // console.log("uninterest", updatedMyInterests)

    try {
      const { data } = await postInvestorData({
        founderId: loggedInUserId,
        myInterests: updatedMyInterests,
      });
      console.log("uninterest", data);
      dispatch(setUserCompany(data));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

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
            !myInterestsIds?.includes(companyId) ? (
              <button
                className="btn-capital text-center"
                data-bs-toggle="modal"
                data-bs-target={`#selectCommitmentModal${founderId}`}
              >
                Show Interest
              </button>
            ) : (
              <button
                type="button"
                className="d-flex align-items-center gap-2 btn btn-danger fw-bold fs-6"
                onClick={(e) => handleUninterest(e, companyId)}
              >
                {loading ? (
                  <>
                    <SpinnerBS
                      spinnerSizeClass="spinner-border-sm"
                      colorClass={"text-white"}
                    />
                    <span>Please wait</span>
                  </>
                ) : (
                  "Uninterest"
                )}
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
