import React from "react";

export default function CurrentQuestion({
  question,
  answer,
  setAnswer,
  handleBackToCategories,
}) {
  return (
    <div className="current_question mt-5">
      {question && (
        <div className="chat_box">
          <p className="m-0">{question.question}</p>
        </div>
      )}
      {/* Options */}
      {question && (
        <div className="d-flex gap-3 align-items-center flex-wrap mx-3">
          {question?.options?.map((option) => {
            return (
              <button
                type="button"
                className={`option_button ${option === answer && "selected"}`}
                key={option}
                onClick={() => setAnswer(option)}
              >
                {option}
              </button>
            );
          })}
        </div>
      )}
      {/* Go back to categories */}
      {question && (
        <button
          type="button"
          className="option_button align-self-start mx-3"
          onClick={handleBackToCategories}
        >
          Go back to Categories
        </button>
      )}
    </div>
  );
}
