import React, { useEffect, useState } from "react";
import "./login.scss";
import RegisterIcon from "../../Images/Group 21.svg";
import GIcon from "../../Images/Group 22.svg";
import FIcon from "../../Images/Group 23.svg";
import AIcon from "../../Images/Group 24.svg";
import PhoneInput from "react-phone-number-input";
import { Link, useNavigate } from "react-router-dom";
import { googleLoginAPI, postUserLogin } from "../../Service/user";
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
// import { Navigate } from "react-router-dom";
import SpinnerBS from "../Shared/Spinner/SpinnerBS";

const Login = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // States for login
  const [isLoginSuccessfull, setIsLoginSuccessfull] = useState(false);
  const [isInvestorSelected, setIsInvestorSelected] = useState(false);
  const [error, setError] = useState(null);

  const [showResetPopUp, setShowResetPopUp] = useState(false);
  const [inputValues, setInputValues] = useState({
    password: "",
    phoneNumber: "",
  });

  // Handle Input change
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

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
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
        // (startup is selected)Investor is not selected and user is investor
        if (!isInvestorSelected) {
          if (user.isInvestor === "true") {
            setError("Invalid credentials");
            return;
          }
        }
        // Investor is selected and user is not investor(user is startup)
        if (isInvestorSelected) {
          if (user.isInvestor === "false") {
            setError("Invalid credentials");
            return;
          }
        }

        // No errors, Set loginsuccessfull to true
        setIsLoginSuccessfull(true);

        setTimeout(() => {
          // Reset states
          setIsInvestorSelected(false);
          setIsLoginSuccessfull(false);

          if (!user.investor) navigate("/home");
          else navigate("/investor/home");
        }, 2000);

        dispatch(loginSuccess(response.user));
      }

      console.log("JWT Token:", token);
    } catch (error) {
      console.error("Login failed:", error.response.data.message);
      setError(error.response.data.message);

      // dispatch(loginFailure(error.response.data.error));
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  // Handle close of login successful popup
  const handleClosePopup = () => {
    if (!isInvestorSelected) {
      navigate("/home");
    } else if (isInvestorSelected) {
      navigate("/investor/home");
    }
  };

  // Handle close of reset password popup
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

  // Google sign in
  const googleUserVerifyHandler = async ({ credential }) => {
    try {
      const { data, token } = await googleLoginAPI(credential);
      console.log(data, token);
      localStorage.setItem("accessToken", token);
      localStorage.setItem("isLoggedIn", "true");
      // if (!isInvestorSelected) {
      //   if (data.isInvestor === "true") {
      //     setError("Invalid credentials");
      //     return;
      //   }
      // }
      // if (isInvestorSelected) {
      //   if (data.isInvestor === "false") {
      //     setError("Invalid credentials");
      //     return;
      //   }
      // }
      setIsLoginSuccessfull(true);

      setTimeout(() => {
        setIsInvestorSelected(false);
        setIsLoginSuccessfull(false);

        if (!data.investor) navigate("/home");
        else navigate("/investor/home");
      }, 2000);

      dispatch(loginSuccess(data));
    } catch (error) {
      navigate("/signup");
      console.log(error);
    }
  };

  useEffect(() => {
    if (window.google && window.google.accounts) {
      const googleAccounts = window.google.accounts;
      googleAccounts.id.initialize({
        client_id: process.env.REACT_APP_GOOGLE_OAUTH_ID,
        callback: googleUserVerifyHandler,
      });

      googleAccounts.id.renderButton(document.getElementById("googlesignin"), {
        // theme: "filled_blue",
        // shape: "circle",
        ux_mode: "popup",
        // text: "continue_with",
        size: "large",
      });
    } else {
      console.error("Google Accounts API is not available.");
    }
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-start py-md-5 min-vh-100">
      <div className="row d-flex register_container w-100 ">
        {/* Leftside heading and hero image */}
        <div className="col-lg-6 col-md-12 register_heading">
          <Link to="/">
            <img className="backArrow" src={backArrow} alt="arrow_back" />
          </Link>
          <h3>Welcome back!</h3>
          <img
            src={RegisterIcon}
            alt="image"
            className="img-fluid"
            loading="lazy"
          />
        </div>

        {/* Right side form */}
        <div className="col-lg-6 col-md-12 register_heading_right">
          <Link className="d-lg-none" to="/">
            <img className="backArrow" src={backArrow} alt="arrow_back" />
          </Link>
          <span className="welcome">Welcome back!</span>

          <div className="login_buttons_row d-flex flex-column align-items-center gap-3">
            <h1 className="mt-5">Login</h1>
            <div className="d-flex flex-column flex-sm-row justify-content-between align-items-center gap-4 gap-sm-5">
              <Link to="">
                <button
                  className={`btn-primaryy login_btn ${
                    !isInvestorSelected ? "startup" : ""
                  } `}
                  onClick={() => setIsInvestorSelected(false)}
                >
                  StartUp
                </button>
              </Link>
              <Link to="">
                <button
                  className={`btn-primaryy login_btn ${
                    isInvestorSelected ? "investor" : ""
                  } `}
                  onClick={() => setIsInvestorSelected(true)}
                >
                  Investor
                </button>
              </Link>
            </div>
          </div>

          <h3 className="already_have_account">
            Don't have an account?{" "}
            <Link
              to={"/signup"}
              className={isInvestorSelected ? "green" : "orange"}
            >
              Create account
            </Link>
          </h3>

          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-12 col input-container">
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
              <button
                type="submit"
                className={` ${isInvestorSelected ? "investor" : "startup"}`}
              >
                {loading ? (
                  <SpinnerBS spinnerSizeClass="spinner-border-sm"></SpinnerBS>
                ) : (
                  "Login"
                )}
              </button>
            </div>
            <h3 className="already_have_account_mobile">
              I don't have an account? &nbsp;
              <Link to={"/signup"} style={{ color: "red" }}>
                Create account
              </Link>
            </h3>
          </form>

          <div className="line-container m-auto">
            <hr className="line" />
            <span className="text mx-2">OR</span>
            <hr className="line" />
          </div>
          <div className="social-login-container d-flex flex-column justify-content-center">
            <div id="googlesignin" className="mx-auto"></div>
          </div>
          {/* <div className="row">
            <div className="col d-flex justify-content-center align-items-center login_icons">
              <img src={GIcon} alt="image" />
              <img src={FIcon} alt="image" />
              <img src={AIcon} alt="image" />
            </div>
          </div> */}
        </div>
        {isLoginSuccessfull && !isInvestorSelected && (
          <AfterSuccessPopUp onClose={handleClosePopup} login={true} />
        )}
        {isLoginSuccessfull && isInvestorSelected && (
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
    </div>
  );
};

export default Login;
