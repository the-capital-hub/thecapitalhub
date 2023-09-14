import React from "react";
import "./ChatSidebar.scss";
import profileImage from "../../../../Images/Pramod.jpeg";
import pinIcon from "../../../../Images/Chat/Pin.svg";
import messageIcon from "../../../../Images/Chat/Chat.svg"
const ChatSidebar = () => {
  return (
    <>
      <div className="chatsidebar_main_container">
        <span style={{ margin: "5px 10px" }}>
          <img src={pinIcon} /> PINNED
        </span>
        <div className="person_wise_chat mt-2">
          <section className="user_chat mt-3">
            <div className="left">
              <img src={profileImage} className="rounded_img" />
              <div className="title_and_message">
                <h5 className="name_title">Raju</h5>
                <h5 className="message_title">Hey Hi! there what’s up</h5>
              </div>
            </div>
            <div className="right">
              <div className="time">09:00 am</div>
              <div className="notification">2</div>
            </div>
          </section>
          <section className="user_chat mt-3">
            <div className="left">
              <img src={profileImage} className="rounded_img" />
              <div className="title_and_message">
                <h5 className="name_title">Raju</h5>
                <h5 className="message_title">Hey Hi! there what’s up</h5>
              </div>
            </div>
            <div className="right">
              <div className="time">09:00 am</div>
              <div className="notification">2</div>
            </div>
          </section>
          <section className="user_chat mt-3">
            <div className="left">
              <img src={profileImage} className="rounded_img" />
              <div className="title_and_message">
                <h5 className="name_title">Raju</h5>
                <h5 className="message_title">Hey Hi! there what’s up</h5>
              </div>
            </div>
            <div className="right">
              <div className="time">09:00 am</div>
              <div className="notification">2</div>
            </div>
          </section>
          <section className="user_chat mt-3">
            <div className="left">
              <img src={profileImage} className="rounded_img" />
              <div className="title_and_message">
                <h5 className="name_title">Raju</h5>
                <h5 className="message_title">Hey Hi! there what’s up</h5>
              </div>
            </div>
            <div className="right">
              <div className="time">09:00 am</div>
              <div className="notification">2</div>
            </div>
          </section>
        </div>

        <span style={{ margin: "5px 10px" }}>
          <img src={messageIcon} /> ALL MESSAGE
        </span>
        <div className="person_wise_chat mt-2">
          <section className="user_chat mt-3">
            <div className="left">
              <img src={profileImage} className="rounded_img" />
              <div className="title_and_message">
                <h5 className="name_title">Raju</h5>
                <h5 className="message_title">Hey Hi! there what’s up</h5>
              </div>
            </div>
            <div className="right">
              <div className="time">09:00 am</div>
              <div className="notification">2</div>
            </div>
          </section>
          <section className="user_chat mt-3">
            <div className="left">
              <img src={profileImage} className="rounded_img" />
              <div className="title_and_message">
                <h5 className="name_title">Raju</h5>
                <h5 className="message_title">Hey Hi! there what’s up</h5>
              </div>
            </div>
            <div className="right">
              <div className="time">09:00 am</div>
              <div className="notification">2</div>
            </div>
          </section>
          <section className="user_chat mt-3">
            <div className="left">
              <img src={profileImage} className="rounded_img" />
              <div className="title_and_message">
                <h5 className="name_title">Raju</h5>
                <h5 className="message_title">Hey Hi! there what’s up</h5>
              </div>
            </div>
            <div className="right">
              <div className="time">09:00 am</div>
              <div className="notification">2</div>
            </div>
          </section>
          <section className="user_chat mt-3">
            <div className="left">
              <img src={profileImage} className="rounded_img" />
              <div className="title_and_message">
                <h5 className="name_title">Raju</h5>
                <h5 className="message_title">Hey Hi! there what’s up</h5>
              </div>
            </div>
            <div className="right">
              <div className="time">09:00 am</div>
              <div className="notification">2</div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
