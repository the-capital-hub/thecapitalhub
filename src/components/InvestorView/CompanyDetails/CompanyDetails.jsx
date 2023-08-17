import { camera } from "../../../Images/InvestorsView";
import "./CompanyDetails.scss";

const CompanyDetails = () => {
  return (
    <div className="companyDetailsContainer">
      <div className="pfp">
        <img src={camera} alt="" />
        <p>Upload Company Logo</p>
      </div>
      <div className="details">
        <p>Enter company duration</p>
        <hr />
        <p>Eg: India's startup Platform</p>
      </div>
    </div>
  );
};

export default CompanyDetails;
