import React, { useState } from "react";
import "./SharingOneLinkPopUp.scss";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
  WhatsappIcon,
  EmailIcon,
  FacebookIcon,
} from "react-share";
import { HiOutlineClipboard } from "react-icons/hi";
import { useSelector } from "react-redux";

const SharingOneLinkPopUp = ({
  introMessage,
  oneLink,
  onClose,
  investor = false,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // State for Invalid secret Key
  const [error, setError] = useState(null);
  const [pin, setPin] = useState(null);

  const shareUrl = investor
    ? "https://thecapitalhub.in/investor/onelink/" +
      oneLink +
      "/" +
      loggedInUser.oneLinkId
    : "https://thecapitalhub.in/onelink/" +
      oneLink +
      "/" +
      loggedInUser.oneLinkId;
  const messageForSharing = introMessage.replace(/<br\s*\/?>/g, "\n");
  const [copyStatus, setCopyStatus] = useState(""); // State for copy status

  // Function to handle copying to clipboard
  const copyToClipboard = (text) => {
    navigator.clipboard
      .writeText(text)
      .then(() => setCopyStatus("Copied!"))
      .catch(() => setCopyStatus("Copy failed"));
  };

  // Handle invalid Secret Key
  const handleInvalid = (value) => {
    // if value length is 0
    if (value.length === 0) {
      setError(null);
      return;
    }
    // console.log("val-->", value, /[0-9]{4}/.test(value));

    // if value length is < 4
    if (value.length < 4) {
      return;
    }

    // Test for numeric values
    if (!/[0-9]{4}/.test(value)) {
      setError("Please enter Valid 4 digit Key");
      return;
    }

    // Then
    setPin(value);
    setError(null);
  };

  // Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="after_register_popup">
      <div className="popup">
        <div className="popup-content">
          <p className="text_section">{messageForSharing}</p>

          {/* Assign Secret Key */}
          <form onSubmit={handleSubmit} className="">
            <fieldset className={`key rounded-2 ${"invalid"}`}>
              <legend className="key_title px-2">Assign Secret Key</legend>
              <input
                type="password"
                minLength={4}
                maxLength={4}
                pattern="[0-9]{4}"
                inputMode="numeric"
                placeholder="4 digit Key"
                required
                className="key_input"
                autoComplete="off"
                onChange={(e) => handleInvalid(e.target.value)}
              />
            </fieldset>
            <em className="text-danger" style={{ fontSize: "0.75rem" }}>
              {error}
            </em>
            <button type="submit" className="assign_btn">
              Assign
            </button>
          </form>

          <h6>
            Click here for:{" "}
            <a
              href={shareUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="share_link"
            >
              OneLink
            </a>
          </h6>

          <h4>Share this details via</h4>
          <div className="share-buttons">
            <FacebookShareButton url={shareUrl} quote={messageForSharing}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <WhatsappShareButton
              url={"\nHere is Our OneLink : " + shareUrl}
              title={messageForSharing}
            >
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
            <EmailShareButton url={shareUrl} body={messageForSharing}>
              <EmailIcon size={32} round />
            </EmailShareButton>
            {/* Clipboard icon */}
            <HiOutlineClipboard
              size={32}
              onClick={() =>
                copyToClipboard(
                  `${messageForSharing} \nHere is Our OneLink: ${shareUrl}`
                )
              }
            />
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
