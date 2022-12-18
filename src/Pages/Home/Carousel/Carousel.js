import React from "react";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import slider from "../../../helper/slider.json";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";

import "./Carousel.css";

const Carousel = () => {
  return (
    <div  className="my-6">
      <Swiper 
        cssMode={true}
        navigation={true}
        keyboard={{
          enabled: true,
        }}
        mousewheel={true}
        pagination={{
          type: "progressbar",
        }}
        // keyboard={true}
        modules={[Navigation, Pagination, Mousewheel, Keyboard]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={slider[0].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img  src={slider[1].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[2].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[3].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[4].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[5].img} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={slider[6].img} alt="" />
        </SwiperSlide>
        {/* <SwiperSlide>
          <img src={slider[7].img} alt="" />
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Carousel;
