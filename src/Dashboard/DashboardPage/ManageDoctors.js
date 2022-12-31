import axios from "axios";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { BiZoomIn } from "react-icons/bi";

const ManageDoctors = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(false);

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
        // minWidth: "-7px", // override the row height
         minHeight: '72px',
      },
    },
    headCells: {
      style: {
        paddingLeft: "8px", // override the cell padding for head cells
        paddingRight: "8px",
        margin: "2px",
        backgroundColor: "rgb(18, 126, 111)",
        color: "white",
        borderRadius: "5px",
        text: "bold",
        fontSize: "15px",
      },
    },
    cells: {
      style: {
        paddingLeft: "25px", // override the cell padding for data cells
        // paddingRight: '8px',
        textAlign: "center",
        border: "1px dotted teal",
        borderRadius: "5px",
        color: "black",
        margin: "2px",
      },
    },
  };
  const getDoctorData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/doctor");
      setLoading(false);
      setDoctorData(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(doctorData);
  const columns = [
    {
      name: "Doctor Code",
      selector: (row) => row.doctorCode,
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
          <PhotoProvider>
            <PhotoView src={row.img}>
              <img
                className="h-20 w-16 cursor-pointer "
                src={row.img}
                alt=""
              ></img>
            </PhotoView>
          </PhotoProvider>{" "}
          <div className="-mt-8 cursor-pointer ">
            <BiZoomIn></BiZoomIn>{" "}
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
  ];

  useEffect(() => {
    getDoctorData();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-center text-teal-600 fw-bold text-2xl my-8 ">
        {" "}
        <span className="text-gray-900">Total Doctor :</span>{" "}
        {doctorData.length}
      </h2>

      <DataTable
        columns={columns}
        data={doctorData}
        fixedHeader
        pagination
        caseInsensitiveSort={caseInsensitiveSort}
        progressPending={loading}
        selectableRows
        selectableRowsHighlight
        customStyles={customStyles}
      />
    </div>
  );
};

export default ManageDoctors;
