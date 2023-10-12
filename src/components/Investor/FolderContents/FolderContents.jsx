import { useEffect, useState } from "react";
import "./FolderContents.scss";
import { useParams } from "react-router-dom";
import HalfbendCard from "../InvestorGlobalCards/Documentation/HalfbendCard/HalfbendCard";
import { getUserById } from "../../../Service/user";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";

const FolderContents = () => {
  const { route } = useParams();
  const { username } = useParams();
  const [user, setUser] = useState([]);
  useEffect(() => {
    document.title = "Documents | The Capital Hub";
    getUserById(username)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => setUser([]));
  }, [username]);
  const title = route[0].toUpperCase() + route.slice(1);
  console.log(route);
  let pageTitle;

  switch (title) {
    case "Legal":
      pageTitle = "Legal and Compliance";
      break;
    case "Pitchdeck":
      pageTitle = "Pitch Deck";
      break;
    case "Kycdetails":
      pageTitle = "KYC Details";
      break;
    case "Business":
      pageTitle = "Business";
      break;
    default:
      pageTitle = "";
      break;
  }
  return (
    <MaxWidthWrapper>
      <div className="folderContents">
        <h1>{pageTitle}</h1>
        <HalfbendCard folderName={route} userId={user?._id} />
      </div>
    </MaxWidthWrapper>
  );
};

export default FolderContents;
