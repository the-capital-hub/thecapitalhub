import React, { useEffect, useState, useRef } from "react";
import "./ChatDashboard.scss";
import sendIcon from "../../../../Images/Send.svg";
import { useSelector } from "react-redux";
import {
  getMessageByChatId,
  getUserAndStartUpByUserIdAPI,
  addMessage,
  markMessagesAsRead,
  getStartupByFounderId,
  deleteMessage,
} from "../../../../Service/user";

import attachmentGreyIcon from "../../../../Images/Chat/attachtment-grey.svg";
import attachmentOrangeIcon from "../../../../Images/Chat/attachment-orange.svg";
import imageIcon from "../../../../Images/Chat/image.svg";
import documentIcon from "../../../../Images/Chat/document.svg";
import videoIcon from "../../../../Images/Chat/attachVideo.svg";
import onelinkIcon from "../../../../Images/Chat/Onelink.svg";
import { getBase64 } from "../../../../utils/getBase64";
import Linkify from "react-linkify";
import AfterSuccessPopUp from "../../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import ChatDeletePopup from "../ChatDeletePopup/ChatDeletePopup";
import ChatDropDownMenu from "../ChatDropDownMenu/ChatDropDownMenu";
import { s3 } from "../../../../Service/awsConfig";
import { IoCheckmarkDone } from "react-icons/io5";

