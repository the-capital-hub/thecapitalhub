import { useEffect } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { NavBar, SideBar, Card } from "../../../components/InvestorView";
import "./Documentation.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import {
  GreenBusiness,
  GreenKYC,
  GreenLegal,
  GreenPitch,
} from "../../../Images/StartUp/Documentaion";

const Documentation = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const { userId } = useParams();
  useEffect(() => {
    document.title = "Documentation - One Link | The Capital Hub";
  }, []);
  return (
    <MaxWidthWrapper>
      <div className="border_left">
        <div className="documentation shadow-sm border">
          <h1>Documentation</h1>
          <div className="docscontainer col-7 justify-content-between mx-auto">
            {/* <Card
              text={"Financials"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/financials`)
              }
            /> */}
            <Card
              text={"Pitch Deck"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/pitchdeck`)
              }
              image={GreenPitch}
            />
            <Card
              text={"Legal and Compliance"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/legal`)
              }
              image={GreenLegal}
            />
            {/* <Card
              text={"Update"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/update`)
              }
            /> */}
            <Card
              text={"KYC Details"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/kycdetails`)
              }
              image={GreenKYC}
            />
            <Card
              text={"Business"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/business`)
              }
              image={GreenBusiness}
            />
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Documentation;
