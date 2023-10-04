import React, { useEffect, useState } from "react";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import { useSelector } from "react-redux";
import { getStartupByFounderId } from "../../../Service/user";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import { useParams } from "react-router-dom";

export default function InvestorCompanyProfilePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  let { founderId } = useParams();
  console.log(founderId);
  const [companyData, setCompanyData] = useState([]);

  useEffect(() => {
    if (!loggedInUser?.investor) {
      getStartupByFounderId(founderId).then(({ data }) => {
        console.log("data", data);
        setCompanyData(data);
      });
    }
  }, []);

  return (
    <div className="editinvestorCompanyProfilePage__wrapper p-3 border-start">
      {/* Main content */}
      <div className="main__content">
        <SmallProfileCard text={"Company Profile"} />

        {/* Company profile */}
        <CompanyProfile companyData={companyData} />
      </div>

      {/* Right side content */}
      <div className="right__content">
        <RecommendationCard />
        <NewsCorner />
      </div>
    </div>
  );
}
