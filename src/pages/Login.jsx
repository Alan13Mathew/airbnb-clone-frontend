import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../Services/AuthContext";
import { Loader } from "../Components/loader/Loader";
import { useLoading } from "../Services/LoadingContext";

export default function Login() {
  const navigate = useNavigate();
  const { login } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const { isloading, setIsLoading } = useLoading();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    // Add validation
    const validationErrors = {};
    if (!formData.email) validationErrors.email = "Email is required";
    if (!formData.password) validationErrors.password = "Password is required";

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      await login(formData);
      console.log("Logged in successfully");
      navigate("/");
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      setErrors({ ...errors, login: errorMessage });
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      {isloading ? (
        <Loader type="travel" />
      ) : (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-md w-full space-y-8">
            <div>
              <img
                className="mx-auto h-48 w-52"
                src="/travel (1).png"
                alt="TwA"
              />
              <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                Sign in to your account
              </h2>
            </div>
            <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="email" className="sr-only">
                    Email address
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`appearance-none mb-2 rounded-none relative block w-full px-3 py-2 border ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    } placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm`}
                    placeholder="Email address"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs mb-3 mt-0.5">
                      {errors.email}
                    </p>
                  )}
                </div>
                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    className={`appearance-none mb-2 rounded-none relative block w-full px-3 py-2 border ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    } placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-rose-500 focus:border-rose-500 focus:z-10 sm:text-sm`}
                    placeholder="Password"
                  />
                  {errors.password && (
                    <p className="text-red-500 text-xs mb-3 mt-0.5">
                      {errors.password}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-rose-600 focus:ring-rose-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Remember me
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    href="#"
                    className="font-medium text-rose-600 hover:text-rose-500"
                  >
                    Forgot your password?
                  </a>
                </div>
              </div>
              {errors.login && (
                <div className="mb-4 text-center">
                  <p className="text-red-500 text-sm">{errors.login}</p>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-rose-600 hover:bg-rose-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rose-500"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-2 text-center text-sm text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-medium text-rose-600 hover:text-rose-500"
              >
                Sign up
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
