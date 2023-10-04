import React, { useEffect, useState } from "react";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import { useSelector } from "react-redux";
import { getOnePager } from "../../../Service/user";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import { useParams } from "react-router-dom";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";

export default function InvestorCompanyProfilePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  let { username } = useParams();
  console.log(username);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    document.title = "Company Profile | Investors - The Capital Hub";
    getOnePager(username)
      .then(({ data }) => {
        setCompanyData(data);
      })
      .catch(() => setCompanyData([]));
  }, [username]);

  return (
    <div className="editinvestorCompanyProfilePage__wrapper p-3 border-start">
      {/* Main content */}
      <div className="main__content">
        <SmallProfileCard text={"Company Profile"} />

        {/* Company profile */}
        {companyData.length !== 0 ? (
          <CompanyProfile companyData={companyData} />
        ) : (
          <SpinnerBS />
        )}
      </div>

      {/* Right side content */}
      <div className="right__content">
        <RecommendationCard />
        <NewsCorner />
      </div>
    </div>
  );
}
