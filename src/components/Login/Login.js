import React, { useState } from "react";
import "./login.scss";
import RegisterIcon from "../../Images/Group 21.svg";
import GIcon from "../../Images/Group 22.svg";
import FIcon from "../../Images/Group 23.svg";
import AIcon from "../../Images/Group 24.svg";
import PhoneInput from "react-phone-number-input";
import { Link } from "react-router-dom";

const Login = () => {
  const [inputValues, setInputValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    nameOnCard: "",
    addressLine1: "",
    addressLine2: "",
    country: "",
    state: "",
    city: "",
    couponCode: "",
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
  return (
    <>
      <div className="row d-flex register_container">
        <div className="col-lg-6 col-md-12 register_heading">
          <h3>Welcome back!</h3>
          <img src={RegisterIcon} alt="" />
        </div>
        <div className="col-lg-6 col-md-12 register_heading_right">
          <span className="welcome">Welcome back!</span>
          <h1 className="mt-5">Log in</h1>
          <h3 className="already_have_account">
            I don’t have an account?{" "}
            <Link to={"/signup"} style={{ color: "red" }}>Create account</Link>
          </h3>

          <form>
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
                Create Account
              </button>
            </div>
            <h3 className="already_have_account_mobile">
              I don’t have an account? &nbsp;
              <Link to={"/signup"} style={{ color: "red" }}>Create account</Link>
            </h3>
          </form>

          <div className="line-container">
            <hr className="line" />
            <span className="text">Or continue with</span>
            <hr className="line" />
          </div>
          <div className="row">
            <div className="col d-flex justify-content-center align-items-center login_icons">
              <img src={GIcon} alt="" />
              <img src={FIcon} alt="" />
              <img src={AIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
