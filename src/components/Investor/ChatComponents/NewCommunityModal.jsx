import "./NewCommunityModal.scss";
import { BsSearch } from "react-icons/bs";
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

  return (
    <div className="newCommunity__modal d-flex flex-column gap-3 p-3 border rounded-3">
      {/* Name input */}
      <div className="border-bottom py-3">
        <label htmlFor="communityName">Name:</label>
        <input
          type="text"
          name="communityName"
          id="communityName"
          placeholder="community name..."
          className="modal__input p-2 rounded-2 ms-2"
        />
      </div>

      {/* Contact search */}
      <div className="search__members">
        <div className="d-flex align-items-center gap-2 p-2 border rounded-2">
          <BsSearch />
          <input
            type="search"
            name="myContacts"
            id="myContacts"
            placeholder="search your contacts..."
            className="modal__input border-0 p-1 w-100"
          />
        </div>
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
              <button className="btn btn-success">Add</button>
            </div>
          );
        })}
      </div>

      {/* Done */}
      <button className="orange_button w-25 mx-auto">Done</button>
    </div>
  );
}
