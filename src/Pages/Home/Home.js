import React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Services from "./Services/Services";
import DoctorInHome from "./Doctor/DoctorInHome";

// import { CssBaseline } from "@material-ui/core";
import Carousel from "./Carousel/Carousel";
import DonationForm from "./Donate/DonationForm";
import WorkingFlow from "../WorkingFlow/WorkingFlow";
import useTitle from "../../hooks/useTitle";

// import Departments from './Department/Departments';

const Home = () => {
   useTitle('Home')
  return (
    <div className="w-11/12 mx-auto ">
      <Carousel></Carousel>
      <Services></Services>
      <DoctorInHome></DoctorInHome>
      <WorkingFlow></WorkingFlow>
      <DonationForm></DonationForm>

      {/* <CssBaseline /> */}
      {/* <Departments/> */}
    </div>
  );
};

export default Home;
