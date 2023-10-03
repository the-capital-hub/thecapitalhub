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
import { useLocation, useSearchParams } from "react-router-dom";
import { findChat, createChat } from "../../../Service/user";
import CommunitiesContainer from "../../../components/Investor/ChatComponents/CommunitiesContainer";
import CommunityDashboard from "./CommunityDashboard/CommunityDashboard";

const Chats = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const userId = searchParams.get("userId");
  const isCommunityOpen = searchParams.get("isCommunityOpen");
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);
  const [cleared, setCleared] = useState(false);
  const [isCommunitySelected, setIsCommunitySelected] = useState(false);
  // const previousUrl = window.history.length > 1 ? window.history.go(-1) : null;

  // if (previousUrl) {
  //   console.log('Previous URL:', window.location.href);
  // }

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

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
    console.log(sendMessage);
    if (sendMessage !== null) {
      socket.current?.emit("send-message", sendMessage);
    }
  }, [sendMessage]);

  const handleCreateChat = async () => {
    await createChat(userId, loggedInUser._id)
      .then((res) => {
        setSelectedChat(res.data._id);
        setSelectedUser(userId);
      })
      .catch((error) => {
        console.error("Error creating chat-->", error);
      });
  };
  useEffect(() => {
    if (userId) {
      findChat(userId, loggedInUser._id)
        .then((res) => {
          console.log("Result", res);
          if (res.data.length === 0) {
            return handleCreateChat();
          } else {
            setSelectedChat(res.data._id);
            setSelectedUser(userId);
            console.log("Chat:", res.data._id);
          }
        })
        .catch((error) => {
          console.error("Error-->", error);
        });
    }
  }, [userId]);
  return (
    <>
      <div className="container-fluid chat_main_container">
        <section className="left_section my-3 ">
          <ChatSearch />
          <CommunitiesContainer
            isCommunityOpen={isCommunityOpen}
            selectedChat={setSelectedChat}
            setIsCommunitySelected={setIsCommunitySelected}
          />
          <ChatSidebar
            selectedChat={setSelectedChat}
            setSelectedUser={setSelectedUser}
            recieveMessage={recieveMessage}
            sendMessage={sendMessage}
            setIsCommunitySelected={setIsCommunitySelected}
          />
        </section>
        <section className="right_section my-3 ">
          {selectedChat &&
            <ChatNavbar
              chatId={selectedChat}
              userId={selectedUser}
              isclear={setCleared}
              cleared={cleared}
              isCommunitySelected={isCommunitySelected}
            />
          }
          {!isCommunitySelected && (
            <ChatDashboard
              chatId={selectedChat}
              userId={selectedUser}
              setSendMessage={setSendMessage}
              recieveMessage={recieveMessage}
              cleared={cleared}
            />
          )}
          {isCommunitySelected && (
            <CommunityDashboard
              chatId={selectedChat}
              userId={selectedUser}
              setSendMessage={setSendMessage}
              recieveMessage={recieveMessage}
              cleared={cleared}
            />
          )}
        </section>
      </div>
    </>
  );
};

export default Chats;
