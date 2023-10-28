import React, { useState } from "react";
import OffcanvasBSContainer from "../../../../PopUp/OffcanvasBS/OffcanvasBSContainer/OffcanvasBSContainer";
import OffcanvasBSHeader from "../../../../PopUp/OffcanvasBS/OffcanvasBSHeader/OffcanvasBSHeader";
import OffcanvasBSBody from "../../../../PopUp/OffcanvasBS/OffcanvasBSBody/OffcanvasBSBody";
import "./Questionnaire.scss";
import IconSend from "../../../SvgIcons/IconSend";
import Greeting from "./Greeting/Greeting";
import { getQuestionsAPI } from "../../../../../Service/user";

const OPTIONS = {
  company: { text: "Company", endpoint: "Startup" },
  personal: { text: "Personal", endpoint: "Personal" },
};

export default function Questionnaire() {
  const [answer, setAnswer] = useState("");
  const [question, setQuestion] = useState(null);
  const [option, setOption] = useState(null);
  const [alert, setAlert] = useState(null);

  //   Fetch Questions
  async function fetchQuestion(query) {
    try {
      const { data, message } = await getQuestionsAPI(query);
      console.log(data, message);
      setQuestion(data);
      if (!data) {
        setAlert(message);
      }

      setTimeout(() => {
        setAlert(null);
        setOption(null);
      }, 2000);
    } catch (error) {
      console.error("Error fetching Question:", error);
    }
  }

  //   handle Option
  function handleOption(e, option) {
    setOption(option.text);
    fetchQuestion(option.endpoint);
  }

  // Handle answer change
  function handleAnswerChange(e) {
    setAnswer(e.target.value);
  }

  //   clearStates
  function clearStates() {
    setAnswer("");
    setQuestion(null);
    setOption(null);
    setAlert(null);
  }

  return (
    <div className="questionnaire_wrapper">
      <OffcanvasBSContainer id="questionnaireOffCanvas">
        <OffcanvasBSHeader onClose={clearStates} />
        <OffcanvasBSBody bodyClass="p-0">
          <div className="questionnaire_body_wrapper h-100 pb-4 d-flex flex-column justify-content-end gap-3">
            <div className=" d-flex flex-column justify-content-end gap-3 ">
              <Greeting />
              {/* options */}
              <div className="chat_box d-flex align-items-start gap-4 p-0 border-0 shadow-none">
                {(option === "Company" || option === null) && (
                  <button
                    type="button"
                    className="orange_button"
                    onClick={(e) => handleOption(e, OPTIONS.company)}
                  >
                    {OPTIONS.company.text}
                  </button>
                )}
                {(option === "Personal" || option === null) && (
                  <button
                    type="button"
                    className="orange_button"
                    onClick={(e) => handleOption(e, OPTIONS.personal)}
                  >
                    {OPTIONS.personal.text}
                  </button>
                )}
              </div>
            </div>

            {/* Chat Area */}
            {question && (
              <div className="chat_box">
                <p>{question.question}</p>
              </div>
            )}
            {alert && (
              <div className="chat_box">
                <em>{alert}</em>
              </div>
            )}

            {/* User Input */}
            <div className="user_input_container border-top p-3 d-flex align-items-center gap-3">
              <input
                type="text"
                name="answer"
                id="answer"
                placeholder="Type here..."
                className="user_input border-0 px-3 py-4 rounded-4 flex-grow-1"
                value={answer}
                onChange={handleAnswerChange}
                autoFocus
              />
              <button
                type="button"
                className="send_btn d-flex align-items-center justify-content-center"
              >
                <IconSend style={{ marginLeft: "8px" }} />
              </button>
            </div>
          </div>
        </OffcanvasBSBody>
      </OffcanvasBSContainer>
    </div>
  );
}
