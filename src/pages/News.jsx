import React from "react";
import { useTranslation } from "react-i18next";

function News() {
  const { t } = useTranslation(); // Tarjimani ishlatish

  const newsData = [
    {
      title: t("news_course_announcement"),
      date: t("news_course_date"),
      description: t("news_course_description"),
      image: "/image/courseAnno.png",
    },
    {
      title: t("news_event_announcement"),
      date: t("news_event_date"),
      description: t("news_event_description"),
      image: "/image/annual.jpg",
    },
    {
      title: t("news_achievement_title"),
      date: t("news_achievement_date"),
      description: t("news_achievement_description"),
      image: "/image/achievement.jpg",
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          {t("latest_news")} {/* Tarjimani chaqirish */}
        </h1>

        {/* News Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((news, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all transform hover:scale-105 duration-300"
            >
              {/* News Image */}
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover rounded-t-lg"
              />

              <div className="p-6">
                {/* News Title */}
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                  {news.title}
                </h2>

                {/* News Date */}
                <p className="text-gray-500 text-sm mb-4">{news.date}</p>

                {/* News Description */}
                <p className="text-gray-700">{news.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default News;
