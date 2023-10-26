import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";
import {
  getStartupByFounderId,
  postStartUpData,
  uploadLogo,
} from "../../../../Service/user";
import { getBase64 } from "../../../../utils/getBase64";
import IconEdit from "../../SvgIcons/IconEdit";
import IconDeleteFill from "../../SvgIcons/IconDeleteFill";

export default function AddTeamMemberModal({
  companyData,
  setCompanyData,
  theme,
}) {
  const initialMemberState = {
    name: "",
    designation: "",
    image: "",
    index: null,
  };
  // State for member
  const [member, setMember] = useState(initialMemberState);
  const [selectedFile, setSelectedFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Fetch current core team members here
  const { team: currentTeam } = companyData;
  // console.log(currentTeam);

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
  const handleFileChange = async (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);

    // Image preview
    const imageUrl = URL.createObjectURL(file);
    setImagePreview(imageUrl);
  };

  // handle AddTeamMember
  const handleAddTeamMember = async (e) => {
    e.preventDefault();
    let index = member.index;
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

    //
    const editedTeamMember = {
      name: member.name,
      designation: member.designation,
      image: profileImage || member.image,
    };
    console.log("edited member", editedTeamMember);

    try {
      if (isEditing) {
        let editedTeam = [...companyData.team];
        editedTeam[index] = { ...editedTeam[index], ...editedTeamMember };
        console.log("editedTeam", editedTeam);

        setCompanyData((previousData) => ({
          ...previousData,
          team: [...editedTeam],
        }));

        const response = await postStartUpData({
          founderId: companyData.founderId,
          team: [...editedTeam],
        });
        console.log(response);
      } else {
        // If not editing then Adding new member
        setCompanyData((previousData) => ({
          ...previousData,
          team: [...previousData.team, updatedTeamMember],
        }));

        const response = await postStartUpData({
          founderId: companyData.founderId,
          team: [...companyData.team, updatedTeamMember],
        });
        console.log(response);
      }

      setMember(initialMemberState);
      setSelectedFile(null);
      setIsEditing(false);
      setImagePreview(null);
    } catch (error) {
      console.error("Error adding team member:", error);
    }
  };

  // Handle select click
  function handleSelectClick(e, member, index) {
    setIsEditing(true);
    setMember((prev) => {
      return { ...prev, ...member, index: index };
    });
    setImagePreview(member.image);
  }

  // Handle Delete click
  async function handleDeleteClick(e, member, index) {
    let response = window.confirm(
      `Are you sure you want to remove "${member.name}" from your Team?`
    );
    if (response) {
      const newTeam = [...companyData.team];
      const deleted = newTeam.splice(index, 1);
      // console.log("deleted", deleted, "newTeam", newTeam);

      // Post startupData
      try {
        setCompanyData((previousData) => ({
          ...previousData,
          team: [...newTeam],
        }));
        const response = await postStartUpData({
          founderId: companyData.founderId,
          team: [...newTeam],
        });

        console.log(response);
        setMember(initialMemberState);
        setSelectedFile(null);
        setIsEditing(false);
        setImagePreview(null);
      } catch (error) {
        console.error("Error adding team member:", error);
      }
    }
  }

  // Handle Clear
  function handleClear() {
    setMember(initialMemberState);
    setIsEditing(false);
    setSelectedFile(null);
    setImagePreview(null);
  }

  return (
    <div className="team_member_modal d-flex flex-column flex-lg-row gap-4 justify-content-around py-3">
      {/* Edit/Remove modal */}

      <div className="edit_remove_team d-flex flex-column gap-3 overflow-y-auto py-3">
        <h5 className="m-0 text-center">Select member to edit</h5>
        <div className="d-flex flex-column gap-3">
          {/* Loop current team member here */}
          {currentTeam
            ? currentTeam.map((member, index) => {
                return (
                  <div
                    className="d-flex align-items-center justify-content-around p-2 bg-light rounded-3"
                    key={`${member.name}${index}`}
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      style={{
                        width: "50px",
                        height: "50px",
                        objectFit: "cover",
                      }}
                      className="rounded-circle"
                    />
                    <h6 className="m-0 flex-grow-1 text-center" style={{}}>
                      {member.name}
                    </h6>
                    <div className="d-flex gap-2">
                      <button
                        className={`modal_edit_btn ${theme}`}
                        onClick={(e) => handleSelectClick(e, member, index)}
                      >
                        <IconEdit />
                      </button>
                      <button
                        className={`modal_delete_btn ${theme}`}
                        onClick={(e) => handleDeleteClick(e, member, index)}
                      >
                        <IconDeleteFill />
                      </button>
                    </div>
                  </div>
                );
              })
            : ""}
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
            <label htmlFor="image" className={`upload__label ${theme} `}>
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
                    color: `${
                      theme === "investor" ? "black" : "rgba(253, 89, 1,1)"
                    }`,
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
              className={`modal__input p-2 rounded-2 w-100 ${theme}`}
              onChange={handleInputChange}
              style={{ color: 'black' }}
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
              className={`modal__input p-2 rounded-2 w-100 ${theme}`}
              onChange={handleInputChange}
              style={{ color: 'black' }}
            />
          </div>
          <button
            className={`orange_button ${theme}`}
            // onClick={handleAddTeamMember}
            data-bs-dismiss="modal"
            type="submit"
          >
            {isEditing ? "Update" : "Add"}
          </button>
          <button
            type="button"
            className={`orange_button ${theme}`}
            onClick={handleClear}
          >
            Clear
          </button>
        </form>
      </div>
    </div>
  );
}
