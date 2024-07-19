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
import { useDispatch, useSelector } from "react-redux";
import NewsCorner from "../InvestorGlobalCards/NewsCorner/NewsCorner";
import RecommendationCard from "../InvestorGlobalCards/Recommendation/RecommendationCard";
import { useLocation } from "react-router-dom";
import SpinnerBS from "../../Shared/Spinner/SpinnerBS";
import MaxWidthWrapper from "../../Shared/MaxWidthWrapper/MaxWidthWrapper";
import InfiniteScroll from "react-infinite-scroll-component";
import {
  setPageTitle,
  selectCreatePostModal,
  toggleCreatePostModal,
  setShowOnboarding,
} from "../../../Store/features/design/designSlice";
import { startupOnboardingSteps } from "../../OnBoardUser/steps/startup";
import TutorialTrigger from "../../Shared/TutorialTrigger/TutorialTrigger";
import LookingForFund from "./Components/LookingForFund/LookingForFund";
//import IconFile from "../SvgIcons/IconFile";
// import { GrArticle } from "react-icons/gr";
// import { BsFileText } from "react-icons/bs";
// import { CiImageOn, CiVideoOn } from "react-icons/ci";
import { useParams } from "react-router-dom";
import PostDetail from "../Cards/FeedPost/PostDetail";
import ArticlePopup from "../../PopUp/ArticlePopup/ArticlePopup";

