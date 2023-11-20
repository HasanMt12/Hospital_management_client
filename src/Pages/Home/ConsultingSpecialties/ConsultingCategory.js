import React from 'react';
import { Link } from 'react-router-dom';

const ConsultingCategory = ({department,design,imgDesign,fontDesign}) => {
      const { icon, name } = department;
    return (
       
            <div title={`See ${name}`}
            className={`flex items-center cursor-pointer justify-center bg-[#E7F6F3] border-2 border-[#E7F6F3] text-center rounded-lg hover:bg-white hover:border-2 hover:border-[#E7F6F3] transition-all ease-in-out duration-500 ${design}`}
            > <Link to={`/departments/${department.name}`}>
            <div>
            <img
                className={`rounded-full border-4 border-white object-cover mx-auto ${imgDesign}`}
                alt=""
                src={icon}
            />
            <p className={`font-bold text-green ${fontDesign}`}>{name}</p>
            </div></Link> 
      </div>
      
    );
};

export default ConsultingCategory;