import React, { useEffect, useState } from "react";
import "./feed.scss";
// import profilePic from "../../../Images/investorIcon/profilePic.webp";
import SmallProfileCard from "../Cards/TwoSmallMyProfile/SmallProfileCard";
import RightProfileCard from "../InvestorGlobalCards/RightProfileCard/RightProfileCard";
import FeedPostCard from "../Cards/FeedPost/FeedPostCard";
import CreatePostPopUp from "../../PopUp/CreatePostPopUp/CreatePostPopUp";
import { getAllPostsAPI } from "../../../Service/user";
import { useSelector } from "react-redux";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import SavedPostPopUp from "../../PopUp/SavedPostPopUp/SavedPostPopUp";

const Feed = () => {
  const [saved, handleSaved] = useState(false);
  const [popupOpen, setPopupOpen] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [newPost, setNewPost] = useState(false);
  const openPopup = () => {
    setPopupOpen(!popupOpen);
  };

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const handleClosePopup = () => {
    handleSaved(false);
  };
  // const handleBack = () => {
  //   navigate("/");
  // };

  useEffect(() => {
    document.title = "Home | The Capital Hub";
    getAllPostsAPI()
      .then(({ data }) => {
        setAllPosts(data);
      })
      .catch((err) => {
        console.log(err);
        setAllPosts([]);
      });
  }, [newPost]);

  const savePostHandler = async (postId) => {
    try {
      // api call for savin a post
    } catch (error) {}
  };

  return (
    <>
      <div className="container-fluid feed_container">
        <div className="row mt-2">
          <div className="col">
            <SmallProfileCard text={"Home"} />
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
              {allPosts ? (
                allPosts.map(
                  ({
                    description,
                    user: { firstName, lastName, designation, profilePicture },
                    video,
                    image,
                    createdAt,
                    likes,
                    _id,
                  }) => (
                    <FeedPostCard
                      key={Math.random()}
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
                      handleSaved={handleSaved}
                      saved={saved}
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
              <CreatePostPopUp
                setPopupOpen={setPopupOpen}
                popupOpen
                setNewPost={setNewPost}
              />
            )}

            {/* {saved && <SavedPostPopUp onClose={handleClosePopup} postId={_id}/>} */}

            {saved && allPosts ? (
              allPosts.map(
                (data) => (
                  <SavedPostPopUp
                    onClose={handleClosePopup}
                    key={Math.random()}
                    handleSaved={handleSaved}
                    saved={saved}
                    data={data}
                    postId={data._id}
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
          <div className="col   d-none d-xl-block">
            <div className="content-30">
              <div className="row">
                <RightProfileCard />
                <RecommendationCard />
                <NewsCorner />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Feed;
