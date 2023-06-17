import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import logo from "../../assets/kisspng-physician-hospital-dr-mary-c-kirk-md-doctor-of-the-doctor-5ac2fc7fa9d6a9.2013332815227280636957.png";
import {
  FaUserMd,
  FaUsers,
  FaMoneyCheckAlt,
  FaHome,
  FaAmericanSignLanguageInterpreting,
  FaBook,
  FaArrowAltCircleLeft,
  FaSign,
} from "react-icons/fa";
import { FcManager } from "react-icons/fc";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { FcBusinessman } from "react-icons/fc";
import Header from "../../Pages/Shared/Header/Header";
import useAdmin from "../../hooks/useAdminSecurity";
import { useContext } from "react";
import { AuthContext } from "../../contexts/AuthProvider";
import useDoctor from "../../hooks/useDoctorsSecurity";
import useNurse from "../../hooks/userNurseSecurity";
import { MdPeopleAlt } from "react-icons/md";
import useTitle from "../../hooks/useTitle";
import Navbar from '../../Pages/Shared/Navbar/Navbar'
const DashbordLayoutes = () => {
  useTitle('Dashboard')
  const {user}= useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)
  const [isNurse] = useNurse(user?.email)
  const [isDoctor] = useDoctor(user?.email)
  const [toggle, setToggle] = useState(false);
