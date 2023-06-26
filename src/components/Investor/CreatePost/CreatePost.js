import React from "react";
import "./createPost.css";
import profilePic from "../../../Images/investorIcon/profilePic.svg";
import SmallProfileCard from "../Cards/TwoSmallMyProfile/SmallProfileCard";
import { Link } from "react-router-dom";

const CreatePost = () => {
  return (
    <div className="container-fluid createpost_container">
      <div className="row mt-2">
        <SmallProfileCard text={"Create Post"} width={"60%"}/>
      </div>
      <div className="row">
        <div className="col-12 colSize">
          <div className="row">
            <div className="ceatepost_img_name">
              <img src={profilePic} alt="profile pic" />
              <span className="">
                <h2>Pramod Badiger</h2>
                <h6>Post to anyone</h6>
              </span>
            </div>
            <hr />
          </div>
          <div className="row createpost_text_area">
            <div className="createpost_header ">
              <h4>Title</h4>
            </div>
            <div className="createpost_textarea ">
              <textarea className="custom-textarea" />
            </div>
            <div className="createpost_footer ">
              <div className="createpost_footer_links">
                <Link to={"/addpicture"}>
                  <b style={{ color: "red" }}>+</b> Add Picture
                </Link>
                <Link to={"/addpicture"}>
                  <b style={{ color: "red" }}>+</b> Add Video
                </Link>
                <Link to={"/addpicture"}>
                  <b style={{ color: "red" }}>+</b> Add Source
                </Link>
              </div>
            </div>
          </div>

          <div className="row createpost_buttons_input">
            <div className="createpost_input mt-4">
              <label for="category">Category</label>
              <input type="text" id="category" placeholder="Select a category for your post"/>
            </div>
            <div className="createpost_input mt-4">
              <label for="category">Tags</label>
              <input type="text" id="category" placeholder="Separated by comma (no more than 5 )"/>
            </div>
            <div className="createpost_buttons mt-4">
               <button type="submit">Post</button> 
               <button>Cancel</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
