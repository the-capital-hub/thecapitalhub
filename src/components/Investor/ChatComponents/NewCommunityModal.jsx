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
import { useDispatch, useSelector } from "react-redux";
import { getBase64 } from "../../../utils/getBase64";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";
import { resetChat } from "../../../Store/features/chat/chatSlice";

export default function NewCommunityModal({ theme }) {
  const [getAllConnection, setGetAllConnection] = useState([]);
  const [memberIds, setMemberIds] = useState([]);
  const [name, setName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredConnections, setFilteredConnections] = useState([]);
  const [previewImageUrl, setPreviewImageUrl] = useState("");
  const [addedMembers, setAddedMembers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const loggedInUser = useSelector((state) => state.user.loggedInUser);

  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    getUserConnections(loggedInUser._id)
      .then((res) => {
        setGetAllConnection(res.data);
        setFilteredConnections(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [loggedInUser._id]);

  useEffect(() => {
    const filtered = getAllConnection?.filter((connection) => {
      const fullName = `${connection.firstName} ${connection.lastName}`;
      return fullName.toLowerCase().includes(searchQuery.toLowerCase());
    });
    setFilteredConnections(filtered);
  }, [searchQuery, getAllConnection]);

  //set members
  const handleButtonClick = (event, memberId) => {
    event.preventDefault();
    if (memberIds.includes(memberId)) {
      const updatedMemberIds = memberIds.filter((id) => id !== memberId);
      setMemberIds(updatedMemberIds);
      const updatedAddedMembers = addedMembers.filter(
        (member) => member._id !== memberId
      );
      setAddedMembers(updatedAddedMembers);
    } else {
      setMemberIds([...memberIds, memberId, loggedInUser._id]);
      const addedMember = getAllConnection.find(
        (member) => member._id === memberId
      );
      setAddedMembers([...addedMembers, addedMember]);
    }
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    const imageUrl = URL.createObjectURL(file);
    setPreviewImageUrl(imageUrl);
  };

  async function handleSubmit(event) {
    event.preventDefault();
    setLoading(true);
    try {
      const data = {
        communityName: name,
        adminId: loggedInUser?._id,
        members: memberIds,
      };
      if (selectedFile) {
        data.profileImage = await getBase64(selectedFile);
      }
      const response = await createCommunity(data);
      if (response.status === 200) {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 2000);
        setMemberIds([]);
        setAddedMembers([]);
        setName("");
        setSelectedFile(null);
        dispatch(resetChat());
      }
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="newCommunity__modal d-flex flex-column gap-3 p-md-3 ">
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
        <label htmlFor="profilePicture" className={`upload__label ${theme} `}>
          {previewImageUrl ? (
            <img
              src={previewImageUrl}
              alt="Preview"
              style={{
                maxWidth: "100%",
                maxHeight: "150px",
              }}
            />
          ) : (
            <BsFillCameraFill
              style={{
                fontSize: "1.5rem",
                color: `${theme ? "#000" : "rgba(253, 89, 1,1)"}`,
              }}
            />
          )}
        </label>
      </div>

      {/* Name input */}
      <div className="py-3">
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

      {/* Display added members */}
      <div className="added-members">
        {addedMembers.length > 0 && (
          <div className="added-members-list">
            <strong>Added Members:</strong>
            <ul>
              {addedMembers.map((member) => (
                <li key={member._id}>
                  {member.firstName} {member.lastName}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Contact search */}
      <div
        className={`search__members d-flex align-items-center gap-2 p-2 rounded-2 ${theme}`}
        style={{ backgroundColor: "#fafafa" }}
      >
        <BsSearch />
        <input
          type="search"
          name="searchContacts"
          id="searchContacts"
          placeholder="Search your network..."
          className={`modal__input border-0 p-1 w-100 ${theme}`}
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Top contacts */}
      <div className="top__contacts p-md-2 d-flex flex-column gap-2 ">
        {loading ? (
          <SpinnerBS colorClass={"text-dark"} />
        ) : (
          <div className="contacts-container">
            {filteredConnections?.map((contact, index) => {
              const isAdded = addedMembers.some(
                (member) => member._id === contact._id
              );
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
                  <button
                    className={`orange_button ${
                      isAdded ? "added-button" : ""
                    } ${theme} `}
                    onClick={(event) => handleButtonClick(event, contact._id)}
                  >
                    {isAdded ? "Added" : "Add"}
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
      {/* Community Created Success message */}
      {success && (
        <p className="success-message d-flex justify-content-center align-items-center">
          Community created successfully!
        </p>
      )}

      {/* Cancel/Done */}
      <div className="d-flex justify-content-center align-items-center gap-2">
        <button
          className="cancel_button"
          onClick={(event) => {
            event.preventDefault();
          }}
          data-bs-dismiss="modal"
        >
          Cancel
        </button>

        <button
          type="submit"
          className={`orange_button ${theme}`}
          onClick={(event) => handleSubmit(event)}
          // data-bs-dismiss="modal"
        >
          {loading ? (
            <SpinnerBS
              colorClass={
                loggedInUser.isInvestor === "true" ? "text-dark" : "text-light"
              }
              spinnerSizeClass="spinner-border-sm"
            />
          ) : (
            "Done"
          )}
        </button>
      </div>
    </form>
  );
}
