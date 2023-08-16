import { Input, ThankYouModal } from "../../../components/InvestorView";
import { useNavigate } from "react-router-dom/dist";

import "./InvestNow.scss";
import { useState } from "react";

const InvestNow = () => {
  const navigate = useNavigate("/");
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="investNow">
      {showModal && <ThankYouModal onCancel={setShowModal} />}
      <p>Contact Details</p>
      <div className="inputs">
        <Input type={"text"} placeholder={"Full Name"} />
        <Input type={"number"} placeholder={"Mobile number"} />
        <Input type={"email"} placeholder={"Email Id"} />
        <button onClick={() => setShowModal(true)}>Show Interest</button>
      </div>
    </div>
  );
};

export default InvestNow;
