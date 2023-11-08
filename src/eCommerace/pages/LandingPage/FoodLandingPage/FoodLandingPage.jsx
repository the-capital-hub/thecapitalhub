import React from "react";
import "./foodLandingPage.scss";
import assets from "../../../../Images/Ecommerace/FoodLandingPage/index";
// import Reviewcarousel from "../../../../components/ECommerace/FoodLandingPage/ReviewCarousel/Reviewcarousel";
// import ScrollableComponent from "../../../../components/ECommerace/FoodLandingPage/ScrollableComponent/ScrollableComponent";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import {
  InvestEasy,
  Diversify,
  InsureRight,
} from "../../../../Images/Ecommerace/FtechlandingPage";
import pramodImg from "../../../../Images/aboutUs/Pramod.jpeg";
import ContactForm from "../../../Components/Shared/ContactForm/ContactForm";
import ServiceStats from "../../../Components/Shared/ServiceStats/ServiceStats";
import OurClients from "../../../Components/Shared/OurClients/OurClients";

function FoodLandingPage() {
  const scrollToContact = () => {
    const contactElement = document.getElementById("contact-us");
    if (contactElement) {
      window.scrollTo({
        top: contactElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

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
    <div className="food_landing-page_Container container-fluid">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Build your food delivery application with Capital HUB!</title>
        <meta
          name="description"
          content="Discover a world of culinary convenience with our food tech platform.
Order delicious meals, reserve tables, connect with fellow foodies, and track your orders
seamlessly. Get up to 50% off during the festival season. Prioritize your well-being with our
high-quality, delicious, and fresh ingredients. Join our satisfied customers who have
experienced exceptional dining and food delivery. Order from The Capital Hub today!"
        />
      </Helmet>

      {/* First section */}
      <div className="frist-section container mx-auto d-flex flex-column justify-content-evenly flex-md-row ">
        <div className="left-section d-flex flex-column justify-content-evenly p-md-3">
          {/* <p className="fw-bold"># 1 Food Delivery Services</p> */}
          <h1>Build your food delivery</h1>
          <h1 className="text-orange">application with Capital HUB!</h1>
          <h6 className="mt-2">
            Build your business as Capital HUB builds your application. Enable
            food delivery applications with the smoothest user interface
            available in the market.{" "}
          </h6>
          <Link to="" onClick={scrollToContact} className="LinkBtn mt-2">
            Contact Us
          </Link>
        </div>
        <div className="right-section py-2    d-flex justify-content-evenly">
          <img src={assets.twoMobile} alt="twoMobile" />
        </div>
        <img src={assets.downArrow} alt="downArrow" className="down-arrow" />
      </div>

      {/* Service Stats */}
      <ServiceStats />

      <div className="container mx-auto short-description text-center pt-4">
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

      <div className="third-section d-flex justify-content-center flex-column flex-md-row rounded">
        {/* <div className="left-section">
          <h6>Best Features</h6>
          <h1>
            Get Upto <span>50%</span> Offers On
          </h1>
          <h1>Festival Season!</h1>
          <p>
            Celebrate the festive spirit with joy and savings! Enjoy exclusive
            offers of up to 50% off on a wide range of products and experiences
            during this festival season. Don't miss out.
          </p>
          <Link to="/web-development" className="LinkBtn">Taking Us</Link>
        </div> */}
        <div className="right-section">
          <img src={assets.halfMobile} alt="halfMobile" className="w-75 " />
        </div>
      </div>

      <div className="container mx-auto forth-section d-flex flex-column ">
        <h4 className="mx-auto mt-5 mb-3">About Us</h4>
        <div className="inner d-flex flex-column align-self-center flex-md-row">
          <div className="left-section d-flex    justify-content-center flex-column">
            <img
              src={assets.sinfleMobile}
              alt="sinfleMobile"
              className="w-50 mb-5 mx-auto"
            />
          </div>
          <div className="right-section d-flex  align-self-center flex-column container">
            <h1>Responsive and Smooth Interface for Foodies</h1>
            {/* <p>
              Prioritize your well-being with our commitment to providing the
              highest quality food. Nourish your body and delight your taste
              buds with the harmonious pairing of health and taste
            </p> */}
            <Link to="" onClick={scrollToContact} className="LinkBtn">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      {/* <div className=" two-scroll-section  ">
        <h1>
          Menu That Always Make <br /> You Fall In Love
        </h1>
        <ScrollableComponent />
        <div className=" d-flex justify-content-center  my-3">
        <Link to="/web-development" className="LinkBtn">Taking Us</Link>
        </div>
      </div> */}

      <div className="container-fluid mx-auto help-cards flex-column flex-md-row">
        <div className="help-card">
          <p className="count">01.</p>
          <h6 className="title">
            Stay Informed with Our Product Manager's Timely Insights and Updates
          </h6>

          {/* <Link to="/contactus" className="LinkBtn">
              Contact Us
            </Link> */}
        </div>
        <div className="help-card">
          <p className="count">02.</p>
          <h6 className="title">
            Expert Tech Insights and recommendations from Our Core Team
          </h6>

          {/* <Link to="/contactus" className="LinkBtn">
              Contact Us
            </Link> */}
        </div>
        <div className="help-card">
          <p className="count">03.</p>
          <h6 className="title">
            Specialised and unique Startup Business Consulting That Sets You
            Apart
          </h6>

          {/* <Link to="/contactus" className="LinkBtn">
              Contact Us
            </Link> */}
        </div>
        <div className="help-card">
          <p className="count">04.</p>
          <h6 className="title">
            Hassle-Free Deployment Managed by Capital HUB Team
          </h6>

          {/* <Link to="/contactus" className="LinkBtn">
              Contact Us
            </Link> */}
        </div>
      </div>

      {/* <div className="card_bg p-md-5 py-2 mb-4">
        <div className="join-us-card rounded-4 mx-auto ">
          <img
            className="rounded "
            src={pramodImg}
            width={351}
            alt="Cost Savings"
          />
          <div className="p-3  mx-auto text-center">
            <h6 className="mx-auto">Pramod Badiger</h6>
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

      <section className="container mx-auto contact-our-team row justify-content-around bg-black rounded-4 p-2 p-md-5 py-3 align-items-center mb-4">
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
            className="LinkBtn btn btn-primary rounded-pill text-white px-4 py-2 fs-12 "
          >
            Connect with our Expert
          </Link>
        </div>
      </section>

      {/* OurClients */}
      <OurClients />

      {/* Contact form */}
      <div className="container mx-auto">
        <ContactForm className="col-12 col-md-8 mx-auto" page={"food"} />
      </div>

      {/* <div className="fifth-section">
        <h1>See What Our Lovely</h1>
        <h1>
          <span>Customer</span> Says About Us
        </h1>
        <Reviewcarousel reviews={reviews} />
      </div> */}
      {/* <div className="last text-center m-5">
        <h1>Subscribe Now</h1> */}
      {/* <p>
          Lorem ipsum dolor sit amet consectetur. At consequat purus hendrerit
          proin risus Sit purus ante dictum in malesuada id.{" "}
        </p> */}

      {/* <div className=" input-div rounded-pill d-flex justify-content-center  shadow-lg  flex-row mx-md-auto ">
          <input
            type="text"
            name="search"
            id="search"
            placeholder="Enter Your Email "
            className=" flex-grow-1 rounded-pill px-2"
          />
          <button className="rounded-pill">Subscribe</button>
        </div>
      </div> */}
    </div>
  );
}

export default FoodLandingPage;
