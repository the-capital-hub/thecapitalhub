import React, { useEffect, useState, useRef } from "react";
import "./CommunityDashboard.scss";
import sendIcon from "../../../../Images/Send.svg";
import { useSelector } from "react-redux";
import {
  getMessageByChatId,
  addMessage,
  getStartupByFounderId,
  getCommunityById,
  deleteMessage,
  markMessagesAsReadInCommunities,
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
import { Offcanvas } from "react-bootstrap";
import AttachmentPreview from "../../../../components/Investor/ChatComponents/ChatAttachments/AttachmentPreview/AttachmentPreview";

const CommunityDashboard = ({
  setSendMessage,
  recieveMessage,
  cleared,
  isRead,
  setIsRead,
}) => {
  // Fetch global state
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const chatId = useSelector((state) => state.chat.chatId);
  const isCommunitySelected = useSelector(
    (state) => state.chat.isCommunitySelected
  );
  const [showFeaturedPostSuccess, setShowFeaturedPostSuccess] = useState(false);
  const [deletePopup, setDeletePopup] = useState(false);
  const [messages, setMessages] = useState([]);
  const [user, setUser] = useState(null);
  const [sendText, setSendText] = useState("");
  const chatMessagesContainerRef = useRef(null);
  const [isSent, setIsSent] = useState(false);
  const [msgId, setMsgId] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const handleSetDeletePopup = () => {
    setDeletePopup(true);
  };
  const handleIdBack = (data) => {
    console.log(data);
    setMsgId(data);
  };

  useEffect(() => {
    if (chatMessagesContainerRef.current) {
      chatMessagesContainerRef.current.scrollTop =
        chatMessagesContainerRef.current.scrollHeight;
    }
  }, [messages, recieveMessage]);

  const handleDelete = async () => {
    console.log(msgId);
    try {
      const result = await deleteMessage(msgId);
      console.log("delete message Result:", result);
      if (result) {
        setShowFeaturedPostSuccess(true);
        setDeletePopup(false);
      }
    } catch (error) {
      console.error("Error likeDislike comment : ", error);
    }
  };

  useEffect(() => {
    markMessagesAsReadInCommunities(chatId, loggedInUser._id)
      .then((response) => {
        console.log(response.message);
        setIsRead(!isRead);
      })
      .catch((error) => {
        console.error("Error marking messages as read:", error);
      });
  }, [chatId, loggedInUser._id, recieveMessage]);

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
  }, [chatId, cleared, isSent, showFeaturedPostSuccess]);

  const [community, setCommunity] = useState([]);

  useEffect(() => {
    getCommunityById(chatId)
      .then((res) => {
        setCommunity(res.data);
        setUser(null);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  }, [chatId, isCommunitySelected]);

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
      console.log("doc");
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
        console.log(res.Location);
      } catch (error) {
        console.error("Error uploading file to S3:", error);
      }
    }

    addMessage(message)
      .then(({ data }) => {
        setIsSent(!isSent);
        console.log(data);
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
    let recieverId = community.members;
    recieverId = recieverId.filter((member) => member !== loggedInUser._id);
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

  //
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
    setShowPreview(true);
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
    <div className="community_dashboard_container">
      <div className="chat_messages_group" ref={chatMessagesContainerRef}>
        {groupedMessages.map((group) => (
          <div key={group.date}>
            <h6 className="date_header">{group.date}</h6>
            <div className="chat_messages">
              {group.messages.map((message) =>
                message.senderId._id === loggedInUser._id ? (
                  <section className="my_message_main" key={message._id}>
                    <div className="my_messages">
                      <div className="time_name_image">
                        <div className="time_name">
                          <h6 className="name_title">
                            {loggedInUser?.firstName} {loggedInUser?.lastName}
                          </h6>
                          <h6 className="time">
                            {formatTime(new Date(message.createdAt))}
                          </h6>
                        </div>
                        <img
                          className="image_profile"
                          src={loggedInUser?.profilePicture}
                          alt=""
                        />
                      </div>
                      {message.text !== "" && (
                        <div className="mymessage_container">
                          <ChatDropDownMenu
                            onClicks={handleSetDeletePopup}
                            idBack={handleIdBack}
                            id={message?._id}
                          />
                          <Linkify>
                            <p className="text-break text-start m-0 mb-1 me-3">
                              {message.text}
                            </p>
                          </Linkify>
                        </div>
                      )}
                      {message?.image && (
                        <div className="mymessage_container">
                          <ChatDropDownMenu
                            onClicks={handleSetDeletePopup}
                            idBack={handleIdBack}
                            id={message?._id}
                          />
                          <img
                            src={message.image}
                            className="image-message"
                            alt="message media"
                          />
                        </div>
                      )}
                      {message?.video && (
                        <div className="mymessage_container">
                          <ChatDropDownMenu
                            onClicks={handleSetDeletePopup}
                            idBack={handleIdBack}
                            id={message?._id}
                          />
                          <video controls className="video-message">
                            <source src={message?.video} type={"video/mp4"} />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                      {message.documentUrl && (
                        <div className="mymessage_container">
                          <ChatDropDownMenu
                            onClicks={handleSetDeletePopup}
                            idBack={handleIdBack}
                            id={message?._id}
                          />
                          <a
                            href={message.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="p-1 rounded-circle"
                              src={documentIcon}
                              alt="upload document"
                            />
                            <p>{message.documentName}</p>
                          </a>
                        </div>
                      )}
                    </div>
                  </section>
                ) : (
                  <section className="other_sender" key={message._id}>
                    <img
                      className="image_profile"
                      src={message.senderId?.profilePicture}
                      alt=""
                    />
                    <div className="other_messages">
                      <div className="time_name">
                        <h6 className="name_title">
                          {message.senderId?.firstName}{" "}
                          {message.senderId?.lastName}{" "}
                        </h6>{" "}
                        <h6 className="time">
                          {formatTime(new Date(message.createdAt))}
                        </h6>
                      </div>
                      {message.text !== "" && (
                        <div className="message_container">
                          <Linkify>
                            <p className="text-break">{message.text}</p>
                          </Linkify>
                        </div>
                      )}
                      {message?.image && (
                        <div className="message_container">
                          <img
                            src={message.image}
                            className="image-message"
                            alt="message media"
                          />
                        </div>
                      )}
                      {message?.video && (
                        <div className="message_container">
                          <video controls className="video-message">
                            <source src={message?.video} type={"video/mp4"} />
                            Your browser does not support the video tag.
                          </video>
                        </div>
                      )}
                      {message.documentUrl && (
                        <div className="message_container">
                          <a
                            href={message.documentUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <img
                              className="p-1 rounded-circle"
                              src={documentIcon}
                              alt="upload document"
                            />
                            <p>{message.documentName}</p>
                          </a>
                        </div>
                      )}
                    </div>
                  </section>
                )
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Chat Input section */}
      <section className="chat_input_section">
        <div className="chat_input_container">
          {/* Preview offcanvas */}
          <AttachmentPreview
            showPreview={showPreview}
            setShowPreview={setShowPreview}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
            removeSelectedImage={removeSelectedImage}
            sendText={sendText}
            setSendText={setSendText}
            handleKeyDown={handleKeyDown}
            handleSend={handleSend}
          />

          {/* {selectedImage && (
            <div className="image-preview">
              <img
                src={URL.createObjectURL(selectedImage)}
                alt="Selected media"
              />
              <button className="remove-preview" onClick={removeSelectedImage}>
                X
              </button>
            </div>
          )} */}
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

          {/* Text input */}
          <input
            type="text"
            className="message"
            name="introductoryMessage"
            placeholder="Your message..."
            onChange={(e) => setSendText(e.target.value)}
            onKeyDown={handleKeyDown}
            value={sendText}
          />
          <div className="right_icons">
            <div class="attactment-container">
              <button
                className="btn"
                ref={attachDocContainerRef}
                onClick={() => setShowAttachDocs(!showAttachDocs)}
              >
                {!showAttachDocs ? (
                  <img
                    src={attachmentGreyIcon}
                    width={20}
                    // onClick={() => setShowAttachDocs(!showAttachDocs)}
                    alt="attach"
                  />
                ) : (
                  <img
                    src={attachmentOrangeIcon}
                    width={20}
                    // onClick={() => setShowAttachDocs(!showAttachDocs)}
                    alt="attach"
                  />
                )}
              </button>
              {showAttachDocs && (
                <div className="attachment-options shadow-sm">
                  <div className="attachment-option">
                    <label
                      htmlFor="documentInput"
                      style={{ cursor: "pointer" }}
                    >
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
                    <label htmlFor="image" style={{ cursor: "pointer" }}>
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
                    <label htmlFor="video" style={{ cursor: "pointer" }}>
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
                    <label htmlFor="onelink" style={{ cursor: "pointer" }}>
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
            </div>
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

      {/* Delete Popup */}
      {deletePopup ? (
        <ChatDeletePopup>
          <div className="d-flex flex-column  justify-content-center ">
            <h1>Delete permanently</h1>
            <hr className="p-0 m-1 " />
            <p>This message will be deleted permanently.</p>
            <div className="d-flex flex-column flex-md-row mx-auto">
              <button
                className="popup-close-button bg-secondary"
                onClick={() => setDeletePopup(false)}
              >
                Cancel
              </button>
              <button
                className="popup-ok_button"
                onClick={() => handleDelete()}
              >
                Confirm
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

export default CommunityDashboard;
