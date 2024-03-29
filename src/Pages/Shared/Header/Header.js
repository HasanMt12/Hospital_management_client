import React, { useContext, useState } from "react";
import { Link , NavLink } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";
import { AuthContext } from "../../../contexts/AuthProvider";
// import { ThemeContext, themes } from "../../../contexts/ThemeContext";
import Login from "../../Register/Login/Login";
import Modal from "../Modal";
import Popup from "../Popup";
// import "./navbar.css";

import logo from "../../../assets/logo.png";
import SignUp from "../../Register/SignUp/SignUp";
import "./Header.css";
import {
  TbUserPlus,
  
  TbLayoutDashboard,
} from "react-icons/tb";
import {
  FaSignInAlt,
  FaRegUserCircle,
  FaAngleDown,
  FaAngleUp,
} from "react-icons/fa";
import { useRef } from "react";
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [logmenu, setLogmenu] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [openPopup, setOpenPopup] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [userOpen, setUserOpen] = useState(false);
  const userMenuRef = useRef(null)
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div>
      {/* upper nav item */}
      <div className="shadow-2xl bg-[#0C5D69] transparent">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-6 lg:px-8 ">
        
          <div className="relative flex items-center justify-between">
            <Link
              to="/"
              aria-label="Company"
              title="Company"
              className="inline-flex items-center "
            >
              <img src={logo} alt=""></img>
            </Link>
            <div>
              <div className="relative mt-4 lg:mt-0 lg:mx-4 lg:block md:block hidden">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-4 h-4 sm:text-white lg:text-gray-600 dark:text-gray-300"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </svg>
                </span>

                <input
                  type="text"
                  className="sm:hidden lg:block rounded-full w-full py-1 pl-10 pr-4 text-gray-700 placeholder-gray-600 bg-white border-b border-gray-600 lg:w-56 lg:border-transparent focus:outline-none focus:border-gray-600"
                  placeholder="Search"
                />
              </div>
            </div>

          
              <li className=" text-gray-50">
                <Link to="/noticeShow">
                  <IoNotifications></IoNotifications>{" "}
                </Link>
              </li>
          
            <div className="cursor-pointer relative">
        <div
          ref={userMenuRef}
          onClick={() => setUserOpen((prevUserOpen) => !prevUserOpen)}
          className="flex items-center gap-2 "
        >
           {user?.uid ? (
                      <img 
                      className="w-8 h-8 rounded-full object-cover cursor-pointer"
                        src="https://i.pinimg.com/474x/ec/7f/95/ec7f9575d98970b8ea32beca3e802ea3.jpg"
                        alt=""
                      />
                    ) : (
                     
                      <TbUserPlus className="text-2xl text-white relative " />
                    )}
          {userOpen ? <FaAngleUp className="text-white"/> : <FaAngleDown className="text-white"/>}
        </div>
        <ul
          className={` duration-700 ease-in-out border-2 border-green font-bold text-[#0E7D87] bg-white absolute right-0 px-4 py-2 space-y-4 ${
            !userOpen ? " z-0 opacity-0 pointer-events-none	" : "  z-50 "
          }`}
        >
          {user?.uid?(
            <>
            <li>
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                `text-sm font-bold flex items-center gap-2 ${
                  isActive ? "text-brown" : "text-green"
                }`
              }
            >
              <TbLayoutDashboard /> Dashboard
            </NavLink>
          </li>
          <li  onClick={handleLogOut} className="flex items-center gap-2">
            <FaSignInAlt />
           Logout
          </li>
            </>
          ):(<>
          <li  onClick={() => setOpenPopup(true)} className="flex items-center gap-2">
            <FaSignInAlt />
           Login
          </li>
          <li onClick={() => setOpenModal(true)} className="flex items-center gap-2">
            <FaRegUserCircle />
            <span>Register</span>
          </li>
          </>)}
          
          
        </ul>
      </div>

            {/* for small device */}

            <div className="xl:hidden">
              <button
                aria-label="Open Menu"
                title="Open Menu"
                className="p-2 -mr-1 transition duration-300 rounded focus:outline-none focus:shadow-outline"
                onClick={() => setIsMenuOpen(true)}
              >
                <svg className="w-5 text-white" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                  />
                  <path
                    fill="currentColor"
                    d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                  />
                </svg>
              </button>

              {isMenuOpen && (
                <div className="absolute z-30 top-0 left-0 w-full bg-[#0E7D87]">
                  <div className="p-5  border rounded shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <Link
                          href="/"
                          aria-label="Company"
                          title="Company"
                          className="inline-flex items-center"
                        >
                          <img src={logo} alt=""></img>
                        </Link>
                      </div>
                      <div>
                        <button
                          aria-label="Close Menu"
                          title="Close Menu"
                          className="p-2 -mt-2   -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <svg className="w-5 text-white" viewBox="0 0 24 24">
                            <path
                              fill="currentColor"
                              d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <nav>
                      <div className=" text-sm ">
                        <nav
                          aria-label="Main Nav"
                          className="flex flex-col space-y-1 text-white"
                        >
                          <div className="">
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                  <Link to="/about"> About Us</Link>
                                </span>

                                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </summary>

                              <nav
                                aria-label="Users Nav"
                                className="flex flex-col mt-2 ml-8 space-y-1"
                              >
                                <Link
                                  to="/about"
                                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                  About Us
                                </Link>

                                <Link
                                  to="/missionvission"
                                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Mission & Vission
                                </Link>
                              </nav>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                  {" "}
                                  Patient Services{" "}
                                </span>

                                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </summary>

                              <nav
                                aria-label="Account Nav"
                                className="flex flex-col mt-2 ml-8 space-y-1"
                              >
                                <Link
                                  to="/services"
                                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Patient Services Overview
                                </Link>

                                <Link
                                  to="/acceptinsurance"
                                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Insurance We Accept
                                </Link>
                                
                              </nav>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                  {" "}
                                  Medical Travel{" "}
                                </span>

                                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </summary>

                              <nav
                                aria-label="Account Nav"
                                className="flex flex-col mt-2 ml-8 space-y-1"
                              >
                                <Link
                                  to="/medicalGuide"
                                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Medical Travel Guides
                                </Link>

                                <Link
                                  to="/medicalTourism"
                                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Medical Tourism
                                </Link>
                              </nav>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                  Insurance
                                </span>

                                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </summary>

                              <nav
                                aria-label="Account Nav"
                                className="flex flex-col mt-2 ml-8 space-y-1"
                              >
                                <Link
                                  to="/acceptinsurance"
                                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Insurance We Accept
                                </Link>

                             
                              </nav>
                            </details>
                            <details className="group [&_summary::-webkit-details-marker]:hidden">
                              <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                                <span className="text-sm font-medium">
                                  {" "}
                                  Contact Us{" "}
                                </span>

                                <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-5 h-5"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                  >
                                    <path
                                      fillRule="evenodd"
                                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                      clipRule="evenodd"
                                    />
                                  </svg>
                                </span>
                              </summary>

                              <nav
                                aria-label="Account Nav"
                                className="flex flex-col mt-2 ml-8 space-y-1"
                              >
                                <Link className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700">
                                  Hospital Contact Information
                                </Link>

                                <Link
                                  to="ambulanceService"
                                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                                >
                                  Ambulance
                                </Link>
                              </nav>
                            </details>
                          </div>
                          <div className="">
                            <Link
                              to="/doctors"
                              className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                              Doctors
                            </Link>

                            <Link
                              to="/services"
                              className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                              Book Appointment
                            </Link>
                            <Link
                              to="/blogs"
                              className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                            >
                              Blogs
                            </Link>
                            <Link TO="/bloodDonar" className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700">
                              Blood Donar
                            </Link>
                          </div>
                        </nav>
                      </div>
                    </nav>
                  </div>
                </div>
              )}
            </div>
          </div>
          <hr className="my-5  sm:hidden xl:block" />

          {/* down navbar item */}
          <div className=" text-sm hidden md:block">
            <nav
              aria-label="Main Nav"
              className="flex flex-col space-y-1 text-white"
            >
              <div className="flex  justify-between mb-5">
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium">
                      {" "}
                      <Link>About Us</Link>{" "}
                    </span>

                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav
                    aria-label="Users Nav"
                    className="flex flex-col mt-2 ml-8 space-y-1"
                  >
                    <Link
                      to="/about"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      About Us
                    </Link>

                    <Link
                      to="/missionvission"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Mission & Vission
                    </Link>
                  </nav>
                </details>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium">
                      {" "}
                      Patient Services{" "}
                    </span>

                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav
                    aria-label="Account Nav"
                    className="flex flex-col mt-2 ml-8 space-y-1"
                  >
                    <Link
                      to="/services"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Patient Services Overview
                    </Link>

                    <Link
                      to="/acceptinsurance"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Insurance We Accept
                    </Link>
                    
                  </nav>
                </details>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium">
                      {" "}
                      Medical Travel{" "}
                    </span>

                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav
                    aria-label="Account Nav"
                    className="flex flex-col mt-2 ml-8 space-y-1"
                  >
                    <Link
                      to="/medicalGuide"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Medical Travel Guides
                    </Link>

                    <Link
                      to="/medicalTourism"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Medical Tourism
                    </Link>
                  </nav>
                </details>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Insurance </span>

                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav
                    aria-label="Account Nav"
                    className="flex flex-col mt-2 ml-8 space-y-1"
                  >
                    <Link
                      to="/acceptinsurance"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Insurance We Accept
                    </Link>
                  </nav>
                </details>
                <details className="group [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex items-center px-4 py-2  rounded-lg cursor-pointer hover:bg-gray-100 hover:text-gray-700">
                    <span className="text-sm font-medium"> Contact Us </span>

                    <span className="ml-auto transition duration-300 shrink-0 group-open:-rotate-180">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </summary>

                  <nav
                    aria-label="Account Nav"
                    className="flex flex-col mt-2 ml-8 space-y-1"
                  >
                    <Link
                      to="/contact"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Hospital Contact Information
                    </Link>
                    <Link
                      to="ambulanceService"
                      className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    >
                      Ambulance
                    </Link>
                  </nav>
                </details>

              </div>
              <hr />
              <div className="flex justify-between mt-5">
                <Link
                  to="/doctors"
                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Doctors
                </Link>

                <Link
                  to="/services"
                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Book Appointment
                </Link>
                <Link
                  to="/blogs"
                  className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                >
                  Blogs
                </Link>
                <Link to="bloodDonar" className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700">
                  Blood Donar
                </Link>
                {user?.uid && (
                  <Link
                    className="block px-4 py-2 text-sm font-medium  rounded-lg hover:bg-gray-100 hover:text-gray-700"
                    to="/dashboard"
                  >
                    Dashboard
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* login */}
      <Popup
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Login closePopup={setOpenPopup} openModal={setOpenModal}></Login>
      </Popup>

      {/* signup */}
      <Modal className="min-h-[90dvh] p-0"
        openModal={openModal}
        setOpenModal={setOpenModal}
      >
        <SignUp closePopup={setOpenModal} closeLogin={setOpenPopup}></SignUp>
      </Modal>
    </div>
  );
};

export default Header;
