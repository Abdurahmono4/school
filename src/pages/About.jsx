import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-blue-100 py-16 flex items-center justify-center">
        <div className="text-center px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            About SchoolName
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Welcome to SchoolName, a place where education meets excellence. Our
            mission is to empower students with the knowledge and skills they
            need to succeed in life.
          </p>
        </div>
      </div>

      {/* Mission and Vision Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Mission & Vision
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Our Mission
              </h3>
              <p className="text-gray-600">
                To provide a safe, inclusive, and supportive environment where
                students can excel academically, socially, and personally.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Our Vision
              </h3>
              <p className="text-gray-600">
                To nurture future leaders who are responsible, innovative, and
                compassionate members of society.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* History Section */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            Our History
          </h2>
          <p className="text-lg text-gray-700 max-w-4xl mx-auto text-center">
            Established in 1990, SchoolName has a rich history of providing
            quality education to generations of students. Over the years, we
            have grown from a small institution to a thriving community of
            learners, teachers, and parents.
          </p>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Excellence
              </h3>
              <p className="text-gray-600">
                Striving for the highest standards in everything we do.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Integrity
              </h3>
              <p className="text-gray-600">
                Acting with honesty, fairness, and respect at all times.
              </p>
            </div>
            <div className="p-6 bg-gray-100 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Innovation
              </h3>
              <p className="text-gray-600">
                Encouraging creativity and embracing new ideas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
