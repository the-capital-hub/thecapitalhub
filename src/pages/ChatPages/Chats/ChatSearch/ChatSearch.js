import React, { useState } from "react";
import "./ChatSearch.scss";
import backIcon from "../../../../Images/Chat/BackIcon.svg";
import { Link } from "react-router-dom";
import { getUserChats } from "../../../../Service/user";
import { useSelector } from "react-redux";



const ChatSearch = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);


  const handleSearch = (query) => {
      getUserChats(loggedInUser._id)
        .then((res) => {
          console.log(res.data);
          setSearchQuery(query);
    // const filtered = data.filter(item =>
    //   item.name.toLowerCase().includes(query.toLowerCase())
    // );
    // setFilteredData(filtered);
        })
        .catch((error) => {
          console.error("Error-->", error);
        });
    
  };

  const handleInputChange = (event) => {
    const query = event.target.value;
    handleSearch(query);
  };
  return (
    <>
      <div className="chat_search_container">
        <span>
        <Link
        to={`/profile`}>
        <img src={backIcon} className="back_img" />
        </Link>
        </span>
        <h1 className="chat_title">Chats</h1>
        <div className="inputs">
          <input type="search" className="search_chat"  placeholder="Search..." value={searchQuery}  onChange={handleInputChange} />
          <div className="recommendations">
        {filteredData.length > 0 && (
          <ul>
            {filteredData.map((item, index) => (
              <li key={index}>{item.name}</li>
            ))}
          </ul>
        )}
        {filteredData.length === 0 && searchQuery && (
          <p>No results found.</p>
        )}
      </div>
        </div>
      </div>
    </>
  );
};

export default ChatSearch;
