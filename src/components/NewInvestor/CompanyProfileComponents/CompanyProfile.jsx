import CompanyInfo from "./company-section-one/company-info/CompanyInfo";
import HCLImage from "../../../Images/Investor/CompanyProfile/HCL.png";
import CompanyActions from "./company-section-one/company-actions/CompanyActions";
import CompanyStats from "./company-section-one/company-stats/CompanyStats";
import PublicLinks from "./company-section-two/public-links/PublicLinks";
import Feedback from "./company-section-two/feedback/Feedback";
import FoundingTeam from "./company-section-two/founding-team/FoundingTeam";
import KeyFocus from "./company-section-two/key-focus/KeyFocus";
import CompanyAbout from "./company-section-one/company-about/CompanyAbout";
import "./CompanyProfile.scss";

export default function CompanyProfile() {
  // Fetch Company Data here
  const company = {
    image: HCLImage,
    name: "HCL",
    type: "The Financial company",
    location: "Bangalore",
    foundedYear: "2014",
    lastFunding: "May, 2023",
    about:
      " Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.",
    tags: [
      "Finance",
      "3D Scanning",
      "Augmented Reality AR",
      "Virtual Reality VR",
      "Artificial Intelligence AI",
    ],
  };

  return (
    <div className="company__profile bg-white rounded-4 border m-3 p-lg-4">
      <div className="company__section__one border-bottom d-flex flex-column gap-4 py-5 ps-3">
        <div className="company__info d-flex flex-column flex-xl-row gap-4 justify-content-between position-relative">
          <CompanyInfo company={company} />
          <CompanyActions />
        </div>
        <CompanyAbout about={company.about} />
        <CompanyStats />
      </div>

      <div className="company__section__two d-flex flex-column gap-4 pt-3 pb-5 ps-3">
        <PublicLinks />
        <Feedback />
        <FoundingTeam />
        <KeyFocus tags={company.tags} />
      </div>
    </div>
  );
}
