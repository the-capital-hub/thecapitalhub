import React from "react";
import "./ChatNavbar.scss";
import profileImage from "../../../../Images/Pramod.jpeg";
import CallIcon from "../../../../Images/Chat/Call.svg";
import videoIcon from "../../../../Images/Chat/Video.svg";
import threeDotIcon from "../../../../Images/whiteTheeeDots.svg";
import { useEffect, useState } from "react";
import {
  getUserAndStartUpByUserIdAPI,
  clearChat,
  getCommunityById,
} from "../../../../Service/user";
import { useSelector } from "react-redux";

const ChatNavbar = ({ isclear, cleared, setIsSettingsOpen }) => {
  // Fetch GlobalState
  const chatId = useSelector((state) => state.chat.chatId);
  const userId = useSelector((state) => state.chat.userId);
  const isCommunitySelected = useSelector(
    (state) => state.chat.isCommunitySelected
  );

  const [chatkebabMenu, setChatkebabMenu] = useState(false);

  // When chatType changes update isCommunitySelec

  const handleClearChat = () => {
    clearChat(chatId)
      .then((res) => {
        if (res.status === 200) {
          isclear(!cleared);
        }
      })
      .catch((error) => {
        console.error("Error-->", error);
      })
      .finally(() => setChatkebabMenu(false));
  };

  const [user, setUser] = useState(null);
  const [community, setCommunity] = useState(null);

  useEffect(() => {
    setCommunity(null);
    setUser(null);
    if (isCommunitySelected) {
      getCommunityById(chatId)
        .then((res) => {
          setCommunity(res.data);
          setUser(null);
        })
        .catch((error) => {
          console.error("Error-->", error);
        });
    } else {
      getUserAndStartUpByUserIdAPI(userId)
        .then((res) => {
          setUser(res.data);
          setCommunity(null);
        })
        .catch((error) => {
          console.error("Error-->", error);
        });
    }
  }, [userId, isCommunitySelected, chatId]);

  function handleOpenSettingsClick() {
    setIsSettingsOpen(true);
  }

  return (
    <>
      <div className="chat_navbar_container position-relative">
        <div
          className="left"
          onClick={handleOpenSettingsClick}
          style={{ cursor: "pointer" }}
        >
          <img
            src={user?.profilePicture || community?.profileImage}
            className="rounded_img"
            alt={`${user?.firstName} ${user?.lastName}`}
          />
          <div className="title_and_message">
            <h5 className="name_title text-capitalize">
              {user
                ? `${user.firstName} ${user.lastName}`
                : community?.communityName}
            </h5>

            <h5 className="message_title">{user?.designation}</h5>
            {/* <h4 className="online">Online</h4> */}
          </div>
        </div>
        <div className="right ">
          {/* <img src={CallIcon} className="call"/>
            <img src={videoIcon} className="video"/> */}
          <img
            src={threeDotIcon}
            className="threedot"
            onClick={() => setChatkebabMenu(!chatkebabMenu)}
            alt=""
          />
          {chatkebabMenu && (
            <ul className="kebab_menu border rounded shadow-sm p-3">
              <li onClick={handleClearChat}>Clear Chat</li>
            </ul>
          )}
        </div>
      </div>
    </>
  );
};

export default ChatNavbar;
