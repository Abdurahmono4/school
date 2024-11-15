import React from "react";
import { Link } from "react-router-dom";

function Courses() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-blue-100 py-16 flex items-center justify-center">
        <div className="text-center px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            Explore Our Courses
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Discover a wide range of courses designed to help you reach your
            academic and career goals. Learn from experienced instructors and
            develop the skills you need to succeed.
          </p>
        </div>
      </div>

      {/* Courses Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Available Courses
          </h2>

          {/* Course Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Course 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img
                src="../public/image/course.jpg"
                alt="Course 1"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Web Development
              </h3>
              <p className="text-gray-600">
                Learn how to build modern websites using HTML, CSS, JavaScript,
                and more.
              </p>
              <Link
                to="/courses/web-development"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Course 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img
                src="../public/image/course.jpg"
                alt="Course 2"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Data Science
              </h3>
              <p className="text-gray-600">
                Master data analysis, machine learning, and big data
                technologies.
              </p>
              <Link
                to="/courses/data-science"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Course 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img
                src="../public/image/course.jpg"
                alt="Course 3"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Graphic Design
              </h3>
              <p className="text-gray-600">
                Learn the fundamentals of design, including typography, color
                theory, and Adobe tools.
              </p>
              <Link
                to="/courses/graphic-design"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Course 4 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img
                src="../public/image/course.jpg"
                alt="Course 4"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Digital Marketing
              </h3>
              <p className="text-gray-600">
                Get the skills you need to manage online advertising campaigns,
                SEO, and social media marketing.
              </p>
              <Link
                to="/courses/digital-marketing"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Course 5 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img
                src="../public/image/course.jpg"
                alt="Course 5"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Mobile App Development
              </h3>
              <p className="text-gray-600">
                Build mobile applications for Android and iOS using popular
                frameworks.
              </p>
              <Link
                to="/courses/mobile-app-development"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-all"
              >
                Learn More
              </Link>
            </div>

            {/* Course 6 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
              <img
                src="../public/image/course.jpg"
                alt="Course 6"
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                Cyber Security
              </h3>
              <p className="text-gray-600">
                Protect systems and networks from cyber threats and attacks with
                the latest security techniques.
              </p>
              <Link
                to="/courses/cyber-security"
                className="inline-block mt-4 text-blue-600 hover:text-blue-800 transition-all"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Courses;
