import { useNavigate } from "react-router-dom";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-rose-600">404</h1>
        <h2 className="text-4xl font-semibold mt-4">Page Not Found</h2>
        <p className="text-gray-600 mt-4 mb-8">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="space-x-4">
          <button
            onClick={() => navigate("/")}
            className="bg-rose-600 text-white px-6 py-2 rounded-lg hover:bg-rose-700 transition"
          >
            Go Home
          </button>
          <button
            onClick={() => navigate(-1)}
            className="border border-gray-300 px-6 py-2 rounded-lg hover:bg-gray-50 transition"
          >
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
