import "./InvestorManageAccount.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import logoIcon from "../../../Images/manageAccount/Group 15186.svg";
import profileIcon from "../../../Images/investorIcon/profilePic.webp";
import profileIconRaghu from "../../../Images/aboutUs/Raghu.jpeg";
import profileIconRaju from "../../../Images/Rectangle 1895.png";

import { changePasswordAPI } from "../../../Service/user";
import { useEffect, useState } from "react";
import LogOutPopUp from "../../PopUp/LogOutPopUp/LogOutPopUp";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { logout } from "../../../Store/Action/userAction";
import { logout } from "../../../Store/features/user/userSlice";

const InvestorManageAccount = () => {
  const initialForm = {
    oldPassword: "",
    newPassword: "",
    confirmNewPassword: "",
  };
  const [changePasswordForm, setChangePasswordForm] = useState({
    ...initialForm,
  });
  const [message, setMessage] = useState(false);

  const onChangeFormHandler = (event) => {
    setMessage(false);
    const { name, value } = event.target;
    setChangePasswordForm((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const onSubmitChangePasswordHandler = (event) => {
    event.preventDefault();
    if (
      changePasswordForm.confirmNewPassword !== changePasswordForm.newPassword
    ) {
      return setMessage("Passwords don't match");
    }
    changePasswordAPI(changePasswordForm)
      .then(({ message }) => {
        setMessage(message);
        setChangePasswordForm(initialForm);
      })
      .catch(({ message }) => setMessage(message))
      .finally(() => setTimeout(() => setMessage(false), 3000));
  };

  useEffect(() => {
    document.title = "Manage Account | The Capital Hub";
  }, []);

  const [showLogoutPopup, setShowLogoutPopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogoutLogic = () => {
    dispatch(logout());
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="container-fluid manage_account_container">
      <div className="row">
        <div className="col">
          <SmallProfileCard className="mt-5 mt-xl-3" text={"Manage Account"} />
          <div className="box_container mt-4 row row-cols-1 row-cols-lg-2 row-cols-xl-3">
            <section className="col">
              <div className="change_password card">
                {/* Header */}
                <div className="d-flex align-items-center gap-2">
                  <div className="logo">
                    <img src={logoIcon} alt="img" />
                  </div>
                  <div className="header_text">Change Password</div>
                </div>
                <hr />
                {/* Body */}
                <form
                  onSubmit={onSubmitChangePasswordHandler}
                  className="d-flex flex-column"
                >
                  <div className="form-input col">
                    <label htmlFor="oldPassword">Old Password</label>
                    <input
                      id="oldPassword"
                      type="text"
                      value={changePasswordForm.oldPassword}
                      onChange={onChangeFormHandler}
                      name="oldPassword"
                      required
                    />
                  </div>
                  <div className="form-input col">
                    <label htmlFor="newPassword">New Password</label>
                    <input
                      id="newPassword"
                      type="password"
                      name="newPassword"
                      value={changePasswordForm.newPassword}
                      onChange={onChangeFormHandler}
                      required
                    />
                  </div>
                  <div className="form-input col">
                    <label htmlFor="confirmNewPassword">Confirm Password</label>
                    <input
                      id="confirmNewPassword"
                      type="password"
                      name="confirmNewPassword"
                      value={changePasswordForm.confirmNewPassword}
                      onChange={onChangeFormHandler}
                      required
                    />
                  </div>
                  {/* Footer */}
                  <div className="footer w-100">
                    {message && <p className="text-center">{message}</p>}
                    <button type="submit" className="w-100">
                      Save Changes
                    </button>
                  </div>
                </form>
              </div>
            </section>

            <section className="col">
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

            <section className="col card empty_box">
              <button className="btn logout-btn" onClick={setShowLogoutPopup}>
                Log out
              </button>
              {showLogoutPopup && (
                <LogOutPopUp
                  setShowLogoutPopup={setShowLogoutPopup} // Make sure this prop is passed correctly
                  handleLogoutLogic={handleLogoutLogic}
                  showLogoutPopup
                />
              )}
              {/* <div className="d-flex align-items-center">
                <div className="logo">
                  <img src={logoIcon} alt="img" />
                </div>
                <div className="header_text">Accounts</div>
              </div>
              <p>
                Add another account - so you can switch between them easily.
              </p>
              <section className="existing_accounts">
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
                        <img src={profileIconRaghu} alt="img" />
                      </div>
                      <div className="name_email">
                        <h4>Raghu</h4>
                        <h6>raghu@gmail.com</h6>
                      </div>
                    </div>
                  </div>
                  <div className="right_section">
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
                        <img src={profileIconRaju} alt="img" />
                      </div>
                      <div className="name_email">
                        <h4>Raju Prasain</h4>
                        <h6>raju@gmail.com</h6>
                      </div>
                    </div>
                  </div>
                  <div className="right_section">
                    <label className="checkbox_container">
                      <input type="checkbox" />
                      <span className="checkmark"></span>
                    </label>
                  </div>
                </div>
              </section> */}
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorManageAccount;
