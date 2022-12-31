import React from 'react';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import BookAppointmentModal from '../Shared/BookAppointmentModal'

const ServiceDetails = () => {
   const treatment = useLoaderData()
   const [open, setOpen] = useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);
   console.log(treatment)
   const {
     name,
     about,
     balance,
     department,
     appointmentNumber,
     doctorImg,
     doctorName,
     timeSlot,
     title,
     picture,
   } = treatment;
   return (
     <section className="mb-32">
       <div className="flex justify-between items-center bg-slate-200 p-20 ">
         <h1 className="text-4xl font-bold name ">{name}</h1>
         <ol
           role="list"
           className="xl:flex items-center sm:hidden gap-1 text-sm text-gray-600 "
         >
           <li>
             <Link
               to="/"
               className="block transition hover:text-gray-700 hover:underline"
             >
               <span className="sr-only "> Home </span>

               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 className="h-5 w-4 text-lg hover:underline hover:text-green-600"
                 fill="none"
                 viewBox="0 0 24 24"
                 stroke="currentColor"
               >
                 <path
                   strokeLinecap="round"
                   strokeLinejoin="round"
                   strokeWidth="2"
                   d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                 />
               </svg>
             </Link>
           </li>

           <li>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-4 w-4"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path
                 fillRule="evenodd"
                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                 clipRule="evenodd"
               />
             </svg>
           </li>

           <li>
             <Link
               to="/services"
               className="block transition hover:underline text-base hover:text-green-600"
             >
               Services
             </Link>
           </li>
           <li>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-4 w-4"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path
                 fillRule="evenodd"
                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                 clipRule="evenodd"
               />
             </svg>
           </li>
           <li>
             <Link
               to={`/departments/${department}`}
               className="block transition hover:underline text-base hover:text-green-600"
             >
               {department}
             </Link>
           </li>

           <li>
             <svg
               xmlns="http://www.w3.org/2000/svg"
               className="h-4 w-4"
               viewBox="0 0 20 20"
               fill="currentColor"
             >
               <path
                 fillRule="evenodd"
                 d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                 clipRule="evenodd"
               />
             </svg>
           </li>

           <li>
             <Link className="block transition text-base  hover:underline hover:text-green-600">
               {name}
             </Link>
           </li>
         </ol>
       </div>
       <div className="w-9/12 mx-auto my-10">
         <button
           onClick={handleOpen}
           className="bg-teal-900 px-8 py-4 rounded-full mb-10 text-white name"
         >
           Book Appointment
         </button>

         <img
           className="lg:w-2/6 sm:w-4/6 rounded-md object-cover"
           src={picture}
           alt=""
         />

         <p className="text-2xl font-bold name my-10">{name}</p>
         <hr />
         <p className="text-slate-500  my-10">{about}</p>
         <hr />
         <p className="my-10 text-2xl name font-bold">Experts</p>
         <img
           className="w-60 h-60 object-cover rounded-md"
           src={doctorImg}
           alt=""
         />
         <p className="text-slate-500  text-xl my-2">{doctorName}</p>
         <hr />
         <p className="text-slate-500 text-xl mt-2">{title}</p>
       </div>
       <BookAppointmentModal
         treatment={treatment}
         open={open}
         handleClose={handleClose}
         setOpen={setOpen}
       />
     </section>
   );
};

export default ServiceDetails;