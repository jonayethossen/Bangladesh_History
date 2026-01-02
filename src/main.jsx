import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router";
import RootLayout from "./components/Layouts/RootLayout.jsx";
import HeroPage from "./components/Pages/HeroPart.jsx";
import DocumentSection from "./components/Document.jsx";
import InterviewSection from "./components/Interview.jsx";
import GallerySection from "./components/PhotoGallary.jsx";
import ContactPage from "./components/Pages/Contract.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <HeroPage />,
      },
      {
        path: "/document",
        element: <DocumentSection />,
      },
      {
        path: "/Interview",
        element: <InterviewSection />,
      },
      {
        path: "/photogallary",
        element: <GallerySection />,
      },
      {
        path: "/contract",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
