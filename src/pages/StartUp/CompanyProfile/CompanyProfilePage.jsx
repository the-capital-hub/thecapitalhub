import React, { useState, useEffect } from "react";
import "./CompanyProfilePage.scss";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import { getStartupByFounderId } from "../../../Service/user";
import { useSelector } from "react-redux";

export default function CompanyProfilePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    if (!loggedInUser?.investor) {
      getStartupByFounderId(loggedInUser._id).then(({ data }) => {
        setCompanyData(data);
      });
    }
  }, []);

  return (
    <div className="companyProfilePage__wrapper">
      {/* Main content */}
      <div className="main__content">
        <SmallProfileCard text={"Company Profile"} />

        <CompanyProfile isOnelink={true} companyData={companyData} />
      </div>

      {/* Right side content */}
      <div className="right__content">
        <RecommendationCard />
        <NewsCorner />
      </div>
    </div>
  );
}
