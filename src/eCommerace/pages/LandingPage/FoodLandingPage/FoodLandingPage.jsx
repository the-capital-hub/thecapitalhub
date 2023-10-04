import React from "react";
import "./foodLandingPage.scss";
import assets from "../../../../Images/Ecommerace/FoodLandingPage/index";

function FoodLandingPage() {
  return (
    <div className="landing-page container-fluid">
      <div className="frist-section d-flex flex-column  justify-content-evenly flex-md-row ">
        <div className="left-section d-flex flex-column justify-content-evenly md-p-3   ">
          <p className="fw-bold"># 1 Food Delivery Services</p>
          <h1>Fresh Food At </h1>
          <h1 className="text-orange">Your Fingertips</h1>
          <h6>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.
          </h6>
          <button>Order now</button>
        </div>
        <div className="right-section py-2    d-flex justify-content-evenly">
          <img src={assets.multifoods} alt="multiFood" />
        </div>
        <img src={assets.downArrow} alt="downArrow" className="d-none" />
      </div>

      <div className="second-section d-flex flex-column align-items-center   ">
        <h3>Best Features</h3>
        <h1>Our Best Features For You</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
          proin risus Sit purus ante dictum in malesuada id.
        </p>
        <div className="main-box d-flex flex-column  justify-content-center flex-md-row ">
          <div className="inner-box">
            <img src={assets.foodBox} alt="foodBox" />
            <h5>Order Food</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus Sit purus ante dictum in malesuada id.
            </p>
          </div>

          <div className="inner-box">
            <img src={assets.roundBox} alt="roundBox" />
            <h5>Book Table</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus Sit purus ante dictum in malesuada id.
            </p>
          </div>

          <div className="inner-box">
            <img src={assets.Group} alt="Group" />
            <h5>Connect With Foodies</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus Sit purus ante dictum in malesuada id.
            </p>
          </div>

          <div className="inner-box">
            <img src={assets.box} alt="box" />
            <h5>Track Your Order</h5>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus Sit purus ante dictum in malesuada id.
            </p>
          </div>
        </div>
      </div>

      <div className="third-section d-flex flex-column  justify-content-center flex-md-row">
        <div className="left-section">
          <h6>Best Features</h6>
          <h1>
            Get Upto <span>50%</span> Offers On
          </h1>
          <h1>Festival Season!</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
            proin risus Sit purus ante dictum in malesuada id.{" "}
          </p>
          <button>Order now</button>
        </div>
        <div className="right-section">
          <img src={assets.foodVessel} alt="foodVessel" className="w-75" />
        </div>
      </div>

      <div className="forth-section d-flex flex-column ">
        <h5 className="mx-auto my-5">About Us</h5>
        <div className="inner d-flex flex-column   align-self-center flex-md-row">
          <div className="left-section d-flex    justify-content-center flex-column">
            <img src={assets.womenWithFood} alt="womenWithFood" className="w-75 mx-auto" />
          </div>
          <div className="right-section d-flex    align-self-center flex-column">
            <h1>The Best Quality Food For Your Health</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur. At consequat purus
              hendrerit proin risus Sit purus ante dictum in malesuada id.{" "}
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>

      <div className="last text-center m-5">
        <h1>Subscribe Now</h1>
        <p>Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit proin risus Sit purus ante dictum in malesuada id. </p>

        <div className=" input-div rounded-pill d-flex w-25 shadow-lg mx-auto">
          <input type="text" name="search" id="search" placeholder="Enter Your Email " className=" flex-grow-1 rounded-pill px-2"/>
          <button className="rounded-pill">Subscribe</button>
        </div>

      </div>
    </div>
  );
}

export default FoodLandingPage;
