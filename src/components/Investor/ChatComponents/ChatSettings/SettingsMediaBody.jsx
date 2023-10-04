import React from "react";
import { useSelector } from "react-redux";

export default function SettingsMediaBody() {
  const chatProfile = useSelector((state) => state.chat.chatProfile);
  const communityProfile = useSelector((state) => state.chat.communityProfile);
  const isCommunitySelected = useSelector((state) => state.chat.isCommunitySelected);

  return (
    <div className="px-2 py-3 d-flex gap-2 flex-wrap">
      {/* Loop media images here */}
      <div
        className="bg-white rounded-2 d-flex justify-content-center align-items-center shadow-sm"
        style={{ width: "100px", height: "100px" }}
      >
        {isCommunitySelected
          ? communityProfile?.images?.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt="media item"
                className="rounded-2"
                style={{ width: "90px", height: "90px", marginRight: "10px" }}
              />
            ))
          : chatProfile?.images?.map((image, index) => (
              <img
                key={index}
                src={image.image}
                alt="media item"
                className="rounded-2"
                style={{ width: "90px", height: "90px" }}
              />
            ))}
      </div>
    </div>
  );
}
