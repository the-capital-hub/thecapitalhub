import React, { useState } from "react";
import { BsFillCameraFill } from "react-icons/bs";

export default function AddTeamMemberModal() {
  const [member, setMember] = useState({ name: "", designation: "" });
  const [selectedFile, setSelectedFile] = useState(null);

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
  };

  // handle AddTeamMember
  function handleAddTeamMember(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleAddTeamMember}
      className="d-flex flex-column gap-4 p-4"
    >
      {/* Profile picture input */}
      <div className="mx-auto">
        <input
          type="file"
          name="profilePicture"
          id="profilePicture"
          accept="image/*"
          className="visually-hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="profilePicture" className="upload__label">
          <BsFillCameraFill
            style={{
              fontSize: "1.5rem",
              color: "rgba(253, 89, 1,1)",
            }}
          />
        </label>
      </div>

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
    </form>
  );
}
