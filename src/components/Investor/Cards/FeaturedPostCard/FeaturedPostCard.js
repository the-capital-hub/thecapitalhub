import React, { useEffect } from "react";
// import locationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import { IoLocationOutline } from "react-icons/io5";

// import HomeIcon from "../../../../Images/HomeIcon.svg";
import { GoHome } from "react-icons/go";

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
import IconDeleteFill from "../../SvgIcons/IconDeleteFill";
import { removeFromFeaturedPost } from "../../../../Service/user";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";

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
  setIsDeleteSuccessful,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  // States for handling remove post from featured post
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

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

  // Handle remove post from featured posts
  const handleRemovePost = async (postId) => {
    // set loading = true
    setLoading(true);
    const response = await removeFromFeaturedPost(postId);
    console.log(response);
    if (response.status === 200) {
      setIsDeleteSuccessful(true);
      setLoading(false);
    } else if (response.status === 500) {
      // Show error message in a toast or tooltip
      setError(response.message);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="featuredpostcard_main_container mb-2">
        {/* <div className="col-12"> */}
        <div className=" featuredpostcard_container mt-2 rounded-4 shadow-sm border">
          <div className="feed_header_container p-2 border-bottom ">
            <div className="feedpostcard_content w-100">
              <Link to={`/user/${userId}`} className="rounded-circle">
                <img
                  src={
                    profilePicture ||
                    "https://res.cloudinary.com/drjt9guif/image/upload/v1692264454/TheCapitalHub/users/default-user-avatar_fe2ky5.webp"
                  }
                  style={{ width: "50px", height: "50px" }}
                  className="rounded-circle"
                  alt="logo"
                />
              </Link>
              <div className="feedpostcart_text_header my-1">
                {/* Fullname */}
                <span
                  style={{ fontSize: "15px", fontWeight: 600, color: "var( --d-l-grey)" }}
                >
                  {firstName + " " + lastName}
                </span>
                {/* Details */}
                <span className="d-flex flex-column flex-md-row flex-wrap">
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "var( --d-l-grey)",
                    }}
                  >
                    {/* <img src={HomeIcon} alt="logo" /> */}
                    <GoHome size={15}/>

                    {designation}, {userId.startUp?.company}
                  </span>
                  <span
                    style={{
                      fontSize: "10px",
                      fontWeight: 500,
                      color: "var( --d-l-grey)",
                    }}
                  >
                    {/* <img src={locationIcon} alt="logo" /> */}
                    <IoLocationOutline size={15} />

                    Bangalore, India
                  </span>
                </span>
                {/* Time ago */}
                <span
                  style={{ fontSize: "10px", fontWeight: 500, color: "var( --d-l-grey)" }}
                >
                  <TimeAgo datetime={createdAt} locale="" />
                </span>
              </div>

              {/*Show Delete featured post if userId=loggedInUser._id */}
              {userId === loggedInUser._id ? (
                <div className="align-self-start">
                  <button
                    className="btn_base_sm"
                    onClick={() => handleRemovePost(postId)}
                  >
                    {loading ? (
                      <SpinnerBS
                        colorClass={"text-danger"}
                        spinnerSizeClass="spinner-border-sm"
                      />
                    ) : (
                      <IconDeleteFill height="1.25rem" width="1.25rem" />
                    )}
                  </button>
                </div>
              ) : (
                ""
              )}
            </div>
            {/* <div className="three_dot">
                <img src={ThreeODotIcon} alt="dot" />
              </div> */}
          </div>
          {/* <hr /> */}
          <div className="para_container w-100 p-2 ">
            <div className="para_container_text w-100 d-flex flex-column gap-2 ">
              <p
                style={{
                  fontSize: "13px",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                }}
                className=""
              >
                {description}
              </p>
              {image && (
                <span className="d-flex">
                  <img
                    className="mx-auto rounded-4 my-2 "
                    style={{ maxHeight: "350px", objectFit: "contain" }}
                    width={"100%"}
                    src={image}
                    alt="post-image"
                  />
                </span>
              )}
              {video && (
                <span className="d-flex">
                  <video
                    className="mx-auto my-2"
                    width={"100%"}
                    style={{ maxWidth: "500px" }}
                    controls
                  >
                    <source alt="post-video" src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </span>
              )}
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
        {/* </div> */}
      </div>
    </>
  );
};

export default FeaturedPostCard;
