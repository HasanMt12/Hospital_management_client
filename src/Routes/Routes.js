import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../Layout/DashboardLayout";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Register/Login/Login";
import SignUp from "../Pages/Register/SignUp/SignUp";
import ErrorPage from "../Pages/Shared/ErrorPage";
import PrivateRoutes from "./PrivateRoutes";

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
            } 
        ]
    },
    {
        path: "/dashboard",
        errorElement: <ErrorPage></ErrorPage>,
        element: (
            <DashboardLayout></DashboardLayout>
        /*   <PrivateRoutes>
          </PrivateRoutes> */
        ),
        children: [
          /* {
            path: "/dashboard/myOrders",
            element: ,
          }, */
          
        ],
      },
])
export default router; 