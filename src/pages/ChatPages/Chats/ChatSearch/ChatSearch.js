import React from "react";
import "./ChatSearch.scss";
import backIcon from "../../../../Images/Chat/BackIcon.svg";

const ChatSearch = () => {
  return (
    <>
      <div className="chat_search_container">
        <span>
          <img src={backIcon} className="back_img" />
        </span>
        <h1 className="chat_title">Chats</h1>
        <div className="inputs">
          <input type="search" className="search_chat" />
        </div>
      </div>
    </>
  );
};

export default ChatSearch;
