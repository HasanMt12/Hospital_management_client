import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Services from './Services/Services';

// import { CssBaseline } from "@material-ui/core";
import Carousel from './Carousel/Carousel';
import DonationForm from './Donate/DonationForm';



const Home = () => {
    return (
      <div>
        {/* <h1>this is home</h1> */}


        <Carousel></Carousel>
        <Services></Services>
        <DonationForm></DonationForm>
        {/* <CssBaseline /> */}
      </div>
    );
};

export default Home;