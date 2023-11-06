import React, { useEffect, useRef, useState } from "react";
// import ThreeDot from "../../../../Images/VerticalBlackThreeDots.svg";
import { Link } from "react-router-dom";
import IconKebabMenu from "../../SvgIcons/IconKebabMenu";
import IconDeleteFill from "../../SvgIcons/IconDeleteFill";
import { useSelector } from "react-redux";
import { unsavePost } from "../../../../Service/user";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";

const SavedPostSmallCard = ({
  activeHeader,
  key,
  description,
  firstName,
  lastName,
  profilePicture,
  designation,
  image,
  userId,
  postId,
  allPosts,
  setAllPosts,
}) => {
  // console.log("user", firstName, lastName, profilePicture, image);

  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // State for KebabMenu
  const [showKebabMenu, setShowKebabMenu] = useState(false);
  const [loading, setLoading] = useState(false);
  const kebabMenuContainerRef = useRef(null);

  // Handle outside Click
  useEffect(() => {
    const outsideClickHandler = (event) => {
      if (
        kebabMenuContainerRef.current &&
        !kebabMenuContainerRef.current.contains(event.target)
      ) {
        setShowKebabMenu(false);
      }
    };

    document.addEventListener("click", outsideClickHandler);

    return () => {
      document.removeEventListener("click", outsideClickHandler);
    };
  }, []);

  // Handle Remove from saved
  async function handleRemoveFromSaved(e) {
    setLoading(true);

    const requestBody = {
      userId: loggedInUser._id,
      postId: postId,
    };

    try {
      const response = await unsavePost(requestBody);
      console.log(response);

      // Set allPosts
      // setShowKebabMenu(false);

      const updatedSavedPosts = allPosts.filter(({ _id }) => _id !== postId);
      console.log("after remove", updatedSavedPosts);
      setAllPosts(updatedSavedPosts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setShowKebabMenu(false);
      setLoading(false);
    }
  }

  return (
    <>
      {/* <div className="card-viewer"> */}
      <div key={key} className="card border rounded-4 p-3 ">
        {/* Card Header */}
        <div className="d-flex align-items-center justify-content-between mb-2">
          <div className="d-flex">
            <Link
              to={`/user/${userId}`}
              className="img-fluid mr-2"
              style={{
                width: "30px",
                height: "30px",
                borderRadius: "50%",
              }}
            >
              <img
                src={profilePicture}
                alt="Profile"
                className="img-fluid mr-2"
                style={{
                  width: "30px",
                  height: "30px",
                  borderRadius: "50%",
                }}
              />
            </Link>
            <div>
              <span className="card_heading">
                {firstName} {lastName}
              </span>
              <span className="card_heading">{designation}</span>
            </div>
          </div>

          {/* Kebab menu */}
          <div
            className="kebabMenu_container position-relative"
            ref={kebabMenuContainerRef}
          >
            {/* <img
              src={ThreeDot}
              alt="Three Dot"
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
            /> */}
            <button
              className="btn border-0 p-0 m-0"
              onClick={() => setShowKebabMenu(!showKebabMenu)}
            >
              <IconKebabMenu />
            </button>
            {showKebabMenu && (
              <div className="kebab_menu d-flex flex-column gap-3 border rounded p-2">
                <button
                  className="btn border-0 p-0 m-0 d-flex align-items-center gap-2 shadow-none "
                  onClick={handleRemoveFromSaved}
                >
                  {!loading ? (
                    <>
                      <IconDeleteFill
                        height="1rem"
                        width="1rem"
                        color="#8b1f1f"
                      />
                      <span className="" style={{ fontSize: "14px" }}>
                        Remove
                      </span>
                    </>
                  ) : (
                    <>
                      <SpinnerBS spinnerSizeClass="spinner-border-sm" />
                      <span style={{ fontSize: "12px" }}>Removing</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        </div>
        {image ? (
          <img
            src={image}
            alt="Post"
            className="img-fluid mb-2 rounded-4"
            style={{ width: "18rem", maxHeight: "18rem", objectFit: "contain" }}
          />
        ) : (
          ""
        )}
        <p className="savedPost__text mt-2">{description}</p>
      </div>
      {/* </div> */}
    </>
  );
};

export default SavedPostSmallCard;