const ChatDashboard = ({ setSendMessage, recieveMessage, cleared }) => {
  // Fetch global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const chatId = useSelector((state) => state.chat.chatId);
  const userId = useSelector((state) => state.chat.userId);

  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [sendText, setSendText] = useState("");
  const chatMessagesContainerRef = useRef(null);
  const [isSent, setIsSent] = useState(false);

  const [showFeaturedPostSuccess, setShowFeaturedPostSuccess] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [msgId, setMsgId] = useState("");
  const [messageMenu, setMessageMenu] = useState(true);

  const handleMouseEnter = () => {
    setMessageMenu(false);
  };

  const handleMouseLeave = () => {
    setMessageMenu(true);
  };
  const handleSetDeletePopup = () => {
    setDeletePopup(true);
  };
  const handleIdBack = (data) => {
    setMsgId(data);
  };

  const hadilDeleteOk = async () => {
    try {
      const result = await deleteMessage(msgId);
      if (result) {
        setShowFeaturedPostSuccess(true);
        setDeletePopup(false);
      }
    } catch (error) {
      console.error("Error likeDislike comment : ", error);
    }
  };

  useEffect(() => {
    if (chatMessagesContainerRef.current) {
      chatMessagesContainerRef.current.scrollTop =
        chatMessagesContainerRef.current.scrollHeight;
    }
  }, [messages, recieveMessage]);

  useEffect(() => {
    markMessagesAsRead(chatId, userId)
      .then((response) => {})
      .catch((error) => {
        console.error("Error marking messages as read:", error);
      });
  }, [chatId, userId, recieveMessage]);

  useEffect(() => {
    if (recieveMessage !== null && recieveMessage?.chatId === chatId) {
      setMessages((prevMessages) => [...prevMessages, recieveMessage]);
    }
  }, [recieveMessage, chatId]);

  useEffect(() => {
    getMessageByChatId(chatId)
      .then((res) => {
        setMessages(res.data);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  }, [chatId, cleared, isSent, showFeaturedPostSuccess]);

  useEffect(() => {
    getUserAndStartUpByUserIdAPI(userId)
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  }, [userId]);

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
          date:
            today.getDate() === messageDate.getDate() ? "Today" : formattedDate,
          messages: [message],
        });
      }
    }

    return groupedMessages;
  };

  const groupedMessages = groupMessagesByDate(messages);

  const handleSend = async () => {
    if (
      sendText?.trim() === "" &&
      selectedImage === null &&
      selectedVideo === null &&
      selectedDocument === null
    )
      return;
    const message = {
      senderId: loggedInUser._id,
      text: sendText,
      chatId: chatId,
    };

    if (selectedImage) {
      const image = await getBase64(selectedImage);
      message.image = image;
    }
    if (selectedVideo) {
      const video = await getBase64(selectedVideo);
      message.video = video;
    }
    if (selectedDocument) {
      const timestamp = Date.now();
      const fileName = `${timestamp}_${selectedDocument.name}`;
      const params = {
        Bucket: "thecapitalhubdocuments",
        Key: `documents/${fileName}`,
        Body: selectedDocument,
      };
      try {
        const res = await s3.upload(params).promise();
        message.documentName = selectedDocument.name;
        message.documentUrl = res.Location;
      } catch (error) {
        console.error("Error uploading file to S3:", error);
      }
    }

    addMessage(message)
      .then(({ data }) => {
        // setMessages([...messages, data]);
        setIsSent(!isSent);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
    message.senderId = {
      _id: loggedInUser._id,
      firstName: loggedInUser.fileName,
      lastName: loggedInUser.lastName,
      profilePicture: loggedInUser.profilePicture,
    };
    const recieverId = [userId];
    // recieverId = [{
    //   _id: user?._id,
    //   firstName: user.firstName,
    //   lastName: user.lastName,
    //   profilePicture: user.profilePicture
    // }];
    const createdAt = new Date().toISOString();
    setSendMessage({ ...message, recieverId, createdAt });
    setSendText("");
    setSelectedImage(null);
    setSelectedVideo(null);
    setSelectedDocument(null);
    setShowAttachDocs(false);
  };

  const formatTime = (date) => {
    const options = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    return new Intl.DateTimeFormat("en-US", options).format(date);
  };

  const [showAttachDocs, setShowAttachDocs] = useState(false);
  const attachDocContainerRef = useRef();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    const outsideClickHandler = (event) => {
      if (
        attachDocContainerRef.current &&
        !attachDocContainerRef.current.contains(event.target)
      ) {
        setShowAttachDocs(false);
      }
    };

    document.addEventListener("click", outsideClickHandler);

    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  }, []);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (event.target.name === "image" && file.type.includes("image")) {
      setSelectedImage(file);
    } else if (event.target.name === "video" && file.type.includes("video")) {
      setSelectedVideo(file);
    } else if (event.target.name === "document") {
      setSelectedDocument(file);
    }
    setShowAttachDocs(false);
  };

  const handleOnelinkClick = () => {
    getStartupByFounderId(loggedInUser._id)
      .then(({ data }) => {
        setSendText(
          `https://thecapitalhub.in/onelink/${data.oneLink}/${loggedInUser.oneLinkId}`
        );
      })
      .catch((error) => console.log(error));
  };

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const removeSelectedVideo = () => {
    setSelectedVideo(null);
  };

  const removeSelectedDocument = () => {
    setSelectedDocument(null);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSend();
    }
  };

  return (
    <div className="chat_dashboard_container">
      <div className="chat_messages_group" ref={chatMessagesContainerRef}>
        {groupedMessages.map((group) => (
          <div key={group.date}>
            <h6 className="date_header px-3 py-1 bg-light rounded shadow-sm">{group.date}</h6>
            <div className="chat_messages">
              {group.messages.map((message, idx) =>
                // My messages
                message.senderId._id === loggedInUser._id ? (
                  <section
                    className="my_message_main text-break"
                    key={message._id}
                  >
                    <div className="my_messages">
                      <div className="time_name_image">
                        {!idx && (
                          <div className="time_name d-flex gap-2 align-items-center me-2 mb-2">
                            <h6 className="name_title">
                              {loggedInUser?.firstName} {loggedInUser?.lastName}
                            </h6>

                            <img
                              className="image_profile"
                              src={loggedInUser?.profilePicture}
                              alt=""
                            />
                          </div>
                        )}
                      </div>
                      <div
                        className="mymessage_container text-break text-start position-relative "
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                      >
                        {message.text !== "" && (
                          <>
                            <ChatDropDownMenu
                              onClicks={handleSetDeletePopup}
                              idBack={handleIdBack}
                              id={message?._id}
                              showMenu={messageMenu}
                            />
                            <Linkify>
                              <p className="text-break text-start m-0">
                                {message.text}
                              </p>
                            </Linkify>
                          </>
                        )}
                        {message?.documentUrl && (
                          <>
                            <a
                              href={message.documentUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-break"
                            >
                              <img
                                className="p-1 rounded-circle"
                                src={documentIcon}
                                alt="upload document"
                              />
                              <p className="text-break">
                                {message.documentName}
                              </p>
                            </a>
                          </>
                        )}
                        {message?.image && (
                          <img
                            src={message.image}
                            className="image-message"
                            alt="message image"
                          />
                        )}
                        {message?.video && (
                          <video controls className="video-message">
                            <source src={message?.video} type={"video/mp4"} />
                            Your browser does not support the video tag.
                          </video>
                        )}
                        <span className="msg-time">
                          <IoCheckmarkDone
                            color={message?.read ? "#009b00" : "white"}
                            size={15}
                          />
                          {formatTime(new Date(message.createdAt))}
                        </span>
                      </div>
                    </div>
                  </section>
                ) : (
                  // Others messages
                  <section
                    className="other_sender text-break d-flex flex-column"
                    key={message._id}
                  >
                    {!idx && (
                      <div className="d-flex align-items-center gap-2 mb-2">
                        <img
                          className="image_profile"
                          src={user?.profilePicture}
                          alt=""
                        />
                        <span className="name_title">
                          {user?.firstName} {user?.lastName}
                        </span>
                      </div>
                    )}
                    <div className="other_messages">
                      <div className="message_container text-break">
                        {message.text !== "" && (
                          <Linkify>
                            <p className="text-break w-100 text-start m-0">
                              {message.text}
                            </p>
                          </Linkify>
                        )}
                        {message?.image && (
                          <img
                            src={message.image}
                            className="image-message"
                            alt="message image"
                          />
                        )}
                        {message?.video && (
                          <video controls className="video-message">
                            <source src={message?.video} type={"video/mp4"} />
                            Your browser does not support the video tag.
                          </video>
                        )}
                        {message.documentUrl && (
                          <a
                            href={message.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-break"
                          >
                            <img
                              className="p-1 rounded-circle"
                              src={documentIcon}
                              alt="upload document"
                            />
                            <p className="text-break">{message.documentName}</p>
                          </a>
                        )}
                        <span className="msg-time">
                          {/* <IoCheckmarkDone
                            color={message?.read ? "#009b00" : "white"}
                            size={15}
                          /> */}
                          {formatTime(new Date(message.createdAt))}
                        </span>
                      </div>
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
          {selectedImage && (
            <div className="image-preview">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected Image"
              />
              <button className="remove-preview" onClick={removeSelectedImage}>
                X
              </button>
            </div>
          )}
          {selectedVideo && (
            <div className="video-preview">
              <video controls width={200}>
                <source
                  src={URL.createObjectURL(selectedVideo)}
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
              <button className="remove-preview" onClick={removeSelectedVideo}>
                X
              </button>
            </div>
          )}
          {selectedDocument && (
            <div className="document-preview">
              <p>{selectedDocument.name}</p>
              <button
                className="remove-preview"
                onClick={removeSelectedDocument}
              >
                X
              </button>
            </div>
          )}
          <input
            type="text"
            name="introductoryMessage"
            className="w-100"
            placeholder="Your message..."
            onChange={(e) => setSendText(e.target.value)}
            onKeyDown={handleKeyDown}
            value={sendText}
          />
          <div className="right_icons">
            <button
              className="attactment-container btn"
              ref={attachDocContainerRef}
            >
              {!showAttachDocs ? (
                <img
                  src={attachmentGreyIcon}
                  width={20}
                  onClick={() => setShowAttachDocs(!showAttachDocs)}
                  alt="attach"
                />
              ) : (
                <img
                  src={attachmentOrangeIcon}
                  width={20}
                  onClick={() => setShowAttachDocs(!showAttachDocs)}
                  alt="attach"
                />
              )}
              {showAttachDocs && (
                <div className="attachment-options shadow-sm">
                  <div className="attachment-option">
                    <label htmlFor="documentInput">
                      <img
                        className="p-1 rounded-circle"
                        src={documentIcon}
                        alt="upload document"
                      />
                      <p>Document</p>
                    </label>
                    <input
                      type="file"
                      id="documentInput"
                      name="document"
                      hidden
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="attachment-option">
                    <label htmlFor="image">
                      <img
                        src={imageIcon}
                        alt="upload images"
                        className="p-1 rounded-circle "
                      />
                      <p>Image</p>
                    </label>
                    <input
                      type="file"
                      accept="image/png, image/jpeg, image/jpg, image/svg+xml"
                      id="image"
                      name="image"
                      hidden
                      onChange={handleFileChange}
                    />
                  </div>
                  <div className="attachment-option">
                    <label htmlFor="video">
                      <img
                        src={videoIcon}
                        alt="upload video"
                        className="p-1 rounded-circle "
                      />
                      <p>Video</p>
                    </label>
                    <input
                      type="file"
                      accept="video/mp4,video/x-m4v,video/*"
                      id="video"
                      name="video"
                      hidden
                      onChange={handleFileChange}
                    />
                  </div>
                  <div
                    className="attachment-option"
                    onClick={handleOnelinkClick}
                  >
                    <label htmlFor="onelink">
                      <img
                        src={onelinkIcon}
                        alt="One link"
                        className="p-1 rounded-circle"
                      />
                      <p>One Link</p>
                    </label>
                  </div>
                </div>
              )}
            </button>
            <button className="btn p-0">
              <img
                className="border-start border-2"
                src={sendIcon}
                alt="Send"
                width={30}
                onClick={() => handleSend()}
              />
            </button>
          </div>
        </div>
      </section>
      {deletePopup ? (
        <ChatDeletePopup>
          <div className="d-flex flex-column  justify-content-center ">
            <h1>Delete permanently</h1>
            <hr className="p-0 m-1 " />
            <p>This message will be Deleted permeanently </p>
            <div className="d-flex flex-column flex-md-row mx-auto">
              <button
                className="popup-close-button "
                onClick={() => setDeletePopup(false)}
              >
                Cancel
              </button>
              <button
                className="popup-ok_button"
                onClick={() => hadilDeleteOk()}
              >
                Ok
              </button>
            </div>
          </div>
        </ChatDeletePopup>
      ) : (
        ""
      )}

      {showFeaturedPostSuccess ? (
        <AfterSuccessPopUp
          onClose={() => setShowFeaturedPostSuccess(false)}
          successText="The message has been deleted successfully."
        />
      ) : (
        ""
      )}
    </div>
  );
};

export default ChatDashboard;
