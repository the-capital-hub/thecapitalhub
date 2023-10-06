import React from "react";
import "./Features.scss";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";

export default function Features({ dataObject, btnClass, ltr }) {
  // Destructure props
  const { heading, desktopText, mobileText, btnText, image } = dataObject;

  // Intersection Observer
  const { inView, ref } = useInView({
    triggerOnce: true,
    fallbackInView: true,
    threshold: 1,
  });

  return (
    <div
      className={`features_container ${inView ? "opacity-1" : "opacity-0"}`}
      ref={ref}
    >
      <div
        className={`content_grid d-flex justify-content-between ${
          ltr ? "flex-row" : "flex-row-reverse"
        } `}
      >
        {/* Text */}
        <div
          className={`text_column d-flex flex-column gap-4 justify-content-center ${
            ltr ? "slide-left" : "slide-right"
          } ${inView ? "slide-reset" : ""} `}
        >
          {/* Heading */}
          <h1>{heading}</h1>

          {/* Desktop Text */}
          <div className="">
            {desktopText.map((text) => {
              return <p className="desktop_para">{text}</p>;
            })}
          </div>

          {/* Mobile Text */}
          <p className="mobile_para">{mobileText}</p>

          {/* Button */}
          <Link to="/signup">
            <button className={`btn-base ${btnClass}`}>{btnText}</button>
          </Link>
        </div>

        {/* Image */}
        <div
          className={`image__wrapper ${ltr ? "slide-left" : "slide-right"} ${
            inView ? "slide-reset" : ""
          } `}
        >
          <img className="img-fluid" src={image} alt={heading} loading="lazy" />
        </div>
      </div>
    </div>
  );
}
