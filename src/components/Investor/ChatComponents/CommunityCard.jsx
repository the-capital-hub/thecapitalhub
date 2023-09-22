import { HiOutlineUserGroup } from "react-icons/hi2";

export default function CommunityCard({ community }) {
  return (
    <div
      style={{ backgroundColor: "rgba(234, 238, 242, 1)" }}
      className="d-flex align-items-center gap-3 p-3 rounded-4 "
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
        <div className="d-flex flex-column justify-content-between gap-2">
          <h5
            className="m-0 text-capitalize"
            style={{ fontSize: "1.25rem", color: "#fd5901" }}
          >
            {community.name}
          </h5>
          <p className="m-0 text__clip " style={{ fontSize: "0.8rem" }}>
            {community.lastUser}: {community.lastMessage}
          </p>
        </div>
        <div className="d-flex flex-column justify-content-between">
          <p className="m-0 " style={{ fontSize: "1rem" }}>
            {community.lastMessageTimestamp}
          </p>
        </div>
      </div>
    </div>
  );
}
