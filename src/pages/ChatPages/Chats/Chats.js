import "./Chats.scss";

import ChatSearch from "./ChatSearch/ChatSearch";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatNavbar from "./ChatNavbar/ChatNavbar";
import ChatDashboard from "./ChatDashboard/ChatDashboard";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { io } from "socket.io-client";
import { environment } from "../../../environments/environment";
import { useLocation, useNavigate } from "react-router-dom";
import { findChat, createChat } from "../../../Service/user";
import CommunitiesContainer from "../../../components/Investor/ChatComponents/CommunitiesContainer";
import ChatSettings from "../../../components/Investor/ChatComponents/ChatSettings/ChatSettings";
import CommunityDashboard from "./CommunityDashboard/CommunityDashboard";
import { setChatId, setUserId } from "../../../Store/features/chat/chatSlice";
import backIcon from "../../../Images/Chat/BackIcon.svg";

import selectAChatIcon from "../../../Images/Chat/selectAChat.png";

const Chats = () => {
  // search params
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  // const userId = searchParams.get("userId" );
  const isCommunityOpen = searchParams.get("isCommunityOpen");
  const navigate = useNavigate();

  // Fetch global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const userId = useSelector((state) => state.chat.userId);
  const chatId = useSelector((state) => state.chat.chatId);
  const isCommunitySelected = useSelector(
    (state) => state.chat.isCommunitySelected
  );
  const dispatch = useDispatch();

  const [selectedChat, setSelectedChat] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const [sendMessage, setSendMessage] = useState(null);
  const [recieveMessage, setRecieveMessage] = useState(null);
  const [cleared, setCleared] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isRead, setIsRead] = useState(false);
  // const [isCommunitySelected, setIsCommunitySelected] = useState(false);
  // const previousUrl = window.history.length > 1 ? window.history.go(-1) : null;

  // if (previousUrl) {
  //   console.log('Previous URL:', window.location.href);
  // }

  // When directed to chats scroll page to top
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

  // create chat. Pass userId and loggedInUserId
  const handleCreateChat = async () => {
    await createChat(userId, loggedInUser._id)
      .then((res) => {
        // setSelectedChat(res.data._id);
        // setSelectedUser(userId);
        dispatch(setChatId(res.data._id));
        dispatch(setUserId(userId));
      })
      .catch((error) => {
        console.error("Error creating chat-->", error);
      });
  };

  // When userId changes findchat and set selectedChatId and selectedUserId
  // If a chat does not exist, create a new chat.
  useEffect(() => {
    if (userId) {
      findChat(userId, loggedInUser._id)
        .then((res) => {
          console.log("Result", res);
          if (res.data.length === 0) {
            return handleCreateChat();
          } else {
            // setSelectedChat(res.data._id);
            // setSelectedUser(userId);
            dispatch(setChatId(res.data._id));
            dispatch(setUserId(userId));
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
        {/* Left section */}
        <div className="left_section_wrapper mt-3 mx-3">
          <section className="left_section pe-1 ">
            <span className="back_img rounded-circle shadow-sm" title="Go Back">
              <img
                src={backIcon}
                width={20}
                height={20}
                onClick={() => navigate(-1)}
              />
            </span>
            <ChatSearch />
            <CommunitiesContainer
              isCommunityOpen={isCommunityOpen}
              recieveMessage={recieveMessage}
              sendMessage={sendMessage}
              setIsRead={setIsRead}
              isRead={isRead}
            />
            <ChatSidebar
              recieveMessage={recieveMessage}
              sendMessage={sendMessage}
            />
          </section>
        </div>

        {/* Main Chat section */}
        <section className="main_section my-3 me-3">
          {chatId ? (
            <>
              <ChatNavbar
                isclear={setCleared}
                cleared={cleared}
                setIsSettingsOpen={setIsSettingsOpen}
              />
              {!isCommunitySelected && (
                <ChatDashboard
                  setSendMessage={setSendMessage}
                  recieveMessage={recieveMessage}
                  cleared={cleared}
                />
              )}
              {isCommunitySelected && (
                <CommunityDashboard
                  setSendMessage={setSendMessage}
                  recieveMessage={recieveMessage}
                  cleared={cleared}
                  setIsRead={setIsRead}
                  isRead={isRead}
                />
              )}
            </>
          ) : (
            <div className="select-chat-container">
              <img src={selectAChatIcon} alt="select a chat" />
              <h3 className="orange">Select a message</h3>
            </div>
          )}
        </section>

        {/*Right section chat settings */}
        {isSettingsOpen ? (
          <div className="right_section_wrapper">
            <section className="right_section mt-3 w-100 ">
              <ChatSettings setIsSettingsOpen={setIsSettingsOpen} />
            </section>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Chats;
