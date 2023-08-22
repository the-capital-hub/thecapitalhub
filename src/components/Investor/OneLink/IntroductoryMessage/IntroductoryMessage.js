import React from "react";
import "./IntroductoryMessage.scss";
import Send from "../../../../Images/Send.svg";

const IntroductoryMessage = ({ title, image, para, input }) => {
  return (
    <div className="introductory_message_container mt-3">
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
            <p>{para}</p>
          </section>
        )}
        {input && (
          <section className="input_section">
            <div className="input_container">
              <input type="text" placeholder="Type your text here" />
              <div className="right_icons">
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
