import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

// Sahifalarni lazy yuklash
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Team = lazy(() => import("./pages/Team"));
const TeamMember = lazy(() => import("./pages/TeamMember"));
const Courses = lazy(() => import("./pages/Courses"));
const News = lazy(() => import("./pages/News"));
const NotFound = lazy(() => import("./pages/NotFound")); // 404 sahifasi

// Routerni yaratish
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, // Umumiy layout
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "team", element: <Team /> },
      { path: "team/:id", element: <TeamMember /> }, // Dinamik routing
      { path: "courses", element: <Courses /> },
      { path: "news", element: <News /> },
      { path: "*", element: <NotFound /> }, // 404 sahifasi
    ],
  },
]);

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      {/* Suspense butun routerni o‘raydi */}
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} />
      </Suspense>
    </I18nextProvider>
  );
}

export default App;
