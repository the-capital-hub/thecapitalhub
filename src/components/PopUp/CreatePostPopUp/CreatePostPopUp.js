import React, { useEffect, useRef, useState } from "react";
import "./createpostpopup.scss";
import SmileeIcon from "../../../Images/Smilee.svg";
import GallaryIcon from "../../../Images/Gallary.svg";
import ThreeDotsIcon from "../../../Images/ThreeDots.svg";
import CameraIcon from "../../../Images/Camera.svg";
import { useSelector } from "react-redux";
import {
  getSinglePostAPI,
  postUserPost,
  getStartupByFounderId,
} from "../../../Service/user";
import { getBase64 } from "../../../utils/getBase64";
import profilePic from "../../../Images/investorIcon/profilePic.webp";
import FeedPostCard from "../../Investor/Cards/FeedPost/FeedPostCard";
import EasyCrop from "react-easy-crop";
import { BsLink45Deg } from "react-icons/bs";
import IconFile from "../../Investor/SvgIcons/IconFile";
import IconVideo from "../../../Images/post/Video.svg";
import { s3 } from "../../../Service/awsConfig";

const CreatePostPopUp = ({
  setPopupOpen,
  popupOpen,
  setNewPost,
  respostingPostId,
}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [postText, setPostText] = useState("");
  const [category, setCategory] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedDocument, setSelectedDocument] = useState(null);
  const [posting, setPosting] = useState(false);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedImage, setCroppedImage] = useState(null);

  const handleClose = () => setPopupOpen(false);

  const galleryInputRef = useRef(null);
  const documentInputRef = useRef(null);
  const smileeInputRef = useRef(null);
  const cameraInputRef = useRef(null);

  const handleGalleryButtonClick = () => {
    galleryInputRef.current.click();
  };

  const handleDocumentButtonClick = () => {
    documentInputRef.current.click();
  };

  const handleCameraButtonClick = () => {
    cameraInputRef.current.click();
  };

  const handleSmileeButtonClick = () => {
    smileeInputRef.current.click();
  };

  const [cropComplete, setCropComplete] = useState(false);

  const [previewImage, setPreviewImage] = useState("");
  const [previewVideo, setPreviewVideo] = useState("");
  const [previewVideoType, setPreviewVideoType] = useState("");

  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    const objectUrl = URL.createObjectURL(file);

    if (event.target.name === "image" && file.type.includes("image")) {
      setPreviewImage(objectUrl);
      setSelectedImage(file);
      setSelectedVideo(null);
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
      setSelectedImage(null);
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

  // const handleOneLinkClick = async () => {
  //   try {

  //   } catch (error) {
  //     console.log(error);
  //   }
  // }
  const handleOneLinkClick = () => {
    getStartupByFounderId(loggedInUser._id)
      .then(({ data }) => {
        setPostText(
          (prevPostText) =>
            prevPostText + ` https://thecapitalhub.in/onelink/${data.oneLink}/${loggedInUser.oneLinkId}`
        );
      })
      .catch((error) => console.log(error));
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
        Bucket: "capitalhubdocuments",
        Key: `documents/${fileName}`,
        Body: selectedDocument,
      };
      const res = await s3.upload(params).promise();
      postData.append("documentUrl", res.Location);
      postData.append("documentName", selectedDocument.name);
    }

    postUserPost(postData)
      .then((response) => {
        console.log("response from frontend-->", response);
        console.log("Post submitted successfully!");
        setPostText("");
        setSelectedImage(null);
        setSelectedVideo(null);
        setSelectedDocument(null);
        setCroppedImage(null);
        setNewPost(Math.random());
        handleClose();
      })
      .catch((error) => {
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
      {popupOpen && <div className="createpost-background-overlay"></div>}
      <div
        className={`create_post_modal rounded p-2 ${
          popupOpen ? "d-block" : ""
        }`}
        tabIndex="-1"
        role="dialog"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content">
            {/* Create Post modal header */}
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

            {/* Create Post modal body */}
            <div className="modal-body">
              <div className="createpost_text_area">
                <textarea
                  className="p-3"
                  style={{ height: respostingPostId ? "80px" : "200px" }}
                  value={postText}
                  onChange={handleTextareaChange}
                  placeholder="Write a post..."
                  rows={3}
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

                {previewImage && !cropComplete && (
                  <div className="d-flex flex-column justify-content-center gap-2">
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
                    <button
                      className="btn btn-light btn-sm"
                      onClick={() => setCropComplete(true)}
                    >
                      Crop
                    </button>
                  </div>
                )}
                {cropComplete && (
                  <div className="cropped-preview w-100 d-flex justify-content-center">
                    <img
                      src={croppedImage}
                      alt="cropped post"
                      className=""
                      style={{
                        maxHeight: "30vh",
                        width: "auto",
                        objectFit: "contain",
                      }}
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

                {selectedDocument && (
                  <p>Selected File: {selectedDocument.name}</p>
                )}
              </div>
            </div>

            {/* create post modal footer - Icons and Post button */}
            <div className="createpost_modal_footer">
              <div className="modal_footer_container mt-4 mb-3">
                <div className="modal_footer_container">
                  <div className="left_buttons">
                    {/* Image input and Icon */}
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
                      <img src={GallaryIcon} alt="Button 1" />
                    </button>

                    {/* Video input and Icon */}
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
                      <img src={IconVideo} alt="Button 2" />
                    </button>

                    {/* Document input and Icon */}
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

                    {/* <input
                      type="file"
                      name="document"
                      style={{ display: "none" }}
                      ref={smileeInputRef}
                      onChange={handleFileChange}
                    /> */}
                    {/* <button
                      className="white_button"
                      onClick={handleSmileeButtonClick}
                    >
                      <img src={SmileeIcon} alt="Button 3" />
                    </button> */}

                    <button
                      className="white_button"
                      onClick={handleOneLinkClick}
                    >
                      {/* <img src={ThreeDotsIcon} alt="Button 4" /> */}
                      <BsLink45Deg
                        height={"59px"}
                        width={"59px"}
                        size={"20px"}
                      />
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
