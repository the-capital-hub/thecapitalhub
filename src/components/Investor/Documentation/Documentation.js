import { useContext, useEffect, useState } from "react";
import "./Documentation.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import IntroductoryMessage from "../OneLink/IntroductoryMessage/IntroductoryMessage";
import UploadContainer from "./UploadContainer/UploadContainer";
import HalfbendCard from "../InvestorGlobalCards/Documentation/HalfbendCard/HalfbendCard";
import { Card } from "../../InvestorView";
import UploadModal from "./UploadModal/UploadModal";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { environment } from "../../../environments/environment";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";
import {
  Business,
  KYC,
  Legal,
  Pitch,
} from "../../../Images/StartUp/Documentaion";
import { setPageTitle } from "../../../Store/features/design/designSlice";
import { useDispatch, useSelector } from "react-redux";
import {getFoldersApi}from "../../../Service/user"

const Documentation = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [showModal, setShowModal] = useState(false);
  const baseURL = environment.baseUrl;
  const [folders, setFolders] = useState([
    "Financials",
    "Pitch Deck",
    "Legal",
    "Update",
    "KYC Details",
    "Business",
  ]);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const getFolders = () => {
    getFoldersApi(loggedInUser._id)
      .then((data) => {
        console.log(data); 
     
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
   
      getFolders(); // Call the getFolders function to fetch data
     
  }, [])
  

  useEffect(() => {
    document.title = "Documentation | The Capital Hub";
    const getFolders = async () => {
      try {
        const res = await axios.get(`${baseURL}`);
      } catch (err) {
        console.log(err);
      }
    };
    getFolders();
    dispatch(setPageTitle("Documentation"));
  }, []);




  return (
    <MaxWidthWrapper>
      <div className="documentation-wrapper">
        {/* Main content */}
        <div className="left-content">
          <SmallProfileCard text={"Documentation"} />
          <div className="documentationStartup">
            {showModal && (
              <UploadModal onCancel={setShowModal} folders={folders} />
            )}
            <IntroductoryMessage
              title={"Upload your document"}
              // para={
              //   "As the Founder at Capital HUB, Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture.As the Founder at Capital HUB, Man's all about building great start-ups from a simple idea to an elegant reality. Humbled and honored to have worked with Angels and VC's across the globe to support and grow the startup culture."
              // }
            />
            <UploadContainer onClicked={setShowModal} />
            <div className="cards px-xxl-4 bg-white py-5 rounded-4">
              {/* <Card
                  onClicked={() => navigate("/documentation/financials")}
                  text={"Financials"}
                /> */}
              <Card
                onClicked={() => navigate("/documentation/pitchdeck")}
                text={"Pitch Deck"}
                image={Pitch}
              />
              <Card
                onClicked={() => navigate("/documentation/business")}
                text={"Business"}
                image={Business}
              />
              <Card
                onClicked={() => navigate("/documentation/kycdetails")}
                text={"KYC Details"}
                image={KYC}
              />
              <Card
                onClicked={() =>
                  navigate("/documentation/legal%20and%20compliance")
                }
                text={"Legal and Compliance"}
                image={Legal}
              />
              {/* <Card
                  onClicked={() => navigate("/documentation/update")}
                  text={"Update"}
                /> */}
            </div>
          </div>
        </div>
        {/* Right content */}
        <div className="right-content">
          <RightProfileCard />
          <RecommendationCard />
          <NewsCorner />
        </div>
      </div>
    </MaxWidthWrapper>
    // <div className="container-fluid investorHome_main_container">
    //   <div className="row mt-2">
    //     <div className="col">
    //       <SmallProfileCard text={"Documentation"} />
    //       <div className="content-70 mt-3">
    //         <div className="row">
    //           <div className="col-12 mt-2">
    //             <IntroductoryMessage title={"Upload your documentation"} />
    //           </div>
    //         </div>
    //         <div className="row">
    //           <div className="col-12 mt-2">{/* <UploadContainer /> */}</div>
    //         </div>
    //         <div className="row">
    //           {/* <div className="col-12 mt-2"> */}
    //           <HalfbendCard />
    //           {/* </div> */}
    //         </div>
    //       </div>
    //     </div>
    //     <div className="col">
    //       <div className="content-30">
    //         <div className="row">
    //           <RightProfileCard />
    //           <RecommendationCard />
    //           <NewsCorner />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default Documentation;
