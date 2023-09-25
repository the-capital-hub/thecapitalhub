import { HiOutlineUserGroup } from "react-icons/hi2";

export default function CommunityCard({ community }) {
  return (
    <div
      style={{ backgroundColor: "rgba(234, 238, 242, 1)" }}
      className="community__card d-flex align-items-center gap-2 py-2 px-2 rounded-4 "
      key={community.id}
    >
      <span className="border rounded-circle p-2 position-relative">
        <HiOutlineUserGroup
          style={{
            height: "40px",
            width: "40px",
            color: " rgba(159, 159, 159, 1)",
          }}
          className=""
        />
      </span>
      <div className="d-flex justify-content-between w-100">
        <div className="d-flex flex-column justify-content-between gap-1">
          <h5
            className="m-0 text-capitalize text__clip--12"
            style={{ color: "#fd5901" }}
          >
            {community.name}
          </h5>
          <p className="m-0 text__clip " style={{ fontSize: "0.8rem" }}>
            {community.lastUser}: {community.lastMessage}
          </p>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <p className="time__stamp m-0 ">{community.lastMessageTimestamp}</p>
        </div>
      </div>
    </div>
  );
}
