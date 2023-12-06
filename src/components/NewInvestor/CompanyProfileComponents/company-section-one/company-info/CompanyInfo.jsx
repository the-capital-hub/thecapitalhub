import {
  Location,
  Calendar,
  CircleArrow,
} from "../../../../../Images/Investor/CompanyProfile";
import IconCard from "../../shared-components/icon-card/IconCard";
import "./CompanyInfo.scss";

export default function CompanyInfo({
  name,
  logo,
  location,
  tagline,
  foundedYear,
  lastFunding,
}) {
  return (
    <div className="company__header d-flex flex-column flex-lg-row gap-2 ">
      <div className="company__image">
        <img
          src={logo}
          alt={name}
          style={{ width: "110px", height: "110px", objectFit: "cover" }}
          loading="lazy"
          className="rounded"
        />
      </div>

      <div className="company__details d-flex flex-column gap-4 justify-content-around">
        <div className="company__headings">
          <h3 className="company__name">{name}</h3>
          <p className="company__type">{tagline || " "}</p>
        </div>
        <div className="icon__details d-flex flex-column flex-md-row gap-4 align-items-start">
          <IconCard
            src={Location}
            alt={"location icon"}
            text={`${location}`}
            key="location"
          />
          <IconCard
            src={Calendar}
            alt={"calendar icon"}
            text={`Founded in, ${foundedYear || "2014"}`}
            key="founded"
          />
          <IconCard
            src={CircleArrow}
            alt={"rising arrow icon"}
            text={`Last funding in ${lastFunding || "May, 2023"}`}
            key="funding"
          />
        </div>
      </div>
    </div>
  );
}
