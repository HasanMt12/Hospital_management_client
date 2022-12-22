import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import SideBar from '../Pages/Shared/SideBar/SideBar';

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            {/* <SideBar></SideBar> */}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;