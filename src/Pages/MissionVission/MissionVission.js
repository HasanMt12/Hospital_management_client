import React from 'react'
import logo from '../../assets/missionVission/logo.jpg'
import img1 from "../../assets/missionVission/1.jpg";
import img2 from "../../assets/missionVission/6.jpg";
import img3 from "../../assets/missionVission/5.jpg";


import img4 from "../../assets/missionVission/3.jpg";
import img5 from "../../assets/missionVission/7.jpg";
import img6 from "../../assets/missionVission/4.jpg";
import './MissionVission.css'
import useTitle from '../../hooks/useTitle';



const MissionVission = ()=>{
  useTitle('Mission Vission')
   return (
     <section>
       <div className="missionCover">
         <h1 className=" text-teal-600 lg:text-6xl sm:text-4xl font-bold flex justify-center items-center h-full">
           Mission Vission & Values
         </h1>
       
       </div>
       <div className="w-5/6 mx-auto mt-20 mb-52 space-y-5 text-slate-500">
         <p className="text-xl font-medium text-teal-600">
           Our Vission/Mission and values
         </p>
         <hr />
         <p className="text-lg font-medium text-teal-700">Vission</p>
         <hr />
         <p>
           Doctors Portal International Hospital will provide world-class
           holistic healthcare with innovation by 2023.
         </p>
         <hr />
         <p className="text-lg font-medium text-teal-700">Mission</p>
         <hr />
         <p>
           To deliver innovative clinical and service experiences, accomplish
           operational excellence and establish transdisciplinary care team with
           quality and humanized care.
         </p>
         <hr />
         <p className="text-lg font-medium text-teal-700">Core Values</p>
         <hr />
         <ul>
           <li>Agility</li>
           <li>Innovation</li>
           <li>Caring</li>
         </ul>
         <div className="space-y-2">
           <p className="text-xl font-medium text-teal-600 mb-5">
             Patients and Staff Safety Statement
           </p>
           <p>
             Everyone at Bumrungrad Hospital PCL has responsibility for the
             safety of our patients and staff. The Hospital Governing Board has
             the overall responsibility of directing the commitment to safety.
             The Executive and Management teams have the responsibility to
             oversee, guide and implement the safety programs at Bumrungrad;
             however, everyone at Bumrungrad is responsible for safety. Safety
             is a team effort that is at the core of our business and central to
             our success and competitiveness.
           </p>
           <p>We believe that:</p>
           <ol>
             <li>1. Safety shall never be compromised</li>
             <li>2. All errors are preventable.</li>
             <li>
               3. Nothing is more important to Bumrungrad than the safety of our
               patients and our staff.
             </li>
           </ol>
         </div>
         <div className="flex w-5/6 gap-10 mx-auto sm:flex-col lg:flex-row items-center">
           <img className="w-96 h-52 object-cover" src={img1} alt="" />
           <img className="w-96 h-52 object-cover" src={img2} alt="" />
           <img className="w-96 h-52 object-cover" src={img3} alt="" />
         </div>
         <div className="space-y-5">
           <p className="text-xl font-medium text-teal-600 mt-14">
             Quality Statement
           </p>
           <p>
             We are committed to providing “World Class” services by using the
             Malcolm Baldrige National Quality and Magnet criteria as the
             framework for achieving our overall organizational performance
             objectives. We benchmark and validate our performance through
             internationally recognized accrediting and certification bodies
             such as Joint Commission International (JCI), Hospital
             Accreditation (A-HA) and The College of American Pathologists (CAP)
             for Safety & Quality towards patient care excellence.
           </p>
           <p className="text-xl font-medium text-teal-600">
             Environment Statement
           </p>
           <p>
             We are committed to protecting the global environment and to
             conserving energy and natural resources. We support efforts to
             maintain and promote the health and safety of the community and we
             participate in activities supporting these principles.
           </p>

           <div className="space-y-5 ">
             <p className="text-xl font-medium text-teal-600">
               Environmental Statement Guiding Principles
             </p>
             <p>
               Everyone at Bumrungrad Hospital PCL has responsibility for the
               safety of our patients and staff. The Hospital Governing Board
               has the overall responsibility of directing the commitment to
               safety. The Executive and Management teams have the
               responsibility to oversee, guide and implement the safety
               programs at Bumrungrad; however, everyone at Bumrungrad is
               responsible for safety. Safety is a team effort that is at the
               core of our business and central to our success and
               competitiveness.
             </p>
             <ol>
               <li>
                 1. The Hospital will establish environmental, health, and
                 safety policies that comply with government regulations and
                 world standards and ensure that staff and contractors are
                 properly educated and trained in these policies.
               </li>
               <li>
                 2. Every staff member and contractor on the Hospital's premises
                 is expected to follow the Hospital's environmental policies and
                 report any environmental, health or safety concerns to
                 management to take appropriate actions.
               </li>
               <li>
                 3. We will minimize the environmental impact of the hospital's
                 operations on the neighboring communities due to such potential
                 hazards as infectious waste water management, etc.
               </li>
             </ol>
           </div>
           <div className="flex w-5/6 gap-10 mx-auto sm:flex-col lg:flex-row items-center">
             <img className="w-96 h-52 object-cover" src={img4} alt="" />
             <img className="w-96 h-52 object-cover" src={img5} alt="" />
             <img className="w-96 h-52 object-cover" src={img6} alt="" />
           </div>
         </div>
       </div>
     </section>
   );
}

export default MissionVission

