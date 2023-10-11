import React, { useState } from "react";
import "./IntroductoryMessage.scss";
import Send from "../../../../Images/Send.svg";
import { updateIntroMsgAPI, postInvestorData } from "../../../../Service/user";
import { useSelector } from "react-redux";

const IntroductoryMessage = ({ title, image, para, previous, input, className, isExitClicked, setCompany, investor = false }) => {
  const [newIntroMsg, setNewIntroMsg] = useState("");
  const [newPara, setNewPara] = useState("");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [showPreviousMessages, setShowPreviousMessages] = useState(false);

  const togglePreviousMessages = () => {
    setShowPreviousMessages(!showPreviousMessages);
  };
  let top3Previous = [];
  if (previous) {
    const sortedPrevious = [...previous];
    top3Previous = sortedPrevious.slice(0, 3);
  }

  const submitNewIMHandler = async () => {
    try {
      const formattedMsg = newIntroMsg.replace(/\n/g, "<br/>");
      if (investor) {
        let updatedMessages = previous;

        if (previous) {
          updatedMessages = [...previous, formattedMsg];
        } else {
          updatedMessages = [formattedMsg];
        }
        await postInvestorData({
          founderId: loggedInUser._id,
          introductoryMessage: formattedMsg,
          previousIntroductoryMessage: updatedMessages,
        });
      } else {
        await updateIntroMsgAPI({ introductoryMessage: formattedMsg });
      }
      setNewPara(formattedMsg);
      setCompany((prevCompany) => ({
        ...prevCompany,
        introductoryMessage: formattedMsg,
      }));
      setNewIntroMsg("");
    } catch (error) {
      console.error("Error updating intro: ", error);
    }
  };

  return (
    <div className={`introductory_message_container mt-3 ${className}`}>
      <div className="box_container">
        <section className="title_section">
          <div
            className={`title_wrapper ${!para ? "title-only-border" : "default-border"
              }`}
          >
            <h6>{title}</h6>
            {para && (
              <button
                className={`toggle-button ${investor ? 'investor' : 'startup'}`}
                onClick={togglePreviousMessages}>
                {showPreviousMessages ? "Hide Previous Messages" : "Show Previous Messages"}
              </button>
            )}
          </div>
        </section>
        {isExitClicked && newPara === "" && (para === undefined || para === "") && (
          <div className="warning_message">Please enter an introductory message.</div>
        )}
        {(para || newPara) && (
          <section className="text_section">
            {showPreviousMessages &&
              <>
                <p><strong>Previous Introductory Message:</strong></p>
                {previous && previous.length > 0 ? (
                  top3Previous?.map((message, index) => (
                    <p
                      key={index}
                      dangerouslySetInnerHTML={{ __html: message }}
                    />
                  ))
                ) : (
                  <p>No previous introductory messages.</p>
                )}
                <hr />
              </>
            }

            <p dangerouslySetInnerHTML={{ __html: newPara || para }} />

          </section>
        )}
        {input && (
          <section className="input_section">
            <div className="input_container">
              <textarea
                type="text"
                name="introductoryMessage"
                placeholder="Type your text here"
                value={newIntroMsg}
                onChange={(e) => setNewIntroMsg(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    submitNewIMHandler();
                  }
                }}
              />
              <div className="right_icons" onClick={submitNewIMHandler}>
                <img src={Send} alt="Send" />
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default IntroductoryMessage;
