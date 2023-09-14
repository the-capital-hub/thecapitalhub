import CardBody from "./CardBody";
import CardHead from "./CardHead";
import "./PersonCard.scss";
import { AddUser } from "../../../../../Images/Investor/CompanyProfile";

export default function PersonCard({ person, isFeedBack }) {
  let personHead = [];

  if (isFeedBack) {
    personHead = {
      image: person.image,
      name: person.name,
      rating: person.rating,
    };
  } else {
    personHead = {
      image: person.image,
      name: person.name,
      age: person.age,
    };
  }

  return (
    <div className="personCard__container d-flex flex-column gap-2 p-2 rounded-3">
      <CardHead {...personHead} />
      <CardBody>
        {isFeedBack ? (
          <p className="">{person.feedback}</p>
        ) : (
          <>
            <div className="founder">
              <p className="text-muted fw-light">Designation</p>
              <h6 className="fw-medium">{person.designation}</h6>
            </div>
            <button className="btn-capital-small connectNow d-flex align-items-center gap-1 ms-auto">
              <img src={AddUser} alt="user icon" />
              <p>Connect Now</p>
            </button>
          </>
        )}
      </CardBody>
    </div>
  );
}