import React, { useState, useEffect } from "react";
import { CiEdit, CiSaveUp2 } from "react-icons/ci";
import "./ProfessionalInfo.scss";
import DefaultAvatar from "../../../../Images/Chat/default-user-avatar.webp";
import { useDispatch, useSelector } from "react-redux";
import { getBase64 } from "../../../../utils/getBase64";
import {
  getInvestorById,
  getStartupByFounderId,
  postInvestorData,
  postStartUpData,
  updateUserAPI,
} from "../../../../Service/user";
import { loginSuccess } from "../../../../Store/features/user/userSlice";
import IconCloudUpload from "../../SvgIcons/IconCloudUpload";

export default function ProfessionalInfo({ theme, companyFounderId }) {
  // Fetch Global State
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const isInvestor = loggedInUser.isInvestor === "true" ? true : false;
  const dispatch = useDispatch();
  const [company, setCompany] = useState([]);

  // State for Professional Data
  const [professionalData, setProfessionalData] = useState({
    designation: loggedInUser?.designation || "",
    education: loggedInUser?.education || "",
    experience: loggedInUser?.experience || "",
    profilePicture: loggedInUser.profilePicture || "",
    fullName: loggedInUser?.firstName + " " + loggedInUser?.lastName || "",
    company: "",
    location: loggedInUser?.location || "Bangalore, India",
  });

  // State for isEditing
  const [isEditing, setIsEditing] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  // Fetch professional data
  console.log(loggedInUser)
  useEffect(() => {
    if (isInvestor) {
      getInvestorById(loggedInUser?.investor)
        .then(({ data }) => {
          console.log("investorById", data);
          setProfessionalData({
            ...professionalData,
            company: data.companyName,
          });
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      getStartupByFounderId(loggedInUser._id)
        .then(({ data }) => {
          console.log(data);
          setCompany(data);
          setProfessionalData({
            ...professionalData,
            company: data.company,
          });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  // Handle Text Change
  function handleTextChange(e) {
    let { name, value } = e.target;
    setProfessionalData((prev) => {
      return { ...prev, [name]: value };
    });
  }

  // Handle File change
  function handleFileChange(e) {
    const file = e.target.files[0];
    setSelectedFile(file);
  }

  // Handle Submit
  async function handleSubmit(e) {
    e.preventDefault();

    let editedData = {
      designation: professionalData.designation,
      education: professionalData.education,
      experience: professionalData.experience,
    };

    let editedCompanyName = {
      founderId: loggedInUser._id,
      company: professionalData.company,
    };
console.log(professionalData.company)
    try {
      if (selectedFile) {
        const profilePicture = await getBase64(selectedFile);
        editedData = { ...editedData, profilePicture: profilePicture };
      }
      //   console.log("from Submit", editedData, editedCompanyName);
      const {
        data: { data },
      } = await updateUserAPI(editedData);

      dispatch(loginSuccess(data));

      if (isInvestor) {
        const response = await postInvestorData(editedCompanyName);
      } else {
        const response = await postStartUpData(editedCompanyName);
      }

      setIsEditing(false);
      setSelectedFile(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <section
      className={`professional_info_section d-flex flex-column gap-3 p-2 px-md-4 py-4 bg-white shadow-sm ${
        theme === "investor" ? "rounded-3 border" : "rounded-5"
      }`}
    >
      {/* header */}
      <header className="p-0 pb-4 border-bottom d-flex flex-column flex-md-row align-items-center justify-content-between">
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
        <span className="edit_btn d-flex align-self-end align-md-self-start ">
          <span className="ms-auto">
            <button onClick={() => setIsEditing(!isEditing)}>
              {isEditing ? "Cancel" : "Edit"}
              <CiEdit />
            </button>
            {isEditing && (
              <button className="ms-2" onClick={handleSubmit}>
                Save <CiSaveUp2 />
              </button>
            )}
          </span>
        </span>
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
          <div className="text_field d-flex gap-3 gap-lg-3 align-items-center">
            <h6 className="m-0">Experience</h6>
            <p className="m-0">{professionalData.experience}</p>
          </div>
        </div>
      )}

      {/* Edit form */}
      {isEditing && (
        <form>
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

          {/* Company */}
          {companyFounderId === loggedInUser._id && isEditing && (
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
            <input
              type="text"
              className="professional_form_input"
              name="education"
              value={professionalData.education}
              onChange={handleTextChange}
            />
          </fieldset>

          {/* Experience */}
          <fieldset className={` ${theme} `}>
            <legend className="px-2">Experience</legend>
            <textarea
              type="text"
              className="professional_form_input"
              name="experience"
              value={professionalData.experience}
              onChange={handleTextChange}
              rows={5}
            />
          </fieldset>
        </form>
      )}
    </section>
  );
}
