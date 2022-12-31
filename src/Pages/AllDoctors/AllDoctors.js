import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import SideBar from '../AllServices/Shared/SideBar';
import AllDoctor from './AllDoctor';
import ConsultancyModal from "../Home/Doctor/ConsultancyModal";


const AllDoctors = () => {
   const allDoctors = useLoaderData()
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [doctor, setDoctor] = useState("");
   return (
     <section className="w-9/12 mx-auto bg-slate-100 shadow-2xl p-10">
       <div className="missionCover mb-10">
         <h1 className=" text-teal-600 lg:text-6xl sm:text-4xl font-bold flex justify-center items-center h-full">
           Our Specialist
         </h1>
       </div>
       <div className="grid grid-cols-3 gap-10">
         {allDoctors.map((doctor) => (
           <AllDoctor
             setDoctor={setDoctor}
             handleOpen={handleOpen}
             key={doctor._id}
             doctor={doctor}
           ></AllDoctor>
         ))}
       </div>
       <ConsultancyModal
         doctor={doctor}
         // treatment={treatment}
         open={open}
         handleClose={handleClose}
         setOpen={setOpen}
       ></ConsultancyModal>
     </section>
   );
};

export default AllDoctors;