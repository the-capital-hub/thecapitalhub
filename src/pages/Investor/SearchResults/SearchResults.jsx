import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import SearchFilters from "../../../components/NewInvestor/SearchResults/SearchFilters";
import "./SearchResults.scss";

export default function SearchResults() {
  return (
    <div className="search__results__wrapper">
      <div className="">
        <SearchFilters />
        {/* <h1>Search Filters</h1> */}
      </div>
      <div className="results__container border-start">
        <CompanyProfile />
      </div>
    </div>
  );
}
