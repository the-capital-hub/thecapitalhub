import "./home.scss";
import GirlIcon from "../../Images/GirlIcons.png";
// import laptopIcon from "../../Images/Group 6.svg";
// import AngelIcon from "../../Images/Group 7.svg";
// import ManageTeamIcon from "../../Images/Group 8.svg";
// import ManageClientIcon from "../../Images/Group 9.svg";
// import ManageInvestortIcon from "../../Images/Group 10.svg";
// import MentorIcon from "../../Images/Group 13.svg";
import { Link } from "react-router-dom";
import WhyChooseUsCard from "../Card/Home/WhyChooseUs/WhyChooseUsCard";
// import OurStartUp from "./OurStartUp/OurStartUp";
// import CoInvestor from "./CoInvestor/CoInvestor";
// import OurCollabration from "./OurCollabration/OurCollabration";
import { featuresData } from "../../constants/LandingPageFeatures";
import Features from "../WebsiteComponents/LandingPage/Features/Features";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <div className="container mb-md-5">
        <div className="row">
          <div className="row">
            <div className="d-md-none d-flex col-md-4 image_section ">
              <img
                src={GirlIcon}
                alt="img1"
                className="mx-auto w-100"
                style={{ marginTop: 0 }}
              />
            </div>
            <div className=" col-md-8 title__text d-flex flex-column justify-content-center">
              <h1>
                Fund your next big idea into a &nbsp;
                <span style={{ color: "#FD5901" }}>startup now !</span>
              </h1>
              <h2>Register now as</h2>
              <div className="buttons_row">
                <Link to="/signup">
                  <button className="btn1 btn-primary">Start Up</button>
                </Link>
                <Link to="/signup">
                  <button className="btn2 btn-primary">Investor</button>
                </Link>
              </div>
            </div>
            <div className="d-none d-md-block col-md-4 image_section ">
              <img
                src={GirlIcon}
                alt="img1"
                className="mx-auto"
                width={"100%"}
              />
            </div>
          </div>
          <section className="welcome_section my-5 pt-3 pb-2">
            <h6>
              Welcome to The Capital Hub, Our integrated platform, where
              investors, startups, and professionals come together to unlock new
              opportunities and build meaningful connections. Whether your're
              seeking investment opportunities, looking to fund your startup, or
              eager to expand your network, our platform offers the perfect
              ecosystem to fulfill your goals
            </h6>
          </section>
          <div className="container section_container">
            <h2>
              Who are &nbsp;<span style={{ color: "#FD5901" }}>we ?</span>
            </h2>
            <section className="welcome_section">
              <h6>
                The Capital Hub team comprises exceptional individuals with a
                diveerse range of expertise, spanning investment banking,
                startup management banking, startup management, software
                development, advisory services, and more. Our collective
                dedication is aimed at empowering startups to flourish and
                thrive in today's dynamic market. Together, we are committed to
                providing the guidance and support needed for your startup to
                reach new heights of success.
              </h6>
            </section>
          </div>
        </div>
      </div>

      {/* Why Choose us */}
      <div className="container-fluid why_choose_us_container">
        <div className="container">
          <WhyChooseUsCard />
        </div>
      </div>

      {/* Features section */}
      <div className="container-fluid m-0 p-0">
        <div className="container my-0 mx-auto px-xl-0 px-3 py-4">
          <Features
            dataObject={featuresData.onelink}
            btnClass={"btn-purple"}
            ltr={true}
          />
          <Features
            dataObject={featuresData.angel}
            btnClass={"btn-green"}
            ltr={false}
          />
          <Features
            dataObject={featuresData.manageTeam}
            btnClass={"btn-purple"}
            ltr={true}
          />
          <Features
            dataObject={featuresData.manageClient}
            btnClass={"btn-green"}
            ltr={false}
          />
          <Features
            dataObject={featuresData.manageInvestor}
            btnClass={"btn-black"}
            ltr={true}
          />
          <Features
            dataObject={featuresData.growthive}
            btnClass={"btn-orange"}
            ltr={false}
          />
        </div>
      </div>

      {/* <div className="container-fluid our_startups_section mb-5">
        <OurStartUp />
      </div> */}

      {/* <div className="container-fluid our_investor_section">
        <CoInvestor />
      </div>

      <div className="container-fluid">
        <OurCollabration />
      </div> */}
    </>
  );
};

export default Home;
