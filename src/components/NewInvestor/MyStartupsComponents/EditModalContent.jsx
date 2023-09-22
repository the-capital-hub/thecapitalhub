import MyInvestmentCard from "../../../pages/Investor/InvestorCards/MyInvestmentCard/MyInvestmentCard";
import { AiFillDelete } from "react-icons/ai";
import { CiEdit } from "react-icons/ci";
import { useState, useEffect } from "react";
import "./EditModalContent.scss";

export default function EditModalContent({ dataArray, isInterests }) {
  // Save companies data to state.
  const [companies, setCompanies] = useState(dataArray);

  // editMode to enable/disable editing.
  const [editMode, setEditMode] = useState(false);

  // Set editing company and pass it to MyInvestmentCard.
  const [editingCompany, setEditingCompany] = useState(dataArray[0]);

  useEffect(() => {
    // Make Post request to update Investment data.
  }, [companies]);

  function handleEditClick(selectedCompany) {
    setEditingCompany(selectedCompany);
    setEditMode(true);
  }

  function updateCompanies(newCompanyData) {
    // Set Editmode to false
    setEditMode(false);

    // updating list of companies with new information.
    setCompanies((prevCompanies) => {
      let companiesList = prevCompanies.map((comp, index) => {
        if (comp.id === newCompanyData.id) {
          return { ...newCompanyData };
        }
        return comp;
      });
      // console.log(companiesList);
      return companiesList;
    });
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
                  style={{ width: "50px", cursor: "pointer" }}
                  onClick={() => setEditingCompany(company)}
                />
                <h6
                  className="green_underline "
                  style={{ cursor: "pointer" }}
                  onClick={() => setEditingCompany(company)}
                >
                  {company.name}
                </h6>
                <div className="d-flex gap-2">
                  <button
                    className="green_button px-3"
                    onClick={() => handleEditClick(company)}
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

      <div className=" d-flex justify-content-center align-items-start gap-4 border rounded-3 p-3 pb-5">
        <MyInvestmentCard
          company={editingCompany}
          isInterests={isInterests}
          editMode={editMode}
          updateCompanies={updateCompanies}
          key={editingCompany.id}
        />
      </div>
    </div>
  );
}
