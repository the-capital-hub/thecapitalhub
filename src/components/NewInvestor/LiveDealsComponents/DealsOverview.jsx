import {
  WebIcon,
  ThreeUser,
  Location,
} from "../../../Images/Investor/Syndicates";
import CompanyOverviewCard from "../../../components/NewInvestor/SyndicateComponents/CompanyOverviewCard";

export default function DealsOverview({ name, about }) {
  return (
    <div className="deals__overview d-flex flex-column gap-4 py-3">
      <h6 className="div__heading my-2">Over View</h6>
      <div className="d-flex flex-column gap-4 flex-md-row gap-md-5">
        <CompanyOverviewCard
          heading={"Website"}
          text={name}
          icon={WebIcon}
          iconAlt={"web icon"}
          key={"web"}
          fontBase
        />
        <CompanyOverviewCard
          heading={"Employees"}
          text={"300-500"}
          icon={ThreeUser}
          iconAlt={"users icon"}
          key={"members"}
          fontBase
        />
        <CompanyOverviewCard
          heading={"Location"}
          text={"Bangalore, India"}
          icon={Location}
          iconAlt={"location pin icon"}
          key={"location"}
          fontBase
        />
      </div>
      <p className="overview__about">{about}</p>
    </div>
  );
}
