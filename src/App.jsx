import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./Components/Header";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./Components/Profile";
import "./App.css";
import Footer from "./Components/Footer";
import { AuthProvider } from "./Services/AuthContext";
import { LoadingProvider, useLoading } from "./Services/LoadingContext";
import { setLoadingStateHandler } from "./Services/api";
import ProtectedRoutes from "./ProtectedRoutes";
import { useEffect } from "react";

function App() {
  return (
    <>
      <BrowserRouter>
        <AuthProvider>
          <LoadingProvider>
            <AppContet />
          </LoadingProvider>
        </AuthProvider>
      </BrowserRouter>
    </>
  );
}

function AppContet() {
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoadingStateHandler(setLoading);
  }, [setLoading]);

  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoutes>
              <Profile />
            </ProtectedRoutes>
          }
        />
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
