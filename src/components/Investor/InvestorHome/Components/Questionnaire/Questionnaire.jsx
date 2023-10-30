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

  const [answer, setAnswer] = useState("");
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
    // console.log("selected categry", option);
    setOption(option.text);
    fetchQuestion(option.endpoint);
  }

  // Handle answer change
  function handleAnswerChange(e) {
    // Auto resize text area
    e.target.style.height = "auto";
    e.target.style.height = e.target.scrollHeight + "px";

    // Set Answer
    setAnswer(e.target.value);
  }

  // Handle Answer Select
  function handleAnswerSelect(e, option) {
    if (answer.includes(option)) {
      // Deselect answer
      let index = answer.indexOf(option);
      setAnswer((prev) => {
        let copy = [...prev];
        copy.splice(index, 1);
        return [...copy];
      });
    } else {
      // Set Answer
      if (question.isMultipleOption) {
        if (!answer) {
          setAnswer([option]);
        } else {
          setAnswer((prev) => {
            let copy = [...prev];
            copy.push(option);
            return [...copy];
          });
        }
      } else {
        setAnswer(option);
      }
    }
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
      if (question.schema === "user") {
        let fieldName = question.fieldName;
        dispatch(updateLoggedInUser({ [fieldName]: answer }));
      }

      // Clear answer
      setAnswer("");
      // fetch next Question
      fetchQuestion(question.type);
    } catch (error) {
      console.error("Error posting Question:", error);
    }
  }

  // Handle Back to categories
  function handleBackToCategories() {
    setQuestion(null);
    setOption(null);
    setAnswer("");
  }

  //   clearStates
  function clearStates() {
    setAnswer("");
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
              handleAnswerSelect={handleAnswerSelect}
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
