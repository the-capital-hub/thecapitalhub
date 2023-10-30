import React, { useState } from "react";
import OffcanvasBSContainer from "../../../../PopUp/OffcanvasBS/OffcanvasBSContainer/OffcanvasBSContainer";
import OffcanvasBSHeader from "../../../../PopUp/OffcanvasBS/OffcanvasBSHeader/OffcanvasBSHeader";
import OffcanvasBSBody from "../../../../PopUp/OffcanvasBS/OffcanvasBSBody/OffcanvasBSBody";
import "./Questionnaire.scss";
import Greeting from "./Greeting/Greeting";
import {
  answerQuestionAPI,
  getQuestionsAPI,
} from "../../../../../Service/user";
import UserInput from "./UserInput/UserInput";
import CurrentQuestion from "./CurrentQuestion/CurrentQuestion";
import Categories from "./Categories/Categories";
import History from "./History/History";
import { useDispatch } from "react-redux";
import { updateLoggedInUser } from "../../../../../Store/features/user/userSlice";

export const OPTIONS = {
  company: { text: "Company", endpoint: "Startup" },
  personal: { text: "Personal", endpoint: "Personal" },
};

export default function Questionnaire() {
  const dispatch = useDispatch();

  const [answer, setAnswer] = useState(null);
  const [question, setQuestion] = useState(null);
  // State for company and personal soptions
  const [option, setOption] = useState(null);
  const [alert, setAlert] = useState(null);
  // State for history
  const [history, setHistory] = useState([]);

  //   Fetch Questions
  async function fetchQuestion(query) {
    try {
      const { data, message } = await getQuestionsAPI(query);
      console.log(data, message);
      setQuestion(data);
      if (!data) {
        setAlert(message);
        setTimeout(() => {
          setAlert(null);
          setOption(null);
        }, 2000);
      }
    } catch (error) {
      console.error("Error fetching Question:", error);
    }
  }

  //   handle Option
  function handleOptionSelect(e, option) {
    setOption(option.text);
    fetchQuestion(option.endpoint);
  }

  // Handle answer change
  function handleAnswerChange(e) {
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    setAnswer(e.target.value);
  }

  // handle Post Answer
  async function handlePostAnswer(e) {
    e.preventDefault();
    console.log("answer is", answer);
    const answerObject = {
      questionId: question._id,
      answer: answer,
    };

    try {
      const { data } = await answerQuestionAPI(answerObject);
      console.log("Response from answerPost", data);

      // update history
      setHistory((prev) => {
        let copy = [...prev];
        copy.push({ question: question.question, ...answerObject });
        return [...copy];
      });

      // If personal, update loggedInUser
      // dispatch(updateLoggedInUser())

      // Clear answer
      setAnswer(null);

      // fetch next Question
      fetchQuestion(option.endpoint);
    } catch (error) {
      console.error("Error posting Question:", error);
    }
  }

  // Handle Back to categories
  function handleBackToCategories() {
    if (!answer) {
      setQuestion(null);
      setOption(null);
    } else {
      setQuestion(null);
      setOption(null);
    }
  }

  //   clearStates
  function clearStates() {
    setAnswer(null);
    setQuestion(null);
    setOption(null);
    setAlert(null);
    setHistory([]);
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
              <Categories
                handleOptionSelect={handleOptionSelect}
                option={option}
              />
            </div>

            {/* History */}
            <History history={history} />

            {/* Current Question */}
            <CurrentQuestion
              question={question}
              answer={answer}
              setAnswer={setAnswer}
              handleBackToCategories={handleBackToCategories}
            />

            {/* Alert */}
            {alert && (
              <div className="chat_box">
                <em className="">{alert}</em>
              </div>
            )}

            {/* User Input */}
            <UserInput
              answer={answer}
              question={question}
              handleAnswerChange={handleAnswerChange}
              handlePostAnswer={handlePostAnswer}
            />
          </div>
        </OffcanvasBSBody>
      </OffcanvasBSContainer>
    </div>
  );
}
