import React, { useEffect, useState } from "react";
import "./style.scss";
import { getCompanyPost } from "../../../../Service/user";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";
import CompanyUpdateCard from "../../Cards/FeaturedPostCard/CompanyUpdateCard";

const CompanyPost = ({ userId,postDelete,newPost }) => {
    const [allPosts, setAllPosts] = useState(null);
    const [user, setUser] = useState(null);
    const [isDeleteSuccessful, setIsDeleteSuccessful] = useState(false);
  
    // Fetch featured posts by userId
    useEffect(() => {
      getCompanyPost(userId)
        .then(({ user }) => {
          console.log("ft", user.companyUpdate);
          setUser(user);
          setAllPosts(user.companyUpdate);
        })
        .catch((err) => {
          console.log(err);
          setUser([]);
          setAllPosts([]);
        });
    }, [userId, isDeleteSuccessful,newPost]);
  
    // const loggedInUser = useSelector((state) => state.user.loggedInUser);
  
    // const [popupOpen, setPopupOpen] = useState(false);
  
    // const [newPost, setNewPost] = useState(false);
    // const openPopup = () => {
    //   setPopupOpen(!popupOpen);
    // };
    // const [visibleCards, setVisibleCards] = useState(4);
    // const [allCards] = useState([
    //   "Card 1",
    //   "Card 2",
    //   "Card 3",
    //   "Card 4",
    //   "Card 5",
    //   "Card 6",
    //   "Card 7",
    //   "Card 8",
    //   "Card 9",
    //   "Card 10",
    //   "Card 11",
    //   "Card 12",
    //   "Card 13",
    //   "Card 14",
    //   "Card 15",
    //   "Card 16",
    //   "Card 17",
    //   "Card 18",
    //   "Card 19",
    //   "Card 20",
    // ]);
  
    // const handleSeeMore = () => {
    //   setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
    // };
  
    // useEffect(() => {
    //   document.title = "Featured Post | The Capital Hub";
    // }, []);
   console.log(userId,"hii",postDelete,newPost)
    return (
      <div className="card-container ">
        <div className="post_container_div d-flex gap-4 ps-3 w-100 overflow-x-auto">
          {allPosts ? (
            allPosts.length !== 0 ? (
              allPosts.map(
                ({ description, video, image, createdAt, likes, _id }) => (
                  <CompanyUpdateCard
                    key={_id} // Use a unique key for each post
                    postId={_id}
                    userId={userId}
                    designation={user?.designation}
                    profilePicture={user?.profilePicture}
                    description={description}
                    firstName={user?.firstName}
                    lastName={user?.lastName}
                    oneLinkId={user?.oneLinkId}
                    video={video}
                    image={image}
                    createdAt={createdAt}
                    likes={likes}
                    setIsDeleteSuccessful={setIsDeleteSuccessful}
                    isNotEditable
                    postDelete={postDelete}
                  />
                )
              )
            ) : (
              <h6 className="text-secondary">No Company Update Posts</h6>
            )
          ) : (
            <SpinnerBS
              className={
                "d-flex justify-content-center align-items-center w-100 py-5"
              }
            />
          )}
        </div>
      </div>
    );
  };

export default CompanyPost