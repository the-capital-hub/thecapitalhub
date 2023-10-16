import React, { useState, useEffect } from "react";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
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
import PersonProfileList from "../../../components/Shared/PersonProfileComponents/PersonProfileList";

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
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("Investor");
  const [filterOptions, setFilterOptions] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Explore | The Capital Hub";
    dispatch(setPageTitle("Explore"));
  }, []);

  useEffect(() => {
    fetchFilters();
    onSubmitFilters();
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
    e?.preventDefault();
    setLoading(true);
    try {
      const { data } = await fetchExploreFilteredResultsAPI({
        type: activeTab,
        ...filters,
      });
      setFilteredData(data);
    } catch (error) {
      console.log("Error fetching filtered results: ", error);
    } finally {
      setLoading(false);
    }
  };
  const fetchInitialData = async () => {
    setFilters(null);
    setLoading(true);
    try {
      const { data } = await fetchExploreFilteredResultsAPI({
        type: activeTab,
      });
      setFilteredData(data);
    } catch (error) {
      console.log("Error fetching initial filtered results: ", error);
    } finally {
      setLoading(false);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case "Startup":
        return <CompanyProfileList isStartup data={filteredData} />;
      case "Founder":
        return (
          <PersonProfileList
            theme={"startup"}
            short={true}
            data={filteredData}
          />
        );
      case "Investor":
        return (
          <PersonProfileList
            theme={"startup"}
            short={true}
            data={filteredData}
          />
        );
      default:
        return null;
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
                setFilters(null);
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
                setFilters(null);
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
                setFilters(null);
                setActiveTab("Founder");
              }}
            >
              Founder
            </button>
            {filters && (
              <button
                className={`btn-capital-small py-3 px-3 ms-auto`}
                onClick={fetchInitialData}
              >
                Show All
              </button>
            )}
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

        <div className="filtered-results">
          {loading ? (
            <SpinnerBS
              className="container bg-white d-flex justify-content-center align-items-center p-5 rounded-4 shadow-sm"
              colorClass="text-secondary"
              spinnerSizeClass="xl"
            />
          ) : (
            <>
              {!filteredData?.length ? (
                <div className="container bg-white d-flex justify-content-center align-items-center p-5 rounded-4 shadow-sm">
                  No {activeTab} found
                </div>
              ) : (
                renderTabContent()
              )}
            </>
          )}
        </div>
      </section>
    </MaxWidthWrapper>
  );
}
