import React from "react";
import "./ChatSidebar.scss";
import profileImage from "../../../../Images/Pramod.jpeg";
import pinIcon from "../../../../Images/Chat/Pin.svg";
import messageIcon from "../../../../Images/Chat/Chat.svg";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getUserChats,
  getMessageByChatId,
  getUnreadMessageCount,
  togglePinMessage,
  getPinnedChat,
} from "../../../../Service/user";
import { useLocation } from "react-router-dom";
import {
  setChatId,
  setUserId,
  setIsCommuntySelected,
} from "../../../../Store/features/chat/chatSlice";

const ChatSidebar = ({ recieveMessage, sendMessage }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  const [chats, setChats] = useState([]);
  const [pinnedChats, setPinnedChats] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const chatUserId = queryParams.get("userId");
  const [latestMessages, setLatestMessages] = useState({});
  const [unreadMessageCounts, setUnreadMessageCounts] = useState({});
  const [dates, setDates] = useState({});
  const [selectedUserChat, setSelectedUserChat] = useState(null);
  const [pinnedChat, setPinnedChat] = useState(false);

  // Handle PinClick
  const handlePinClick = (chatId) => {
    togglePinMessage(loggedInUser._id, chatId).then((res) => {
      console.log(res);
      setPinnedChat(true);
      setTimeout(() => {
        setPinnedChat(false);
      }, 1000);
    });
  };

  useEffect(() => {
    getPinnedChat(loggedInUser._id).then((res) => {
      console.log(res.data);
      setPinnedChats(res.data);
      res.data.forEach((chat) => {
        handleGetMessageByChatId(chat._id);
        handleGetUnreadMessageCount(chat._id);
      });
    });
    getUserChats(loggedInUser._id)
      .then((res) => {
        setChats(res.data);
        console.log(res.data);
        res.data.forEach((chat) => {
          handleGetMessageByChatId(chat._id);
          handleGetUnreadMessageCount(chat._id);
        });
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  }, [loggedInUser, sendMessage, recieveMessage, selectedUserChat, pinnedChat]);

  // Handle selected chat
  const handleSelectedChat = (chatId, userId) => {
    console.log(userId);
    dispatch(setChatId(chatId));
    dispatch(setUserId(userId));
    dispatch(setIsCommuntySelected(false));

    setSelectedUserChat(userId);
  };

  const handleGetMessageByChatId = (chatId) => {
    getMessageByChatId(chatId)
      .then((res) => {
        const latestMessage = res.data[res.data.length - 1];
        if (latestMessage) {
          let messageText = latestMessage.text;
          if (latestMessage.video) {
            messageText = "video";
          } else if (latestMessage.documents) {
            messageText = "document";
          } else if (latestMessage.images) {
            messageText = "image";
          }
          setLatestMessages((prevLatestMessages) => ({
            ...prevLatestMessages,
            [chatId]: messageText,
          }));
          setDates((prevLatestMessages) => ({
            ...prevLatestMessages,
            [chatId]: latestMessage.createdAt,
          }));
        }
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  };

  const handleGetUnreadMessageCount = (chatId) => {
    getUnreadMessageCount(chatId, loggedInUser._id)
      .then((res) => {
        setUnreadMessageCounts((prevUnreadMessageCounts) => ({
          ...prevUnreadMessageCounts,
          [chatId]: res.data,
        }));
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  };

  const formatTimestamp = (timestamp) => {
    const messageDate = new Date(timestamp);
    const currentDate = new Date();
    const isToday =
      messageDate.getDate() === currentDate.getDate() &&
      messageDate.getMonth() === currentDate.getMonth() &&
      messageDate.getFullYear() === currentDate.getFullYear();
    const isYesterday =
      messageDate.getDate() === currentDate.getDate() - 1 &&
      messageDate.getMonth() === currentDate.getMonth() &&
      messageDate.getFullYear() === currentDate.getFullYear();
    if (isToday) {
      const hours = messageDate.getHours();
      const minutes = messageDate.getMinutes();
      return `${hours}:${minutes < 10 ? "0" : ""}${minutes}`;
    } else if (isYesterday) {
      return "Yesterday";
    } else {
      const options = { year: "numeric", month: "short", day: "numeric" };
      return messageDate.toLocaleDateString(undefined, options);
    }
  };

  return (
    <>
      <div className="chatsidebar_main_container">
        <div className="chatsidebar_content py-2 ">
          <span style={{ margin: "5px 20px" }}>
            <img src={pinIcon} /> PINNED
          </span>
          {/* <div className="person_wise_chat mt-2"> */}
          {/* <section className="user_chat mt-3">
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
            </section> */}
          {pinnedChats?.map((chat, index) => (
            <div key={index} className="person_wise_chat mt-2">
              {chat.members.map((member) => {
                if (member._id !== loggedInUser._id) {
                  const inputString = latestMessages[chat._id];
                  const unreadMessageCount = unreadMessageCounts[chat._id];
                  const messageTime = formatTimestamp(dates[chat._id]);
                  const numberOfCharacters = 13;
                  let latestMessage;
                  if (inputString?.length > numberOfCharacters) {
                    latestMessage =
                      inputString.substring(0, numberOfCharacters) + "...";
                  } else {
                    latestMessage = inputString;
                  }
                  return (
                    <section
                      className="user_chat mt-3"
                      key={member._id}
                      onClick={() => handleSelectedChat(chat._id, member._id)}
                    >
                      <div className="left d-flex justify-content-between">
                        <img
                          src={member.profilePicture}
                          alt="Profile"
                          className="rounded_img"
                        />
                        <div className="title_and_message">
                          <h5 className="name_title">
                            {member.firstName} {member.lastName}
                          </h5>
                          <h5 className="message_title">
                            {latestMessage || "No messages yet"}
                          </h5>
                        </div>
                      </div>
                      <div className="right">
                        {messageTime !== "Invalid Date" && (
                          <div className="time">{messageTime}</div>
                        )}
                        <img
                          src={pinIcon}
                          className="pt-1 px-1 ms-auto"
                          onClick={() => handlePinClick(chat._id)}
                          alt="Pin"
                        />
                        {unreadMessageCount > 0 && (
                          <div className="notification">
                            {unreadMessageCount}
                          </div>
                        )}
                      </div>
                    </section>
                  );
                }
                return null;
              })}
            </div>
          ))}
          {/* </div> */}
          <span style={{ margin: "10px 0 5px 20px" }}>
            <img src={messageIcon} /> ALL MESSAGE
          </span>
          {chats.map((chat, index) => (
            <div key={index} className="person_wise_chat mt-2">
              {chat.members.map((member) => {
                if (member._id !== loggedInUser._id) {
                  const inputString = latestMessages[chat._id];
                  const unreadMessageCount = unreadMessageCounts[chat._id];
                  const messageTime = formatTimestamp(dates[chat._id]);
                  const numberOfCharacters = 13;
                  let latestMessage;
                  if (inputString?.length > numberOfCharacters) {
                    latestMessage =
                      inputString.substring(0, numberOfCharacters) + "...";
                  } else {
                    latestMessage = inputString;
                  }
                  return (
                    <section
                      className="user_chat mt-3 "
                      key={member._id}
                      onClick={() => handleSelectedChat(chat._id, member._id)}
                    >
                      <div className="left">
                        <img
                          src={member.profilePicture}
                          alt="Profile"
                          className="rounded_img"
                        />
                        <div className="title_and_message">
                          <h5 className="name_title">
                            {member.firstName} {member.lastName}
                          </h5>
                          <h5 className="message_title">
                            {latestMessage || "No messages yet"}
                          </h5>
                        </div>
                      </div>
                      <div className="right">
                        {messageTime !== "Invalid Date" && (
                          <div className="time">{messageTime}</div>
                        )}
                        <img
                          src={pinIcon}
                          className="pt-1 px-1 "
                          onClick={() => handlePinClick(chat._id)}
                          alt="Pin"
                        />
                        {unreadMessageCount > 0 && (
                          <div className="notification">
                            {unreadMessageCount}
                          </div>
                        )}
                      </div>
                    </section>
                  );
                }
                return null;
              })}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ChatSidebar;
