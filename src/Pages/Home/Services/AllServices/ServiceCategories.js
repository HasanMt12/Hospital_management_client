import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCategories = ({handleQuery}) => {


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
      refetch();

      console.log(departments);


    return (
        <div>
            <h1>service ServiceCategories 1</h1>
            <div className='flex flex-col'>
                
          {
             departments && departments.map(department => <p 
                onClick={()=> handleQuery(department.name)}
                    className='btn bg-blue-300 m-3 px-16 py-3 rounded hover:bg-blue-400'
                    >{department.name}</p>
            //      <Link  to={`/services/${department.cat_id}`}
            //   onClick={()=> handleQuery()}
            //   className='btn bg-blue-300 m-3 px-16 py-3 rounded hover:bg-blue-400'>{department.name}</Link>
           
              )
            }
            </div>
        </div>
    );
};

export default ServiceCategories;