import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Navbar() {
  const [selectedLanguage, setSelectedLanguage] = useState("en");
  const [showModal, setShowModal] = useState(false);

  const languages = [
    { code: "en", name: "English", flag: "🇬🇧" },
    { code: "uz", name: "O‘zbek", flag: "🇺🇿" },
    { code: "ru", name: "Русский", flag: "🇷🇺" },
  ];

  const { t, i18n } = useTranslation();

  const selectLanguage = (lang) => {
    i18n.changeLanguage(lang);
    setSelectedLanguage(lang);
  };

  return (
    <div>
      {/* Fixed Navbar */}
      <div
        className="navbar fixed top-0 left-0 right-0 z-50 
        bg-gray-900 text-gray-200 bg-white text-gray-800"
      >
        {/* Left Side: Logo */}
        <div className="navbar-start flex items-center">
          <div className="dropdown">
            <button
              tabIndex={0}
              className="btn btn-ghost lg:hidden flex items-center"
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
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 p-4 rounded-lg 
                w-60 shadow-xl"
            >
              <li>
                <Link to="/" className="hover:text-blue-600">
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link to="/news" className="hover:text-blue-600">
                  {t("news")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-blue-600">
                  {t("about")}
                </Link>
              </li>
              <li>
                <Link to="/team" className="hover:text-blue-600">
                  {t("team")}
                </Link>
              </li>
              <li>
                <Link to="/courses" className="hover:text-blue-600">
                  {t("courses")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-blue-600">
                  {t("contact")}
                </Link>
              </li>
            </ul>
          </div>
          <Link to="/" className="text-2xl font-semibold">
            <span className="text-blue-500">Smart</span>School
          </Link>
        </div>

        {/* Center Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-6 text-lg">
            <li>
              <Link to="/" className="hover:text-blue-600 transition">
                {t("home")}
              </Link>
            </li>
            <li>
              <Link to="/news" className="hover:text-blue-600 transition">
                {t("news")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-blue-600 transition">
                {t("about")}
              </Link>
            </li>
            <li>
              <Link to="/team" className="hover:text-blue-600 transition">
                {t("team")}
              </Link>
            </li>
            <li>
              <Link to="/courses" className="hover:text-blue-600 transition">
                {t("courses")}
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-blue-600 transition">
                {t("contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div className="navbar-end flex items-center space-x-4">
          {/* Language Selector */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              className="flex items-center cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg space-x-2"
            >
              <span className="text-lg">
                {languages.find((lang) => lang.code === selectedLanguage)?.flag}
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-2 p-2 shadow-lg 
                  bg-gray-800 text-gray-200
              rounded-lg w-32 z-50"
            >
              {languages.map((lang) => (
                <li
                  key={lang.code}
                  className="flex items-center space-x-2 cursor-pointer hover:bg-gray-100 px-2 py-1"
                  onClick={() => selectLanguage(lang.code)}
                >
                  <span>{lang.flag}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="modal fixed inset-0 bg-black bg-opacity-50 z-50">
          <div className="modal-content bg-white rounded-lg p-8 mx-auto my-20 max-w-lg">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-xl text-gray-800"
            >
              ×
            </button>
            <h2 className="text-2xl font-semibold mb-4">Modal Title</h2>
            <p className="text-lg">This is the modal content.</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 p-2 bg-blue-500 text-white rounded-lg"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Navbar;
