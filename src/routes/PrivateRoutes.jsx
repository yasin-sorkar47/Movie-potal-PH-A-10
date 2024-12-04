import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context";
import LoaderPage from "../pages/LoaderPage";

export default function PrivateRoutes({ children }) {
  const { user, loader } = useContext(AuthContext);

  if (loader) {
    return <LoaderPage />;
  }

  if (user) {
    return children;
  }
  return <Navigate to={"/login"} />;
}
