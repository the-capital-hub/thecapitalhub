import {
  Location,
  Calendar,
  CircleArrow,
} from "../../../../../Images/Investor/CompanyProfile";
import IconCard from "../../shared-components/icon-card/IconCard";
import "./CompanyInfo.scss";

export default function CompanyInfo({ company }) {
  return (
    <div className="company__header d-flex flex-column flex-lg-row gap-2 ">
      <div className="company__image">
        <img src={company.image} alt={company.name} />
      </div>

      <div className="company__details d-flex flex-column gap-4 justify-content-around">
        <div className="company__headings">
          <h3 className="company__name">{company.name}</h3>
          <p className="company__type">{company.type}</p>
        </div>
        <div className="icon__details d-flex flex-column flex-md-row gap-4 align-items-start">
          <IconCard
            src={Location}
            alt={"location icon"}
            text={`${company.location}, India`}
            key="location"
          />
          <IconCard
            src={Calendar}
            alt={"calendar icon"}
            text={`Founded in, ${company.foundedYear}`}
            key="founded"
          />
          <IconCard
            src={CircleArrow}
            alt={"rising arrow icon"}
            text={`Last funding in ${company.lastFunding}`}
            key="funding"
          />
        </div>
      </div>
    </div>
  );
}
