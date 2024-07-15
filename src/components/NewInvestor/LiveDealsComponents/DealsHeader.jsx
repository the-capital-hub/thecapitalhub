import SpinnerBS from "../../Shared/Spinner/SpinnerBS";

export default function DealsHeader({
  image,
  name,
  motto,
  theme,
  handelDeals,
  loggedInUserId,
  userInterested,
}) {
  return (
    <div className="deals__header pb-3 d-flex flex-column flex-lg-row justify-content-between align-items-center border-bottom">
      <div className="d-flex gap-2">
        <img
          src={image}
          alt={name}
          style={{ width: "120px", height: "auto", borderRadius: "10px" }}
          className=""
        />
        <div className="d-flex flex-column gap-2 justify-content-center">
          <h3
            className="main__heading fw-semibold"
            style={{ color: theme === "dark" ? "#fff" : "black" }}
          >
            {name}
          </h3>
          <p
            className="company__motto"
            style={{ color: theme === "dark" ? "#fff" : "black" }}
          >
            {motto}
          </p>
        </div>
      </div>
      {userInterested === loggedInUserId ? (
        <button
          type="button"
          className="d-flex align-items-center gap-2 btn btn-danger fw-bold fs-6"
          onClick={handelDeals}
        >
          Uninterested
        </button>
      ) : (
        <button className="btn-capital" onClick={handelDeals}>
          Show Interest
        </button>
      )}
    </div>
  );
}
