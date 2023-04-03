import React,{useState} from 'react'
import HotelManagement from './HotelManagement';
import {Routes,Route} from 'react-router-dom';
import Signup from "./Signup";
import Login from "./Login";
import NavBar from './NavBar';
import Footer from './Footer';

const HotelManagementApp = () => {
  const navItems=[{id:1,path:"/signup",item:"Register"},{id:2,path:"/login",item:"Login"}];
  const[Navi,setNav] = useState(navItems);
  return (
    <div className="">
    <NavBar Navi={Navi}/>
    <Routes>
            <Route exact path='/' element={<HotelManagement/>}></Route>
            <Route path='/signup' element={<Signup/>}></Route>
            <Route path='/login' element={<Login/>}></Route>

    </Routes>
    <hr />
   <Footer/>
    
     
    </div>
  );
}

export default HotelManagementApp