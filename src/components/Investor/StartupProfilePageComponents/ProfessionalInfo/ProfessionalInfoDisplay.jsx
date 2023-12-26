import React, { useEffect, useState } from "react";
import DefaultAvatar from "../../../../Images/Chat/default-user-avatar.webp";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import IconCloudUpload from "../../SvgIcons/IconCloudUpload";
import { useSelector } from "react-redux";
import {
  selectCompanyFounderId,
  selectLoggedInUserId,
} from "../../../../Store/features/user/userSlice";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";
import { educationOptions } from "../../../../constants/Startups/ExplorePage";
import EasyCrop from "react-easy-crop";

const EXPERIENCE_OPTIONS = [
  "0",
  "1 year",
  "2 years",
  "3 years",
  "4 years",
  "5 years",
  "6 years",
  "7 years",
  "8 years",
  "9 years",
  "10 years",
  "11 years",
  "12 years",
  "13 years",
  "14 years",
  "15 years",
  "16 years",
  "17 years",
  "18 years",
  "19 years",
  "20 years",
];

export default function ProfessionalInfoDisplay({
  professionalData,
  theme,
  isEditing,
  setIsEditing,
  handleSubmit,
  selectedFile,
  handleTextChange,
  handleFileChange,
  canEdit = true,
  loading,
  previewImage,
  cropComplete,
  setCropComplete,
  setCroppedImage,
  croppedImage,
}) {
  const companyFounderId = useSelector(selectCompanyFounderId);
  const loggedinUserId = useSelector(selectLoggedInUserId);

  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

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

  return (
    <>
      {/* header */}
      <header className="professional_info_display p-0 pb-4 border-bottom d-flex flex-column gap-3 flex-md-row align-items-center justify-content-between">
        {/* profile picture and name */}
        <div className="d-flex gap-4">
          <img
            src={professionalData.profilePicture || DefaultAvatar}
            alt={professionalData.fullName}
            style={{ width: "90px", height: "90px", objectFit: "cover" }}
            className="rounded-circle"
          />
          <div className="d-flex flex-column justify-content-center gap-1 ">
            <h5 className="m-0 fw-semibold">{professionalData.fullName}</h5>
            <p className="m-0">{professionalData.designation}</p>
            <p className="m-0">{professionalData.location}</p>
          </div>
        </div>

        {/* Edit button */}
        {canEdit && (
          <span className="edit_btn d-flex align-self-end align-md-self-start ">
            <span className=" ms-auto d-flex flex-row gap-2">
              <button
                className="btn d-flex align-items-center gap-1"
                onClick={() => setIsEditing(!isEditing)}
              >
                {isEditing ? "Cancel" : "Edit"}
                <CiEdit />
              </button>
              {isEditing && (
                <button
                  className="btn ms-2 d-flex align-items-center gap-1"
                  onClick={handleSubmit}
                >
                  {loading ? (
                    <SpinnerBS spinnerSizeClass="spinner-border-sm" />
                  ) : (
                    <>
                      Save <CiSaveUp2 />
                    </>
                  )}
                </button>
              )}
            </span>
          </span>
        )}
        {/* Edit button end */}
      </header>

      {/* Info text */}
      {!isEditing && (
        <div className="info_text d-flex flex-column gap-3">
          {/* Company */}
          <div className="text_field d-flex gap-3 gap-lg-3 align-items-center">
            <h6 className="m-0">Company</h6>
            <p className="m-0">{professionalData.company}</p>
          </div>

          {/* Designation */}
          <div className="text_field d-flex gap-3 gap-lg-3 align-items-center">
            <h6 className="m-0">Designation</h6>
            <p className="m-0">{professionalData.designation}</p>
          </div>

          {/* Education */}
          <div className="text_field d-flex gap-3 gap-lg-3 align-items-center">
            <h6 className="m-0">Education</h6>
            <p className="m-0">{professionalData.education}</p>
          </div>

          {/* Experience */}
          <div className="text_field d-flex gap-3 gap-lg-3 align-items-start">
            <h6 className="m-0">Experience</h6>
            <p className="m-0">{professionalData.experience}</p>
          </div>
        </div>
      )}

      {/* Edit form */}
      {isEditing && (
        <form className="">
          {/* profilePicture*/}
          <fieldset className={` ${theme} `}>
            <legend className="px-2">Profile Picture</legend>
            <input
              type="file"
              accept="image/*"
              className="visually-hidden"
              name="profilePicture"
              id="profilePicture"
              //   value={professionalData.company}
              onChange={handleFileChange}
            />
            <div className="professional_form_input d-flex align-items-center gap-4">
              <label htmlFor="profilePicture" style={{ cursor: "pointer" }}>
                <IconCloudUpload
                  color={theme === "startup" ? "#fd5901" : "#b2cc5d"}
                  height="1.75rem"
                  width="1.75rem"
                />
              </label>
              <p className="m-0 fs-6 fw-light">{selectedFile?.name}</p>
            </div>
          </fieldset>

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

          {/* Company */}
          {companyFounderId === loggedinUserId && isEditing && (
            <fieldset className={` ${theme} `}>
              <legend className="px-2">Company</legend>
              <input
                type="text"
                className="professional_form_input"
                name="company"
                value={professionalData.company}
                onChange={handleTextChange}
              />
            </fieldset>
          )}

          {/* Designation */}
          <fieldset className={` ${theme} `}>
            <legend className="px-2">Designation</legend>
            <input
              type="text"
              className="professional_form_input"
              name="designation"
              value={professionalData.designation}
              onChange={handleTextChange}
            />
          </fieldset>

          {/* Education */}
          <fieldset className={` ${theme} `}>
            <legend className="px-2">Education</legend>
            {/* <input
              type="text"
              className="professional_form_input"
              name="education"
              value={professionalData.education}
              onChange={handleTextChange}
            /> */}
            <select
              name="education"
              id="userEducation"
              onChange={handleTextChange}
              value={professionalData.education}
              className="professional_form_input"
            >
              <option value="" hidden={Boolean(professionalData.education)}>
                Education
              </option>
              {educationOptions.map((option, index) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </fieldset>

          {/* Experience */}
          <fieldset className={` ${theme} `}>
            <legend className="px-2">Experience</legend>
            {/* <textarea
              type="text"
              className="professional_form_input"
              name="experience"
              value={professionalData.experience}
              onChange={handleTextChange}
              rows={5}
            /> */}
            <select
              name="experience"
              id="userExperience"
              onChange={handleTextChange}
              value={professionalData.experience}
              className="professional_form_input"
            >
              <option value="" hidden={Boolean(professionalData.experience)}>
                Experience
              </option>
              {EXPERIENCE_OPTIONS.map((option, index) => {
                return (
                  <option value={option} key={option}>
                    {option}
                  </option>
                );
              })}
            </select>
          </fieldset>
        </form>
      )}
    </>
  );
}
