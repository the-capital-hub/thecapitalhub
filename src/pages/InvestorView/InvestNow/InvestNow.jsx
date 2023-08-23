import React, { useState } from "react";
import { Input, ThankYouModal } from "../../../components/InvestorView";
import { useNavigate } from "react-router-dom";
import "./InvestNow.scss";
import {} from "../../../Service/user"
const InvestNow = () => {
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

  // State variables to store input data
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = () => {
    // console.log("Full Name:", fullName);
    // console.log("Mobile Number:", mobileNumber);
    // console.log("Email:", email);
    setShowModal(true);
  };

  return (
    <div className="investNow">
      {showModal && <ThankYouModal onCancel={() => setShowModal(false)} />}
      <div className="investNowContainer">
        <p>Contact Details</p>
        <div className="inputs">
          <Input
            type={"text"}
            placeholder={"Full Name"}
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
          <Input
            type={"number"}
            placeholder={"Mobile number"}
            value={mobileNumber}
            onChange={(e) => setMobileNumber(e.target.value)}
          />
          <Input
            type={"email"}
            placeholder={"Email Id"}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button onClick={handleSubmit}>Show Interest</button>
        </div>
      </div>
    </div>
  );
};

export default InvestNow;
