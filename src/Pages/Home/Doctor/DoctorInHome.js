import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { RiAddCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import "./doctor.css";
import { IoIosArrowRoundForward , IoIosArrowRoundBack } from "react-icons/io";

// import required modules
import { IconButton, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import ConsultancyModal from "./ConsultancyModal";


// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import { useRef } from "react";
SwiperCore.use([Navigation]);

const DoctorInHome = () => { 
  const swiperRef = useRef();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [doctor, setDoctor] = useState("");
  const bookedData = useSelector(
    (state) => state.bookedAppointments.bookedAppointments
  );
  // console.log(bookedData);
  const {
    data: doctors = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["doctor"],
    queryFn: async () => {
      const res = await fetch("https://hospital-management-server-one.vercel.app/doctor/featured");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  refetch();
  


  const handlePrev = () => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  return (
    <div className="lg:px-20 md:px-10 px-5 lg:my-30 md:my-20 my-10">
         <div className="outer-why-content row">
        <div className="why-content lg:w-[500px] md:w-[400px] w-[320px]">
            <p className="why-choose-pragraph lg:text-lg md:text-md text-sm">Our doctors</p>
            <h1 className="Turst-people lg:text-5xl md:text-3xl text-2xl">Qualified Doctors</h1>
            <h4 className="Treatment">Doctors Planet Care</h4>
            <p className="planet-text lg:text-md md:text-sm text-xs">
             Handle directly by general doctors and professional and experience specialist doctors.
            </p>
          </div>
        </div>
      <Swiper
           ref={(swiper) => {
          if (swiper) swiperRef.current = swiper;
        }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          788: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1170: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        }}
        slidesPerGroup={1}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        navigation={{
          nextEl: '.custom-next-button',
          prevEl: '.custom-prev-button',
        }}
       
      >
        <>
          {doctors?.map((doctor) => (
            <SwiperSlide className="swipersSlider mt-8 ">
              <div className="flex flex-col  items-center p-8 transition-colors duration-300 transform border border-[#13A2B7] cursor-pointer rounded-xl hover:border-transparent group hover:bg-[#0C5D69] w-full lg:-h-[420px] md:h-[350px] h-[300px] relative">
                <img
                  className=" md:w-24 md:h-24 inline-block lg:w-30 lg:h-30 w-20 h-20 object-cover rounded-full ring-4 ring-gray-300"
                  src={doctor.img}
                  alt=""
                />

                <h1 className="mt-4 lg:text-lg md:text-md sm:text-sm font-semibold text-[#0C5D69] capitalize group-hover:text-white">
                  {doctor.doctorName}
                </h1>

                <p class="mt-2 hidden md:block capitalize lg:text-sm md:text-xs sm:text-[10px] text-gray-600 group-hover:text-white ">
                    {doctor.degree.length > 30
                    ? `${doctor.degree.substring(0, 30)}...`
                    : doctor.degree}
                </p>
                <p className="mt-2 lg:text-md md:text-sm sm:text-xs capitalize text-gray-600 group-hover:text-white font-bold">
                  {doctor.department}
                </p>

                <div className="flex  mt-3 -mx-2 absolute bottom-1">
                  <Link to={`doctor/${doctor?._id}`}>
                    <Tooltip title="Details">
                      <IconButton>
                        <RiArrowRightCircleFill className="group-hover:text-white text-[#13A2B7] text-4xl" />
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Link onClick={() => setDoctor(doctor)}>
                    <Tooltip title="Book Appointment">
                      <IconButton onClick={handleOpen}>
                        <RiAddCircleFill className="group-hover:text-white text-[#13A2B7] text-4xl" />
                      </IconButton>
                    </Tooltip>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>


      {/* custom navigation buttons */}
      <div className="flex justify-between items-center group ">
        <button onClick={handlePrev} className="  shadow-md custom custom-prev-button hover:text-white text-[#13A2B7] text-xl hover:bg-[#13A2B7#13A2B7] mt-2 px-3 py-1 border-[1px] hover:border-[0E7D87] bg-white rounded-sm group ">
         <IoIosArrowRoundBack className="icon text-white font-medium text-[20px]" />
        </button>

        <button onClick={handleNext} className="custom-next-button custom  shadow-md hover:text-white text-[#13A2B7] text-xl hover:bg-[#13A2B7] mt-2 px-3 py-1 border-[1px] hover:border-[0E7D87] bg-white rounded-sm  ">
          <IoIosArrowRoundForward  className="icon text-white font-medium text-xl" />
        </button>
      </div>
     

      </Swiper>
   
      
      <ConsultancyModal
        doctor={doctor}
        // treatment={treatment}
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
      />
    </div>
  );
};

export default DoctorInHome;
