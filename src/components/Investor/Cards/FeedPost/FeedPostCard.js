import React, { useEffect } from "react";
import locationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import HomeIcon from "../../../../Images/HomeIcon.svg";
import ThreeODotIcon from "../../../../Images/ThreeDotIcon.svg";
import "./feedPostCard.scss";
import shareIcon from "../../../../Images/post/share.png";
import fireIcon from "../../../../Images/post/like-fire.png";
import bwFireIcon from "../../../../Images/post/unlike-fire.png";
import commentIcon from "../../../../Images/post/comment.svg";
import repostIcon from "../../../../Images/post/repost.svg";
import repostWithThoughtsIcon from "../../../../Images/post/repost-with-thoughts.svg";
import repostInstantlyIcon from "../../../../Images/post/repost-grey.svg";
import saveIcon from "../../../../Images/post/save.svg";
import savedIcon from "../../../../Images/post/saved.png";
import deleteIcon from "../../../../Images/post/delete.png";

import TimeAgo from "timeago-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  deletePostAPI,
  getPostComment,
  likeUnlikeAPI,
  sendPostComment,
  addToFeaturedPost,
  deleteComment,
  toggleLikeComment,
} from "../../../../Service/user";
import SmileeIcon from "../../../../Images/Group 15141(1).svg";
import ImageIcon from "../../../../Images/Group 15141.svg";
import RoundLogo from "../../../../Images/RoundLogo.png";
import { Link } from "react-router-dom";
import SavePostPopUP from "../../../../components/PopUp/SavePostPopUP/SavePostPopUP";
import AfterSuccessPopUp from "../../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import { useRef } from "react";
import ModalBSContainer from "../../../PopUp/ModalBS/ModalBSContainer/ModalBSContainer";
import ModalBSHeader from "../../../PopUp/ModalBS/ModalBSHeader/ModalBSHeader";
import ModalBSFooter from "../../../PopUp/ModalBS/ModalBSFooter/ModalBSFooter";
import ModalBSBody from "../../../PopUp/ModalBS/ModalBSBody/ModalBSBody";
import { BiMessageSquareAdd } from "react-icons/bi";
import IconComponent_add from "../../SvgIcons/IconComponent_add";
import Linkify from "react-linkify";

