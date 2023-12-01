import React, { useEffect } from "react";
import locationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import HomeIcon from "../../../../Images/HomeIcon.svg";
import ThreeODotIcon from "../../../../Images/ThreeDotIcon.svg";
import "./feedPostCard.scss";
import shareIcon from "../../../../Images/post/share.png";
import fireIcon from "../../../../Images/post/like-fire.png";
import bwFireIcon from "../../../../Images/post/unlike-fire.png";
import commentIcon from "../../../../Images/post/comment.svg";
import repostIcon from "../../../../Images/post/repostBlack.svg";
import repostWithThoughtsIcon from "../../../../Images/post/repost-with-thoughts.svg";
import repostInstantlyIcon from "../../../../Images/post/repost-grey.svg";
import saveIcon from "../../../../Images/post/save.svg";
import savedIcon from "../../../../Images/post/saved.png";
import deleteIcon from "../../../../Images/post/delete.png";
import Modal from "../../../PopUp/Modal/Modal";
import { FaRegCommentDots, FaCommentDots } from "react-icons/fa6";

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
  unsavePost,
  getLikeCount,
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
import IconComponentAdd from "../../SvgIcons/IconComponentAdd";
import Linkify from "react-linkify";
import IconDelete from "../../SvgIcons/IconDelete";
import IconReportPost from "../../SvgIcons/IconReportPost";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";
import { useNavigate } from "react-router-dom";
import { selectIsMobileView } from "../../../../Store/features/design/designSlice";
import { selectIsInvestor } from "../../../../Store/features/user/userSlice";

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
  startUpCompanyName,
  investorCompanyName,
  likes,
  userId,
  fetchAllPosts,
  response,
  repostWithToughts,
  repostInstantly,
  repostLoading,
  repostPreview,
  resharedPostId,
  deletePostFilterData,
  isSinglePost = false,
}) => {
  const [showComment, setShowComment] = useState(isSinglePost);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);
  const [savedPostId, setSavedPostId] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSavePopUp, setshowSavePopUp] = useState(false);
  const [likedBy, setLikedBy] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const navigate = useNavigate();
  const isMobileView = useSelector(selectIsMobileView);
  const isInvestor = useSelector(selectIsInvestor);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleCloseSavePopup = () => {
    setshowSavePopUp(false);
  };
  const handleSavePopUp = () => {
    setshowSavePopUp(true);
  };

  const handleUnsavePost = async (e) => {
    receiveUnSavedPostStatus();
    e.preventDefault();
    const requestBody = {
      userId: loggedInUser._id,
      postId: postId,
    };
    try {
      const response = await unsavePost(requestBody);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  const [showUnsaveSuccess, setShowUnsaveSuccess] = useState(false);
  const receiveUnSavedPostStatus = () => {
    // setShowUnsaveSuccess(true);
    // setTimeout(() => {
    //   setShowUnsaveSuccess(false);
    const updatedSavedPostId = savedPostId.filter((id) => id !== postId);
    setSavedPostId(updatedSavedPostId);
    // }, 2500);
  };

  const receiveSavedPostStatus = () => {
    // setShowSuccess(true);
    // setTimeout(() => {
    //   setShowSuccess(false);
    setSavedPostId([...savedPostId, postId]);
    // }, 2500);
  };

  const sendComment = async () => {
    try {
      const commentTextTemp = commentText;
      setCommentText("");
      const commentBody = {
        postId: postId,
        user: {
          _id: loggedInUser._id,
          profilePicture: loggedInUser.profilePicture,
          firstName: loggedInUser.firstName,
          lastName: loggedInUser.lastName,
          designation: loggedInUser.designation,
        },
        text: commentTextTemp,
      };
      setComments((prev) => [...prev, commentBody]);

      const requestBody = {
        postId: postId,
        userId: loggedInUser._id,
        text: commentTextTemp,
      };
      const response = await sendPostComment(requestBody);

      if (response) {
        await getPostComment({ postId }).then((res) => {
          console.log("response", res.data.data);
          setComments(res.data.data);
        });
      }

      console.log("Comment submitted successfully:", response.data);
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const [liked, setLiked] = useState(false);
  // const [commentLiked, setCommentLiked] = useState(true);

  const commentlikeUnlikeHandler = async (postId, commentId) => {
    try {
      const result = await toggleLikeComment(postId, commentId);
      console.log("Toggle Like Result:", result);

      const response = await getPostComment({ postId });
      setComments(response.data.data);
    } catch (error) {
      console.error("Error likeDislike comment : ", error);
    }
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

  const videoRef = useRef(null);
  useEffect(() => {
    const video = videoRef.current;
    let playState = null;

    if (video) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            video.pause();
            playState = false;
          } else {
            video.muted = true;
            video
              .play()
              .then(() => {
                playState = true;
              })
              .catch((error) => {
                console.error("Auto-play failed:", error);
              });
          }
        });
      }, {});

      observer.observe(video);

      const onVisibilityChange = () => {
        if (document.hidden || !playState) {
          video.pause();
        } else {
          video
            .play()
            .then(() => {
              playState = true;
            })
            .catch((error) => {
              console.error("Auto-play failed:", error);
            });
        }
      };

      document.addEventListener("visibilitychange", onVisibilityChange);

      return () => {
        observer.unobserve(video);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    }
  }, [video]);

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
    try {
      const updatedComments = comments.filter(
        (comment) => comment._id !== commentId
      );
      setComments(updatedComments);
      await deleteComment(postId, commentId);
      // await getPostComment({ postId }).then((res) => {
      //   setComments(res.data.data);
      // });
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
      setLoading(true);
      await deletePostAPI(postId);
      if (isSinglePost) {
        loggedInUser.isInvestor === "true"
          ? navigate("/investor/home")
          : navigate("/home");
      } else {
        deletePostFilterData(postId);
      }
      setLoading(false);
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

  useEffect(() => {
    getLikeCount(postId)
      .then((data) => {
        setLikedBy(data?.data.likedBy);
      })
      .catch((error) => console.log(error));
  }, [liked, postId]);

  const singleClickTimer = useRef(null);
  const [showImgagePopup, setShowImgagePopup] = useState(false);

  const handleImageOnClick = () => {
    if (!singleClickTimer.current) {
      singleClickTimer.current = setTimeout(() => {
        setShowImgagePopup(true);
        singleClickTimer.current = null;
      }, 300);
    } else {
      likeUnlikeHandler();
      clearTimeout(singleClickTimer.current);
      singleClickTimer.current = null;
    }
  };

  const handleSingleImage = () => {
    navigate(isInvestor ? `/investor/post/${postId}` : `/posts/${postId}`);
  };

  return (
    <>
      <div className="feedpostcard_main_container mb-2">
        <div
          className={`box feedpostcard_container mt-2 ${
            repostPreview && "rounded-4 shadow-sm border"
          }`}
        >
          {loading && (
            <div className="d-flex justify-content-center my-4">
              <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          {/* Post Header */}
          {/* <div className="feed_header_container border-2 border-bottom mb-3 pb-2"> */}
          <div className="feed_header_container pb-2">
            <div className="feedpostcard_content">
              {/* Poster's Profile Picture */}
              <Link to={`/user/${userId}`} className="rounded-circle">
                <img
                  src={
                    profilePicture ||
                    "https://res.cloudinary.com/drjt9guif/image/upload/v1692264454/TheCapitalHub/users/default-user-avatar_fe2ky5.webp"
                  }
                  width={50}
                  height={50}
                  className="rounded-circle"
                  alt="logo"
                  style={{ objectFit: "cover" }}
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
                    {designation},{" "}
                    {investorCompanyName?.companyName
                      ? investorCompanyName?.companyName
                      : startUpCompanyName?.company}
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
              <div className="three_dot pe-2 px-md-4">
                <div
                  className="kebab_menu_container"
                  ref={kebabMenuContainerRef}
                >
                  <img
                    src={ThreeODotIcon}
                    alt="dot"
                    className="me-md-3 p-md-2"
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
                          className="d-flex align-items-center gap-1"
                        >
                          <IconComponentAdd />
                          <span>Featured</span>
                        </li>
                      )}
                      {userId === loggedInUser?._id && (
                        <li
                          onClick={() => deletePost(postId)}
                          className="d-flex align-items-center gap-1"
                        >
                          <IconDelete />
                          <span>Delete</span>
                        </li>
                      )}
                      <li
                        data-bs-toggle="modal"
                        data-bs-target="#reportPostModal"
                        className="d-flex align-items-center gap-1"
                        // onClick={() => setShowReportModal(true)}
                      >
                        <IconReportPost />
                        <span>Report</span>
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
                    {/* {description} */}
                    {expanded
                      ? description
                      : description.split(" ").slice(0, 15).join(" ")}
                    {!expanded &&
                      description.split(" ").length > 15 &&
                      !expanded && (
                        <span
                          style={{ color: "blue", cursor: "pointer" }}
                          onClick={toggleDescription}
                        >
                          ...Read more
                        </span>
                      )}
                    {documentUrl && (
                      <a
                        href={documentUrl}
                        style={{
                          fontSize: "13px",
                          wordWrap: "break-word",
                          overflowWrap: "break-word",
                        }}
                        className="text-break"
                      >
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
                    alt="Post media"
                    onClick={
                      isMobileView ? handleSingleImage : handleImageOnClick
                    }
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
                    ref={videoRef}
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
                  startUpCompanyName={startUpCompanyName}
                  investorCompanyName={investorCompanyName}
                />
              )}
            </div>
          </div>
          {likes && (
            <span className=" mx-3 text-secondary" style={{ fontSize: "14px" }}>
              {/* {likes?.length} likes */}
              {likedBy ? <>Liked By {likedBy}</> : <>{likes?.length} likes</>}
            </span>
          )}
          {!repostPreview && (
            <>
              <hr className="mt-1 mb-2" />
              <div className="row feedpostcard_footer mb-2">
                {/* Like and Comment */}
                <div className="col-8">
                  <div className="feedpostcard_footer_like_comment d-flex gap-2">
                    {liked ? (
                      <img
                        src={fireIcon}
                        width={18}
                        alt="like post"
                        onClick={likeUnlikeHandler}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <img
                        src={bwFireIcon}
                        width={18}
                        alt="like post"
                        onClick={likeUnlikeHandler}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                    {/* <img
                      src={commentIcon}
                      width={16}
                      alt="comment post"
                      onClick={() => setShowComment(!showComment)}
                      style={{ cursor: "pointer" }}
                    /> */}
                    {!showComment ? (
                      <FaRegCommentDots
                        size={20}
                        onClick={() => setShowComment((prev) => !prev)}
                        style={{ cursor: "pointer" }}
                      />
                    ) : (
                      <FaCommentDots
                        size={20}
                        onClick={() => setShowComment((prev) => !prev)}
                        style={{ cursor: "pointer" }}
                      />
                    )}
                  </div>
                </div>

                {/* Repost and Save posts */}
                <div className=" col-4 d-flex align-items-center gap-3 justify-content-end">
                  <span
                    className={`repost_container rounded-4 ${
                      showRepostOptions ? "bg-light" : ""
                    }`}
                    ref={repostContainerRef}
                  >
                    <img
                      src={repostIcon}
                      width={12}
                      alt="reshare post"
                      onClick={() => setShowRepostOptions(!showRepostOptions)}
                      style={{ cursor: "pointer" }}
                    />
                    {showRepostOptions && (
                      <span className="repost_options border rounded shadow-sm">
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
                              className="spinner-border text-secondary"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
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
                              className="spinner-border text-secondary"
                              role="status"
                            >
                              <span className="visually-hidden">
                                Loading...
                              </span>
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
                    <img
                      src={savedIcon}
                      width={16}
                      alt="save post"
                      onClick={handleUnsavePost}
                      style={{ cursor: "pointer" }}
                    />
                  ) : (
                    <img
                      src={saveIcon}
                      width={16}
                      alt="save post"
                      onClick={handleSavePopUp}
                      style={{ cursor: "pointer" }}
                    />
                  )}
                </div>

                {/* Show Comments */}
                {showComment && (
                  <div className="border-top mt-1">
                    <div className="comment_container mb-1 border-bottom">
                      <div className="logo">
                        <img src={loggedInUser.profilePicture} alt="Logo" />
                      </div>
                      <section className="input_and_logo_section">
                        <div className="input_box px-1">
                          <input
                            type="text"
                            placeholder="Add a comment"
                            className="fs-14"
                            value={commentText}
                            onChange={(e) => setCommentText(e.target.value)}
                            onKeyDown={(e) => {
                              if (e.key === "Enter") {
                                e.preventDefault(); // Prevent the default Enter behavior
                                sendComment(); // Call sendComment when Enter is pressed
                              }
                            }}
                          />
                          {/* <div className="icons comment_icons">
                            <span className="image_icon">
                              <img src={ImageIcon} alt="gallery icon" />
                            </span>
                            <span className="smiley_icon">
                              <img src={SmileeIcon} alt="smiley icon" />
                            </span>
                          </div> */}
                        </div>
                      </section>
                    </div>
                    {comments?.length ? (
                      <span className="fs-6 ps-2 mb-2">Comments</span>
                    ) : (
                      <span className="fs-6 ps-2 mb-2 w-100 d-flex justify-content-center text-center">
                        No comments
                      </span>
                    )}
                    {/* Comments */}
                    {comments
                      // .sort(
                      //   (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
                      // )
                      .map((val) => (
                        <section
                          className="single-comment row m-0 mt-2"
                          key={val.tex}
                        >
                          <div className="img_container col-2">
                            <Link to={`/user/${val.user._id}`}>
                              <img
                                src={val.user.profilePicture || ""}
                                alt="Connection"
                                className="w-100 rounded-circle border border-light"
                              />
                            </Link>
                          </div>
                          <div className="col-10 p-0 flex-grow-1">
                            <div className="comment-details bg-light rounded-3 p-2 p-lg-3 d-flex flex-column gap-1">
                              <header className="d-flex justify-content-between align-items-center p-0">
                                <Link
                                  to={`/user/${val.user._id}`}
                                  className="text-decoration-none text-black fs-sm"
                                >
                                  <h6 className="fs-6 m-0">
                                    {val.user.firstName +
                                      " " +
                                      val.user.lastName}
                                  </h6>
                                </Link>
                                <span className="days_time fs-xs">
                                  <TimeAgo datetime={val.createdAt} locale="" />
                                </span>
                              </header>
                              <span className="text-secondary fs-xs m-0">
                                {val.user.designation}
                              </span>
                              <p className="comment m-0 fs-sm mt-1">
                                {val.text}
                              </p>
                            </div>
                            <div className="actions d-flex gap-2 px-1 align-items-center justify-content-between">
                              <div>
                                {val?.likes?.includes(loggedInUser._id) ? (
                                  <img
                                    src={fireIcon}
                                    width={15}
                                    alt="like post"
                                    onClick={() =>
                                      commentlikeUnlikeHandler(postId, val._id)
                                    }
                                  />
                                ) : (
                                  <img
                                    src={bwFireIcon}
                                    width={15}
                                    alt="like post"
                                    onClick={() =>
                                      commentlikeUnlikeHandler(postId, val._id)
                                    }
                                  />
                                )}
                                <span className="mx-2 text-secondary fs-sm">
                                  {val?.likes?.length} likes
                                </span>
                              </div>
                              {val.user._id === loggedInUser?._id && (
                                <span
                                  onClick={() =>
                                    deleteComments(postId, val._id)
                                  }
                                >
                                  <img
                                    src={deleteIcon}
                                    alt="delete icon"
                                    className="deleteIcon py-1"
                                    width={15}
                                  />
                                </span>
                              )}
                            </div>
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
        {showUnsaveSuccess && (
          <AfterSuccessPopUp
            withoutOkButton
            onClose={() => setShowUnsaveSuccess(!showUnsaveSuccess)}
            successText="Post unsaved Successfully"
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

      {showImgagePopup && (
        <Modal>
          <div className="image-popup-container ">
            <button
              className="btn btn-sm btn-light  top-0 end-0 m-2"
              onClick={() => setShowImgagePopup(false)}
            >
              X
            </button>
            <img src={image} className="popup-image" alt="zoomed image" />
          </div>
        </Modal>
      )}

      <ModalBSContainer id="reportPostModal">
        <ModalBSHeader title="Report Post" />
        <ModalBSBody>
          <h6 className="h6">Select a reason that applies</h6>
          <div className="reasons_container">
            <div className="form-check form-check-inline m-0">
              <input
                className="form-check-input"
                type="radio"
                name="reportReason"
                onChange={({ target }) => setReportReason(target.value)}
                id="inlineRadio1"
                value="Harassment"
                hidden
              />
              <label
                className={`form-check-label ${
                  reportReason === "Harassment" && "bg-secondary text-white"
                }`}
                htmlFor="inlineRadio1"
              >
                Harassment
              </label>
            </div>
            <div className="form-check form-check-inline m-0">
              <input
                className="form-check-input"
                type="radio"
                name="reportReason"
                onChange={({ target }) => setReportReason(target.value)}
                id="inlineRadio2"
                value="Spam"
                hidden
              />
              <label
                className={`form-check-label ${
                  reportReason === "Spam" && "bg-secondary text-white"
                }`}
                htmlFor="inlineRadio2"
              >
                Spam
              </label>
            </div>
            <div className="form-check form-check-inline m-0">
              <input
                className="form-check-input"
                type="radio"
                name="reportReason"
                onChange={({ target }) => setReportReason(target.value)}
                id="inlineRadio3"
                value="Fraud or scam"
                hidden
              />
              <label
                className={`form-check-label ${
                  reportReason === "Fraud or scam" && "bg-secondary text-white"
                }`}
                htmlFor="inlineRadio3"
              >
                Fraud or scam
              </label>
            </div>
            <div className="form-check form-check-inline m-0">
              <input
                className="form-check-input"
                type="radio"
                name="reportReason"
                onChange={({ target }) => setReportReason(target.value)}
                id="inlineRadio4"
                value="Hateful Speech"
                hidden
              />
              <label
                className={`form-check-label ${
                  reportReason === "Hateful Speech" && "bg-secondary text-white"
                }`}
                htmlFor="inlineRadio4"
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
            <button className="submit_button btn" type="button" disabled>
              <span role="status" className="me-1">
                Submit report
              </span>
              <span
                className="spinner-border spinner-border-sm"
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
