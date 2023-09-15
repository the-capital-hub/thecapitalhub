import React, { useEffect, useState } from "react";
import "./Connection.scss";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import {
  acceptConnectionAPI,
  cancelConnectionRequestAPI,
  getSentConnectionsAPI,
  getUserConnections,
  pendingConnectionRequestsAPI,
  rejectConnectionAPI,
} from "../../../Service/user";
import TimeAgo from "timeago-react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Connection = () => {
  const [selectedTab, setSelectedTab] = useState("received"); // Default to "received"
  const [receivedConnections, setReceivedConnections] = useState([]);
  const [loading, setLoading] = useState(true);
  const [getAllConnection, setGetAllConnection] = useState([]); // State for accepted connections
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  // Function to handle tab change
  useEffect(() => {
    getUserConnections(loggedInUser._id).then((res) => {
      console.log("res2-->", res);
      setGetAllConnection(res.data); // Set accepted connections data
    });
  }, []);
  const handleTabChange = (tab) => {
    if (tab === "received") {
      getReceivedConnections();
    } else if (tab === "accepted") {
      getUserConnections(loggedInUser._id).then((res) => {
        console.log("res-->", res);
        setGetAllConnection(res.data); // Set accepted connections data
      });
    } else {
      getSentConnection();
    }
    setSelectedTab(tab);
  };

  // Function to get received connections
  const getReceivedConnections = () => {
    setLoading(true);
    pendingConnectionRequestsAPI()
      .then(({ data }) => setReceivedConnections(data))
      .catch((err) => console.log(err))
      .finally(() => setLoading(false));
  };

  // Function to get sent connections
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

  // Function to accept a connection
  const acceptConnectionHandler = async (connectionId) => {
    try {
      await acceptConnectionAPI(connectionId);
      getReceivedConnections();
    } catch (error) {
      console.log("Error accepting connection: ", error);
    }
  };

  // Function to reject a connection
  const rejectConnectionHandler = async (connectionId) => {
    try {
      await rejectConnectionAPI(connectionId);
      getReceivedConnections();
    } catch (error) {
      console.log("Error rejecting connection: ", error);
    }
  };

  // Function to cancel a sent connection request
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

              <a
                href="#"
                className={`connection_nav_link ${
                  selectedTab === "accepted" ? "active" : ""
                }`}
                onClick={() => handleTabChange("accepted")}
              >
                Accepted
              </a>
            </nav>
            <hr />
            <div className="connection_list">
              {loading ? (
                <h5 className="text-center my-5">
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </h5>
              ) : selectedTab === "received" ? (
                receivedConnections.length ? (
                  receivedConnections.map(
                    ({ sender, updatedAt, _id }, index) => (
                      <div
                        key={index}
                        className="connection_item d-flex flex-column flex-md-row justify-content-between "
                      >
                        {/* Render content for received connections here */}
                        <div className="connection_left">
                          <Link to={`/user/${_id}`}>
                            <img src={sender.profilePicture} alt="Connection" />
                          </Link>
                          <div className="body_container">
                            <p className="connection_name h5">
                              <Link
                                to={`/user/${_id}`}
                                className=" text-black text-decoration-none"
                              >
                                {`${sender.firstName} ${sender.lastName}`}
                              </Link>
                            </p>
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
              ) : selectedTab === "sent" ? (
                <div className="sent_placeholder">
                  {receivedConnections.length ? (
                    receivedConnections.map(
                      ({ receiver, updatedAt, _id }, index) => (
                        <div
                          key={index}
                          className="connection_item py-2 d-flex flex-column flex-md-row justify-content-between "
                        >
                          {/* Render content for sent connections here */}
                          <div className="connection_left">
                            <Link to={`/user/${_id}`}>
                              <img
                                src={receiver?.profilePicture}
                                alt="Connection"
                              />
                            </Link>
                            <div className="body_container">
                              <p className="connection_name h5">
                                <Link
                                  to={`/user/${_id}`}
                                  className=" text-black text-decoration-none"
                                >
                                  {`${receiver.firstName} ${receiver.lastName}`}
                                </Link>
                              </p>
                              <p className="connection_designation">
                                {receiver?.designation}
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
              ) : selectedTab === "accepted" ? (
                // Render content for the "Accepted" tab here using getAllConnection
                getAllConnection.length ? (
                  getAllConnection.map((data, index) => (
                    // console.log("data-->", data)
                    <div
                      key={index}
                      className="connection_item d-flex flex-column flex-md-row justify-content-between"
                    >
                      {/* Render the accepted connection content here */}
                      <div className="connection_left">
                        <Link to={`/user/${data._id}`}>
                          <img src={data.profilePicture} alt="Connection" />
                        </Link>
                        <div className="body_container">
                          <p className="connection_name h5">
                            <Link
                              to={`/user/${data._id}`}
                              className=" text-black text-decoration-none"
                            >
                              {`${data.firstName ? data.firstName : "name"} ${
                                data.lastName ? data.lastName : ""
                              }`}
                            </Link>
                          </p>
                          <p className="connection_designation">
                            {data.designation ? data.designation : ""}
                          </p>
                          <p>
                            {/* <TimeAgo
                              className="connection_time"
                              datetime={data.updatedAt ? data.updatedAt : ""}
                              locale=""
                            /> */}
                          </p>
                        </div>
                      </div>
                      <div className="connection_right mt-3 mt-md-0 align-items-center justify-content-center">
                        {/* You can add buttons or other elements for accepted connections */}
                      </div>
                    </div>
                  ))
                ) : (
                  <h5 className="text-center my-5">No accepted connections.</h5>
                )
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Connection;
