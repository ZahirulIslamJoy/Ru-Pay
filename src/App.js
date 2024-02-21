import React from 'react';
import NavBar from './components/shared/NavBar';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';


const App = () => {
  return (
    <div>
       <NavBar></NavBar>
       <ToastContainer></ToastContainer>
       <Outlet></Outlet>
    </div>
  );
};

export default App;