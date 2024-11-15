import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submit logic
    alert("Your message has been sent!");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-16">
      {/* Hero Section */}
      <div className="hero bg-blue-100 py-16 flex items-center justify-center">
        <div className="text-center px-6 lg:px-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-blue-600 mb-6">
            Contact Us
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 max-w-3xl mx-auto">
            We’d love to hear from you. Whether you have a question, feedback,
            or want to learn more, feel free to reach out.
          </p>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <h3 className="text-xl font-semibold text-blue-600 mb-4">
              Get In Touch
            </h3>
            <div className="flex items-center mb-4">
              <FaPhoneAlt className="text-blue-600 mr-4" />
              <span className="text-gray-700">+1 (123) 456-7890</span>
            </div>
            <div className="flex items-center mb-4">
              <FaEnvelope className="text-blue-600 mr-4" />
              <span className="text-gray-700">info@schoolname.com</span>
            </div>
            <div className="flex items-center">
              <FaMapMarkerAlt className="text-blue-600 mr-4" />
              <span className="text-gray-700">
                123 Education Street, City, Country
              </span>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 col-span-2">
            <h3 className="text-xl font-semibold text-blue-600 mb-6">
              Send Us A Message
            </h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-lg font-semibold text-gray-800 mb-2"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-gray-800 mb-2"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="message"
                  className="block text-lg font-semibold text-gray-800 mb-2"
                >
                  Your Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  rows="6"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-blue-600 text-white font-semibold text-lg rounded-md hover:bg-blue-700 transition-all"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="container mx-auto px-6 lg:px-12 py-16">
        <h3 className="text-2xl font-semibold text-center text-gray-800 mb-8">
          Our Location
        </h3>
        <div className="w-full h-64 sm:h-96 bg-gray-200 rounded-lg shadow-md">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.2327352693034!2d-122.39165968468112!3d37.78330187975825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808581b00f9516db%3A0x3f1701c40a1c88de!2sSchool%20Name!5e0!3m2!1sen!2sus!4v1633105096361!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Contact;
