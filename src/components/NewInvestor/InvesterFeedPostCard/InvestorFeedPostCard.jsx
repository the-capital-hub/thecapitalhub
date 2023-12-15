import React, { useEffect } from "react";
import "./investorFeedPostCard.scss";
import fireIcon from "../../../Images/post/like-fire.png";
import repostWithThoughtsIcon from "../../../Images/post/repost-with-thoughts.svg";
import repostInstantlyIcon from "../../../Images/post/repost-grey.svg";
import TimeAgo from "timeago-react";
import { useSelector } from "react-redux";
import { useState } from "react";
import {
  deletePostAPI,
  getPostComment,
  likeUnlikeAPI,
  sendPostComment,
  unsavePost,
  getLikeCount,
  toggleLikeComment,
  deleteComment,
} from "../../../Service/user";
import { Link } from "react-router-dom";
import SavePostPopUP from "../../../components/PopUp/SavePostPopUP/SavePostPopUP";
import InvestorAfterSuccessPopUp from "../../../components/PopUp/InvestorAfterSuccessPopUp/InvestorAfterSuccessPopUp";
import { useRef } from "react";
import ModalBSContainer from "../../PopUp/ModalBS/ModalBSContainer/ModalBSContainer";
import ModalBSHeader from "../../PopUp/ModalBS/ModalBSHeader/ModalBSHeader";
import ModalBSFooter from "../../PopUp/ModalBS/ModalBSFooter/ModalBSFooter";
import ModalBSBody from "../../PopUp/ModalBS/ModalBSBody/ModalBSBody";
import Linkify from "react-linkify";
import { FaRegCommentDots, FaCommentDots } from "react-icons/fa6";
import CustomModal from "../../PopUp/Modal/Modal";
import { Modal } from "react-bootstrap";
import { GoHome } from "react-icons/go";
import { IoLocationOutline } from "react-icons/io5";
import { BsFire, BsThreeDots } from "react-icons/bs";
import { BiRepost } from "react-icons/bi";
import { FaBookmark, FaRegBookmark } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { selectVideoAutoplay } from "../../../Store/features/design/designSlice";

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
}) => {
  const [showComment, setShowComment] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [commentText, setCommentText] = useState("");
  const [comments, setComments] = useState([]);

  const [savedPostId, setSavedPostId] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSavePopUp, setshowSavePopUp] = useState(false);
  const [likedBy, setLikedBy] = useState(null);
  const [likedByUsers, setLikedByUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [likeModal, setLikeModal] = useState(false);
  const [activeHeader, setActiveHeader] = useState(true);

  const handleShow = () => setLikeModal(true);
  const handleClose = () => setLikeModal(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const handleCloseSavePopup = () => {
    setshowSavePopUp(false);
  };
  const handleSavePopUp = () => {
    setshowSavePopUp(true);
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

  useEffect(() => {
    if (!repostPreview) {
      getPostComment({ postId }).then((res) => {
        setComments(res.data.data);
      });

      const fetchSavedPostData = async () => {
        try {
          if (response?.data && response?.data.length > 0) {
            const allSavedPostDataIds = response?.data.reduce(
              (acc, collection) => {
                if (collection?.posts && Array.isArray(collection.posts)) {
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
        setComments(res?.data.data);
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

  // Kebab menu
  const [kebabMenuVisible, setKebabMenuVisible] = useState(false);
  const kebabMenuContainerRef = useRef(null);

  // Delete post
  const deletePost = async (postId) => {
    try {
      setLoading(true);
      await deletePostAPI(postId);
      deletePostFilterData(postId);
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

  const handleUnsavePost = async (e) => {
    e.preventDefault();
    receiveUnSavedPostStatus();
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

  const reportSubmitHandler = () => {
    // take reason from state = reportReason
    setFilingReport(true);
    setTimeout(() => {
      setFilingReport(false);
      setShowReportModal(false);
    }, 2000);
  };

  // double click like
  const handleDoubleClick = () => {
    likeUnlikeHandler();
  };
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

  useEffect(() => {
    getLikeCount(postId)
      .then((data) => {
        setLikedBy(data.data?.likedBy);
        setLikedByUser(data.data?.users);
      })
      .catch((error) => console.log(error));
  }, [liked, postId]);

  const commentlikeUnlikeHandler = async (postId, commentId) => {
    try {
      const result = await toggleLikeComment(postId, commentId);
      console.log("Toggle Like Result:", result);

      const response = await getPostComment({ postId });
      setComments(response.data.data);
    } catch (error) {
      console.error("Error  investor likeDislike comment : ", error);
    }
  };

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
      console.log("Error investor deleting comment : ", error);
    }
  };

  const videoRef = useRef(null);
  const isVideoAutoplay = useSelector(selectVideoAutoplay);

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

            if (isVideoAutoplay) {
              video
                .play()
                .then(() => {
                  playState = true;
                })
                .catch((error) => {
                  console.error("Auto-play failed:", error);
                });
            }
          }
        });
      }, {});

      observer.observe(video);

      const onVisibilityChange = () => {
        if (document.hidden || !playState) {
          video.pause();
        } else {
          if (isVideoAutoplay) {
            video
              .play()
              .then(() => {
                playState = true;
              })
              .catch((error) => {
                console.error("Auto-play failed:", error);
              });
          }
        }
      };

      document.addEventListener("visibilitychange", onVisibilityChange);

      return () => {
        observer.unobserve(video);
        document.removeEventListener("visibilitychange", onVisibilityChange);
      };
    }
  }, [video, isVideoAutoplay]);

  return (
    <>
      <div className="row investor_feedpostcard_main_container mb-2">
        <div className="col-12">
          <div
            className={`box feedpostcard_container mt-2 border ${
              repostPreview && "rounded-4 shadow-sm"
            }`}
          >
            {loading && (
              <div className="d-flex justify-content-center my-4">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            <div className="  feed_header_container pb-2">
              <div className="feedpostcard_content">
                <Link
                  to={`${
                    loggedInUser?.isInvestor === "true"
                      ? `/investor/user/${userId}`
                      : `/user/${userId}`
                  }`}
                  className="rounded-circle"
                >
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
                <div className="feedpostcart_text_header my-1">
                  <Link
                    to={`${
                      loggedInUser?.isInvestor === "true"
                        ? `/investor/user/${userId}`
                        : `/user/${userId}`
                    }`}
                    className="text-decoration-none"
                    style={{
                      fontSize: "18px",
                      fontWeight: 600,
                      color: "var(--d-l-grey)",
                    }}
                  >
                    {firstName + " " + lastName}
                  </Link>
                  <span className="d-flex flex-column flex-md-row">
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--d-l-grey)",
                      }}
                    >
                      {/* <img src={HomeIcon} alt="logo" /> */}
                      <GoHome size={15} />
                      {designation ? designation : "No Designation"},{" "}
                      {investorCompanyName?.companyName
                        ? investorCompanyName?.companyName
                        : startUpCompanyName?.company
                        ? startUpCompanyName?.company
                        : "No Company"}
                    </span>
                    <span
                      style={{
                        fontSize: "12px",
                        fontWeight: 500,
                        color: "var(--d-l-grey)",
                      }}
                    >
                      {/* <img src={locationIcon} alt="logo" /> */}
                      <IoLocationOutline size={15} />
                      Bangalore, India
                    </span>
                  </span>
                  <span
                    style={{ fontSize: "12px", fontWeight: 500 }}
                    className="text-secondary"
                  >
                    <TimeAgo datetime={createdAt} locale="" />
                  </span>
                </div>
              </div>
              {!repostPreview && (
                <div className="three_dot pe-2 px-md-4">
                  <div
                    className="kebab_menu_container"
                    ref={kebabMenuContainerRef}
                  >
                    {/* <img
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
                    /> */}
                    <BsThreeDots
                      size={25}
                      style={{ fill: "var(--d-l-grey)" }}
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
                        <li
                          data-bs-toggle="modal"
                          data-bs-target="#reportPostModal"
                          onClick={() => setShowReportModal(true)}
                        >
                          Report
                        </li>
                      </ul>
                    )}
                  </div>
                </div>
              )}
            </div>
            <div className="para_container w-100">
              <div className="para_container_text w-100">
                <Linkify>
                  {description && (
                    <p
                      style={{
                        fontSize: "16px",
                        wordWrap: "break-word",
                        overflowWrap: "break-word",
                      }}
                    >
                      {/* {description}{" "} */}
                      {expanded
                        ? description
                        : description.split(" ").slice(0, 15).join(" ")}
                      {!expanded &&
                        description.split(" ").length > 15 &&
                        !expanded && (
                          <span
                            style={{
                              cursor: "pointer",
                            }}
                            onClick={toggleDescription}
                            className="text-secondary"
                          >
                            ...Read more
                          </span>
                        )}

                      {documentUrl && (
                        <a href={documentUrl} className="mx-auto">
                          {documentName}
                        </a>
                      )}
                    </p>
                  )}
                </Linkify>
                {image && (
                  <span className="d-flex">
                    <img
                      className="mx-auto"
                      style={{ maxHeight: "350px", objectFit: "contain" }}
                      width={!repostPreview ? "100%" : "50%"}
                      src={image}
                      alt="post media"
                      onClick={handleImageOnClick}
                      onDoubleClick={handleDoubleClick}
                    />
                  </span>
                )}
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
                    startUpCompanyName={resharedPostId.user?.startUp}
                    investorCompanyName={resharedPostId.user?.investor}
                  />
                )}
              </div>
            </div>
            {likes && (
              <span
                className="mx-3 text-secondary pb-2 pe-auto d-flex align-items-center gap-1"
                style={{
                  fontSize: "12px",
                  cursor: "pointer",
                }}
                onClick={() => (likedBy ? handleShow() : "")}
              >
                {likedBy ? (
                  <>
                    <BsFire style={{ color: "orange" }} />{" "}
                    <span>{likedBy}</span>
                  </>
                ) : (
                  <>{likes?.length} likes</>
                )}
              </span>
            )}
            {!repostPreview && (
              <>
                <hr className="mt-1 mb-2" />
                <div className="row feedpostcard_footer">
                  <div className="col-8">
                    <div className="feedpostcard_footer_like_comment p-1 d-flex gap-2">
                      {liked ? (
                        <div
                          className="d-flex flex-column align-items-center justify-content-end
                        gap-1"
                        >
                          <img
                            src={fireIcon}
                            width={20}
                            alt="like post"
                            onClick={likeUnlikeHandler}
                            style={{ cursor: "pointer" }}
                          />
                          <p
                            style={{
                              color: "var(--d-l-grey)",
                              fontSize: "10px",
                            }}
                            className="m-0"
                          >
                            Like
                          </p>
                        </div>
                      ) : (
                        // <img
                        //   src={bwFireIcon}
                        //   width={18}
                        //   alt="like post"
                        //   onClick={likeUnlikeHandler}
                        //   style={{ cursor: "pointer" }}
                        // />
                        <div
                          className="d-flex flex-column align-items-center justify-content-end
                        gap-1"
                        >
                          <BsFire
                            onClick={likeUnlikeHandler}
                            size={20}
                            style={{
                              cursor: "pointer",
                              fill: "var(--d-l-grey)",
                            }}
                          />
                          <p
                            style={{
                              color: "var(--d-l-grey)",
                              fontSize: "10px",
                            }}
                            className="m-0"
                          >
                            Like
                          </p>
                        </div>
                      )}
                      {!showComment ? (
                        <div
                          className="d-flex flex-column align-items-center justify-content-end
                        gap-1"
                        >
                          <FaRegCommentDots
                            size={20}
                            onClick={() => setShowComment((prev) => !prev)}
                            style={{
                              cursor: "pointer",
                              fill: "var(--d-l-grey)",
                            }}
                          />
                          <p
                            style={{
                              color: "var(--d-l-grey)",
                              fontSize: "10px",
                            }}
                            className="m-0"
                          >
                            Comment
                          </p>
                        </div>
                      ) : (
                        <div
                          className="d-flex flex-column align-items-center justify-content-end
                        gap-1"
                        >
                          <FaCommentDots
                            size={20}
                            onClick={() => setShowComment((prev) => !prev)}
                            style={{
                              cursor: "pointer",
                              fill: "var(--d-l-grey)",
                            }}
                          />
                          <p
                            style={{
                              color: "var(--d-l-grey)",
                              fontSize: "10px",
                            }}
                            className="m-0"
                          >
                            Comment
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className=" col-4 d-flex align-items-center gap-3 justify-content-end">
                    <span
                      className={`repost_container rounded ${
                        showRepostOptions ? "bg-secondary" : ""
                      }`}
                      ref={repostContainerRef}
                    >
                      {/* <img
                        src={repostIcon}
                        width={12}
                        alt="reshare post"
                        onClick={() => setShowRepostOptions(!showRepostOptions)}
                        style={{ cursor: "pointer" }}
                      /> */}
                      <div
                        className="d-flex flex-column align-items-center justify-content-end
                        gap-1"
                      >
                        <BiRepost
                          size={20}
                          onClick={() =>
                            setShowRepostOptions(!showRepostOptions)
                          }
                          style={{
                            cursor: "pointer",
                            fill: "var(--d-l-grey)",
                            transform: " rotate(90deg)",
                          }}
                        />
                        <p
                          style={{ color: "var(--d-l-grey)", fontSize: "10px" }}
                          className="m-0"
                        >
                          Repost
                        </p>
                      </div>
                      {showRepostOptions && (
                        <span className="repost_options rounded-4 shadow-sm">
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
                    {/* <img src={shareIcon} width={16} alt="share post" /> */}
                    {savedPostId.includes(postId) ? (
                      // <img
                      //   src={savedIcon}
                      //   width={16}
                      //   alt="save post"
                      //   onClick={handleUnsavePost}
                      //   style={{ cursor: "pointer" }}
                      // />
                      <div
                        className="d-flex flex-column align-items-center justify-content-end
                      gap-1"
                      >
                        <FaBookmark
                          size={20}
                          onClick={handleUnsavePost}
                          style={{ cursor: "pointer", fill: "var(--d-l-grey)" }}
                        />
                        <p
                          style={{ color: "var(--d-l-grey)", fontSize: "10px" }}
                          className="m-0"
                        >
                          Save
                        </p>
                      </div>
                    ) : (
                      // <img
                      //   src={saveIcon}
                      //   width={16}
                      //   alt="save post"
                      //   onClick={handleSavePopUp}
                      //   style={{ cursor: "pointer" }}
                      // />
                      <div
                        className="d-flex flex-column align-items-center justify-content-end
                      gap-1"
                      >
                        <FaRegBookmark
                          size={20}
                          onClick={handleSavePopUp}
                          style={{ cursor: "pointer", fill: "var(--d-l-grey)" }}
                        />
                        <p
                          style={{ color: "var(--d-l-grey)", fontSize: "10px" }}
                          className="m-0"
                        >
                          Save
                        </p>
                      </div>
                    )}
                  </div>
                  {showComment && (
                    <div className="border-top mt-1">
                      <div className="comment_container mb-1 border-bottom">
                        <div className="logo">
                          <img
                            src={loggedInUser.profilePicture}
                            alt="Logo"
                            className="border border-light rounded-circle p-1"
                          />
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
                          <button
                            type="button"
                            className="btn btn-investor"
                            onClick={() => sendComment()}
                          >
                            Post
                          </button>
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
                      {comments.map((val) => (
                        <section
                          className="single-comment row m-0 mt-2"
                          key={val.tex}
                        >
                          <div className="img_container col-2 px-2">
                            <Link to={`/user/${val.user._id}`}>
                              <img
                                src={val.user.profilePicture || ""}
                                alt="Connection"
                                className="w-100 rounded-circle border border-light"
                              />
                            </Link>
                          </div>
                          <div className="col-10 p-0 flex-grow-1">
                            <div className="comment-details rounded-3 p-2 p-lg-3 d-flex flex-column">
                              <header className="d-flex justify-content-between align-items-center p-0">
                                <Link
                                  to={`/user/${val.user._id}`}
                                  className="text-decoration-none  fs-sm"
                                >
                                  <h6 className="fs-sm m-0">
                                    {val.user.firstName +
                                      " " +
                                      val.user.lastName}
                                  </h6>
                                </Link>
                                <span className="days_time fs-xs">
                                  <TimeAgo datetime={val.createdAt} locale="" />
                                </span>
                              </header>
                              <span className=" fs-xs m-0">
                                {val.user?.designation}
                                {" , "}{" "}
                                {val.user?.startUp?.company ||
                                  val.user?.investor?.companyName}
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
                                  // <img
                                  //   src={bwFireIcon}
                                  //   width={15}
                                  //   alt="like post"
                                  //   onClick={() =>
                                  //     commentlikeUnlikeHandler(postId, val._id)
                                  //   }
                                  // />
                                  <BsFire
                                    style={{ fill: "var(--d-l-grey)" }}
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
                                  style={{ cursor: "pointer" }}
                                >
                                  {/* <img
                                    src={deleteIcon}
                                    alt="delete icon"
                                    className="deleteIcon py-1"
                                    width={15}
                                  /> */}
                                  <MdDelete
                                    style={{ fill: "var(--d-l-grey)" }}
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
        </div>
        {showSavePopUp && (
          <SavePostPopUP
            postId={postId}
            savedPostStatus={receiveSavedPostStatus}
            onClose={handleCloseSavePopup}
            isInvestor="true"
          />
        )}
        {showUnsaveSuccess && (
          <InvestorAfterSuccessPopUp
            withoutOkButton
            onClose={() => setShowUnsaveSuccess(!showUnsaveSuccess)}
            successText="Post unsaved Successfully"
          />
        )}
        {showSuccess && (
          <InvestorAfterSuccessPopUp
            withoutOkButton
            onClose={() => setShowSuccess(!showSuccess)}
            successText="Post saved Successfully"
          />
        )}
      </div>
      {showImgagePopup && (
        <CustomModal>
          <div className="image-popup-container ">
            <button
              className="btn btn-sm btn-light  top-0 end-0 m-2"
              onClick={() => setShowImgagePopup(false)}
              style={{ width: "30px" }}
            >
              X
            </button>
            <img src={image} className="popup-image" alt="fullscreen preview" />
          </div>
        </CustomModal>
      )}

      <ModalBSContainer showModal={showReportModal} id="reportPostModal">
        <ModalBSHeader
          title="Report Post"
          closeCallback={handleCloseSavePopup}
          className={"d-l-grey"}
        />
        <ModalBSBody className={"d-l-grey"}>
          <h6 className="h6">Select a reason that applies</h6>
          <div
            className="reasons_container"
            style={{ color: "var(--d-l-grey)" }}
          >
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
          <h6
            className="h6 mt-3 text-decoration-underline"
            style={{ color: "var(--d-l-grey)" }}
          >
            Looking for something else?
          </h6>
          <span style={{ color: "var(--d-l-grey)" }}>
            Sometimes our members prefer not to see certain kinds of content,
            rather than reporting.
          </span>
        </ModalBSBody>
        <ModalBSFooter>
          {!filingReport ? (
            <button
              type="submit"
              className="submit_button btn"
              onClick={reportSubmitHandler}
              style={{
                backgroundColor: "#d3f36b",
                color: "black",
              }}
            >
              Submit report
            </button>
          ) : (
            <button
              className="submit_button btn"
              type="button"
              disabled
              style={{
                backgroundColor: "#d3f36b",
                color: "black",
              }}
            >
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
      <Modal show={likeModal} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Reactions</Modal.Title>
        </Modal.Header>
        <div className=" reactions_investor d-flex gap-4 border-bottom border-1 py-2 px-3">
          <h5
            className={`nav-item ${activeHeader === true ? "active" : ""}`}
            onClick={() => setActiveHeader(true)}
          >
            ALL
          </h5>
          <h5
            className={`nav-item ${activeHeader === false ? "active" : ""}`}
            onClick={() => setActiveHeader(false)}
          >
            LIKE
          </h5>
        </div>
        <Modal.Body>
          {likedByUsers?.map((user) => (
            <div className="Reactions d-flex align-items-center p-2 border-bottom border-1">
              <img
                src={user.profilePicture}
                alt="user"
                width={50}
                height={50}
                className="rounded-pill "
              />
              <div className="p-1">
                <h5>
                  {user.firstName} {user.lastName}
                </h5>
                <p className="m-0">{user.designation}</p>
              </div>
            </div>
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
};
export default FeedPostCard;
