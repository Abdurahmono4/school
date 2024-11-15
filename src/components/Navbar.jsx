import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar bg-base-100 border-b border-gray-200">
      {/* Left side: Logo and mobile dropdown */}
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow-lg"
          >
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/news">News</Link> {/* Added News link */}
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/team">Our Team</Link>
            </li>
            <li>
              <Link to="/courses">Courses</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl font-bold text-gray-800">
          SchoolName
        </Link>
      </div>

      {/* Center: Desktop Menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
          <li>
            <Link to="/" className="hover:text-blue-600 transition-colors">
              Home
            </Link>
          </li>
          <li>
            <Link to="/news" className="hover:text-blue-600 transition-colors">
              News
            </Link>{" "}
            {/* Added News link */}
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-600 transition-colors">
              About
            </Link>
          </li>
          <li>
            <Link to="/team" className="hover:text-blue-600 transition-colors">
              Our Team
            </Link>
          </li>
          <li>
            <Link
              to="/courses"
              className="hover:text-blue-600 transition-colors"
            >
              Courses
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="hover:text-blue-600 transition-colors"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>

      {/* Right side: Optional Additional Links or Icons */}
      <div className="navbar-end flex items-center space-x-4">
        {/* Example of adding an optional icon or link */}
        <a
          href="https://www.socialmedia.com"
          className="text-gray-600 hover:text-blue-600"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 3v12l5-5 5 5V3"
            />
          </svg>
        </a>
        {/* Optionally, add more links or icons for features like notifications or a "Contact Us" button */}
      </div>
    </div>
  );
}

export default Navbar;
