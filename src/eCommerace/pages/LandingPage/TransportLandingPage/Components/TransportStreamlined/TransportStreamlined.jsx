import React from "react";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

export default function TransportStreamlined({ scrollToContact, image }) {
  // Intersection Observer
  const { inView, ref } = useInView({
    triggerOnce: true,
    fallbackInView: true,
    threshold: 0.25,
    // rootMargin: "-5%",
  });

  return (
    <div
      className={`container mx-auto fourth-section  d-flex flex-column  justify-content-center align-items-center gap-5 flex-md-row ${
        inView ? "opacity-1" : "opacity-0"
      } overflow-hidden `}
      ref={ref}
    >
      <div className={`left-section slide-down ${inView ? "slide-reset" : ""}`}>
        <img src={image} alt="international" />
      </div>
      <div
        className={`right-section d-flex flex-column gap-3 slide-right ${
          inView ? "slide-reset" : ""
        }`}
      >
        <h1>Streamlined Logistics Management</h1>
        <p>
          Simplify your logistics operations with our integrated platform. Our
          platform streamlines communication, tracking, and management for
          greater efficiency and control over all your logistics needs
        </p>
        <Link to="" onClick={scrollToContact} className="LinkBtn">
          Contact Our Team
        </Link>
      </div>
    </div>
  );
}
