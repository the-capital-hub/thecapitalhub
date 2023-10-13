import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import "./StartupExplore.scss";
// import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import FilterBySelect from "../../../components/NewInvestor/FilterBySelect/FilterBySelect";
import CompanyProfileList from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfileList";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import { fetchExploreFiltersAPI } from "../../../Service/user";

export default function StartupExplore() {
  const [activeTab, setActiveTab] = useState("Investor");
  const dispatch = useDispatch();

  useEffect(() => {
    document.title = "Explore | The Capital Hub";
    dispatch(setPageTitle("Explore"));
  }, []);

  useEffect(() => {
    fetchFilters();
  }, [activeTab]);

  const fetchFilters = async () => {
    try {
      const response = await fetchExploreFiltersAPI(activeTab);
      console.log(11111111111111111111,response);
    } catch (error) {
      console.log("Error fetching filters: ", error);
    }
  };

  return (
    <MaxWidthWrapper>
      <section className="startup_explore_wrapper d-flex flex-column gap-5 my-5">
        {/* <SmallProfileCard/> */}

        {/* Header */}
        <div className="bg-white rounded-4 shadow-sm d-flex flex-column gap-4 px-4 py-4">
          {/* Heading */}
          <h5 className="m-0">Find {activeTab} by</h5>

          {/* Tabs */}
          <div className="startup_explore_tabs d-flex align-items-center border-bottom">
            <button
              className={`btn_base py-3 px-3 ${
                activeTab === "Investor" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Investor")}
            >
              Investor
            </button>
            <button
              className={`btn_base py-3 px-3 ${
                activeTab === "Startup" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Startup")}
            >
              Startup
            </button>
            <button
              className={`btn_base py-3 px-3 ${
                activeTab === "Founder" ? "active" : ""
              }`}
              onClick={() => setActiveTab("Founder")}
            >
              Founder
            </button>
          </div>

          {/* Filters */}
          <form className="startup_filters_container">
            {activeTab === "Investor" && (
              <>
                <FilterBySelect options={[]} label="Sector" name="sector" />
                <FilterBySelect options={[]} label="City" name="city" />
                <FilterBySelect options={[]} label="Gender" name="gender" />
              </>
            )}
            {activeTab === "Startup" && (
              <>
                <FilterBySelect options={[]} label="Sector" name="sector" />
                <FilterBySelect options={[]} label="City" name="city" />
                <FilterBySelect options={[]} label="Size" name="size" />
              </>
            )}
            {activeTab === "Founder" && (
              <>
                <FilterBySelect options={[]} label="Sector" name="sector" />
                <FilterBySelect options={[]} label="City" name="city" />
                <FilterBySelect options={[]} label="Gender" name="gender" />
              </>
            )}
            <button className="btn-capital">Filter {activeTab}</button>
          </form>
        </div>

        {/* Companies List - pass filter props*/}
        <CompanyProfileList isStartup />
      </section>
    </MaxWidthWrapper>
  );
}
