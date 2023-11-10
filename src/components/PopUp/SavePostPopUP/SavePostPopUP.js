import React, { useState, useEffect } from 'react';
import "./SavePostPopUP.scss";
import { getSavedPostCollections, savePostByUserIdAPI } from "../../../Service/user";
import { useSelector } from 'react-redux';

function SavePostPopUP({ postId, onClose, savedPostStatus, isInvestor = false }) {
  const [selectedOption, setSelectedOption] = useState("");
  const [collectionOptions, setCollectionOptions] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [postSaveError, setPostSaveError] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const buttonColor = isInvestor ? "#d3f36b" : "#fd5901";
  const buttonText = isInvestor ? "#000" : "#fff";

  useEffect(() => {
    getSavedPostCollections(loggedInUser._id)
      .then((res) => {
        setCollectionOptions(res);
      });
  }, []);

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSavePost = async () => {
    try {
      const data = await savePostByUserIdAPI(loggedInUser._id, selectedOption ? selectedOption : inputValue, postId);
      if (data?.message) {
        onClose();
        savedPostStatus();
      }
    } catch (err) {
      console.log(err?.response?.data?.message);
      setPostSaveError(true);
    }
  };

  return (
    <div className="save_post_popup">
      <div className="popup">
        <div className="popup-content">
          <div className='selection_input d-flex flex-column align-items-center gap-3'   >
            <h4>
              Select the playlist in which to save the post.
            </h4>
            <select className='collection_selecter' value={selectedOption} onChange={handleOptionChange}>
              <option value="">Select a collection</option>
              {collectionOptions?.data?.map((option, index) => (
                <option key={index} value={option.name}>
                  {option.name}
                  <hr />
                </option>
              ))}
              <option value="Other">{collectionOptions.length === 0 ? "Create New" : "Other"}</option>
            </select>
            {selectedOption === "Other" && (
              <input
                className='w-100'
                type="text"
                placeholder="Create new collection"
                onChange={handleInputChange}
              />
            )}
            <button onClick={handleSavePost} style={{ background: buttonColor, color: buttonText }} className="ok_button py-2 px-5" >
              Save
            </button>
            {postSaveError && <h6>Post is already in the collection</h6>}
          </div>
          <button className="close-button" onClick={onClose}>
            X
          </button>
        </div>
      </div>
    </div>
  );
}

export default SavePostPopUP;
