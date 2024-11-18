import React from "react";

function Team() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="hero bg-blue-100 py-16 flex items-center justify-center">
        <div className="text-center px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            Meet Our Team
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            Our dedicated team of educators, administrators, and staff work
            together to provide the best learning experience for our students.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="py-16 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 text-center mb-12">
            Our Dedicated Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gradient-to-t from-blue-50 via-blue-100 to-white text-center transition-all duration-300">
              <img
                src="/image/teacher.avif" // Corrected path
                alt="John Doe"
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover transition-all duration-300"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                John Doe
              </h3>
              <p className="text-gray-600">Principal</p>
              <p className="text-gray-500 mt-2">
                John has been with SchoolName for over 10 years, leading the
                school towards excellence in education.
              </p>
            </div>

            {/* Team Member 2 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gradient-to-t from-blue-50 via-blue-100 to-white text-center transition-all duration-300">
              <img
                src="/image/teacher.avif" // Corrected path
                alt="Jane Smith"
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover transition-all duration-300"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Jane Smith
              </h3>
              <p className="text-gray-600">Math Teacher</p>
              <p className="text-gray-500 mt-2">
                Jane is passionate about teaching math and inspiring students to
                excel in STEM fields.
              </p>
            </div>

            {/* Team Member 3 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gradient-to-t from-blue-50 via-blue-100 to-white text-center transition-all duration-300">
              <img
                src="/image/teacher.avif" // Corrected path
                alt="Mark Johnson"
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover transition-all duration-300"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Mark Johnson
              </h3>
              <p className="text-gray-600">Science Teacher</p>
              <p className="text-gray-500 mt-2">
                Mark has a wealth of experience in teaching science and enjoys
                making complex topics easy for students to understand.
              </p>
            </div>

            {/* Team Member 4 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gradient-to-t from-blue-50 via-blue-100 to-white text-center transition-all duration-300">
              <img
                src="/image/teacher.avif" // Corrected path
                alt="Sarah Lee"
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover transition-all duration-300"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Sarah Lee
              </h3>
              <p className="text-gray-600">English Teacher</p>
              <p className="text-gray-500 mt-2">
                Sarah is dedicated to fostering a love for literature and
                writing among her students.
              </p>
            </div>

            {/* Team Member 5 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gradient-to-t from-blue-50 via-blue-100 to-white text-center transition-all duration-300">
              <img
                src="/image/teacher.avif" // Corrected path
                alt="Emily Davis"
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover transition-all duration-300"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                Emily Davis
              </h3>
              <p className="text-gray-600">History Teacher</p>
              <p className="text-gray-500 mt-2">
                Emily has a passion for history and loves bringing historical
                events to life for her students.
              </p>
            </div>

            {/* Team Member 6 */}
            <div className="p-6 bg-white rounded-lg shadow-lg hover:scale-105 hover:shadow-xl hover:bg-gradient-to-t from-blue-50 via-blue-100 to-white text-center transition-all duration-300">
              <img
                src="/image/teacher1.webp" // Corrected path
                alt="David Williams"
                className="w-36 h-36 sm:w-40 sm:h-40 rounded-full mx-auto mb-4 border-4 border-blue-600 object-cover transition-all duration-300"
              />
              <h3 className="text-xl font-semibold text-blue-600 mb-2">
                David Williams
              </h3>
              <p className="text-gray-600">Physical Education Teacher</p>
              <p className="text-gray-500 mt-2">
                David promotes healthy living and encourages students to stay
                active and fit through sports and physical education.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
