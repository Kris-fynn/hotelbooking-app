// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
​
​
// Image imports
​
// 
​
​
​
​
// 
​
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
​
import "../swiper/swiper.css";
​
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";
​
import image1 from '../swiper/gallery/Img2.png';
import image2 from '../swiper/gallery/img5.png';
import image3 from '../swiper/gallery/Img2.png';
import image4 from '../swiper/gallery/img11.png';
import image5 from '../swiper/gallery/img14.png';
​
export default function swiper() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img  src={image1} alt="img1" /> </SwiperSlide>
        <SwiperSlide><img  src={image2} alt="img2" /> </SwiperSlide>
        <SwiperSlide><img  src={image3} alt="img3" /> </SwiperSlide>
        <SwiperSlide><img  src={image4} alt="img4" /> </SwiperSlide>
        <SwiperSlide><img  src={image5} alt="img5" /> </SwiperSlide>
      </Swiper>
    </>
  );
}
