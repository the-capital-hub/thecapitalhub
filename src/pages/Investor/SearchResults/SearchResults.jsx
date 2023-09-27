import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import Filters from "../../../components/NewInvestor/SearchResults/Filters";
import "./SearchResults.scss";

const SEARCHFILTERS = ["Industry", "Age", "Stage", "Startups"];

export default function SearchResults() {
  return (
    <div className="search__results__wrapper px-3 border-start pb-5">
      <div className="pb-4 pt-2">
        <Filters filterLabels={SEARCHFILTERS} />
        {/* <h1>Search Filters</h1> */}
      </div>
      <div className="results__container">
        <CompanyProfile />
      </div>
    </div>
  );
}
