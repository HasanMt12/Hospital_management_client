import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login/Login";
import SignUp from "../Pages/Register/SignUp/SignUp";
import DoctorDetails from "../Pages/Shared/DoctorDetails/DoctorDetails";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Dashform from "../Dashform";

import Blogs from "../Pages/Blogs/Blogs";
import DashbordLayoutes from "../Layout/DashbordLayoutes/DashbordLayoutes";
import Users from "../Dashboard/DashboardPage/Users";
import AddDoctor from "../Dashboard/DashboardPage/AddDoctor";
import Contact from "../Pages/Contact/Contact";
import InsuranceWeAccept from "../Pages/InsuranceWeAccept/InsuranceWeAccept";
import MissionVission from "../Pages/MissionVission/MissionVission";
// import Departments from "../Pages/AllServices/Departments";

import About from "../Pages/Home/About/About";

import ServiceByCategory from "../Pages/AllServices/Service/ServiceByCategory";
import Departments from "../Pages/AllServices/Department/Departments";


import AdminRoutes from "./AdminRoute/AdminRoutes";
import Appointment from "../Dashboard/DashboardPage/Appointment";

import AddStuff from "../Dashboard/AddStuff/AddStuff";
import AmbulanceService from "../Pages/Contact/AmbulanceService";
import WorkingSchedule from "../Dashboard/DashboardPage/WorkingSchedule";
import ManageDoctor from "../Dashboard/DashboardPage/ManageDoctor";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/services",
        element: <Departments />,
      },
      {
        path: "/departments/:treatment",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/departments/${params.treatment}`),
        element: <ServiceByCategory />,
      },
      {
        path: "/dash",
        element: <Dashform></Dashform>,
      },

      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/acceptinsurance",
        element: <InsuranceWeAccept />,
      },
      {
        path: "/missionvission",
        element: <MissionVission />,
      },
      {
        path: "/doctor/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctor/${params.id}`),
        element: <DoctorDetails />,
      },
       {
        path: "/ambulanceService",
        element: <AmbulanceService></AmbulanceService>
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashbordLayoutes></DashbordLayoutes>,
    children: [
      {
        path: "/dashboard/users",

        element:  <AdminRoutes><Users /></AdminRoutes>

      },
      {
        path: "/dashboard/addDoctors",
        element: <AddDoctor />,
      },


       {
        path: "/dashboard/appointments",
        element: <Appointment></Appointment>
       },
      {
        path: "/dashboard/addStuff",
        element: <AddStuff />

      },
      {
        path: "/dashboard/workingSchedule",
        element: <WorkingSchedule></WorkingSchedule>

      },
      {
        path: "/dashboard/manageDoctors",
        element: <ManageDoctor></ManageDoctor>

      },
     
    ]
  }

]);
export default router;
