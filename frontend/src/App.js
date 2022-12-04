import React  from 'react';
import Navbar from "./components/navbar/Navbar";
import Home from "./components/Home";
import AddInstitution from './components/dashboard/adminDashboard/AddInstitution';
import RequestForKYC from './components/dashboard/customerDashboard/RequestForKYC';
import './App.css';
import AdminDashboard from './components/dashboard/adminDashboard/AdminDashboard';
import {HashRouter, Route, BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className='App'>
      {/* <AdminDashboard></AdminDashboard> */}
      <HashRouter>
          <Routes>
                <Route exact path="/" element={<Home/>}>  </Route>
                <Route  path='/Admindashboard' element={<AdminDashboard/>}></Route>
                <Route  path='/AddInstitution' element={<AddInstitution/>}></Route>
          </Routes>
      </HashRouter> 
     {/*<Home/>
     
      <AddInstitution/> 
       <RequestForKYC/>*/}
    </div>
  );
}

export default App;
