import { camera } from "../../../Images/InvestorsView";
import ImagePlaceholder from "../ImagePlaceholder/ImagePlaceholder";
import "./CompanyDetails.scss";

const CompanyDetails = () => {
  return (
    <div className="companyDetailsContainer">
      <ImagePlaceholder text={"Upload your image"} />
      <div className="details">
        <p>Enter company duration</p>
        <hr />
        <p>Eg: India's startup Platform</p>
      </div>
    </div>
  );
};

export default CompanyDetails;
