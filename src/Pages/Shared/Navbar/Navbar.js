import React, { useContext, useState } from "react";
import {
  FaArrowAltCircleLeft,
} from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider";

import Login from "../../Register/Login/Login";
import Popup from "../Popup";

import logo from "../../../assets/logo.png";
const Navbar = ({setToggle, toggle}) => {
  const { user, logOut } = useContext(AuthContext);
  const [openPopup, setOpenPopup] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="shadow-2xl bg-[#0C5D69] ">
        <div className="px-4 py-5 mx-auto  ">
          <div>
            <div className=" flex items-center justify-between">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="ml-1 text-xl font-bold tracking-wide text-zinc-50  uppercase name">
                  <img src={logo} className="w-32 h-10" alt=""></img>
                </span>
              </a>
              <div className="flex justify-center items-center gap-4">
                 <button onClick={handleLogOut} className='border-[1px]  lg:text-md md:text-sm sm:text-xs text-[#333333] rounded-sm shadow-md bg-[#E7F6F3] hover:text-[#294d52] hover:border-[#13A2B7] uppercase p-2  '>Logout</button>
                    <div className="flex justify-center items-center gap-2 cursor-pointer border-[1px] text-white border-white Uppercase p-1 rounded-md  shadow-lg md:hidden block"
                     onClick={() => {
                      setToggle(!toggle);
                    }}>
                        { toggle ? <h2>Open</h2> : <h2>Close</h2>}
                         <FaArrowAltCircleLeft
                          className={`${
                            toggle ? "rotate-180" : ""
                          } text-3xl  transition-all duration-300`}
                        />
                    </div>
                   
              </div>
              
            </div>
          </div>
        </div>
      </div>

      <Popup
        title="Login Form"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
      >
        <Login></Login>
      </Popup>
    </div>
  );
};

export default Navbar;
