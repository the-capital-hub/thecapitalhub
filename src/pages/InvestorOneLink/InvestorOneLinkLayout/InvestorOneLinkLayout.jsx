import React, { useEffect, useState } from "react";
import { NavBar } from "../../../components/InvestorView";
import { Outlet, useLocation, useNavigate, useParams } from "react-router-dom";
import MaxWidthWrapper from "../../../components/Shared/MaxWidthWrapper/MaxWidthWrapper";
import "./InvestorOneLinkLayout.scss";
import InvestorOneLinkSidebar from "../../../components/InvestorOneLink/InvestorOneLinkSidebar/InvestorOneLinkSidebar";
import { getInvestorFromOneLinkAPI } from "../../../Service/user";
import { useDispatch } from "react-redux";
import SpinnerBS from "../../../components/Shared/Spinner/SpinnerBS";

export default function InvestorOneLinkLayout() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [investorData, setInvestorData] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const handleSidebarToggle = () => {
    setSidebarCollapsed((prev) => !prev);
  };

  const location = useLocation();
  const { oneLink, userId } = useParams();

  useEffect(() => {
    getInvestorFromOneLinkAPI(oneLink, userId)
      .then(({ data }) => {
        setInvestorData(data);
        setLoading(false);
      })
      .catch((error) => navigate("/"));
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <div className="investor_onelink_layout_wrapper">
      {/* Top Navbar */}
      <NavBar handleSidebarToggle={handleSidebarToggle} />

      {loading === false ? (
        <div
          className={`container-fluid investor_view_container ${
            sidebarCollapsed ? "sidebar-collapsed" : ""
          }`}
        >
          <div className="sidebar">
            <InvestorOneLinkSidebar
              sidebarCollapsed={sidebarCollapsed}
              setSidebarCollapsed={handleSidebarToggle}
            />
          </div>

          <div className="content">
            <MaxWidthWrapper>
              <Outlet context={investorData} />
            </MaxWidthWrapper>
          </div>
        </div>
      ) : (
        <SpinnerBS
          className="container d-flex justify-content-center align-items-center p-5 m-5"
          colorClass="text-secondary"
        />
      )}
    </div>
  );
}
