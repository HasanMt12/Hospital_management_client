import './ChooseUS.css';
import OurService from './OurService';
import { IoIosArrowRoundForward , IoIosArrowRoundBack } from "react-icons/io";

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Navigation } from 'swiper';
import { useRef } from "react";
SwiperCore.use([Navigation]);

const ChooseUs = () => {
 const swiperRef = useRef();

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
  
 const doctorservices = [
    {
      id: 1,
      img: "https://img.freepik.com/premium-vector/doctor-medical-emergency-hurrying-help-patient-cartoon_251661-95.jpg?w=2000 ",
      title: "Emergency Care",
      details: "Emergency doctors swiftly stabilize and treat patients, ensuring optimal care in critical situations.",
    },
    {
      id: 2,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_tQFTNscskfpAXYJ1w0HRFlwdxEeeIz1JF2pPyDioGAkJ-TfwCdxGKVz1ZMVaX712rio&usqp=CAU",
      title: "Call Center 24/7",
      details:
      "Connect 24/7 for quick online consultations and prescriptions. Access and review your medical history easily.",
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/1226588537/vector/a-group-of-doctors-listens-to-the-heart-examination-diagnosis-and-treatment-of.jpg?s=612x612&w=0&k=20&c=pFvhg_pMqLGr9aJV41ueCdBBwDRFyDcuYKwW-gO3qsw=",
      title: "Qualified Doctors",
      details: "Highly educated doctors with board certifications, specializing in advanced medical fields for trustworthy healthcare.",
    },
     {
      id: 4,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiEdoGdeThfMDkxbgIOjYcu6oRbLf0RV10Hg&usqp=CAU",
      title: "Lab Test",
      details:
        "Lab tests monitor treatment and detect side effects using specimens like blood, urine, and other fluids.",
    },
  ];
  return (
    <div className="section  lg:px-20 md:px-10 px-5 lg:my-30 md:my-20 my-10">
      <div className="why-choose padding-container">
        <div className="outer-why-content row">
          <div className="why-content lg:w-[500px] md:w-[400px] w-[320px]">
            <p className="why-choose-pragraph lg:text-lg md:text-md text-sm">why choose us</p>
            <h1 className="Turst-people lg:text-5xl md:text-3xl text-2xl">Why People Trust </h1>
            <h4 className="Treatment">Doctors Planet Treatment</h4>
            <p className="planet-text lg:text-md md:text-sm text-xs">
             Patients trust us for top-notch care, skilled staff, advanced treatments, and unwavering dedication to healthcare excellence.
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
            slidesPerView: 2,
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
        navigation={{
          nextEl: '.custom-next-button',
          prevEl: '.custom-prev-button',
        }}
      >

         {doctorservices.map((serv) => (
          <SwiperSlide key={serv.id}>
            <OurService serv={serv}></OurService>
          </SwiperSlide>
            
          ))}

           {/* custom navigation buttons */}
      <div className="flex justify-center gap-10 items-center group my-1">
        <button onClick={handlePrev} className="custom-prev-button text-[#13A2B7] border-l-[1px] mx-1 bg-[#e7f5f7] shadow-sm hover:bg-[#13A2B7] border-t-[1px] border-[#90b4ba] mt-2 px-3 py-1  text-xl hover:text-white rounded-sm  ">
         <IoIosArrowRoundBack />
        </button>
        
        <button onClick={handleNext} className="custom-next-button text-[#13A2B7]  mt-2 px-3 py-1 border-r-[1px] border-t-[1px] shadow-sm border-[#13A2B7]  bg-[#e7f5f7] hover:bg-[#13A2B7] rounded-sm text-xl hover:text-white ">
          <IoIosArrowRoundForward  />
        </button>
      </div>

      </Swiper>

      </div>
    </div>
  );
};

export default ChooseUs;