console.log(user);
  return (
    <div>
      
      {/* <Header></Header> */}
<Navbar></Navbar>
      <div className="flex flex-no-wrap mt-2">
        {/* Sidebar starts */}
        {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}

        <div

          className={`w-66 ml-1  sm:relative rounded-2xl border-t-8 border-teal-200 border-2 shadow-lg md:h-full flex-col justify-between  mt-10 md:block 

             ${
            toggle ? "hidden" : ""
          } sidebar-container `}
        >
          <div className="px-8 ">
            <div className="flex   bg-white my-8 rounded-2xl px-1 gap-1 border-teal-300 border-2 py-2 border- shadow-sm">
              <div className=" w-12 ">
              {user?.uid ? (
                      <img 
                      className="w-10 h-10 rounded-full object-cover"
                        src="https://i.ibb.co/vDSqbpj/img2.jpg"
                        alt=""
                      />
                    ) : (
                     
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 "
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>
                    )}
              </div>
              <div className="mt-2  font-bold ">{user?.displayName}</div>
            </div>
            <ul className="mt-12">

        {/* //admin routes */}
              {isAdmin && <>


              <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center text-2xl  p-2  rounded-xl  ">
                  <MdPeopleAlt className=""></MdPeopleAlt>
                  <Link to="/dashboard/users">
                    <h2 className="text-sm font-bold text-teal-900  ml-2">ALL USERS</h2>
                  </Link>
                </div>
              </li>

               <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center text-2xl  p-2  rounded-xl  ">
                  <FcBusinessman className=""></FcBusinessman>
                  <Link to="/dashboard/addDoctors">
                    <h2 className="text-sm font-bold text-teal-900  ml-2">ADD DOCTOR</h2>
                  </Link>
                </div>
              </li>


              <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">

                <div className="flex items-center text-xl p-2  rounded-xl ">
                  <MdOutlineNotificationsActive></MdOutlineNotificationsActive>
                  <Link to="/dashboard/addStuff">
                    <span className="text-sm font-bold text-teal-900 ml-2">ADD STUFFS </span>
                  </Link>
                </div>
              </li>

              <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center p-2">
                  <FcManager />

                  <Link to="/dashboard/manageDoctors">
                    <span className="text-sm font-bold text-teal-900 ml-2"> MANAGE DR.</span>
                  </Link>
                </div>
              </li>

               <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center p-2">
                  <MdOutlineNotificationsActive />

                  <Link to="/dashboard/notice">
                    <span className="text-sm font-bold text-teal-900 ml-2"> ADD Notice</span>
                  </Link>
                </div>
              </li>
                <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center p-2">
                  <FaAmericanSignLanguageInterpreting />

                  <Link to="/dashboard/manageStuff">
                    <span className="text-sm font-bold text-teal-900 ml-2"> Manage Stuff</span>
                  </Link>
                </div>
              </li>
              
                <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center p-2">
                  <FaAmericanSignLanguageInterpreting />

                  <Link to="/dashboard/manageStuff">
                    <span className="text-sm font-bold text-teal-900 ml-2"> Manage Stuff</span>
                  </Link>
                </div>
              </li>


              </>
              }
              

              {isDoctor && <>
              
               <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center p-2">
                  <FaAmericanSignLanguageInterpreting />

                  <Link to="/dashboard/manageDoctors">
                    <span className="text-sm font-bold text-teal-900 ml-2"> MANAGE DR.</span>
                  </Link>
                </div>
              </li>

               <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center p-2">
                  <FaAmericanSignLanguageInterpreting />

                  <Link to="/dashboard/allAppointment">
                    <span className="text-sm font-bold text-teal-900 ml-2"> All Appointment.</span>
                  </Link>
                </div>
              </li>

              
              </>
              }

              { isNurse && <>
              
               <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center p-2">
                  <FaAmericanSignLanguageInterpreting />

                  <Link to="/dashboard/workingSchedule">
                    <span className="text-sm font-bold text-teal-900 ml-2"> Working Schedule</span>
                  </Link>
                </div>
              </li>
              </>}

              <li className="flex w-full justify-between text-teal-700  cursor-pointer items-center mb-6 hover:shadow-xl hover:border-t-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 hover:border-teal-200">
                <div className="flex items-center p-2">
                  <FaAmericanSignLanguageInterpreting />

                  <Link to="/dashboard/appointmentById">
                    <span className="text-sm font-bold text-teal-900 ml-2">Your Appointment.</span>
                  </Link>
                </div>
              </li>
             

            </ul>
            <div className="flex justify-center rounded border border-teal-600 mt-48 mb-4 w-full">
              <div className="relative ">
                <div className="text-gray-500  absolute ml-4 inset-0 m-auto w-4 h-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-search"
                    width={16}
                    height={16}
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <circle cx={10} cy={10} r={7} />
                    <line x1={21} y1={21} x2={15} y2={15} />
                  </svg>
                </div>
                <input
                  className=" focus:outline-none rounded w-full text-sm text-teal-900 bg-gray-100 pl-10 py-2"
                  type="text"
                  placeholder="Search"
                />
              </div>
            </div>
          </div>
          <div className="px-8 border-t border-gray-700">
            <ul className="w-full flex items-center justify-between ">
              <li className="cursor-pointer text-teal-700 pt-5 pb-3">
                <FaSign />
              </li>
              <li className="cursor-pointer text-teal-700 pt-5 pb-3">
                <FaHome />
              </li>

              <li className="cursor-pointer text-teal-700 pt-5 pb-3">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="icon icon-tabler icon-tabler-archive"
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <rect x={3} y={4} width={18} height={4} rx={2} />
                  <path d="M5 8v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-10" />
                  <line x1={10} y1={12} x2={14} y2={12} />
                </svg>
              </li>
            </ul>
          </div>
        </div>

        {/* Sidebar ends */}
        {/* Remove class [ h-64 ] when adding a card block */}
        <div className="container mx-auto  py-10 h-96 md:w-4/5 w-11/12 px-6">
          {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}

          <div className="container mx-auto hidden lg:block ">
            <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
              <div className="w-full px-4 py-5 bg-white rounded-lg shadow-lg  border-x-8 border-teal-200   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300   ">
                <div className="text-sm font-medium text-gray-500 truncate    ">
                  Total Doctors
                </div>
                <div className="mt-1 text-3xl font-semibold text-teal-900">
                  450
                </div>
              </div>
              <div className="w-full px-4 py-5 bg-white rounded-lg  shadow-lg  border-x-8 border-teal-200   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total Nurse
                </div>
                <div className="mt-1 text-3xl font-semibold text-teal-900">
                  1000
                </div>
              </div>
              <div className="w-full px-4 py-5 bg-white rounded-lg shadow-lg  border-x-8 border-teal-200   transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110  duration-300 ">
                <div className="text-sm font-medium text-gray-500 truncate">
                  Total Stuff
                </div>
                <div className="mt-1 text-3xl font-semibold text-teal-900">
                  320
                </div>
              </div>
            </div>
          </div>

          <div
            className="absolute md:hidden block  left-16 top-24 w-10 h-10 bg-glass rounded-full cursor-pointer"
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Open{" "}
            <FaArrowAltCircleLeft
              className={`${
                toggle ? "rotate-180" : ""
              } text-3xl  transition-all duration-300`}
            />
          </div>
          <div

            className={`w-full h-full rounded  `}

          >
            <Outlet></Outlet>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashbordLayoutes;
