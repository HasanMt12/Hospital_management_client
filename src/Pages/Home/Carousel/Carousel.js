import React, { useState } from "react";
import "./Carousel.css";
import { Link } from 'react-router-dom';
import { CarouselInfo } from "./CarouselInfo";

const Carousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const handleNextSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === CarouselInfo.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePreviousSlide = () => {
    setCurrentImageIndex((prevIndex) =>
      prevIndex === 0 ? CarouselInfo.length - 1 : prevIndex - 1
    );
  };

  const lowerSliderButton = (id) => {
    setCurrentImageIndex(id);
  };
 
  return (
    <div className="carousel w-full h-[20rem] md:h-[24rem] lg:h-[28rem] xl:h-[40rem] relative rounded-md overflow-hidden mb-10">
      <div className="carousel-image-container w-full h-full ">
        {CarouselInfo?.map((info, index) => (
          <Link key={index} className={`carousel-container ${
            index === currentImageIndex ? "active" : ""
          }`}>
             <div class={`z-10 absolute top-10  xl:top-32 left-16 sm:left-20 space-y-3 lg:space-y-10 2xl:w-4/12 sm:p-4  ${info.imgClass}`}>
              <p className=" font-bold  text-2xl xl:text-4xl text-[#333333]">
       <p> {info.title1?info.title1:""} <br/>{info.title2?info.title2:""}</p> 
       </p>
       <p className=" hidden md:block text-green lg:text-md">
       {info.details1?info.details1:""}<br/> {info.details2?info.details2:""}
       </p>
       <div class='flex gap-3 sm:gap-5 flex-col sm:flex-row'>
       <Link to={info.link}>
        
          <button className="text-xs bg-[#0E7D87]/70 btn w-52 md:px-6 border-[1px] hover:border-[0E7D87] hover:bg-white py-2 rounded-lg hover:text-[#0E7D87] text-white/70 font-medium">
          {info.buttonText1? info.buttonText1 : ""} <br/>{info.buttonText2 ? info.buttonText2 :""} 
          </button>
        </Link>
          
       {/* <button class='text-xs bg-brown btn hover:text-brown w-52 md:px-6 md:py-2 text-green font-medium rounded-md border-2 border-brown'>More Than 10 Million <br>  Patient Ratings</button> */}
       </div>
       </div>
          <img
            className={`carousel-image h-full w-full object-cover object-center `}
            src={info.img}
            alt=''
          />
          </Link>
        ))}
      </div>
      <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2 ">
          <button
            onClick={handlePreviousSlide}
            className="bg-brown w-7 h-7 sm:w-10 sm:h-10 rounded-full text-white font-bold sm:text-2xl "
          >
            ❮
          </button>
          <button
            className="bg-brown w-7 h-7 sm:w-10 sm:h-10 rounded-full text-white font-bold sm:text-2xl"
            onClick={handleNextSlide}
          >
            ❯
          </button>
        </div>
        <div className="flex w-full gap-2 absolute z-30 bottom-5 left-1/2	">
          {CarouselInfo?.map((carousel, i) => (
            <button
              key={i}
              onClick={() => lowerSliderButton(i)}
              className={` w-3 h-3 rounded-full ${
                currentImageIndex === i ? "bg-white" : "bg-green "
              }`}
            ></button>
          ))}
        </div>
    </div>
  );
};

export default Carousel;
