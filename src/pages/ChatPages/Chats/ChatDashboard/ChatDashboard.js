import React from "react";
import "./ChatDashboard.scss";
import profilePic from "../../../../Images/Pramod.jpeg";
import sendIcon from "../../../../Images/Send.svg";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import {
  getMessageByChatId,
  getUserAndStartUpByUserIdAPI,
  addMessage,
} from "../../../../Service/user";

const ChatDashboard = ({ chatId, userId, setSendMessage, recieveMessage, }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [sendText, setSendText] = useState("");

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

  const handleSend = () => {
    const message = {
      senderId: loggedInUser._id,
      text: sendText,
      chatId: chatId,
    };
    addMessage(message)
    .then(({data}) => {
      setMessages([...messages, data]);
      console.log(data);
    })
    .catch((error) => {
      console.error("Error-->", error);
    });
    const recieverId = userId;
    setSendMessage({ ...message, recieverId });
    setSendText("");
  }
  return (
    <div className="chat_dashboard_container">
      <h6 className="today_text">Today</h6>
      <div className="chat_messages">
        {messages?.map((message) => (
          message.senderId === loggedInUser._id ? (
            <section className="my_message_main" key={message?.id}>
              <div className="my_messages">
                <div className="time_name_image">
                  <div className="time_name">
                    <h6 className="name_title">{loggedInUser?.firstName} {loggedInUser?.lastName}</h6>{" "}
                    <h6 className="time">07:56 am</h6>
                  </div>
                  <img className="image_profile" src={loggedInUser?.profilePicture} alt="" />
                </div>

                <div className="mymessage_container">{message?.text}</div>
              </div>
            </section>
          ) : (
            <section className="other_sender" key={message?.id}>
              <img className="image_profile" src={user?.profilePicture} alt="" />
              <div className="other_messages">
                <div className="time_name">
                  <h6 className="name_title">{user?.firstName} {user?.lastName} </h6>{" "}
                  <h6 className="time">07:56 am</h6>
                </div>

                <div className="message_container">{message?.text}</div>

              </div>
            </section>
          )
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
