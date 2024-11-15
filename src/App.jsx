import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Team from "./pages/Team";
import Courses from "./pages/Courses";
import News from "./pages/News"; // News sahifasini import qilish
import MainLayout from "./layout/MainLayout";
import Footer from "./components/Footer";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />, // Bu layoutdagi barcha sahifalar
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "about",
          element: <About />,
        },
        {
          path: "contact",
          element: <Contact />,
        },
        {
          path: "team",
          element: <Team />,
        },
        {
          path: "courses",
          element: <Courses />,
        },
        {
          path: "news", // Yangiliklar sahifasi
          element: <News />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
