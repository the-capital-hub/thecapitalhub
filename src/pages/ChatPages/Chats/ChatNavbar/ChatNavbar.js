import React from "react";
import "./ChatNavbar.scss";
import profileImage from "../../../../Images/Pramod.jpeg";
import CallIcon from "../../../../Images/Chat/Call.svg";
import videoIcon from "../../../../Images/Chat/Video.svg";
import threeDotIcon from "../../../../Images/whiteTheeeDots.svg";
import { useEffect, useState } from "react";
import {
  getUserAndStartUpByUserIdAPI,
  clearChat,
} from "../../../../Service/user";

const ChatNavbar = ({ chatId, userId, isclear, cleared }) => {
  const [chatkebabMenu, setChatkebabMenu] = useState(false);

  const handleClearChat = () => {
    clearChat(chatId)
      .then((res) => {
        if (res.status === 200) {
          isclear(!cleared);
        }
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  };

  const [user, setUser] = useState(null);
  useEffect(() => {
    getUserAndStartUpByUserIdAPI(userId)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  }, [userId]);
  return (
    <>
      <div className="chat_navbar_container">
        <div className="left">
          <img src={user?.profilePicture} className="rounded_img" />
          <div className="title_and_message">
            <h5 className="name_title">
              {user?.firstName} {user?.lastName}
            </h5>
            <h5 className="message_title">{user?.designation}</h5>
            {/* <h4 className="online">Online</h4> */}
          </div>
        </div>
        <div className="right ">
          {/* <img src={CallIcon} className="call"/>
            <img src={videoIcon} className="video"/> */}
          <img
            src={threeDotIcon}
            className="threedot"
            onClick={() => setChatkebabMenu(!chatkebabMenu)}
          />
        </div>
      </div>
      {chatkebabMenu && (
        <ul className="kebab_menu border rounded shadow-sm p-3">
          <li onClick={handleClearChat}>Clear Chat</li>
        </ul>
      )}
    </>
  );
};

export default ChatNavbar;
