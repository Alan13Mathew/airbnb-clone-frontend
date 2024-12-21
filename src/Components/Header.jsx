import { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import SearchBar from "./SearchBar";
import { useAuth } from "../Services/AuthContext";
import { Loader } from "./loader/Loader";
import { useLoading } from "../Services/LoadingContext";
import { set } from "date-fns";

export default function Header() {
  const { user, logout, loading } = useAuth();
  const { setIsLoading } = useLoading();
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const guestMenuItems = [
    {
      label: "Sign up",
      path: "/signup",
      highlight: true,
    },
    {
      label: "Login",
      path: "/login",
    },
  ];
  const userMenuItems = [
    {
      label: "My Profile",
      path: "/profile",
    },
    {
      label: "My Trips",
      path: "/trips",
    },
    {
      label: "Wishlists",
      path: "/wishlists",
    },
    {
      label: "Host your home",
      path: "/host",
    },
    {
      label: "Help",
      path: "/help",
    },
  ];

  const handleLogout = async () => {
    setIsLoading(true);
    setIsMenuOpen(false);
    await logout();
    setTimeout(() => setIsLoading(false), 800);
  };

  return (
    <>
      <header className="fixed w-full bg-white z-50 shadow-md py-4 px-6">
        <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2">
          <div className="flex items-center justify-between gap-3 md:gap-0">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img
                src="/travel (1).png"
                alt="TwA"
                className="block w-auto h-10"
              />
              <span className="flex-shrink-0 text-gray-500 font-semibold">
                Travel World
              </span>
            </Link>

            {/* Search bar only on home page */}
            {isHomePage && <SearchBar />}

            {/* User Menu */}
            <div className="relative">
              <div
                className="flex items-center gap-2 border rounded-full py-2 px-4 hover:shadow-md transition cursor-pointer"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
                <div className="bg-gray-500 text-white rounded-full p-1">
                  {user ? (
                    <span className="font-medium text-sm px-1">
                      {user.firstName.charAt(0)}
                    </span>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        fillRule="evenodd"
                        d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </div>
              </div>

              {/* DropDown Menu */}

              {isMenuOpen && (
                <div className="absolute right-0 mt-2 w-56 rounded-xl shadow-lg bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100">
                  {user && (
                    <div className="px-4 py-3">
                      <p className="text-sm">Signed in as</p>
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {user.firstName} {user.lastName}
                      </p>
                    </div>
                  )}

                  <div className="py-1 rounded-xl">
                    {user
                      ? userMenuItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))
                      : guestMenuItems.map((item, index) => (
                          <Link
                            key={index}
                            to={item.path}
                            className={`block px-4 py-2 text-sm ${
                              item.highlight
                                ? "text-rose-500 font-semibold"
                                : "text-gray-700"
                            } hover:bg-gray-50`}
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {item.label}
                          </Link>
                        ))}
                  </div>

                  {user && (
                    <div className="py-1">
                      <button
                        onClick={handleLogout}
                        className="block w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-50"
                      >
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
