import React from 'react';
import './style.scss';
import { selectTheme } from "../../../../Store/features/design/designSlice";
import { useSelector } from "react-redux";

const CompaniesInvested = ({ companies }) => {
  const theme = useSelector(selectTheme);
  return (
    <div className="companies-invest" style={{border:"none"}}>
      <h5 style={{color:theme === "dark"?"#f5f5f5":"#292B33"}}>Companies Invested</h5>
      <div className="companies">
        {companies?.map((company, index) => (
          <div key={index} className="company" style={{background:theme === "dark"?"#292B33":"#f5f5f5"}}>
           <img src={company.logo} alt={company.name} />
            <span style={{color:theme === "dark"?"#f5f5f5":"#292B33"}}>{company.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompaniesInvested;
