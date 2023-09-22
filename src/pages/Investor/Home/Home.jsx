import React, { useEffect, useState } from "react";
import "./home.scss";
import profilePic from "../../../Images/investorIcon/profilePic.webp";

import { useSelector } from "react-redux";
import InvestorRecommendationCard from "../../../components/NewInvestor/InvestorRecommendationCard/InvestorRecommendationCard";
import InvestorRightProfileCard from "../../../components/NewInvestor/InvestorRightProfileCard/InvestorRightProfileCard";
import InvestorCreatePostPopUp from "../../../components/NewInvestor/InvestorCreatePostPopUp/InvestorCreatePostPopUp";
import InvestorSmallProfilecard from "../../../components/NewInvestor/InvestorSmallProfilecard/InvestorSmallProfilecard";
import InvestorFeedPostCard from "../../../components/NewInvestor/InvesterFeedPostCard/InvestorFeedPostCard";



function Home() {





    const [popupOpen, setPopupOpen] = useState(false);
    // const [allPosts, setAllPosts] = useState();
    const allPosts=[{
        "_id": {
          "$oid": "64dcbe8c834c4a7a44178515"
        },
        "description": "Hi All, This is my first post on the capital hub network. Hoping to connect with you all",
        "user": {
          "$oid": "64e9fd9d4e368da2bf3e721f"
        },
        "createdAt": {
          "$date": "2023-08-16T12:18:20.625Z"
        },
        "updatedAt": {
          "$date": "2023-09-16T11:25:07.449Z"
        },
        "__v": 15,
        "category": "other",
        "likes": [
          {
            "$oid": "64e9fd9d4e368da2bf3e721f"
          }
        ],
        "comments": [
          {
            "user": {
              "$oid": "64e7327ed2133164ba157af3"
            },
            "text": "Test Comment",
            "_id": {
              "$oid": "64e9c58220ccc6a83a496374"
            },
            "createdAt": {
              "$date": "2023-08-26T09:27:30.153Z"
            },
            "updatedAt": {
              "$date": "2023-08-26T09:27:30.153Z"
            }
          },
          {
            "user": {
              "$oid": "64e7327ed2133164ba157af3"
            },
            "text": "Test Comment 2",
            "_id": {
              "$oid": "64e9c5af20ccc6a83a49637b"
            },
            "createdAt": {
              "$date": "2023-08-26T09:28:15.013Z"
            },
            "updatedAt": {
              "$date": "2023-08-26T09:28:15.013Z"
            }
          },
          {
            "user": {
              "$oid": "64ef041e9edd5ded245b5579"
            },
            "text": "Test Comment 2",
            "_id": {
              "$oid": "64f1ba53bf6913848bfbb1f2"
            },
            "createdAt": {
              "$date": "2023-09-01T10:17:55.740Z"
            },
            "updatedAt": {
              "$date": "2023-09-01T10:17:55.740Z"
            }
          },
          {
            "user": {
              "$oid": "64e7327ed2133164ba157af3"
            },
            "text": "Test Comment 2",
            "_id": {
              "$oid": "64f1ba8fbf6913848bfbb1fa"
            },
            "createdAt": {
              "$date": "2023-09-01T10:18:55.244Z"
            },
            "updatedAt": {
              "$date": "2023-09-01T10:18:55.244Z"
            }
          }
        ],
        "resharedCount": 3
      }]
    const [newPost, setNewPost] = useState(false);
    const [loadingFeed, setLoadingFeed] = useState(false);
    const [getSavedPostData, setgetSavedPostData] = useState("");
  
    const openPopup = () => {
      setPopupOpen(!popupOpen);
    };
  
    const loggedInUser = useSelector((state) => state.user.loggedInUser);
  
    const fetchAllPosts = () => {
    //   setLoadingFeed(true);
    //   getAllPostsAPI()
    //     .then(({ data }) => {
    //       setAllPosts(data);
    //     })
    //     .catch((err) => {
    //       console.log(err);
    //       setAllPosts([]);
    //     })
    //     .finally(() => setLoadingFeed(false));
    };
  
    // useEffect(() => {
    //   getSavedPostCollections(loggedInUser._id).then((data) => {
    //     setgetSavedPostData(data);
    //   });
    //   document.title = "Home | The Capital Hub";
    //   fetchAllPosts();
    // }, [newPost]);
  
    console.log(allPosts?.[0]);
  
    // Repost
    const [repostLoading, setRepostLoading] = useState({
      instant: false,
      withThoughts: false,
    });
    const [respostingPostId, setRepostingPostId] = useState("");
  
    const repostInstantly = (resharedPostId) => {
    //   setRepostLoading({ ...repostLoading, instant: true });
    //   postUserPost({ resharedPostId })
    //     .then(() => fetchAllPosts())
    //     .catch((err) => console.log(err))
    //     .finally(() => setRepostLoading({ ...repostLoading, instant: false }));
    };


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
        key={_id} // Use a unique key based on the post's ID
        userId={userId}
        postId={_id}
        designation={designation}
        profilePicture={profilePicture}
        description={description}
        firstName={firstName}
        lastName={lastName}
        video={video}
        image={image}
        createdAt={"createdAt"}
        likes={likes}
        fetchAllPosts={fetchAllPosts}
        response={getSavedPostData}
        repostWithThoughts={(resharedPostId) => {
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
               <InvestorRecommendationCard />
              </div>
            </div>
          </div>
        </div>
      </div>
</>
  )
}

export default Home