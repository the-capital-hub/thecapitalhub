import React, { useEffect, useState, useRef } from "react";
import "./ChatDashboard.scss";
import profilePic from "../../../../Images/Pramod.jpeg";
import sendIcon from "../../../../Images/Send.svg";
import { useSelector } from "react-redux";
import {
  getMessageByChatId,
  getUserAndStartUpByUserIdAPI,
  addMessage,
  markMessagesAsRead
} from "../../../../Service/user";

const ChatDashboard = ({ chatId, userId, setSendMessage, recieveMessage }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [sendText, setSendText] = useState("");
  const chatMessagesContainerRef = useRef(null);
  
  useEffect(() => {
    if (chatMessagesContainerRef.current) {
      chatMessagesContainerRef.current.scrollTop = chatMessagesContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    markMessagesAsRead(chatId, userId)
      .then((response) => {
        console.log(response.message);
      })
      .catch((error) => {
        console.error("Error marking messages as read:", error);
      });
  }, [chatId, userId, recieveMessage]);

  useEffect(() => {
    console.log(recieveMessage);
    if (recieveMessage !== null && recieveMessage?.chatId === chatId) {
      setMessages((prevMessages) => [...prevMessages, recieveMessage]);
    }
  }, [recieveMessage, chatId]);

  useEffect(() => {
    getMessageByChatId(chatId)
      .then((res) => {
        setMessages(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
    getUserAndStartUpByUserIdAPI(userId)
      .then((res) => {
        setUser(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  }, [chatId, userId]);

  const groupMessagesByDate = (messages) => {
    const groupedMessages = [];
    let currentDate = null;
  
    for (const message of messages) {
      const messageDate = new Date(message.createdAt);
      const today = new Date();
  
      if (
        currentDate &&
        currentDate.getDate() === messageDate.getDate() &&
        currentDate.getMonth() === messageDate.getMonth() &&
        currentDate.getFullYear() === messageDate.getFullYear()
      ) {
        groupedMessages[groupedMessages.length - 1].messages.push(message);
      } else if (
        currentDate &&
        currentDate.getDate() - messageDate.getDate() === 1 &&
        currentDate.getMonth() === messageDate.getMonth() &&
        currentDate.getFullYear() === messageDate.getFullYear()
      ) {
        currentDate = messageDate;
        groupedMessages.push({ date: "Yesterday", messages: [message] });
      } else {
        currentDate = messageDate;
        const formattedDate = `${messageDate.getDate()}-${
          messageDate.getMonth() + 1
        }-${messageDate.getFullYear()}`;
        groupedMessages.push({
          date: today.getDate() === messageDate.getDate() ? "Today" : formattedDate,
          messages: [message],
        });
      }
    }
  
    return groupedMessages;
  };
  
  const groupedMessages = groupMessagesByDate(messages);

  const handleSend = () => {
    const message = {
      senderId: loggedInUser._id,
      text: sendText,
      chatId: chatId,
    };
    addMessage(message)
      .then(({ data }) => {
        setMessages([...messages, data]);
        console.log(data);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
    const recieverId = userId;
    const createdAt =  new Date().toISOString();
    setSendMessage({ ...message, recieverId, createdAt });
    setSendText("");
  };

  const formatTime = (date) => {
    const options = {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true, 
    };
  
    return new Intl.DateTimeFormat('en-US', options).format(date);
  };

  
  return (
    <div className="chat_dashboard_container">
      <div className="chat_messages_group" ref={chatMessagesContainerRef}>
      {groupedMessages.map((group) => (
        <div key={group.date}>
          <h6 className="date_header">{group.date}</h6>
          <div className="chat_messages">
            {group.messages.map((message) =>
              message.senderId === loggedInUser._id ? (
                <section className="my_message_main" key={message._id}>
                  <div className="my_messages">
                    <div className="time_name_image">
                      <div className="time_name">
                        <h6 className="name_title">{loggedInUser?.firstName} {loggedInUser?.lastName}</h6>{" "}
                        <h6 className="time">{formatTime(new Date(message.createdAt))}</h6>
                      </div>
                      <img className="image_profile" src={loggedInUser?.profilePicture} alt="" />
                    </div>

                    <div className="mymessage_container">{message?.text}</div>
                  </div>
                </section>
              ) : (
                <section className="other_sender" key={message._id}>
                  <img className="image_profile" src={user?.profilePicture} alt="" />
                  <div className="other_messages">
                    <div className="time_name">
                      <h6 className="name_title">{user?.firstName} {user?.lastName} </h6>{" "}
                      <h6 className="time">{formatTime(new Date(message.createdAt))}</h6>
                    </div>

                    <div className="message_container">{message?.text}</div>

                  </div>
                </section>
              )
            )}
          </div>
        </div>
      ))}
      </div>
      <section className="chat_input_section">
        <div className="chat_input_container">
          <input
            type="text"
            name="introductoryMessage"
            placeholder="Your message..."
            onChange={(e) => setSendText(e.target.value)}
            value={sendText}
          />
          <div className="right_icons">
            <img
              src={sendIcon}
              alt="Send"
              onClick={() => handleSend()}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ChatDashboard;
