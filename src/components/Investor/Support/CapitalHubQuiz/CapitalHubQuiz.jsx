// import { Button, Card, Container } from "react-bootstrap";
import "./CapitalHubQuiz.scss";
import CapitalHubQuizIntro from "./Components/CapitalHubQuizIntro/CapitalHubQuizIntro";
import { useEffect, useRef, useState } from "react";
import CapitalHubQuizHeader from "./Components/CapitalHubQuizHeader/CapitalHubQuizHeader";
import { Spinner } from "react-bootstrap";
import CapitalHubQuizMain from "./Components/CapitalHubQuizMain/CapitalHubQuizMain";

const mockQuestions = [];

export default function CapitalHubQuiz() {
  const [ongoing, setOngoing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [quiz, setQuiz] = useState(null);
  const timerRef = useRef();

  // useEffect(() => {
  //   const fetchQuiz = async () => {
  //     setLoading(true);
  //     try {
  //       const { data } = await getAllQuizzes();
  //       console.log("All Quizzes", data);
  //       setQuiz(data[0]);
  //     } catch (error) {
  //       console.error("Error fetching Quiz", error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchQuiz();
  // }, []);

  function startQuiz() {
    setOngoing(true);
  }

  function stopQuiz() {
    setOngoing(false);
  }

  return (
    <div className="quiz-wrapper w-100 ">
      {/* Header */}
      {loading ? (
        <div className="d-flex justify-content-center align-items-center py-5">
          <Spinner variant="primary" />
        </div>
      ) : (
        <>
          <CapitalHubQuizHeader
            duration={quiz.duration}
            ongoing={ongoing}
            stopQuiz={stopQuiz}
            timerRef={timerRef}
          />

          {/* Quiz */}
          <div className="quiz-container container p-0 mx-auto ">
            <>
              {ongoing ? (
                <CapitalHubQuizMain
                  questions={quiz.questions}
                  stopQuiz={stopQuiz}
                  timerRef={timerRef}
                />
              ) : (
                <CapitalHubQuizIntro
                  poster={quiz.poster}
                  startQuiz={startQuiz}
                />
              )}
            </>
          </div>
        </>
      )}
    </div>
  );
}
