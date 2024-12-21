import { Navigate } from "react-router-dom";
import { useAuth } from "./Services/AuthContext";
import { Loader } from "./Components/loader/Loader";
import { useEffect } from "react";
import { useLoading } from "./Services/LoadingContext";

export default function ProtectedRoutes({ children }) {
  const { user, loading: authLoading } = useAuth();
  const { setIsLoading } = useLoading();

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [setIsLoading]);

  if (authLoading) {
    return <Loader type="travel" />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
