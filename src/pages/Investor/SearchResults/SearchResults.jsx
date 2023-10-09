import { useSearchParams } from "react-router-dom";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import Filters from "../../../components/NewInvestor/SearchResults/Filters";
import ResultBar from "../../../components/NewInvestor/SearchResults/ResultBar";
import "./SearchResults.scss";
import { useEffect, useState } from "react";
import { getSearchResultsAPI } from "../../../Service/user";
import { useSelector } from "react-redux";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";

const SEARCHFILTERS = ["Industry", "Age", "Stage", "Startups"];

export default function SearchResults() {
  // Fetch Global State
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const userIdToRemove = loggedInUser._id;

  // Retrieve Query
  const [searchParams] = useSearchParams();
  // Set to state
  const [query, setQuery] = useState(searchParams.get("query"));
  // Data States
  const [peopleData, setPeopleData] = useState(null);
  const [companyData, setCompanyData] = useState(null);
  const [loading, setLoading] = useState(true);

  // Fetch search data
  useEffect(() => {
    async function fetchData() {
      console.log(query);
      const data = await getSearchResultsAPI(query);
      setPeopleData(data?.data?.users);
      setCompanyData(data?.data?.company);
      setLoading(false);
    }
    if (searchParams.has("query") && query !== searchParams.get("query")) {
      setQuery(searchParams.get("query"));
      setLoading(true);
    }
    if (searchParams.has("query")) {
      fetchData();
    }
  }, [query, searchParams]);

  useEffect(() => {
    setQuery(searchParams.get("query"));
  }, [searchParams]);
  return (
    <MaxWidthWrapper>
      <div className="search__results__wrapper px-3 border-start pb-5">
        <div className="pb-4 pt-2">
          <Filters filterLabels={SEARCHFILTERS} />
          {/* <h1>Search Filters</h1> */}
        </div>
        <div className="search__results d-flex flex-column gap-5">
          {/* People Results */}
          <section className="people__results">
            <div className="results__container bg-white shadow-sm rounded-3 pb-4">
              {/* Category */}
              <div className="p-4 border-bottom">
                <h3 className="m-0">{"People"}</h3>
              </div>
              {/* Loop through data array here */}
              {!loading ? (
                peopleData.length !== 0 ? (
                  peopleData.map((person) => {
                    const {
                      profilePicture,
                      firstName,
                      lastName,
                      designation,
                      _id,
                    } = person;
                    return (
                      <ResultBar
                        image={profilePicture}
                        name={`${firstName} ${lastName}`}
                        description={designation}
                        key={_id}
                        param={_id}
                      />
                    );
                  })
                ) : (
                  <div className="text-center py-4">
                    <h4>No Users Found</h4>
                  </div>
                )
              ) : (
                <SpinnerBS colorClass={"text-success"} />
              )}
            </div>
          </section>
          {/* Company Results */}
          <section className="companies__results">
            <div className="results__container bg-white shadow-sm rounded-3 pb-4">
              {/* Category */}
              <div className="p-4 border-bottom">
                <h3 className="m-0">{"Company"}</h3>
              </div>
              {/* Loop through data array here */}
              {!loading ? (
                companyData.length !== 0 ? (
                  companyData.map((comp) => {
                    const { logo, company, description, _id, oneLink } = comp;
                    return (
                      <ResultBar
                        image={logo}
                        name={company}
                        description={description}
                        key={_id}
                        param={oneLink}
                        isCompany
                      />
                    );
                  })
                ) : (
                  <div className="text-center py-4">
                    <h4>No Companies Found</h4>
                  </div>
                )
              ) : (
                <SpinnerBS colorClass={"text-success"} />
              )}
            </div>
          </section>
        </div>
      </div>
    </MaxWidthWrapper>
  );
}
