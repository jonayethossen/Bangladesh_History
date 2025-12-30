import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider/Slider";
import DocumentSection from "./components/Document";
import FooterSection from "./components/Footer";
import InterviewSection from "./components/Interview";
import GallarySection from "./components/PhotoGallary";
import ContactSection from "./components/Contract";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <DocumentSection />
      <InterviewSection />
      <GallarySection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};

export default App;
