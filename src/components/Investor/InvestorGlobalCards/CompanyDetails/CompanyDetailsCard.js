import React from "react";
// import LocationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
// import EmailIcon from "../../../../Images/investorIcon/email.svg";
import TweeterIcon from "../../../../Images/investorIcon/Tweeter.svg";
import IntagramIcon from "../../../../Images/investorIcon/Instagram.svg";
import LinkedinIcon from "../../../../Images/investorIcon/Linkedin.svg";
import WebIcon from "../../../../Images/investorIcon/WebIcon.svg";
import LogoX from "../../../../Images/investorIcon/LogoX.png";
import "./companyDetails.scss";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import {
  getStartupByFounderId,
  postStartUpData,
} from "../../../../Service/user";
import { useState, useEffect } from "react";
import { HiOutlineMail } from "react-icons/hi";
import IconLocation from "../../SvgIcons/IconLocation";

const CompanyDetailsCard = ({
  userDetails,
  page,
  className,
  isOnelink = false,
}) => {
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);
  const [descriptionContent, setDescriptionContent] = useState("");
  const [onePager, setOnePager] = useState([]);
  const [socialLinks, setSocialLinks] = useState({
    website: "",
    linkedin: "",
    twitter: "",
    instagram: "",
  });
  const [locationData, setLocationData] = useState("");

  // Fetch user details
  useEffect(() => {
    getStartupByFounderId(userDetails._id)
      .then(({ data }) => {
        setOnePager(data);
        setDescriptionContent(data.description);
        setSocialLinks(data.socialLinks);
        setLocationData(data.location);
      })
      .catch(() => {
        setOnePager([]);
        setDescriptionContent("");
        setSocialLinks("");
        setLocationData("");
      });
  }, [userDetails]);

  // Submit Changes
  const submitDescriptionHandler = async () => {
    const updatedData = {
      founderId: userDetails._id,
      description: descriptionContent,
      socialLinks,
      location: locationData,
    };
    await postStartUpData(updatedData);
    setIsDescriptionEditable(!isDescriptionEditable);
  };

  return (
    <>
      <div className={`${className} company_details_container `}>
        <div
          className={`px-2 px-md-4 py-4 company_details box ${
            isOnelink ? "border" : ""
          } `}
        >
          {/* Company details header */}
          <div className="image_name_section d-flex flex-column flex-md-row align-items-start align-items-md-center px-2 px-md-0">
            <span className="company_details_logo_container d-none d-md-block">
              <img src={onePager.logo || LogoX} alt="profileimage" />
            </span>

            <div className="d-flex  justify-content-between w-100 d-md-none d-flex">
              <span className="company_details_logo_container d-md-none d-flex">
                <img
                  src={onePager.logo || userDetails?.investor?.logo || LogoX}
                  alt="profileimage  d-md-none d-flex"
                />
              </span>

              {page === "edit" ? (
                <span className="align-self-start ms-auto d-md-none d-block pt-2">
                  <div className="d-flex align-items-center gap-2 flex-wrap">
                    <button
                      className="edit-btn btn "
                      onClick={() =>
                        setIsDescriptionEditable(!isDescriptionEditable)
                      }
                    >
                      {isDescriptionEditable ? "Cancel" : "Edit"}
                      <CiEdit />
                    </button>
                    {isDescriptionEditable && (
                      <button
                        className="edit-btn btn ms-2"
                        onClick={() => submitDescriptionHandler()}
                      >
                        Save <CiSaveUp2 />
                      </button>
                    )}
                  </div>
                </span>
              ) : (
                ""
              )}
            </div>

            <div className="left_profile_text flex_content">
              <h2 className="typography m-2 ms-0">
                {onePager.company ||
                  userDetails?.investor?.companyName ||
                  "No company found"}
              </h2>
              {/* <span className="small_typo m-2">
                      {onePager.description}
                    </span> */}
              <span className="small_typo location_icon d-flex flex-column flex-lg-row gap-2">
                <span className="d-l-grey">
                  <IconLocation className="me-1" color="var(--d-l-grey)" />
                  {onePager.location || userDetails?.investor?.location}
                </span>
                <span className="d-l-grey">
                  <HiOutlineMail
                    size={28}
                    color="var(--d-l-grey)"
                    className="me-1"
                  />
                  {userDetails?.email}
                </span>
              </span>
              <div className="small_typo social_icon mt-3">
                <a
                  href={
                    socialLinks?.website ||
                    userDetails?.investor?.socialLinks?.website
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={WebIcon}
                    alt="Website"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
                <a
                  href={
                    socialLinks?.linkedin ||
                    userDetails?.investor?.socialLinks?.linkedin
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={LinkedinIcon}
                    alt="LinkedIn"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
                <a
                  href={
                    socialLinks?.twitter ||
                    userDetails?.investor?.socialLinks?.twitter
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={TweeterIcon}
                    alt="Twitter"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
                <a
                  href={
                    socialLinks?.instagram ||
                    userDetails?.investor?.socialLinks?.instagram
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={IntagramIcon}
                    alt="Instagram"
                    style={{ width: "25px", height: "25px" }}
                  />
                </a>
              </div>
            </div>

            {/* Edit button */}
            {page === "edit" ? (
              <span className="align-self-start ms-auto d-none d-md-block">
                <div className="d-flex align-items-center gap-2">
                  <button
                    className="edit-btn btn"
                    onClick={() =>
                      setIsDescriptionEditable(!isDescriptionEditable)
                    }
                  >
                    {isDescriptionEditable ? "Cancel" : "Edit"}
                    <CiEdit />
                  </button>
                  {isDescriptionEditable && (
                    <button
                      className="edit-btn btn ms-2"
                      onClick={() => submitDescriptionHandler()}
                    >
                      Save <CiSaveUp2 />
                    </button>
                  )}
                </div>
              </span>
            ) : (
              ""
            )}
          </div>

          {/* Company details text */}

          <div className="company_details px-2 px-md-0 mt-4">
            {page === "edit" ? (
              <>
                {/* This is the previous location of the edit button */}

                {/* Para text */}
                <div className="para_text">
                  {/* As the Founder at The Capital HUB, my vision is all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture. */}
                  {/* {onePager.description} */}
                  {isDescriptionEditable ? (
                    <>
                      {/* Edit description */}
                      <div className="input-group my-2">
                        <label htmlFor="bio" className="align-self-start">
                          Description:
                        </label>
                        <textarea
                          className="description flex-grow-1 rounded-2"
                          value={descriptionContent}
                          id="bio"
                          name="bio"
                          rows={6}
                          onChange={(e) =>
                            setDescriptionContent(e.target.value)
                          }
                        />
                      </div>

                      {/* Edit Location */}
                      <div className="input-group mb-2">
                        <label htmlFor="location">Location:</label>
                        <input
                          type="text"
                          id="location"
                          name="location"
                          value={locationData}
                          onChange={(e) => setLocationData(e.target.value)}
                          className="rounded-2"
                        />
                      </div>

                      {/* Edit social links */}
                      <div className="social-inputs">
                        <div className="input-group">
                          <label>Website:</label>
                          <input
                            type="text"
                            value={socialLinks?.website}
                            onChange={(e) =>
                              setSocialLinks({
                                ...socialLinks,
                                website: e.target.value,
                              })
                            }
                            className="rounded-2"
                          />
                        </div>
                        <div className="input-group">
                          <label>LinkedIn:</label>
                          <input
                            type="text"
                            value={socialLinks?.linkedin}
                            onChange={(e) =>
                              setSocialLinks({
                                ...socialLinks,
                                linkedin: e.target.value,
                              })
                            }
                            className="rounded-2"
                          />
                        </div>
                        <div className="input-group">
                          <label>Twitter:</label>
                          <input
                            type="text"
                            value={socialLinks?.twitter}
                            onChange={(e) =>
                              setSocialLinks({
                                ...socialLinks,
                                twitter: e.target.value,
                              })
                            }
                            className="rounded-2"
                          />
                        </div>
                        <div className="input-group">
                          <label>Instagram:</label>
                          <input
                            type="text"
                            value={socialLinks?.instagram}
                            onChange={(e) =>
                              setSocialLinks({
                                ...socialLinks,
                                instagram: e.target.value,
                              })
                            }
                            className="rounded-2"
                          />
                        </div>
                      </div>
                    </>
                  ) : (
                    <p className="small_typo">{descriptionContent}</p>
                  )}
                </div>
              </>
            ) : (
              <p className="small_typo">
                {descriptionContent ||
                  userDetails?.startUp?.description ||
                  userDetails?.investor?.description ||
                  "No description"}
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailsCard;
