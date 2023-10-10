import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import { postStartUpData, uploadLogo } from "../../../../Service/user";
import { getBase64 } from "../../../../utils/getBase64";
import IconEdit from "../../SvgIcons/IconEdit";

export default function AddTeamMemberModal({ companyData, setCompanyData }) {
  const [member, setMember] = useState({ name: "", designation: "" });
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  // Fetch current core team members here

  // handleChange
  function handleInputChange(e) {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "name") {
      setMember((prev) => {
        return { ...prev, name: value };
      });
    } else {
      setMember((prev) => {
        return { ...prev, designation: value };
      });
    }
  }

  // handleFileChange
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  // handle AddTeamMember
  const handleAddTeamMember = async (e) => {
    e.preventDefault();
    let profileImage = "";

    if (selectedFile) {
      try {
        const logo = await getBase64(selectedFile);
        const { url } = await uploadLogo({ logo });
        profileImage = url;
      } catch (error) {
        console.log("Error:", error);
        return;
      }
    }

    const updatedTeamMember = {
      name: member.name,
      designation: member.designation,
      image: profileImage,
    };
    console.log("Team", updatedTeamMember);

    try {
      setCompanyData((previousData) => ({
        ...previousData,
        team: [...previousData.team, updatedTeamMember],
      }));
      const response = await postStartUpData({
        founderId: companyData.founderId,
        team: [...companyData.team, updatedTeamMember],
      });

      console.log(response);
      setMember({ name: "", designation: "" });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error adding team member:", error);
    }
  };

  return (
    <div className="team_member_modal d-flex gap-4 justify-content-around py-3">
      {/* Edit/Remove modal */}

      <div className="edit_remove_team d-flex flex-column gap-3 overflow-y-auto py-3">
        <h5 className="m-0 text-center">Select member to edit</h5>
        <div className="d-flex flex-column gap-3">
          {/* Loop current team member here */}
          <div className="d-flex align-items-center justify-content-around p-2 bg-light rounded-3">
            <img
              src=""
              alt=""
              style={{ width: "50px", height: "50px", objectFit: "cover" }}
              className="rounded-circle"
            />
            <h6 className="m-0">Name</h6>
            <button className="modal_edit_btn">
              <IconEdit />
            </button>
          </div>
        </div>
      </div>

      {/* Add modal */}
      <div className="add_team d-flex flex-column gap-3 bg-light rounded-3 shadow-sm py-3">
        <h5 className="m-0 text-center">Add new Member</h5>

        <form
          onSubmit={handleAddTeamMember}
          className="d-flex flex-column gap-4 p-4"
        >
          {/* Profile picture input */}
          <div className="mx-auto">
            <input
              type="file"
              name="image"
              id="image"
              accept="image/*"
              className="visually-hidden"
              onChange={handleFileChange}
            />
            <label htmlFor="image" className="upload__label">
              {imagePreview ? (
                <img
                  src={imagePreview}
                  alt="Selected"
                  className="preview-image"
                />
              ) : (
                <BsFillCameraFill
                  style={{
                    fontSize: "1.5rem",
                    color: "rgba(253, 89, 1,1)",
                  }}
                />
              )}
            </label>
          </div>
          {/* {imagePreview && (
            <div className="image-preview">
              <img src={imagePreview} alt="Selected" />
            </div>
          )} */}
          {/* Name input */}
          <div className="">
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter Name"
              value={member.name}
              className="modal__input p-2 rounded-2 w-100"
              onChange={handleInputChange}
            />
          </div>
          {/* Designation input */}
          <div className="">
            <input
              type="text"
              name="designation"
              id="designation"
              placeholder="Enter Designation"
              value={member.designation}
              className="modal__input p-2 rounded-2 w-100"
              onChange={handleInputChange}
            />
          </div>
          <button
            className="orange_button"
            onClick={handleAddTeamMember}
            data-bs-dismiss="modal"
          >
            Add
          </button>
        </form>
      </div>
    </div>
  );
}
