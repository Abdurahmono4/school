import React, { useState } from "react";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative py-20 flex items-center justify-center bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="text-center text-white z-10 px-6 lg:px-12">
          <h1 className="text-4xl lg:text-6xl font-extrabold mb-6">
            {t("about")}
          </h1>
          <p className="text-lg lg:text-xl max-w-3xl mx-auto">
            {t("welcome_message")}
          </p>
        </div>
      </div>

      {/* Mission and Vision Tabs */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("mission_vision")}
          </h2>
          <div className="flex justify-center mb-8">
            <button
              className={`px-6 py-2 text-lg font-semibold ${
                activeTab === "mission"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setActiveTab("mission")}
            >
              {t("mission")}
            </button>
            <button
              className={`px-6 py-2 text-lg font-semibold ${
                activeTab === "vision"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-300"
              }`}
              onClick={() => setActiveTab("vision")}
            >
              {t("vision")}
            </button>
          </div>
          <div className="text-center">
            {activeTab === "mission" ? (
              <p className="text-lg text-gray-700">{t("mission_desc")}</p>
            ) : (
              <p className="text-lg text-gray-700">{t("vision_desc")}</p>
            )}
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("history")}
          </h2>
          <div className="accordion">
            <div className="accordion-item">
              <div className="accordion-header">
                <button className="accordion-button">
                  {t("history_desc")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("core_values")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 bg-indigo-100 rounded-xl shadow-2xl text-center transform hover:scale-105 transition duration-300">
              <i className="fas fa-trophy text-4xl text-indigo-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-indigo-600 mb-4">
                {t("excellence")}
              </h3>
              <p className="text-gray-600">{t("excellence_desc")}</p>
            </div>
            <div className="p-8 bg-yellow-100 rounded-xl shadow-2xl text-center transform hover:scale-105 transition duration-300">
              <i className="fas fa-handshake text-4xl text-yellow-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-yellow-600 mb-4">
                {t("integrity")}
              </h3>
              <p className="text-gray-600">{t("integrity_desc")}</p>
            </div>
            <div className="p-8 bg-teal-100 rounded-xl shadow-2xl text-center transform hover:scale-105 transition duration-300">
              <i className="fas fa-lightbulb text-4xl text-teal-600 mb-4"></i>
              <h3 className="text-xl font-semibold text-teal-600 mb-4">
                {t("innovation")}
              </h3>
              <p className="text-gray-600">{t("innovation_desc")}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("testimonials")}
          </h2>
          <div className="flex justify-center space-x-8">
            <div className="testimonial p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <p className="text-gray-700 text-lg italic">
                {t("testimonial_1")}
              </p>
              <h4 className="font-semibold text-gray-800 mt-4">
                {t("testimonial_1_author")}
              </h4>
            </div>
            <div className="testimonial p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
              <p className="text-gray-700 text-lg italic">
                {t("testimonial_2")}
              </p>
              <h4 className="font-semibold text-gray-800 mt-4">
                {t("testimonial_2_author")}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
