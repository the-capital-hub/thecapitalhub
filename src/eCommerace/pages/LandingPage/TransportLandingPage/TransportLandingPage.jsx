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
import tchLogo from "../../../../Images/RoundLogo.png";
import ContactForm from "../../../Components/Shared/ContactForm/ContactForm";
import ServiceStats from "../../../Components/Shared/ServiceStats/ServiceStats";
import OurClients from "../../../Components/Shared/OurClients/OurClients";

function TransportLandingPage() {
  return (
    <div className="transport-landing-page container-fluid">
      <Helmet>
        <meta charSet="utf-8" />
        <title> Build your logistics application with Capital HUB!</title>
        <meta
          name="description"
          content="Experience efficient, sustainable, and reliable transportation solutions with Capital Hub. Send your belongings worldwide, with customizable pick-up and delivery options, and simplified logistics management. See why our customers trust us for their shipping needs."
        />
      </Helmet>

      {/* Hero section */}
      <div className="container mx-auto first-section d-flex flex-column   ">
        <div className="inner-section d-flex flex-column justify-content-evenly flex-md-row">
          <div className="left-section d-flex flex-column justify-content-center gap-4">
            {/* <h6>#1 Logistic Platform</h6> */}
            <h1> Build your logistics application with Capital HUB!</h1>
            <p>
              {/* Build your business as Capital HUB builds your application. Enable
              doorstep pickups and global deliveries and let your worries take a
              backseat. */}
              Supercharge your business while Capital HUB works our magic on
              your application. Embrace door-to-door pickups and worldwide
              deliveries, and watch your worries fade away.
            </p>
            <div className="d-flex gap-3 mb-3">
              <Link to="" className="LinkBtn shadow-sm">
                Say Hello
              </Link>
              <Link to="" className="LinkBtn LinkBtn-white shadow-sm">
                Our Portfolio
              </Link>
            </div>
          </div>
          <div className="right-section">
            <img src={assets.twoMobile} alt="transport" />
          </div>
        </div>
        {/* working place on coustomer button */}
        <div className="img-button">{/* <button>Customers</button> */}</div>
      </div>

      {/* Service Stats */}
      <ServiceStats />

      <div className="second-section container mx-auto d-flex flex-column  justify-content-evenly flex-md-row p-5 align-items-center">
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
          <Link to="" className="LinkBtn">
            Get in touch
          </Link>
          {/* <div className="number-div d-flex flex-column  justify-content-evenly flex-md-row">
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
          </div> */}
        </div>
      </div>

      <div className="container mx-auto thired-section d-flex flex-column  justify-content-evenly flex-md-row align-items-center">
        <div className="left-section p-md-5  m-md-5  d-flex flex-column align-items-center align-items-md-start w-100">
          <h1>
            {/* Customizable Pick-Up and Delivery -&gt;  */} Customizable
            Pick-Up and Delivery Features
          </h1>
          <p>
            Empower your logistics experience by choosing pick-up and delivery
            locations in the application as per convenience. With our
            customizable options, you're in control for a seamless and
            personalized shipping experience"
          </p>
          <div className="buttons d-flex flex-column flex-md-row gap-2 align-items-center  py-auto ">
            <button>Efficient and sustainable transportation</button>
            <p className="arrow mt-3">&#x27F6;</p>
            <button>Applications for efficient transportations</button>
          </div>
        </div>
        <div className="right-section w-100">
          <img src={assets.map} alt="map" />
        </div>
      </div>

      <div className="container mx-auto short-description text-center">
        <h2 className="mx-auto">Pay your development fee in tranches</h2>
        <p className="text-center my-2 my-lg-4">
          Capital HUB supports the startup ecosystem by accepting payment in
          tranches of three. Final payment is made only after the product is
          complete.
        </p>
      </div>

      <div className="container mx-auto feature-cards flex-column flex-md-row">
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

      <div className="container mx-auto fourth-section  d-flex flex-column  justify-content-center align-items-center gap-5 flex-md-row">
        <div className="left-section">
          <img src={assets.singleMobile} alt="international" />
        </div>
        <div className="right-section d-flex flex-column gap-3">
          <h1>Streamlined Logistics Management</h1>
          <p>
            Simplify your logistics operations with our integrated platform. Our
            platform streamlines communication, tracking, and management for
            greater efficiency and control over all your logistics needs
          </p>
          <Link to="" className="LinkBtn">
            Contact Our Team
          </Link>
        </div>
      </div>

      <div className=" mx-auto help-cards flex-column flex-md-row flex-md-wrap ">
        <div className="help-card">
          <p className="count">01.</p>
          <h6 className="title">
            Stay Informed with Our Product Manager's Timely Insights and Updates
          </h6>

          {/* <Link to="/web-development" className="LinkBtn LinkBtn-blue">
            Contact Us
          </Link> */}
        </div>
        <div className="help-card">
          <p className="count">02.</p>
          <h6 className="title">
            Expert Tech Insights and recommendations from Our Core Team
          </h6>

          {/* <Link to="/web-development" className="LinkBtn">
            Contact Us
          </Link> */}
        </div>
        <div className="help-card">
          <p className="count">03.</p>
          <h6 className="title">
            Specialised and unique Startup Business Consulting That Sets You
            Apart
          </h6>

          {/* <Link to="/web-development" className="LinkBtn LinkBtn-blue">
            Contact Us
          </Link> */}
        </div>
        <div className="help-card">
          <p className="count">04.</p>
          <h6 className="title">
            Hassle-Free Deployment Managed by Capital HUB Team
          </h6>

          {/* <Link to="/web-development" className="LinkBtn">
            Contact Us
          </Link> */}
        </div>
      </div>
      {/* <div className="card_bg">
        <div className="join-us-card rounded-4 mx-auto ">
          <img
            className="rounded "
            src={pramodImg}
            width={350}
            alt="Cost Savings"
          />
          <div className="p-3  mx-auto text-center">
            <h5 className="mx-auto">Pramod Badiger</h5>
            <p className="fs-14 mx-auto">Connect with our expert</p>
            <Link
              to="https://www.linkedin.com/in/pramod-badiger-a3226618b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              className="LinkBtn btn btn-primary rounded-pill text-white px-4 py-1 fs-12 mx-auto"
            >
              Connect
            </Link>
          </div>
        </div>
      </div> */}

      <section className="container mx-auto contact-our-team row justify-content-around bg-black rounded-4 p-2 p-md-5 py-3 align-items-center">
        <div className="col-8 col-md-4">
          <img
            className="rounded-circle"
            src={pramodImg}
            width={250}
            height={250}
            style={{ objectFit: "cover" }}
            alt="Cost Savings"
          />
        </div>
        <div className="col-10 col-md-6 mt-3 mt-md-0 d-flex flex-column gap-3">
          <h3 className="text-white">
            "Dejection is a sign of failure but it becomes the cause of success"
          </h3>
          <p className="text-secondary">
            Founder and CEO of The Capital HUB, is a dynamic entrepreneur known
            for his innovative approach. He values structured processes but
            enjoys unscripted conversations, balancing formality and
            informality. Pramod is a visionary who dives deep into details and
            foresees the future, offering steadfast support to founders in
            shaping their dreams with conviction and individuality at Capital
            HUB.
          </p>
          <h4 className="text-light">Pramod Badiger</h4>
          <Link
            to="https://www.linkedin.com/in/pramod-badiger-a3226618b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="LinkBtn btn btn-primary rounded-pill text-white px-4 py-2 fs-12"
          >
            Connect with our Expert
          </Link>
        </div>
      </section>

      <div className="container mx-auto fifth-section  d-flex flex-column  justify-content-center align-items-center gap-5 flex-md-row">
        <div className="left-section d-flex flex-column gap-3">
          <h1>Be part of the Capital Hub Platform</h1>
          <img
            src={tchLogo}
            alt="Capital Hub"
            className="d-md-none mx-auto capital-hub-logo"
          />
          <p>
            {/* Working with Capital Hub gives you access to a community of 30+
            startup founders and 80+ angel investors to boost your network
            launch your startup ahead{" "} */}
            Joining Capital Hub unlocks a thriving ecosystem of 30+ visionary
            startup leaders and 80+ angel investors, propelling your startup
            into the fast lane of success!
          </p>
          <div className="d-flex gap-3 mb-3">
            <Link to="" className="LinkBtn shadow-sm">
              Get started
            </Link>
            <Link to="" className="LinkBtn LinkBtn-white shadow-sm">
              Our Portfolio
            </Link>
          </div>
        </div>

        <div className="right-section ">
          <img src={assets.bookingDetails} alt="international" />
        </div>
      </div>

      <div className="container mx-auto last-section">
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

      {/* OurClients */}
      <OurClients className="bg-dark" />

      {/* contact form */}
      <div className="container row m-0 mx-auto">
        <ContactForm className="col-12 col-md-8 mx-auto" />
      </div>
    </div>
  );
}

export default TransportLandingPage;
