import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import Navbar from '../Pages/Shared/Navbar/Navbar';


const Main = () => {
    return (
        <div>

            {/* <Navbar></Navbar> */}
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;