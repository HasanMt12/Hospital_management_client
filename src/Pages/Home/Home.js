import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Services from './Services/Services';
import DoctorInHome from './Doctor/DoctorInHome';

// import { CssBaseline } from "@material-ui/core";
import Carousel from './Carousel/Carousel';
import DonationForm from './Donate/DonationForm';
import Login from '../Register/Login/Login';
import SignUp from '../Register/SignUp/SignUp';



const Home = () => {
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
             <DoctorInHome></DoctorInHome>
           
            <DonationForm></DonationForm>
            
            {/* <CssBaseline /> */}
        </div>

    );
};

export default Home;
