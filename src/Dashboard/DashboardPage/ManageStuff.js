import axios from 'axios';
import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import { BiZoomIn } from "react-icons/bi";
import { toast } from 'react-hot-toast';
import { AiFillDelete } from "react-icons/ai";

const ManageStuff = () => {
   
     const [stuffData, setStuffData] = useState([]);
    const [ reload , setReload]= useState(true)


       const handleDeleteStuff = (id) =>{
      fetch(`http://localhost:5000/addStuff/${id}`, {
        method: 'DELETE', 
      })
      .then(res => res.json())
      .then(data => {
        setReload(!reload)
             toast.success('deleted successfully')
        
      })
    }
   
    


   
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
    // useEffect(()=>{
    //     fetch('data.json')
    //     .then((res)=>res.json())
    //     .then((data) => setTables(data))
    // },[])

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




       
 const getStuffData = async ()=> {
        try{
            const response = await axios.get('http://localhost:5000/addStuff');
            setStuffData(response.data)


        }catch(error){
                console.log(error);
        }
        
      
    }  
  

//data get
   
    console.log(stuffData);


    const columns = [
        {
            name: "id",
            selector: (row,i) => (i+1),
            
        },
        {
            name: "Image",
            selector: (row)=>  <div >
                 <PhotoProvider>
                                <PhotoView src={row.img}>
                             <img className='h-20 w-16 cursor-pointer'  src={row.img} alt=''></img> 
                                </PhotoView>
                            </PhotoProvider> <div className='-mt-8 cursor-pointer '><BiZoomIn></BiZoomIn> </div>
                </div> ,
                
            sortable: true
        },
        {
            name: "Stuff Name",
            selector: (row) => row.name,
            sortable: true
        },
         {
             name: "designation",
             selector: (row) => row.designation,
             sortable: true,

              	conditionalCellStyles: [
			{
				when: row => row.designation === "nurse",
				style: {
					backgroundColor: 'rgb(111, 169, 224)',
					
				},
			},
			{
				when: row => row.designation === "stuff",
				style: {
					backgroundColor: 'rgba(96, 219, 172, 0.712)',
					
				},
			},
			
		],
	
           },
          
          {
              name: "department",
              selector: (row) => row.department,
              sortable: true
          },
         {
             name: "schedule",
             selector: (row) => row.schedule,
             sortable: true
         },
         {
             name: "shift",
             selector: (row) => row.shift,
             sortable: true
         },

        
         {
             name: "Salary",
             selector: (row) => row.salary,
             sortable: true
         },

          {
             name: "Address",
             selector: (row) => row.Address,
             sortable: true
         },
           {
               name: "Delete",
               selector: (row) =>  <div className='cursor-pointer' onClick={()=>handleDeleteStuff(row._id)}><AiFillDelete></AiFillDelete>{row.delete}</div>,
               sortable: true
           },
       
    ]
    
    useEffect(()=>{
       getStuffData();

    },[reload])

    return (
        
           <div className='w-full'>
            <h2 className='text-center text-teal-600 fw-bold text-2xl my-8 '> <span className='text-gray-900'>Total Stuff</span>  {stuffData.length}</h2>
            
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

export default ManageStuff;