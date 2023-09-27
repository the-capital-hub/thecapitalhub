import React, { useEffect, useState } from "react";
import "./home.scss";
import profilePic from "../../../Images/investorIcon/profilePic.webp";

import { useSelector } from "react-redux";
// import InvestorRecommendationCard from "../../../components/NewInvestor/InvestorRecommendationCard/InvestorRecommendationCard";
import InvestorRightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import InvestorCreatePostPopUp from "../../../components/NewInvestor/InvestorCreatePostPopUp/InvestorCreatePostPopUp";
import InvestorSmallProfilecard from "../../../components/NewInvestor/InvestorSmallProfilecard/InvestorSmallProfilecard";
import InvestorFeedPostCard from "../../../components/NewInvestor/InvesterFeedPostCard/InvestorFeedPostCard";
import RecommendationCard from "../../../components/Investor/InvestorGlobalCards/Recommendation/RecommendationCard";
import NewsCorner from "../../../components/Investor/InvestorGlobalCards/NewsCorner/NewsCorner";
import {
  getAllPostsAPI,
  getSavedPostCollections,
  postUserPost,
} from "../../../Service/user";
import { useLocation } from 'react-router-dom';

function Home() {
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

  useEffect(() => {
    getSavedPostCollections(loggedInUser._id).then((data) => {
      setgetSavedPostData(data);
    });
    document.title = "Home | Investors - The Capital Hub";
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

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const showPopup = queryParams.get('showPopup') === 'true';

  useEffect(() => {
    if (showPopup) {
      setPopupOpen(true);
      const urlWithoutQuery = location.pathname;
      window.history.replaceState({}, '', urlWithoutQuery);
    }
  }, [location]);
  return (
    <>
      <div className="container-fluid feed_container">
        <div className="row mt-2">
          <div className="col">
            <InvestorSmallProfilecard text={"Home"} />
            <div className="content-70">
              <div className="row">
                <div className="col-12 mt-2">
                  <div className="box start_post_container">
                    <img
                      src={loggedInUser.profilePicture}
                      alt="Image"
                      className="rounded-circle"
                    />
                    <div className="w-100 me-4" onClick={openPopup}>
                      <input
                        className="px-3"
                        type="text"
                        placeholder="Write a post..."
                        style={{ pointerEvents: "none" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
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
                    createdAt,
                    likes,
                    _id,
                    resharedPostId,
                  }) => (
                    <InvestorFeedPostCard
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
                <p className="container p-5 text-center my-5 bg-white rounded-5 shadow ">
                  <div class="d-flex justify-content-center">
                    <div class="spinner-border" role="status">
                      <span class="visually-hidden">Loading...</span>
                    </div>
                  </div>
                </p>
              )}
            </div>
            {popupOpen && (
              <InvestorCreatePostPopUp
                setPopupOpen={setPopupOpen}
                popupOpen
                setNewPost={setNewPost}
                respostingPostId={respostingPostId}
              />
            )}
          </div>
          <div className="col   d-none d-xl-block">
            <div className="content-30">
              <div className="row">
                <InvestorRightProfileCard />
                <RecommendationCard />
                <NewsCorner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
