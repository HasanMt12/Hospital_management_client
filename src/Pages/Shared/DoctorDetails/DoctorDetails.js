import { LocalHospital } from "@mui/icons-material";
import { Link } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import React, { useEffect } from "react";
import { toast } from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";
import { RiAddCircleFill, RiArrowRightCircleFill } from "react-icons/ri";
import ServiceCard from "../../AllServices/Service/ServiceCard";

const DoctorDetails = () => {
  const doctor = useLoaderData();
  console.log(doctor);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Successfully Make Appointment");
    navigate("/");
  };

  const {
    data: services = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["services"],
    queryFn: async () => {
      const res = await fetch(
        `http://localhost:5000/doctors/${doctor.doctorCode}`
      );
      const data = await res.json();
      return data;
    },
  });
  console.log(services)
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  refetch();

  return (
    <article className="my-20">
      <section className="bg-white w-5/6 mx-auto p-4 shadow-lg rounded-md">
        <div className="container px-6 py-10 mx-auto">
          <div className="mt-8 lg:-mx-6 lg:flex justify-between ">
            <img className="object-cover w-96 h-3/6" src={doctor.img} alt="" />

            <div className="mt-6 lg:w-1/2 lg:mt-0 lg:mx-6 ">
              <p className="block mb-4 text-2xl font-semibold text-gray-800 hover:underline  md:text-3xl">
                {doctor?.doctorName}
              </p>
              <hr className="my-5" />
              <p className="text-xl font-bold mb-5">Specialties</p>
              <p className="text-sm text-green-600 uppercase">
                {doctor?.department}
              </p>

              <hr className="my-5" />

              <p className="text-xl font-bold mb-5">Qualities</p>
              <p className="text-sm text-green-600 uppercase">
                {doctor?.title}
              </p>
              <p className="text-sm text-green-600 uppercase my-5">
                {doctor?.degree}
              </p>
              <hr className="my-5" />
              <div className="my-20">
                <p className="block mb-10 text-2xl font-semibold text-green-700 hover:underline text-center  md:text-3xl">
                  Services available
                </p>
                {services?.map((treatment) => (
                  <ServiceCard treatment={treatment}></ServiceCard>
                  // <>
                  //   <div className="flex flex-col items-center transition-colors duration-300 transform border-teal-700 border-2 shadow-2xl cursor-pointer rounded-xl hover:border-transparent group hover:bg-teal-600 w-72 ">
                  //     <img
                  //       className="object-cover  w-full h-52 rounded-xl  p-2"
                  //       src={service.picture}
                  //       alt=""
                  //     />

                  //     <h1 className="mt-4 text-lg font-semibold text-gray-700 capitalize group-hover:text-white">
                  //       {service.name}
                  //     </h1>

                  //     <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-white ">
                  //       Visit {service.balance} Tk
                  //     </p>
                  //     <p className="mt-2 text-gray-500 capitalize dark:text-gray-300 group-hover:text-white font-bold">
                  //       {doctor.department}
                  //     </p>

                  //     <div className="flex  mt-3 -mx-2 p-2">
                  //       <Link>
                  //         <RiAddCircleFill className="group-hover:text-white text-teal-700 text-4xl" />
                  //       </Link>
                  //     </div>
                  //   </div>
                  //   ;
                  // </>
                ))}
              </div>
              <hr className="my-5" />
              <div>
                <p className="block mb-4 text-2xl font-semibold text-green-700 hover:underline  md:text-3xl">
                  Schedual for Monday to Sunday
                </p>

                {doctor?.workingDays.map((time) => (
                  <>
                    <li>{time}</li>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default DoctorDetails;
