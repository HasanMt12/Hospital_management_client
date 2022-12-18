import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Services from './Services/Services';
import DoctorInHome from './Doctor/DoctorInHome';

// import { CssBaseline } from "@material-ui/core";
import Carousel from './Carousel/Carousel';
import DonationForm from './Donate/DonationForm';



const Home = () => {
    return (
<<<<<<< HEAD
      <div>
        {/* <h1>this is home</h1> */}


        <Carousel></Carousel>
        <Services></Services>
        <DonationForm></DonationForm>
        {/* <CssBaseline /> */}
      </div>
=======
        <div>
  
            <Carousel></Carousel>
            <Services></Services>

             <DoctorInHome></DoctorInHome>

            <DonationForm></DonationForm>
           
            {/* <CssBaseline /> */}

        </div>
>>>>>>> main
    );
};

export default Home;