import "./InvestedStartUpCard.scss";

import PublicLinks from "../../../../components/NewInvestor/CompanyProfileComponents/company-section-two/public-links/PublicLinks";
import CompanyInfo from "../../../../components/NewInvestor/CompanyProfileComponents/company-section-one/company-info/CompanyInfo";

import tempLogo from "../../../../Images/Logo.svg";

function InvestedStartUpCard({ startUp }) {
  let socialLinks = {
    website: "",
    facebook: "",
    twitter: "",
    linkedin: "",
  };

  return (
    <div className="invested-startup-card d-flex flex-column gap-3 shadow-sm rounded-4 border p-2 p-md-4">
      <CompanyInfo
        foundedYear={startUp?.foundedYear || 2023}
        lastFunding={startUp?.lastFunding || 2023}
        location={startUp?.location || "Bangalore"}
        logo={startUp?.logo || tempLogo}
        name={startUp?.name || "The Capital Hub"}
        tagline={startUp?.tagline || "tagline"}
      />
      <fieldset className="border rounded shadow-sm">
        <legend className="px-2">About the company</legend>
        <p className="p-2">{startUp?.description || "Lorem..."}</p>
      </fieldset>
      <PublicLinks socialLinks={startUp?.publicLinks || socialLinks} />
    </div>
  );
}

export default InvestedStartUpCard;
