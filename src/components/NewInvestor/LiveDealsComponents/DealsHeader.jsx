export default function DealsHeader({ image, name, motto }) {
  return (
    <div className="deals__header pb-3 d-flex flex-column flex-lg-row justify-content-between align-items-center border-bottom">
      <div className="d-flex gap-2">
        <img
          src={image}
          alt={name}
          style={{ width: "160px", height: "auto" }}
          className=""
        />
        <div className="d-flex flex-column gap-2 justify-content-center">
          <h3 className="main__heading fw-semibold">{name}</h3>
          <p className="company__motto">{motto}</p>
        </div>
      </div>
      <button className="btn-capital">Invest Now</button>
    </div>
  );
}
