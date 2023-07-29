import React from "react";
import "./IntroductoryMessage.scss";
import ThreeDots from "../../../../Images/whiteTheeeDots.svg";
import Folder from "../../../../Images/Folder.svg";
import Video from "../../../../Images/Video.svg";
import Send from "../../../../Images/Send.svg"


const IntroductoryMessage = () => {
  return (
    <>
      <div className="introductory_message_container">
        <div className="box_container">
          <section className="title_section">
            <div className="title_wrapper">
              <h6>Introductory message</h6>
              <div className="image_container">
                <img src={Video} alt="Exit" />
                <img src={Folder} alt="Correct" />
                <img src={ThreeDots} alt="Cross" />
              </div>
            </div>
          </section>
          <section className="text_section">
            <p>
              As the Founder at Capital HUB, Man's all about building great
              start-ups from a simple idea to an elegant reality. Humbled and
              honored to have worked with Angels and VC's across the globe to
              support and grow the startup culture.As the Founder at Capital
              HUB, Man's all about building great start-ups from a simple idea
              to an elegant reality. Humbled and honored to have worked with
              Angels and VC's across the globe to support and grow the startup
              culture.
            </p>
          </section>
          <section className="input_section">
            <div className="input_container">
              <input type="text" placeholder="Type your text here" />
              <div className="right_icons">
                <img src={Send} alt="Cross" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default IntroductoryMessage;
