import { LocalHospital } from "@mui/icons-material";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const DoctorDetails = () => {
  const data = useLoaderData();

  return (
    <div className="min-h-screen mt-24">
      <div class="w-full max-w-md mx-auto overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
        <img class=" w-full h-56" src={data[0]?.img} alt="avatar" />

        <div class="flex items-center px-6 py-3 bg-gray-900">
          <LocalHospital color="primary" />

          <h1 class="mx-3 text-lg font-semibold text-white">
            {data[0]?.category}
          </h1>
        </div>

        <div class="px-6 py-4">
          <h1 class="text-xl font-semibold text-gray-800 dark:text-white">
            {data[0]?.name}
          </h1>
          <h1 class="text-sm font-medium text-gray-800 dark:text-white">
            {data[0]?.qualification}
          </h1>

          <p class="py-2 text-gray-700 dark:text-gray-400">
            {data[0]?.description}
          </p>

          <div class="flex items-center justify-center mt-4 text-gray-700 dark:text-gray-200">
            <Link
              class="inline-block rounded border border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-indigo-600 focus:outline-none focus:ring active:text-indigo-500"
              to="/"
            >
              Make an Appointment
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetails;
