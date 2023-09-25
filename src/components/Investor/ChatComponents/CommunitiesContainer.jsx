import "./CommunitiesContainer.scss";
import CommunityCard from "./CommunityCard";
import { useState } from "react";
import CommunitiesIcon from "./CommunitiesIcon";
// import ModalBsLauncher from "../../PopUp/ModalBS/ModalBsLauncher/ModalBsLauncher";
// import ModalBSBody from "../../PopUp/ModalBS/ModalBSBody/ModalBSBody";
// import ModalBSContainer from "../../PopUp/ModalBS/ModalBSContainer/ModalBSContainer";
// import ModalBSHeader from "../../PopUp/ModalBS/ModalBSHeader/ModalBSHeader";
// import { AiOutlineUsergroupAdd } from "react-icons/ai";
// import NewCommunityModal from "../ChatComponents/NewCommunityModal";

export default function CommunitiesContainer() {
  // Fetch Commmunities data here

  // Mock for communities
  const communitiesData = [
    {
      id: 1,
      name: "My Core Team",
      lastUser: "Vijay",
      lastMessage: "Yes. It is done.",
      lastMessageTimestamp: "6:07 pm",
    },
    {
      id: 2,
      name: "Fintech Investors",
      lastUser: "Robert",
      lastMessage: "Nice one! It is also a good idea to include... ",
      lastMessageTimestamp: "3:37 pm",
    },
    {
      id: 3,
      name: "Fintech Investors",
      lastUser: "Robert",
      lastMessage: "Nice one! It is also a good idea to include... ",
      lastMessageTimestamp: "3:37 pm",
    },
    {
      id: 4,
      name: "Fintech Investors",
      lastUser: "Robert",
      lastMessage: "Nice one! It is also a good idea to include... ",
      lastMessageTimestamp: "3:37 pm",
    },
    {
      id: 5,
      name: "Fintech Investors",
      lastUser: "Robert",
      lastMessage: "Nice one! It is also a good idea to include... ",
      lastMessageTimestamp: "3:37 pm",
    },
  ];
  // Save data to State
  const [communities, setCommunities] = useState(communitiesData);

  return (
    <details className="communities__wrapper d-flex flex-column bg-white rounded-4 shadow-sm">
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
        {/* <ModalBsLauncher
          id="AddNewCommunity"
          className="new__community d-flex align-items-center gap-3 px-4 py-4 border-bottom "
        >
          {" "}
          <AiOutlineUsergroupAdd style={{ fontSize: "1.75rem" }} />{" "}
          <h5 className="m-0">New Community</h5>{" "}
        </ModalBsLauncher> */}
        {/* Add new Modal */}
        {/* <ModalBSContainer isStatic={false} id="AddNewCommunity">
          <ModalBSHeader
            title={"Create a Community"}
            className={"orange__heading"}
          />
          <ModalBSBody>
            <NewCommunityModal />
          </ModalBSBody>
        </ModalBSContainer> */}

        {/* Render communities list */}
        <div className="my__communities d-flex flex-column gap-4 px-3 pt-4">
          <h5 className="m-0">My Communities</h5>
          {communities.map((community, index) => {
            return <CommunityCard community={community} key={community.id} />;
          })}
        </div>
      </div>
    </details>
  );
}
