import React, { useState, useEffect } from "react";
import "./InvestorCompany.scss";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import {
  getInvestorById,
  searchInvestors,
  addUserAsInvestor,
  updateUserAPI,
} from "../../../Service/user";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import DefaultAvatar from "../../../Images/Chat/default-user-avatar.webp";
import { loginSuccess } from "../../../Store/features/user/userSlice";
import InvestorAfterSuccessPopUp from "../../../components/PopUp/InvestorAfterSuccessPopUp/InvestorAfterSuccessPopUp";
import { useNavigate } from "react-router-dom";
import { setPageTitle } from "../../../Store/features/design/designSlice";

export default function CompanyProfilePage() {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [companyData, setCompanyData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [companies, setCompanies] = useState([]);
  const [selectedCompanyId, setSelectedCompanyId] = useState(null);
  const [showSuccess, setShowSuccess] = useState(false);

  // Set page title
  useEffect(() => {
    document.title = "Company Profile | Investors - The Capital Hub";
    dispatch(setPageTitle("Company Profile"));
  }, []);

  useEffect(() => {
    setLoading(true);
    if (loggedInUser?.isInvestor === "true") {
      setLoading(true);
      getInvestorById(loggedInUser.investor).then(({ data }) => {
        setCompanyData(data);
        setLoading(false);
      })
        .catch((error) => {
          console.log(error.message);
          setLoading(false);
        })
        .finally(() => {
          setLoading(false);
        })
    }
  }, [loggedInUser.investor]);

  const handleSearchInputChange = (e) => {
    const newValue = e.target.value;
    console.log(newValue);
    // if (newValue.length > 2) {
    searchInvestors(newValue)
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

  const handleAddInvestor = async () => {
    try {
      const response = await addUserAsInvestor(
        loggedInUser._id,
        selectedCompanyId
      );
      if (response.status === 200) {
        dispatch(loginSuccess(response.data));
        setShowSuccess(true);
        getInvestorById(selectedCompanyId)
          .then(({ data }) => {
            setCompanyData(data);
            setSelectedCompanyId(null);
            setCompanies([]);
          })
          .catch((error) => {
            console.error('Error adding as investor:', error.message);
          });
      }
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleAddNew = async () => {
    const confirmed = window.confirm("Are you sure you want to add a new company?");

    if (confirmed) {
      try {
        const requestBody = {
          userId: loggedInUser._id,
          investor: null,
        };
        const { data: response } = await updateUserAPI(requestBody);
        dispatch(loginSuccess(response.data));
        navigate("/investor/company-profile/edit");
      } catch (error) {
        console.log(error);
      }
    }
  };


  return (
    <MaxWidthWrapper>
      <div className="investor_companyProfilePage__wrapper ps-lg-3">
        {/* Main content */}
        <div className="main__content">
          <SmallProfileCard text={"Company Profile"} />
          {/* <div className="bg-white rounded-4 p-4 border shadow-sm mt-0 mt-md-3">
            <Link
              to={"/investor/company-profile/edit"}
              className="text-decoration-none text-dark fs-5 "
            >
              Click here to edit company details
            </Link>
          </div> */}
          <div className="investor-edit-container">
            {!loading && (
              <>
                {companyData.length !== 0 ? (
                  // companyData.founderId === loggedInUser._id ? (
                  <>
                    <div className="bg-white rounded-4 p-4 shadow-sm border">
                      <Link
                        to="/investor/company-profile/edit"
                        className="text-decoration-none text-dark fs-5"
                      >
                        Edit company details
                      </Link>
                    </div>
                    <p></p>
                    {/* ) : ( */}
                    <div className="bg-white rounded-4 p-4">
                      {/* <Link to="/company-profile/edit" className="text-decoration-none text-dark fs-5"> */}
                      {/* <button className="btn-base investor" onClick={handleAddNew}>
                        Add new company details
                      </button> */}
                      {/* </Link> */}
                      {/* <div className="or-text-container">
                        <p className="text-decoration-none text-dark fs-5">Or</p>
                      </div> */}
                      <p className="text-decoration-none text-dark fs-5">Choose from an existing Company</p>
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
                                className={`suggestion-item ${selectedCompanyId === company._id
                                  ? "active"
                                  : ""
                                  }`}
                                key={index}
                                onClick={() =>
                                  handleCompanySelection(
                                    company._id,
                                    company.companyName
                                  )
                                }
                              >
                                <img
                                  src={company.logo || DefaultAvatar}
                                  alt={`Company Logo ${index}`}
                                  className="suggestion-logo"
                                />
                                {company.companyName}
                              </div>
                            ))}
                          </div>
                        )}
                        <button
                          className="btn-base investor"
                          onClick={handleAddInvestor}
                        >
                          Save
                        </button>
                      </div>
                    </div>
                    {/* ) */}
                  </>
                ) : (
                  <div className="bg-white rounded-4 p-4">
                    <Link to="/investor/company-profile/edit" className="text-decoration-none text-dark fs-5">
                      <button className="btn-base investor">Add company details</button>
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
                                className={`suggestion-item ${selectedCompanyId === company._id
                                  ? "active"
                                  : ""
                                  }`}
                                key={index}
                                onClick={() =>
                                  handleCompanySelection(company._id, company.companyName)
                                }
                              >
                                <img
                                  src={company.logo || DefaultAvatar}
                                  alt={`Company Logo ${index}`}
                                  className="suggestion-logo"
                                />
                                {company.companyName}
                              </div>
                            ))}
                          </div>
                        )}
                        <button
                          className="btn-base investor"
                          onClick={handleAddInvestor}
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
          {/* {companyData.length !== 0 ? (
            <CompanyProfile
              isOnelink={true}
              investorData={companyData}
            // startup="t"
            />
          ) : (
            <div className="mx-auto w-100 bg-white rounded-4 p-5 d-flex justify-content-center min-vh-100">
              <div class="spinner-grow yellow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )} */}
          {!loading ? (
            companyData.length === 0 ? (
              <div className="bg-white rounded-4 p-4">
                <p>No company found.</p>
              </div>
            ) : (
              <CompanyProfile
                isOnelink={true}
                investorData={companyData}
                startup="false"
                isStartup="false"
              />
            )
          ) : (
            <div className="mx-auto w-100 bg-white rounded-4 p-5 d-flex justify-content-center min-vh-100">
              <div class="spinner-grow yellow" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
          )}
          <button className="btn-base investor" onClick={handleAddNew}>
            Create new company profile
          </button>
        </div>
        {/* Right side content */}
        <div className="right__content">
          <RecommendationCard />
          <NewsCorner />
        </div>
        {showSuccess && (
          <InvestorAfterSuccessPopUp
            // withoutOkButton
            onClose={() => setShowSuccess(!showSuccess)}
            successText="Company Added Successfully"
          />
        )}
      </div>
    </MaxWidthWrapper>
  );
}
