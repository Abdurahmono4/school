import React from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

function Team() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const teamData = [
    {
      id: 1,
      name: "John Doe",
      role: "principal",
      description: "john_desc",
      image: "/image/teacher.avif",
    },
    {
      id: 2,
      name: "Jane Smith",
      role: "math_teacher",
      description: "jane_desc",
      image: "/image/teacher.avif",
    },
    {
      id: 3,
      name: "Mark Johnson",
      role: "science_teacher",
      description: "mark_desc",
      image: "/image/teacher.avif",
    },
    {
      id: 4,
      name: "Sarah Lee",
      role: "english_teacher",
      description: "sarah_desc",
      image: "/image/teacher.avif",
    },
    {
      id: 5,
      name: "Emily Davis",
      role: "history_teacher",
      description: "emily_desc",
      image: "/image/teacher.avif",
    },
    {
      id: 6,
      name: "David Williams",
      role: "pe_teacher",
      description: "david_desc",
      image: "/image/teacher1.webp",
    },
  ];

  const handleCardClick = (id) => {
    navigate(`/team/${id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-blue-100 py-16 flex items-center justify-center">
        <div className="text-center px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            {t("meet_team")}
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            {t("team_intro")}
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            {t("dedicated_team")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamData.map((member) => (
              <div
                key={member.id}
                className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gradient-to-t from-blue-50 via-blue-100 to-white text-center transition-all duration-300 cursor-pointer"
                onClick={() => handleCardClick(member.id)}
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover transition-all duration-300"
                />
                <h3 className="text-xl font-semibold text-blue-600 mb-2">
                  {t(member.name)}
                </h3>
                <p className="text-gray-600">{t(member.role)}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
