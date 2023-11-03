import React from "react";
import "./OurClients.scss";
import { Link } from "react-router-dom";
import assets from "../../../../Images/Portfolio/PortfolioPage";

export default function OurClients() {
  return (
    <div className="our_clients_wrapper w-100">
      <div className="our_clients_container container mx-auto px-5 py-5">
        <div className="clients_heading">
          <h4>Our Clients</h4>
          <p>We do game-changing work for game-changing companies.</p>
          <Link to={"/contactus"} className="text-capitalize work_button">
            Work with us
          </Link>
        </div>

        {/* Client Logos */}
        <div className="client_logos d-flex flex-wrap gap-3 gap-lg-4">
          <img src={assets.yesgobus} alt="logo" width={100} height={80} />
          <img
            src={assets.impactshall}
            alt="logo"
            width={200}
            height={"auto"}
            style={{ objectFit: "contain" }}
          />
          <img
            src={assets.capitalHub}
            alt="logo"
            width={200}
            height={80}
            style={{ objectFit: "contain" }}
          />
          <img
            src={assets.circleIcon}
            alt="logo"
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
          <img
            src={assets.tiffinbuddy_logo}
            alt="logo"
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
          <img
            src={assets.uipe_logo}
            alt="logo"
            width={100}
            height={100}
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </div>
  );
}
