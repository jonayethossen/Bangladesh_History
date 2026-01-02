import DocumentSection from "../Document";
import InterviewSection from "../Interview";
import GallerySection from "../PhotoGallary";
import Slider from "../Slider/Slider";

export default function HeroPage() {
  return (
    <div>
      <Slider />
      <DocumentSection />
      <InterviewSection />
      <GallerySection />
    </div>
  );
}
