import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import SideBar from "../Shared/SideBar";
import ServiceCard from './ServiceCard'

const ServiceByCategory = () => {
  const treatments = useLoaderData();
  console.log(treatments);
  return (
    <article>
      <div className="serviceCard">
        <h1 className=" text-teal-600 lg:text-6xl sm:text-4xl font-bold uppercase flex justify-center items-center h-full">
          Departments & Services
        </h1>
      </div>
      <section className="flex xl:flex-row sm:flex-col justify-between my-20 w-5/6 mx-auto">
        <div className=" grid md:grid-cols-2 2xl:grid-cols-3 gap-10">
          {treatments.map((treatment) => (
            <ServiceCard key={treatment._id} treatment={treatment} />
          ))}
        </div>
        <div className="relative lg:ml-10">
          <SideBar departments={treatments} />
        </div>
      </section>
    </article>
  );
};

export default ServiceByCategory;
