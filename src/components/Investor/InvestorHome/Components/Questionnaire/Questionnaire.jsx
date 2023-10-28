import React, { useState } from "react";
import OffcanvasBSContainer from "../../../../PopUp/OffcanvasBS/OffcanvasBSContainer/OffcanvasBSContainer";
import OffcanvasBSHeader from "../../../../PopUp/OffcanvasBS/OffcanvasBSHeader/OffcanvasBSHeader";
import OffcanvasBSBody from "../../../../PopUp/OffcanvasBS/OffcanvasBSBody/OffcanvasBSBody";
import "./Questionnaire.scss";

const DEFAULTOPTIONS = ["Startup", "Personal"];

export default function Questionnaire() {
  const [answer, setAnswer] = useState("");

  // Handle answer change
  function handleAnswerChange(e) {
    setAnswer(e.target.value);
  }

  return (
    <div className="questionnaire_wrapper">
      <OffcanvasBSContainer id="questionnaireOffCanvas">
        <OffcanvasBSHeader />
        <OffcanvasBSBody bodyClass="p-0">
          <div className="questionnaire_body_wrapper d-flex flex-column justify-content-end h-100 gap-3 pb-4">
            {/* TCH logo */}
            <div
              className="d-flex justify-content-center align-items-center bg-light rounded-circle shadow-sm border mx-3"
              style={{ height: "60px", width: "60px" }}
            >
              <img
                src="https://res.cloudinary.com/drjt9guif/image/upload/v1698409124/TheCapitalHub/users/profilePictures/vwy3v5c0tq1hbloqsnlx.webp"
                alt="The Capital HUB profile"
                height={"50px"}
                width={"50px"}
                style={{ objectFit: "cover" }}
                className="rounded-circle"
              />
            </div>
            {/* Intro */}
            <div className="border rounded shadow-sm p-2 mb-5 mx-3">
              <p className="m-0">
                Hi, I am capital hub chat assistant i will help you complete
                pending information in your profile.
              </p>
            </div>

            {/* User Input */}
            <div className="user_input border-top p-3 d-flex align-items-center">
              <textarea
                type="text"
                name="answer"
                id="answer"
                placeholder="Type here..."
                className="user_textarea border-0 px-3 py-4 rounded-4"
                value={answer}
                onChange={handleAnswerChange}
                autoFocus
              />
            </div>
          </div>
        </OffcanvasBSBody>
      </OffcanvasBSContainer>
    </div>
  );
}
