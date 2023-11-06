import React, { useEffect, useState } from "react";
import { getQuestionCountAPI } from "../../../../../Service/user";
import Questionnaire from "./Questionnaire";

export default function MissingDetails() {
  // State for question count
  const [countData, setCountData] = useState(null);
  const [refetch, setRefetch] = useState(false);

  // Fetch Questions count
  useEffect(() => {
    async function fetchQuestionsCount() {
      try {
        const { data } = await getQuestionCountAPI();
        // console.log("count", data);
        setCountData(data);
      } catch (error) {
        console.error("Error fetching count:", error);
        throw error;
      }
    }

    fetchQuestionsCount();
  }, [refetch]);

  // Handle Refetch count
  function handleRefetch() {
    setRefetch(!refetch);
  }

  return (
    <div className="bg-white rounded-4 shadow-sm lh-1 d-flex flex-column">
      {countData?.total ? (
        <button
          id="missingDetails"
          className="btn border-0 fs-5 py-3"
          data-bs-toggle="offcanvas"
          data-bs-target="#questionnaireOffCanvas"
          ariaControls="offcanvasTop"
          style={{ color: "#fd5901" }}
        >
          Add missing details {countData && `(${countData.total})`}
        </button>
      ) : (
        ""
      )}

      {/* OffCanvas for questionnaire */}
      <Questionnaire
        countData={countData}
        setCountData={setCountData}
        handleRefetch={handleRefetch}
      />
    </div>
  );
}
