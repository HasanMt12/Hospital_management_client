import React, { useState } from "react";
// Import Swiper React components

import { useQuery } from "@tanstack/react-query";
import { RiAddCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";
// import './styles.css'
import "./doctor.css";

// import required modules
import { IconButton, Tooltip } from "@mui/material";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Navigation, Pagination } from "swiper";
import ServiceTitile from "../Services/ServiceTitle";
import ConsultancyModal from "./ConsultancyModal";

const DoctorInHome = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [doctor, setDoctor] = useState("");
  const bookedData = useSelector(
    (state) => state.bookedAppointments.bookedAppointments
  );
  console.log(bookedData);
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
  console.log(doctors);

  return (
    <>
      <ServiceTitile
        data-aos="fade-up"
        data-aos-duration="2500"
        title="Featured Doctors"
        colored="Services"
        sx={{
          mb: 10,
          color: "#0f8383",
        }}
      />
      <Swiper
        //   slidesPerView={3}
        breakpoints={{
          300: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          788: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1170: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 40,
          },
        }}
        //   spaceBetween={30}
        slidesPerGroup={1}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
         navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper swiper px-8"
      >
        <>
          {doctors?.map((doctor) => (
            <SwiperSlide className="swipersSlider cs customWidth mt-8 ">
              <div className="flex flex-col  items-center p-8 transition-colors duration-300 transform border border-teal-600 cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-400/50 w-full h-full relative">
                <img
                  className=" md:w-32 md:h-32 inline-block sm:w-12 sm:h-12 rounded-full ring-4 ring-gray-300"
                  src={doctor.img}
                  alt=""
                />

                <h1 className="mt-4 lg:text-lg md:text-md sm:text-sm font-semibold text-teal-800 capitalize group-hover:text-white">
                  {doctor.doctorName}
                </h1>

                <p class="mt-2 hidden md:block capitalize lg:text-sm md:text-xs sm:text-[10px] text-gray-600 group-hover:text-white ">
                  {doctor.degree}
                </p>
                <p className="mt-2 lg:text-md md:text-sm sm:text-xs capitalize text-gray-600 group-hover:text-white font-bold">
                  {doctor.department}
                </p>

                <div className="flex  mt-3 -mx-2 absolute bottom-1">
                  <Link to={`doctor/${doctor?._id}`}>
                    <Tooltip title="Details">
                      <IconButton>
                        <RiArrowRightCircleFill className="group-hover:text-white text-teal-600 text-4xl" />
                      </IconButton>
                    </Tooltip>
                  </Link>
                  <Link onClick={() => setDoctor(doctor)}>
                    <Tooltip title="Book Appointment">
                      <IconButton onClick={handleOpen}>
                        <RiAddCircleFill className="group-hover:text-white text-teal-600 text-4xl" />
                      </IconButton>
                    </Tooltip>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </>
      </Swiper>
      <ConsultancyModal
        doctor={doctor}
        // treatment={treatment}
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
      />
    </>
  );
};

export default DoctorInHome;
