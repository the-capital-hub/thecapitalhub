import React, { useState } from "react";
import "./login.scss";
import RegisterIcon from "../../Images/Group 21.svg";
import GIcon from "../../Images/Group 22.svg";
import FIcon from "../../Images/Group 23.svg";
import AIcon from "../../Images/Group 24.svg";
import PhoneInput from "react-phone-number-input";
import { Link, useNavigate } from "react-router-dom";
import { postUserLogin } from "../../Service/user";
import AfterSuccessPopUp from "../PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import ErrorPopUp from "../PopUp/ErrorPopUp/ErrorPopUp";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess, loginFailure } from "../../Store/Action/userAction";



const Login = () => {
  const dispatch = useDispatch();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState(null);
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

      const token = response.token;
      localStorage.setItem("accessToken", token);
      localStorage.setItem("isLoggedIn", "true");
      if (response) {
        console.log("response--->", response)
        setIsSubmitted(true);

        setTimeout(() => {
          setIsSubmitted(false);
          navigate("/investor");
        }, 2000);

        dispatch(loginSuccess(response.user));
      }

      console.log("JWT Token:", token);
    } catch (error) {
      console.error("Login failed:", error.response.data.error);
      setError(error.response.data.error);

      dispatch(loginFailure(error.response.data.error));
    }
  };
  const navigate = useNavigate();

  const handleClosePopup = () => {
    navigate("/investor");
  };

  return (
    <>
      <div className="row d-flex register_container">
        <div className="col-lg-6 col-md-12 register_heading">
          <h3>Welcome back!</h3>
          <img src={RegisterIcon} alt="image" />
        </div>
        <div className="col-lg-6 col-md-12 register_heading_right">
          <span className="welcome">Welcome back!</span>
          <h1 className="mt-5">Log in</h1>
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

            <div className="form-check">
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
            </div>
            <div className="submit_btn">
              <button type="submit" className="btn btn-primary">
              Log In
              </button>
            </div>
            <h3 className="already_have_account_mobile">
              I don’t have an account? &nbsp;
              <Link to={"/signup"} style={{ color: "red" }}>
                Log In
              </Link>
            </h3>
          </form>

          <div className="line-container">
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
          </div>
        </div>
        {isSubmitted && (
          <AfterSuccessPopUp onClose={handleClosePopup} login={true} />
        )}

        {error && (
          <ErrorPopUp
            message={error}
            onClose={setTimeout(() => {
              setError(false);
            }, 1000)}
          />
        )}
      </div>
    </>
  );
};

export default Login;
