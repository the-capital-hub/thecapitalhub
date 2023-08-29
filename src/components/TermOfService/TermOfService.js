import React from "react";
import "./TermOfService.scss";

const TermOfService = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="container term_of_service_container">
          <section className="title_section">
            <h1 className="term_title">Terms Of Services</h1>
            <h6 className="updated_text">Last Updated: Aug 15 ,2023</h6>
          </section>

          <section className="accept_the_term_section">
            <h2 className="heading_with_line_one">Accepting the terms</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Urna at dolor orci donec.
              Enim fermentum tempus ipsum porttitor vehicula vel. Dui nibh
              egestas diam diam ipsum elementum viverra. Non quis eros mauris
              gravida lacus quis. Varius tempus commodo purus et.Lorem ipsum
              dolor sit amet consectetur. Urna at dolor orci donec. Enim
              fermentum tempus ipsum porttitor vehicula vel. Dui nibh egestas
              diam diam ipsum elementum viverra. Non quis eros mauris gravida
              lacus quis. Varius tempus commodo purus et.
            </p>
          </section>

          <section className="accept_the_term_section">
            <h2 className="heading_with_line_two">Description of services</h2>

            <p>
              Lorem ipsum dolor sit amet consectetur. Urna at dolor orci donec.
              Enim fermentum tempus ipsum porttitor vehicula vel. Dui nibh
              egestas diam diam ipsum elementum viverra. Non quis eros mauris
              gravida lacus quis. Varius tempus commodo purus et.Lorem ipsum
              dolor sit amet consectetur. Urna at dolor orci donec. Enim
              fermentum tempus ipsum porttitor vehicula vel. Dui nibh egestas
              diam diam ipsum elementum viverra. Non quis eros mauris gravida
              lacus quis. Varius tempus commodo purus et.
            </p>
          </section>

          <section className="button_section">
            <button className="decline_btn">Decline</button>
            <button className="accept_btn">Accept</button>

          </section>
        </div>
      </div>
    </>
  );
};

export default TermOfService;
