import "./CommunitiesContainer.scss";
import CommunityCard from "./CommunityCard";
import { useState } from "react";
import CommunitiesIcon from "./CommunitiesIcon";
import ModalBsLauncher from "../../PopUp/ModalBS/ModalBsLauncher/ModalBsLauncher";
import ModalBSBody from "../../PopUp/ModalBS/ModalBSBody/ModalBSBody";
import ModalBSContainer from "../../PopUp/ModalBS/ModalBSContainer/ModalBSContainer";
import ModalBSHeader from "../../PopUp/ModalBS/ModalBSHeader/ModalBSHeader";
import { AiOutlineUsergroupAdd } from "react-icons/ai";
import NewCommunityModal from "../ChatComponents/NewCommunityModal";
import { getAllCommunity } from "../../../Service/user";
import { useEffect } from "react";
import { useSelector } from "react-redux";

export default function CommunitiesContainer({
  isCommunityOpen,
  recieveMessage,
  sendMessage,
  isRead,
  setIsRead,
}) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [getCommunity, setGetCommunity] = useState([]);
  const chatProfile = useSelector((state) => state.chat.chatProfile);
  const chatId = useSelector((state) => state.chat.chatId);

  useEffect(() => {
    getAllCommunity(loggedInUser?._id).then((res) => {
      setGetCommunity(res);
    });
  }, [chatProfile, chatId]);

  return (
    <details
      className="communities__wrapper d-flex flex-column bg-white rounded-4 shadow-sm"
      open={isCommunityOpen}
    >
      <summary className="communities__header d-flex align-items-center gap-2 py-3 px-4 ">
        {/* <HiOutlineUserGroup style={{ fontSize: "2rem" }} /> */}
        <CommunitiesIcon
          style={{ height: "30px", width: "30px", color: "currentColor" }}
        />
        <h4
          className="m-0 text-capitalize "
        // style={{ color: " rgba(159, 159, 159, 1)" }}
        >
          community
        </h4>
      </summary>
      <div className="communities__chats d-flex flex-column pb-4 border-top">
        {/* Add new */}
        <ModalBsLauncher
          id="AddNewCommunity"
          className="new__community d-flex align-items-center gap-3 px-4 py-4 border-bottom "
        >
          {" "}
          <AiOutlineUsergroupAdd style={{ fontSize: "1.75rem" }} />{" "}
          <h5 className="m-0">Create New Community</h5>{" "}
        </ModalBsLauncher>
        {/* Add new Modal is added to chats.js because it was not triggered in mobileview */}
        {/* <ModalBSContainer isStatic={false} id="AddNewCommunity">
          <ModalBSHeader
            title={"Create a Community"}
            className={loggedInUser.isInvestor === "true" ? "yellow__heading" : "orange__heading"}
          />
          <ModalBSBody>
            <NewCommunityModal theme={loggedInUser.isInvestor === "true" ? "investor" : ""} />
          </ModalBSBody>
        </ModalBSContainer> */}

        {/* Render communities list */}
        <div className="my__communities d-flex flex-column gap-4 px-3 pt-4">
          <h5 className="m-0">My Communities</h5>
          {getCommunity?.data?.map((community, index) => {
            return (
              <CommunityCard
                community={community}
                key={community._id}
                recieveMessage={recieveMessage}
                sendMessage={sendMessage}
                setIsRead={setIsRead}
                isRead={isRead}
              />
            );
          })}
        </div>
      </div>
    </details>
  );
}
