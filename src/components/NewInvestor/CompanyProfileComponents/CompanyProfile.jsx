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

export default function CompanyProfile({ isOnelink, companyData }) {
  // Fetch Company Data here
  let name = "HCL";
  let logo = HCLImage;
  let location = "Bangalore";
  let description =
    "Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.";
  let socialLinks = {
    website: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  };
  let colorCard = "";
  let foundedIn = "2014";
  let vision = "Vision";
  let mission = "Mission";
  let noOfEmployees = "200+";

  if (companyData) {
    name = companyData.company || name;
    logo = companyData.logo || logo;
    location = companyData.location || location;
    description = companyData.description || description;
    socialLinks = companyData.socialLinks || socialLinks;
    colorCard = companyData.colorCard || colorCard;
    foundedIn = companyData.startedAtDate || foundedIn;
    vision = companyData.vision || vision;
    mission = companyData.mission || mission;
    noOfEmployees = companyData.noOfEmployees || noOfEmployees;
  }
  // const company = {
  //   image: HCLImage,
  //   name: "HCL",
  //   type: "The Financial company",
  //   location: "Bangalore",
  //   foundedYear: "2014",
  //   lastFunding: "May, 2023",
  //   about:
  //     " Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.With the vision of make in India for the world, they design and build augmented reality glasses for Defence, Enterprise, and Training sectors. In addition to hardware, they also provide their clients with end-to-end AR/VR/MR solutions that are tailored to their business needs.",
  //   tags: [
  //     "Finance",
  //     "3D Scanning",
  //     "Augmented Reality AR",
  //     "Virtual Reality VR",
  //     "Artificial Intelligence AI",
  //   ],
  // };


  return (
    <div className="company__profile bg-white rounded-4 border p-lg-4 shadow-sm">
      <div className="company__section__one border-bottom d-flex flex-column gap-4 py-5 ps-3">
        <div className="company__info d-flex flex-column flex-xl-row gap-4 justify-content-between position-relative">
          <CompanyInfo name={name} logo={logo} location={location} foundedYear={foundedIn}/>
          <CompanyActions isOnelink={isOnelink} />
        </div>
        <CompanyAbout about={description} vision={vision} mission={mission} noOfEmployees={noOfEmployees}/>
        <CompanyStats colorCard={colorCard}/>
      </div>

      <div className="company__section__two d-flex flex-column gap-4 pt-3 pb-5 ps-3">
        <PublicLinks socialLinks={socialLinks} />
        <Feedback />
        <FoundingTeam />
        <KeyFocus
          tags={[
            "Finance",
            "3D Scanning",
            "Augmented Reality AR",
            "Virtual Reality VR",
            "Artificial Intelligence AI",
          ]}
        />
      </div>
    </div>
  );
}
