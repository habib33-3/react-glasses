/* eslint-disable react/prop-types */

import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <h1 className="text-7xl">loading</h1>;
  }

  if (!user?.email) {
    return <Navigate to="/login" />;
  }

  return children;
};

export default PrivateRoute;
