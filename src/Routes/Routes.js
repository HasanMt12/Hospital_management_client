import { createBrowserRouter } from "react-router-dom";


import Dashform from "../Dashform";


import DashboardLayout from "../Layout/DashboardLayout";

import Main from "../Layout/Main";
import Tables from "../Layout/Tables";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login/Login";
import ServicesPage from "../Pages/Home/Services/AllServices/ServicesPage";
import SignUp from "../Pages/Register/SignUp/SignUp";
import DoctorDetails from "../Pages/Shared/DoctorDetails/DoctorDetails";
import ErrorPage from "../Pages/Shared/ErrorPage";


const router = createBrowserRouter([

   {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
             {
                path: '/signup',
                element: <SignUp></SignUp>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
               path: '/services',
               element: <ServicesPage></ServicesPage>
            },
            {
                path: '/dash',
                element: <Dashform/>
            } ,
             {


        path: "/doctor/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:5000/doctor/${params.id}`),
        element: <DoctorDetails />,
      },

    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        path: "table",
        element: <Tables></Tables>,
      },
    ],
  },
]);
export default router;