const FeedPostCard = ({
  postId,
  description,
  firstName,
  lastName,
  video,
  image,
  documentUrl,
  documentName,
  createdAt,
  profilePicture,
  designation,
  likes,
  userId,
  fetchAllPosts,
  response,
  repostWithToughts,
  repostInstantly,
  repostLoading,
  repostPreview,
  resharedPostId,
}) => {
  const [showComment, setShowComment] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [savedPostId, setSavedPostId] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSavePopUp, setshowSavePopUp] = useState(false);
  const handleCloseSavePopup = () => {
    setshowSavePopUp(false);
  };
  const handleSavePopUp = () => {
    setshowSavePopUp(true);
  };

  const receiveSavedPostStatus = () => {
    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false); // Reset the state after a delay
    }, 2500);
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

  const [liked, setLiked] = useState(false);
  const [commentLiked, setCommentLiked] = useState(false);
  const [commentLikCount, setCommentLikCount] = useState(0);

  // const commentlikelikeHandler = async () => {
  //   setCommentLiked(true);
  //   setCommentLikCount(commentLikCount + 1);
  // };
  const commentlikeUnlikeHandler = async (postId, commentId) => {
    try {
      const result = await toggleLikeComment(postId, commentId);
      console.log('Toggle Like Result:', result);
      await fetchAllPosts();
    } catch (error) {
      console.log("Error likeDislike comment : ", error);
    }
    // setCommentLiked(false);
    // setCommentLikCount(commentLikCount - 1);
  };
  

  useEffect(() => {
    if (!repostPreview) {
      getPostComment({ postId }).then((res) => {
        setComments(res.data.data);
      });

      const fetchSavedPostData = async () => {
        try {
          if (response.data && response.data.length > 0) {
            const allSavedPostDataIds = response.data.reduce(
              (acc, collection) => {
                if (collection.posts && Array.isArray(collection.posts)) {
                  acc = acc.concat(collection.posts);
                }
                return acc;
              },
              []
            );
            // console.log(allSavedPostDataIds);
            setSavedPostId(allSavedPostDataIds);
          }
        } catch (error) {
          console.error("Error fetching saved post collections:", error);
        }
      };

      fetchSavedPostData();
      // useEffect(() => {
      setLiked(likes?.includes(loggedInUser._id) || null);

      getPostComment({ postId }).then((res) => {
        setComments(res.data.data);
      });
    }
    const outsideClickHandler = (event) => {
      if (
        kebabMenuContainerRef.current &&
        !kebabMenuContainerRef.current.contains(event.target)
      ) {
        setKebabMenuVisible(false);
      }

      if (
        repostContainerRef.current &&
        !repostContainerRef.current.contains(event.target)
      ) {
        setShowRepostOptions(false);
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

  // Delete comment
  const deleteComments = async (postId, commentId) => {
    console.log(postId, commentId)
    try {
      await deleteComment(postId, commentId);
      await fetchAllPosts();
    } catch (error) {
      console.log("Error deleting comment : ", error);
    }
  };

  // Kebab menu
  const [kebabMenuVisible, setKebabMenuVisible] = useState(false);
  const kebabMenuContainerRef = useRef(null);

  // Delete post
  const deletePost = async (postId) => {
    try {
      await deletePostAPI(postId);
      await fetchAllPosts();
    } catch (error) {
      console.log("Error deleting post : ", error);
    }
  };

  // Report post
  const [reportReason, setReportReason] = useState("");
  const [showReportModal, setShowReportModal] = useState(false);
  const [filingReport, setFilingReport] = useState(false);
  const [showRepostOptions, setShowRepostOptions] = useState(false);

  const repostContainerRef = useRef(null);

  const reportSubmitHandler = () => {
    // take reason from state = reportReason
    setFilingReport(true);
    setTimeout(() => {
      setFilingReport(false);
      setShowReportModal(false);
    }, 2000);
  };

  // add post as featured
  const [showFeaturedPostSuccess, setShowFeaturedPostSuccess] = useState(false);
  const handleAddToFeatured = async (postId) => {
    try {
      console.log(postId);
      const response = await addToFeaturedPost(postId);
      if (response.status === 200) {
        setShowFeaturedPostSuccess(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div className="feedpostcard_main_container mb-2">
        <div
          className={`box feedpostcard_container mt-2 ${
            repostPreview && "rounded shadow-sm border"
          }`}
        >
          {/* Post Header */}
          <div className="feed_header_container border-2 border-bottom mb-3 pb-2">
            <div className="feedpostcard_content">
              {/* Poster's Profile Picture */}
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
              {/* Poster's Information */}
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
                    {designation}, {loggedInUser.startUp.company}
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
                  {" "}
                  <TimeAgo datetime={createdAt} locale="" />
                </span>
              </div>
            </div>

            {/* If this is not repost preview show post options */}
            {!repostPreview && (
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
                        <li
                          onClick={() => handleAddToFeatured(postId)}
                          className="d-flex align-items-center gap-2"
                        >
                          <IconComponent_add />
                          Featured
                        </li>
                      )}
                      {userId === loggedInUser?._id && (
                        <li onClick={() => deletePost(postId)}>Delete</li>
                      )}
                      <li
                        data-bs-toggle="modal"
                        data-bs-target="#reportPostModal"
                        // onClick={() => setShowReportModal(true)}
                      >
                        Report
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Post Body */}
          <div className="para_container w-100">
            <div className="para_container_text w-100">
              {/* Text */}
              <Linkify>
                {description && (
                  <p style={{ fontSize: "15px" }} className="text-break">
                    {description}{" "}
                    {documentUrl && (
                      <a href={documentUrl} className="text-break">
                        {documentName}
                      </a>
                    )}
                  </p>
                )}
              </Linkify>
              {/* Image */}
              {image && (
                <span className="d-flex">
                  <img
                    className="mx-auto"
                    style={{ maxHeight: "350px", objectFit: "contain" }}
                    width={!repostPreview ? "100%" : "50%"}
                    src={image}
                    alt="post-image"
                  />
                </span>
              )}
              {/* Video */}
              {video && (
                <span className="d-flex">
                  <video
                    className="mx-auto"
                    width={!repostPreview ? "100%" : "50%"}
                    style={{ maxWidth: "500px" }}
                    controls
                  >
                    <source alt="post-video" src={video} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </span>
              )}

              {resharedPostId && (
                <FeedPostCard
                  repostPreview
                  userId={resharedPostId?.user?._id}
                  postId={resharedPostId?._id}
                  designation={resharedPostId?.user?.designation}
                  profilePicture={resharedPostId?.user?.profilePicture}
                  description={resharedPostId?.description}
                  firstName={resharedPostId?.user?.firstName}
                  lastName={resharedPostId?.user?.lastName}
                  video={resharedPostId?.video}
                  image={resharedPostId?.image}
                  createdAt={resharedPostId?.createdAt}
                  likes={resharedPostId?.likes}
                />
              )}
            </div>
          </div>
          {likes && (
            <span className=" mx-3 text-secondary" style={{ fontSize: "14px" }}>
              {likes?.length} likes
            </span>
          )}
          {!repostPreview && (
            <>
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
                <div className=" col-4 d-flex align-items-center gap-3 justify-content-end">
                  <span
                    className={`repost_container rounded ${
                      showRepostOptions ? "bg-light" : ""
                    }`}
                    ref={repostContainerRef}
                  >
                    <img
                      src={repostIcon}
                      width={12}
                      alt="reshare post"
                      onClick={() => setShowRepostOptions(!showRepostOptions)}
                    />
                    {showRepostOptions && (
                      <span className="repost_options rounded shadow-sm">
                        <button
                          className="single_option btn text-start py-1 px-1 rounded border-bottom"
                          onClick={() => repostWithToughts(postId)}
                        >
                          {!repostLoading?.withThoughts ? (
                            <img
                              src={repostWithThoughtsIcon}
                              alt="repost with thoughts"
                            />
                          ) : (
                            <div
                              class="spinner-border text-secondary"
                              role="status"
                            >
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          )}
                          <div className="d-flex flex-column g-1 ">
                            <span className="title">
                              Repost with your thoughts
                            </span>
                            <span className="description">
                              Create a new post
                            </span>
                          </div>
                        </button>
                        <button
                          className="single_option btn text-start py-1 px-2 rounded border-bottom"
                          onClick={() => repostInstantly(postId)}
                        >
                          {!repostLoading?.instant ? (
                            <img
                              src={repostInstantlyIcon}
                              alt="repost instantly"
                            />
                          ) : (
                            <div
                              class="spinner-border text-secondary"
                              role="status"
                            >
                              <span class="visually-hidden">Loading...</span>
                            </div>
                          )}
                          <div className="d-flex flex-column g-1 ">
                            <span className="title">Repost Instantly</span>
                            <span className="description">
                              Instantly bring to other's feed
                            </span>
                          </div>
                        </button>
                      </span>
                    )}
                  </span>
                  {savedPostId.includes(postId) ? (
                    <img src={savedIcon} width={16} alt="save post" />
                  ) : (
                    <img
                      src={saveIcon}
                      width={16}
                      alt="save post"
                      onClick={handleSavePopUp}
                    />
                  )}
                </div>
                {showComment && (
                  <div>
                    <div class="comment_container">
                      <div class="logo">
                        <img src={loggedInUser.profilePicture} alt="Logo" />
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
                          <div class="icons comment_icons">
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
                        
                        <section className="comment_messages my-2" key={val._id}>
                          <div className="connection_item d-flex flex-column flex-md-row justify-content-between">
                            <div className="connection_left">
                              {val.user && (
                                <>
                                  <Link to={`/user/${val.user._id}`}>
                                    <img
                                      src={val.user.profilePicture || ""}
                                      alt="Connection"
                                      className="comment_connection"
                                    />
                                  </Link>
                                  <div className="body_container">
                                    <Link
                                      to={`/user/${val.user._id}`}
                                      className="connection_name"
                                    >
                                      {val.user.firstName +
                                        " " +
                                        val.user.lastName}
                                    </Link>
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
                          <hr className="p-0 m-0" />
                          <div className="d-flex  justify-content-between px-2">


<div className="p-2">
                            {commentLiked ? (
                              <img
                                src={fireIcon}
                                width={18}
                                alt="like post"
                                // onClick={commentlikeUnlikeHandler}
                                onClick={() => commentlikeUnlikeHandler(postId,val._id )}
                              />
                            ) : (
                              <img
                                src={bwFireIcon}
                                width={18}
                                alt="like post"
                                // onClick={commentlikelikeHandler}
                                onClick={() => commentlikeUnlikeHandler(postId,val._id )}
                              />
                            )}
                            <span
                              className=" mx-3 text-secondary"
                              style={{ fontSize: "14px" }}
                            >
                              {commentLikCount} likes
                            </span>
                          </div>
                          {userId === loggedInUser?._id && (
                            <p onClick={() => deleteComments(postId,val._id )}><img src={deleteIcon} alt="image" className="deleteIcon py-1" /></p>
                          )}
                          </div>

                        
                        </section>
                      ))}
                  </div>
                )}
              </div>
            </>
          )}
        </div>

        {showSavePopUp && (
          <SavePostPopUP
            postId={postId}
            savedPostStatus={receiveSavedPostStatus}
            onClose={handleCloseSavePopup}
          />
        )}
        {showSuccess && (
          <AfterSuccessPopUp
            withoutOkButton
            onClose={() => setShowSuccess(!showSuccess)}
            successText="Post saved Successfully"
          />
        )}
        {showFeaturedPostSuccess && (
          <AfterSuccessPopUp
            withoutOkButton
            onClose={() => setShowFeaturedPostSuccess(!showFeaturedPostSuccess)}
            successText="The post has been added as a featured post."
          />
        )}
      </div>

      <ModalBSContainer id="reportPostModal">
        <ModalBSHeader title="Report Post" />
        <ModalBSBody>
          <h6 className="h6">Select a reason that applies</h6>
          <div className="reasons_container">
            <div class="form-check form-check-inline m-0">
              <input
                class="form-check-input"
                type="radio"
                name="reportReason"
                onChange={({ target }) => setReportReason(target.value)}
                id="inlineRadio1"
                value="Harassment"
                hidden
              />
              <label
                class={`form-check-label ${
                  reportReason === "Harassment" && "bg-secondary text-white"
                }`}
                for="inlineRadio1"
              >
                Harassment
              </label>
            </div>
            <div class="form-check form-check-inline m-0">
              <input
                class="form-check-input"
                type="radio"
                name="reportReason"
                onChange={({ target }) => setReportReason(target.value)}
                id="inlineRadio2"
                value="Spam"
                hidden
              />
              <label
                class={`form-check-label ${
                  reportReason === "Spam" && "bg-secondary text-white"
                }`}
                for="inlineRadio2"
              >
                Spam
              </label>
            </div>
            <div class="form-check form-check-inline m-0">
              <input
                class="form-check-input"
                type="radio"
                name="reportReason"
                onChange={({ target }) => setReportReason(target.value)}
                id="inlineRadio3"
                value="Fraud or scam"
                hidden
              />
              <label
                class={`form-check-label ${
                  reportReason === "Fraud or scam" && "bg-secondary text-white"
                }`}
                for="inlineRadio3"
              >
                Fraud or scam
              </label>
            </div>
            <div class="form-check form-check-inline m-0">
              <input
                class="form-check-input"
                type="radio"
                name="reportReason"
                onChange={({ target }) => setReportReason(target.value)}
                id="inlineRadio4"
                value="Hateful Speech"
                hidden
              />
              <label
                class={`form-check-label ${
                  reportReason === "Hateful Speech" && "bg-secondary text-white"
                }`}
                for="inlineRadio4"
              >
                Hateful Speech
              </label>
            </div>
          </div>
          <h6 className="h6 mt-3 text-decoration-underline">
            Looking for something else?
          </h6>
          <span>
            Sometimes our members prefer not to see certain kinds of content,
            rather than reporting.
          </span>
        </ModalBSBody>
        <ModalBSFooter cancel cancelClass="cancel_button btn">
          {!filingReport ? (
            <button
              type="submit"
              className="submit_button btn"
              onClick={reportSubmitHandler}
            >
              Submit report
            </button>
          ) : (
            <button class="submit_button btn" type="button" disabled>
              <span role="status" className="me-1">
                Submit report
              </span>
              <span
                class="spinner-border spinner-border-sm"
                aria-hidden="true"
              ></span>
            </button>
          )}
        </ModalBSFooter>
      </ModalBSContainer>
    </>
  );
};
export default FeedPostCard;
