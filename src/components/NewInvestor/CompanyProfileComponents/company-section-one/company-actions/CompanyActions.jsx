import { Bookmark } from "../../../../../Images/Investor/CompanyProfile";
import "./CompanyActions.scss";

export default function CompanyActions() {
  return (
    <div className="company__actions d-flex flex-column justify-content-end ">
      <button className="bookmark position-absolute top-0 right-0 me-4">
        <img src={Bookmark} alt="bookmark icon" />
      </button>
      <div className="action__buttons d-flex flex-column-reverse flex-md-row align-items-start gap-3 mt-3 mb-3 mt-lg-0">
        <button className="btn-capital-outline actions-btn">
          Connect with the Founder
        </button>
        <button className="btn-capital actions-btn">Invest Now</button>
      </div>
    </div>
  );
}