const Feed = () => {
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  const isCreatePostModalOpen = useSelector(selectCreatePostModal);
  const { postId } = useParams();
  const dispatch = useDispatch();
  const [postData, setPostData] = useState({
    userId: "",
    postId: "",
    designation: "",
    startUpCompanyName: "",
    investorCompanyName: "",
    profilePicture: "",
    description: "",
    firstName: "",
    lastName: "",
    oneLinkId: "",
    video: "",
    image: "",
    documentName: "",
    documentUrl: "",
    createdAt: "",
    likes: "",
    response: "",
    repostLoading: "",
    resharedPostId: "",
  });
  const [popupOpen, setPopupOpen] = useState(false);
  const [allPosts, setAllPosts] = useState([]);
  const [newPost, setNewPost] = useState(false);
  const userVisitCount = localStorage.getItem("userVisit")
  //const [loadingFeed, setLoadingFeed] = useState(false);
  const [articlePopup, setArticlePopup] = useState(false);
  const [getSavedPostData, setgetSavedPostData] = useState("");
  const [hasMore, setHasMore] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(()=>{
    if(Number(userVisitCount)<=1){
      dispatch(setShowOnboarding(true))
    }
  },[])
  useEffect(() => {
    setPopupOpen(isCreatePostModalOpen);
  }, [isCreatePostModalOpen]);

  // Methods
  const openPopup = () => {
    setPopupOpen(!popupOpen);
    dispatch(toggleCreatePostModal());
  };

  const appendDataToAllPosts = (data) => {
    setAllPosts([data, ...allPosts]);
  };

  const deletePostFilterData = (postId) => {
    const filteredPosts = allPosts.filter((post) => post._id !== postId);
    setAllPosts(filteredPosts);
  };

  const fetchMorePosts = () => {
    getAllPostsAPI(page)
      .then(({ data }) => {
        if (data?.length === 0) {
          setHasMore(false);
        } else {
          const totalPost = data.filter((item) => item.postType !== "company");
          setAllPosts([...allPosts, ...totalPost]);
          setPage(page + 1);
        }
      })
      .catch((err) => {
        setHasMore(false);
        console.log(err);
      });
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
    fetchMorePosts();
  }, []);
  // newPost

  useEffect(() => {
    document.title = "Home | The Capital Hub";
    dispatch(setPageTitle("Home"));
  }, [dispatch]);

  // Repost
  const [repostLoading, setRepostLoading] = useState({
    instant: false,
    withThoughts: false,
  });
  const [respostingPostId, setRepostingPostId] = useState("");

  const repostInstantly = (resharedPostId) => {
    setRepostLoading({ ...repostLoading, instant: true });
    postUserPost({ resharedPostId })
      .then(() => fetchMorePosts())
      .catch((err) => console.log(err))
      .finally(() => setRepostLoading({ ...repostLoading, instant: false }));
  };

  return (
    <MaxWidthWrapper>
      <div className="mx-0 feed_container">
        {postId ? (
          <PostDetail
            userId={postData.userId}
            postId={postId}
            designation={postData.designation}
            startUpCompanyName={postData.startUp}
            investorCompanyName={postData.investor}
            profilePicture={postData.profilePicture}
            description={postData.description}
            firstName={postData.firstName}
            lastName={postData.lastName}
            oneLinkId={postData.oneLinkId}
            video={postData.video}
            image={postData.image}
            documentName={postData.documentName}
            documentUrl={postData.documentUrl}
            createdAt={postData.createdAt}
            likes={postData.likes}
            resharedPostId={postData.resharedPostId}
            fetchAllPosts={fetchMorePosts}
            response={getSavedPostData}
            repostWithToughts={(resharedPostId) => {
              setRepostingPostId(resharedPostId);
              openPopup();
            }}
            repostInstantly={repostInstantly}
            repostLoading={repostLoading}
            deletePostFilterData={deletePostFilterData}
            setPostData={setPostData}
          />
        ) : (
          <div className="main_content">
            <div className="Posts__column d-flex flex-column gap-2">
              {/* Small Profile Card */}
              <SmallProfileCard className="d-none d-md-block" text={"Home"} />

              {/* Onboarding popup */}
              <TutorialTrigger steps={startupOnboardingSteps.homePage} />

              {/* Looking for funding */}
              <LookingForFund />

              {/* Write a Post */}
              <div
                className="rounded-2 start_post_container"
                style={{ flexDirection: "column" }}
              >
                <div className="start_post_container" style={{ width: "100%" }}>
                  <img
                    src={loggedInUser.profilePicture}
                    alt="Profile"
                    className="rounded-circle object-fit-cover"
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div
                    className="w-auto flex-grow-1 me-4"
                    onClick={openPopup}
                    style={{ cursor: "pointer" }}
                  >
                    <input
                      className="px-3 flex-grow-1"
                      type="text"
                      placeholder="Write a post..."
                      style={{ pointerEvents: "none" }}
                    />
                  </div>
                </div>
                {/*<div className="start_footer_container">
                  <input
                    type="file"
                    name="image"
                    style={{ display: "none" }}
                    // ref={galleryInputRef}
                    // onChange={handleFileChange}
                    accept="image/*"
                  />
                  <button
                    className="white_button hover-text"
                    //onClick={handleGalleryButtonClick}
                  >
                    <CiImageOn
                      size={25}
                      style={{
                        color: "var(--d-l-grey)",
                        marginRight: "0.37rem",
                      }}
                    />
                    <span class="tooltip-text top">images</span>
                  </button>
                  <input
                    type="file"
                    name="video"
                    style={{ display: "none" }}
                    // ref={cameraInputRef}
                    // onChange={handleFileChange}
                    accept="video/*"
                  />
                  <button
                    className="white_button hover-text"
                    //onClick={handleCameraButtonClick}
                  >
                    <CiVideoOn
                      size={25}
                      style={{
                        color: "var(--d-l-grey)",
                        marginRight: "0.37rem",
                      }}
                    />
                    <span class="tooltip-text top1">video</span>
                  </button>
                  <input
                    type="file"
                    name="document"
                    style={{ display: "none" }}
                    // ref={documentInputRef}
                    // onChange={handleFileChange}
                  />
                  <button
                    className="white_button hover-text"
                    //onClick={handleDocumentButtonClick}
                  >
                    <BsFileText
                      size={25}
                      style={{
                        color: "var(--d-l-grey)",
                        marginRight: "0.37rem",
                      }}
                    />
                    <span class="tooltip-text top2">doc</span>
                  </button>
                  <button
                    className="white_button hover-text"
                    //onClick={handleDocumentButtonClick}
                    onClick={() => {
                      setArticlePopup(true);
                    }}
                    style={{ cursor: "pointer" }}
                  >
                    <GrArticle
                      size={25}
                      style={{
                        color: "var(--d-l-grey)",
                        marginRight: "0.37rem",
                      }}
                    />
                    <span class="tooltip-text top2">article</span>
                  </button>
                </div>*/}
              </div>
              {/* Posts container - column of <FeedPostCard /> */}
              <div className="posts__container d-flex flex-column gap-3">
                {/* {!loadingFeed ? ( */}
                <InfiniteScroll
                  className="m-0 p-0"
                  dataLength={allPosts.length}
                  next={fetchMorePosts}
                  hasMore={hasMore}
                  loader={
                    <div className="loader_spinner container p-5 text-center my-5  rounded-5 shadow-sm ">
                      <SpinnerBS colorClass={"d-l-grey"} />
                    </div>
                  }
                >
                  {allPosts?.map(
                    ({
                      description,
                      user,
                      video,
                      image,
                      documentUrl,
                      documentName,
                      createdAt,
                      likes,
                      _id,
                      resharedPostId,
                    }) => {
                      if (!user) return null;

                      const {
                        firstName,
                        lastName,
                        designation,
                        profilePicture,
                        _id: userId,
                        startUp,
                        investor,
                        oneLinkId,
                      } = user;

                      return (
                        <>
                          {!firstName ? (
                            <></>
                          ) : (
                            <FeedPostCard
                              key={_id}
                              userId={userId}
                              postId={_id}
                              designation={designation}
                              startUpCompanyName={startUp}
                              investorCompanyName={investor}
                              profilePicture={profilePicture}
                              description={description}
                              firstName={firstName}
                              lastName={lastName}
                              oneLinkId={oneLinkId}
                              video={video}
                              image={image}
                              documentName={documentName}
                              documentUrl={documentUrl}
                              createdAt={createdAt}
                              likes={likes}
                              resharedPostId={resharedPostId}
                              fetchAllPosts={fetchMorePosts}
                              response={getSavedPostData}
                              repostWithToughts={(resharedPostId) => {
                                setRepostingPostId(resharedPostId);
                                openPopup();
                              }}
                              repostInstantly={repostInstantly}
                              repostLoading={repostLoading}
                              deletePostFilterData={deletePostFilterData}
                              setPostData={setPostData}
                            />
                          )}
                        </>
                      );
                    }
                  )}
                  
                </InfiniteScroll>

                {/* ) : (
                <div className="container p-5 text-center my-5 bg-white rounded-4 shadow-sm ">
                  <SpinnerBS />
                </div>
              )} */}
              </div>
            </div>
            {popupOpen && (
              <CreatePostPopUp
                setPopupOpen={setPopupOpen}
                popupOpen
                setNewPost={setNewPost}
                respostingPostId={respostingPostId}
                appendDataToAllPosts={appendDataToAllPosts}
              />
            )}
            {articlePopup && (
              <ArticlePopup
                setArticlePopup={setArticlePopup}
                articlePopup={articlePopup}
                setNewPost={setNewPost}
                respostingPostId={respostingPostId}
                appendDataToAllPosts={appendDataToAllPosts}
              />
            )}
          </div>
        )}
        <div className="right_content">
          <RightProfileCard />
          <RecommendationCard />
          <NewsCorner />
        </div>
      </div>
      {/* {showOnboarding ? (
        <OnBoardUser steps={startupOnboardingSteps.homePage} />
      ) : (
        ""
      )} */}
    </MaxWidthWrapper>
  );
};

export default Feed;
