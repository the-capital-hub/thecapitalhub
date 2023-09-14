import { Star } from "../../../../../Images/Investor/CompanyProfile";

export default function CardHead(props) {
  const { image, name, rating, age } = props;

  return (
    <div className="card__head d-flex gap-2">
      <img src={image} alt="Profile picture" />
      <div className="">
        <h4 className="card__head__name">{name}</h4>
        {rating ? (
          <div className="rating d-flex gap-1">
            {/* Have to figure out how to fill svgs according to rating */}
            <img
              src={Star}
              alt="Star icon"
              style={{ width: "10px", height: "10px" }}
            />
            <img
              src={Star}
              alt="Star icon"
              style={{ width: "10px", height: "10px" }}
            />
            <img
              src={Star}
              alt="Star icon"
              style={{ width: "10px", height: "10px" }}
            />
            <img
              src={Star}
              alt="Star icon"
              style={{ width: "10px", height: "10px" }}
            />
            <img
              src={Star}
              alt="Star icon"
              style={{ width: "10px", height: "10px" }}
            />
          </div>
        ) : (
          <p className="age">{age} Years</p>
        )}
      </div>
    </div>
  );
}
