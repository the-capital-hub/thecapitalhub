import React, { useState, useRef } from "react";
import { FaUser } from "react-icons/fa";
import { updateUserAPI } from "../../Service/user";
import { getBase64 } from "../../utils/getBase64";

const ProfilePick = ({ setFromStep }) => {
  const [profilePick, setProfilePick] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleProfileClick = () => {
    // Trigger the hidden file input when the profile picture is clicked
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfilePick(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handelNext = async () => {
    if (selectedFile) {
      const picture = await getBase64(selectedFile);
      const res = await updateUserAPI({ profilePicture: picture });
      if (res.status === 200) {
        setFromStep(2);
      }
    }
  };
  return (
    <div className="popup">
      <div
        className="profile_pick"
        onClick={handleProfileClick}
        style={{ cursor: "pointer" }}
      >
        {profilePick ? (
          <img src={profilePick} alt="Profile" style={{ width: "100%" }} />
        ) : (
          <FaUser style={{ fontSize: "4rem" }} />
        )}
      </div>
      <input
        type="file"
        ref={fileInputRef}
        style={{ display: "none" }}
        accept="image/*"
        onChange={handleFileChange}
      />
      {profilePick ? (
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <button className="from_btn startup" onClick={handelNext}>
            Done
          </button>
          <button className="from_btn" onClick={handleProfileClick}>
            Change Picture
          </button>
        </div>
      ) : (
        <div style={{width:"100%",display:"flex",flexDirection:"column",alignItems:"center"}}>
          <button
            className="from_btn startup"
            onClick={handleProfileClick} // Trigger the file input when this button is clicked
          >
            Add Profile Picture
          </button>
          <button
            onClick={() => {
              setFromStep(2);
            }}
            className="from_btn"
          >
            {">>"}Skip
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePick;
