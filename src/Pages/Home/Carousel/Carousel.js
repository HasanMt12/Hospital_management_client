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
    <div className="h-screen border mt-16">
      <div className="h-5/6">
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
            <div className="absolute inset-x-0 bottom-52 h-16 z-20">
              <p className="text-2xl font-bold">
                Caring for our community like family
              </p>
              <button className="btn bg-blue-700 text-white px-6 py-4 rounded-md mt-5 ">
                Make an Appointment
              </button>
            </div>{" "}
            <img className="relative" src={slider[0].img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-x-0 bottom-52 h-16 z-20">
              <p className="text-2xl font-bold">
                Caring for our community like family
              </p>
              <button className="btn bg-blue-700 text-white px-6 py-4 rounded-md mt-5 ">
                Make an Appointment
              </button>
            </div>
            <img className="relative" src={slider[1].img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-x-0 bottom-52 h-16 z-20">
              <p className="text-2xl font-bold">
                Caring for our community like family
              </p>
              <button className="btn bg-blue-700 text-white px-6 py-4 rounded-md mt-5 ">
                Make an Appointment
              </button>
            </div>
            <img className="relative" src={slider[2].img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-x-0 bottom-52 h-16 z-20">
              <p className="text-2xl font-bold">
                Caring for our community like family
              </p>
              <button className="btn bg-blue-700 text-white px-6 py-4 rounded-md mt-5 ">
                Make an Appointment
              </button>
            </div>
            <img className="relative" src={slider[3].img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-x-0 bottom-52 h-16 z-20">
              <p className="text-2xl font-bold">
                Caring for our community like family
              </p>
              <button className="btn bg-blue-700 text-white px-6 py-4 rounded-md mt-5 ">
                Make an Appointment
              </button>
            </div>
            <img className="relative" src={slider[4].img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-x-0 bottom-52 h-16 z-20">
              <p className="text-2xl font-bold">
                Caring for our community like family
              </p>
              <button className="btn bg-blue-700 text-white px-6 py-4 rounded-md mt-5 ">
                Make an Appointment
              </button>
            </div>
            <img className="relative" src={slider[5].img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-x-0 bottom-52 h-16 z-20">
              <p className="text-2xl font-bold">
                Caring for our community like family
              </p>
              <button className="btn bg-blue-700 text-white px-6 py-4 rounded-md mt-5 ">
                Make an Appointment
              </button>
            </div>
            <img className="relative" src={slider[6].img} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <div className="absolute inset-x-0 bottom-52 h-16 z-20">
              <p className="text-2xl font-bold">
                Caring for our community like family
              </p>
              <button className="btn bg-blue-700 text-white px-6 py-4 rounded-md mt-5 ">
                Make an Appointment
              </button>
            </div>
            <img className="relative" src={slider[7].img} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Carousel;
