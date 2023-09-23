import React, { useState } from "react";
import "./SharingOneLinkPopUp.scss";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  WhatsappIcon,
  EmailIcon,
  FacebookIcon
} from "react-share";
import { HiOutlineClipboard } from 'react-icons/hi'

const SharingOneLinkPopUp = ({ introMessage, oneLink, onClose }) => {
  const shareUrl = "https://thecapitalhub.in/onelink/" + oneLink;
  const messageForSharing = introMessage.replace(/<br\s*\/?>/g, "\n");
  const [copyStatus, setCopyStatus] = useState(""); // State for copy status

  // Function to handle copying to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text)
      .then(() => setCopyStatus("Copied!"))
      .catch(() => setCopyStatus("Copy failed"));
  };

  return (
    <div className="after_register_popup">
      <div className="popup">
        <div className="popup-content">
          <p className="text_section">{messageForSharing}</p>

          <h6>
            Click here for:{" "}
            <a href={shareUrl} target="_blank" rel="noopener noreferrer">
              OneLink
            </a>
          </h6>
    

          <h4>Share this details via</h4>
          <div className="share-buttons">
            <FacebookShareButton url={shareUrl} quote={messageForSharing}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton url={"\n Here is Our OneLink : " + shareUrl} title={messageForSharing}>
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton url={shareUrl} body={messageForSharing}>
              <EmailIcon size={32} round />
            </EmailShareButton>
            {/* Clipboard icon */}
            <HiOutlineClipboard size={32} onClick={() => copyToClipboard(`${messageForSharing} \n Here is Our OneLink: ${shareUrl}`)} />
            {copyStatus && <p>{copyStatus}</p>}
          </div>

          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SharingOneLinkPopUp;
