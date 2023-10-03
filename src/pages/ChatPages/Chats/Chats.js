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
import SettingsHeader from "../../../components/Investor/ChatComponents/ChatSettings/SettingsHeader";
import SettingsAbout from "../../../components/Investor/ChatComponents/ChatSettings/SettingsAbout";
import CommunitiesIcon from "../../../components/Investor/ChatComponents/CommunitiesIcon";
import SettingsBlackHeader from "../../../components/Investor/ChatComponents/ChatSettings/SettingsBlackHeader";
import SettingsCommunityBody from "../../../components/Investor/ChatComponents/ChatSettings/SettingsCommunityBody";
import SettingsBlackBody from "../../../components/Investor/ChatComponents/ChatSettings/SettingsBlackBody";
import MediaIcon from "../../../Images/Chat/media.svg";
import SettingsMediaBody from "../../../components/Investor/ChatComponents/ChatSettings/SettingsMediaBody";
import IconFile from "../../../components/Investor/SvgIcons/IconFile";
import SettingsFilesBody from "../../../components/Investor/ChatComponents/ChatSettings/SettingsFilesBody";

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
        <section className="left_section my-3  border border-info">
          <ChatSearch />
          <CommunitiesContainer isCommunityOpen={isCommunityOpen} />
          <ChatSidebar
            selectedChat={setSelectedChat}
            setSelectedUser={setSelectedUser}
            recieveMessage={recieveMessage}
            sendMessage={sendMessage}
          />
        </section>
        <section className="main_section my-3">
          {selectedChat && (
            <>
              <ChatNavbar
                chatId={selectedChat}
                userId={selectedUser}
                isclear={setCleared}
                cleared={cleared}
              />
              <ChatDashboard
                chatId={selectedChat}
                userId={selectedUser}
                setSendMessage={setSendMessage}
                recieveMessage={recieveMessage}
                cleared={cleared}
              />
            </>
          )}
        </section>

        {/* chat setting */}
        <section className="right_section my-3 me-3 ">
          <div className="chat_settings bg-white rounded-4 shadow-sm p-3">
            {/* Settings Header */}
            <SettingsHeader />

            {/* Settings About */}
            <SettingsAbout />

            {/* Settings - member in communities */}
            <div className="settings_member_communities py-4 border-bottom">
              <SettingsBlackHeader>
                <CommunitiesIcon width="17px" height="17px" />
                <p
                  className="text-uppercase m-0"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  member in {"two"} communities
                </p>
              </SettingsBlackHeader>
              <SettingsBlackBody>
                <SettingsCommunityBody />
              </SettingsBlackBody>
            </div>

            {/* Settings - media */}
            <div className="settings_media py-4 border-bottom">
              <SettingsBlackHeader>
                <img src={MediaIcon} alt="media" />
                <p
                  className="text-uppercase m-0"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  media ({"22"})
                </p>
                <p
                  className="text-capitalize m-0 orange_underline text_orange ms-auto"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  show all
                </p>
              </SettingsBlackHeader>
              <SettingsBlackBody>
                <SettingsMediaBody />
              </SettingsBlackBody>
            </div>

            {/* Settings - Files */}
            <div className="settings_files py-4">
              <SettingsBlackHeader>
                <IconFile />
                <p
                  className="text-uppercase m-0"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  file type ({"12"})
                </p>
                <p
                  className="text-capitalize m-0 orange_underline text_orange ms-auto"
                  style={{ fontSize: "12px", fontWeight: "400" }}
                >
                  show all
                </p>
              </SettingsBlackHeader>
              <SettingsBlackBody>
                <SettingsFilesBody />
              </SettingsBlackBody>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Chats;
