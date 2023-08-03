import React from "react";
import "./WebDevelopment.scss";
import serviceThreeIcon from "../../../Images/service/Group 15406.svg";
import BackIcon from '../../../Images/BackIcon.svg'
import { Link } from "react-router-dom";
import listIcon from "../../../Images/ListDot.svg";

const WebDevelopment = () => {
  return (
    <>
      <div className="container-fluid webdev_main_container">
        <div className="container">
        <Link to={'/service'}><img src={BackIcon} alt="back"/>Back</Link>
          <section className="heading_section_fund">
            <h1>
              We offer the best
              <span style={{ color: "#FD5901" }}> services</span>
            </h1>

            <div className="title_and_image">
              <img src={serviceThreeIcon} alt="image" />
              <h2>WEB DEVELOPMENT</h2>
            </div>

            <p className="mt-4">
              Capital HUB is the go-to source for startups when it comes to web
              development, and Android and iOS development services. We
              recognize that building a great startup begins with adapting to
              new technology and evolving as a startup with all new features.
              That's why we're here to support you every step of the way, from
              design and development to marketing and scaling. Whether you're
              starting from scratch or just need a little help getting started,
              Capital HUB has you covered.
            </p>

            <p>
              Our team of experienced developers can help you with everything
              from Web development to Android and iOS development. With our
              help, you'll be able to create and launch the best possible
              product.
              <br />
              So, what are you waiting for? Start your journey with Capital HUB
              today!<br/><br/>
              Development services offered:
            </p>
          </section>

          <section className="list_section">
            <ul>
              <li>
                <img src={listIcon} alt="image" />
                <div>Innovation/ Tech-consultants</div>{" "}
              </li>

              <li>
                <img src={listIcon} alt="image" />
                <div>Website development services</div>{" "}
              </li>

              <li>
                <img src={listIcon} alt="image" />
                <div>Android application development</div>{" "}
              </li>

              <li>
                <img src={listIcon} alt="image" />
                <div>iOS development services</div>{" "}
              </li>

              <li>
                <img src={listIcon} alt="image" />
                <div>Rapid prototyping model for startups</div>{" "}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </>
  );
};

export default WebDevelopment;
