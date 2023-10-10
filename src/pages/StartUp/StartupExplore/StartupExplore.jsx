import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import "./StartupExplore.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import FilterBySelect from "../../../components/NewInvestor/FilterBySelect/FilterBySelect";
import CompanyProfileList from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfileList";

export default function StartupExplore() {
  const [activeTab, setActiveTab] = useState("StartupBackground");

  useEffect(() => {
    document.title = "Explore | The Capital Hub";
  }, []);

  return (
    <MaxWidthWrapper>
      <section className="startup_explore_wrapper d-flex flex-column gap-5 my-5">
        {/* <SmallProfileCard/> */}

        {/* Header */}
        <div className="bg-white rounded-4 shadow-sm d-flex flex-column gap-4 px-4 py-4">
          {/* Heading */}
          <h5 className="m-0">Find Startups by</h5>

          {/* Tabs */}
          <div className="startup_explore_tabs d-flex align-items-center border-bottom">
            <button
              className={`btn_base py-3 px-3 ${
                activeTab === "StartupBackground" ? "active" : ""
              }`}
              onClick={() => setActiveTab("StartupBackground")}
            >
              Startup Background
            </button>
            <button
              className={`btn_base py-3 px-3 ${
                activeTab === "FoundingTeam" ? "active" : ""
              }`}
              onClick={() => setActiveTab("FoundingTeam")}
            >
              Founding Team
            </button>
            <button
              className={`btn_base py-3 px-3 ${
                activeTab === "RevenuesFunding" ? "active" : ""
              }`}
              onClick={() => setActiveTab("RevenuesFunding")}
            >
              Revenues and Funding
            </button>
          </div>

          {/* Filters */}
          <div className="startup_filters_container">
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
        </div>

        {/* Companies List - pass filter props*/}
        <CompanyProfileList />
      </section>
    </MaxWidthWrapper>
  );
}
