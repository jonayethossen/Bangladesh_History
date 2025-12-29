import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import "./styles.css";

const Slider = () => {
  return (
    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      pagination={{ dynamicBullets: true }}
      navigation
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      spaceBetween={20}
      slidesPerView={1}
      className="mySwiper"
    >
      {Array.from({ length: 9 }).map((_, index) => (
        <SwiperSlide key={index}>Slide {index + 1}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
