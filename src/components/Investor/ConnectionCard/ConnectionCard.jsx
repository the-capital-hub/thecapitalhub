import React from "react";
import "./ConnectionCard.scss";
import testimg from "../../../Images/aboutUs/Pramod.jpeg";

function ConnectionCard() {
  return (
    <div className="ConnectionCard_container m-3 pb-2 d-flex flex-md-row justify-content-start gap-4 ">
      <div className="single-card d-flex flex-column flex align-items-center ">
        <img src={testimg} alt="" className="rounded-pill " />
        <h1 className="mt-2">name</h1>
        <p className="mb-2">Lorem, ipsum </p>
        <button>Connected</button>
      </div>

      <div className="single-card d-flex flex-column flex align-items-center ">
        <img src={testimg} alt="" className="rounded-pill " />
        <h1 className="mt-2">name</h1>
        <p className="mb-2">Lorem, ipsum </p>
        <button>Connected</button>
      </div>

      <div className="single-card d-flex flex-column flex align-items-center ">
        <img src={testimg} alt="" className="rounded-pill " />
        <h1 className="mt-2">name</h1>
        <p className="mb-2">Lorem, ipsum </p>
        <button>Connected</button>
      </div>

      <div className="single-card d-flex flex-column flex align-items-center ">
        <img src={testimg} alt="" className="rounded-pill " />
        <h1 className="mt-2">name</h1>
        <p className="mb-2">Lorem, ipsum </p>
        <button>Connected</button>
      </div>

      <div className="single-card d-flex flex-column flex align-items-center ">
        <img src={testimg} alt="" className="rounded-pill " />
        <h1 className="mt-2">name</h1>
        <p className="mb-2">Lorem, ipsum </p>
        <button>Connected</button>
      </div>

      <div className="single-card d-flex flex-column flex align-items-center ">
        <img src={testimg} alt="" className="rounded-pill " />
        <h1 className="mt-2">name</h1>
        <p className="mb-2">Lorem, ipsum </p>
        <button>Connected</button>
      </div>

      <div className="single-card d-flex flex-column flex align-items-center ">
        <img src={testimg} alt="" className="rounded-pill " />
        <h1 className="mt-2">name</h1>
        <p className="mb-2">Lorem, ipsum </p>
        <button>Connected</button>
      </div>

      <div className="single-card d-flex flex-column flex align-items-center ">
        <img src={testimg} alt="" className="rounded-pill " />
        <h1 className="mt-2">name</h1>
        <p className="mb-2">Lorem, ipsum </p>
        <button>Connected</button>
      </div>
    </div>
  );
}

export default ConnectionCard;
