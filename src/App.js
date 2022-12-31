import AOS from "aos";
import "aos/dist/aos.css";

import { useContext, useEffect } from "react";
import { Toaster } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { RouterProvider } from "react-router-dom";

import "swiper/css/bundle";
import "./App.css";
import { AuthContext } from "./contexts/AuthProvider";
import router from "./Routes/Routes";
import { bookingAction } from "./stateManagement/bookingSlice";
import 'react-photo-view/dist/react-photo-view.css';

function App() {
  const { user } = useContext(AuthContext);
  const dispatch = useDispatch();
  const email = user?.email;
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
  const reload = useSelector((state) => state.bookedAppointments.reload);
  console.log(reload);
  useEffect(() => {
    const getbooked = async () => {
      const res = await fetch(
        `http://localhost:5000/appointment?email=${email}`
      );
      const data = await res.json();
      dispatch(bookingAction.setBookedAppointments(data));
    };
    getbooked();
  }, [email, dispatch, reload]);
  const bookedData = useSelector(
    (state) => state.bookedAppointments.bookedAppointments
  );
  console.log(bookedData);
  return (
    <div className="bg-gradient-to-r from-slate-50 via-slate-50 to-slate-50 shadow-lg rounded-2">
      <div className="max-w-[1140]">
        <RouterProvider router={router}></RouterProvider>
        <Toaster position="top-center" reverseOrder={false}></Toaster>
      </div>
    </div>
  );
}

export default App;
