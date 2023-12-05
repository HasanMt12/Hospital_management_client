import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import DoctorInHome from "./Doctor/DoctorInHome";

// import { CssBaseline } from "@material-ui/core";
import Carousel from "./Carousel/Carousel";
import DonationForm from "./Donate/DonationForm";
import WorkingFlow from "../WorkingFlow/WorkingFlow";
import useTitle from "../../hooks/useTitle";
import ChooseUs from "./WhyChooseUs/ChooseUs";
import ConsultingSpecialties from "./ConsultingSpecialties/ConsultingSpecialties";
import Testimonial from "./Testimonial/Testimonial";

// import Departments from './Department/Departments';

const Home = () => {
   useTitle('Home')
  return (
    <div>
     <Carousel></Carousel> 
      <ChooseUs></ChooseUs>
      <DoctorInHome></DoctorInHome>
      <ConsultingSpecialties></ConsultingSpecialties>
      <WorkingFlow></WorkingFlow>
      <Testimonial></Testimonial>
      <DonationForm></DonationForm>

      {/* <CssBaseline /> */}
      {/* <Departments/> */}
    </div>
  );
};

export default Home;
