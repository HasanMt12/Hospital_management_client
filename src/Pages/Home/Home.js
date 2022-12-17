import React from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Services from './Services/Services';
import DoctorInHome from './Doctor/DoctorInHome';

const Home = () => {
    return (
        <div>
            <h1>this is home</h1>
            <Services></Services>
            <DoctorInHome></DoctorInHome>
        </div>
    );
};

export default Home;