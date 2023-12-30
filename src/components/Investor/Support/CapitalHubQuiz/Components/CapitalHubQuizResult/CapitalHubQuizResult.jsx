import { Button, Modal } from "react-bootstrap";

export default function CapitalHubQuizResult({
  allAnswered,
  setAllAnswered,
  total,
  correctAnswerCount,
  stopQuiz,
}) {
  const resultText = (result) => {
    if (result < 0.49) {
      return "Better luck next time! :(";
    } else if (result < 0.79) {
      return "Well done!";
    } else {
      return "Are you a Savant?";
    }
  };

  return (
    <Modal
      show={allAnswered}
      onHide={() => setAllAnswered(false)}
      backdrop="static"
      centered
      style={{
        "--bs-modal-bg": "#333",
        "--bs-modal-color": "#fff",
        backgroundColor: "rgba(var(--bs-dark-rgb), 0.05)",
      }}
    >
      <Modal.Body className="d-flex flex-column align-items-center gap-3">
        <div
          className="rounded-circle border d-flex justify-content-center align-items-center"
          style={{ width: "175px", height: "175px" }}
        >
          <p className="m-0" style={{ fontSize: "3rem" }}>
            {correctAnswerCount} / {total}
          </p>
        </div>
        <Modal.Title>{resultText(correctAnswerCount / total)}</Modal.Title>
        <Button
          type="button"
          variant="startup"
          className="px-4 rounded-pill gradient-bg-light"
          onClick={() => stopQuiz()}
        >
          {"End Quiz"}
        </Button>
      </Modal.Body>
    </Modal>
  );
}
