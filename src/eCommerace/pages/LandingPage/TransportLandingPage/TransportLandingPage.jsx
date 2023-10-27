import React from "react";
import assets from "../../../../Images/Ecommerace/TransportLandingPage/index";
import "./TransportLandingPage.scss";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


function TransportLandingPage() {
  return (
<div className="transport-landing-page container container-md-fluid">
        <Helmet>
        <meta charSet="utf-8" />
        <title>Seamless Logistics Solutions for All Your Shipping Needs</title>
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
            <h6>#1 Logistic Platform</h6>
            <h1>Seamless Logistics Solutions </h1>
            <p>
            From doorstep pickups to global deliveries, entrust your shipments to our reliable services and let your worries take a back seat.
            </p>
            <Link to="/web-development" className="LinkBtn">Taking Us</Link>
          </div>
          <div className="right-section">
            <img src={assets.transport} alt="transport" />
          </div>
        </div>
        {/* working place on coustomer button */}
        <div className="img-button">{/* <button>Customers</button> */}</div>
      </div>

      <div className="second-section container d-flex flex-column  justify-content-evenly flex-md-row p-5 align-items-center">
        <div className="left-section  ">
          <img src={assets.whiteTruck} alt="white-truck" />
        </div>
        <div className="right-section d-flex flex-column">
          <h1>Efficient and Sustainable Transportation</h1>
          <p>
            Our shared vision and mission in logistics are dedicated to
            creating efficient, sustainable, and seamless transportation
            solutions. We connect businesses and individuals, ensuring timely
            deliveries, fostering global connectivity, and prioritizing customer
            satisfaction and environmental responsibility
          </p>
          {/* <p>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id. it purus ante
            dictum in malesuada id.
          </p> */}
          <Link to="/web-development" className="LinkBtn">Taking Us</Link>
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
          <h1>Customizable Pick-Up and Delivery</h1>
          <p>
            Empower your logistics experience by choosing pick-up and delivery
            locations that suit your convenience. With our customizable options,
            you're in control for a seamless and personalized shipping
            experience
          </p>
          <div className="buttons d-flex flex-column flex-md-row gap-2 align-items-center  py-auto ">
            <button>Streamlined Logistics Management</button>
            <p className="mt-3">&#x27F6;</p>
            <button>Destination Location</button>
          </div>
        </div>
        <div className="right-section w-100">
          <img src={assets.map} alt="map" />
        </div>
      </div>

      <div className="fourth-section  d-flex flex-column  justify-content-center align-items-center gap-5 flex-md-row">
        <div className="left-section">
          <img src={assets.international} alt="international" />
        </div>
        <div className="right-section d-flex flex-column gap-5">
          <h1>Streamlined Logistics Management</h1>
          <p>
            Simplify your logistics operations with our integrated platform.
            Our platform streamlines communication, tracking, and management for
            greater efficiency and control over all your logistics needs
          </p>
          <Link to="/web-development" className="LinkBtn">Taking Us</Link>
        </div>
      </div>

      <div className="fifth-section  d-flex flex-column  justify-content-center align-items-center gap-5 flex-md-row">
        <div className="left-section d-flex flex-column gap-5">
          <h1>Global Delivery Expertise</h1>
          <p>
            Efficiently bridge the gap from one location to another with our
            logistics expertise. Whether it's across the city or around the
            globe, we're your trusted partner for seamless and reliable
            deliveries.
          </p>
          <Link to="/web-development" className="LinkBtn">Taking Us</Link>
        </div>

        <div className="right-section">
          <img src={assets.location} alt="international" />
        </div>
      </div>

      <div className="last-section">
        <div className="left-section">
          <h1>What our Customer’s say about us</h1>
          {/* <p>What our Customer’s say about us</p>
            <button>View more</button> */}
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
        </div>
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
