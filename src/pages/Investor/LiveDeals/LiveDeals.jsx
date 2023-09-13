import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import Infosys from "../../../Images/Investor/LiveDeals/Infosys110.svg";
import {
  WebIcon,
  ThreeUser,
  Location,
  UserOne,
  UserTwo,
} from "../../../Images/Investor/Syndicates";
import CompanyOverviewCard from "../../../components/NewInvestor/SyndicateComponents/CompanyOverviewCard";
import "../Syndicates/Syndicates.scss";
import "./LiveDeals.scss";
import DealsCard from "../../../components/NewInvestor/LiveDealsComponents/DealsCard";

const company = {
  name: "Infosys",
  motto: "Making groups booking easier & faster through automation",
  image: Infosys,
  location: "Bangalore",
  about:
    " Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.",
};

const dealInvestors = [
  { img: UserOne, name: "John Doe", focused: "E-Commerce" },
  { img: UserTwo, name: "John Doe", focused: "Design" },
  { img: UserOne, name: "John Doe", focused: "Flash Sales" },
  { img: UserTwo, name: "John Doe", focused: "Fast Moving Consumer Goods" },
  { img: UserOne, name: "John Doe", focused: "Online Travel" },
  { img: UserTwo, name: "John Doe", focused: "Industries" },
  { img: UserOne, name: "John Doe", focused: "Group Buying" },
  { img: UserTwo, name: "John Doe", focused: "Deals" },
];

export default function LiveDeals() {
  return (
    <div className="liveDeals__container">
      <SmallProfileCard text="Live Deals" />
      <section className="section__wrapper bg-white border rounded-3 p-4 m-3">
        <div className="deals__header d-flex justify-content-between align-items-center border-bottom">
          <div className="d-flex gap-2">
            <img
              src={company.image}
              alt={company.name}
              style={{ width: "160px", height: "auto" }}
              className=""
            />
            <div className="d-flex flex-column gap-2 justify-content-center">
              <h3 className="main__heading fw-semibold">{company.name}</h3>
              <p className="company__motto">{company.motto}</p>
            </div>
          </div>
          <button className="btn-capital">Invest Now</button>
        </div>

        <div className="deals__overview d-flex flex-column gap-4 py-3">
          <h6 className="div__heading my-2">Over View</h6>
          <div className="overview__container">
            <CompanyOverviewCard
              heading={"Website"}
              text={company.name}
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
          <p className="overview__about">{company.about}</p>
        </div>

        <div className="deals__investors d-flex flex-column gap-4 py-3">
          <h6 className="div__heading my-2">Investors Interested</h6>
          <div className="deals__card d-flex flex-wrap gap-5">
            {/* <img src="" alt="" />
            <div className="">{"children"}</div> */}
            {dealInvestors.map((investor, index) => {
              return (
                <DealsCard
                  key={`${investor.name}${index}`}
                  image={investor.img}
                >
                  <p>{investor.name}</p>
                  <p className="fw-lighter text-dark">
                    <small>{investor.focused}</small>
                  </p>
                </DealsCard>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
