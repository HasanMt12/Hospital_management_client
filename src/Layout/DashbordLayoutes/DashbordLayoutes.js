import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import logo from "../../assets/kisspng-physician-hospital-dr-mary-c-kirk-md-doctor-of-the-doctor-5ac2fc7fa9d6a9.2013332815227280636957.png"
import { FaUserMd, FaUsers, FaMoneyCheckAlt, FaHome, FaAmericanSignLanguageInterpreting, FaBook, FaArrowAltCircleLeft, FaSign } from 'react-icons/fa';
import NavBar from '../../Pages/Shared/Navbar/Navbar';


const DashbordLayoutes = () => {

    const [toggle, setToggle] = useState(false)


    return (
        <div>

            <NavBar />



            <div className="flex flex-no-wrap mt-20">
                {/* Sidebar starts */}
                {/* Remove class [ hidden ] and replace [ sm:flex ] with [ flex ] */}


                <div className={`w-66  sm:relative rounded-2xl bg-blue-500 shadow md:h-full flex-col justify-between  mt-10 md:block    ${toggle ? "hidden" : ""} sidebar-container `}>
                    <div className="px-8 ">
                        <div className='flex left-3  bg-white my-8 rounded-2xl p-1 gap-1'>
                            <div className=' w-12 '>
                                <img src={logo} alt="" />
                            </div>
                            <div className='mt-5 font-bold '>
                                DASHBOARD
                            </div>
                        </div>
                        <ul className="mt-12">
                            <li className="flex w-full justify-between text-black  hover:shadow-2xl cursor-pointer items-center mb-6">
                                <div className="flex items-center text-2xl  p-2  rounded-xl hover:bg-slate-200 ">
                                    <FaUsers></FaUsers>
                                    <Link to="/dashboard/users">
                                        <h2 className="text-sm font-bold  ml-2">
                                            ALL USERS
                                        </h2>
                                    </Link>
                                </div>
                            </li>

                            <li className="flex w-full justify-between text-black hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center text-2xl p-2  rounded-xl hover:bg-slate-200">
                                    <  FaUserMd></FaUserMd>
                                    <Link to="/dashboard/addDoctors">
                                        <span className="text-sm font-bold ml-2">ADD DOCTOR </span>
                                    </Link>
                                </div>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-gray-500 cursor-pointer items-center mb-6  font-bold text-2xl p-2  rounded-xl hover:bg-slate-200">
                                <div className="flex items-center">
                                    < FaAmericanSignLanguageInterpreting />

                                    <Link to="/dashbord/managedoctors">
                                        <span className="text-sm  ml-2"> MANAGE DR.</span>
                                    </Link>
                                </div>
                            </li>
                            <li className="flex w-full justify-between text-black font-bold hover:text-gray-500 cursor-pointer items-center mb-6">
                                <div className="flex items-center text-2xl p-2  rounded-xl hover:bg-slate-200">
                                    <FaMoneyCheckAlt />
                                    <span className="text-sm  ml-2"> INSURENCE </span>
                                </div>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-gray-500 cursor-pointer items-center mb-6 text-2xl font-bold">
                                <div className="flex items-center text-2xl p-2  rounded-xl hover:bg-slate-200">
                                    <FaHome></FaHome>
                                    <span className="text-sm  ml-2"> EXTRAA</span>
                                </div>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-gray-500 cursor-pointer items-center mb-6 font-bold p-2  rounded-xl hover:bg-slate-200">
                                <div className="flex items-center">
                                    <FaBook />
                                    <span className="text-sm  ml-2">INSURENCE</span>
                                </div>
                            </li>
                            <li className="flex w-full justify-between text-black hover:text-gray-500 cursor-pointer items-center font-bold">
                                <div className="flex items-center text-2xl p-2  rounded-xl hover:bg-slate-200">
                                    <FaHome></FaHome>
                                    <span className="text-sm  ml-2">EXTRAA?</span>
                                </div>
                            </li>
                        </ul>
                        <div className="flex justify-center mt-48 mb-4 w-full">
                            <div className="relative ">
                                <div className="text-gray-500 absolute ml-4 inset-0 m-auto w-4 h-4">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-search" width={16} height={16} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                        <path stroke="none" d="M0 0h24v24H0z" />
                                        <circle cx={10} cy={10} r={7} />
                                        <line x1={21} y1={21} x2={15} y2={15} />
                                    </svg>
                                </div>
                                <input className=" focus:outline-none rounded w-full text-sm text-gray-500 bg-gray-100 pl-10 py-2" type="text" placeholder="Search" />
                            </div>
                        </div>
                    </div>
                    <div className="px-8 border-t border-gray-700">
                        <ul className="w-full flex items-center justify-between bg-gray-800">
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <FaSign />
                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <FaHome />

                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3">

                            </li>
                            <li className="cursor-pointer text-white pt-5 pb-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-archive" width={20} height={20} viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
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
                <div className="container mx-auto py-10 h-96 md:w-4/5 w-11/12 px-6">
                    {/* Remove class [ border-dashed border-2 border-gray-300 ] to remove dotted border */}

                    <div className="container mx-auto hidden lg:block ">
                        <div className="grid grid-cols-1 gap-6 mb-6 lg:grid-cols-3">
                            <div className="w-full px-4 py-5 bg-white rounded-lg shadow     transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300 ...            "  >
                                <div className="text-sm font-medium text-gray-500 truncate    ">
                                    Total users
                                </div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">
                                    12,00
                                </div>
                            </div>
                            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                                <div className="text-sm font-medium text-gray-500 truncate">
                                    Total Profit
                                </div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">
                                    $ 450k
                                </div>
                            </div>
                            <div className="w-full px-4 py-5 bg-white rounded-lg shadow">
                                <div className="text-sm font-medium text-gray-500 truncate">
                                    Total Orders
                                </div>
                                <div className="mt-1 text-3xl font-semibold text-gray-900">
                                    20k
                                </div>
                            </div>
                        </div>
                    </div>

                    <div
                        className="absolute md:hidden block  left-24 top-12 w-10 h-10 bg-glass rounded-full cursor-pointer"
                        onClick={() => {
                            setToggle(!toggle);
                        }}
                    >
                        Open  <FaArrowAltCircleLeft
                            className={`${toggle ? "rotate-180" : ""
                                } text-3xl transition-all duration-300`}
                        />
                    </div>
                    <div className={`w-full h-full rounded border-dashed border-2 border-gray-300    `}>
                        <Outlet></Outlet>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashbordLayoutes;