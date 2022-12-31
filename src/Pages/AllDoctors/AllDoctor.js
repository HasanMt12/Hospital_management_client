import React from "react";
import { Link } from "react-router-dom";
import AddIcCallIcon from "@mui/icons-material/AddIcCall";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import TextsmsIcon from "@mui/icons-material/Textsms";

const AllDoctor = ({ doctor, setDoctor, handleOpen }) => {
  const { doctorName, title, _id, img, workingDays } = doctor;
  console.log(doctor.workingDays);
  return (
    <section>
      <div className="shadow-lg p-4 bg-white">
        <div className="space-y-5">
          <img
            src={img}
            alt=""
            className="w-32 h-32 rounded-full object-cover mx-auto"
          />
          <p className="text-center"> {doctorName} </p>
          <hr />
          <p className="text-center text-teal-700 text-lg font-bold ">
            Specialties
          </p>
          <p className="text-slate-500">{title}</p>
          <Link to={`/doctor/${_id}`}>
            <p className="bg-teal-600 text-center text-white font-bold py-4 my-5">
              View Profile
            </p>
          </Link>

          <div className="flex">
            <div className="flex flex-col items-center justify-center gap-5 ">
              <div className="p-2 rounded-full bg-slate-400">
                <AddIcCallIcon className="text-white" />
              </div>

              <a
                href="tel:+6620668888"
                className="text-sm text-center text-slate-500"
              >
                CALL FOR APPOINTMENT
              </a>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 ">
              <div className="p-2 rounded-full bg-slate-400">
                <TextsmsIcon className="text-white" />
              </div>
              <Link
                to="/contact"
                className="text-sm text-center text-slate-500"
              >
                SEND AN INQUIRY
              </Link>
            </div>
            <div
              className="flex flex-col items-center justify-center gap-5"
            >
              <div className="p-2 rounded-full bg-slate-400 ">
                <CalendarMonthIcon className="text-white " />
              </div>
              <div onClick={handleOpen}>
                <button
                  onClick={() => setDoctor(doctor)}
                  className="text-sm text-slate-500"
                >
                  BOOK APPOINTMENT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllDoctor;
