import "./investorNavbar.scss";
import searchIconBlack from "../../../Images/navbar/Search.svg";
import Logo from "../../../Images/investorIcon/Logo.svg";
import NotificationIcon from "../../../Images/investorIcon/notification.svg";
import MessageIcon from "../../../Images/investorIcon/message.svg";
import searchIcon from "../../../Images/investorIcon/searchIcon.svg";
import HambergerIcon from "../../../Images/Hamberger.svg";
import HambergerCrossIcon from "../../../Images/investorsidebar/FontX.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import { getSearchResultsAPI } from "../../../Service/user";

const InvestorNavbar = (props) => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [url, setUrl] = useState("Home");
  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputOnFocus, setInputOnFocus] = useState(false);

  useEffect(() => {
    const url = window.location.href.split("/");
    setUrl(
      url[url.length - 1].length < 16
        ? url[url.length - 1]
        : url[url.length - 2]
    );
  }, [window.location.href]);

  const searchInputHandler = async ({ target }) => {
    try {
      setLoading(true);
      setSearchInput(target.value);
      const { data } = await getSearchResultsAPI(target.value);
      setSearchSuggestions(data);
    } catch (error) {
      console.error("Error getting search results : ", error);
    }
    setLoading(false);
  };

  return (
    <>
      <div className="container pt-1  mb-4 mb-xl-0">
        <div className="d-flex investor_navbar justify-content-between">
          <div className="d-flex">
            <div className="row bar_logo_container ">
              <div className="logo_container">
                <img src={Logo} alt="bar" />
              </div>
              <div
                className="mobile-home-hamberger"
                onClick={props.handleSidebarToggle}
              >
                {props.sidebarCollapsed ? (
                  <img src={HambergerIcon} alt="bar" />
                ) : (
                  <img src={HambergerCrossIcon} alt="bar" />
                )}
                <h1 className="ms-2">{url}</h1>
              </div>
            </div>
          </div>
          <div className="navbar_right_container">
            <div className="search_container position-relative">
              <div className="searchbar-container">
                <input
                  type="text"
                  className="searchbar-input"
                  placeholder="Search"
                  value={searchInput}
                  onChange={searchInputHandler}
                  onFocus={() => setInputOnFocus(true)}
                  onBlurCapture={() => {
                    setSearchInput("");
                    setSearchSuggestions(false);
                    setInputOnFocus(false);
                  }}
                />
                <button className="searchbar-button">
                  <img src={searchIcon} alt="search" />
                </button>
              </div>
              {inputOnFocus && searchSuggestions && (
                <div className="search_results rounded-5 border shadow-sm p-4 position-absolute bg-white">
                  {!loading ? (
                    searchSuggestions && (
                      <>
                        {!!searchSuggestions?.users?.length && (
                          <span className="">Users</span>
                        )}
                        {searchSuggestions?.users
                          ?.slice(0, 5)
                          .map(({ firstName, lastName }) => (
                            <span className="single_result">
                              <Link to={`#`}>
                                {firstName} {lastName}
                              </Link>
                            </span>
                          ))}
                        {!!searchSuggestions?.company?.length && (
                          <span className="mt-2">Companies</span>
                        )}
                        {searchSuggestions?.company
                          ?.slice(0, 5)
                          .map(({ company }) => (
                            <span className="single_result">
                              <Link to={`#`}>{company}</Link>
                            </span>
                          ))}
                      </>
                    )
                  ) : (
                    <h6 className="h6 text-center w-100 text-secondary">
                      Loading...
                    </h6>
                  )}
                </div>
              )}
            </div>

            <div className="icons-container">
              <div className="mobile-icon-wrapper ">
                <span className="notification-icon">
                  <img src={searchIconBlack} alt="notification" />
                </span>
              </div>

              <Link
                to="/notifications"
                className="rounded-circle notification-icon"
              >
                <div className="icon-wrapper">
                  <img src={NotificationIcon} alt="notification" />
                </div>
              </Link>
              <Link to="/messages" className="rounded-circle message-icon">
                <div className="icon-wrapper">
                  <img src={MessageIcon} alt="message" />
                </div>
              </Link>
              {/* <div className="icon-wrapper d-none d-md-block"> */}
              <div className="icon-wrapper">
                <Link to={"/manage-account"}>
                  {" "}
                  <img
                    className="profile-pic rounded-circle"
                    src={loggedInUser.profilePicture}
                    alt="Profile"
                  />
                </Link>
                {/* <span className="me">Me</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InvestorNavbar;
