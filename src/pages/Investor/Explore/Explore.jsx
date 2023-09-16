import "./Explore.scss";
import { useState } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import Company from "../../../components/NewInvestor/Company/Company";
import FilterBySelect from "../../../components/NewInvestor/FilterBySelect/FilterBySelect";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";

function Explore() {
  const [activeTab, setActiveTab] = useState("StartupBackground");

  return (
    <div className="explore_container px-3 border-start">
      <SmallProfileCard text="Explore" />
      <section className="filter_container border">
        <h5 className="h5">Find StartUps by</h5>
        <div className="filter_by">
          <button
            className={activeTab === "StartupBackground" ? "active" : ""}
            onClick={() => setActiveTab("StartupBackground")}
          >
            Startup Background
          </button>
          <button
            className={activeTab === "FoundingTeam" ? "active" : ""}
            onClick={() => setActiveTab("FoundingTeam")}
          >
            Founding Team
          </button>
          <button
            className={activeTab === "RevenuesFunding" ? "active" : ""}
            onClick={() => setActiveTab("RevenuesFunding")}
          >
            Revenues & Funding
          </button>
        </div>
        <div className="filter_by_selections row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-2">
          <FilterBySelect label="Sector" name="sector" />
          <FilterBySelect label="Sub-Sector" name="subSector" />
          <FilterBySelect label="State" name="state" />
          <FilterBySelect label="City" name="city" />
          <FilterBySelect label="Age" name="age" />
          <FilterBySelect label="Business Model" name="businessModel" />
          <FilterBySelect
            label="Incorporation Model"
            name="incorporationModel"
          />
          <FilterBySelect label="DPIIT Registered" name="dpiitRegistered" />
          {activeTab === "FoundingTeam" && (
            <>
              <FilterBySelect label="Incubation" name="incubation" />
              <FilterBySelect label="Incubation" name="incubation" />
            </>
          )}
        </div>
      </section>
      <section className="filtered_company_details">
        {/* <Company /> */}
        {/* <Company /> */}
        <CompanyProfile />
        <CompanyProfile />
      </section>
    </div>
  );
}

export default Explore;
