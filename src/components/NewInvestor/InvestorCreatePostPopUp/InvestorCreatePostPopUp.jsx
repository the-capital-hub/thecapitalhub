import React, { useEffect, useRef, useState } from "react";
import "./investorCreatePostPopUp.scss";
import SmileeIcon from "../../../Images/Smilee.svg";
import GallaryIcon from "../../../Images/Gallary.svg";
import ThreeDotsIcon from "../../../Images/ThreeDots.svg";
import CameraIcon from "../../../Images/Camera.svg";
import IconVideo from "../../../Images/post/Video.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  getSinglePostAPI,
  postUserPost,
  getInvestorById,
  updateUserById,
  addNotificationAPI
} from "../../../Service/user";
import { getBase64 } from "../../../utils/getBase64";
import profilePic from "../../../Images/investorIcon/profilePic.webp";
import FeedPostCard from "../../Investor/Cards/FeedPost/FeedPostCard";
import EasyCrop from "react-easy-crop";
import IconFile from "../../Investor/SvgIcons/IconFile";
import { BsLink45Deg } from "react-icons/bs";
import { s3 } from "../../../Service/awsConfig";
import { toggleinvestorCreatePostModal } from "../../../Store/features/design/designSlice";
import { CiImageOn, CiVideoOn } from "react-icons/ci";
import toast from "react-hot-toast";
import { loginSuccess } from "../../../Store/features/user/userSlice";
import AchievementToast from "../../Toasts/AchievementToast/AchievementToast";
import { achievementTypes } from "../../Toasts/AchievementToast/types";

