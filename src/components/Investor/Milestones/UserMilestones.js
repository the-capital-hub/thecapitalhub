import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useSelector } from "react-redux";

const UserMilestones = ({pageTheme}) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const completion = calculateProfileCompletion(loggedInUser);
  return (
    <div style={{ width: 60, height: 60, margin: "0.5rem 5px" }}>
      <CircularProgressbar
        value={completion}
        text={`${Math.round(completion)}%`}
        styles={buildStyles({
          pathColor:pageTheme==="investor"?"rgba(211, 243, 107, 1)":"#fd5901", // Setting the path color to #ff620e
          textColor: "#fff", // Text color for the percentage text
          trailColor: "#d6d6d6", // Background color for the unfilled part
        })}
      />
    </div>
  );
};

const calculateProfileCompletion = (user) => {
  const requiredFields = [
    "firstName",
    "lastName",
    "email",
    "phoneNumber",
    "profilePicture",
    "bio",
    "designation",
    "education",
    "experience",
    "savedPost",
  ];

  const filledFields = requiredFields.filter(
    (field) =>
      user[field] && (user[field].trim() !== "" || user[field].length !== 0)
  );
  const completionPercentage =
    (filledFields.length / requiredFields.length) * 100;

  return completionPercentage;
};
export default UserMilestones;
