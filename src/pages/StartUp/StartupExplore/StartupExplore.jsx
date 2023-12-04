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
// import OnBoardUser from "../../../components/OnBoardUser/OnBoardUser";
import { startupOnboardingSteps } from "../../../components/OnBoardUser/steps/startup";
import {
  sectorOptions,
  ageOptions,
  diversityMetricsOptions,
  educationOptions,
  fundingRaisedOptions,
  genderOptions,
  investmentSizeOptions,
  investmentStageOptions,
  previousExitsOptions,
  productStageOptions,
  sizeOptions,
  stageOptions,
  yearsOfExperienceOptions,
} from "../../../constants/Startups/ExplorePage";
import TutorialTrigger from "../../../components/Shared/TutorialTrigger/TutorialTrigger";

export default function StartupExplore() {
  // const showOnboarding = useSelector(selectShowOnboarding);

  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("Investor");
  const [filterOptions, setFilterOptions] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Explore | The Capital Hub";
    dispatch(setPageTitle("Explore"));
  }, [dispatch]);

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
      <section className="startup_explore_wrapper d-flex flex-column gap-3 my-5">
        {/* <SmallProfileCard/> */}

        {/* Onboarding popup */}
        <TutorialTrigger steps={startupOnboardingSteps.explorePage} />

        {/* Header */}
        <div className="filter_container bg-white rounded-4 shadow-sm d-flex flex-column gap-4 px-4 py-4">
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
                className={`btn-capital-small p-2 p-md-3 ms-auto`}
                onClick={fetchInitialData}
              >
                <span className="d-none d-md-block">Show All</span>
                <span className="d-md-none">X</span>
              </button>
            )}
          </div>

          {/* Filters */}
          <form onSubmit={onSubmitFilters}>
            <div className="startup_filters_container">
              {activeTab === "Investor" && (
                <>
                  <FilterBySelect
                    value={filters?.sector}
                    onChange={handleOnChange}
                    options={filterOptions?.sectors || sectorOptions}
                    label="Sector"
                    name="sector"
                  />
                  <FilterBySelect
                    value={filters?.city}
                    onChange={handleOnChange}
                    options={filterOptions?.cities}
                    label="City"
                    name="city"
                  />
                  <FilterBySelect
                    value={filters?.gender}
                    onChange={handleOnChange}
                    options={filterOptions?.genders || genderOptions}
                    label="Gender"
                    name="gender"
                  />
                  <FilterBySelect
                    value={filters?.sectorPreference}
                    onChange={handleOnChange}
                    options={filterOptions?.sectors || sectorOptions}
                    label="Sector Preference"
                    name="sectorPreference"
                  />
                  <FilterBySelect
                    value={filters?.investmentSize}
                    onChange={handleOnChange}
                    options={
                      filterOptions?.investmentSize || investmentSizeOptions
                    }
                    label="Investment Size"
                    name="investmentSize"
                  />
                  <FilterBySelect
                    value={filters?.investmentStage}
                    onChange={handleOnChange}
                    options={
                      filterOptions?.investmentStage || investmentStageOptions
                    }
                    label="Investment Stage"
                    name="investmentStage"
                  />
                </>
              )}
              {activeTab === "Startup" && (
                <>
                  <FilterBySelect
                    value={filters?.sector}
                    onChange={handleOnChange}
                    options={filterOptions?.sectors || sectorOptions}
                    label="Sector"
                    name="sector"
                  />
                  <FilterBySelect
                    value={filters?.city}
                    onChange={handleOnChange}
                    options={filterOptions?.cities}
                    label="City"
                    name="city"
                  />
                  <FilterBySelect
                    value={filters?.size}
                    onChange={handleOnChange}
                    options={filterOptions?.sizes || sizeOptions}
                    label="Size"
                    name="size"
                  />
                  <FilterBySelect
                    value={filters?.fundingRaised}
                    onChange={handleOnChange}
                    options={
                      filterOptions?.fundingRaised || fundingRaisedOptions
                    }
                    label="Funding Raised"
                    name="fundingRaised"
                  />
                  <FilterBySelect
                    value={filters?.productStage}
                    onChange={handleOnChange}
                    options={filterOptions?.productStage || productStageOptions}
                    label="Product Stage"
                    name="productStage"
                  />
                  <FilterBySelect
                    value={filters?.stage}
                    onChange={handleOnChange}
                    options={filterOptions?.stage || stageOptions}
                    label="Stage"
                    name="stage"
                  />
                  <FilterBySelect
                    value={filters?.age}
                    onChange={handleOnChange}
                    options={filterOptions?.age || ageOptions}
                    label="Age"
                    name="age"
                  />
                </>
              )}
              {activeTab === "Founder" && (
                <>
                  <FilterBySelect
                    value={filters?.sector}
                    onChange={handleOnChange}
                    options={filterOptions?.sectors || sectorOptions}
                    label="Sector"
                    name="sector"
                  />
                  <FilterBySelect
                    value={filters?.city}
                    onChange={handleOnChange}
                    options={filterOptions?.cities}
                    label="City"
                    name="city"
                  />
                  <FilterBySelect
                    value={filters?.gender}
                    onChange={handleOnChange}
                    options={filterOptions?.genders || genderOptions}
                    label="Gender"
                    name="gender"
                  />
                  <FilterBySelect
                    value={filters?.previousExits}
                    onChange={handleOnChange}
                    options={
                      filterOptions?.previousExits || previousExitsOptions
                    }
                    label="Previous Exits"
                    name="previousExits"
                  />
                  <FilterBySelect
                    value={filters?.yearsOfExperience}
                    onChange={handleOnChange}
                    options={
                      filterOptions?.yearsOfExperience ||
                      yearsOfExperienceOptions
                    }
                    label="Years of Experience"
                    name="yearsOfExperience"
                  />
                  <FilterBySelect
                    value={filters?.education}
                    onChange={handleOnChange}
                    options={filterOptions?.education || educationOptions}
                    label="Education"
                    name="education"
                  />
                  <FilterBySelect
                    value={filters?.diversityMetrics}
                    onChange={handleOnChange}
                    options={
                      filterOptions?.diversityMetrics || diversityMetricsOptions
                    }
                    label="Diversity Metrics"
                    name="diversityMetrics"
                  />
                </>
              )}
            </div>
            <div className="d-flex flex-column flex-md-row gap-2 py-3">
              <input
                type="search"
                className="search-filter-input"
                placeholder="Search"
                name="searchQuery"
                onChange={handleOnChange}
              />
              <button className="filter_button btn-capital " type="submit">
                Filter {activeTab}
              </button>
            </div>
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
      {/* {showOnboarding ? (
        <OnBoardUser steps={startupOnboardingSteps.explorePage} />
      ) : (
        ""
      )} */}
    </MaxWidthWrapper>
  );
}
