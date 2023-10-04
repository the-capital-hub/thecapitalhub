import React, { useEffect, useState } from "react";
import "./login.scss";
import RegisterIcon from "../../Images/Group 21.svg";
import GIcon from "../../Images/Group 22.svg";
import FIcon from "../../Images/Group 23.svg";
import AIcon from "../../Images/Group 24.svg";
import PhoneInput from "react-phone-number-input";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../../Service/user";
import AfterSuccessPopUp from "../PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import InvestorAfterSuccessPopUp from "../PopUp/InvestorAfterSuccessPopUp/InvestorAfterSuccessPopUp";
import ErrorPopUp from "../PopUp/ErrorPopUp/ErrorPopUp";
import { useDispatch, useSelector } from "react-redux";
// import { loginSuccess, loginFailure } from "../../Store/Action/userAction";
import {
  loginSuccess,
  loginFailure,
} from "../../Store/features/user/userSlice";
import backArrow from "../../Images/left-arrow.png";
import ResetPasswordPopUp from "../PopUp/RequestPasswordPopUp/RequestPasswordPopUp";

const Login = () => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isInvestorSubmitted, setIsInvestorSubmitted] = useState(false);
  const [error, setError] = useState(null);
  const [showResetPopUp, setShowResetPopUp] = useState(false);
  const [inputValues, setInputValues] = useState({
    password: "",
    phoneNumber: "",
  });
  const handleInputChange = (event, type) => {
    if (type !== "country" && type !== "state" && type !== "phoneNumber") {
      const { name, value } = event.target;
      setInputValues({ ...inputValues, [name]: value });
    } else if (type === "country") {
      setInputValues({ ...inputValues, country: event });
    } else if (type === "state") {
      setInputValues({ ...inputValues, state: event });
    } else if (type === "phoneNumber") {
      setInputValues({ ...inputValues, phoneNumber: event });
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const { phoneNumber, password } = inputValues;
      const response = await postUserLogin(inputValues);
      console.log("response-->", response);

      const user = response.user;
      const token = response.token;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("isLoggedIn", "true");
      if (response) {
        console.log("response--->", response);

        if (button1Class === "btn1" && user.investor) {
          setError("Invalid credentials");
          return;
        }
        if (button2Class === "btn1" && !user.investor) {
          setError("Invalid credentials");
          return;
        }
        if (button1Class === "btn1") {
          setIsSubmitted(true);
        }

        if (button2Class === "btn1") {
          setIsInvestorSubmitted(true);
        }

        setTimeout(() => {
          setIsSubmitted(false);
          setIsInvestorSubmitted(false);
          if (!user.investor) navigate("/profile");
          else navigate("/investor");
        }, 2000);

        dispatch(loginSuccess(response.user));
      }

      console.log("JWT Token:", token);
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      setError(error.response.data.message);

      // dispatch(loginFailure(error.response.data.error));
      console.log(error);
    }
  };
  const navigate = useNavigate();

  const handleClosePopup = () => {
    navigate("/profile");
  };
  const handleCloseResetPopup = () => {
    setShowResetPopUp(false);
    navigate("/login");
  };
  const handleBack = () => {
    navigate("/");
  };

  useEffect(() => {
    document.title = "Log In | The Capital Hub";
  }, []);

  const [button1Class, setButton1Class] = useState("btn1");
  const [button2Class, setButton2Class] = useState("btn2");

  const handleButton1Click = () => {
    setButton1Class("btn1");
    setButton2Class("btn2");
  };

  const handleButton2Click = () => {
    setButton1Class("btn2");
    setButton2Class("btn1");
  };

  return (
    <>
      <div className="row d-flex register_container">
        <div className="col-lg-6 col-md-12 register_heading">
          <Link to="/">
            <img className="backArrow" src={backArrow} alt="arrow_back" />
          </Link>
          <h3>Welcome back!</h3>
          <img src={RegisterIcon} alt="image" />
        </div>
        <div className="col-lg-6 col-md-12 register_heading_right">
          <Link className="d-lg-none" to="/">
            <img className="backArrow" src={backArrow} alt="arrow_back" />
          </Link>
          <span className="welcome">Welcome back!</span>

          <div className="login_buttons_row">
            <h1 className="mt-5">Login</h1>
            <Link to="">
              <button
                className={`btn-primaryy ${button1Class} login_btn`}
                onClick={handleButton1Click}
              >
                StartUp
              </button>
            </Link>
            <Link to="">
              <button
                className={`btn-primaryy ${button2Class} login_btn`}
                onClick={handleButton2Click}
              >
                Investor
              </button>
            </Link>
          </div>

          <h3 className="already_have_account">
            I don’t have an account?{" "}
            <Link to={"/signup"} style={{ color: "red" }}>
              Create account
            </Link>
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 input-container">
                <label htmlFor="mobile">Mobile Number</label>
                <PhoneInput
                  placeholder="Mobile Number"
                  className="form-control plato_form_control"
                  defaultCountry="IN"
                  countryCallingCodeEditable={false}
                  initialValueFormat="national"
                  autoComplete="off"
                  onChange={(e) => handleInputChange(e, "phoneNumber")}
                  value={inputValues.phoneNumber}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-12">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                  placeholder="Password"
                  onChange={(e) => handleInputChange(e, "password")}
                  value={inputValues.password}
                />
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-12">
                <Link to={""} onClick={() => setShowResetPopUp(true)}>
                  Forgot Password?
                </Link>
              </div>
            </div>

            {/* <div className="form-check">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                className="form-check-input"
                required
              />
              <label for="terms" className="form-check-label">
                I agree to the terms and conditions
              </label>
            </div> */}
            <div className="submit_btn mt-3">
              <button type="submit" className="btn btn-primary">
                Log In
              </button>
            </div>
            <h3 className="already_have_account_mobile">
              I don’t have an account? &nbsp;
              <Link to={"/signup"} style={{ color: "red" }}>
                Create account
              </Link>
            </h3>
          </form>

          {/* <div className="line-container">
            <hr className="line" />
            <span className="text">Or continue with</span>
            <hr className="line" />
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center login_icons">
              <img src={GIcon} alt="image" />
              <img src={FIcon} alt="image" />
              <img src={AIcon} alt="image" />
            </div>
          </div> */}
        </div>
        {isSubmitted && (
          <AfterSuccessPopUp onClose={handleClosePopup} login={true} />
        )}
        {isInvestorSubmitted && (
          <InvestorAfterSuccessPopUp onClose={handleClosePopup} login={true} />
        )}

        {error && (
          <ErrorPopUp
            message={error}
            onClose={setTimeout(() => {
              setError(false);
            }, 1000)}
          />
        )}

        {showResetPopUp && (
          <ResetPasswordPopUp onClose={handleCloseResetPopup} />
        )}
      </div>
    </>
  );
};

export default Login;
