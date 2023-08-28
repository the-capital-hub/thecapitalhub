import { useEffect, useState } from "react";
import "./FolderContents.scss";
import { useParams } from "react-router-dom";
import HalfbendCard from "../InvestorGlobalCards/Documentation/HalfbendCard/HalfbendCard";
import { getUserById } from "../../../Service/user";

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
  return (
    <div className="folderContents">
      <h1>{title}</h1>
      <HalfbendCard folderName={route} userId={user?._id} />
    </div>
  );
};

export default FolderContents;
