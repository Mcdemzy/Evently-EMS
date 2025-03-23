import { Navigate, Outlet, useLocation } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("token"); // Check if the user is authenticated
  const location = useLocation(); // Get the current location

  if (!token) {
    // Redirect to login and pass the current location as the intended route
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // Render the protected route if authenticated
  return <Outlet />;
};

export default ProtectedRoute;
