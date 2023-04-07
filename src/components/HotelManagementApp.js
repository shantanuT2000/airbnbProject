import React from 'react'
import HotelManagement from './HotelManagement';
import NavBar from './NavBar';
import Footer from './Footer';


const HotelManagementApp = () => {
  const navItems=[{id:1,path:"/signup",item:"Register"},{id:2,path:"/login",item:"Login"}];
  
  return (
      
      <div className="">
    <NavBar Navi={navItems}/>
    <HotelManagement/>
    <hr />
   <Footer/>
    
     
    </div>
   

  );
}

export default HotelManagementApp