import React, { useEffect, useState } from "react";
import "./style.scss";
import { getAllPostsAPI } from "../../../../Service/user";
import FeaturedPostCard from "../../Cards/FeaturedPostCard/FeaturedPostCard";

const Card = () => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [allPosts, setAllPosts] = useState(null);
  const [newPost, setNewPost] = useState(false);
  const openPopup = () => {
    setPopupOpen(!popupOpen);
  };
  const [visibleCards, setVisibleCards] = useState(4);
  const [allCards] = useState([
    "Card 1",
    "Card 2",
    "Card 3",
    "Card 4",
    "Card 5",
    "Card 6",
    "Card 7",
    "Card 8",
    "Card 9",
    "Card 10",
    "Card 11",
    "Card 12",
    "Card 13",
    "Card 14",
    "Card 15",
    "Card 16",
    "Card 17",
    "Card 18",
    "Card 19",
    "Card 20",
  ]);

  const handleSeeMore = () => {
    setVisibleCards((prevVisibleCards) => prevVisibleCards + 4);
  };

  useEffect(() => {
    document.title = "Featured Post | The Capital Hub";
    getAllPostsAPI()
      .then(({ data }) => {
        // Sort the posts in descending order based on createdAt timestamps
        const sortedPosts = data.sort((a, b) =>
          b.createdAt.localeCompare(a.createdAt)
        );
        // Select the last 3 recent posts
        const last3RecentPosts = sortedPosts.slice(0, 3);
        setAllPosts(last3RecentPosts); // Update the state with the last 3 recent posts
      })
      .catch((err) => {
        console.log(err);
        setAllPosts([]);
      });
  }, [newPost]);

  return (
    <div className="card-container">
      <div className="post_container_div">
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
              <FeaturedPostCard
                key={_id} // Use a unique key for each post
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
              />
            )
          )
        ) : (
          <p className="container p-5 text-center my-5 bg-white rounded-5 shadow ">
            Loading...
          </p>
        )}
      </div>
    </div>
  );
};

export default Card;
