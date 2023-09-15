import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import SearchFilters from "../../../components/NewInvestor/SearchResults/SearchFilters";
import "./SearchResults.scss";

export default function SearchResults() {
  return (
    <div className="search__results__wrapper px-3 border-start pb-5">
      <div className="pb-4 pt-2">
        <SearchFilters />
        {/* <h1>Search Filters</h1> */}
      </div>
      <div className="results__container">
        <CompanyProfile />
      </div>
    </div>
  );
}
