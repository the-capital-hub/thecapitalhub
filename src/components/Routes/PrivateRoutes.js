import { useEffect, useState } from "react";
import { useNavigate, Navigate, Outlet, useLocation } from "react-router-dom";
import Register from "../Register/Register";

function PrivateRoutes({ children, ...rest }) {


  return (
    <>
      <Register/>
    </>
  );
}
export default PrivateRoutes;
