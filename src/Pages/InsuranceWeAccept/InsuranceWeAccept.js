import React from 'react';
import insurance from '../../assets/insurance/insurance.jpg'
import img1 from '../../assets/insurance/company/1.png'
import img2 from '../../assets/insurance/company/2.png'
import img3 from '../../assets/insurance/company/3.png'
import img4 from '../../assets/insurance/company/4.png'
import img5 from '../../assets/insurance/company/5.jpg'
import img6 from '../../assets/insurance/company/6.png'
import img7 from '../../assets/insurance/company/7.png'

const InsuranceWeAccept = () => {
   const insuranceOffice = [
     {
       name: "Sonali life insurence limited",
       img: img1,
     },
     {
       name: "MetLife Bangladesh (American Life Insurance Company Ltd).",
       img: img2,
     },
     {
       name: "Prime Islami Life Insurance Co. Ltd.",
       img: img3,
     },
     {
       name: "Asia Insurance Ltd.",
       img: img4,
     },
     {
       name: "Guardian Life Insurance Ltd.",
       img: img5,
     },
     {
       name: "Sawdesh Life Insurance Co. Ltd.",
       img: img6,
     },
     {
       name: " Islami Insurance Bangladesh Ltd.",
       img: img7,
     },
   ];
   return (
     <section>
       <div className="relative">
         <h1 className="absolute top-52 text-teal-600 left-1/4 z-10 text-6xl font-bold hover:skew-y-12 hover:">
           Insurance
         </h1>
         <img
           className=" h-96 w-5/6 mx-auto grayscale hover:grayscale-0	 object-cover"
           src={insurance}
           alt=""
         />
       </div>
       <div class="space-y-4 w-4/6 mx-auto">
         <details
           class="group border-l-4  border-teal-600  p-6 [&_summary::-webkit-details-marker]:hidden"
           open
         >
           <summary class="flex items-center justify-between cursor-pointer ">
             <h2 class="text-lg font-medium text-gray-900 uppercase">
               INSURANCE: WHAT DO WE ACCEPT?
             </h2>

             <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path
                   fill-rule="evenodd"
                   d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                   clip-rule="evenodd"
                 />
               </svg>
             </span>
           </summary>

           <div className="">
             {insuranceOffice.map((office) => (
               <div className="flex justify-between my-5">
                 <p className="font-bold text-teal-700">{office.name}</p>
                 <img
                   src={office.img}
                   className="w-20 h-20 object-cover"
                   alt=""
                 />
               </div>
             ))}
           </div>
         </details>

         <details class="group border-l-4 border-teal-600 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden">
           <summary class="flex items-center justify-between cursor-pointer">
             <h2 class="text-lg font-medium text-gray-900 uppercase">
               international visitors (intentional, accidental,complication
               insurance)
             </h2>

             <span class="ml-1.5 flex-shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 class="flex-shrink-0 w-5 h-5 transition duration-300 group-open:-rotate-45"
                 viewBox="0 0 20 20"
                 fill="currentColor"
               >
                 <path
                   fill-rule="evenodd"
                   d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                   clip-rule="evenodd"
                 />
               </svg>
             </span>
           </summary>

           <p class="mt-4 leading-relaxed text-gray-700">
             International visitors are looking for insurance covarage which can
             fit into 3 categories
           </p>
           <ul>
             <li>
               <span>"Intentional" Medical Travel Procedure: </span> Traveling for the explicite purpose of doing a procedure overseas
             </li>
           </ul>
         </details>
       </div>
     </section>
   );
};

export default InsuranceWeAccept;