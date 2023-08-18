import "./TeamsCard.scss";
import { camera } from "../../../Images/InvestorsView";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";

const TeamsCard = ({image, name, designation}) => {
  return (
    <div className="TeamsCard">
      <ImagePlaceholder text={"Upload your image"} imageUrl={image}/>
      <div className="details">
        <div className="about">
          <p>{name || `Name`}</p>
          <hr />
        </div>
        <div className="about">
          <p>{designation || `Designation`}</p>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default TeamsCard;
