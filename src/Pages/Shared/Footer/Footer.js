
import React from "react";

import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import AttachmentIcon from "@mui/icons-material/Attachment";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PrivacyTipIcon from "@mui/icons-material/PrivacyTip";
import AddLocationIcon from "@mui/icons-material/AddLocation";
import logo from '../../../assets/logo.png'


const Footer = () => {
  const footerInfos = [
    {
      name: "Our Offerings",
      offers: [
        "Classes and Events",
        "COVID-19 Info",
        "Virtual Care",
        "Doctor Directory",
        "Location Directory",
        "Specialties Directory",
        "MyBSWHealth Mobile App",
      ],
    },
    {
      name: "Tools and Resources",
      offers: [
        "Pay Your Bill",
        "Medical Records",
        "Insurance Accepted",
        "Financial Assistance",
        "Advance Directives",
        "Surgery Pre-Registration",
        "Contact Us",
      ],
    },
    {
      name: "About Us",
      offers: [
        "Mission Vision and Values",
        "Leadership",
        "Achievements",
        "Community Impact",
        "Provider Partner",
        "Quality Alliance",
        "Newsroom",
        "Blog",
      ],
    },
    {
      name: "Get Involved",
      offers: ["Volunteer", "Donate", "Give Blood"],
    },
    {
      name: "Our Offerings",
      offers: [
        "Classes and Events",
        "COVID-19 Info",
        "Virtual Care",
        "Doctor Directory",
        "Location Directory",
        "Specialties Directory",
        "MyBSWHealth Mobile App",
      ],
    },
    {
      name: "For Medical Professional",
      offers: [
        "Refer a Patient",
        "Careers",
        "Graduate Medical Education",
        "Undergraduate Education",
        "Allied Health Education",
        "Nursing Education",
        "Research Areas",
        "Clinical Trials",
      ],
    },
  ];
  return (
    <footer
      footer
      className="bg-gradient-to-r from-slate-700 via-slate-600 to-slate-600 shadow-lg rounded-2 text-white"
    >
      <div className="container p-6 mx-auto">
        <div className="lg:flex gap-10">
          <div className="w-full text-white lg:w-1/5">
            <div className="px-6">
              <div>
                <Link className="text-2xl font-bold ">
                  <img src={logo} alt=""></img>
                </Link>
              </div>

              <p className="max-w-sm mt-2">
                Join 31,000+ other and never miss out on new tips, tutorials,
                and more.
              </p>
            </div>
          </div>

          <div className="mt-6 lg:mt-0 lg:flex-1">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6">
              {footerInfos.map((footer) => (
                <div>
                  <h3 className="uppercase ">{footer?.name}</h3>
                  {footer.offers.map((offer) => (
                    <Link
                      href="#"
                      className="block mt-2 text-sm hover:underline"
                    >
                      {offer}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-between mt-24 ">
          <p>Stay Connected With us</p>
          <div>
            <FacebookIcon />
            <LinkedInIcon />
            <WhatsAppIcon />
          </div>
        </div>

        <hr className="h-px my-6 bg-gray-200 border-none" />

        <div className="flex justify-between items-center lg:flex-col xl:flex-row">
          <p className="text-center text-gray-400 ">
            © Brand 2020 - All rights reserved
          </p>
          <div className="">
            <div className="container flex items-center px-6 py-4 mx-auto overflow-x-auto whitespace-nowrap sm:flex-col xl:flex-row">
              <Link href="#" className="text-gray-400 ">
                <AttachmentIcon />
                <span className="mx-2">Terms of Use</span>
              </Link>

              <span className="mx-5 text-gray-500  rtl:-scale-x-100">
                <NavigateNextIcon />
              </span>
              <Link href="#" className="text-gray-400 ">
                <CalendarMonthIcon />
                <span className="mx-2">Notice of Non-Discrimination</span>
              </Link>

              <span className="mx-5 text-gray-400  rtl:-scale-x-100">
                <NavigateNextIcon />
              </span>
              <Link href="#" className="text-gray-400  ">
                <PrivacyTipIcon />
                <span className="mx-2">Privacy and Patient Rights</span>
              </Link>

              <span className="mx-5 text-gray-400  rtl:-scale-x-100">
                <NavigateNextIcon />
              </span>
              <Link href="#" className="text-gray-400 ">
                <AddLocationIcon />
                <span className="mx-2">Mohammdpur Dhaka</span>
              </Link>

              <span className="mx-5 text-gray-400 rtl:-scale-x-100">
                <NavigateNextIcon />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
