import React from "react";
import "./register.css";
import RegisterIcon from "../../Images/Group 21.svg";
import GIcon from "../../Images/Group 22.svg";
import FIcon from "../../Images/Group 23.svg";
import AIcon from "../../Images/Group 24.svg";

const Register = () => {
  return (
    <>
      <div className="row d-flex">
        <div className="col-6 register_heading">
          <h3>
            Start your journey <br />
            with us.
          </h3>
          <img src={RegisterIcon} alt="" />
        </div>
        <div className="col-6 register_heading_right">
          <h1>Create new account</h1>
          <h3>
            Already have an account?{" "}
            <span style={{ color: "red" }}>Log In</span>
          </h3>

          <form>
            <div class="row">
              <div class="col-6 first_name">
                <label for="firstname">First Name</label>
                <input
                  type="text"
                  id="firstname"
                  name="firstname"
                  class="form-control"
                  required
                />
              </div>
              <div class="col-6 first_name">
                <label for="lastname">Last Name</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  class="form-control"
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <label for="mobile">Mobile Number</label>
                <input
                  type="tel"
                  id="mobile_number"
                  name="mobile"
                  class="form-control"
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <label for="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  class="form-control"
                  required
                />
              </div>
            </div>

            <div class="row">
              <div class="col-12">
                <label for="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirm-password"
                  class="form-control"
                  required
                />
              </div>
            </div>

            <div class="form-check">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                class="form-check-input"
                required
              />
              <label for="terms" class="form-check-label">
                I agree to the terms and conditions
              </label>
            </div>
            <div className="submit_btn">
              <button type="submit" class="btn btn-primary">
                Create Account
              </button>
            </div>
          </form>

          <div class="line-container">
            <hr class="line" />
            <span class="text">Or continue with</span>
            <hr class="line" />
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

export default Register;
