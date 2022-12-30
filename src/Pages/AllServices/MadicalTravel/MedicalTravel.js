import React from 'react';

import fb from "../../../assets/About/Icons/facebook.png"
import youtube from "../../../assets/About/Icons/youtube.png";
import insta from "../../../assets/About/Icons/instagram.png";
import line from "../../../assets/About/Icons/line.png";
import twitter from "../../../assets/About/Icons/twitter.png";
import { Link } from 'react-router-dom';
import './MedicalOffice.css'
const MedicalTravel = () => {
    return (
           <section>
       <div className="medicalGuideCover">
         <h1 className=" text-teal-600 lg:text-6xl sm:text-4xl font-bold flex justify-center items-center h-full">
           medical office administration
         </h1>
         {/* <img
           className=" h-96 w-full hover:grayscale-0  grayscale  object-cover"
           src={logo}
           alt=""
         /> */}
       </div>
      
         <div className="flex items-center justify-center gap-6 my-5 mt-10">
        <Link>
          <img className="w-8 h-8" src={fb} alt="fb" />
        </Link>
        <Link>
          <img className="w-8 h-8" src={twitter} alt="twitter" />
        </Link>
        <Link>
          <img className="w-8 h-8" src={youtube} alt="youtube" />
        </Link>
        <Link>
          <img className="w-8 h-8" src={insta} alt="insta" />
        </Link>
        <Link>
          <img className="w-8 h-8" src={line} alt="line" />
        </Link>
      </div>
   
     </section>
    );
};

export default MedicalTravel;