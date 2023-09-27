import React from "react";
import ThreeDot from "../../../../Images/VerticalBlackThreeDots.svg";
import { Link } from "react-router-dom";
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
}) => {
  console.log("user", firstName, lastName, profilePicture, image);
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
                alt="Card Image"
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
          <div>
            <img
              src={ThreeDot}
              alt="Three Dot"
              className="img-fluid"
              style={{ width: "20px", height: "20px" }}
            />
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
