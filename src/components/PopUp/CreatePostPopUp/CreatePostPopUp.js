import React, { useEffect, useRef, useState } from "react";
import "./createpostpopup.scss";
import SmileeIcon from "../../../Images/Smilee.svg";
import GallaryIcon from "../../../Images/Gallary.svg";
import ThreeDotsIcon from "../../../Images/ThreeDots.svg";
import CameraIcon from "../../../Images/Camera.svg";
import { useSelector } from "react-redux";
import { getSinglePostAPI, postUserPost } from "../../../Service/user";
import { getBase64 } from "../../../utils/getBase64";
import profilePic from "../../../Images/investorIcon/profilePic.webp";
import FeedPostCard from "../../Investor/Cards/FeedPost/FeedPostCard";

const CreatePostPopUp = ({
  setPopupOpen,
  popupOpen,
  setNewPost,
  respostingPostId,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [postText, setPostText] = useState(""); // Store the textarea data
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image data
  const [selectedVideo, setSelectedVideo] = useState(null); // Store the selected video data
  const [selectedDocument, setSelectedDocument] = useState(null); // Store the selected document data

  const [posting, setPosting] = useState(false);

  const handleClose = () => setPopupOpen(false);

  const galleryInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const smileeInputRef = useRef(null);

  const handleGalleryButtonClick = () => {
    galleryInputRef.current.click();
  };

  const handleCameraButtonClick = () => {
    cameraInputRef.current.click();
  };

  const handleSmileeButtonClick = () => {
    smileeInputRef.current.click();
  };

  const [previewImage, setPreviewImage] = useState("");
  const [previewVideo, setPreviewVideo] = useState("");
  const [previewVideoType, setPreviewVideoType] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const objectUrl = URL.createObjectURL(file);
    if (event.target.name === "image" && file.type.includes("image")) {
      setPreviewImage(objectUrl);
      setSelectedImage(file);
    } else if (event.target.name === "video" && file.type.includes("video")) {
      setPreviewVideoType(file.type);
      setPreviewVideo(objectUrl);
      setSelectedVideo(file);
    } else if (event.target.name === "document") {
      setSelectedDocument(file);
    }
  };
  const handleTextareaChange = (event) => {
    setPostText(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setPosting(true);

    if (!selectedImage && !selectedVideo) {
      if (!respostingPostId && !postText) {
        return setPosting(false);
      }
    }
    const postData = new FormData();
    if (respostingPostId) {
      postData.append("resharedPostId", respostingPostId);
    }
    postData.append("description", postText);
    postData.append("category", category);

    // Append the image, video, and document files if they are selected
    if (selectedImage) {
      const image = await getBase64(selectedImage);
      postData.append("image", image);
    }
    if (selectedVideo) {
      const video = await getBase64(selectedVideo);
      postData.append("video", video);
    }
    // if (selectedDocument) {
    //   postData.append("document", selectedDocument);
    // }

    // Call the postUserPost function to make the POST request to the server
    postUserPost(postData)
      .then((response) => {
        console.log("response from frontend-->", response);
        // Handle the response if needed
        console.log("Post submitted successfully!");
        // Reset the state to clear the inputs
        setPostText("");
        setSelectedImage(null);
        setSelectedVideo(null);
        setSelectedDocument(null);
        setNewPost(Math.random());
        // Close the popup after successful submission
        handleClose();
      })
      .catch((error) => {
        // Handle error if needed
        console.error("Error submitting post:", error);
      })
      .finally(() => setPosting(false));
  };

  const [repostingPostData, setRepostingPostData] = useState(null);
  const [loadingRepostData, setLoadingRepostData] = useState(false);

  useEffect(() => {
    if (respostingPostId) {
      setLoadingRepostData(true);
      getSinglePostAPI(respostingPostId)
        .then(({ data }) => {
          setRepostingPostData(data);
          setLoadingRepostData(false);
        })
        .catch(() => handleClose());
    }
  }, []);

  return (
    <>
      {popupOpen && <div className="background-overlay"></div>}
      <div
        className={`modal ${popupOpen ? "d-block" : ""}`}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            <div className="createpost_modal-header">
              <div className="createpostpopup">
                <div className="ceatepost_img_name">
                  <img
                    src={loggedInUser.profilePicture}
                    width={80}
                    className="rounded-circle"
                    alt="profile pic"
                  />
                  <span>
                    <h2>
                      {loggedInUser?.firstName} {loggedInUser.lastName}
                    </h2>
                    <h6>Public</h6>
                  </span>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="close d-flex justify-content-end"
                  onClick={handleClose}
                  style={{ background: "transparent", border: "none" }}
                >
                  <h3 aria-hidden="true" className="m-3">
                    &times;
                  </h3>
                </button>
              </div>
            </div>
            <div className="modal-body">
              <div className="createpost_text_area">
                <textarea
                  className="p-3"
                  style={{ height: respostingPostId ? "80px" : "200px" }}
                  value={postText}
                  onChange={handleTextareaChange}
                  placeholder="Write a post..."
                />
                {/* <select
                  name="category"
                  className="w-100 my-2 p-1"
                  onChange={({ target: { value } }) => setCategory(value)}
                >
                  <option value="">Choose a topic</option>
                  <option value="startup">Startup</option>
                  <option value="investor">Investor</option>
                  <option value="learning">Learnings</option>
                  <option value="fund">Fund</option>
                  <option value="other">Others</option>
                </select> */}

                {respostingPostId &&
                  (loadingRepostData ? (
                    <div class="d-flex justify-content-center my-4">
                      <h6 className="h6 me-4">Loading post...</h6>
                      <div class="spinner-border" role="status">
                        <span class="visually-hidden">Loading...</span>
                      </div>
                    </div>
                  ) : (
                    <FeedPostCard
                      repostPreview
                      userId={repostingPostData?.user?._id}
                      postId={repostingPostData?._id}
                      designation={repostingPostData?.user?.designation}
                      profilePicture={repostingPostData?.user?.profilePicture}
                      description={repostingPostData?.description}
                      firstName={repostingPostData?.user?.firstName}
                      lastName={repostingPostData?.user?.lastName}
                      video={repostingPostData?.video}
                      image={repostingPostData?.image}
                      createdAt={repostingPostData?.createdAt}
                      likes={repostingPostData?.likes}
                    />
                  ))}

                {previewImage && (
                  <img
                    src={previewImage}
                    width={"50%"}
                    alt="preview of image"
                  />
                )}

                {previewVideo && (
                  <video controls width={"100%"}>
                    <source src={previewVideo} type={previewVideoType} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
            <div className="createpost_modal_footer">
              <div className="modal_footer_container mt-4 mb-3">
                <div className="modal_footer_container">
                  <div className="left_buttons">
                    <input
                      type="file"
                      name="image"
                      style={{ display: "none" }}
                      ref={galleryInputRef}
                      onChange={handleFileChange}
                    />
                    <button
                      className="white_button"
                      onClick={handleGalleryButtonClick}
                    >
                      <img src={GallaryIcon} alt="Button 1" />
                    </button>

                    <input
                      type="file"
                      name="video"
                      style={{ display: "none" }}
                      ref={cameraInputRef}
                      onChange={handleFileChange}
                    />
                    <button
                      className="white_button"
                      onClick={handleCameraButtonClick}
                    >
                      <img src={CameraIcon} alt="Button 2" />
                    </button>

                    <input
                      type="file"
                      name="document"
                      style={{ display: "none" }}
                      ref={smileeInputRef}
                      onChange={handleFileChange}
                    />
                    {/* <button
                      className="white_button"
                      onClick={handleSmileeButtonClick}
                    >
                      <img src={SmileeIcon} alt="Button 3" />
                    </button> */}

                    <button className="white_button">
                      <img src={ThreeDotsIcon} alt="Button 4" />
                    </button>
                  </div>
                  <div className="post_button_container">
                    {posting ? (
                      <button className="post_button" disabled>
                        Posting...
                      </button>
                    ) : (
                      <button className="post_button" onClick={handleSubmit}>
                        Post
                      </button>
                    )}
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
