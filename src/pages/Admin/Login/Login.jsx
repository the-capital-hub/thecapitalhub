import { useSelector } from "react-redux";
import "./Login.scss";
import { selectAuthAdmin } from "../../../Store/features/admin/selectors";
import { Navigate } from "react-router-dom";

const Login = () => {
  // Auth check
  const authAdmin = useSelector(selectAuthAdmin);
  if (authAdmin) {
    return <Navigate to={"/admin/dashboard"} replace />;
  }

  // States
  return <div className="admin-login-page">Admin Login Page</div>;
};

export default Login;
