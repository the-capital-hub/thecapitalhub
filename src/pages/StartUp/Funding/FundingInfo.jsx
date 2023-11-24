import React, { useEffect, useState } from "react";
import "./FundingInfo.scss";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import RightProfileCard from "../../../components/Investor/InvestorGlobalCards/RightProfileCard/RightProfileCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import { fundingQuestions } from "../../../constants/Startups/FundingInfo";

export default function FundingInfo() {
  const [editMode, setEditMode] = useState(false);
  const [answers, setAnswers] = useState(null);

  useEffect(() => {
    if (!answers) {
      setEditMode(true);
    }
  }, [answers]);

  // Handle funding submit
  async function handleFundingSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="funding_wrapper my-4">
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
                className="px-3 px-lg-5 d-flex flex-column gap-3"
              >
                {Object.keys(fundingQuestions).map((question, index) => {
                  return (
                    <fieldset key={question}>
                      <legend className="fs-4">
                        {fundingQuestions[question]}
                      </legend>
                      {editMode ? (
                        <textarea
                          name={question}
                          id={`${index}${question}`}
                          rows="5"
                          className="funding_textarea"
                        ></textarea>
                      ) : (
                        <p className="m-0"></p>
                      )}
                    </fieldset>
                  );
                })}
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
