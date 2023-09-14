import "./Search.scss";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import connectIcon from "../../../Images/connect-button.svg";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  // getSentConnectionsAPI,
  getSearchResultsAPI,
  sentConnectionRequest,
} from "../../../Service/user";
import { useLocation } from "react-router-dom";

function Search() {
  const [userData, setUserData] = useState(null);
  const [CompanyData, setCompanyData] = useState(null);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const location = useLocation();

  const queryParams = new URLSearchParams(location.search);
  useEffect(() => {
    async function fetchData() {
      const searchBy = queryParams.get("query");
      const data = await getSearchResultsAPI(searchBy);
      setUserData(data?.data?.users);
      setCompanyData(data?.data?.company);
    }

    if (queryParams.has("query")) {
      fetchData();
    }
  }, []);

  const handleConnect = (userId) => {
    sentConnectionRequest(loggedInUser._id, userId)
      .then(({ data }) => {
        console.log(data);
      })
      .catch((error) => console.log(error));
  };
  return (
    <div className="container-fluid serach_main_container">
      <SmallProfileCard text={"Search"} />
      <section className="content_section mt-4">
        <div className="row">
          <div className="col-12 mt-2 box p-4">
            <h4>People</h4>
            <hr />
            {userData?.map((users, index) => (
              <div
                key={index}
                className="people_container d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-between align-items-center"
              >
                <div className="short_desc d-flex">
                  <img
                    src={`${users?.profilePicture}`}
                    className="people_img rounded-circle"
                    alt="people image"
                  />
                  <div className="d-flex flex-column justify-content-center">
                    <h5>{`${users?.firstName} ${users?.lastName}`} </h5>
                    <p>{`${users?.designation ? users?.designation : ""}`}</p>
                  </div>
                </div>
                <button
                  className="d-flex justify-content-center align-items-center gap-2 py-2 px-3 rounded-5 border-secondary bg-white"
                  onClick={() => handleConnect(users?._id)}
                >
                  <img src={connectIcon} alt="connect-user" />
                  <span>Connect</span>
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="content_section mt-4">
        <div className="row">
          <div className="col-12 mt-2 box p-4">
            <h4>Company</h4>
            <hr />
            {CompanyData?.map((company, index) => (
              <div
                key={index}
                className="people_container d-flex flex-column flex-md-row justify-content-center align-items-center justify-content-md-between align-items-center"
              >
                <div className="short_desc d-flex">
                  <img
                    src="https://res.cloudinary.com/drjt9guif/image/upload/c_scale,q_100,w_265/v1692955323/TheCapitalHub/users/profilePictures/wprwfl9rsdkyfptag0hw.webp"
                    className="people_img rounded-circle"
                    alt="people image"
                  />
                  <div className="d-flex flex-column justify-content-center">
                    <h5>{`${company?.company}`}</h5>
                    <p>{`${company?.description ? company?.description:""}`}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Search;
