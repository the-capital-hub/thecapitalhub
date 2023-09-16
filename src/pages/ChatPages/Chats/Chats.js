import React from "react";
import "./Chats.scss";
import ChatSearch from "./ChatSearch/ChatSearch";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatNavbar from "./ChatNavbar/ChatNavbar";
import ChatDashboard from "./ChatDashboard/ChatDashboard";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { io } from "socket.io-client";
import { environment } from "../../../environments/environment";

const Chats = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);
  
  const socket = useRef();
  
  const disconnectSocket = () => {
    socket.current?.disconnect();
  };
  const disconnectFromServer = () => {
    socket.current?.emit("disconnected");
  };
  
  useEffect(() => {
    socket.current = io(environment.baseUrl);
    socket.current.emit("new-user-add", loggedInUser?._id);
    socket.current.on("get-users", (users) => {
      setOnlineUsers(users);
    });
    return () => {
      disconnectFromServer();
      disconnectSocket();
    };
  }, [loggedInUser]);

  useEffect(() => {
    console.log("recieve");
    socket.current?.on("recieve-message", (data) => {
      console.log(data);
      setRecieveMessage(data);
    });
  }, [socket]);

  useEffect(() => {
    console.log("Send");
    if (sendMessage !== null) {
      socket.current?.emit("send-message", sendMessage);
    }
  }, [sendMessage])

  return (
    <>
      <div className="container-fluid chat_main_container">
        <section className="left_section">
          <ChatSearch />
          <ChatSidebar
            selectedChat={setSelectedChat}
            setSelectedUser={setSelectedUser}
          />

        </section>
        <section className="right_section ">
          {selectedChat && (
            <>
              <ChatNavbar
                chatId={selectedChat}
                userId={selectedUser}
              />
              <ChatDashboard
                chatId={selectedChat}
                userId={selectedUser}
                setSendMessage={setSendMessage}
                recieveMessage={recieveMessage}
              />
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Chats;
