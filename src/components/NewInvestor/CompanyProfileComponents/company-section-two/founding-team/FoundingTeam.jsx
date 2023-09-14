import {
  userFive,
  userOne,
  userSix,
} from "../../../../../Images/Investor/CompanyProfile";
import PersonCard from "../../shared-components/person-card/PersonCard";
import "../feedback/Feedback.scss";

export default function FoundingTeam() {
  let people = [];
  // Make fetch request and store data in people array.
  // ...
  // Mocking people data
  people = [
    {
      id: 1,
      image: userOne,
      name: "Abhishek Raj",
      age: 28,
      designation: "CEO & Founder",
    },
    {
      id: 2,
      image: userSix,
      name: "Rahul",
      age: 28,
      designation: "Manager",
    },
    {
      id: 3,
      image: userFive,
      name: "Leo",
      age: 28,
      designation: "Web-Designer",
    },
    {
      id: 4,
      image: userFive,
      name: "Leo",
      age: 28,
      designation: "Web-Designer",
    },
  ];

  return (
    <div className="founding__team d-flex flex-column gap-4">
      <h6 className="div__heading">Founding Team</h6>
      <div className="cards__container d-flex gap-5 pb-2">
        {people.map((person) => {
          return (
            <PersonCard key={person.id} person={person} isFeedBack={false} />
          );
        })}
      </div>
    </div>
  );
}