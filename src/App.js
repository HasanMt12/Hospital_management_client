
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
    <div className='w-11/12 mx-auto '>
    <RouterProvider router={router}></RouterProvider>
    <Toaster position="top-center" reverseOrder={false}></Toaster>
  </div>
  );
}

export default App;
