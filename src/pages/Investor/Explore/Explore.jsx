import "./Explore.scss";
import { useState, useEffect } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import Company from "../../../components/NewInvestor/Company/Company";
import FilterBySelect from "../../../components/NewInvestor/FilterBySelect/FilterBySelect";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import CompanyProfileList from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfileList";
import { useDispatch } from "react-redux";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import PersonProfileList from "../../../components/Shared/PersonProfileComponents/PersonProfileList";
import {
  fetchExploreFilteredResultsAPI,
  fetchExploreFiltersAPI,
} from "../../../Service/user";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";

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

function Explore() {
  const dispatch = useDispatch();

  const [activeTab, setActiveTab] = useState("Startup");
  const [filterOptions, setFilterOptions] = useState([]);
  const [filters, setFilters] = useState({});
  const [filteredData, setFilteredData] = useState(null);
  const [loading, setLoading] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "Explore | Investors - The Capital Hub";
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

  // Render filter result
  const renderTabContent = () => {
    switch (activeTab) {
      case "Startup":
        return <CompanyProfileList isStartup={false} data={filteredData} />;
      case "Founder":
        return (
          <PersonProfileList
            theme={"investor"}
            short={true}
            data={filteredData}
          />
        );
      case "Investor":
        return (
          <PersonProfileList
            theme={"investor"}
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
      <div className="explore_container px-3 border-start mb-4">
        <SmallProfileCard text="Explore" />
        <section className="filter_container border">
          <h5 className="h5">Find StartUps by</h5>
          <div className="filter_by">
            <button
              className={activeTab === "Startup" ? "active" : ""}
              onClick={() => {
                setFilters(null);
                setActiveTab("Startup");
              }}
            >
              Startup
            </button>
            <button
              className={activeTab === "Founder" ? "active" : ""}
              onClick={() => {
                setFilters(null);
                setActiveTab("Founder");
              }}
            >
              Founder
            </button>
            <button
              className={activeTab === "Investor" ? "active" : ""}
              onClick={() => {
                setFilters(null);
                setActiveTab("Investor");
              }}
            >
              Investor
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
          <form
            className="investor_explore_filters_container"
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
            <button className="btn-capital ms-auto" type="submit">
              Filter {activeTab}
            </button>
          </form>
          {/* <FilterBySelect label="Sector" name="sector" />
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
            {activeTab === "Founder" && (
              <>
                <FilterBySelect label="Incubation" name="incubation" />
                <FilterBySelect label="Incubation" name="incubation" />
              </>
            )} */}
        </section>

        {/* Filtered data list */}
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
      </div>
    </MaxWidthWrapper>
  );
}

export default Explore;
