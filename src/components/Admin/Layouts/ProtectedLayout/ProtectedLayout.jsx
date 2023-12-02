import { useSelector } from "react-redux";
import "./ProtectedLayout.scss";
import { selectAuthAdmin } from "../../../../Store/features/admin/selectors";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import SpinnerBS from "../../../Shared/Spinner/SpinnerBS";

const ProtectedLayout = () => {
  // States
  const authAdmin = useSelector(selectAuthAdmin);
  const [isAuthenticating, setIsAuthenticating] = useState(true);

  // Hooks
  const location = useLocation();
  const navigate = useNavigate();

  // Side Effects
  useEffect(() => {
    if (!authAdmin) {
      navigate("/admin", {
        replace: true,
      });
    } else {
      setIsAuthenticating(false);
    }
  }, [authAdmin, location.pathname, navigate]);

  // JSX
  // Handling loading while authenticating
  if (isAuthenticating) {
    return <SpinnerBS spinnerSizeClass="lg" className="m-5 p-5" />;
  }
  // Outlet
  return (
    <div className="admin-protected-layout">
      {/* Navigation Bar */}
      <Outlet />
      {/* Footer */}
    </div>
  );
};

export default ProtectedLayout;
