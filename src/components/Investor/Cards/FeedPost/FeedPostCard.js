import React, { useEffect } from "react";
import locationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import HomeIcon from "../../../../Images/HomeIcon.svg";
import ThreeODotIcon from "../../../../Images/ThreeDotIcon.svg";
import "./feedPostCard.scss";
import shareIcon from "../../../../Images/post/share.png";
import fireIcon from "../../../../Images/post/like-fire.png";
import bwFireIcon from "../../../../Images/post/unlike-fire.png";
import commentIcon from "../../../../Images/post/comment.svg";
import saveIcon from "../../../../Images/post/save.svg";
import TimeAgo from "timeago-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  deletePostAPI,
  getPostComment,
  likeUnlikeAPI,
  sendPostComment,
} from "../../../../Service/user";
import SmileeIcon from "../../../../Images/Group 15141(1).svg";
import ImageIcon from "../../../../Images/Group 15141.svg";
import RoundLogo from "../../../../Images/RoundLogo.png";
import commentIconOne from "../../../../Images/image 40(1).png";
import { Link } from "react-router-dom";
import { useRef } from "react";

const FeedPostCard = ({
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
  fetchAllPosts,
}) => {
  const [showComment, setShowComment] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const handleEnterPress = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent the default behavior of Enter key (e.g., newline)
      await sendComment(); // Send the comment when Enter is pressed
    }
  };

  const sendComment = async () => {
    try {
      const response = await sendPostComment({
        // postId: JSON.stringify(postId),
        // userId: JSON.stringify(loggedInUser._id),
        // text: JSON.stringify(commentText),

        postId: postId,
        userId: loggedInUser._id,
        text: commentText,
      });
      if (response.data.status == "200") {
        await getPostComment({ postId }).then((res) => {
          console.log("response", res.data.data);
          setComments(res.data.data);
        });
      }

      console.log("Comment submitted successfully:", response.data);

      setCommentText("");
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const savePostHandler = async (postId) => {
    try {
    } catch (error) {
      console.log(error);
    }
  };

  const [liked, setLiked] = useState(false);

  useEffect(() => {
    setLiked(likes.includes(loggedInUser._id));

    getPostComment({ postId }).then((res) => {
      setComments(res.data.data);
    });

    const outsideClickHandler = (event) => {
      if (
        kebabMenuContainerRef.current &&
        !kebabMenuContainerRef.current.contains(event.target)
      ) {
        setKebabMenuVisible(false);
      }
    };

    document.addEventListener("click", outsideClickHandler);

    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  }, []);

  const likeUnlikeHandler = async () => {
    try {
      liked ? likes.length-- : likes.length++;
      setLiked(!liked);
      await likeUnlikeAPI(postId);
    } catch (error) {
      !liked ? likes.length-- : likes.length++;
      setLiked(!liked);
      console.log("Error liking post: ", error);
    }
  };

  const [kebabMenuVisible, setKebabMenuVisible] = useState(false);

  const deletePost = async (postId) => {
    try {
      await deletePostAPI(postId);
      await fetchAllPosts();
    } catch (error) {
      console.log("Error deleting post : ", error);
    }
  };

  const kebabMenuContainerRef = useRef(null);

  return (
    <>
      <div className="row feedpostcard_main_container mb-2">
        <div className="col-12">
          <div className="box feedpostcard_container mt-2">
            <div className="  feed_header_container border-2 border-bottom mb-3 pb-2">
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
                  <Link
                    to={`/user/${userId}`}
                    className="text-decoration-none"
                    style={{ fontSize: "18px", fontWeight: 600, color: "#000" }}
                  >
                    {firstName + " " + lastName}
                  </Link>
                  <span className="d-flex flex-column flex-md-row">
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "#000",
                      }}
                    >
                      <img src={HomeIcon} alt="logo" />
                      {designation}
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
              <div className="three_dot px-2 px-md-4"> 
                <div
                  className="kebab_menu_container"
                  ref={kebabMenuContainerRef}
                >
                  <img
                    src={ThreeODotIcon}
                    alt="dot"
                    className="me-3 p-2"
                    onClick={() => {
                      setKebabMenuVisible(!kebabMenuVisible);
                    }}
                    onBlurCapture={() => {
                      setTimeout(() => {
                        setKebabMenuVisible(false);
                      }, 100);
                    }}
                  />
                  {kebabMenuVisible && (
                    <ul className="kebab_menu border rounded shadow-sm p-3">
                      {userId === loggedInUser?._id && (
                        <li onClick={() => deletePost(postId)}>Delete</li>
                      )}
                      <li>Report</li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
            <div className="para_container w-100">
              <div className="para_container_text w-100">
                <p style={{ fontSize: "15px" }}>{description}</p>
                {image && (
                  <span className="d-flex">
                    <img
                      className="mx-auto"
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
                      className="mx-auto"
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
            <span className=" mx-3 text-secondary" style={{ fontSize: "14px" }}>
              {likes.length} likes
            </span>
            <hr className="mt-1 mb-2" />
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
                  <img
                    src={commentIcon}
                    width={16}
                    alt="comment post"
                    onClick={() => setShowComment(!showComment)}
                  />
                </div>
              </div>
              <div className="col-4 d-flex align-items-center gap-3 justify-content-end">
                <img src={shareIcon} width={16} alt="share post" />
                <img src={saveIcon} width={16} alt="save post" />
              </div>
              {showComment && (
                <div>
                  <div class="comment_container">
                    <div class="logo">
                      <img src={RoundLogo} alt="Logo" />
                    </div>
                    <section class="input_and_logo_section">
                      <div class="input_box">
                        <input
                          type="text"
                          placeholder="Add Comment"
                          value={commentText}
                          onChange={(e) => setCommentText(e.target.value)}
                          onKeyDown={(e) => {
                            if (e.key === "Enter") {
                              e.preventDefault(); // Prevent the default Enter behavior
                              sendComment(); // Call sendComment when Enter is pressed
                            }
                          }}
                        />
                        <div class="icons">
                          <span class="image_icon">
                            <img src={ImageIcon} alt="image" />
                          </span>
                          <span class="smiley_icon">
                            <img src={SmileeIcon} alt="photo" />
                          </span>
                        </div>
                      </div>
                    </section>
                  </div>
                  {comments
                    .sort(
                      (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                    )
                    .map((val) => (
                      <section className="comment_messages" key={val._id}>
                        <div className="connection_item d-flex flex-column flex-md-row justify-content-between">
                          <div className="connection_left">
                            {val.user && (
                              <>
                                <img
                                  src={val.user.profilePicture || ""}
                                  alt="Connection"
                                  className="comment_connection"
                                />
                                <div className="body_container">
                                  <p className="connection_name">
                                    {val.user.firstName +
                                      " " +
                                      val.user.lastName}
                                  </p>
                                  <p className="connection_designation">
                                    {val.user.designation}
                                  </p>
                                </div>
                              </>
                            )}
                          </div>
                          <div className="connection_right mt-3 mt-md-0 align-items-center justify-content-center">
                            <span className="days_time">
                              <TimeAgo datetime={val.createdAt} locale="" />
                            </span>
                          </div>
                        </div>
                        <p className="comment_text">{val.text}</p>
                      </section>
                    ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedPostCard;
