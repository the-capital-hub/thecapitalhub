import MyInvestmentCard from "../../../pages/Investor/InvestorCards/MyInvestmentCard/MyInvestmentCard";
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import "./EditModalContent.scss";

export default function EditModalContent({ dataArray, isInterests }) {
  const [companies, setCompanies] = useState(dataArray);
  const [editMode, SetEditMode] = useState(false);
  const [editingCompany, setEditingCompany] = useState(companies[0]);

  function handleEditClick(id) {
    // console.log(companies.filter((company) => company.id === id)[0]);
    setEditingCompany(companies.filter((company) => company.id === id)[0]);
  }

  return (
    <div className="edit__modal__body">
      <div className="current_list d-flex flex-column gap-4 border rounded-3 p-3 ">
        <h5 className="m-0 green_underline">My Investments</h5>
        <div className="d-flex flex-column gap-3">
          {companies.map((company, index) => {
            return (
              <div
                className="border rounded-3 p-2 d-flex justify-content-between align-items-center"
                key={company.id}
              >
                <img
                  src={company.logo}
                  alt={company.name}
                  style={{ width: "50px" }}
                />
                <h6 className="green_underline ">{company.name}</h6>
                <div className="d-flex gap-2">
                  <button
                    className="green_button px-3"
                    onClick={() => handleEditClick(company.id)}
                  >
                    <CiEdit style={{ color: "", backgroundColor: "" }} />
                  </button>
                  <button className="btn btn-danger">
                    <AiFillDelete style={{ color: "", backgroundColor: "" }} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className=" d-flex justify-content-center align-items-start gap-4 border rounded-3 p-3 ">
        <MyInvestmentCard
          company={editingCompany}
          isInterests={isInterests}
          editMode={editMode}
          setCompanies={setCompanies}
        />
      </div>
    </div>
  );
}
