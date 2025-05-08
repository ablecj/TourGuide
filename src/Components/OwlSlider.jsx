import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { owlCardData } from "../Data";
import "swiper/css";
import "swiper/css/autoplay";
import "../Styles/OwlSlider.css";
import { useNavigate } from "react-router-dom";

const OwlSlider = () => {
  // navigation
  const navigate = useNavigate();

  // function for handle click
  const handleClickDetails = (id) => {
    navigate(`/destination/${id}`);
  };

  return (
    <Swiper
      modules={[Autoplay]}
      // autoplay={{ delay: 3000 }}
      loop={false}
      spaceBetween={20}
      slidesPerView={4}
      breakpoints={{
        320: { slidesPerView: 1 },
        640: { slidesPerView: 2 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 4 },
      }}
    >
      {owlCardData.map((item, index) => (
        <SwiperSlide key={index}>
          <div
            className="slider-item"
            onClick={() => handleClickDetails(item.id)}
            style={{ cursor: "pointer" }}
          >
            <img src={item.image} alt={item.title} className="slider-image" />
            <div className="slider-overlay">
              <h2 className="slider-title">{item.title}</h2>
              {/* <p className="slider-subtitle">{item.subtitle}</p> */}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default OwlSlider;
