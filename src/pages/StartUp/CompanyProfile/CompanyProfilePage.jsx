import React, { useState, useEffect } from "react";
import "./CompanyProfilePage.scss";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import {
  getStartupByFounderId,
  searchStartUps,
  addStartUpToUser,
  updateUserAPI,
} from "../../../Service/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import DefaultAvatar from "../../../Images/Chat/default-user-avatar.webp";
import AfterSuccessPopUp from "../../../components/PopUp/AfterSuccessPopUp/AfterSuccessPopUp";
import { useNavigate } from "react-router-dom";
import { setPageTitle } from "../../../Store/features/design/designSlice";

export default function CompanyProfilePage() {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();

  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    if (!loggedInUser?.investor) {
      setLoading(true);
      getStartupByFounderId(loggedInUser._id)
        .then(({ data }) => {
          setCompanyData(data);
          setLoading(false);
        })
        .catch((error) => {
          setLoading(false);
          console.error("Error fetching startup data:", error.message);
        });
    }
    document.title = "Company Profile | The Capital Hub";
    dispatch(setPageTitle("Company"));
  }, [dispatch]);

  const handleSearchInputChange = (e) => {
    const newValue = e.target.value;
    // if (newValue.length > 2) {
    searchStartUps(newValue)
      .then(({ data }) => {
        setCompanies(data);
        console.log(data);
      })
      .catch(() => {
        setCompanies([]);
      });
    // }
    setSelectedCompanyId(null);
  };

  const handleCompanySelection = (companyId, companyName) => {
    setSelectedCompanyId(companyId);
    const searchInput = document.querySelector(".search-company-input");
    searchInput.value = companyName;
  };

  const handleAddStartup = async () => {
    try {
      const response = await addStartUpToUser(
        loggedInUser._id,
        selectedCompanyId
      );
      if (response.status === 200) {
        setShowSuccess(true);
        getStartupByFounderId(loggedInUser._id)
          .then(({ data }) => {
            setCompanyData(data);
            setSelectedCompanyId(null);
            setCompanies([]);
          })
          .catch((error) => {
            console.error("Error fetching startup data:", error.message);
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddNew = async () => {
    try {
      const requestBody = {
        userId: loggedInUser._id,
        startUp: null,
      };
      const response = await updateUserAPI(requestBody);
      console.log(response);
      navigate("/company-profile/edit");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <MaxWidthWrapper>
      <div className="companyProfilePage__wrapper">
        {/* Main content */}
        <div className="main__content">
          <SmallProfileCard text={"Company Profile"} />
          <div className="edit-container">
            {!loading && (
              <>
                {companyData.length !== 0 ? (
                  companyData.founderId === loggedInUser._id ? (
                    <div className="bg-white rounded-4 p-4">
                      <Link
                        to="/company-profile/edit"
                        className="text-decoration-none text-dark fs-5"
                      >
                        Edit company details
                      </Link>
                    </div>
                  ) : (
                    <div className="bg-white rounded-4 p-4">
                      {/* <Link to="/company-profile/edit" className="text-decoration-none text-dark fs-5"> */}
                      <button
                        className="btn-base startup"
                        onClick={handleAddNew}
                      >
                        Add new company details
                      </button>
                      {/* </Link> */}
                      <div className="or-text-container">
                        <p className="text-decoration-none text-dark fs-5">
                          Or
                        </p>
                      </div>
                      <p className="text-decoration-none text-dark fs-5">
                        Choose from an existing Company
                      </p>
                      <div>
                        <input
                          type="text"
                          placeholder="Search company"
                          className="search-company-input"
                          onChange={handleSearchInputChange}
                        />
                        {companies.length !== 0 && (
                          <div className="suggestion">
                            {companies.map((company, index) => (
                              <div
                                className={`suggestion-item ${
                                  selectedCompanyId === company._id
                                    ? "active"
                                    : ""
                                }`}
                                key={index}
                                onClick={() =>
                                  handleCompanySelection(
                                    company._id,
                                    company.company
                                  )
                                }
                              >
                                <img
                                  src={company.logo || DefaultAvatar}
                                  alt={`Company Logo ${index}`}
                                  className="suggestion-logo"
                                />
                                {company.company}
                              </div>
                            ))}
                          </div>
                        )}
                        <button
                          className="btn-base startup"
                          onClick={handleAddStartup}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  )
                ) : (
                  <div className="bg-white rounded-4 p-4">
                    <Link
                      to="/company-profile/edit"
                      className="text-decoration-none text-dark fs-5"
                    >
                      <button className="btn-base startup">
                        Add company details
                      </button>
                    </Link>
                    <div className="or-text-container">
                      <p className="text-decoration-none text-dark fs-5">Or</p>
                    </div>
                    <div>
                      <p className="text-decoration-none text-dark fs-5">
                        Choose from an existing Company
                      </p>
                      <div>
                        <input
                          type="text"
                          placeholder="Search company"
                          className="search-company-input"
                          onChange={handleSearchInputChange}
                        />
                        {companies.length !== 0 && (
                          <div className="suggestion">
                            {companies.map((company, index) => (
                              <div
                                className={`suggestion-item ${
                                  selectedCompanyId === company._id
                                    ? "active"
                                    : ""
                                }`}
                                key={index}
                                onClick={() =>
                                  handleCompanySelection(
                                    company._id,
                                    company.company
                                  )
                                }
                              >
                                <img
                                  src={company.logo || DefaultAvatar}
                                  alt={`Company Logo ${index}`}
                                  className="suggestion-logo"
                                />
                                {company.company}
                              </div>
                            ))}
                          </div>
                        )}
                        <button
                          className="btn-base startup"
                          onClick={handleAddStartup}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          {!loading ? (
            companyData.length === 0 ? (
              <div className="bg-white rounded-4 p-4">
                <p>No company found.</p>
              </div>
            ) : (
              <CompanyProfile
                isOnelink={true}
                companyData={companyData}
                startup="true"
              />
            )
          ) : (
            <div className="mx-auto w-100 bg-white rounded-4 p-5 d-flex justify-content-center min-vh-100">
              <div class="spinner-grow orange" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
        </div>
        {/* Right side content */}
        <div className="right__content">
          <RecommendationCard />
          <NewsCorner />
        </div>
        {showSuccess && (
          <AfterSuccessPopUp
            // withoutOkButton
            onClose={() => setShowSuccess(!showSuccess)}
            successText="Company Added Successfully"
          />
        )}
      </div>
    </MaxWidthWrapper>
  );
}
