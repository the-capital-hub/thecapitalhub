import React, { useEffect, useState } from "react";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import "./OtherCompanyProfilePage.scss";
import { useNavigate, useParams } from "react-router-dom";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import { getStartupByFounderId } from "../../../Service/user";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import { useDispatch, useSelector } from "react-redux";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import { getLoggedInUserId } from "../../../Store/features/user/userSlice";

export default function OtherCompanyProfilePage() {
  // get founderId from params
  const { founderId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Fetch from redux store
  const loggedInUserId = useSelector(getLoggedInUserId);

  // States
  const [loading, setLoading] = useState(false);
  const [companyData, setCompanyData] = useState(false);

  if (loggedInUserId === founderId) {
    navigate("/company-profile");
  }

  // Fetch company data by founderId
  useEffect(() => {
    setLoading(true);
    getStartupByFounderId(founderId)
      .then(({ data }) => {
        setCompanyData(data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
        console.error("Error fetching startup data:", error.message);
      });

    document.title = "Company Profile | The Capital Hub";
    dispatch(setPageTitle("Company"));
  }, [dispatch, founderId]);

  return (
    <MaxWidthWrapper>
      <div className="otherCompanyProfilePage_wrapper my-4 mt-xl-5">
        {/* Main Content */}
        <div className="main_content">
          {loading ? (
            <SpinnerBS
              className={
                "d-flex justify-content-center align-items-center py-5"
              }
              colorClass={"theme_primary"}
              spinnerClass="spinner-grow"
            />
          ) : (
            <CompanyProfile
              isOnelink={true}
              companyData={companyData}
              startup="true"
            />
          )}
        </div>
        {/* Right Content */}
        <div className="right_content">
          <RecommendationCard />
          <NewsCorner />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
