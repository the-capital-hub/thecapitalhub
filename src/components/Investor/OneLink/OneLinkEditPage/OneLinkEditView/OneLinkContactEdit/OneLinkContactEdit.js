import React from "react";
import "./OneLinkContactEdit.scss";
import { getUserById } from "../../../../../../Service/user";
import { useState, useEffect } from "react";
import { updateUserById } from "../../../../../../Service/user";

const OneLinkContactEdit = ({ oneLink, page }) => {
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserById(oneLink)
      .then(({ data }) => {
        setUser(data);
      })
      .catch(() => setUser([]));
  }, [oneLink]);

  const handleUpdate = (field, event) => {
    const updatedValue = event.target.value;
    if(!updatedValue) return;
    console.log(field, updatedValue)
    console.log(user._id);
    const requestBody = {
      [field]: updatedValue,
    }
    console.log(requestBody);
    updateUserById(user._id, requestBody)
      .then(({ data }) => {
        console.log(data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div className="row fund_asking_container">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Contact Details</h5>
              <div className="card_inputs">

                {page === "oneViewEdit" ? (
                  <>
                    <input type="text" 
                    placeholder={user?.firstName}
                    onBlur={(e) => handleUpdate("firstName", e)} 
                    />
                    <input type="text" 
                    placeholder={user?.phoneNumber} 
                    onBlur={(e) => handleUpdate("phoneNumber", e)} 
                    />
                    <input type="text" 
                    placeholder={user?.email} 
                    onBlur={(e) => handleUpdate("email", e)} 
                    />
                  </>
                ) : (
                  <>
                    <p>{user?.firstName}</p>
                    <p>{user?.phoneNumber}</p>
                    <p>{user?.email}</p>
                  </>
                )}

              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneLinkContactEdit;
