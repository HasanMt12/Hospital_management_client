import React from "react";
import Tooltip from "@mui/material/Tooltip";
import { IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import DialerSipIcon from "@mui/icons-material/DialerSip";
import VaccinesIcon from "@mui/icons-material/Vaccines";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import { useState } from "react";
import BookAppointmentModal from "../Shared/BookAppointmentModal";
import { Link } from "react-router-dom";

const ServiceCard = ({ treatment }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { picture, balance, name, doctorName,_id } = treatment;
  console.log(treatment)
  return (
    <div>
      <div className="block rounded-lg p-4 shadow-xl shadow-teal-100 md:max-w-[350px] mx-auto">
        <img
          alt="Home"
          src={picture}
          className="h-56 w-full rounded-md object-cover"
        />

        <div className="mt-2">
          <dl>
            <div>
              <dt className="sr-only">Price</dt>

              <dd className="text-sm text-gray-500">${balance}</dd>
            </div>

            <div>
              <dt className="sr-only">Name</dt>

              <dd className="font-medium">{name}</dd>
            </div>
          </dl>

          <div className="mt-6 grid grid-cols-2 gap-8 text-xs  ">
            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <VaccinesIcon className="text-sm  text-teal-700" />

              <div className="mt-1.5 sm:ml-3 sm:mt-0">
                <p className="text-gray-500">Doctor</p>

                <p className="font-medium">{doctorName}</p>
              </div>
            </div>
            <Link to={`/departments/treatments/${_id}`}>
              <div className="sm:inline-flex sm:shrink-0 sm:items-center hover:shadow-lg p-2 rounded-md">
                <RemoveRedEyeIcon className="text-base text-teal-700" />

                <div className="mt-1.5 sm:ml-3 sm:mt-0">
                  <p className="text-black name text-base">See More</p>
                </div>
              </div>
            </Link>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center ">
              <Tooltip title="Book Appointment">
                <IconButton
                  onClick={handleOpen}
                  className="hover:shadow-lg p-2 rounded-md"
                >
                  <AddCircleIcon className="text-teal-700 " />
                </IconButton>
              </Tooltip>
            </div>

            <div className="sm:inline-flex sm:shrink-0 sm:items-center">
              <a href="tel:+01510000000">
                <Tooltip title="Call for Appointment">
                  <IconButton className="hover:shadow-lg p-2 rounded-md">
                    <DialerSipIcon className="text-teal-700" />
                  </IconButton>
                </Tooltip>
              </a>
            </div>
          </div>
        </div>
      </div>
      <BookAppointmentModal
        treatment={treatment}
        open={open}
        handleClose={handleClose}
        setOpen={setOpen}
      />
    </div>
  );
};

export default ServiceCard;
