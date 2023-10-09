import React from "react";
import assets from "../../../../Images/Ecommerace/TransportLandingPage/index";
import "./TransportLandingPage.scss";

function TransportLandingPage() {
  return (
    <div className="transport-landing-page container-fluid">
      <div className="first-section d-flex flex-column   ">
        <div className="inner-section d-flex flex-column  justify-content-evenly flex-md-row">
          <div className="left-section  d-flex flex-column justify-content-evenly  ">
            <h6>#1 Logistic Platform</h6>
            <h1>Sen Your Stuff Anywhere You Want With Us</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus Sit purus ante dictum in malesuada id. it
              purus ante dictum in malesuada id.
            </p>
            <button>Contact Us</button>
          </div>
          <div className="right-section">
            <img src={assets.transport} alt="transport" />
          </div>
        </div>
        {/* working place on coustomer button */}
        <div className="img-button">
          <button>Customers</button>
        </div>
      </div>

      <div className="second-section container d-flex flex-column  justify-content-evenly flex-md-row p-5 align-items-center">
        <div className="left-section  ">
          <img src={assets.whiteTruck} alt="white-truck" />
        </div>
        <div className="right-section d-flex flex-column">
          <h1>This is Our Shared Vision and Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.{" "}
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id. it purus ante
            dictum in malesuada id.
          </p>
          <button>Read more</button>
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
        <div className="left-section p-md-5  m-md-5  d-flex flex-column align-items-center align-items-md-start">
          <h1>Choose Where Your Items Are Picked Up And Delivered</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id. it purus ante
            dictum in malesuada id.
          </p>
          <div className="buttons d-flex flex-row gap-2 align-items-center  py-auto ">
            <button>Pickup Location</button>
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
          <h1>Connect Via One Platform</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus <br />
            Sit purus ante dictum in malesuada id. it purus ante dictum in
            malesuada id.
          </p>
          <button>Read more</button>
        </div>
      </div>

      <div className="fifth-section  d-flex flex-column  justify-content-center align-items-center gap-5 flex-md-row">
        <div className="left-section d-flex flex-column gap-5">
          <h1>From One Location to Another Location</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id. <br /> it purus
            ante dictum in malesuada id.
          </p>
          <button>Read more</button>
        </div>

        <div className="right-section">
          <img src={assets.location} alt="international" />
        </div>
      </div>

      <div className="last-section">
        <div className="left-section">
            <h1>What our Customer’s say about us</h1>
            <p>What our Customer’s say about us</p>
            <button>View more</button>
        </div>
        <div className="right-section">
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
        </div>
      </div>
    </div>
  );
}

export default TransportLandingPage;
