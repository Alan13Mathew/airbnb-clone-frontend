import { Navigate } from "react-router-dom";
import { useAuth } from "./Services/AuthContext";
import { Loader } from "./Components/loader/Loader";
import { useEffect } from "react";
import { useLoading } from "./Services/LoadingContext";

export default function ProtectedRoutes({ children }) {
  const { user, loading: authLoading } = useAuth();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [setLoading]);

  if (authLoading) {
    return <Loader type="travel" />;
  }

  if (!user) {
    return <Navigate to="/login" />;
  }

  return children;
}
