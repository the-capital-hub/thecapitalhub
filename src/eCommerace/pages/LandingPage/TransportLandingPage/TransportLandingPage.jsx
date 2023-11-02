import React from "react";
import assets from "../../../../Images/Ecommerace/TransportLandingPage/index";
import "./TransportLandingPage.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  InvestEasy,
  Diversify,
  InsureRight,
} from "../../../../Images/Ecommerace/FtechlandingPage";
import pramodImg from "../../../../Images/aboutUs/Pramod.jpeg";

function TransportLandingPage() {
  return (
    <div className="transport-landing-page container container-md-fluid">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Build your logistics application with Capital HUB!</title>
        <meta
          name="description"
          content="  Experience efficient, sustainable, and reliable transportation solutions with
The Capital Hub. Send your belongings worldwide, with customizable pick-up and delivery
options, and simplified logistics management. See why our customers trust us for their
shipping needs."
        />
      </Helmet>
      <div className="first-section d-flex flex-column   ">
        <div className="inner-section d-flex flex-column  justify-content-evenly flex-md-row">
          <div className="left-section  d-flex flex-column justify-content-evenly  ">
            {/* <h6>#1 Logistic Platform</h6> */}
            <h1> Build your logistics application with Capital HUB!</h1>
            <p>
              Build your business as Capital HUB builds your application. Enable
              doorstep pickups and global deliveries and let your worries take a
              backseat.
            </p>
            <Link to="/web-development" className="LinkBtn">
              Contact us
            </Link>
          </div>
          <div className="right-section">
            <img src={assets.twoMobile} alt="transport" />
          </div>
        </div>
        {/* working place on coustomer button */}
        <div className="img-button">{/* <button>Customers</button> */}</div>
      </div>

      <div className="second-section container d-flex flex-column  justify-content-evenly flex-md-row p-5 align-items-center">
        <div className="left-section  ">
          <img src={assets.mobileLocation} alt="white-truck" />
        </div>
        <div className="right-section d-flex flex-column">
          <h1> Building efficient transportation applications</h1>
          <p>
            Our shared vision and mission in building logistics applications are
            dedicated to connecting businesses and individuals, ensuring timely
            deliveries, fostering global connectivity, and prioritizing customer
            satisfaction and environmental responsibility
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id. it purus ante
            dictum in malesuada id.
          </p> */}
          <Link to="/web-development" className="LinkBtn">
            Contact us page of Capital Hub
          </Link>
          <div className="number-div d-flex flex-column  justify-content-evenly flex-md-row">
            <div className="users">
              <h3>255k+</h3>
              <p>User’s use app</p>
            </div>
            <div className="features">
              <h3>100+</h3>
              <p>Features in apps</p>
            </div>
            <div className="rating">
              <h3>5.0</h3>
              <p>Rating for app</p>
            </div>
          </div>
        </div>
      </div>

      <div className="thired-section d-flex flex-column  justify-content-evenly flex-md-row align-items-center">
        <div className="left-section p-md-5  m-md-5  d-flex flex-column align-items-center align-items-md-start w-100">
          <h1>
            Customizable Pick-Up and Delivery -> Customizable Pick-Up and
            Delivery Features
          </h1>
          <p>
            Empower your logistics experience by choosing pick-up and delivery
            locations in the application as per convenience. With our
            customizable options, you're in control for a seamless and
            personalized shipping experience"
          </p>
          <div className="buttons d-flex flex-column flex-md-row gap-2 align-items-center  py-auto ">
            <button>efficient and sustainable transportation</button>
            <p className="mt-3">&#x27F6;</p>
            <button>Applications for efficient transportations</button>
          </div>
        </div>
        <div className="right-section w-100">
          <img src={assets.map} alt="map" />
        </div>
      </div>

      <div className="short-description text-center">
        <h2 className="mx-auto">Pay your development fee in tranches</h2>
        <p className="text-center my-2 my-lg-4">
          Capital HUB supports the startup ecosystem by accepting payment in
          tranches of three. Final payment is made only after the product is
          complete.
        </p>
      </div>

      <div className="feature-cards flex-column flex-md-row">
        <div className="feature-card">
          <img src={InsureRight} alt="Insure Right" />
          <h6>Simple Landing Page</h6>
          <p>₹15,000 - ₹30,000*</p>
        </div>
        <div className="feature-card">
          <img src={Diversify} alt="Diversify Well" />
          <h6> Full-Fledged web application</h6>
          <p>₹50,000 - ₹2,00,000*</p>
        </div>
        <div className="feature-card">
          <img src={InvestEasy} alt="Invest Easy" />
          <h6>Web application plus mobile application</h6>
          <p>₹2,00,000 - ₹5,00,000*</p>
        </div>
      </div>

      <div className="fourth-section  d-flex flex-column  justify-content-center align-items-center gap-5 flex-md-row">
        <div className="left-section">
          <img src={assets.singleMobile} alt="international" />
        </div>
        <div className="right-section d-flex flex-column gap-5">
          <h1>Streamlined Logistics Management</h1>
          <p>
            Simplify your logistics operations with our integrated platform. Our
            platform streamlines communication, tracking, and management for
            greater efficiency and control over all your logistics needs
          </p>
          <Link to="/web-development" className="LinkBtn">
            Contact us
          </Link>
        </div>
      </div>

      <div className="help-cards flex-column flex-md-row ">
        <div className="help-card">
          <p className="count">01.</p>
          <h6 className="title">Regular updates from our Product Manager</h6>

          <Link to="/web-development" className="LinkBtn">
            Taking Us
          </Link>
        </div>
        <div className="help-card">
          <p className="count">02.</p>
          <h6 className="title">Technical recommendation from core team</h6>

          <Link to="/web-development" className="LinkBtn">
            Taking Us
          </Link>
        </div>
        <div className="help-card">
          <p className="count">03.</p>
          <h6 className="title">
            Specialised and unique startup business consulting
          </h6>

          <Link to="/web-development" className="LinkBtn">
            Taking Us
          </Link>
        </div>
        <div className="help-card">
          <p className="count">04.</p>
          <h6 className="title">Deployment handled by the Capital HUB team</h6>

          <Link to="/web-development" className="LinkBtn">
            Taking Us
          </Link>
        </div>
      </div>
      <div className="card_bg">
        <div className="join-us-card rounded-4 mx-auto ">
          <img
            className="rounded "
            src={pramodImg}
            width={350}
            alt="Cost Savings"
          />
          <div className="p-3  mx-auto text-center">
            <h6 className="mx-auto">pramod Badiger</h6>
            <p className="fs-14 mx-auto">Connect with our expert</p>
            <Link
              to="https://www.linkedin.com/in/pramod-badiger-a3226618b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="LinkBtn btn btn-primary rounded-pill text-white px-4 py-1 fs-12 mx-auto"
            >
              Connect
            </Link>
          </div>
        </div>
      </div>

      <div className="fifth-section  d-flex flex-column  justify-content-center align-items-center gap-5 flex-md-row">
        <div className="left-section d-flex flex-column gap-5">
          <h1>Be part of the Capital Hub Platform</h1>
          <p>
            Working with Capital Hub gives you access to a community of 30+
            startup founders and 80+ angel investors to boost your network
            launch your startup ahead{" "}
          </p>
          <Link to="/web-development" className="LinkBtn">
            Contact us
          </Link>
        </div>

        <div className="right-section ">
          <img src={assets.bookingDetails} alt="international" />
        </div>
      </div>

      <div className="last-section">
        {/* <div className="left-section">
          <h1>What our Customer’s say about us</h1>
          <p>What our Customer’s say about us</p>
            <button>View more</button> 
          <p>
            The Capital Hub has consistently delivered on their promise of
            reliable logistics solutions. Their services have earned our trust,
            satisfaction, and peace of mind. They are our preferred logistics
            partner.
          </p>
          <p>
            Choosing The Capital Hub for our logistics needs has been a
            game-changer. Their efficient services have led to complete
            satisfaction and peace of mind. We rely on them for all our shipping
            requirements
          </p>
        </div> */}
        {/* <div className="right-section">
            <p>I loved there work because of the staff working very carefully and the transport is the good i liked there wotk</p>
            <hr />
            <div className="user-data">
                <div className="user-name">
                <img src="" alt="" />
                <h4><i>Priya</i></h4>
                </div>
                <div className="changing-btn">
                    <button></button>
                    <button></button>
                </div>
            </div>
        </div> */}
      </div>
    </div>
  );
}

export default TransportLandingPage;
