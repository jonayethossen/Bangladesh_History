import React from "react";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider/Slider";
import DocumentSection from "./components/Document";

const App = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <DocumentSection />
    </div>
  );
};

export default App;
