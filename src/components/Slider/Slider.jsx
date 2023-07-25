import React from "react";
import css from "./Slider.module.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';

const Slider = (props) => {
  const {slides} = props; 
  return (
    <Swiper
    slidesPerView={3}
    spaceBetween={4}
    modules={[Autoplay, Navigation, Pagination]}
    autoplay={{
      delay: 2500,
      disableOnInteraction: false,
    }}
    pagination={{
      clickable: true,
    }}
    navigation={true}
    >
      {
        slides.map((slide) => {
          return <SwiperSlide 
              key={slide.id} 
              className={css.slide__wrapper}
              >
              <img src={slide.src} className={css.slide} alt="hero" 
            />
          </SwiperSlide>
        })
      }
    </Swiper>
  )
}

export default Slider