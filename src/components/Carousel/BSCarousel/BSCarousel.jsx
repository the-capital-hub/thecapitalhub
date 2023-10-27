import "./BSCarousel.scss";

function BSCarousel({ className, id = "defaultCarousel", images }) {
  return (
    <div id={id} className={`carousel slide ${className}`}>
      <div className="carousel-indicators">
        {images?.map((_, i) => (
          <button
            key={i}
            type="button"
            data-bs-target={`#${id}`}
            data-bs-slide-to={i}
            className={!i ? "active" : ""}
            aria-current={!i ? "true" : ""}
            aria-label={"Slide " + (i + 1)}
          ></button>
        ))}
      </div>
      <div className="carousel-inner">
        {images?.map((image, i) => (
          <div key={i} className={`carousel-item ${!i && "active"}`}>
            <img src={image} className="d-block w-100" alt="..." />
          </div>
        ))}
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target={`#${id}`}
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default BSCarousel;
