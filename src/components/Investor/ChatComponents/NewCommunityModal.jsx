import "./NewCommunityModal.scss";
import { BsSearch, BsFillCameraFill } from "react-icons/bs";
import {
  userFive,
  userOne,
  userTwo,
  userFour,
  userThree,
} from "../../../Images/Investor/CompanyProfile";

export default function NewCommunityModal() {
  // fetch top contacts
  // Mock for top contacts
  const topContacts = [
    {
      id: 1,
      name: "Rachel",
      image: userFive,
    },
    {
      id: 2,
      name: "Joey",
      image: userOne,
    },
    {
      id: 3,
      name: "Chandler",
      image: userTwo,
    },
    {
      id: 4,
      name: "Monica",
      image: userFive,
    },
    {
      id: 5,
      name: "Ross",
      image: userFour,
    },
  ];

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="newCommunity__modal d-flex flex-column gap-3 p-3 "
    >
      {/* Profile picture input */}
      <div className="mx-auto">
        <input
          type="file"
          name="profilePicture"
          id="profilePicture"
          accept="image/*"
          className="visually-hidden"
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
          className="modal__input p-2 rounded-2 w-100"
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
        {topContacts.map((contact, index) => {
          return (
            <div
              className="p-2 d-flex justify-content-between align-items-center rounded-2 bg-light"
              key={contact.id}
            >
              <img src={contact.image} alt="contact" />
              <h6 className="m-0">{contact.name}</h6>
              <button className="orange_button">Add</button>
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
        >
          Done
        </button>
      </div>
    </form>
  );
}
