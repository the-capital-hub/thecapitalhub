import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import {
  InfosysNiceImage,
  HCLNiceImage,
  WiproNiceImage,
} from "../../../Images/Investor/LiveDeals";
import "../Syndicates/Syndicates.scss";
import "./LiveDeals.scss";
import DealsCompany from "../../../components/NewInvestor/LiveDealsComponents/DealsCompany";

const companies = [
  {
    name: "Infosys",
    motto: "Making groups booking easier & faster through automation",
    image: InfosysNiceImage,
    location: "Bangalore",
    about:
      " Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.",
  },
  {
    name: "Wipro",
    motto: "Making groups booking easier & faster through automation",
    image: WiproNiceImage,
    location: "Bangalore",
    about:
      " Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.",
  },
  {
    name: "HCL",
    motto: "Making groups booking easier & faster through automation",
    image: HCLNiceImage,
    location: "Bangalore",
    about:
      " Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.",
  },
];

export default function LiveDeals() {
  // Fetch companies data here.

  return (
    <div className="liveDeals__container px-3 border-start">
      <div className="pb-4 pt-2">
        <SmallProfileCard text="Live Deals" />
      </div>
      <section className="section__wrapper">
        <div className="deals__company__container d-flex flex-column gap-4">
          {companies.map((company) => {
            return <DealsCompany company={company} key={company.name} />;
          })}
        </div>
      </section>
    </div>
  );
}
