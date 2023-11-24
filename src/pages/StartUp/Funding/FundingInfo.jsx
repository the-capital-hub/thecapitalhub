import React, { useState } from "react";
import "./FundingInfo.scss";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import RightProfileCard from "../../../components/Investor/InvestorGlobalCards/RightProfileCard/RightProfileCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import { fundingQuestions } from "../../../constants/Startups/FundingInfo";
import { useDispatch, useSelector } from "react-redux";
import FundingFormFields from "../../../components/Investor/FundingPageComponents/FundingFormFields/FundingFormFields";
import {
  selectFundingQuestions,
  selectLoggedInUserId,
  setUserCompany,
} from "../../../Store/features/user/userSlice";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import { postStartUpData } from "../../../Service/user";

export default function FundingInfo() {
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const fundingViaCapitalHubQuestions = useSelector(selectFundingQuestions);

  const dispatch = useDispatch();

  const [loading, setLoading] = useState(false);

  // Handle funding submit
  async function handleFundingSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const {
      targetMarket,
      whyRightTimeForYourStartUp,
      competitiveAdvantage,
      biggestCompetitors,
      revenueGenerated,
    } = e.target;

    let updatedData = {
      fundingViaCapitalhubQuestions: {
        targetMarket: targetMarket
          ? targetMarket.value
          : fundingViaCapitalHubQuestions["targetMarket"],
        whyRightTimeForYourStartUp: whyRightTimeForYourStartUp
          ? whyRightTimeForYourStartUp.value
          : fundingViaCapitalHubQuestions["whyRightTimeForYourStartUp"],
        competitiveAdvantage: competitiveAdvantage
          ? competitiveAdvantage.value
          : fundingViaCapitalHubQuestions["competitiveAdvantage"],
        biggestCompetitors: biggestCompetitors
          ? biggestCompetitors.value
          : fundingViaCapitalHubQuestions["biggestCompetitors"],
        revenueGenerated: revenueGenerated
          ? revenueGenerated.value
          : fundingViaCapitalHubQuestions["revenueGenerated"],
      },
      founderId: loggedInUserId,
    };

    try {
      console.log("Save All", updatedData);
      const { data } = await postStartUpData(updatedData);
      console.log("answers:", data);
      dispatch(setUserCompany(data));
    } catch (error) {
      console.error("Error Saving funding info:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="funding_wrapper my-4 mx-lg-3 mx-xl-0">
      <MaxWidthWrapper>
        <div className="two_col_wrapper">
          {/* Main content */}
          <div className="main_content">
            <div className="funding_form_container d-flex flex-column gap-3 bg-white rounded-4 shadow-sm py-4">
              <h2 className="px-4 border-bottom pb-4 m-0">
                "Apply for Funding" with{" "}
                <span style={{ color: "#fd5901" }}>Capital HUB</span>
              </h2>

              {/* Form */}
              <form
                onSubmit={handleFundingSubmit}
                className="px-3 px-lg-5 d-flex flex-column gap-4"
              >
                {Object.keys(fundingQuestions).map((question, index) => {
                  return (
                    <FundingFormFields
                      question={question}
                      key={question}
                      answer={
                        fundingViaCapitalHubQuestions
                          ? fundingViaCapitalHubQuestions[question]
                          : undefined
                      }
                    />
                  );
                })}
                <button
                  type="submit"
                  className="btn orange-button fs-6 d-flex align-items-center justify-content-center gap-2 w-50 mx-auto"
                  disabled={loading}
                >
                  {loading ? (
                    <>
                      <SpinnerBS
                        colorClass={"orange"}
                        spinnerSizeClass="spinner-border-sm"
                      />
                      <span>Please wait...</span>
                    </>
                  ) : (
                    "Save All"
                  )}
                </button>
              </form>
            </div>
          </div>
          {/* Right Content */}
          <div className="d-none d-xl-block">
            <RightProfileCard />
            <RecommendationCard />
            <NewsCorner />
          </div>
        </div>
      </MaxWidthWrapper>
    </div>
  );
}
