import { Button } from "react-bootstrap";
import "./Dashboard.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../../Store/features/admin/slice";
import { Link } from "react-router-dom";

const Dashboard = () => {
  // Hooks
  const dispatch = useDispatch();

  // Handlers
  const handleLogout = () => dispatch(logout());

  return (
    <div className="admin-dashboard-page">
      <h1>Admin Dashboard</h1>
      <Link to={"/admin/settings"} className="d-block my-3">Settings</Link>
      <Link to={"/admin/dashboard"} className="d-block my-3">Dashboard</Link>
      <Button variant="info" onClick={handleLogout}>
        Log out
      </Button>
    </div>
  );
};

export default Dashboard;
