import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import DataTable from 'react-data-table-component';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../contexts/AuthProvider';

const AppointById = () => {
       const [stuffData, setStuffData] = useState([]);
      const [reload, setReload] = useState(true)
  const [perPage, setPage] = useState(10);

  const caseInsensitiveSort = (rowA, rowB) => {
    const a = rowA.first_name.toLowerCase();
    const b = rowB.last_name.toLowerCase();

    if (a > b) {
      return 1;
    }

    if (b > a) {
      return -1;
    }

    return 0;
  };
  

    const customStyles = {
    rows: {
        style: {
            minHeight: '72px', // override the row height
            
        },
    },
    headCells: {
        style: {
            paddingLeft: '8px', // override the cell padding for head cells
            paddingRight: '8px',
            margin: '2px',
            backgroundColor: 'rgb(18, 126, 111)',
            color: 'white',
              borderRadius: '5px',
              text: 'bold',
              fontSize: '15px'
        },
    },
    cells: {
        style: {
            paddingLeft: '25px', // override the cell padding for data cells
            // paddingRight: '8px',
            textAlign: 'center',
             border: '1px dotted teal',
            borderRadius: '5px',
            color: 'black',
            margin: '2px',
         
        },
    },
};
    const {user} = useContext(AuthContext);

const getStuffData = async () => {
    try {
        const response = await axios.get(`http://localhost:5000/appointment?email=${user?.email}`);
        setStuffData(response.data)
    } catch (error) {
        console.log(error);
    }
}
console.log(stuffData);

    
    //    const handleDeleteUser = (id) =>{
    //   fetch(`http://localhost:5000/user/${id}`, {
    //     method: 'DELETE', 
    //   })
    //   .then(res => res.json())
    //   .then(data => {
    //     setReload(!reload)
    //          toast.success('deleted successfully')
        
    //   })
    // }
    const columns = [
        {
            name: "id",
            selector: (row,i) => (i+1),
            
        },
        // {
        //     name: "Image",
        //     selector: (row)=>  <div >
        //          <PhotoProvider>
        //                         <PhotoView src={row.img}>
        //                      <img className='h-20 w-16 cursor-pointer'  src={row.img} alt=''></img> 
        //                         </PhotoView>
        //                     </PhotoProvider> <div className='-mt-8 cursor-pointer '><BiZoomIn></BiZoomIn> </div>
        //         </div> ,
                
        //     sortable: true
        // },
        {
            name: "department",
            selector: (row) => row.department,
            sortable: true
        },
        
        
          {
            name: "serviceName",
            selector: (row) => row.serviceName,
            sortable: true
          },
        {
             name: "slot",
             selector: (row) => row.slot, 
             sortable: true,

           },
            {
             name: "fee",
             selector: (row) => row.fee, 
             sortable: true,

           },
        {
             name: "bookingDate",
             selector: (row) => row.bookingDate, 
             sortable: true,

           },
             {
             name: "patientPhone",
             selector: (row) => row.patientPhone, 
             sortable: true,

           },
            {
             name: "patientEmail",
             selector: (row) => row.patientEmail, 
             sortable: true,

           },
        // {
        //        name: "Delete",
        //        selector: (row) =>  <div className='cursor-pointer' onClick={()=>handleDeleteUser(row._id)}><AiFillDelete></AiFillDelete>{row.delete}</div>,
        //        sortable: true
        //    },
    ]
    
    useEffect(()=>{
       getStuffData();
    },[reload])
    return (
        <div className='w-full'>
            <h2 className='text-center text-teal-600 fw-bold text-2xl my-8 '> <span className='text-gray-900'>Your total Appointment</span>  {stuffData.length}</h2>
            
            <DataTable
          
            columns={columns}
            data={stuffData}
            fixedHeader
            pagination
            caseInsensitiveSort={caseInsensitiveSort}
            selectableRows
            selectableRowsHighlight
            customStyles={customStyles}
        />
        </div>  
    );
};

export default AppointById;