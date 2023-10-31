import React from "react";
import IconTick from "../../../../SvgIcons/IconTick";

export default function CurrentQuestion({
  question,
  answer,
  handleAnswerSelect,
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
        <div className="d-flex gap-3 align-items-center flex-wrap mx-3 ">
          {question?.options?.map((option) => {
            return (
              <button
                key={option}
                type="button"
                className={`position-relative option_button ${
                  (option === answer || answer.includes(option)) && "selected"
                }`}
                onClick={(e) => handleAnswerSelect(e, option)}
              >
                {option}
                {(option === answer || answer.includes(option)) && (
                  <div className="position-absolute select_badge">
                    <IconTick />
                  </div>
                )}
              </button>
            );
          })}
        </div>
      )}
      {/* Go back to categories */}
      {question && (
        <button
          type="button"
          className="option_button back_button align-self-start mx-3"
          onClick={handleBackToCategories}
        >
          Go back to Categories
        </button>
      )}
    </div>
  );
}