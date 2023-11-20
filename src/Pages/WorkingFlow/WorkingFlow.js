import React, { useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import img1 from "../../assets/Workflow/app.png";
import img2 from "../../assets/Workflow/blood-test.png";
import img3 from "../../assets/Workflow/browser (2).png";
import img4 from "../../assets/Workflow/diagnosis.png";
import img5 from "../../assets/Workflow/family (1).png";
import img6 from "../../assets/Workflow/health-insurance.png";
import img7 from "../../assets/Workflow/hospital-bed.png";
import img8 from "../../assets/Workflow/medical-report.png";
import img9 from "../../assets/Workflow/patient.png";
import img10 from "../../assets/Workflow/schedule.png";
// import "./WorkingFlow.css"

// Import Swiper core and required modules
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay, Pagination } from "swiper";

SwiperCore.use([Autoplay, Pagination, ]);



const WorkingFlow = () => {
  const swiperRef = useRef();
  const workingFlows = [
    {
      id: 1,
      img: img1 , 
      title: "STEP-1",
      details: "Registration of patients",
    },
    {
      id: 2,
      img: img2,
     title: "STEP-2",
      details:"Check schedule & Set appointment",
    },
    {
      id: 3,
      img: img3,
      title: "STEP-3",
      details: "Patient get returning confirmation",
    },
     {
      id: 4,
      img: img4,
      title: "STEP-4",
      details:"Insurance planing",
    },
    {
      id: 5,
      img: img5,
      title: "STEP-5",
      details:"  Consult with Doctor",
    },
    {
      id: 6,
      img: img6,
      title: "STEP-6",
      details:"  Patient's Case Study",
    },
    {
      id: 7,
      img: img7,
      title: "STEP-7",
      details:"Perform Medical Te",
    }, 
      {
      id: 8,
      img: img8,
      title: "STEP-8",
      details:" Transfer report to Doctor",
    },
     {
      id: 9,
      img: img9,
      title: "STEP-9",
      details:"Starts Treatment",
    },
     {
      id: 10,
      img: img10,
      title: "STEP-10",
      details:"Observation on Patient",
    },
  ];
  console.log(workingFlows)
  return (
    <div className="w-11/12 mx-auto">
      <div className="my-5 text-center">
        <h1 className="text-3xl my-2 font-bold font-sans">
          Working Flow of <span className="text-[#13A2B7]">HMS Software</span>
        </h1>
        <Typography
          className="text-base"
          variant="body2"
          color="text.secondary"
        >
          <p>
            The Hospital Management System is circulated between 10 processes.
          </p>
          <p>Now, we will discuss on the following section.</p>
        </Typography>
      </div>
      
     
      <Swiper 
      
      ref={(swiper) => {
    if (swiper) swiperRef.current = swiper;
  }}
        breakpoints={{
          300: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          788: {
            slidesPerView: 3,
            spaceBetween: 6,
          },
          1170: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
          1600: {
            slidesPerView: 5,
            spaceBetween: 10,
          },
        }}
        //   spaceBetween={30}
        slidesPerGroup={1}
        grabCursor={true}
        loop={true}
        loopFillGroupWithBlank={true}
        autoplay={{
          delay: 3000, // Set the delay in milliseconds (e.g., 3000ms for 3 seconds)
          disableOnInteraction: false, // Allow autoplay to continue after user interaction
        }}
        pagination={{
          type: 'bullets',
          dynamicBullets: true,
          clickable: true,
          renderBullet: function (index, className) {
            const customStyles = `
              width: 10px;
              height: 10px;
              background-color: ${index < 4 ? '#13A2B7' : '#9ac3c9'};
              margin: 0 8px; 
            `;
            return `<span class="${className}" style="${customStyles}"></span>`;
          },
        }}
      >
        {workingFlows.map((flow) => (
          <SwiperSlide key={flow.id} className="mb-4">
            <Card key={flow.id}
          sx={{
            maxWidth: 270,
            minWidth: 250,
            // boxShadow: 'none',
            boxShadow: "0 0 5px 0 rgba(0, 0, 0, 0.1)",
            bgcolor: "",
            marginTop: "20px",
            marginBottom: "20px",
            pt: 2,
            height: "290px",

            mx: "auto",
            "&:hover": {
              boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.1)",
            },
          }}
        >
          <CardContent
            sx={{
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            <div className="relative z-0 flex flex-col items-center p-8 border rounded-md h-56">
              <span className="absolute top-0 px-6 pt-1 pb-1 font-medium rounded-b-lg bg-[#13A2B7] text-white">
                {flow.title}
              </span>
              <div className="flex justify-center items-center py-5">
                <img className="w-16 h-16" src={flow.img} alt="" />
              </div>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{
                  fontWeight: "bold",
                }}
              ></Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                className="text-lg"
              >
                {flow.details}
              </Typography>
            </div>
          </CardContent>
        </Card>
          </SwiperSlide>
            
          ))}
        
      </Swiper>

    </div>
  );
};

export default WorkingFlow;
