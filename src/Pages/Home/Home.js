import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Services from './Services/Services';
import DoctorInHome from './Doctor/DoctorInHome';

// import { CssBaseline } from "@material-ui/core";
import Carousel from './Carousel/Carousel';
import DonationForm from './Donate/DonationForm';



// import Departments from './Department/Departments';




const Home = () => {
    return (

      <div className='w-11/12 mx-auto '>
        
        <Carousel></Carousel>
        <Services></Services>
        <DoctorInHome></DoctorInHome>
        <DonationForm></DonationForm>


        {/* <CssBaseline /> */}
        {/* <Departments/> */}
      </div>
    );
};

export default Home;
