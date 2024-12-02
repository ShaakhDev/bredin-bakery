import { Navigate, Outlet, useLocation } from "react-router-dom";

export const MainRouter = () => {
  const token = localStorage.getItem("token");

  return token ? <Outlet /> : <Navigate to="/login" />;
};
