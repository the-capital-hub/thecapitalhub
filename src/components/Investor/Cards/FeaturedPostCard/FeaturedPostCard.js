import React, { useEffect } from "react";
import locationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import HomeIcon from "../../../../Images/HomeIcon.svg";
// import ThreeODotIcon from "../../../../Images/ThreeDotIcon.svg";
import "./FeaturedPostCard.scss";
import shareIcon from "../../../../Images/post/share.png";
import fireIcon from "../../../../Images/post/like-fire.png";
import bwFireIcon from "../../../../Images/post/unlike-fire.png";
import commentIcon from "../../../../Images/post/comment.svg";
import saveIcon from "../../../../Images/post/save.svg";
import TimeAgo from "timeago-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import { likeUnlikeAPI } from "../../../../Service/user";
import { Link } from "react-router-dom";

const FeaturedPostCard = ({
  postId,
  description,
  firstName,
  lastName,
  video,
  image,
  createdAt,
  profilePicture,
  designation,
  likes,
  userId,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const savePostHandler = async (postId) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(likes.includes(loggedInUser._id));
  }, []);

  const likeUnlikeHandler = async () => {
    try {
      setLiked(!liked);
      await likeUnlikeAPI(postId);
    } catch (error) {
      setLiked(!liked);
      console.log("Error liking post: ", error);
    }
  };

  return (
    <>
      <div className=" featuredpostcard_main_container mb-2">
        <div className="col-12">
          <div className="box featuredpostcard_container mt-2">
            <div className="  feed_header_container">
              <div className="feedpostcard_content">
                <Link to={`/user/${userId}`} className="rounded-circle">
                  <img
                    src={
                      profilePicture ||
                      "https://res.cloudinary.com/drjt9guif/image/upload/v1692264454/TheCapitalHub/users/default-user-avatar_fe2ky5.webp"
                    }
                    width={50}
                    className="rounded-circle"
                    alt="logo"
                  />
                </Link>
                <div className="feedpostcart_text_header my-1">
                  <span
                    style={{ fontSize: "15px", fontWeight: 600, color: "#000" }}
                  >
                    {firstName + " " + lastName}
                  </span>
                  <span className="d-flex flex-column flex-md-row">
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      <img src={HomeIcon} alt="logo" />
                      {designation}
                    </span>
                    <span
                      style={{
                        fontSize: "10px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      <img src={locationIcon} alt="logo" />
                      Bangalore, India
                    </span>
                  </span>
                  <span
                    style={{ fontSize: "10px", fontWeight: 500, color: "#000" }}
                  >
                    <TimeAgo datetime={createdAt} locale="" />
                  </span>
                </div>
              </div>
              {/* <div className="three_dot">
                <img src={ThreeODotIcon} alt="dot" />
              </div> */}
            </div>
            <hr />
            <div className="para_container w-100">
              <div className="para_container_text w-100">
                <p
                  style={{
                    fontSize: "13px",
                    wordWrap: "break-word",
                    overflowWrap: "break-word",
                  }}
                >
                  {description}
                </p>
                {/* {image && (
                  <span className="d-flex">
                    <img
                      className="mx-auto"
                      style={{ maxHeight: "350px", objectFit: "contain" }}
                      width={"100%"}
                      src={image}
                      alt="post-image"
                    />
                  </span>
                )} */}
                {/* {video && (
                  <span className="d-flex">
                    <video
                      className="mx-auto"
                      width={"100%"}
                      style={{ maxWidth: "500px" }}
                      controls
                    >
                      <source alt="post-video" src={video} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </span>
                )} */}
              </div>
            </div>
            {/* <hr />
            <div className="row feedpostcard_footer mb-2">
              <div className="col-8">
                <div className="feedpostcard_footer_like_comment d-flex gap-2">
                  {liked ? (
                    <img
                      src={fireIcon}
                      width={18}
                      alt="like post"
                      onClick={likeUnlikeHandler}
                    />
                  ) : (
                    <img
                      src={bwFireIcon}
                      width={18}
                      alt="like post"
                      onClick={likeUnlikeHandler}
                    />
                  )}
                  <img src={commentIcon} width={16} alt="comment post" />
                </div>
              </div>
              <div className="col-4 d-flex align-items-center gap-3 justify-content-end">
                <img src={shareIcon} width={16} alt="share post" />
                <img src={saveIcon} width={16} alt="save post" />
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedPostCard;
