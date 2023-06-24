import React from "react";
import "./login.css";
import RegisterIcon from "../../Images/Group 21.svg";
import GIcon from "../../Images/Group 22.svg";
import FIcon from "../../Images/Group 23.svg";
import AIcon from "../../Images/Group 24.svg";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="row d-flex">
        <div className="col-6 login_heading">
          <h3>Welcome back!</h3>
          <img src={RegisterIcon} alt="" />
        </div>
        <div className="col-6 login_heading_right">
          <h1>Log in</h1>
          <h3>
            I don’t have an account?{" "}
            <span style={{ color: "red" }}> Create account</span>
          </h3>

          <form className="login_form">
            <div className="row">
              <div className="col-12">
                <label for="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile_number"
                  name="mobile"
                  className="form-control"
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-12">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-control"
                  required
                />
                <Link to ="/forgotpassword" className="forgot_password">
                    <div>Forgot Password?</div>
                </Link>
              </div>
            </div>
            <div className="login_btn">
              <button type="submit" className="btn btn-primary">
                Log in
              </button>
            </div>
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
