import React, { useState } from "react";
import "./InvestorManageAccount.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import logoIcon from "../../../Images/manageAccount/Group 15186.svg";
import profileIcon from "../../../Images/investorIcon/profilePic.svg";

const InvestorManageAccount = () => {
  const [checked, setChecked] = useState(true);
  return (
    <div className="container-fluid manage_account_container">
      <div className="row mt-2">
        <div className="col">
          <SmallProfileCard text={"Manage Account"} />
          <div className="content-70">
            <div className="row">
              <div className="col-12 mt-2">
                <div className="box_container">
                  <section className="">
                    <div className="present_account card">
                      {/* Header */}
                      <div className="d-flex align-items-center">
                        <div className="logo">
                          <img src={logoIcon} alt="img" />
                        </div>
                        <div className="header_text">Present account</div>
                      </div>
                      <hr />
                      {/* Body */}
                      <div className="d-flex align-items-center">
                        <div className="profile_image">
                          <img src={profileIcon} alt="img" />
                        </div>
                        <div className="name_email">
                          <h4>Pramod Badiger</h4>
                          <h6>Pramodbadiger@gmail.com</h6>
                        </div>
                      </div>
                      {/* Footer */}
                      <div className="footer">
                        <button className="btn-delete">Delete account</button>
                      </div>
                    </div>
                  </section>

                  <section className=" card empty_box">
                    <div className="d-flex align-items-center">
                      <div className="logo">
                        <img src={logoIcon} alt="img" />
                      </div>
                      <div className="header_text">Accounts</div>
                    </div>
                    <p>
                      Add another account - so you can switch between them
                      easily.
                    </p>
                    {/* Existing Account Section */}
                    <section className="existing_accounts">
                      {/* Small Horizontal Card */}
                      <div className="small_card">
                        <div className="left_section">
                          <div className="d-flex align-items-center">
                            <div className="profile_image">
                              <img src={profileIcon} alt="img" />
                            </div>
                            <div className="name_email">
                              <h4>Pramod Badiger</h4>
                              <h6>Pramodbadiger@gmail.com</h6>
                            </div>
                          </div>
                        </div>
                        <div className="right_section">
                          {/* Rounded Checkbox (Assuming you have an input checkbox styled as a rounded checkbox) */}
                          <label className="checkbox_container">
                            <input type="checkbox" checked />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="small_card">
                        <div className="left_section">
                          <div className="d-flex align-items-center">
                            <div className="profile_image">
                              <img src={profileIcon} alt="img" />
                            </div>
                            <div className="name_email">
                              <h4>Raghu</h4>
                              <h6>raghu@gmail.com</h6>
                            </div>
                          </div>
                        </div>
                        <div className="right_section">
                          {/* Rounded Checkbox (Assuming you have an input checkbox styled as a rounded checkbox) */}
                          <label className="checkbox_container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                      <div className="small_card">
                        <div className="left_section">
                          <div className="d-flex align-items-center">
                            <div className="profile_image">
                              <img src={profileIcon} alt="img" />
                            </div>
                            <div className="name_email">
                              <h4>Raju Prasain</h4>
                              <h6>raju@gmail.com</h6>
                            </div>
                          </div>
                        </div>
                        <div className="right_section">
                          {/* Rounded Checkbox (Assuming you have an input checkbox styled as a rounded checkbox) */}
                          <label className="checkbox_container">
                            <input type="checkbox" />
                            <span className="checkmark"></span>
                          </label>
                        </div>
                      </div>
                    </section>
                  </section>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorManageAccount;
