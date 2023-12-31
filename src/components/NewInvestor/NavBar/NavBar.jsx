import React from "react";
import "./NavBar.scss";
// import searchIconBlack from "../../../Images/navbar/Search.svg";
import Logo from "../../../Images/investorIcon/new-logo.png";
// import NotificationIcon from "../../../Images/investorIcon/notification.svg";
// import YellowNotificationIcon from "../../../Images/investorIcon/YellowNotificationIcon.svg";
// import MessageIcon from "../../../Images/investorIcon/message.svg";
import { FiSearch } from "react-icons/fi";
// import searchIcon from "../../../Images/investorIcon/searchIcon.svg";
// import HambergerIcon from "../../../Images/Hamberger.svg";
// import HambergerCrossIcon from "../../../Images/investorsidebar/FontX.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import {
  getSearchResultsAPI,
  getNotificationCount,
} from "../../../Service/user";
import NotificationsPopup from "../../Investor/InvestorNavbar/NotificationsPopup/NotificationsPopup";
import { useRef } from "react";
import {
  selectIsMobileView,
  selectNotificationtModal,
} from "../../../Store/features/design/designSlice";
import {
  selectUnreadNotifications,
  selectUserProfilePicture,
  setUnreadNotifications,
} from "../../../Store/features/user/userSlice";
import OnboardingSwitch from "../../Investor/InvestorNavbar/OnboardingSwitch/OnboardingSwitch";
import { IoIosSearch, IoMdNotificationsOutline } from "react-icons/io";
import { AiOutlineMessage } from "react-icons/ai";
import { IoClose, IoReorderThreeOutline } from "react-icons/io5";

