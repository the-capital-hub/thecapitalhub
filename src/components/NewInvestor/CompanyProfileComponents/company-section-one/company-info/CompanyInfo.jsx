import {
  Location,
  Calendar,
  CircleArrow,
} from "../../../../../Images/Investor/CompanyProfile";
import { GiProgression } from "react-icons/gi";
import IconCard from "../../shared-components/icon-card/IconCard";
import "./CompanyInfo.scss";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";

export default function CompanyInfo({
  name,
  logo,
  location,
  tagline,
  foundedYear,
  lastFunding,
  industry,
  stage,
  sector
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

      <div className="company__details d-flex flex-column gap-3 justify-content-around" style={{marginLeft:"0.5rem"}}>
        <div className="company__headings">
          <h3 className="company__name">{name}</h3>
          <p className="company__type">{industry}</p>
          <p className="company__type">{tagline || " "}</p>
          
        </div>
        <div className="icon__details d-flex gap-3 align-items-start" style={{display:"flex",flexWrap:"wrap"}}>
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
            text={`Last funding in ${new Date(lastFunding).toLocaleString('en-US', { month: 'short', year: 'numeric' }) || "May, 2023"}`}
            key="funding"
          />
          <div
            className={`iconCard__container d-flex align-items-center gap-1  `}
          >
            <GiProgression color="#898989" />
            <p className="icon__text">{`Stage of funding ${stage}`}</p>
          </div>
          <div
          className={`iconCard__container d-flex align-items-center gap-1`}
        >
          <HiOutlineBuildingOffice2 color="#898989" />
          <p className="icon__text" style={{ marginBottom: "0px"}}>{`${sector || "Nun"}`}</p>
        </div>
        </div>
      </div>
    </div>
  );
}
