import profilePic from "../../../Images/investorView/Logo.png";
import saved from "../../../Images/investorView/saved.svg";
import CoinIcon from "../../../Images/investorView/Rectangle.png";

import LocationIcon from "../../../Images/investorView/location.svg";
import calenderIcon from "../../../Images/investorView/calenderIcon.svg";
import upgraphIcon from "../../../Images/investorView/upgraphIcon.svg";
import googleIcon from "../../../Images/investorView/Google svg(1).svg";
import fbIcon from "../../../Images/investorView/Facebook svg.svg";
import twIcon from "../../../Images/investorView/tw.svg";
import lnIcon from "../../../Images/investorView/ln.svg";
import feedbackIcon from "../../../Images/investorIcon/profilePic.svg";

import { useSelector } from "react-redux";
import "./company.scss";
import CardComponent from "./CardComponent/CardComponent";
import FeedbackCard from "./FeedbackCard/FeedbackCard";
import FundingTeamCard from "./FundingTeamCard/FundingTeamCard";
import { useParams } from "react-router-dom";
import { getOnePager } from "../../../Service/user";
import { useState, useEffect } from "react";

function Company() {
  const { username } = useParams();
  const [onePager, setOnePager] = useState([]);
  useEffect(() => {
    getOnePager(username)
      .then(({ data }) => {
        setOnePager(data);
      })
      .catch(() => setOnePager([]));
  }, [username]);
  return (
    <div className="container-fluid company_main_container">
      <div className="row mt-2">
        <div className="col">
          <div className="row">
            <div className="col-12 mt-2">
              <div className=" box ">
                <div className="row">
                  <div className="col-lg-7 col-md-12">
                    <div className="image_name_section mt-2">
                      <img src={onePager.profile || profilePic} alt="profileimage" />
                      <div className="left_profile_text flex_content ms-3">
                        <h2 className="typography">{onePager.company}</h2>
                        <span className="small_typo">The Finance company</span>
                        <div>
                          <span className="small_typo_location">
                            {" "}
                            <img src={LocationIcon} alt="location" /> {onePager.location}
                          </span>
                          <span className="small_typo_location">
                            {" "}
                            <img src={calenderIcon} alt="location" /> Founded in
                            , 2014
                          </span>
                          <span className="small_typo_location">
                            {" "}
                            <img src={upgraphIcon} alt="location" /> Last
                            Funding in May, 2023
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-5 right_buttons mobile_display_none">
                    <img src={saved} alt="saved" />
                    <div className="connect_btn m-4">
                      <button className="connect_founder">
                        Connect with the founder
                      </button>
                      <button className="invest_now">Invest Now</button>
                    </div>
                  </div>
                </div>
                <div className="row about_company_section">
                  <div className="col-lg-3 col-md-12 ">
                    <h1>About the Company:</h1>
                  </div>
                  <div className="col-lg-9 col-md-12">
                    <p>
                      {" "}
                      {/* Man's all about building great start-ups from a simple
                      idea to an elegant reality. Humbled and honored to have
                      worked with Angels and VC's across the globe to support
                      and grow the startup culture.With the vision of make in
                      India for the world, they design and build augmented
                      reality glasses for Defence, Enterprise, and Training
                      sectors. In addition to hardware, they also provide their
                      clients with end-to-end AR/VR/MR solutions that are
                      tailored to their business needs. */}
                      {onePager.description}
                    </p>
                  </div>
                </div>

                <div className="row card_section">
                  <CardComponent
                    color="white"
                    background="#BB98FF"
                    text="Company Title"
                    image={CoinIcon}
                    amount={"500 M"}
                  />

                  <CardComponent
                    color="white"
                    background="#DAC191"
                    text="Company Title"
                    image={CoinIcon}
                    amount={"500"}
                  />

                  <CardComponent
                    color="white"
                    background="#DCDCDC"
                    text="Company Title"
                    image={CoinIcon}
                    amount={"500"}
                  />
                  <CardComponent
                    color="white"
                    background="#8F85FF"
                    text="Company Title"
                    image={CoinIcon}
                    amount={"500"}
                  />
                </div>

                <div className="row revenue_section">
                  <h2>Revenue Statistics (FY19)</h2>
                  <div className="row card_section">
                    <CardComponent
                      color="white"
                      background="#2B2B2B"
                      text="Company Title"
                      image={CoinIcon}
                      amount={"500 M"}
                    />

                    <CardComponent
                      color="white"
                      background="#FF7373"
                      text="Company Title"
                      image={CoinIcon}
                      amount={"500"}
                    />

                    <CardComponent
                      color="white"
                      background="#9198DA"
                      text="Company Title"
                      image={CoinIcon}
                      amount={"500"}
                    />
                  </div>
                </div>
                <hr />
                <div className="row public_link_section">
                  <h2>Public Links</h2>
                  <div className="public_link">
                    <div className="social_icons">
                      <span>
                        <img src={googleIcon} alt="google" /> Google
                      </span>
                    </div>
                    <div className="social_icons">
                      <span>
                        <img src={fbIcon} alt="google" /> Facebook
                      </span>
                    </div>
                    <div className="social_icons">
                      <span>
                        <img src={twIcon} alt="google" /> Tweeter
                      </span>
                    </div>
                    <div className="social_icons">
                      <span>
                        <img src={lnIcon} alt="google" /> LinkedIn
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row feedback_section feedback_card_section">
                  <h2>Feedback</h2>
                  <div className="feedbackcard">
                    <FeedbackCard
                      image={feedbackIcon}
                      name="Pramod Badigar"
                      stars={4}
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo et nisl consectetur hendrerit. Fusce pharetra fringilla ligula, id rhoncus nisl imperdiet nec."
                    />
                    <FeedbackCard
                      image={feedbackIcon}
                      name="Pramod Badigar"
                      stars={4}
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo et nisl consectetur hendrerit. Fusce pharetra fringilla ligula, id rhoncus nisl imperdiet nec."
                    />
                    <FeedbackCard
                      image={feedbackIcon}
                      name="Pramod Badigar"
                      stars={4}
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo et nisl consectetur hendrerit. Fusce pharetra fringilla ligula, id rhoncus nisl imperdiet nec."
                    />
                    <FeedbackCard
                      image={feedbackIcon}
                      name="Pramod Badigar"
                      stars={4}
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo et nisl consectetur hendrerit. Fusce pharetra fringilla ligula, id rhoncus nisl imperdiet nec."
                    />
                  </div>
                </div>

                <div className="row fundingteam_section fundingteam_card_section">
                  <h2>Founding Team</h2>
                  <div className="fundingteamcard">
                    <FundingTeamCard
                      image={feedbackIcon}
                      name="Pramod Badigar"
                      age={30}
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo et nisl consectetur hendrerit. Fusce pharetra fringilla ligula, id rhoncus nisl imperdiet nec."
                    />
                    <FundingTeamCard
                      image={feedbackIcon}
                      name="Pramod Badigar"
                      age={30}
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo et nisl consectetur hendrerit. Fusce pharetra fringilla ligula, id rhoncus nisl imperdiet nec."
                    />
                    <FundingTeamCard
                      image={feedbackIcon}
                      name="Pramod Badigar"
                      age={30}
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo et nisl consectetur hendrerit. Fusce pharetra fringilla ligula, id rhoncus nisl imperdiet nec."
                    />
                    <FundingTeamCard
                      image={feedbackIcon}
                      name="Pramod Badigar"
                      age={30}
                      paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vel justo et nisl consectetur hendrerit. Fusce pharetra fringilla ligula, id rhoncus nisl imperdiet nec."
                    />
                  </div>
                </div>

                <div className="row key_focus_section">
                  <h2>Key Focusing Area</h2>
                  <div className="focus_things">
                    <div className="focusItem">
                      <span>Fainance</span>
                    </div>
                    <div className="focusItem">
                      <span>3D Scanning</span>
                    </div>
                    <div className="focusItem">
                      <span>Augmented Reality AR</span>
                    </div>
                    <div className="focusItem">
                      <span>Virtual Reality VR</span>
                    </div>
                    <div className="focusItem">
                      <span>Artifical Inteligence</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Company;
