import React, { useEffect, useState } from "react";
import "./Connection.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import {
  acceptConnectionAPI,
  cancelConnectionRequestAPI,
  getSentConnectionsAPI,
  pendingConnectionRequestsAPI,
  rejectConnectionAPI,
} from "../../../Service/user";
import TimeAgo from "timeago-react";

const Connection = () => {
  const [selectedTab, setSelectedTab] = useState("received"); // Default to "received"
  const [receivedConnections, setReceivedConnections] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleTabChange = (tab) => {
    if (tab === "received") {
      getReceivedConnections();
    } else {
      getSentConnection();
    }
    setSelectedTab(tab);
  };

  const getReceivedConnections = () => {
    setLoading(true);
    pendingConnectionRequestsAPI()
      .then(({ data }) => setReceivedConnections(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  const getSentConnection = () => {
    setLoading(true);
    getSentConnectionsAPI()
      .then(({ data }) => setReceivedConnections(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    document.title = "Connections | The Capital Hub";
    getReceivedConnections();
  }, []);

  const acceptConnectionHandler = async (connectionId) => {
    try {
      await acceptConnectionAPI(connectionId);
      getReceivedConnections();
    } catch (error) {
      console.log("Error accepting connection: ", error);
    }
  };

  const rejectConnectionHandler = async (connectionId) => {
    try {
      await rejectConnectionAPI(connectionId);
      getReceivedConnections();
    } catch (error) {
      console.log("Error rejecting connection: ", error);
    }
  };

  const cancelConnectionRequest = async (connectionId) => {
    try {
      await cancelConnectionRequestAPI(connectionId);
      getSentConnection();
    } catch (error) {
      console.log("Error cancelling connection: ", error);
    }
  };

  return (
    <div className="container-fluid connection_main_container">
      <SmallProfileCard text={"Connections"} />
      <section className="content_section mt-4">
        <div className="row">
          <div className="col-12 mt-2 box  p-4">
            <h4>Manage Connections</h4>
            <nav className="connection_nav">
              <a
                href="#"
                className={`connection_nav_link ${
                  selectedTab === "received" ? "active" : ""
                }`}
                onClick={() => handleTabChange("received")}
              >
                Received
              </a>
              <a
                href="#"
                className={`connection_nav_link ${
                  selectedTab === "sent" ? "active" : ""
                }`}
                onClick={() => handleTabChange("sent")}
              >
                Sent
              </a>
            </nav>
            <hr />
            {/* <button className="all_button">All</button>
            <hr /> */}
            <div className="connection_list">
              {loading ? (
                <h5 className="text-center my-5">Loading connections...</h5>
              ) : selectedTab === "received" ? (
                receivedConnections.length ? (
                  receivedConnections.map(
                    ({ sender, updatedAt, _id }, index) => (
                      <div
                        key={index}
                        className="connection_item d-flex flex-column flex-md-row justify-content-between "
                      >
                        <div className="connection_left">
                          <img src={sender.profilePicture} alt="Connection" />
                          <div className="body_container">
                            <p className="connection_name h5">{`${sender.firstName} ${sender.lastName}`}</p>
                            <p className="connection_designation">
                              {sender.designation}
                            </p>
                            <p>
                              <TimeAgo
                                className="connection_time"
                                datetime={updatedAt}
                                locale=""
                              />
                            </p>
                          </div>
                        </div>
                        <div className="connection_right mt-3 mt-md-0 align-items-center justify-content-center">
                          <button
                            onClick={() => rejectConnectionHandler(_id)}
                            className="ignore_button"
                          >
                            Ignore
                          </button>
                          <button
                            onClick={() => acceptConnectionHandler(_id)}
                            className="accept_button"
                          >
                            Accept
                          </button>
                        </div>
                      </div>
                    )
                  )
                ) : (
                  <h5 className="text-center my-5">No received connections.</h5>
                )
              ) : (
                <div className="sent_placeholder">
                  {receivedConnections.length ? (
                    receivedConnections.map(
                      ({ receiver, updatedAt, _id }, index) => (
                        <div
                          key={index}
                          className="connection_item py-2 d-flex flex-column flex-md-row justify-content-between "
                        >
                          <div className="connection_left">
                            <img
                              src={receiver.profilePicture}
                              alt="Connection"
                            />
                            <div className="body_container">
                              <p className="connection_name h5">{`${receiver.firstName} ${receiver.lastName}`}</p>
                              <p className="connection_designation">
                                {receiver.designation}
                              </p>
                              <p>
                                <TimeAgo
                                  className="connection_time"
                                  datetime={updatedAt}
                                  locale=""
                                />
                              </p>
                            </div>
                          </div>
                          <div className="connection_right mt-3 mt-md-0 align-items-center justify-content-center">
                            <button
                              onClick={() => cancelConnectionRequest(_id)}
                              className="py-2 px-3 rounded-5"
                            >
                              Cancel Request
                            </button>
                          </div>
                        </div>
                      )
                    )
                  ) : (
                    <h5 className="text-center my-5">No sent connections.</h5>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connection;
