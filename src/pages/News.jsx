import React from "react";

function News() {
  const newsData = [
    {
      title: "New Course Announcement!",
      date: "November 1, 2024",
      description:
        "We are excited to announce new courses starting next semester. Check them out and enroll today!",
      image: "../public/image/courseAnno.png", // Placeholder image URL
    },
    {
      title: "School Annual Event Coming Soon",
      date: "October 20, 2024",
      description:
        "Our annual event is just around the corner. Stay tuned for details and save the date!",
      image: "../public/image/annual.jpg", // Placeholder image URL
    },
    {
      title: "Student Achievements Recognition",
      date: "September 15, 2024",
      description:
        "Join us in celebrating the achievements of our talented students. We are proud of their hard work and success.",
      image: "../public/image/achievement.jpg", // Placeholder image URL
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-6 lg:px-12">
        <h1 className="text-4xl font-bold text-blue-600 text-center mb-8">
          Latest News
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
