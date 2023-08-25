import profilePic from "../../../Images/investorIcon/profilePic.webp";
import AddUserIcon from "../../../Images/investorIcon/Add-User.svg";
import { Link } from "react-router-dom";
import CompanyDetailsCard from "../../../components/Investor/InvestorGlobalCards/CompanyDetails/CompanyDetailsCard";
import { useSelector } from "react-redux";
import MileStoneCard from "../../../components/Investor/InvestorGlobalCards/MilestoneCard/MileStoneCard";
import "./Profile.scss";
import { useParams } from "react-router-dom";
import { getUserById } from "../../../Service/user";
import { useState, useEffect } from "react";
import ColorCard from "../../../components/Investor/InvestorGlobalCards/ColoredCards/ColorCard";
import CoinIcon from "../../../Images/investorView/Rectangle.png";

function Profile() {
  const { username } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserById(username)
      .then(({data}) => {
        setUser(data);
      })
      .catch(() => setUser([]));
  }, [username]);
  return (
    <div className="container-fluid profile_main_container">
      <div className="row mt-2">
        <div className="col mb-5">
          <div className="row">
            <div className="col-12 mt-2">
              <div className=" box ">
                <div className="row">
                  <div className="col-7">
                    <div className="image_name_section mt-2">
                      <img
                        className="rounded-cirlce"
                        src={user?.profilePicture}
                        alt="profileimage"
                      />
                      <div className="left_profile_text flex_content ms-3">
                        <h2 className="typography">
                          {user?.firstName} {user?.lastName}
                        </h2>
                        <span className="small_typo">
                          {user?.designation || `Founder & CEO of capital Hub`}
                        </span>
                        <span className="small_typo" style={{ display: "block" }}> {user?.location}</span>
                      </div>
                    </div>
                  </div>
                  {/* <div className="col-5">
                    <div className="connect_btn m-4">
                      <button>
                        <img src={AddUserIcon} />
                        <span>Connect</span>
                      </button>
                    </div>
                  </div> */}
                </div>
                <hr className="divider_hr" />
                <div className="row">
                  <div className="designation mt-2">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <strong className="designation_list">
                              Current company
                            </strong>
                          </td>
                          <td
                            className="small_typo"
                            style={{ marginBottom: "1rem" }}
                          >
                            {user.company}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong className="designation_list">
                              Designation
                            </strong>
                          </td>
                          <td
                            className="small_typo"
                            style={{ marginBottom: "1rem" }}
                          >
                            {user?.designation}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong className="designation_list">
                              Education
                            </strong>
                          </td>
                          <td
                            className="small_typo"
                            style={{ marginBottom: "1rem" }}
                          >
                            {user?.education}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong className="designation_list">
                              Experience
                            </strong>
                          </td>
                          <td
                            className="small_typo"
                            style={{ marginBottom: "1rem" }}
                          >
                            {user?.experience}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-2">
              <div className=" box ">
                <div className="personal_information_header">
                  <h2 className="typography">Personal Information</h2>
                </div>
                <div className="col-12 mt-2">
                  <div className="designation_info">
                    <table>
                      <tbody>
                        <tr>
                          <td>
                            <strong className="designation_list">
                              Firstname
                            </strong>
                          </td>
                          <td
                            className="small_typo"
                            style={{ marginBottom: "1rem" }}
                          >
                            {user?.firstName}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong className="designation_list">
                              LastName
                            </strong>
                          </td>
                          <td
                            className="small_typo"
                            style={{ marginBottom: "1rem" }}
                          >
                            {user?.lastName}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong className="designation_list">Email</strong>
                          </td>
                          <td
                            className="small_typo"
                            style={{ marginBottom: "1rem" }}
                          >
                            {user?.email}
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <strong className="designation_list">
                              Mobile number
                            </strong>
                          </td>
                          <td
                            className="small_typo"
                            style={{ marginBottom: "1rem" }}
                          >
                            {user?.phoneNumber}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-2">
              <div className=" box">
                <div className="personal_information_header">
                  <h2 className="typography">Bio</h2>
                </div>
                <div className="col-12 mt-2">
                  <div className="designation_info">
                    <p className="small_typo">
                      {/* A little about myself. “Dejection is a sign of failure but
                      it becomes the cause of success”. I wrote this when I was
                      16 years old and that’s exactly when I idealised the
                      reality of life. In this current world, success is defined
                      in many ways, some of which include money, fame and power.
                      I believe that success is just the beginning of a new
                      problem. Every step of our lives we work hard to solve an
                      issue and every time we end up with a new problem. */}
                      {user?.bio}
                    </p>
                  </div>
                </div>
                <div className="col-12 mt-2 designation_see_more">
                  <Link to={"/"}>See more</Link>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 mt-2">
              <div className=" box">
                <div className="personal_information_header">
                  <h2 className="typography">Milestones</h2>
                  <div className="milestone_see_more">
                    <Link to={"/"}>See more</Link>
                  </div>
                </div>
                <div className="col-12 mt-2">
                  <MileStoneCard />
                </div>
              </div>
            </div>
          </div>
          <CompanyDetailsCard userDetails={user} />
          <div className="row">
            <div className="col-12 mt-2">
              <div className="card_holder">
                <ColorCard
                  color="white"
                  background="#BB98FF"
                  text="Last round investment"
                  image={CoinIcon}
                  amount={"500 M"}
                />
                <ColorCard
                  color="white"
                  background="#DAC191"
                  text="Total Investment"
                  image={CoinIcon}
                  amount={"500 M"}
                />
                <ColorCard
                  color="white"
                  background="#DCDCDC"
                  text="No.of Investers"
                  image={CoinIcon}
                  amount={"500 M"}
                />
                <ColorCard
                  color="white"
                  background="#2B2B2B"
                  text="Fund ask"
                  image={CoinIcon}
                  amount={"500 M"}
                />
                <ColorCard
                  color="white"
                  background="#FF7373"
                  text="Valuation"
                  image={CoinIcon}
                  amount={"500 M"}
                />
                <ColorCard
                  color="white"
                  background="#9198DA"
                  text="Raised funds"
                  image={CoinIcon}
                  amount={"500 M"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
