import React, { useState, useEffect } from "react";
import "./NavigatedCardViewer.scss";
// import FeedPostCard from "../../Cards/FeedPost/FeedPostCard";
import {
  getSavedPostCollections,
  getSavedPostsByCollection,
} from "../../../../Service/user";
import { useSelector } from "react-redux";
import SavedPostSmallCard from "../../InvestorGlobalCards/SavedPostSmallCard/SavedPostSmallCard";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";

const NavigatedCardViewer = () => {
  const [activeHeader, setActiveHeader] = useState("startup");
  const [loading, setLoading] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [headerTabs, setHeaderTabs] = useState([]);
  const [collectionName, setCollectionName] = useState(null);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const handleHeaderClick = (header) => {
    setActiveHeader(header);
    setCollectionName(header);
    setLoading(true);
  };

  useEffect(() => {
    setLoading(true);
    getSavedPostCollections(loggedInUser._id)
      .then((res) => {
        const collectionHeaders = res.data.map((val) => val.name);
        //(res.data);
        setHeaderTabs(collectionHeaders);
        setActiveHeader(collectionHeaders[0]);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, [loggedInUser]);

  useEffect(() => {
    if (headerTabs.length > 0) {
      setCollectionName(headerTabs[0]);
    }
  }, [headerTabs]);

  useEffect(() => {
    if (collectionName) {
      setLoading(true);
      getSavedPostsByCollection(loggedInUser._id, collectionName)
        .then((data) => {
          console.log(data);
          setAllPosts(data.data);
          setLoading(false);
        })
        .catch((error) => {
          console.log(error);
          setAllPosts([]);
          setLoading(false);
        });
    }
  }, [loggedInUser, collectionName, activeHeader]);
 console.log(headerTabs)
  return (
    <div className="navigated_box_container">
      <div className="navigated-card-viewer">
        <div className="navigation-header border-bottom">
          {headerTabs.map((header) => (
            <div
              key={header}
              className={`nav-item ${activeHeader === header ? "active" : ""}`}
              onClick={() => handleHeaderClick(header)}
            >
              {header}
            </div>
          ))}
        </div>
        <div className="card-viewer">
          {loading ? (
            <SpinnerBS
              className={
                "d-flex py-5 justify-content-center align-items-center w-100"
              }
              colorClass={"d-l-grey"}
            />
          ) : allPosts && allPosts.length > 0 ? (
            allPosts.map(
              (
                {
                  description,
                  user: {
                    firstName,
                    lastName,
                    profilePicture,
                    designation,
                    _id: userId,
                    oneLinkId,
                  },
                  video,
                  image,
                  createdAt,
                  _id,
                  resharedPostId,
                },
                index
              ) => (
                <SavedPostSmallCard
                  activeHeader={activeHeader}
                  userId={userId}
                  key={index}
                  description={description}
                  profilePicture={profilePicture}
                  firstName={firstName}
                  lastName={lastName}
                  oneLinkId={oneLinkId}
                  video={video}
                  image={image}
                  createdAt={createdAt}
                  designation={designation}
                  postId={_id}
                  setAllPosts={setAllPosts}
                  allPosts={allPosts}
                  resharedPostId={resharedPostId}
                />
              )
            )
          ) : allPosts?.length === 0 ? (
            <p className="container p-5 text-center my-5 white-to-grey d-l-grey mx-auto">
              No posts saved
            </p>
          ) : (
            <SpinnerBS
              className={
                "d-flex py-5 justify-content-center align-items-center w-100"
              }
              colorClass={"d-l-grey"}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default NavigatedCardViewer;
