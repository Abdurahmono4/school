import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Element } from "react-scroll";
import { useTranslation } from "react-i18next"; // Tarjima hooki
import About from "./About";
import Team from "./Team";
import Courses from "./Courses";
import Contact from "./Contact";
import News from "./News";
import Books from "../components/Books";

const backgroundImages = [
  'url("/image/build.jpg")',
  'url("/image/library.png")',
  'url("/image/pupils.webp")',
  'url("/image/manager.jpg")',
];

function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation(); // Tarjima hooki

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex + 1) % backgroundImages.length
      );
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section with Background Image Carousel */}
      <div
        className="hero min-h-[70vh] flex items-center justify-center relative overflow-hidden transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: backgroundImages[currentImageIndex],
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-60"></div>{" "}
        {/* Dark overlay */}
        <div className="relative z-10 text-center px-6 lg:px-12">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
            {t("welcome_message")} {/* Tarjima */}
          </h1>
          <p className="text-lg lg:text-xl text-white mb-8 animate__animated animate__fadeIn animate__delay-2s">
            {t("hero_subtitle")}
          </p>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className="btn btn-primary text-white px-6 py-3 rounded-md shadow-md hover:bg-blue-700 cursor-pointer transition-all duration-300 transform hover:scale-105"
          >
            {t("learn_more")}
          </ScrollLink>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-12 transition-transform duration-500 ease-in-out hover:scale-105">
          {t("why_choose_us")}
        </h2>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-12">
          {[
            {
              title: t("expert_teachers"),
              description: t("expert_teachers_desc"),
            },
            {
              title: t("modern_facilities"),
              description: t("modern_facilities_desc"),
            },
            {
              title: t("holistic_education"),
              description: t("holistic_education_desc"),
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-gray-100 rounded-lg shadow-md text-center transition-transform duration-500 ease-in-out hover:scale-105"
            >
              <h3 className="text-xl font-semibold text-blue-600 mb-4">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Dynamic Sections */}
      <Element name="news">
        <News />
      </Element>

      <Element name="about">
        <About />
      </Element>

      <Element name="books">
        <Books />
      </Element>

      <Element name="team">
        <Team />
      </Element>

      <Element name="courses">
        <Courses />
      </Element>

      <Element name="contact">
        <Contact />
      </Element>
    </div>
  );
}

export default Home;
