import React, { useState } from "react";
import FundingFormFields from "../FundingFormFields/FundingFormFields";
import { fundingQuestions } from "../../../../constants/Startups/FundingInfo";
import "./FundingForm.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  //   selectFundingQuestions,
  selectLoggedInUserId,
  selectUserEmail,
  selectUserName,
  // setUserCompany,
  loginSuccess
} from "../../../../Store/features/user/userSlice";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";
import {
  // postStartUpData,
  submitFundingToMailAPI,
  updateUserById
} from "../../../../Service/user";
import toast from "react-hot-toast";

export default function FundingForm({ setShowForm }) {
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const userName = useSelector(selectUserName);
  const userEmail = useSelector(selectUserEmail);
  //   const fundingViaCapitalHubQuestions = useSelector(selectFundingQuestions);

  const dispatch = useDispatch();

  // States
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
        targetMarket: targetMarket.value,
        whyRightTimeForYourStartUp: whyRightTimeForYourStartUp.value,
        competitiveAdvantage: competitiveAdvantage.value,
        biggestCompetitors: biggestCompetitors.value,
        revenueGenerated: revenueGenerated.value,
      },
      // founderId: loggedInUserId,
    };
    // Save to startUpData
    try {
      //   console.log("Save All", updatedData);
      // const { data } = await postStartUpData(updatedData);
      //   console.log("answers:", data);
      // dispatch(setUserCompany(data));
      const { data: response } = await updateUserById(loggedInUserId, updatedData);
      dispatch(loginSuccess(response.data));
    } catch (error) {
      console.error("Error Saving funding info:", error);
    }
    // Submit to Email
    try {
      let fundingAnswers = {
        fundingViaCapitalhubQuestions: {
          targetMarket: targetMarket.value,
          whyRightTimeForYourStartUp: whyRightTimeForYourStartUp.value,
          competitiveAdvantage: competitiveAdvantage.value,
          biggestCompetitors: biggestCompetitors.value,
          revenueGenerated: revenueGenerated.value,
        },
        name: userName,
        email: userEmail,
      };
      const response = await submitFundingToMailAPI(fundingAnswers);
      console.log(response);
      toast.success(response.message, {
        duration: 3000,
        position: "top-center",
      });
    } catch (error) {
      console.error("Error Submitting to email:", error);
    } finally {
      setLoading(false);
      setShowForm(false);
    }
  }

  return (
    <form
      onSubmit={handleFundingSubmit}
      className="px-3 px-lg-5 d-flex flex-column gap-4 "
    >
      {Object.keys(fundingQuestions).map((question, index) => {
        return <FundingFormFields question={question} key={question} />;
      })}
      <div className="d-flex align-items-center gap-4">
        <button
          type="button"
          className="btn btn-secondary py-2 fs-6 w-50"
          onClick={() => setShowForm(false)}
        >
          Cancel
        </button>
        <button
          type="submit"
          className="btn btn-primary text-white py-2 fs-6 d-flex align-items-center justify-content-center gap-2 w-50"
          disabled={loading}
        >
          {loading ? (
            <>
              <SpinnerBS
                colorClass={"text-white"}
                spinnerSizeClass="spinner-border-sm"
              />
              <span>Please wait...</span>
            </>
          ) : (
            "Save All"
          )}
        </button>
      </div>
    </form>
  );
}