const NavBar = (props) => {
  // Fetch global states
  const userProfilePicture = useSelector(selectUserProfilePicture);
  const pageTitle = useSelector((state) => state.design.pageTitle);
  const isNotificationModalOpen = useSelector(selectNotificationtModal);
  const unreadNotifications = useSelector(selectUnreadNotifications);
  const isMobileView = useSelector(selectIsMobileView);

  const [searchSuggestions, setSearchSuggestions] = useState(false);
  const [searchInput, setSearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [inputOnFocus, setInputOnFocus] = useState(false);
  const [toggleNotificationPopup, setToggleNotificationPopup] = useState(false);
  const notificationPopup = useRef();
  console.log(toggleNotificationPopup);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    getNotificationCount()
      .then(({ data }) => {
        // console.log(data.unreadCount);
        dispatch(setUnreadNotifications(data.unreadCount));
      })
      .catch((error) => console.error(error));
  }, [dispatch]);

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

  const searchSubmitHandler = (e) => {
    if (e) e.preventDefault();
    if (!searchInput) return;
    navigate(`/investor/search?query=${searchInput}`);
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

  useEffect(() => {
    function handleClickOutside(event) {
      if (notificationPopup.current && !event.target.closest(".noticon")) {
        setToggleNotificationPopup(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [toggleNotificationPopup]);

  return (
    <>
      <div className="container pt-1  mb-4 mb-xl-0">
        <div className="d-flex my-investor_navbar justify-content-between">
          <div className="d-flex">
            <div className="row bar_logo_container ">
              <div className="logo_container">
                <img
                  src={Logo}
                  height={""}
                  onClick={() => navigate("/investor/home")}
                  alt="the capital hub logo"
                />
              </div>
              <div
                className="mobile-home-hamberger"
                onClick={props.handleSidebarToggle}
              >
                {props.sidebarCollapsed ? (
                  // <img src={HambergerIcon} alt="bar" />
                  <IoReorderThreeOutline
                    size={25}
                    style={{
                      fill: "var(--d-l-grey)",
                      stroke: "var(--d-l-grey)",
                    }}
                  />
                ) : (
                  // <img src={HambergerCrossIcon} alt="bar" />
                  <IoClose
                    size={25}
                    style={{
                      fill: "var(--d-l-grey)",
                      stroke: "var(--d-l-grey)",
                    }}
                  />
                )}
                <h1 className="ms-2">{pageTitle}</h1>
              </div>
            </div>
          </div>
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
                  className="investor-searchbar-button d-flex align-items-center justify-content-center"
                >
                  <FiSearch size={25} color="black" />
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
                          <span className="search-heading">Users</span>
                        )}
                        {searchSuggestions?.users
                          ?.slice(0, 5)
                          .map(({ firstName, lastName, _id, oneLinkId }) => (
                            <Link
                              key={_id}
                              className="single_result"
                              to={`/investor/user/${
                                firstName.toLowerCase() +
                                "-" +
                                lastName.toLowerCase()
                              }/${oneLinkId}`}
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
                          <span className="search-heading mt-2">Companies</span>
                        )}
                        {searchSuggestions?.company
                          ?.slice(0, 5)
                          .map((company) => (
                            <span className="single_result">
                              <Link
                                to={
                                  company.isInvestor
                                    ? `/investor/company-profile/${company.oneLink}?investor=1`
                                    : `/investor/company-profile/${company.oneLink}`
                                }
                              >
                                {company.company}
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
            <div className="icons-container">
              <div className="mobile-icon-wrapper position-relative ">
                <span
                  className="notification-icon"
                  onClick={() => setMobileSearch((prev) => !prev)}
                >
                  <IoIosSearch size={30} style={{ fill: "var(--d-l-grey)" }} />
                </span>
              </div>

              {/* Onboarding Tutorial */}
              {isMobileView ? "" : <OnboardingSwitch />}

              {/* Notifications */}
              {/* <Link
                to="/notifications"
                className="rounded-circle notification-icon"
              > */}
              <div
                className={`notification-container icon-wrapper`}
                ref={notificationPopup}
              >
                {isNotificationModalOpen || toggleNotificationPopup ? (
                  <>
                    <IoMdNotificationsOutline
                      size={30}
                      style={{ fill: "var(--currentTheme-dark)" }}
                      className="noticon"
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
                    <IoMdNotificationsOutline
                      size={30}
                      style={{ fill: "var(--d-l-grey)" }}
                      className="noticon"
                      onClick={() => {
                        dispatch(setUnreadNotifications(0));
                        setToggleNotificationPopup((prev) => !prev);
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
                    size={28}
                    style={{ fill: "var(--d-l-grey)" }}
                  />
                </div>
              </Link>
              {/* <div className="icon-wrapper d-none d-md-block"> */}
              <div className="icon-wrapper">
                <Link to={"/investor/manage-account"}>
                  {" "}
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
                  <FiSearch size={25} color="black" />
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
                          <span className="search-heading">Users</span>
                        )}
                        {searchSuggestions?.users
                          ?.slice(0, 5)
                          .map(({ firstName, lastName, _id, oneLinkId }) => (
                            <span
                              key={_id}
                              className="single_result"
                              onClick={() =>
                                navigate(
                                  `user/${
                                    firstName.toLowerCase() +
                                    "-" +
                                    lastName.toLowerCase()
                                  }/${oneLinkId}`
                                )
                              }
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
                          <span className="mt-2 search-heading">Companies</span>
                        )}
                        {searchSuggestions && searchSuggestions.company
                          ? searchSuggestions.company
                              .slice(0, 5)
                              .map((item, index) => (
                                <span
                                  className="single_result"
                                  key={item.oneLink}
                                >
                                  <Link
                                    to={
                                      item.company.isInvestor
                                        ? `/investor/company-profile/${item.oneLink}?investor=1`
                                        : `/investor/company-profile/${item.oneLink}`
                                    }
                                    className="d-l-grey"
                                  >
                                    {item.company}
                                  </Link>
                                </span>
                              ))
                          : null}

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
          )}
        </div>
      </div>
    </>
  );
};

export default NavBar;
