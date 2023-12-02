import React, { useEffect, useState } from "react";
import AttachmentPreview from "./ChatAttachments/AttachmentPreview/AttachmentPreview";
import ImageAttachment from "./ChatAttachments/ImageAttachment/ImageAttachment";
import VideoAttachment from "./ChatAttachments/VideoAttachment/VideoAttachment";
import DocumentAttachment from "./ChatAttachments/DocumentAttachment/DocumentAttachment";
import {
  addMessage,
  getCommunityById,
  getStartupByFounderId,
} from "../../../../Service/user";
import sendIcon from "../../../../Images/Send.svg";
import "./ChatInputContainer.scss";
import { getBase64 } from "../../../../utils/getBase64";
import { useSelector } from "react-redux";
import { s3 } from "../../../../Service/awsConfig";
import {
  selectLoggedInUserId,
  selectUserFirstName,
  selectUserLastName,
  selectUserOneLink,
  selectUserOneLinkId,
  selectUserProfilePicture,
} from "../../../../Store/features/user/userSlice";
import AttachmentSelector from "./ChatAttachments/AttachmentSelector/AttachmentSelector";

export default function ChatInputContainer({
  setSendMessage,
  isSent,
  setIsSent,
}) {
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const userFirstName = useSelector(selectUserFirstName);
  const userLastName = useSelector(selectUserLastName);
  const userProfilePicture = useSelector(selectUserProfilePicture);
  const userOneLink = useSelector(selectUserOneLink);
  const userOneLinkId = useSelector(selectUserOneLinkId);
  const chatId = useSelector((state) => state.chat.chatId);
  const userId = useSelector((state) => state.chat.userId);
  const isCommunitySelected = useSelector(
    (state) => state.chat.isCommunitySelected
  );

  // State for text input
  const [sendText, setSendText] = useState("");
  // State for preview offcanvas
  const [showPreview, setShowPreview] = useState(false);
  const [showAttachDocs, setShowAttachDocs] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [community, setCommunity] = useState([]);

  // Get community by chat id
  useEffect(() => {
    getCommunityById(chatId)
      .then((res) => {
        setCommunity(res.data);
      })
      .catch((error) => {
        console.error("Error-->", error);
      });
  }, [chatId, isCommunitySelected]);

  //   Handle Send. The main send function.
  const handleSend = async () => {
    if (
      sendText?.trim() === "" &&
      selectedImage === null &&
      selectedVideo === null &&
      selectedDocument === null
    )
      return;
    const message = {
      senderId: loggedInUserId,
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
      _id: loggedInUserId,
      firstName: userFirstName,
      lastName: userLastName,
      profilePicture: userProfilePicture,
    };

    // let recieverId = community.members;
    // recieverId = recieverId.filter((member) => member !== loggedInUserId);

    let recieverId;
    if (isCommunitySelected) {
      recieverId = community.members.filter(
        (member) => member !== loggedInUserId
      );
    } else {
      recieverId = [userId];
    }
    const createdAt = new Date().toISOString();
    setSendMessage({ ...message, recieverId, createdAt });
    clearInputs();
  };

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
    if (userOneLink) {
      getStartupByFounderId(loggedInUserId)
        .then(({ data }) => {
          setSendText(
            `https://thecapitalhub.in/onelink/${data.oneLink}/${userOneLinkId}`
          );
        })
        .catch((error) => console.log(error));
    } else {
      setSendText(
        `https://thecapitalhub.in/onelink/${userOneLink}/${userOneLinkId}`
      );
    }
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

  const clearInputs = () => {
    setSendText("");
    setSelectedImage(null);
    setSelectedVideo(null);
    setSelectedDocument(null);
    setShowAttachDocs(false);
    setShowPreview(false);
  };

  return (
    <section className="chat_input_section">
      <div className="chat_input_container">
        {/* Preview offcanvas */}
        <AttachmentPreview
          showPreview={showPreview}
          setShowPreview={setShowPreview}
          sendText={sendText}
          setSendText={setSendText}
          handleKeyDown={handleKeyDown}
          handleSend={handleSend}
          clearInputs={clearInputs}
        >
          {/* Image Preview. */}
          <ImageAttachment
            selectedImage={selectedImage}
            removeSelectedImage={removeSelectedImage}
          />
          {/* Video Preview */}
          <VideoAttachment
            selectedVideo={selectedVideo}
            removeSelectedVideo={removeSelectedVideo}
          />
          {/* Document Preview */}
          <DocumentAttachment
            selectedDocument={selectedDocument}
            removeSelectedDocument={removeSelectedDocument}
          />
        </AttachmentPreview>

        {/* Text input */}
        <input
          type="text"
          className="message"
          name="introductoryMessage"
          placeholder="Your message..."
          onChange={(e) => setSendText(e.target.value)}
          onKeyDown={handleKeyDown}
          value={showPreview ? "" : sendText}
        />
        <div className="right_icons">
          <AttachmentSelector
            handleFileChange={handleFileChange}
            handleOnelinkClick={handleOnelinkClick}
            showAttachDocs={showAttachDocs}
            setShowAttachDocs={setShowAttachDocs}
          />
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
  );
}
