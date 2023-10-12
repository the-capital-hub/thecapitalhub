import React, { useState, useEffect } from "react";
import "./InvestorCompany.scss";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import { getInvestorById } from "../../../Service/user";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";

export default function CompanyProfilePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    if (loggedInUser?.investor) {
      getInvestorById(loggedInUser.investor).then(({ data }) => {
        setCompanyData(data);
      });
    }
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="investor_companyProfilePage__wrapper">
        {/* Main content */}
        <div className="main__content">
          <SmallProfileCard text={"Company Profile"} />
          <div className="bg-white rounded-4 p-4 border shadow-sm mt-0 mt-md-3">
            <Link
              to={"/investor/company-profile/edit"}
              className="text-decoration-none text-dark fs-5 "
            >
              Click here to edit company details
            </Link>
          </div>
          {companyData.length !== 0 ? (
            <CompanyProfile
              isOnelink={true}
              investorData={companyData}
              // startup="t"
            />
          ) : (
            <div className="mx-auto w-100 bg-white rounded-5 p-5 d-flex justify-content-center min-vh-100">
              <div class="spinner-grow yellow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
        {/* Right side content */}
        <div className="right__content">
          <RecommendationCard />
          <NewsCorner />
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
