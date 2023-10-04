import { HiOutlineUserGroup } from "react-icons/hi2";
import {
  setChatId,
  setIsCommuntySelected,
} from "../../../Store/features/chat/chatSlice";
import { useDispatch } from "react-redux";

export default function CommunityCard({ community }) {
  const dispatch = useDispatch();

  // Handle community click
  function handleCommunityClick(communityId) {
    dispatch(setChatId(communityId));
    dispatch(setIsCommuntySelected(true));
  }

  return (
    <div
      style={{ backgroundColor: "rgba(234, 238, 242, 1)" }}
      className="community__card d-flex align-items-center gap-2 py-2 px-2 rounded-4 "
      key={community.id}
      onClick={() => handleCommunityClick(community._id)}
    >
      <span className="p-2 position-relative">
        {community.profileImage ? (
          <img
            src={community.profileImage}
            style={{
              height: "50px",
              width: "50px",
              borderRadius: "50%",
            }}
            alt="Company Profile"
          />
        ) : (
          <HiOutlineUserGroup
            style={{
              height: "40px",
              width: "40px",
              color: " rgba(159, 159, 159, 1)",
            }}
            className=""
          />
        )}
      </span>
      <div className="d-flex justify-content-between w-100">
        <div className="d-flex flex-column justify-content-between gap-1">
          <h5
            className="m-0 text-capitalize text__clip--15"
            style={{ color: "#fd5901" }}
          >
            {community?.communityName}
          </h5>
          <p className="m-0 text__clip " style={{ fontSize: "0.8rem" }}>
            {"Vijay"}: {"Yes. It is done."}
          </p>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <p className="time__stamp m-0 ">{"6:07 pm"}</p>
        </div>
      </div>
    </div>
  );
}
