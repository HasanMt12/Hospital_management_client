import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Routes/Routes';
import toast, { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='w-11/12 mx-auto '>
      <RouterProvider router={router}></RouterProvider>
      <Toaster position="top-center" reverseOrder={false}></Toaster>
    </div>
  );
}

export default App;
