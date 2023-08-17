import "./TeamsCard.scss";
import { camera } from "../../../Images/InvestorsView";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

const TeamsCard = () => {
  return (
    <div className="TeamsCard">
      <ImagePlaceholder text={"Upload your image"} />
      <div className="details">
        <div className="about">
          <p>Name</p>
          <hr />
        </div>
        <div className="about">
          <p>Designation</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
