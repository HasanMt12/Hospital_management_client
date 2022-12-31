import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
// import TableChart from './TableChart';

const Table = () => {
  const [taskData, setTaskData] = useState([]);
  const [loading, setLoading] = useState(false);

  // const [perPage, setPage] = useState(10);
  const customStyles = {
    
    headCells: {
        style: {
            
            maxWidth: '50px',  // override the cell padding for head cells
            
            // backgroundColor:'red',
           width:'10px'
        },
    },
    cells: {
        style: {
          
            maxWidth: '50px', 
            // backgroundColor:'red', // override the cell padding for data cells
           
        },
    },
};


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
  const getTaskData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/doctor");
      setTaskData(response.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(taskData);
  const columns =  [
   /*  {
      name: "Index",
      selector: (row, i) => <div>{i + 1}</div>,
    }, */
    {
      name: "Doctor Code",
      selector: (row) => row.doctorCode,
      style: {
       
           // maxWidth: '200px', 
          //  maxWidth: '50px', 
           
       },
    },
  
    {
      name: "Name",
      selector: (row) => row.doctorName,
      sortable: true,
      
    },

    {
      name: "Image",
      selector: (row) => (
        <div>
          {" "}
          <div className=" w-16 h-16 rounded-full">
            <img src={row.img} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      ),

      sortable: true,
    },
    {
      name: "Department",
      selector: (row) => row.department,
      sortable: true,
    },

    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Degree",
      selector: (row) => row.degree,
      sortable: true,

     /*  conditionalCellStyles: [
        	{
				when: row => row.show === "TRUE",
				style: {
					backgroundColor: 'green',
					
				},
			},
			{
				when: row => row.show === "FALSE",
				style: {
					backgroundColor: 'red',
					
				},
			},
      ], */
    },
    {
      name: "Working Days",
      selector: (row) => row.workingDays,
      sortable: true,
     
    },
    {
      name: "AppointNumber",
      selector: (row) => row.appointNumber,
      sortable: true,
    },

   

   
   /*  {
      edit: "show",
      selector: (row) => row.edit,
      sortable: true,
      conditionalCellStyles: [
        {
          when: (row) => row.show === "FALSE",
          style: {
            backgroundColor: "red",
          },
        },
        {
          when: (row) => row.show === "TRUE",
          style: {
            backgroundColor: "green",
          },
        },
      ],
    }, */
  ];

  useEffect(() => {
    getTaskData();
  }, []);

  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-center text-2xl text-teal-600 font-medium my-3">
        {" "}
        Total Doctor {taskData.length}
      </h1>
      <DataTable 
        title="Manage Doctor"
        columns={columns}
        customStyles={customStyles} 
        data={taskData}
        fixedHeader
        progressPending={loading}
        pagination
        caseInsensitiveSort={caseInsensitiveSort}
        selectableRows
        selectableRowsHighlight
      />
    </div>
  );
};

export default Table;
