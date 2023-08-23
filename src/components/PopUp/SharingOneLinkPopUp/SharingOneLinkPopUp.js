import React from "react";
import "./SharingOneLinkPopUp.scss";
import {
  FacebookShareButton,
  WhatsappShareButton,
  EmailShareButton,
} from "react-share";
import FacebookIcon from "../../../Images/Fb.svg"; // Import your own icons
import WhatsappIcon from "../../../Images/Fb.svg"; // Import your own icons
import EmailIcon from "../../../Images/Fb.svg"; // Import your own icons

const SharingOneLinkPopUp = ({ introMessage, oneLink ,onClose}) => {
  const shareUrl = "https://thecapitalhub.in/" + oneLink; // Update with your URL

  return (
    <div className="after_register_popup">
      <div className="popup">
        <div className="popup-content">
          {/* <p className="intro-message">{introMessage}</p> */}
          <p className="text_section" dangerouslySetInnerHTML={{ __html: introMessage  }} />

          <h6>Click here for : <a href={shareUrl}>OneLink</a></h6>
          <div className="share-buttons">
            <FacebookShareButton url={shareUrl}>
              <img src={FacebookIcon} alt="Facebook" />
            </FacebookShareButton>
            <WhatsappShareButton url={shareUrl}>
              <img src={WhatsappIcon} alt="WhatsApp" />
            </WhatsappShareButton>
            <EmailShareButton url={shareUrl}>
              <img src={EmailIcon} alt="Email" />
            </EmailShareButton>
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
