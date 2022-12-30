import React from "react";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";

const DepartmentCategory = ({ department }) => {
  const { icon, name, details } = department;
  return (
    <div className="group relative block w-72  h-60">
      <span className="absolute inset-0 border-2 border-dashed border-teal-700 rounded-lg"></span>

      <div className="relative flex h-full transform items-end border-2 border-teal-700 rounded-lg bg-white transition-transform group-hover:-translate-x-2 group-hover:-translate-y-2">
        <div className="px-8 p-8 transition-opacity group-hover:absolute group-hover:opacity-0">
          <img className="w-24" src={icon} alt="" />

          <h2 className="mt-4 text-2xl text-teal-600 font-medium">
            {department.name}
          </h2>
        </div>

        <div className="absolute p-8 opacity-0 transition-opacity group-hover:relative group-hover:opacity-100 w-72 ">
          <h3 className="mt-4 text-2xl font-medium">{name}</h3>

          <p className="mt-4">L{details.slice(0, 100)}...</p>

          <Link className="mt-8 font-bold text-teal-600">See More</Link>
        </div>
      </div>
    </div>
  );
};

export default DepartmentCategory;
