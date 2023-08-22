import React, { useState } from "react";
import "./IntroductoryMessage.scss";
import Send from "../../../../Images/Send.svg";
import { updateIntroMsgAPI } from "../../../../Service/user";

const IntroductoryMessage = ({ title, image, para, input, className }) => {
  const [newIntroMsg, setNewIntroMsg] = useState("");
  const [newPara, setNewPara] = useState("");

  const submitNewIMHandler = async () => {
    try {
      await updateIntroMsgAPI({ introductoryMessage: newIntroMsg });
      setNewPara(newIntroMsg);
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
            className={`title_wrapper ${
              !para ? "title-only-border" : "default-border"
            }`}
          >
            <h6>{title}</h6>
            {/* {image && (
              <div className="image_container">
                <img src={image.video} alt="Video" />
                <img src={image.folder} alt="Folder" />
                <img src={image.threeDots} alt="Three Dots" />
              </div>
            )} */}  
          </div>
        </section>
        {para && (
          <section className="text_section">
            <p>{newPara || para}</p>
          </section>
        )}
        {input && (
          <section className="input_section">
            <div className="input_container">
              <input
                type="text"
                name="introductoryMessage"
                placeholder="Type your text here"
                value={newIntroMsg}
                onChange={(e) => setNewIntroMsg(e.target.value)}
              />
              <div className="right_icons" onClick={submitNewIMHandler}>
                <img src={Send} alt="Cross" />
              </div>
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default IntroductoryMessage;
