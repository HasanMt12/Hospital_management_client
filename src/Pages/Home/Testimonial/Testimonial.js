import packages from "../../../assets/testimonial/packaging.png";
import manager from "../../../assets/testimonial/performance.png";
import award from "../../../assets/testimonial/trophy.png";
import "./Testimonial.css";
import { IoIosArrowRoundForward , IoIosArrowRoundBack } from "react-icons/io";

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, {Autoplay, Navigation } from 'swiper';
import { useRef } from "react";
import Slider from "./Slider/Slider";
SwiperCore.use([Autoplay, Navigation]);
const Testimonial = () => {
 


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
const reviewa = [
    {
      id: 1,
      rating: 3 , 
      title: "STEP-1",
      name: "STEP-1",
      time: "3/11",
      details: "Registration of patients",
    },
    {
      id: 2,
     rating: 4 , 
      title: "STEP-2",
      name: "STEP-2",
      time: "2/12",
      details:"Check schedule & Set appointment",
    },
    {
      id: 3,
      rating: 5 , 
      title: "STEP-3",
      name: "STEP-3",
      time: "2/10",
      details: "Patient get returning confirmation",
    },
  
  ];
  return (
    <div className="lg:px-20 md:px-10 px-5 lg:my-30 md:my-20 my-10 bg-[#F1F5F5] py-6">
      
      <div > 
          <div className="outer-why-content row">
          <div className="why-content lg:w-[500px] md:w-[400px] w-[320px]">
            <p className="why-choose-pragraph lg:text-lg md:text-md text-sm">TESTIMONIAL</p>
            <h1 className="Turst-people lg:text-5xl md:text-3xl text-2xl">What Our </h1>
            <h4 className="Treatment">Patients Says</h4>
          </div>
        </div>

      </div>
     <div className="container mx-auto flex flex-col md:flex-row gap-2">
       
        <div className="lg:w-[70%] md:w-[70%]  sm:w-full ">
              <div className='border-b-2 border-[#13A2B7] w-[20%]'>Client Feedback: </div>
             <Swiper
              ref={(swiper) => {
                if (swiper) swiperRef.current = swiper;
              }}
               autoplay={{
                delay: 3000, // Set the delay in milliseconds (e.g., 3000ms for 3 seconds)
                disableOnInteraction: false, // Allow Autoplay to continue after user interaction
              }}
              slidesPerView={1}  spaceBetween={30} slidesPerGroup={1}  grabCursor={true}  loop={true}
              loopFillGroupWithBlank={true}
              navigation={{
              nextEl: '.custom-next-button',
              prevEl: '.custom-prev-button',
            }}
            >

         {reviewa.map((rev) => (
          <SwiperSlide key={rev.id}>
            <Slider key={rev.id} rev={rev}></Slider>
            
          </SwiperSlide>
            
          ))}

           {/* custom navigation buttons */}
            <div className="flex justify-center md:justify-end gap-4 items-center group my-1 mx-2">
              <button onClick={handlePrev} className="custom-prev-button hover:text-[#13A2B7]  mx-1 hover:bg-[#e7f5f7] shadow-md bg-[#13A2B7]  mt-2 px-3 py-1  text-xl text-white rounded-sm  ">
              <IoIosArrowRoundBack />
              </button>
              
              <button onClick={handleNext} className="custom-next-button hover:text-[#13A2B7]  mt-2 px-3 py-1  shadow-md  hover:bg-[#e7f5f7] bg-[#13A2B7] rounded-sm text-xl text-white ">
                <IoIosArrowRoundForward  />
              </button>
            </div>

      </Swiper>
        </div>

     
        <div className="lg:w-[27%] md:w-[27%] lg:min-h-[320px] md:min-[280px] min-h-[240px] sm:w-full rounded-xl shadow-xl bg-[#13A2B7] py-10 px-10">
               
                <div className="flex justify-start items-start gap-6 text-white">
                  <div className='w-20 h-20'><img src={manager} className="object-cover " alt=""></img></div>
                  <div className="flex-col justify-center items-center gap-2">
                      <h2 className="text-xl font-semibold">1550+</h2>
                       <h2>SATISFIED PATIENTS</h2>
                  </div>
                </div>


                 <div className="flex justify-start items-start gap-6 text-white">
                  <div className='w-20 h-20'><img src={packages} className="object-cover " alt=""></img></div>
                  <div className="flex-col justify-center items-center gap-2">
                     <h2 className="text-xl font-semibold">12+</h2>
                       <h2>HEALTH SECTIONS</h2>    
                  </div>

                </div>

                 <div className="flex justify-start items-start gap-6 text-white">
                  <div className='w-20 h-20'><img src={award} className="object-cover " alt=""></img></div>
                  <div className="flex-col justify-center items-center gap-2">
                     <h2 className="text-xl font-semibold">40+</h2>
                    <h2>AWARDS WON</h2>    
                  </div>

                </div>
        </div>
    </div>
    </div>
  );
};

export default Testimonial;