import React from "react";
// import locationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import { IoLocationOutline } from "react-icons/io5";

// import HomeIcon from "../../../../Images/HomeIcon.svg";
import { GoHome } from "react-icons/go";

// import ThreeODotIcon from "../../../../Images/ThreeDotIcon.svg";
import "./FeaturedPostCard.scss";
// import shareIcon from "../../../../Images/post/share.png";
// import fireIcon from "../../../../Images/post/like-fire.png";
// import bwFireIcon from "../../../../Images/post/unlike-fire.png";
// import commentIcon from "../../../../Images/post/comment.svg";
// import saveIcon from "../../../../Images/post/save.svg";
import TimeAgo from "timeago-react";
import { useSelector } from "react-redux";
import { useState } from "react";
// import { likeUnlikeAPI } from "../../../../Service/user";
// import { Link } from "react-router-dom";
import IconDeleteFill from "../../SvgIcons/IconDeleteFill";
import { removeCompanyUpdatedPost } from "../../../../Service/user";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";

const CompanyUpdateCard = ({
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
  postDelete,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  // States for handling remove post from featured post
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle remove post from featured posts
  const handleRemovePost = async (postId) => {
    // set loading = true
    setLoading(true);
    const response = await removeCompanyUpdatedPost(postId);
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
  console.log(description);
  return (
    <>
      <div className="featuredpostcard_main_container mb-2">
        {/* <div className="col-12"> */}
        <div className=" featuredpostcard_container mt-2 rounded-4 shadow-sm border">
          <div className="feed_header_container p-2 border-bottom ">
            <div className="feedpostcard_content w-100">
              <img
                src={
                  profilePicture ||
                  "https://res.cloudinary.com/drjt9guif/image/upload/v1692264454/TheCapitalHub/users/default-user-avatar_fe2ky5.webp"
                }
                style={{ width: "50px", height: "50px" }}
                className="rounded-circle"
                alt="logo"
              />

              <div className="feedpostcart_text_header my-1">
                {/* Fullname */}
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: 600,
                    color: "var( --d-l-grey)",
                  }}
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
                    <GoHome size={15} />
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
                  style={{
                    fontSize: "10px",
                    fontWeight: 500,
                    color: "var( --d-l-grey)",
                  }}
                >
                  <TimeAgo datetime={createdAt} locale="" />
                </span>
              </div>

              {/*Show Delete featured post if userId=loggedInUser._id */}
              {userId === loggedInUser._id && postDelete ? (
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
          </div>
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
                {description ? description : "not avlabel"}
              </p>
              {image && (
                <span className="d-flex">
                  <img
                    className="mx-auto rounded-4 my-2 "
                    style={{ objectFit: "contain" }}
                    width={"100%"}
                    src={image}
                    alt="post media"
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
        </div>
      </div>
    </>
  );
};

export default CompanyUpdateCard;
