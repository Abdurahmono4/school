import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-6 mb-4">
          {/* Social Media Icons */}
          <a
            href="https://www.facebook.com"
            className="text-white hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 9V7a3 3 0 013-3h1V1h-2a5 5 0 00-5 5v2H4v4h4v12h5V13h3l1-4h-4V7a1 1 0 011-1h2v-4h-3a3 3 0 00-3 3v2h-4z"
              />
            </svg>
          </a>
          <a
            href="https://www.twitter.com"
            className="text-white hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M23 3a10.92 10.92 0 01-3.137.86A4.524 4.524 0 0022.4 1a9.14 9.14 0 01-2.868 1.103A4.492 4.492 0 0016.7.16a4.452 4.452 0 00-4.429 5.485A12.72 12.72 0 011.67 2.895a4.5 4.5 0 001.39 6.003A4.488 4.488 0 01.4 8.04v.057a4.482 4.482 0 003.61 4.45A4.5 4.5 0 012.67 13a4.467 4.467 0 004.167 3.057A9.013 9.013 0 010 19.488a12.701 12.701 0 006.74 1.969c8.1 0 12.56-6.712 12.56-12.548 0-.191-.005-.379-.014-.567A8.79 8.79 0 0023 3z"
              />
            </svg>
          </a>
        </div>

        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} SchoolName. All rights reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
