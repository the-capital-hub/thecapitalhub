import React from "react";
import "./createpostpopup.scss";
import SmileeIcon from "../../../Images/Smilee.svg";
import GallaryIcon from "../../../Images/Gallary.svg";
import ThreeDotsIcon from "../../../Images/ThreeDots.svg";
import CameraIcon from "../../../Images/Camera.svg";
import { useSelector } from "react-redux";

const CreatePostPopUp = ({ setPopupOpen, popupOpen }) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const handleClose = () => setPopupOpen(false);

  return (
    <>
      {popupOpen && <div className="background-overlay"></div>}
      <div className={`modal ${popupOpen ? "d-block" : ""}`} tabIndex="-1" role="dialog">
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="createpost_modal-header">
              <div className="createpostpopup">
                <div className="ceatepost_img_name">
                  <img
                    src="/static/media/profilePic.ac4dfd95fdad6810ad15579f16b2e550.svg"
                    alt="profile pic"
                  />
                  <span>
                    <h2>{loggedInUser?.firstName} {loggedInUser.lastName}</h2>
                    <h6>Post to anyone</h6>
                  </span>
                </div>
              </div>
              <button
                type="button"
                className="close"
                onClick={handleClose}
                style={{ background: "transparent", border: "none" }}
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="createpost_text_area">
                <textarea />
              </div>
            </div>
            <div className="createpost_modal_footer">
              <div className="modal_footer_container mt-4 mb-3">
                <div className="modal_footer_container">
                  <div className="left_buttons">
                    <button className="white_button">
                      <img src={GallaryIcon} alt="Button 1" />
                    </button>
                    <button className="white_button">
                      <img src={CameraIcon} alt="Button 2" />
                    </button>
                    <button className="white_button">
                      <img src={SmileeIcon} alt="Button 3" />
                    </button>
                    <button className="white_button">
                      <img src={ThreeDotsIcon} alt="Button 4" />
                    </button>
                  </div>
                  <div className="post_button_container">
                    <button className="post_button">Post</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CreatePostPopUp;
