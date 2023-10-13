import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import "./StartupExplore.scss";
// import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import FilterBySelect from "../../../components/NewInvestor/FilterBySelect/FilterBySelect";
import CompanyProfileList from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfileList";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import {
  fetchExploreFilteredResultsAPI,
  fetchExploreFiltersAPI,
} from "../../../Service/user";

const sectorOptions = [
  "FMCG",
  "Restaurants",
  "Education",
  "Tourism",
  "Automobile",
  "Textile",
  "Chemicals",
  "Telecommunications",
  "Oil and Gas",
  "Renewable Energy",
  "Investment Banking and Venture Capital",
  "NBFC",
  "Biotechnology",
  "Software Development Services",
  "Computer and Information Technology",
  "Aerospace",
  "Sales and Marketing",
];

const genderOptions = ["Male", "Female"];

const sizeOptions = ["10+", "100+", "1000+"];

export default function StartupExplore() {
  const [activeTab, setActiveTab] = useState("Investor");
  const dispatch = useDispatch();
  const [filterOptions, setFilterOptions] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    document.title = "Explore | The Capital Hub";
    dispatch(setPageTitle("Explore"));
  }, []);

  useEffect(() => {
    fetchFilters();
  }, [activeTab]);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFilters({
      ...filters,
      [name]: value,
    });
  };

  const fetchFilters = async () => {
    try {
      const { data } = await fetchExploreFiltersAPI(activeTab);
      setFilterOptions(data);
    } catch (error) {
      console.log("Error fetching filters: ", error);
    }
  };

  const onSubmitFilters = async (e) => {
    e.preventDefault();
    try {
      const { data } = fetchExploreFilteredResultsAPI({
        type: activeTab,
        ...filters,
      });
      console.log(data);
      setFilteredData(data);
      setFilters({});
    } catch (error) {
      console.log("Error fetching filtered results: ", error);
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
              onClick={() => {
                setFilters({});
                setActiveTab("Investor");
              }}
            >
              Investor
            </button>
            <button
              className={`btn_base py-3 px-3 ${
                activeTab === "Startup" ? "active" : ""
              }`}
              onClick={() => {
                setFilters({});
                setActiveTab("Startup");
              }}
            >
              Startup
            </button>
            <button
              className={`btn_base py-3 px-3 ${
                activeTab === "Founder" ? "active" : ""
              }`}
              onClick={() => {
                setFilters({});
                setActiveTab("Founder");
              }}
            >
              Founder
            </button>
          </div>

          {/* Filters */}
          <form
            className="startup_filters_container"
            onSubmit={onSubmitFilters}
          >
            {activeTab === "Investor" && (
              <>
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.sectors || sectorOptions}
                  label="Sector"
                  name="sector"
                />
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.cities}
                  label="City"
                  name="city"
                />
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.genders || genderOptions}
                  label="Gender"
                  name="gender"
                />
              </>
            )}
            {activeTab === "Startup" && (
              <>
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.sectors || sectorOptions}
                  label="Sector"
                  name="sector"
                />
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.cities}
                  label="City"
                  name="city"
                />
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.sizes || sizeOptions}
                  label="Size"
                  name="size"
                />
              </>
            )}
            {activeTab === "Founder" && (
              <>
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.sectors || sectorOptions}
                  label="Sector"
                  name="sector"
                />
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.cities}
                  label="City"
                  name="city"
                />
                <FilterBySelect
                  onChange={handleOnChange}
                  options={filterOptions?.genders || genderOptions}
                  label="Gender"
                  name="gender"
                />
              </>
            )}
            <button className="btn-capital" type="submit">
              Filter {activeTab}
            </button>
          </form>
        </div>

        {/* Companies List - pass filter props*/}
        <CompanyProfileList isStartup data={filteredData} />
      </section>
    </MaxWidthWrapper>
  );
}
