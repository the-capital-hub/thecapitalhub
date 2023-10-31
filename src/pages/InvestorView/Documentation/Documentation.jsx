import { useEffect, useState } from "react";
import SmallProfileCard from "../../../components/Investor/InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import { NavBar, SideBar, Card } from "../../../components/InvestorView";
import "./Documentation.scss";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import {
  Business,
  KYC,
  Legal,
  Pitch,
} from "../../../Images/StartUp/Documentaion";
import { getFoldersApi } from "../../../Service/user";

const Documentation = () => {
  const navigate = useNavigate();
  const { username } = useParams();
  const { userId } = useParams();
  useEffect(() => {
    document.title = "Documentation - One Link | The Capital Hub";
  }, []);

  const [folderName, setFolderName] = useState([]);

  const getFolders = () => {
    getFoldersApi(userId)
      .then((data) => {
        console.log(data.data);
        setFolderName(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getFolders();
  }, []);

  return (
    <MaxWidthWrapper>
      <div className="">
        <div className="documentation shadow-sm border">
          <h1 className="px-md-5">Documentation</h1>
          <div className="docscontainer col-7 justify-content-between mx-auto">
            {/* <Card
              text={"Financials"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/financials`)
              }
            /> */}
            {/* <Card
              text={"Pitch Deck"}
              onClicked={() =>
                navigate(
                  `/onelink/${username}/${userId}/documentation/pitchdeck`
                )
              }
              image={Pitch}
            />
            <Card
              text={"Legal and Compliance"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/legal`)
              }
              image={Legal}
            /> */}
            {/* <Card
              text={"Update"}
              onClicked={() =>
                navigate(`/onelink/${username}/${userId}/documentation/update`)
              }
            /> */}
            {/* <Card
              text={"KYC Details"}
              onClicked={() =>
                navigate(
                  `/onelink/${username}/${userId}/documentation/kycdetails`
                )
              }
              image={KYC}
            />
            <Card
              text={"Business"}
              onClicked={() =>
                navigate(
                  `/onelink/${username}/${userId}/documentation/business`
                )
              }
              image={Business}
            /> */}
            {folderName.map((folder, index) => {
              let imageToShow;

              switch (folder) {
                case 'pitchdeck':
                  imageToShow = Pitch;
                  break;
                case 'business':
                  imageToShow = Business;
                  break;
                case 'kycdetails':
                  imageToShow = KYC;
                  break;
                case 'legal and compliance':
                  imageToShow = Legal;
                  break;
                default:
                  imageToShow = Pitch;
              }
              return (
                <Card
                  key={index}
                  onClicked={() => navigate(`/onelink/${username}/${userId}/documentation/${folder}`)}
                  text={folder}
                  image={imageToShow}
                />
              );
            })}
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Documentation;
