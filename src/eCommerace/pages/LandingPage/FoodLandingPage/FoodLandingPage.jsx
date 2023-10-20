import React from "react";
import "./foodLandingPage.scss";
import assets from "../../../../Images/Ecommerace/FoodLandingPage/index";
import Reviewcarousel from "../../../../components/ECommerace/FoodLandingPage/ReviewCarousel/Reviewcarousel";
import ScrollableComponent from "../../../../components/ECommerace/FoodLandingPage/ScrollableComponent/ScrollableComponent";
import { Helmet } from 'react-helmet';
function FoodLandingPage() {
  const reviews = [
    {
      text: "Our dining experience at The Capital Hub was exceptional. Delicious food beautifully presented with fresh, high-quality ingredients. Impeccable service and a cozy, welcoming atmosphere. We'll be back for more!",
      star: 1,
      img: assets.JackSon,
      name: "Jack Son",
      work: "UI Designer",
    },
    {
      text: "We were delighted with our recent food order from The Capital Hub! Exquisite flavors, top-notch presentation, and prompt, hot, and fresh delivery. Thank you for consistently delivering such delicious meals to our doorstep. We'll definitely be ordering again!",
      star: 2,
      img: assets.JackSon,
      name: "Jack Son",
      work: "UI Designer",
    },
    {
      text: "Our dining experience at The Capital Hub was exceptional. Delicious food beautifully presented with fresh, high-quality ingredients. Impeccable service and a cozy, welcoming atmosphere. We'll be back for more!",
      star: 3,
      img: assets.JackSon,
      name: "Jack Son",
      work: "UI Designer",
    },
    {
      text: "We were delighted with our recent food order from The Capital Hub! Exquisite flavors, top-notch presentation, and prompt, hot, and fresh delivery. Thank you for consistently delivering such delicious meals to our doorstep. We'll definitely be ordering again!",
      star: 4,
      img: assets.JackSon,
      name: "Jack Son",
      work: "UI Designer",
    },
    {
      text: "Our dining experience at The Capital Hub was exceptional. Delicious food beautifully presented with fresh, high-quality ingredients. Impeccable service and a cozy, welcoming atmosphere. We'll be back for more!",
      star: 5,
      img: assets.JackSon,
      name: "Jack Son",
      work: "UI Designer",
    },
    {
      text: "We were delighted with our recent food order from The Capital Hub! Exquisite flavors, top-notch presentation, and prompt, hot, and fresh delivery. Thank you for consistently delivering such delicious meals to our doorstep. We'll definitely be ordering again!",
      star: 0,
      img: assets.JackSon,
      name: "Jack Son",
      work: "UI Designer",
    },
  ];

  return (
    <div className="landing-page container-fluid">
<Helmet>
        <meta charSet="utf-8" />
        <title>Food-Tech</title>
        <meta name="description" content="Discover a world of culinary convenience with our food tech platform.
Order delicious meals, reserve tables, connect with fellow foodies, and track your orders
seamlessly. Get up to 50% off during the festival season. Prioritize your well-being with our
high-quality, delicious, and fresh ingredients. Join our satisfied customers who have
experienced exceptional dining and food delivery. Order from The Capital Hub today!" />
      </Helmet>
      <div className="frist-section d-flex flex-column  justify-content-evenly flex-md-row ">
        <div className="left-section d-flex flex-column justify-content-evenly md-p-3   ">
          <p className="fw-bold"># 1 Food Delivery Services</p>
          <h1>Fresh Food At </h1>
          <h1 className="text-orange">Your Fingertips</h1>
          <h6>
          Elevate Your Culinary Adventures with Capital HUB
          </h6>
          <button>Order now</button>
        </div>
        <div className="right-section py-2    d-flex justify-content-evenly">
          <img src={assets.multifoods} alt="multiFood" />
        </div>
        <img src={assets.downArrow} alt="downArrow" className="down-arrow" />
      </div>

      <div className="second-section d-flex flex-column align-items-center  container ">
        <h3>Best Features</h3>
        <h1>Our Best Features For You</h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
          proin risus Sit purus ante dictum in malesuada id.
        </p> */}
        <div className="main-box d-flex flex-column  justify-content-center flex-md-row ">
          <div className="inner-box">
            <img src={assets.foodBox} alt="foodBox" />
            <h5>Order Food with Ease</h5>
            <p>
            Satisfy your cravings with just a few clicks! Our food tech platform delivers
delicious meals right to your doorstep, providing unmatched convenience
            </p>
          </div>

          <div className="inner-box">
            <img src={assets.roundBox} alt="roundBox" />
            <h5>"Book Tables at Top Restaurants</h5>
            <p>
            "Reserve your seat effortlessly and indulge in culinary excellence at the finest
restaurants in town. Elevate your dining experience with our user-friendly 'book table'
feature.
            </p>
          </div>

          <div className="inner-box">
            <img src={assets.Group} alt="Group" />
            <h5>Connect with Foodies</h5>
            <p>
            Join our vibrant foodie community to share recipes, discover hidden gems,
and savour the joy of food together. Connect with like-minded culinary enthusiasts.
            </p>
          </div>

          <div className="inner-box">
            <img src={assets.box} alt="box" />
            <h5>Track Your Order in Real-Time</h5>
            <p>
            "Stay informed with transparent, real-time order tracking. Witness your meal's
journey from the kitchen to your doorstep with precision at your fingertips
            </p>
          </div>
        </div>
      </div>

      <div className="third-section d-flex   justify-content-center flex-column flex-md-row">
        <div className="left-section">
          <h6>Best Features</h6>
          <h1>
            Get Upto <span>50%</span> Offers On
          </h1>
          <h1>Festival Season!</h1>
          <p>
          Celebrate the festive spirit with joy and savings! Enjoy exclusive offers of up
to 50% off on a wide range of products and experiences during this festival season. Don't
miss out.
          </p>
          <button>Order now</button>
        </div>
        <div className="right-section">
          <img src={assets.foodVessel} alt="foodVessel" className="w-75 mb-5" />
        </div>
      </div>

      <div className="forth-section d-flex flex-column ">
        <h4 className="mx-auto mt-5 mb-3">About Us</h4>
        <div className="inner d-flex flex-column   align-self-center flex-md-row">
          <div className="left-section d-flex    justify-content-center flex-column">
            <img
              src={assets.womenWithFood}
              alt="womenWithFood"
              className="w-75 mb-5 mx-auto"
            />
          </div>
          <div className="right-section d-flex    align-self-center flex-column container">
            <h1>"High-Quality Food for Your Health</h1>
            <p>
            Description 6: "Prioritize your well-being with our commitment to providing the highest quality
food. Nourish your body and delight your taste buds with the harmonious pairing of health
and taste
            </p>
            <button>Learn more</button>
          </div>
        </div>
      </div>
      <div className=" two-scroll-section  ">
        <h1>
          Menu That Always Make <br /> You Fall In Love
        </h1>
        <ScrollableComponent />
        <div className=" d-flex justify-content-center  my-3">
          <button className="">View more</button>
        </div>
      </div>
      <div className="fifth-section">
        <h1>See What Our Lovely</h1>
        <h1>
          <span>Customer</span> Says About Us
        </h1>
        <Reviewcarousel reviews={reviews} />
      </div>
      <div className="last text-center m-5">
        <h1>Subscribe Now</h1>
        {/* <p>
          Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
          proin risus Sit purus ante dictum in malesuada id.{" "}
        </p> */}

        <div className=" input-div rounded-pill d-flex  shadow-lg  flex-row mx-md-auto ">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter Your Email "
            className=" flex-grow-1 rounded-pill px-2"
          />
          <button className="rounded-pill">Subscribe</button>
        </div>
      </div>
    </div>
  );
}

export default FoodLandingPage;
