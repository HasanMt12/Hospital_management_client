import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import ServiceCard from './ServiceCard';
import ServiceCategories from './ServiceCategories';


const ServicesPage = () => {

    const [queryData, setQueryData] = useState('')
    console.log('qureyData', queryData);

    const {
        data: services = [],
        isLoading,
        refetch,
      } = useQuery({
        queryKey: [`${queryData}`],
        queryFn: async () => {
          const res = await fetch("service_data.json");
          const data = await res.json();
          return data;
        },
      });
      if (isLoading) {
        return <h1>Loading</h1>;
      }
      refetch();
    //   console.log('service', services);

      const handleQuery = que => {
        setQueryData(que)
      }


    return (
        <div>
            <h1 className=' text-5xl bg-slate-400 mt-16'>this is service page</h1>
            <div className='my-20 grid grid-cols-4'>

<div className=' grid-cols-1'>

<ServiceCategories handleQuery={handleQuery} ></ServiceCategories>
</div>
<div className=' col-span-3'>
    <div className='grid grid-cols-3 gap-5 p-5'>
    {
      services &&  services.map((service, i) => <ServiceCard
        key={i}
        service={service}></ServiceCard>)
    }
    </div>
   
</div>
            </div>

        </div>
    );
};

export default ServicesPage;