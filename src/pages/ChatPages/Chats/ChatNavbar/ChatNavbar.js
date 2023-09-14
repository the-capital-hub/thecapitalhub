import React from "react";
import "./ChatNavbar.scss";
import profileImage from "../../../../Images/Pramod.jpeg";
import CallIcon from '../../../../Images/Chat/Call.svg'
import videoIcon from '../../../../Images/Chat/Video.svg'
import threeDotIcon from '../../../../Images/whiteTheeeDots.svg'



const ChatNavbar = () => {
  return (
    <>
      <div className="chat_navbar_container">
          <div className="left">
            <img src={profileImage} className="rounded_img" />
            <div className="title_and_message">
              <h5 className="name_title">Raju</h5>
              <h5 className="message_title">UI/UX Designer</h5>
              <h4 className="online">Online</h4>
            </div>
          </div>
          <div className="right">
            <img src={CallIcon} className="call"/>
            <img src={videoIcon} className="video"/>
            <img src={threeDotIcon} className="threedot"/>

          </div>
      </div>
    </>
  );
};

export default ChatNavbar;
