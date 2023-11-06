import CompanyInfo from "./company-section-one/company-info/CompanyInfo";
import HCLImage from "../../../Images/Investor/CompanyProfile/HCL.png";
import DefaultAvatar from "../../../Images/Chat/default-user-avatar.webp";
import CompanyActions from "./company-section-one/company-actions/CompanyActions";
import CompanyStats from "./company-section-one/company-stats/CompanyStats";
import PublicLinks from "./company-section-two/public-links/PublicLinks";
import Feedback from "./company-section-two/feedback/Feedback";
import FoundingTeam from "./company-section-two/founding-team/FoundingTeam";
import KeyFocus from "./company-section-two/key-focus/KeyFocus";
import CompanyAbout from "./company-section-one/company-about/CompanyAbout";
import "./CompanyProfile.scss";

export default function CompanyProfile({
  isOnelink,
  companyData,
  investorData,
  startup = "false",
  short,
}) {
  // Fetch Company Data here
  let name = "HCL";
  let logo = DefaultAvatar;
  let location = "Bangalore";
  let description = "No description";
  let socialLinks = {
    website: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  };
  let colorCard = "";
  let foundedIn = "2014";
  let vision = "";
  let mission = "";
  let noOfEmployees = "";
  let team = [];
  let tags = [];
  let tagline = "";
  let tam = "";
  let sam = "";
  let som = "";
  let founderId = "";

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
    team = companyData.team || team;
    tags = companyData.keyFocus?.split(",").map((tag) => tag.trim()) || tags;
    tagline = companyData.tagline || tagline;
    tam = companyData.TAM || "";
    sam = companyData.SAM || "";
    som = companyData.SOM || "";
    founderId = companyData.founderId || "";
  }
  if (investorData) {
    name = investorData.companyName || name;
    logo = investorData.logo || logo;
    location = investorData.location || location;
    description = investorData.description || description;
    socialLinks = investorData.socialLinks || socialLinks;
    colorCard = investorData.colorCard || colorCard;
    foundedIn = investorData.startedAtDate || foundedIn;
    vision = investorData.vision || vision;
    mission = investorData.mission || mission;
    noOfEmployees = investorData.noOfEmployees || noOfEmployees;
    team = investorData.team || team;
    tags = investorData.keyFocus?.split(",").map((tag) => tag.trim()) || tags;
    tagline = investorData.tagline || tagline;
    founderId = investorData.founderId || "";
  }
  console.log(investorData.founderId)
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
    <div className="company__profile bg-white shadow-sm" startup={startup}>
      <div className="company__section__one border-bottom d-flex flex-column gap-4 p-3 p-md-5">
        <div className="company__info d-flex flex-column flex-xl-row gap-4 justify-content-between position-relative">
          <CompanyInfo
            name={name}
            logo={logo}
            tagline={tagline}
            location={location}
            foundedYear={new Date(foundedIn).getFullYear()}
          />
          <CompanyActions isOnelink={isOnelink} founderId={founderId}/>
        </div>
        <CompanyAbout
          about={description}
          vision={!short && vision}
          mission={!short && mission}
          noOfEmployees={noOfEmployees}
        />
        {!short && (
          <CompanyStats
            colorCard={colorCard}
            startup={startup}
            sam={sam}
            tam={tam}
            som={som}
          />
        )}
      </div>

      <div className="company__section__two d-flex flex-column gap-4 pt-3 pb-5 px-5">
        <PublicLinks socialLinks={socialLinks} />
        {/* <Feedback /> */}
        {!short && <FoundingTeam isOnelink={isOnelink} team={team} />}
        {!short && <KeyFocus tags={tags} />}
      </div>
    </div>
  );
}
