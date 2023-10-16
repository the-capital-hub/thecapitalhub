import React, { useEffect, useState } from "react";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import { useDispatch, useSelector } from "react-redux";
import { getOnePager } from "../../../Service/user";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import { useParams } from "react-router-dom";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import { setPageTitle } from "../../../Store/features/design/designSlice";

export default function InvestorCompanyProfilePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  let { username } = useParams();
  const [companyData, setCompanyData] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Company Profile | Investors - The Capital Hub";
    dispatch(setPageTitle("Company Profile"));
  }, []);

  useEffect(() => {
    getOnePager(username)
      .then(({ data }) => {
        setCompanyData(data);
      })
      .catch(() => setCompanyData([]));
  }, [username]);

  return (
    <MaxWidthWrapper>
      <div className="otherInvestorCompanyProfilePage__wrapper p-3 border-start">
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
        {/* <div className="right__content">
          <RecommendationCard />
          <NewsCorner />
        </div> */}
      </div>
    </MaxWidthWrapper>
  );
}
