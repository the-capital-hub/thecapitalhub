import React from "react";
import "./ChatDashboard.scss";
import profilePic from "../../../../Images/Pramod.jpeg";
import sendIcon from "../../../../Images/Send.svg";
const ChatDashboard = () => {
  const messages = [
    { text: "Hello", sender: "Harideep" },
    { text: "Hi there!", sender: "You" },
    // Add more messages here
  ];

  return (
    <div className="chat_dashboard_container">
      <h6 className="today_text">Today</h6>
      <div className="chat_messages">
        <section className="other_sender">
          <img className="image_profile" src={profilePic} alt="" />
          <div className="other_messages">
            <div className="time_name">
              <h6 className="name_title">Harideep </h6>{" "}
              <h6 className="time">07:56 am</h6>
            </div>

            <div className="message_container">Hello Pormod Badiger sir</div>
            <div className="message_container">
              The fintech of the company will provide a good office environment
              in the office and it is start up.
            </div>
          </div>
        </section>

        <section className="my_message_main">
          <div className="my_messages">
            <div className="time_name_image">
              <div className="time_name">
                <h6 className="name_title">Harideep </h6>{" "}
                <h6 className="time">07:56 am</h6>
              </div>
              <img className="image_profile" src={profilePic} alt="" />
            </div>

            <div className="mymessage_container">Hello Pormod Badiger sir</div>
            <div className="mymessage_container">
              The fintech of the company will provide a good office environment
              in the office and it is start up.
            </div>
          </div>
        </section>
      </div>
      <section className="chat_input_section">
        <div className="chat_input_container">
          <input
            type="text"
            name="introductoryMessage"
            placeholder="Your message..."
          />
          <div className="right_icons">
            <img src={sendIcon} alt="Send" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatDashboard;