const CreatePostPopUp = ({
  setPopupOpen,
  popupOpen,
  setNewPost,
  respostingPostId,
  appendDataToAllPosts,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const dispatch = useDispatch();

  const [postText, setPostText] = useState(""); // Store the textarea data
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null); // Store the selected image data
  const [selectedVideo, setSelectedVideo] = useState(null); // Store the selected video data
  const [selectedDocument, setSelectedDocument] = useState(null); // Store the selected document data
  const [posting, setPosting] = useState(false);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleClose = () => {
    setPopupOpen(false);
    dispatch(toggleinvestorCreatePostModal());
  }

  const galleryInputRef = useRef(null);
  const cameraInputRef = useRef(null);
  const smileeInputRef = useRef(null);
  const documentInputRef = useRef(null);

  const handleGalleryButtonClick = () => {
    galleryInputRef.current.click();
  };

  const handleCameraButtonClick = () => {
    cameraInputRef.current.click();
  };

  const handleDocumentButtonClick = () => {
    documentInputRef.current.click();
  };

  const handleSmileeButtonClick = () => {
    smileeInputRef.current.click();
  };

  const handleOneLinkClick = () => {
    getInvestorById(loggedInUser.investor)
      .then(({ data }) => {
        setPostText(
          (prevPostText) =>
            prevPostText +
            ` https://thecapitalhub.in/onelink/${data.oneLink}/${loggedInUser.oneLinkId}`
        );
      })
      .catch((error) => console.log(error));
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
      setCroppedImage(null);
      if (selectedVideo || selectedDocument) {
        setPreviewVideo("");
        setSelectedVideo(null);
        setPreviewVideoType("");
        setSelectedDocument(null);
      }
    } else if (event.target.name === "video" && file.type.includes("video")) {
      setPreviewVideoType(file.type);
      setPreviewVideo(objectUrl);
      setSelectedVideo(file);
      if (selectedImage || selectedDocument) {
        setPreviewImage("");
        setSelectedImage(null);
        setSelectedDocument(null);
      }
    } else if (event.target.name === "document") {
      setSelectedDocument(file);
      if (selectedImage || selectedVideo) {
        setPreviewImage("");
        setSelectedImage(null);
        setPreviewVideo("");
        setSelectedVideo(null);
        setPreviewVideoType("");
      }
    }
  };
  const handleTextareaChange = (event) => {
    setPostText(event.target.value);
  };

  const getCroppedImg = async (imageSrc, crop) => {
    const image = new Image();
    image.src = imageSrc;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = crop.width;
    canvas.height = crop.height;
    ctx.drawImage(
      image,
      crop.x,
      crop.y,
      crop.width,
      crop.height,
      0,
      0,
      crop.width,
      crop.height
    );

    return new Promise((resolve, reject) => {
      canvas.toBlob(
        (blob) => {
          if (!blob) {
            reject(new Error("Failed to crop image"));
            return;
          }

          const reader = new FileReader();
          reader.readAsDataURL(blob);
          reader.onloadend = () => {
            resolve(reader.result);
          };
        },
        "image/jpeg",
        1
      );
    });
  };

  const onCropComplete = async (croppedArea, croppedAreaPixels) => {
    const croppedImg = await getCroppedImg(previewImage, croppedAreaPixels);
    setCroppedImage(croppedImg);
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
      postData.append("image", croppedImage);
    }
    if (selectedVideo) {
      const video = await getBase64(selectedVideo);
      postData.append("video", video);
    }
    if (selectedDocument) {
      const timestamp = Date.now();
      const fileName = `${timestamp}_${selectedDocument.name}`;
      const params = {
        Bucket: "thecapitalhubdocuments",
        Key: `documents/${fileName}`,
        Body: selectedDocument,
      };
      const res = await s3.upload(params).promise();
      postData.append("documentUrl", res.Location);
      postData.append("documentName", selectedDocument.name);
    }

    // Call the postUserPost function to make the POST request to the server
    postUserPost(postData)
      .then((response) => {
        console.log(response.data);
        appendDataToAllPosts(response.data);
        setPostText("");
        setSelectedImage(null);
        setSelectedVideo(null);
        setSelectedDocument(null);
        setCroppedImage(null);
        setNewPost(Math.random());
        // Close the popup after successful submission
        handleClose();
        dispatch(toggleinvestorCreatePostModal());


        if (!loggedInUser.achievements.includes("6564684649186bca517cd0c9")) {
          const achievements = [...loggedInUser.achievements];
          achievements.push("6564684649186bca517cd0c9");
          const updatedData = { achievements };
          updateUserById(loggedInUser._id, updatedData)
            .then(({ data }) => {
              dispatch(loginSuccess(data.data));
              const notificationBody = {
                recipient: loggedInUser._id,
                type: "achievementCompleted",
                achievementId: "6564684649186bca517cd0c9",
              };
              addNotificationAPI(notificationBody)
                .then((data) => console.log("Added"))
                .catch((error) => console.error(error.message));

              toast.custom((t) => (
                <AchievementToast type={achievementTypes.voyager} />
              ));
            })
            .catch((error) => {
              console.error("Error updating user:", error);
            });
        }
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
        className={`investor_create_post_modal modal ${popupOpen ? "d-block" : ""
          }`}
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
                    width={50}
                    height={50}
                    style={{ objectFit: "cover" }}
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
                  <div className="image-cropper">
                    <EasyCrop
                      image={previewImage}
                      crop={crop}
                      zoom={zoom}
                      onCropChange={setCrop}
                      onZoomChange={setZoom}
                      onCropComplete={onCropComplete}
                    />
                  </div>
                )}

                {previewVideo && (
                  <video
                    key={selectedVideo ? selectedVideo.name : ""}
                    controls
                    width={"100%"}
                  >
                    <source src={previewVideo} type={previewVideoType} />
                    Your browser does not support the video tag.
                  </video>
                )}
              </div>
            </div>
            <div className="createpost_modal_footer">
              <div className="modal_footer_container mt-4 mb-3">
                <div className="left_buttons">
                  <input
                    type="file"
                    name="image"
                    style={{ display: "none" }}
                    ref={galleryInputRef}
                    onChange={handleFileChange}
                    accept="image/*"
                  />
                  <button
                    className="white_button"
                    onClick={handleGalleryButtonClick}
                  >
                    {/* <img src={GallaryIcon} alt="Button 1" /> */}
                    <CiImageOn size={20} />

                  </button>

                  <input
                    type="file"
                    name="video"
                    style={{ display: "none" }}
                    ref={cameraInputRef}
                    onChange={handleFileChange}
                    accept="video/*"
                  />
                  <button
                    className="white_button"
                    onClick={handleCameraButtonClick}
                  >
                    {/* <img src={IconVideo} alt="Button 2" /> */}
                    <CiVideoOn size={20} />

                  </button>

                  <input
                    type="file"
                    name="document"
                    style={{ display: "none" }}
                    ref={documentInputRef}
                    onChange={handleFileChange}
                  />
                  <button
                    className="white_button"
                    onClick={handleDocumentButtonClick}
                  >
                    {/* <img src={CameraIcon} alt="Button 2" /> */}
                    <IconFile width="16px" height="16px" />
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

                  {/* <button className="white_button">
                      <img src={ThreeDotsIcon} alt="Button 4" />
                    </button> */}
                  <button className="white_button" onClick={handleOneLinkClick}>
                    {/* <img src={ThreeDotsIcon} alt="Button 4" /> */}
                    <BsLink45Deg height={"59px"} width={"59px"} size={"20px"} />
                  </button>
                </div>
                <div className="post_button_container">
                  {posting ? (
                    <button className="investor-post_button" disabled>
                      Posting...
                    </button>
                  ) : (
                    <button
                      className="investor-post_button"
                      onClick={handleSubmit}
                    >
                      Post
                    </button>
                  )}
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
