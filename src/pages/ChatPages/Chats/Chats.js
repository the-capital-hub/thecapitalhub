import React from "react";
import "./Chats.scss";
import ChatSearch from "./ChatSearch/ChatSearch";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatNavbar from "./ChatNavbar/ChatNavbar";
import ChatDashboard from "./ChatDashboard/ChatDashboard";

const Chats = () => {
  return (
    <>
      <div className="container-fluid chat_main_container">
        <section className="left_section">
          <ChatSearch />
          <ChatSidebar/>

        </section>
        <section className="right_section ">
          <ChatNavbar/>
          <ChatDashboard/>
        </section>
      </div>
    </>
  );
};

export default Chats;
