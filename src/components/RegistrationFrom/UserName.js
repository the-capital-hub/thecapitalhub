import React, { useState } from "react";
import "./registrationFrom.scss";
import { updateUserAPI } from "../../Service/user";

const UserName = ({ setFromStep }) => {
  const [next, setNext] = useState(false);
  const [userName, setUserName] = useState("");
  const [suggestedName, setSuggestedName] = useState([]);
  const handelNext = async () => {
    const res = await updateUserAPI({ userName });
    if (res.status === 200) {
      setFromStep(1);
    }
  };
  const generateSuggestions = (baseName) => {
    // Define a set of special characters
    const specialChars = ["!", "@", "#", "$", "%", "^", "&", "*"];

    // Helper function to get a random special character
    const getRandomSpecialChar = () => {
      const randomIndex = Math.floor(Math.random() * specialChars.length);
      return specialChars[randomIndex];
    };

    // Helper function to get a random number with a fixed number of digits
    const getRandomNumber = (digits) => {
      return Math.floor(Math.random() * Math.pow(10, digits)).toString();
    };
    console.log(getRandomSpecialChar());
    // Generate three unique suggestions
    setSuggestedName([
      `${userName}_${getRandomNumber(3)}`, // e.g., username!123
      `${userName}_${getRandomNumber(4)}`, // e.g., username#2024
      `${userName}_${getRandomNumber(4)}`, // e.g., username$user
    ]);
    setNext(true);
  };
  return (
    <>
      {next ? (
        <>
          <div className="popup">
            <div className="input_container">
              <label>Username</label>
              <input
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                  generateSuggestions()
                }}
              />
            </div>
          </div>
          <div
            className="popup"
            style={{ marginTop: "2rem", padding: "1.5rem" }}
          >
            <div style={{ width: "100%" }}>
              {suggestedName.map((item, index) => (
                <div
                  key={index}
                  style={{
                    border: "1px solid",
                    width: "100%",
                    height: "30px",
                    padding: "0 5px",
                    borderRadius: "5px",
                    marginBottom: "0.5rem",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    setUserName(item);
                  }}
                >
                  <p> {item}</p>
                </div>
              ))}
            </div>
            <button className="from_btn startup" onClick={handelNext}>
              Next
            </button>
          </div>
        </>
      ) : (
        <div className="popup">
          <div className="input_container">
            <label>Username</label>
            <input
              onChange={(e) => {
                setUserName(e.target.value);
              }}
            />
          </div>
          <button className="from_btn startup" onClick={generateSuggestions}>
            Next
          </button>
        </div>
      )}
    </>
  );
};

export default UserName;
