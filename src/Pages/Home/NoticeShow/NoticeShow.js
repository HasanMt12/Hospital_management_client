import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import useAdmin from '../../../hooks/useAdminSecurity';
import { AiTwotoneDelete } from "react-icons/ai";
import { toast } from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
const NoticeShow = () => {
  useTitle('Notice')
      const {user}= useContext(AuthContext);
  const [isAdmin] = useAdmin(user?.email)

    const {data: notice = [] , refetch } = useQuery({
        queryKey: ['notice'],
        queryFn: async() =>{
            const res = await fetch('http://localhost:5000/notice');
            const data = await res.json();
            console.log(data);
            return data;
            
        }
    });

    
        const handleDeleteNotice = (id) =>{
      fetch(`http://localhost:5000/notice/${id}`, {
        method: 'DELETE', 
      })
      .then(res => res.json())
      .then(data => {
        // if(data.deletedCount > 0){
          
        // }
        refetch()
          toast.success('notice deleted successfully')
      })
    }
    return (
        <div>
            <h2>{notice.length}</h2>
            {
                notice.map(n=><div 
                n={n}
                key={n._id}
                >
                    <article class="rounded-xl border-2 mb-4  bg-white w-10/12 mx-auto  border-teal-600">
  <div class="flex items-start p-6">
    <a href="#" class="block shrink-0">
      <img
        alt="Speaker"
        src={n.img}
        class="h-36 mr-16 w-36 rounded-lg object-cover"
      />
    </a>

    <div class="ml-4">
      <h3 class="font-medium sm:text-lg">
        <a href="#" class="hover:underline">
         {n.noticeCategory}
        </a>
      </h3>
       <hr/>

      <p class="text-sm text-gray-700 line-clamp-2">
        {n.notice}
      </p>
     

      <div class="mt-8 justify-end sm:flex sm:items-center sm:gap-2">
        <div class="flex items-center text-gray-500">
         
          
          <p class="ml-1 text-md">{n.time}</p>
        </div>


      </div>
    </div>
  </div>

{isAdmin &&<div class="flex justify-end">
    <strong
      class="-mr-[2px] -mb-[2px] cursor-pointer inline-flex items-center gap-1 rounded-tl-xl rounded-br-xl bg-red-700 py-1.5 px-3 text-white"
    >
     
                    <div  onClick={() => handleDeleteNotice(n._id)} className='flex '> <span class="text-[10px] mr-4 font-medium sm:text-xs">Delete</span> <span className='text-gray-50'><AiTwotoneDelete></AiTwotoneDelete></span>
     </div>
    </strong>
  </div>}
  
</article>
                </div>)

            }
        </div>
    );
};

export default NoticeShow;