import React from "react";
import "./ChatSidebar.scss";
import profileImage from "../../../../Images/Pramod.jpeg";
import pinIcon from "../../../../Images/Chat/Pin.svg";
import messageIcon from "../../../../Images/Chat/Chat.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getUserChats } from "../../../../Service/user";
import { useLocation } from 'react-router-dom';


const ChatSidebar = ({ selectedChat, setSelectedUser }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [chats, setChats] = useState([]);
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const chatUserId = queryParams.get('userId');
  useEffect(() => {
    getUserChats(loggedInUser._id)
      .then((res) => {
        setChats(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  }, [loggedInUser]);

  const handleSelectedChat = (chatId, userId) => {
    console.log(userId);
    selectedChat(chatId);
    setSelectedUser(userId);
  };
  return (
    <>
      <div className="chatsidebar_main_container">
        {/* <span style={{ margin: "5px 10px" }}>
          <img src={pinIcon} /> PINNED
        </span> */}
        {/* <div className="person_wise_chat mt-2">
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
          </section>
        </div> */}

        <span style={{ margin: "5px 10px" }}>
          <img src={messageIcon} /> ALL MESSAGE
        </span>
        {chats.map((chat, index) => (
          <div key={index} className="person_wise_chat mt-2">
            {chat.members.map((member) => {
              if (member._id !== loggedInUser._id) {
                return (
                  <section
                    className="user_chat mt-3"
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
                          Hey Hi! there what’s up
                        </h5>
                      </div>
                    </div>
                    <div className="right">
                      <div className="time">09:00 am</div>
                      <div className="notification">2</div>
                    </div>
                  </section>
                );
              }
              return null;
            })}
          </div>
        ))}
      </div>
    </>
  );
};

export default ChatSidebar;
