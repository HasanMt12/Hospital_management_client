
import './App.css';
import "swiper/css/bundle";
import { Toaster } from 'react-hot-toast';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);
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
