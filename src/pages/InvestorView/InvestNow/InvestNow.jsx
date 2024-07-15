import React, { useState, useEffect } from "react";
import { Input, ThankYouModal } from "../../../components/InvestorView";
import { useNavigate } from "react-router-dom";
import "./InvestNow.scss";
import { useParams } from "react-router-dom";
import { getOnePager, investNow } from "../../../Service/user";
import { getUserById } from "../../../Service/user";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import { useSelector } from "react-redux";
import SubcriptionPop from "../../../components/PopUp/SubscriptionPopUp/SubcriptionPop";

const InvestNow = ({ page }) => {
  const [user, setUser] = useState({});
  const { username } = useParams();
  const [onePager, setOnePager] = useState([]);
  const [popPayOpen, setPopPayOpen] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  useEffect(() => {
    document.title = "Invest Now - OneLink | The Capital Hub";
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
  const [commitmentAmount, CommitmentAmount] = useState("");

  const handleSubmit = async () => {
    // if (loggedInUser.subscriptionType === "Basic") {
    //   setPopPayOpen(true);
    //   return;
    // }
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
      commitmentAmount,
    };
    try {
      const response = await investNow(requestBody);
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
    <>
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
                <Input
                  type={"text"}
                  placeholder={"Commitment amount"}
                  value={user.commitmentAmount}
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
                <Input
                  type={"text"}
                  placeholder={"Commitment amount"}
                  value={commitmentAmount}
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
      {popPayOpen && (
        <SubcriptionPop popPayOpen={popPayOpen} setPopPayOpen={setPopPayOpen} />
      )}
    </>
  );
};

export default InvestNow;
