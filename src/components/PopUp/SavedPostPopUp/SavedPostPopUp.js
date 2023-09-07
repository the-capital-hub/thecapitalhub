import React, { useEffect, useState } from "react";
import "./SavedPostPopUp.scss";
import { getSavedPostCollections, savePost } from "../../../Service/user";
import { useSelector } from "react-redux";

const SavedPostPopUp = ({ onClose, postId, data }) => {
  console.log("data------>", data);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const [collections, setCollections] = useState([]); // State to store fetched data
  const [selectedCollection, setSelectedCollection] = useState([]); // State to store selected value
  const [newCollectionName, setNewCollectionName] = useState("");

  const handleOKClick = () => {
    onClose();
  };

  useEffect(() => {
    // Fetch data from API when the component mounts
    getSavedPostCollections(loggedInUser._id).then((res) => {
      console.log("res", res);
      setCollections(res.data); // Set the fetched data in state
    });
  }, []);

  //   const handleSave = () =>{
  //     const userId = loggedInUser._id
  //     savePost(userId,collectionName,postId)
  //   }

  const handleSave = () => {
    if (!selectedCollection) {
      return;
    }
    const userId = loggedInUser._id;
    savePost(data._id, userId, selectedCollection)
      .then((response) => {
        console.log("response-->", response);
        // if (response.status == "400") {
        alert(response.message);
        // }
      })
      .catch((error) => {});

    onClose();
  };

  return (
    <div className="savedpost_popup">
      <div className="popup">
        <div className="popup-content">
          <h6>Saved Post inside the Folder</h6>
          <div>
            <select
              value={selectedCollection}
              onChange={(e) => setSelectedCollection(e.target.value)}
            >
              <option value="">Select a collection</option>
              {collections.map((collection) => (
                <option key={collection.id} value={collection.id}>
                  {collection.name}
                </option>
              ))}
            </select>
            <button onClick={handleSave}>Save</button>

            <input
                type="text"
                placeholder="Add new folder"
                value={newCollectionName}
                onChange={(e) => setNewCollectionName(e.target.value)}
              />
              <button
                onClick={() => {
                  if (newCollectionName) {
                    setSelectedCollection(newCollectionName);
                    savePost(
                      data._id,
                      loggedInUser._id,
                      newCollectionName
                    ).then((res) => {
                      console.log("res-----------", res);
                    });
                    setNewCollectionName(""); // Clear the input field after selection
                  }
                }}
              >
                + Add New
              </button>
          </div>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default SavedPostPopUp;
