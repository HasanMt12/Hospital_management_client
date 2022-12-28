import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import './AllServices.css'
import DepartmentCategory from "./DepartmentCategory";

const Departments = () => {
//   const [queryData, setQueryData] = useState("");
//   console.log("qureyData", queryData);


  const {
    data: departments = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["servies"],
    queryFn: async () => {
      const res = await fetch("department.json");
      const data = await res.json();
      return data;
    },
  });
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  refetch();

  return (
    <div>
      <div className="serviceCard">
        <h1 className=" text-teal-600 lg:text-6xl sm:text-4xl font-bold uppercase flex justify-center items-center h-full">
          Departments & Services
        </h1>
      </div>
      <section className="w-5/6 flex xl:flex-row flex-col justify-between mx-auto my-20">
        <Link className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 lg:gap-10 md:gap-20 sm:gap-10">
          {departments.map((department) => (
            <DepartmentCategory
              key={department.cat_id}
              department={department}
            />
          ))}
        </Link>

        <div className="space-y-20 bg-gradient-to-t from-teal-700 via-teal-600 to-teal-400 p-10 rounded-lg sm:mt-10 xl:mt-0 ">
          <div className="space-y-5 ">
            <h1 className="text-2xl font-bold text-white">Our Departments</h1>
            <ul className="space-y-3 text-white text-base">
              {departments.map((department) => (
                <li key={department.cat_id}>
                  <Link>{department.name}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl font-bold text-white">Opening Hours</h1>
            <ul className="space-y-3 text-white text-base">
              <li>Monday - Friday: 8.00 - 17.00</li>
              <li>Saturday:9.30 - 18.30</li>
              <li>Sunday:9.30 - 18.30</li>
            </ul>
          </div>
          <div className="space-y-5">
            <h1 className="text-2xl font-bold text-white">Contacts</h1>
            <ul className="space-y-3 text-white text-base">
              <li>227 Marion street</li>
              <li>medical-clinic@mail.com</li>
              <li>1-888-333-444-222</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Departments;
