import { Route, Routes } from "react-router-dom";
import ProtectedLayout from "../components/Admin/Layouts/ProtectedLayout/ProtectedLayout";
import Login from "../pages/Admin/Login/Login";

const AdminRoutes = () => {
  return (
    <Routes>
      <Route path="" element={<Login />} exact />
      <Route path="" element={<ProtectedLayout />}>
        <Route path="dashboard" element={<p>Dashboard Page</p>} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
