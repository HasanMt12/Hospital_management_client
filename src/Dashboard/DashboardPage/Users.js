import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Users = () => {
     const {data: user = [] , refetch } = useQuery({
        queryKey: ['user'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/user');
            const data = await res.json();
            console.log(data);
            return data;
            
        }
    });
    return (
       
           


         <div className='w-full mx-auto '>
             <h3> {user.length} USERS here</h3>
 
<div classname="flex flex-col">
  <div classname="overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div classname="py-2 inline-block min-w-full sm:px-6 lg:px-8">
      <div classname="overflow-hidden">
        <table classname="min-w-full">
          <thead classname="border-b">
            <tr>
              <th scope="col" classname="text-sm font-medium text-gray-900 px-4 py-4 text-center">
                count
              </th>
              <th scope="col" classname="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Name
              </th>
              <th scope="col" classname="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                Email
              </th>
               <th scope="col" classname="text-sm font-medium text-gray-900 px-6 py-4 text-left">
                role
              </th>
             
            </tr>
          </thead>
          <tbody>
            {  user.map((u, i) =><tr classname="border-b" key={u._id}>

 <th>{i+1}</th>
 <td classname="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{u.name}</td>
           <td td class = "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" >
               {u.email}
          </td>
            <td td class = "text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap" >
               {u.role}
          </td>
            </tr>
            )}
           
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

</div>

    );
};

export default Users;