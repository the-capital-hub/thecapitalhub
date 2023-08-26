import React from "react";
import LocationIcon from "../../../../Images/investorIcon/octicon_location-16.svg";
import EmailIcon from "../../../../Images/investorIcon/message.svg";
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

const   CompanyDetailsCard = ({ userDetails, page }) => {
  const [isDescriptionEditable, setIsDescriptionEditable] = useState(false);
  const [descriptionContent, setDescriptionContent] = useState("");
  const [onePager, setOnePager] = useState([]);
  useEffect(() => {
    getStartupByFounderId(userDetails._id)
      .then(({ data }) => {
        setOnePager(data);
        setDescriptionContent(data.description);
      })
      .catch(() => setOnePager([]));
  }, [userDetails]);
  const submitDescriptionHandler = async () => {
    const updatedData = {
      founderId: userDetails._id,
      description: descriptionContent,
    };
    await postStartUpData(updatedData);
    setIsDescriptionEditable(!isDescriptionEditable);
  };

  return (
    <>
      <div className="row company_details_container">
        <div className="col-12 mt-2">
          <div className=" company_details box">
            <div className="row">
              <div className="col-12">
                <div className="image_name_section mt-2 ">
                  <span className="company_details_logo_container">
                    <img src={onePager.logo || LogoX} alt="profileimage" />
                  </span>
                  <div className="left_profile_text flex_content">
                    <h2 className="typography m-2">
                      {onePager.company || `The Capital Hub`}
                    </h2>
                    <span className="small_typo m-2">
                      {/* {onePager.description} */}
                    </span>
                    <span className="small_typo location_icon">
                      <img src={LocationIcon} alt="location" />
                      {onePager.location} <img src={EmailIcon} alt="location" />
                      {userDetails?.email}
                      {""}
                    </span>
                    <div className="small_typo social_icon mt-3">
                      <img src={WebIcon} alt="social_img" />
                      <img src={LinkedinIcon} alt="social_img" />
                      <img src={TweeterIcon} alt="social_img" />
                      <img src={IntagramIcon} alt="social_img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="company_details mt-4">
                {page === "edit" ? (
                  <>
                    <span className="ms-auto">
                      <div className="edit-container">
                        <button
                          className="edit-btn"
                          onClick={() =>
                            setIsDescriptionEditable(!isDescriptionEditable)
                          }
                        >
                          {isDescriptionEditable ? "Cancel" : "Edit"}
                          <CiEdit />
                        </button>
                        {isDescriptionEditable && (
                          <button
                            className="edit-btn ms-2"
                            onClick={() => submitDescriptionHandler()}
                          >
                            Save <CiSaveUp2 />
                          </button>
                        )}
                      </div>
                    </span>
                    <p className="para_text">
                      {/* As the Founder at The Capital HUB, my vision is all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture. */}
                      {/* {onePager.description} */}
                      {isDescriptionEditable ? (
                        <textarea
                          className="description"
                          value={descriptionContent}
                          name="bio"
                          onChange={(e) =>
                            setDescriptionContent(e.target.value)
                          }
                        />
                      ) : (
                        <p className="small_typo">{descriptionContent}</p>
                      )}
                    </p>
                  </>
                ) : (
                  <p className="small_typo">{descriptionContent}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CompanyDetailsCard;
