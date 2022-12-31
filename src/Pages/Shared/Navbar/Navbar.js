import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../../../contexts/AuthProvider";

import Login from "../../Register/Login/Login";
import Popup from "../Popup";

import logo from "../../../assets/logo.png";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, logOut } = useContext(AuthContext);
  const [openPopup, setOpenPopup] = useState(false);

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };

  return (
    <div className="">
      <div className="shadow-2xl bg-gradient-to-r from-teal-500 via-teal-500 to-teal-600 ">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
          <div>
            <div className="relative flex items-center justify-between">
              <a
                href="/"
                aria-label="Company"
                title="Company"
                className="inline-flex items-center"
              >
                <span className="ml-1 text-xl font-bold tracking-wide text-zinc-50  uppercase name">
                  <img src={logo} alt=""></img>
                </span>
              </a>

              <ul className="flex items-center hidden   space-x-8 lg:flex">
                <li className="name">
                  <Link to="/">Home</Link>
                </li>
                <li className="name">
                  <Link to="/services">Services</Link>
                </li>
                <li className="name">
                  <Link to="/doctors">Doctors</Link>
                </li>
                <li className="name">
                  <Link to="/blogs">Blogs</Link>
                </li>

                {user?.uid ? (
                  <>
                    <li className="name">
                      <Link to="/dashboard">Dashboard</Link>
                    </li>
                    <li className="name">
                      <Link onClick={handleLogOut}>logout</Link>
                    </li>
                  </>
                ) : (
                  <li onClick={() => setOpenPopup(true)} className="name">
                    <Link>Login</Link>
                  </li>
                )}
              </ul>

              <div className="lg:hidden">
                <button
                  aria-label="Open Menu"
                  title="Open Menu"
                  className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                  onClick={() => setIsMenuOpen(true)}
                >
                  <svg className="w-5 text-zinc-50" viewBox="0 0 24 24">
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
                  <div className="absolute z-10 top-0 left-0 w-full">
                    <div className="p-5 bg-teal-600 border rounded shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <div>
                          <a
                            href="/"
                            aria-label="Company"
                            title="Company"
                            className="inline-flex items-center"
                          >
                            <span className="ml-2 text-xl font-bold tracking-wide text-zinc-50 uppercase">
                              Doctor's Planet
                            </span>
                          </a>
                        </div>
                        <div>
                          <button
                            aria-label="Close Menu"
                            title="Close Menu"
                            className="p-2 -mt-2   -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            <svg
                              className="w-5 text-gray-600"
                              viewBox="0 0 24 24"
                            >
                              <path
                                fill="currentColor"
                                d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                              />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <nav>
                        <ul className="space-y-4 text-gray-100 font-bold  ">
                          <li className="name">
                            <Link to="/">Home</Link>
                          </li>
                          <li className="name">
                            <Link to="/services">Services</Link>
                          </li>
                          <li className="name">
                            <Link to="/doctors">Doctors</Link>
                          </li>
                          <li className="name">
                            <Link to="/blogs">Blogs</Link>
                          </li>

                          {user?.uid ? (
                            <>
                              <li className="name">
                                <Link to="/dashboard">Dashboard</Link>
                              </li>
                              <li className="name">
                                <Link onClick={handleLogOut}>log out</Link>
                              </li>
                            </>
                          ) : (
                            <li
                              onClick={() => setOpenPopup(true)}
                              className="name"
                            >
                              <Link>Login</Link>
                            </li>
                          )}
                        </ul>
                      </nav>
                    </div>
                  </div>
                )}
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
