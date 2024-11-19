import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { AiFillLike, AiFillStar } from "react-icons/ai";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const teamData = [
  {
    id: 1,
    name: "John Doe",
    role: "principal",
    description: "john_desc",
    email: "john.doe@school.com",
    phone: "+123456789",
    image: "/image/teacher.avif",
  },
  {
    id: 2,
    name: "Jane Smith",
    role: "math_teacher",
    description: "jane_desc",
    email: "jane.smith@school.com",
    phone: "+987654321",
    image: "/image/teacher.avif",
  },
  {
    id: 3,
    name: "Mark Johnson",
    role: "science_teacher",
    description: "mark_desc",
    email: "mark.johnson@school.com",
    phone: "+234567891",
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
  // Add other members...
];

function TeamMember() {
  const { id } = useParams();
  const { t, i18n } = useTranslation();
  const [likes, setLikes] = useState(0);
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [submittedFeedback, setSubmittedFeedback] = useState([]);

  const member = teamData.find((member) => member.id === parseInt(id));

  if (!member) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-red-500">{t("not_found")}</h1>
      </div>
    );
  }

  const handleLike = () => setLikes(likes + 1);
  const handleRating = (rate) => setRating(rate);
  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    if (feedback.trim()) {
      setSubmittedFeedback([...submittedFeedback, feedback]);
      setFeedback("");
    }
  };

  // Tilni o'zgartirish (masalan, rus tiliga)
  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <div className="bg-gradient-to-br from-indigo-50 via-white to-indigo-100 min-h-screen px-4 py-8 flex items-center justify-center">
      <div className="w-full max-w-5xl bg-white shadow-2xl rounded-3xl overflow-hidden relative">
        {/* Header with Background */}
        <div className="relative h-64 bg-gradient-to-tr from-blue-500 to-indigo-600">
          <img
            src={member.image}
            alt={member.name}
            className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-40 h-40 rounded-full border-4 border-white shadow-lg object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="px-6 pt-16 pb-8">
          <h1 className="text-3xl font-bold text-center text-gray-800">
            {t(member.name)}
          </h1>
          <p className="text-center text-blue-600 text-lg font-medium mt-2">
            {t(member.role)}
          </p>
          <p className="text-gray-700 text-center leading-relaxed max-w-3xl mx-auto mt-4">
            {t(member.description)}
          </p>

          {/* Contact Info */}
          <div className="mt-8 flex justify-center space-x-6">
            <a
              href={`mailto:${member.email}`}
              className="flex items-center px-6 py-3 bg-blue-500 text-white rounded-full shadow-lg hover:bg-blue-600 transition"
            >
              <FaEnvelope className="mr-2" />
              {t("Email")}
            </a>
            <a
              href={`tel:${member.phone}`}
              className="flex items-center px-6 py-3 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition"
            >
              <FaPhone className="mr-2" />
              {t("Call")}
            </a>
          </div>

          {/* Like and Rating */}
          <div className="mt-8 flex flex-col items-center space-y-4">
            <button
              onClick={handleLike}
              className="flex items-center px-6 py-3 bg-indigo-500 text-white rounded-full shadow-lg hover:bg-indigo-600 transition"
            >
              <AiFillLike className="mr-2 text-xl" />
              {t("Like")} ({likes})
            </button>

            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((rate) => (
                <button
                  key={rate}
                  onClick={() => handleRating(rate)}
                  className={`w-10 h-10 rounded-full ${
                    rating >= rate ? "bg-yellow-500" : "bg-gray-300"
                  } hover:scale-110 transition`}
                >
                  <AiFillStar className="text-white" />
                </button>
              ))}
            </div>
            <p className="text-gray-600">
              {t("Your Rating")}: {rating}/5
            </p>
          </div>

          {/* Feedback Form */}
          <form onSubmit={handleFeedbackSubmit} className="mt-8">
            <textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder={t("Leave your feedback...")}
              className="w-full h-24 p-4 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-indigo-600 transition mt-4"
            >
              {t("Submit Feedback")}
            </button>
          </form>

          {/* Submitted Feedback */}
          <div className="mt-8 bg-gray-100 rounded-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {t("User Feedback")}
            </h2>
            {submittedFeedback.length > 0 ? (
              submittedFeedback.map((fb, index) => (
                <p key={index} className="mt-2 text-gray-700">
                  • {fb}
                </p>
              ))
            ) : (
              <p className="text-gray-500">{t("No feedback yet.")}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
