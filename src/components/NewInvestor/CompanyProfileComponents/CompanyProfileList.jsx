import React, { useState, useEffect } from "react";
import CompanyProfile from "./CompanyProfile";

export default function CompanyProfileList({ isStartup }) {
  const [loading, setLoading] = useState(false); //Change default to true when integrating
  const [startupsList, setStartupsList] = useState([]); //State for startups list

  // Fetch company data list here according to filters
  useEffect(() => {}, []);

  return (
    <div className="d-flex flex-column gap-3">
      {/* Loop company Profile here */}
      <CompanyProfile startup={`${isStartup ? "true" : "false"}`} />
      <CompanyProfile startup={`${isStartup ? "true" : "false"}`} />
    </div>
  );
}
