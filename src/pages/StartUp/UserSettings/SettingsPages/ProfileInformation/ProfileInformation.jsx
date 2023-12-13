import React, { useState } from "react";
import "./ProfileInformation.scss";
import IconCloudUpload from "../../../../../components/Investor/SvgIcons/IconCloudUpload";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";


function ProfileInformation() {
  const [profilePicture, setProfilePicture] = useState(null);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [bio, setBio] = useState("");
  const [company, setCompany] = useState("");
  const [designation, setDesignation] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");
  const navigate = useNavigate();


  // Event handler for file input change
  const handleProfilePictureChange = (event) => {
    const file = event.target.files[0];
    setProfilePicture(file);
  };

  // Event handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // Perform form submission logic here
    // For example, you can send the form data to a server or perform local processing
    console.log("Form submitted:", {
      profilePicture,
      firstName,
      lastName,
      bio,
      company,
      designation,
      education,
      experience,
    });
  };
  return (
    <section className="personal_information_section flex-grow-1 px-3">
      <button onClick={() => navigate(-1)}><FaArrowLeft size={25} />
</button>
        <h2 className="pb-3">Personal Information</h2>
       <form onSubmit={handleSubmit}>
        {/* profilePicture*/}
        <fieldset>
          <legend className="px-2">Profile Picture</legend>
          <input
            type="file"
            accept="image/*"
            className="visually-hidden"
            name="profilePicture"
            id="profilePicture"
            onChange={handleProfilePictureChange}
          />
          <div className="professional_form_input d-flex align-items-center gap-4">
            <label htmlFor="profilePicture" style={{ cursor: "pointer" }}>
              <IconCloudUpload
                color={"#fd5901"}
                height="1.75rem"
                width="1.75rem"
              />
            </label>
            <p className="m-0 fs-6 fw-light">{profilePicture?.name}</p>
          </div>
        </fieldset>

        {/* first name */}
        <fieldset>
          <legend className="px-2">First name</legend>
          <input
            type="text"
            className="professional_form_input"
            name="Firstname"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </fieldset>

        {/* last Name */}
        <fieldset>
          <legend className="px-2">Last name</legend>
          <input
            type="text"
            className="professional_form_input"
            name="Lastname"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </fieldset>

        {/* bio */}
        <fieldset>
          <legend className="px-2">Bio</legend>
          <textarea
            type="text"
            className="professional_form_input"
            name="bio"
            rows={5}
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          />
        </fieldset>

        {/* Company */}
        <fieldset>
          <legend className="px-2">Company</legend>
          <input
            type="text"
            className="professional_form_input"
            name="company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
        </fieldset>

        {/* Designation */}
        <fieldset>
          <legend className="px-2">Designation</legend>
          <input
            type="text"
            className="professional_form_input"
            name="designation"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          />
        </fieldset>

        {/* Education */}
        <fieldset>
          <legend className="px-2">Education</legend>
          <input
            type="text"
            className="professional_form_input"
            name="education"
            value={education}
            onChange={(e) => setEducation(e.target.value)}
          />
        </fieldset>

        {/* Experience */}
        <fieldset>
          <legend className="px-2">Experience</legend>
          <textarea
            type="text"
            className="professional_form_input"
            name="experience"
            rows={5}
            value={experience}
            onChange={(e) => setExperience(e.target.value)}
          />
        </fieldset>
         {/* Button */}
         <div className="d-flex flex-row gap-2 ms-auto">
         <button type="submit" className="btn py-auto">
          Submit
        </button>
        <button type="cancle" className="btn py-auto">
        Cancel
        </button>
         </div>
      </form>
    </section>
  );
}

export default ProfileInformation;
