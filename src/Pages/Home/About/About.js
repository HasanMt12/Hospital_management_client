import React from "react";
import doctor from "../../../assets/About/doctor.png";
import inquiry from "../../../assets/About/add.png";
import right from "../../../assets/About/caret-right-white.png";
const About = () => {
  return (
    <div>
      <div
        className="page-banner mt-20"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://i.ibb.co/W2GjZv2/blurred-abstract-background-interior-view-looking-out-toward-empty-office-lobby-entrance-doors-glass.jpg')`,
          height: "350px",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "#fff",
          fontSize: "3rem",
          marginTop: "20px",
          backgroundBlendMode: "multiply",
        }}
      >
        <div className="page-banner__wrapper">
          <p className="page-banner__headline">About</p>
        </div>
      </div>
      <div className="quick-access mb-12">
        <div className="container">
          <div className=" flex items-center justify-center ">
            <div className="flex items-center justify-between bg-emerald-600 w-72 h-20 ">
              <div className="mx-3">
                <img className="w-7 h-9" src={doctor} alt="doctor" />
              </div>
              <div className="text-white">Find a Doctor</div>
              <div className="mx-3">
                <img className="w-3 h-5" src={right} alt="right" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-gray-600 w-72 h-20 ">
              <div className="mx-3 font-extrabold">
                <img className="w-7 h-9  font-extrabold" src={inquiry} alt="doctor" />
              </div>
              <div className="text-white">Send an Inquiry</div>
              <div className="mx-3">
                <img className="w-3 h-5" src={right} alt="right" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-emerald-600 w-72 h-20 ">
              <div className="mx-3">
                <img className="w-7 h-9" src={doctor} alt="doctor" />
              </div>
              <div className="text-white">Book Appointment</div>
              <div className="mx-3">
                <img className="w-3 h-5" src={right} alt="right" />
              </div>
            </div>
            <div className="flex items-center justify-between bg-emerald-600 w-72 h-20 ">
              <div className="mx-3">
                <img className="w-7 h-9" src={doctor} alt="doctor" />
              </div>
              <div className="text-white">Find a Doctor</div>
              <div className="mx-3">
                <img className="w-3 h-5" src={right} alt="right" />
              </div>
            </div>
            
          
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
