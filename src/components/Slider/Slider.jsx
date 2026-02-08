import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";

// Assets (Ensure these paths are correct in your project)
import heroImg1 from "../../assets/pl1.jpg";
import heroImg2 from "../../assets/pl2.jpg";
import heroImg3 from "../../assets/pl3.jpg";

const Slider = () => {
  // slider data - Uncommented and ready to use
  const slidesData = [
    {
      id: 1,
      // title: "Bangladesh Liberation War Archive",
      // description:
      //   "Explore the historic documents and rare collections of 1971.",
      image: heroImg1,
      // buttonText: "Explore Archive",
    },
    {
      id: 2,
      // title: "Voices of Freedom Fighters",
      // description:
      //   "Listen to the firsthand testimonies of those who fought for us.",
      image: heroImg2,
      // buttonText: "Listen Interviews",
    },
    {
      id: 3,
      // title: "Rare Historical Documents",
      // description:
      // "Access official treaties, declarations, and correspondence.",
      image: heroImg3,
      // buttonText: "View Documents",
    },
  ];

  return (
    <div className="w-full h-[500px] md:h-[600px] overflow-hidden">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={0}
        slidesPerView={1}
        className="h-full w-full"
      >
        {slidesData.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="relative w-full h-full bg-cover bg-center flex items-center justify-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              {/* Dark Overlay for text readability */}
              <div className="absolute inset-0 "></div>

              {/* Content */}
              <div className="relative z-10 text-center px-4 max-w-4xl">
                <h1 className="text-3xl md:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
                  {slide.description}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
