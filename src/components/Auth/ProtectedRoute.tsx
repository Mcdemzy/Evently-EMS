import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Check if the user is authenticated

  if (!token) {
    // Redirect to login if no token is found
    return <Navigate to="/login" replace />;
  }

  // Render the protected route if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
