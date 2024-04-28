import useUser from "../features/authentication/useUser";
import Spinner from "./Spinner";
import "../styles/index.css";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
export default function ProtectedRoute({ children }) {
  //1.load authenticated user
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  //2.if not authenticated the redirect to login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading) {
        navigate("/login");
      }
    },
    [isAuthenticated, isLoading, navigate]
  );

  // 3.While Loading ,show spinner
  if (isLoading) {
    return (
      <div className="fullpage">
        <Spinner />
      </div>
    );
  }

  //4.if authenticated render the app
  if (isAuthenticated) return <div>{children}</div>;
}
