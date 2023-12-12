import React, { useState, useEffect } from "react";
import { Input, ThankYouModal } from "../../../components/InvestorView";
import { useNavigate } from "react-router-dom";
import "./InvestNow.scss";
import { useParams } from "react-router-dom";
import { getOnePager, investNow } from "../../../Service/user";
import { getUserById } from "../../../Service/user";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";

const InvestNow = ({ page }) => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const [onePager, setOnePager] = useState([]);
  useEffect(() => {
    document.title = "Invest Now - One Link | The Capital Hub";
    getUserById(username)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => setUser({}));
  }, [username]);
  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  // State variables to store input data
  const [fullName, setFullName] = useState("");
  const [mobileNumber, setMobileNumber] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = async () => {
    setLoading(true);
    await getOnePager(username)
      .then(({ data }) => {
        setOnePager(data);
      })
      .catch(() => setOnePager([]));
    const requestBody = {
      fromUserName: fullName,
      fromUserEmail: email,
      fromUserMobile: mobileNumber,
      toUserId: onePager.founderId,
    };
    try {
      const response = await investNow(requestBody);
      console.log(response);
      if (response.status === 200) {
        setShowModal(true);
        setLoading(false);
        setIsSubmitted(true);
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="investNow">
      {showModal && <ThankYouModal onCancel={() => setShowModal(false)} />}
      <div className="investNowContainer shadow-sm">
        {page === "onePager" ? (
          <>
            <p>Contact Details</p>
            <div className="inputs">
              <Input
                type={"text"}
                placeholder={"Full Name"}
                value={user.firstName + " " + user.lastName}
              />
              <Input
                type={"text"}
                placeholder={"Mobile number"}
                value={user.phoneNumber}
              />
              <Input
                type={"email"}
                placeholder={"Email Id"}
                value={user.email}
              />
            </div>
          </>
        ) : (
          <>
            <p style={{ fontSize: "1.5rem" }}>Contact Details</p>
            <div className="inputs">
              <Input
                type={"text"}
                placeholder={"Full Name"}
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />
              <Input
                type={"tel"}
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
              {isSubmitted ? (
                <button>Submitted</button>
              ) : (
                <button onClick={handleSubmit}>
                  {loading ? (
                    <SpinnerBS
                      colorClass={"text-light"}
                      spinnerSizeClass="spinner-border-sm"
                    />
                  ) : (
                    "Show Interest"
                  )}
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default InvestNow;
