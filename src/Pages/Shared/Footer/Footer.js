
import React from "react";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";
import { Link } from "react-router-dom";

import logo from '../../../assets/logo.png'

import './Footer.css'
const Footer = () => {
 
  return (
    <footer
      footer
      className=" bg-[#E7F6F3] shadow-lg rounded-2 text-white"
    >
      <div className="container p-6 mx-auto">
        <div className="">
          
          <div className="mt-6 lg:mt-0 px-20">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 ">
            <div>
                <div className="">
                  <img
                    className="img-fluid bg-[#13A2B7]/75 p-1 rounded-sm shadow-lg"
                    src={logo}
                    alt="doctor Planet"
                  />
                </div>
                <div className="footer-text text-[#333333]">
                  <h2>Newsletter</h2>
                 
                </div>
                <div className="footer-form">
                  <form>
                    <div className="form-cover d-flex justify-content-between ">
                      <input
                        type="email"
                        className="border-[#13A2B7] border-[1px]"
                      placeholder="Email Adress"
                      />

                      <button type="submit" value="sign up">
                        <FaPaperPlane  />
                      </button>
                    </div>
                  </form>
                </div>
             </div>
             <div className="lg:px-20 md:px-10 px-0 ml-2">
               <div className="footer-menu-heading ">
              <h3 className="text-[#0C5D69] text-lg">Useful Links</h3>
            </div>
            <ul className="footer-menu">
              <Link className="footer-item" to="/about">
                About Us
              </Link>
              <Link className="footer-item" to="/appointment">
                Appointment
              </Link>
              <Link className="footer-item" to="/Service">
                Service
              </Link>
              <Link className="footer-item" to="/contact">
                Contact Us
              </Link>
              <Link className="footer-item" to="/adminLogin">
                Admin Login
              </Link>
            </ul>
             </div>

           
             <div>
                <div className="footer-menu-heading">
                <h3 className="text-[#0C5D69] text-lg">Working Day</h3>
              </div>
                <ul className="working">
                  <li>
                    <span>Weekdays</span>
                    <span>9:00 - 20:00</span>
                  </li>
                  <li>
                    <span>Friday</span>
                    <span>9:00 - 20:00</span>
                  </li>
                  <li>
                    <span>Saturday</span>
                    <span>10:00 - 18:00</span>
                  </li>
                  <li>
                    <span>Sunday</span>
                    <span>Closed</span>
                  </li>
                </ul>
             </div>
             
              <div className=" lg:ml-10 md:ml-6 ml-0">
               <div className="footer-menu-heading">
              <h3 className="text-[#0C5D69] text-lg">Reach Us</h3>
            </div>
            <ul className="reach-us">
              <li className="flex justify-start items-center">
                <FaPhone className="text-[#13A2B7]" />
                <a rel="noreferrer" target="_blank" href="tell:01629094984">
                  {" "}
                  
                  +8801602848424
                </a>
              </li>
              <li className="flex justify-start items-center">
                <FaEnvelope className="text-[#13A2B7]" />
                <a
                  rel="noreferrer"
                  target="_blank"
                  href="mailto:support@gmail.com"
                >
                  
                  support@gmail.com
                </a>
              </li>
              <li className="flex justify-start items-center">
                {" "}
                <FaMapMarkerAlt className="text-[#13A2B7]" />
                <h2>Azimpur, Dhaka</h2>
              </li>
              <li className="flex justify-start items-center gap-4">
                <a
                  href="https://www.facebook.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaFacebookF className="text-[#121C1D]" />
                </a>
                <a
                  href="https://www.twitter.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  <FaTwitter className="text-[#121C1D]" />
                </a>
                <a
                  href="https://www.instagram.com/"
                  rel="noreferrer"
                  target="_blank"
                >
                  {" "}
                  <FaInstagram className="text-[#121C1D]" />
                </a>
              </li>
            </ul>
            </div>
            </div>
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-600 border-none" />
          <p className="text-center  text-[#333333]">
            © Brand 2020 - All rights reserved <span className="text-[#13A2B7]"></span>
          </p>
      </div>
    </footer>
  );
};

export default Footer;
