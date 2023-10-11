import { useEffect, useState } from "react";
import "./NotificationsPopup.scss";
import {
  fetchNotificationsAPI,
  markAllNotificationsReadAPI,
  markNotificationAsReadAPI,
} from "../../../../Service/user";
import { useSelector } from "react-redux";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";
import TimeAgo from "timeago-react";
import { Link, useNavigate } from "react-router-dom";

function NotificationsPopup({ toggleVisibility }) {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const fetchNotifications = async () => {
    setLoading(true);
    try {
      const res = await fetchNotificationsAPI(loggedInUser?._id);
      console.log(loggedInUser?._id);
      setNotifications(res.data);
    } catch (error) {
      console.log("Error loading notifications: ", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotifications();
  }, []);

  const notificationType = (type, _id) => {
    switch (type) {
      case "connectionRequest": {
        return "sent you a connection request";
      }
      case "connectionAccepted": {
        return "accepted your connection request";
      }
      case "postLiked": {
        return (
          <span>
            liked your{" "}
            <Link to={`/posts/${_id}`} className="fw-bold">
              post
            </Link>
          </span>
        );
      }
      case "postShared": {
        return (
          <span>
            shared your{" "}
            <Link to={`/posts/${_id}`} className="fw-bold">
              post
            </Link>
          </span>
        );
      }
      case "postCommented": {
        return (
          <span>
            commented on your{" "}
            <Link to={`/posts/${_id}`} className="fw-bold">
              post
            </Link>
          </span>
        );
      }
      default: {
        return "";
      }
    }
  };

  const markAsRead = async (id) => {
    try {
      await markNotificationAsReadAPI(id);
      await fetchNotifications();
    } catch (error) {
      console.log("Error marking notification as read", error);
    }
  };

  const markAllRead = async () => {
    try {
      await markAllNotificationsReadAPI();
      await fetchNotifications();
    } catch (error) {
      console.log("Error marking all notifications as read: ", error);
    }
  };

  return (
    <div className="notifications-popup border shadow-sm rounded bg-white">
      <div className="d-flex justify-content-between align-items-center py-1 border-bottom border-2">
        <span>Notifications</span>
        <button className="btn btn-xs btn-light" onClick={markAllRead}>
          Mark all read
        </button>
      </div>
      {!loading ? (
        notifications.length ? (
          <>
            {notifications
              .slice(0, 5)
              .map(
                ({
                  _id,
                  sender: { firstName, lastName, _id: userId },
                  type,
                  createdAt,
                  isRead,
                  post,
                  connection,
                }) => (
                  <div className="notification">
                    <div className="content d-flex flex-column gap-2">
                      <p className="m-0">
                        <Link
                          to={`/user/${userId}`}
                          className="fw-bold"
                          onClick={() => toggleVisibility(false)}
                        >
                          {firstName} {lastName}
                        </Link>{" "}
                        {notificationType(type, post || connection)}
                      </p>
                      <TimeAgo
                        datetime={createdAt}
                        locale=""
                        className="fs-10"
                      />
                    </div>
                    <div className="actions d-flex flex-column gap-1">
                      {!isRead && (
                        <button
                          className="btn btn-light btn-sm"
                          onClick={() => markAsRead(_id)}
                        >
                          Mark as read
                        </button>
                      )}
                    </div>
                  </div>
                )
              )}
            {notifications.length > 5 && (
              <button
                className="btn btn-light btn-sm"
                onClick={() => {
                  toggleVisibility(false);
                  navigate("/notifications");
                }}
              >
                Show all notifications
              </button>
            )}
          </>
        ) : (
          <p className="text-center m-0">No notifications</p>
        )
      ) : (
        <SpinnerBS
          className="w-100 text-center"
          colorClass="text-secondary"
          spinnerSizeClass="md"
        />
      )}
    </div>
  );
}

export default NotificationsPopup;
