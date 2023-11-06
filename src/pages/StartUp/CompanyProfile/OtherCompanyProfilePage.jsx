import React from "react";
import CompanyProfile from "../../../components/NewInvestor/CompanyProfileComponents/CompanyProfile";
import "./OtherCompanyProfilePage.scss";

export default function OtherCompanyProfilePage() {
  return (
    <div className="otherCompanyProfilePage_wrapper">
      <CompanyProfile startup="true" />
    </div>
  );
}
