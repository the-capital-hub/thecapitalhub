import { useState } from "react";
import "./ChatSearch.scss";

import searchIcon from "../../../../Images/Chat/Search.svg";

import { Link, useNavigate } from "react-router-dom";
import { getSearchResultsAPI } from "../../../../Service/user";

const ChatSearch = () => {
  const [searchInput, setSearchInput] = useState("");
  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const [loading, setLoading] = useState(false);
  const [mobileSearch, setMobileSearch] = useState(false);

  const searchInputHandler = async ({ target }) => {
    try {
      setLoading(true);
      setSearchInput(target.value);
      const { data } = await getSearchResultsAPI(target.value);
      console.log(data);
      setSearchSuggestions(data);
    } catch (error) {
      console.error("Error getting search results : ", error);
    }
    setLoading(false);
  };

  const searchInputBlurHandler = () => {
    setTimeout(() => {
      if (mobileSearch) setMobileSearch(false);
      setInputOnFocus(false);
      setSearchSuggestions(false);
      setSearchInput("");
    }, 500);
  };
  const navigate = useNavigate();

  const searchSubmitHandler = (e) => {
    if (e) e.preventDefault();
    if (!searchInput) return;
    navigate(`/search?query=${searchInput}`);
  };

  return (
    <>
      <div className="chat_search_container">
        <h1 className="chat_title">Chats</h1>
        <div className="inputs">
          <div className="search_chat">
            <img src={searchIcon} alt="Search user" width={20} height={20} />
            <input
              type="search"
              className="w-100"
              placeholder="Search"
              value={searchInput}
              onChange={searchInputHandler}
              onFocus={() => setInputOnFocus(true)}
              onBlurCapture={searchInputBlurHandler}
            />
          </div>
          <div className="search-results-wrapper">
            {inputOnFocus && searchSuggestions && !mobileSearch && (
              <div className="search_results rounded-4 border shadow-sm p-4 position-absolute bg-white">
                {!loading ? (
                  searchSuggestions && (
                    <>
                      {!searchSuggestions?.users?.length && (
                        <h6 className="h6 text-center w-100 text-secondary">
                          No Suggestions.
                        </h6>
                      )}
                      {!!searchSuggestions?.users?.length && (
                        <span className="">Users</span>
                      )}
                      {searchSuggestions?.users
                        ?.slice(0, 5)
                        .map(({ firstName, lastName, _id }) => (
                          <Link
                            key={_id}
                            className="single_result"
                            to={`/chats?userId=${_id}`}
                          >
                            {firstName} {lastName}
                          </Link>
                        ))}
                    </>
                  )
                ) : (
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border text-secondary" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ChatSearch;
