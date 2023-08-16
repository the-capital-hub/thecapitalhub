import React from "react";
import profilePic from "../../../../Images/investorIcon/profilePic.svg";
import locationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import RoundLogo from "../../../../Images/RoundLogo.png";
import SavedIcon from "../../../../Images/SavedIcon.svg";
import HomeIcon from "../../../../Images/HomeIcon.svg";
import ThreeODotIcon from "../../../../Images/ThreeDotIcon.svg";
import FireIcon from "../../../../Images/Fire.png";
import "./feedPostCard.scss";
import TimeAgo from "timeago-react";

const FeedPostCard = ({
  description,
  firstName,
  lastName,
  video,
  image,
  createdAt,
}) => {
  return (
    <>
      <div className="row feedpostcard_main_container">
        <div className="col-12">
          <div className="box feedpostcard_container mt-2">
            <div className="  feed_header_container">
              <div className="feedpostcard_content">
                <img src={profilePic} alt="logo" />
                <div className="feedpostcart_text_header">
                  <span
                    style={{ fontSize: "20px", fontWeight: 600, color: "#000" }}
                  >
                    {firstName + " " + lastName}
                  </span>
                  <span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      <img src={HomeIcon} alt="logo" />
                      Corporate
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      <img src={locationIcon} alt="logo" />
                      Bangalore, India
                    </span>
                  </span>
                  <span
                    style={{ fontSize: "12px", fontWeight: 500, color: "#000" }}
                  >
                    <TimeAgo datetime={createdAt} locale="" />
                  </span>
                </div>
              </div>
              <div className="three_dot">
                <img src={ThreeODotIcon} alt="dot" />
              </div>
            </div>
            <hr />
            <div className="row">
              <div className="col-12 para_container">
                <div className="para_container_text ">
                  <p style={{ fontSize: "15px" }}>{description}</p>
                  {image && (
                    <span className="d-flex">
                      <img
                        className="mx-auto"
                        style={{ maxHeight: "350px" }}
                        src={image}
                        alt="post-image"
                      />
                    </span>
                  )}
                  {video && (
                    <span className="d-flex">
                      <video
                        className="mx-auto"
                        controls
                        autoPlay
                        height={"300px"}
                      >
                        <source alt="post-video" src={video} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </span>
                  )}
                </div>
              </div>
            </div>
            <hr />
            <div className="row feedpostcard_footer">
              <div className="col-6">
                <div className="feedpostcard_footer_like_comment">
                  <span>
                    <img src={FireIcon} alt="Like" />
                    <span className="mx-2">Like</span>
                  </span>
                  <span>
                    <img src={HomeIcon} alt="Comment" />
                    <span className="mx-2">Comment</span>
                  </span>
                </div>
              </div>
              <div className="col-6 d-flex align-items-center justify-content-end">
                <img className="mx-2 h-75" src={SavedIcon} alt="saved" />
                <span>Save</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedPostCard;
