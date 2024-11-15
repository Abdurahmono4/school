import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-gray-700">
      <h1 className="text-4xl font-bold mb-4">404 - Page Not Found</h1>
      <p className="text-lg mb-6">
        Oops! The page you're looking for doesn't exist.
      </p>
      <Link to="/" className="btn btn-primary text-white px-4 py-2 rounded-md">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;
