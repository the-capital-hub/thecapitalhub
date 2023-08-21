import { camera } from "../../../Images/InvestorsView";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import "./CompanyDetails.scss";

const CompanyDetails = ({ companyName, description, image }) => {
  return (
    <div className="companyDetailsContainer">
      <ImagePlaceholder text={"Upload your image"} imageUrl={image} />
      <div className="details">
        <p>{companyName || `Enter company duration`}</p>
        <hr />
        <p>{description || `Eg: India's startup Platform`}</p>
      </div>
    </div>
  );
};

export default CompanyDetails;
