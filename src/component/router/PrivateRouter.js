import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../authProvider/AuthProvider";

const PrivateRouter = ({ children }) => {
  const { user } = useContext(AuthContext);
  let location = useLocation();

  if (!user?.uid) {
    return <Navigate to="/user/login" state={{ from: location }} replace />;
  }

  return children;
};

export default PrivateRouter;
