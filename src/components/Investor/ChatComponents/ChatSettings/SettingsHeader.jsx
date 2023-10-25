import IconClose from "../../SvgIcons/IconClose";
import Default from "../../../../Images/Chat/default-user-avatar.webp";
import IconVideo from "../../SvgIcons/IconVideo";
import IconCall from "../../SvgIcons/IconCall";
import IconEdit from "../../SvgIcons/IconEdit";
import { useDispatch, useSelector } from "react-redux";
import IconDelete from "../../SvgIcons/IconDelete";
import Modal from "../../../PopUp/Modal/Modal";
import { useState } from "react";
import { deleteCommunityAPI } from "../../../../Service/user";
import { resetChat } from "../../../../Store/features/chat/chatSlice";

export default function SettingsHeader({ setIsSettingsOpen }) {
  const chatProfile = useSelector((state) => state.chat.chatProfile);
  const communityProfile = useSelector((state) => state.chat.communityProfile);
  const isCommunitySelected = useSelector(
    (state) => state.chat.isCommunitySelected
  );
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [showDeleteCommunity, setShowDeleteCommunity] = useState(false);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState({});

  const dispatch = useDispatch();

  const handleDeleteCommunity = async () => {
    setLoading((prev) => {
      return {
        ...prev,
        submitting: true,
      };
    });
    try {
      await deleteCommunityAPI(communityProfile?.community._id);
      setMessage("Community deleted");
      setTimeout(() => {
        setMessage("");
        setShowDeleteCommunity(false);
        dispatch(resetChat());
        setIsSettingsOpen(false);
      }, 1500);
    } catch (error) {
      console.log(error);
      setMessage("Error deleting community. Try again.");
    } finally {
      setLoading((prev) => {
        return {
          ...prev,
          submitting: false,
        };
      });
    }
  };

  return (
    <div className="settings_header d-flex flex-column align-items-center gap-1 border-bottom pb-4">
      <button
        className="align-self-end bg-transparent border-0"
        onClick={() => setIsSettingsOpen(false)}
      >
        <IconClose />
      </button>

      {/* Profile picture */}
      <img
        src={
          (isCommunitySelected
            ? communityProfile?.community?.profileImage
            : chatProfile?.user?.profilePicture) || Default
        }
        alt={"user name"}
        style={{ width: "70px", height: "70px", borderRadius: "50%" }}
      />

      {/* Name and designation */}
      <div className="settings_user_text d-flex flex-column align-items-center">
        <h5 style={{ fontSize: "20px", fontWeight: "500" }}>
          {isCommunitySelected
            ? communityProfile?.community?.communityName
            : `${chatProfile?.user?.firstName} ${chatProfile?.user?.lastName}`}
        </h5>

        <p
          style={{
            color: "rgba(113, 113, 113, 1)",
            fontSize: "18px",
            fontWeight: "400",
          }}
        >
          {isCommunitySelected ? " " : chatProfile?.user?.designation}
        </p>
      </div>
      {/* {isCommunitySelected &&
        communityProfile?.community?.adminId === loggedInUser._id && (
          <button
            className="btn text-capitalize border-0 p-0 ms-auto"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#chatSettingsOffcanvas"
            ariaControls="chatSettingsOffcanvas"
          >
            <IconEdit />
          </button>
        )} */}
      {/* Action Icons */}
      <div className="settings_user_actions d-flex gap-2">
        {/* <div
          className="d-flex justify-content-center align-items-center rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(234, 238, 242, 1)",
          }}
        >
          <IconCall width="24px" height="24px" />
        </div>
        <div
          className="d-flex justify-content-center align-items-center rounded-circle"
          style={{
            width: "50px",
            height: "50px",
            backgroundColor: "rgba(234, 238, 242, 1)",
          }}
        >
          <IconVideo width="24px" height="24px" />
        </div> */}

        {isCommunitySelected &&
          communityProfile?.community?.adminId === loggedInUser._id && (
            <div
              className="d-flex justify-content-center align-items-center rounded-circle text-white bg-danger"
              style={{
                width: "50px",
                height: "50px",
                backgroundColor: "rgba(234, 238, 242, 1)",
              }}
              onClick={() => setShowDeleteCommunity(true)}
            >
              <IconDelete width="24px" height="24px" />
            </div>
          )}
      </div>

      {showDeleteCommunity && (
        <Modal className="d-flex flex-column gap-2">
          <h3 className="text-center border-bottom ">Confirm delete</h3>
          <p>
            Are you sure you want to delete{" "}
            {communityProfile?.community?.communityName}
          </p>
          <p className="text-center text-success">{message}</p>
          <div className="buttons-container d-flex gap-5 mx-auto">
            <buton
              className="btn btn-secondary"
              onClick={() => setShowDeleteCommunity(false)}
            >
              Cancel
            </buton>
            {!message && (
              <button
                className="btn btn-danger"
                onClick={handleDeleteCommunity}
                disabled={loading.submitting}
              >
                {loading?.submitting ? "Deleting..." : "Delete"}
              </button>
            )}
          </div>
        </Modal>
      )}
    </div>
  );
}
