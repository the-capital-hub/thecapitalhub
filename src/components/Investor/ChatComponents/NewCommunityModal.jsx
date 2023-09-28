import "./NewCommunityModal.scss";
import { BsSearch, BsFillCameraFill } from "react-icons/bs";
import {
  userFive,
  userOne,
  userTwo,
  userFour,
  userThree,
} from "../../../Images/Investor/CompanyProfile";
import { getUserConnections, createCommunity } from "../../../Service/user";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getBase64 } from "../../../utils/getBase64";
export default function NewCommunityModal() {
  const [getAllConnection, setGetAllConnection] = useState([]);
  const [memberIds, setMemberIds] = useState([]);
  const [name, setName] = useState();
  const [selectedFile, setSelectedFile] = useState(null);

  const loggedInUser = useSelector((state) => state.user.loggedInUser);
  useEffect(() => {
    getUserConnections(loggedInUser._id).then((res) => {
      setGetAllConnection(res.data);
    });
  }, []);

  const handleButtonClick = (event, memberId) => {
    event.preventDefault();

    setMemberIds([...memberIds, memberId, loggedInUser._id]);
  };
  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
  };

  function handleSubmit(event) {
    alert("test")
    event.preventDefault();

    getBase64(selectedFile)
      .then((profileImg) => {
    const data = {
      profileImage: profileImg,
      communityName: name,
      adminId: loggedInUser?._id,
      members: memberIds,
    };

    createCommunity(data)
      .then((res) => {
        console.log(res)
        setGetAllConnection(res.data);
      })
      .catch((error) => {
        console.error("Error creating community:", error);
      });
    })
    .catch((error) => {
      console.error("Error getting base64 image:", error);
    });
  }

  return (
    <form className="newCommunity__modal d-flex flex-column gap-3 p-3 ">
      {/* Profile picture input */}
      <div className="mx-auto">
        <input
          type="file"
          name="profilePicture"
          id="profilePicture"
          accept="image/*"
          className="visually-hidden"
          onChange={handleFileChange}
        />
        <label htmlFor="profilePicture" className="upload__label">
          <BsFillCameraFill
            style={{
              fontSize: "1.5rem",
              color: "rgba(253, 89, 1,1)",
            }}
          />
        </label>
      </div>

      {/* Name input */}
      <div className=" py-3">
        <input
          type="text"
          name="communityName"
          id="communityName"
          placeholder="Enter Name"
          value={name}
          className="modal__input p-2 rounded-2 w-100"
          onChange={handleNameChange}
        />
      </div>

      {/* Contact search */}
      <div
        className="search__members d-flex align-items-center gap-2 p-2 rounded-2"
        style={{ backgroundColor: "#fafafa" }}
      >
        <BsSearch />
        <input
          type="search"
          name="myContacts"
          id="myContacts"
          placeholder="search your contacts..."
          className="modal__input border-0 p-1 w-100"
        />
      </div>

      {/* Top contacts */}
      <div className="top__contacts p-2 d-flex flex-column gap-2 ">
        {getAllConnection?.map((contact, index) => {
          return (
            <div
              className="p-2 d-flex justify-content-between align-items-center rounded-2 bg-light"
              key={contact?._id}
            >
              <img
                src={contact?.profilePicture}
                alt="contact"
                className="img-fluid "
              />
              <h6 className="m-0">
                {" "}
                {`${contact?.firstName ? contact?.firstName : "name"} ${
                  contact?.lastName ? contact?.lastName : ""
                }`}
              </h6>
              {/* <button
                className="orange_button"
                onClick={() => handleButtonClick(contact?._id)}
              > */}
              <button  className="orange_button" onClick={event => handleButtonClick(event, contact?._id)}>
                Add
              </button>
            </div>
          );
        })}
      </div>

      {/* Cancel/Done */}
      <div className="d-flex justify-content-center align-items-center gap-2">
        <button className="cancel_button " data-bs-dismiss="modal">
          Cancel
        </button>
        <button
          type="submit"
          className="orange_button "
          data-bs-dismiss="modal"
          onClick={event => handleSubmit(event)}
        >
          Done
        </button>
      </div>
    </form>
  );
}
