import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";

import { Link } from "react-router-dom";
import '../Shared/AllServices.css'
import DepartmentCategory from "./DepartmentCategory";
import SideBar from "../Shared/SideBar";
import useTitle from "../../../hooks/useTitle";

const Departments = () => {
  useTitle('Department')

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
        <div className="grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 lg:gap-10 md:gap-20 sm:gap-10">
          {departments.map((department) => (
            <Link to={`/departments/${department.name}`}>
              <DepartmentCategory
                key={department.cat_id}
                department={department}
              />
            </Link>
          ))}
        </div>
        <div className="relative">
          <SideBar departments={departments} />
        </div>
      </section>
    </div>
  );
};

export default Departments;
