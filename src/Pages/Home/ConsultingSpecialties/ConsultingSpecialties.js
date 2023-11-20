import React from 'react';
import { useQuery } from '@tanstack/react-query';
import "./ConsultingSpecialties.css"
import ConsultingCategory from './ConsultingCategory';
import { Typography } from '@mui/material';

const ConsultingSpecialties = () => {
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
  const first10Departments = departments.slice(0, 10);
  refetch();
    return (
      <div className=' lg:px-20 md:px-10 px-5 lg:my-30 md:my-20 my-10'>
        <div className="my-5 text-center">
        <h1 className="text-3xl my-2 font-bold font-sans">
          Our consulting <span className="text-[#13A2B7]">specialist</span>
        </h1>
        <Typography
          className="text-base"
          variant="body2"
          color="text.secondary"
        >
          <p>
            Receive instant health advice by consulting with doctors online or visit our hospitals, 
          </p>
          <p>where a diverse panel of 200+ specialists in 40+ fields is ready to assist you.</p>
        </Typography>
      </div>
        <div className='speConsultation grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 mt-14'>
           {first10Departments.map((department) => (
         
              <ConsultingCategory
                design="lg:h-32 lg:w-52 md:h-28 md:w-48 h-24 w-42"
                imgDesign="lg:w-20 lg:h-20 md:h-18 md:w-18 w-14 h-14"
                key={department.cat_id}
                department={department}
              />
            
          ))} 
        </div>
        <div className='flex md:justify-end justify-center items-center py-4 lg:px-14 md:px-8 px-3'>
              <button className='border-[1px] lg:text-md md:text-sm sm:text-xs text-[#333333] rounded-sm shadow-md hover:bg-[#E7F6F3] hover:text-[#294d52] border-[#13A2B7] uppercase p-2  '>View All department</button>
        </div>
       
      </div>
    );
};

export default ConsultingSpecialties;