import React, { useEffect, useState } from "react";
import "./feed.scss";
// import profilePic from "../../../Images/investorIcon/profilePic.webp";
import SmallProfileCard from "../InvestorGlobalCards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import FeedPostCard from "../Cards/FeedPost/FeedPostCard";
import CreatePostPopUp from "../../PopUp/CreatePostPopUp/CreatePostPopUp";
import {
  getAllPostsAPI,
  getSavedPostCollections,
  postUserPost,
} from "../../../Service/user";
import { useSelector } from "react-redux";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import { useLocation } from "react-router-dom";
import SpinnerBS from "../../Shared/Spinner/SpinnerBS";

const Feed = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [newPost, setNewPost] = useState(false);
  const [loadingFeed, setLoadingFeed] = useState(false);
  const [getSavedPostData, setgetSavedPostData] = useState("");

  const openPopup = () => {
    setPopupOpen(!popupOpen);
  };

  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const fetchAllPosts = () => {
    setLoadingFeed(true);
    getAllPostsAPI()
      .then(({ data }) => {
        setAllPosts(data);
      })
      .catch((err) => {
        console.log(err);
        setAllPosts([]);
      })
      .finally(() => setLoadingFeed(false));
  };

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showPopup = queryParams.get("showPopup") === "true";

  useEffect(() => {
    if (showPopup) {
      setPopupOpen(true);
      const urlWithoutQuery = location.pathname;
      window.history.replaceState({}, "", urlWithoutQuery);
    }
  }, [location]);


  useEffect(() => {
    getSavedPostCollections(loggedInUser._id).then((data) => {
      setgetSavedPostData(data);
    });
    document.title = "Home | The Capital Hub";
    fetchAllPosts();
  }, [newPost]);

  console.log(allPosts?.[0]);

  // Repost
  const [repostLoading, setRepostLoading] = useState({
    instant: false,
    withThoughts: false,
  });
  const [respostingPostId, setRepostingPostId] = useState("");

  const repostInstantly = (resharedPostId) => {
    setRepostLoading({ ...repostLoading, instant: true });
    postUserPost({ resharedPostId })
      .then(() => fetchAllPosts())
      .catch((err) => console.log(err))
      .finally(() => setRepostLoading({ ...repostLoading, instant: false }));
  };

  return (
    <div className="feed_container">
      <div className="main_content">
        <div className="Posts__column d-flex flex-column gap-4">
          {/* Small Profile Card */}
          <SmallProfileCard className="d-none d-md-block" text={"Home"} />

          {/* Write a Post */}
          <div className="bg-white rounded-5 start_post_container">
            <img
              src={loggedInUser.profilePicture}
              alt="Image"
              className="rounded-circle"
              style={{ width: "50px", height: "50px" }}
            />
            <div className="w-auto flex-grow-1 me-4" onClick={openPopup}>
              <input
                className="px-3 flex-grow-1"
                type="text"
                placeholder="Write a post..."
                style={{ pointerEvents: "none" }}
              />
            </div>
          </div>

          {/* Posts container - column of <FeedPostCard /> */}
          <div className="Posts__container d-flex flex-column gap-3">
            {!loadingFeed ? (
              allPosts?.map(
                ({
                  description,
                  user: {
                    firstName,
                    lastName,
                    designation,
                    profilePicture,
                    _id: userId,
                  },
                  video,
                  image,
                  documentUrl,
                  documentName,
                  createdAt,
                  likes,
                  _id,
                  resharedPostId,
                }) => (
                  <FeedPostCard
                    key={Math.random()}
                    userId={userId}
                    postId={_id}
                    designation={designation}
                    profilePicture={profilePicture}
                    description={description}
                    firstName={firstName}
                    lastName={lastName}
                    video={video}
                    image={image}
                    documentName={documentName}
                    documentUrl={documentUrl}
                    createdAt={createdAt}
                    likes={likes}
                    fetchAllPosts={fetchAllPosts}
                    response={getSavedPostData}
                    repostWithToughts={(resharedPostId) => {
                      setRepostingPostId(resharedPostId);
                      openPopup();
                    }}
                    repostInstantly={repostInstantly}
                    repostLoading={repostLoading}
                    resharedPostId={resharedPostId}
                  />
                )
              )
            ) : (
              <div className="container p-5 text-center my-5 bg-white rounded-5 shadow-sm ">
                <SpinnerBS />
              </div>
            )}
          </div>
        </div>
        {popupOpen && (
          <CreatePostPopUp
            setPopupOpen={setPopupOpen}
            popupOpen
            setNewPost={setNewPost}
            respostingPostId={respostingPostId}
          />
        )}
      </div>
      <div className="right_content">
        <RightProfileCard />
        <RecommendationCard />
        <NewsCorner />
      </div>
    </div>
  );
};

export default Feed;
