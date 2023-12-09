import "./investorNavbar.scss";
import Logo from "../../../Images/investorIcon/new-logo.png";
import { FiSearch } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
  getSearchResultsAPI,
  getNotificationCount,
} from "../../../Service/user";
import NotificationsPopup from "./NotificationsPopup/NotificationsPopup";
import { useRef } from "react";
import OnboardingSwitch from "./OnboardingSwitch/OnboardingSwitch";
import {
  selectIsMobileView,
  selectNotificationtModal,
} from "../../../Store/features/design/designSlice";
import {
  selectLoggedInUserId,
  selectUnreadNotifications,
  selectUserProfilePicture,
  setUnreadNotifications,
} from "../../../Store/features/user/userSlice";
import { BsBell } from "react-icons/bs";
import { AiOutlineMessage } from "react-icons/ai";
import { MdMenu, MdMenuOpen } from "react-icons/md";

// Startup navbar
const InvestorNavbar = (props) => {
  const loggedInUserId = useSelector(selectLoggedInUserId);
  const userProfilePicture = useSelector(selectUserProfilePicture);
  const isMobileView = useSelector(selectIsMobileView);
  const isNotificationModalOpen = useSelector(selectNotificationtModal);
  const unreadNotifications = useSelector(selectUnreadNotifications);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // const [url, setUrl] = useState("Home");
  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [toggleNotificationPopup, setToggleNotificationPopup] = useState(false);
  const notificationPopup = useRef();

  useEffect(() => {
    getNotificationCount()
      .then(({ data }) => {
        console.log(data.unreadCount);
        // setNotificationCount(data.unreadCount);
        dispatch(setUnreadNotifications(data.unreadCount));
      })
      .catch((error) => console.error(error));
  }, [loggedInUserId, dispatch]);

  // useEffect(() => {
  //   let url = window.location.href;
  //   if (window.location.href.includes("?")) {
  //     url = url.split("?")[0];
  //   }
  //   url = url.split("/");
  //   const title =
  //     url[url.length - 1]?.length < 16
  //       ? url[url.length - 1]
  //       : url[url.length - 2];
  //   console.log(url[url.length - 1]?.length);
  //   setUrl(title);
  // }, [window.location.href]);

  const searchInputHandler = async ({ target }) => {
    try {
      setLoading(true);
      setSearchInput(target.value);
      const { data } = await getSearchResultsAPI(target.value);
      console.log("search suggestions", data);
      setSearchSuggestions(data);
    } catch (error) {
      console.error("Error getting search results : ", error);
    }
    setLoading(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        notificationPopup.current &&
        !notificationPopup.current.contains(event.target)
      ) {
        setToggleNotificationPopup(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleNotificationPopup]);

  const searchSubmitHandler = (e) => {
    if (e) e.preventDefault();
    if (!searchInput) return;
    navigate(`/search?query=${searchInput}`);
  };

  const searchInputBlurHandler = () => {
    setTimeout(() => {
      if (mobileSearch) setMobileSearch(false);
      setInputOnFocus(false);
      setSearchSuggestions(false);
      setSearchInput("");
    }, 500);
  };
  const [mobileSearch, setMobileSearch] = useState(false);

  const pageTitle = useSelector((state) => state.design.pageTitle);

  return (
    <>
      <div className="container pt-1  mb-4 mb-xl-0">
        <div className="d-flex investor_navbar justify-content-between">
          <div className="d-flex">
            <div className="row bar_logo_container ">
              <div className="logo_container">
                <img
                  src={Logo}
                  onClick={() => navigate("/home")}
                  alt="the capital hub logo"
                />
              </div>
              <div
                className="mobile-home-hamberger"
                onClick={props.handleSidebarToggle}
              >
                {props.sidebarCollapsed ? (
                  <MdMenu
                    size={25}
                    style={{
                      color: "var(--d-l-grey)",
                    }}
                  />
                ) : (
                  <MdMenuOpen
                    size={25}
                    style={{
                      color: "var(--currentTheme)",
                    }}
                  />
                )}
                 <h1 className="ms-2 text-break">{pageTitle}</h1>
              </div>
            </div>
          </div>

          {/* Navbar right */}
          <div className="navbar_right_container">
            <div className="search_container position-relative">
              <form
                onSubmit={searchSubmitHandler}
                className="searchbar-container"
              >
                <input
                  type="text"
                  className="searchbar-input"
                  placeholder="Search"
                  style={{
                    width: `${inputOnFocus ? "400px" : "100%"}`,
                  }}
                  value={searchInput}
                  onChange={searchInputHandler}
                  onFocus={() => setInputOnFocus(true)}
                  onBlurCapture={searchInputBlurHandler}
                />
                <button
                  type="submit"
                  className="searchbar-button d-flex align-items-center justify-content-center"
                >
                  <FiSearch size={25} color="white" />
                </button>
              </form>
              {inputOnFocus && searchSuggestions && !mobileSearch && (
                <div className="search_results rounded-4 border shadow-sm p-4 position-absolute">
                  {!loading ? (
                    searchSuggestions && (
                      <>
                        {!searchSuggestions?.company?.length &&
                          !searchSuggestions?.users?.length && (
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
                              to={`/user/${_id}`}
                            >
                              {firstName} {lastName}
                            </Link>
                          ))}
                        {searchSuggestions?.users?.length > 5 && (
                          <span className="w-100 d-flex justify-content-center">
                            <button
                              className="btn btn-xs btn-light"
                              onClick={() => {
                                searchSubmitHandler();
                                searchInputBlurHandler();
                              }}
                            >
                              Show more
                            </button>
                          </span>
                        )}
                        {!!searchSuggestions?.company?.length && (
                          <span className="mt-2">Companies</span>
                        )}
                        {searchSuggestions?.company
                          ?.slice(0, 5)
                          .map(({ company, founderId, _id, isInvestor }) => (
                            <span className="single_result">
                              <Link
                                to={
                                  isInvestor
                                    ? `/company-profile/${_id}?investor=1`
                                    : `/company-profile/${founderId}`
                                }
                              >
                                {company}
                              </Link>
                            </span>
                          ))}
                        {searchSuggestions?.company?.length > 5 && (
                          <span className="w-100 d-flex justify-content-center">
                            <button
                              className="btn btn-xs btn-light"
                              onClick={() => {
                                searchSubmitHandler();
                                searchInputBlurHandler();
                              }}
                            >
                              Show more
                            </button>
                          </span>
                        )}
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

            {/* Search for mobile view start*/}
            {mobileSearch && (
              <div className="search_container_mobile rounded-4 shadow-sm border p-3 position-absolute d-flex flex-column">
                <form
                  onSubmit={searchSubmitHandler}
                  className="searchbar-container "
                >
                  <input
                    type="text"
                    className="searchbar-input"
                    placeholder="Search"
                    value={searchInput}
                    onChange={searchInputHandler}
                    onFocus={() => setInputOnFocus(true)}
                    onBlurCapture={(e) =>
                      setTimeout(() => {
                        searchInputBlurHandler(e);
                      }, 500)
                    }
                  />
                  <button
                    type="submit"
                    className="searchbar-button d-flex align-items-center justify-content-center"
                  >
                    <FiSearch size={25} color="white" />
                  </button>
                </form>
                {inputOnFocus && searchSuggestions && mobileSearch && (
                  <div className="search_results py-4 px-2">
                    {!loading ? (
                      searchSuggestions && (
                        <>
                          {!searchSuggestions?.company?.length &&
                            !searchSuggestions?.users?.length && (
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
                              <span
                                key={_id}
                                className="single_result"
                                onClick={() => navigate(`/user/${_id}`)}
                              >
                                {firstName} {lastName}
                              </span>
                            ))}
                          {searchSuggestions?.users?.length > 5 && (
                            <span className="w-100 d-flex justify-content-center">
                              <button
                                className="btn btn-xs btn-light"
                                onClick={() => {
                                  searchSubmitHandler();
                                  searchInputBlurHandler();
                                }}
                              >
                                Show more
                              </button>
                            </span>
                          )}
                          {!!searchSuggestions?.company?.length && (
                            <span className="mt-2">Companies</span>
                          )}
                          {searchSuggestions?.company
                            ?.slice(0, 5)
                            .map(({ company, founderId }) => (
                              <span className="single_result">
                                <Link to={`/company-profile/${founderId}`}>
                                  {company}
                                </Link>
                              </span>
                            ))}
                          {searchSuggestions?.company?.length > 5 && (
                            <span className="w-100 d-flex justify-content-center">
                              <button
                                className="btn btn-xs btn-light"
                                onClick={() => {
                                  searchSubmitHandler();
                                  searchInputBlurHandler();
                                }}
                              >
                                Show more
                              </button>
                            </span>
                          )}
                        </>
                      )
                    ) : (
                      <div class="d-flex justify-content-center">
                        <div
                          class="spinner-border text-secondary"
                          role="status"
                        >
                          <span class="visually-hidden">Loading...</span>
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}

            <div className="icons-container">
              {/* Search for mobile view start*/}
              <div className="mobile-icon-wrapper position-relative ">
                <span
                  className="notification-icon"
                  onClick={() => setMobileSearch((prev) => !prev)}
                >
                  <FiSearch
                    size={25}
                    style={{
                      color: "var(--d-l-grey)",
                    }}
                  />
                </span>
              </div>

              {/* Onboarding Tutorial */}
              {isMobileView ? "" : <OnboardingSwitch />}

              {/* <Link
                to="/notifications"
                className="rounded-circle notification-icon"
              > */}

              {/* Notification */}
              <div
                className={`notification-container icon-wrapper`}
                ref={notificationPopup}
              >
                {isNotificationModalOpen || toggleNotificationPopup ? (
                  <>
                    <BsBell
                      size={25}
                      style={{
                        color: "var(--currentTheme)",
                      }}
                      onClick={() =>
                        setToggleNotificationPopup((prev) => !prev)
                      }
                    />
                    <NotificationsPopup
                      toggleVisibility={setToggleNotificationPopup}
                    />
                  </>
                ) : (
                  <>
                    {/* <img
                      src={NotificationIcon}
                      alt="notification"
                      onClick={() => {
                        setToggleNotificationPopup((prev) => !prev);
                        dispatch(setUnreadNotifications(0));
                      }}
                    /> */}
                    <BsBell
                      size={25}
                      style={{
                        color: "var(--d-l-grey)",
                      }}
                      onClick={() => {
                        setToggleNotificationPopup((prev) => !prev);
                        dispatch(setUnreadNotifications(0));
                      }}
                    />
                    {!toggleNotificationPopup && unreadNotifications > 0 && (
                      <div className="notification-count">
                        {unreadNotifications}
                      </div>
                    )}
                  </>
                )}
              </div>

              {/* </Link> */}
              <Link to="/chats" className="rounded-circle message-icon">
                <div className="icon-wrapper">
                  {/* <img src={MessageIcon} alt="message" /> */}
                  <AiOutlineMessage
                    size={25}
                    style={{
                      color: "var(--d-l-grey)",
                    }}
                  />
                </div>
              </Link>
              {/* <div className="icon-wrapper d-none d-md-block"> */}
              <div className="icon-wrapper">
                <Link
                  to={"/manage-account"}
                  className="p-0 p-md-1 border border-light rounded-circle"
                >
                  <img
                    className="profile-pic rounded-circle"
                    src={userProfilePicture}
                    alt="Profile"
                    style={{ objectFit: "cover" }}
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
