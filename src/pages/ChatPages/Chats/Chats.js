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
import { useLocation } from "react-router-dom";
import { findChat, createChat } from "../../../Service/user";

const Chats = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
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

  const handleCreateChat = async () => {
    await createChat(userId, loggedInUser._id)
      .then((res) => {
        setSelectedChat(res.data._id);
        setSelectedUser(userId);
      })
      .catch((error) => {
        console.error("Error creating chat-->", error);
      });
  }
  useEffect(() => {
    if (userId) {
      findChat(userId, loggedInUser._id)
        .then((res) => {
          console.log("Result", res);
          if (res.data.length === 0) {
            return handleCreateChat();
          } else {
            setSelectedChat(res.data._id)
            setSelectedUser(userId);
            console.log("Chat:", res.data._id);
          }
        })
        .catch((error) => {
          console.error("Error-->", error);
        });
    }
  }, [userId])
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
