import React, { useState } from "react";
import "./ManageEmailAddresses.scss";
import { Button, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { useSelector } from "react-redux";

function ManageEmailAddresses() {
  const navigate = useNavigate();
  const loggedInUser = useSelector((state) => state.user.loggedInUser);
 

  return (
    <div className="manage_account_settings">
      <h4 className="m-0 px-3 py-3 d-flex align-items-center gap-2">
        <Button
          className="back-button btn-sm  rounded-circle border-none"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft size={15} />
        </Button>
        Email Addresses
      </h4>
      <div className=" border-top px-3 py-3 d-flex flex-column gap-2">
        <span className="fs-6 text-secondary">Emails you've added</span>
        <span className="fs-6  fw-bold">Primary email</span>
        <span className="fs-6 ">{loggedInUser?.email}</span>
        <div>
          <Button className="add_email_btn" >
            Add email address
          </Button>
        </div>
        <span className="fs-6 text-secondary">
          If you have a verification (e.g. verified work email), you can manage
          it in your
        </span>
      </div>
  
    </div>
  );
}

export default ManageEmailAddresses;
